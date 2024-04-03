'use client'
import ProductImages from '@/components/product/image.gallery'
import React from 'react'
import styles from "./styles.module.scss"
import { InputNumber, Rate, Tag } from 'antd'
import { CheckCircleTwoTone, DollarTwoTone, HeartOutlined, PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons'
import TableCPUInfor from '@/components/product/tableCPU.info'
import TableRAMInfor from '@/components/product/tableRAM.info'
import TableMonitorInfor from '@/components/product/tableMonitor.info'
import ListProduct from '@/components/app.products'

const ProductDetail = () => {
  return (
    <>
      <div className={styles.inforTop}>
        <div className={styles.image}>
          <ProductImages />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <span>Thương hiệu: <span className={styles.brand}>Asus</span></span>
            <h1>Laptop Asus Expertbook B1502CBA B1502 (Intel Core i5-1235U | RAM 8GB | 512GB SSD | Intel UHD Graphics | 15.6 inch Full HD | Win 11 bản quyền) - Hàng Chính Hãng</h1>
            <div>
              <Rate disabled defaultValue={5} /> (10) | Đã bán: 120
            </div>
            <div className={styles.price}>14.950.000đ</div>

            <p>Tình trạng: <Tag color="green">còn hàng</Tag></p>

            <div className={styles.quantity}>Số lượng: <InputNumber min={1} max={10} defaultValue={3}
            // onChange={onChange} 
            />
            </div>

            <div className={styles.buttons}>
              <div>
                <button className={styles.add}>Thêm vào giỏ hàng</button>
              </div>
              <div>
                <button className={styles.buy}>Mua Ngay</button>
              </div>
            </div>
            <div className={styles.heart}>
              <span>Thêm vào danh sách yêu thích</span>
              <HeartOutlined twoToneColor="#eb2f96" />
            </div>
            <div className={styles.compare}>
              Thêm vào danh sách so sánh
              <PlusCircleOutlined twoToneColor="green" />
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>An tâm mua sắm</div>
            <ul>
              <li><CheckCircleTwoTone /> Được mở hộp kiểm tra khi nhận hàng</li>
              <li><RollbackOutlined /> Được hoàn tiền 111% nếu hàng giả</li>
              <li><DollarTwoTone /> Đổi trả miễn phí trong 7 ngày nếu sản phẩm lỗi</li>
            </ul>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>Mô tả chi tiết sản phẩm</div>
            <div className={styles.description}>
              Thông số sản phẩm

              Dell Latitude E5470
              CPU : Intel Core i5-6200U/6300U
              RAM : 8GB DDR3
              Ổ Cứng : SSD 240Gb/256GB
              VGA : Intel HD Graphics 520
              Màn Hình: 14.0 Led HD (Full HD 1920x1080 + Thêm 500k)
              PIN/Battery: 4 cell
              Trọng lượng: 1.7kg
              OS : Windows 10 Professional 64Bit
              Đặc điểm nổi bật Lapotop Cũ Dell Latitude E5470 Core i5* 6200U - RAM 8GB - SSD 256G - Intel HD Graphics 520 - MH 14.0"HD

              Mô tả chi tiết
              Dell Latitude E5470 có thiết kế màu đen và kiểu dáng chắc chắn. Phần vỏ được làm bằng hợp kim nhôm nên có khả năng chịu các lực va đập vừa phải mà không làm máy bị biến dạng hoặc trầy xước, cùng với bàn phím cũng được thiết kế chống tràn.

              Hãng Dell tuyên bố Dell latitude  E5470 đã vượt qua khâu kiểm tra độ bền quân sự với tiêu chuẩn MIL-STD-810G. Tức là Dell Latitude E5470 có thể hoạt động ở môi trường nhiệt độ cao lên tới 60 độ C, nhiệt độ thấp nhất mà Dell Latitude E5470 vẫn có thể hoạt động là -6 độ và độ cao cao là 4572m.



              Keyboard và Touchpad

              Một chuyên gia đã nói Dell latitude e5470 là một bàn phím tuyệt vời. Để khẳng định câu khen ngợi của mình , ông đã kiểm tra sự nhạy của bàn phím và kết quả là ông đã gõ được 79 từ/phút với độ chính xác 100% trên website Ông cho rằng: " Keyboard của Dell Latitude E5470 thật sự rất đáng khen ngợi, có thể nói đây là một trong những chiếc Laptop có bàn phím tuyệt hảo. Nó chính xác đến từng mm". Và touchpad của Dell Latitude E5470 cũng được sản xuất với yêu cầu kỹ thuật cao, sự mịn màng cùng với khả năng điều hướng tốt góp phần nâng tầm chất lượng của Dell Latitude E5470.





              Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.titleInfo}>Thông số kỹ thuật</div>
            <TableCPUInfor />
            <TableRAMInfor />
            <TableMonitorInfor />
          </div>
        </div>
      </div>
      <div className={styles.relateProduct}>
        <ListProduct />
      </div>
    </>
  )
}

export default ProductDetail;