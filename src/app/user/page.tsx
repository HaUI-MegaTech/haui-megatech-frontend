'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import {
  Form,
  FormProps,
  Input,
  Select,
} from 'antd';
import handleAuth from '@/api/auth.request';
import handleAddress from '@/api/address.request';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FieldType = {
  firstName: string
  lastName: string
  avatar: File
  email: string
  phoneNumber: string
};
const UserInfo = () => {
  useEffect(() => {
    document.title = 'Thông tin người dùng'
  })
  const userInfomation = JSON.parse(localStorage.getItem('haui-megatech-user-infor') ?? '{}');
  console.log('user: ', userInfomation);
  type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log('file: ', fileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (values: FieldType) => {
    console.log('Success:', values);
    try {
      let res = await handleAuth.updateUserInfor(values);
      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    };
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [codeProvince, setCodeProvince] = useState<number>(14);
  const [codeDistrict, setCodeDistrict] = useState<number>(116);
  const [codeWard, setCodeWard] = useState(0);

  const handleGetProvinces = async () => {
    try {
      const res: any = await handleAddress.getAllProvinces();
      if (res) {
        console.log(res.items);
        let provinceArr = res.items.map((item : any) => {
          return {
            value: item.code,
            label: item.name
          }
        });
        setProvinces(provinceArr);
        console.log(provinces);
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  const handleChangeProvince = (value: { code: string; label: React.ReactNode }) => {
    console.log(value);
    setCodeProvince(+value)
  };
  const handleGetDistricts = async () => {
    try {
      const res: any = await handleAddress.getAllDistrictsByProvinces(codeProvince);
      if (res) {
        console.log(res.items);
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleChangeDistrict = (value: { code: string; label: React.ReactNode }) => {
    console.log(value);
    setCodeDistrict(+value)
  };
  const handleGetWards = async () => {
    try {
      const res: any = await handleAddress.getAllWardsByDistricts(codeProvince, codeDistrict);
      if (res) {
        console.log(res.items);
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleChangeWard = (value: { code: string; label: React.ReactNode }) => {
    console.log(value);
    setCodeWard(+value)
  };

  useEffect(() => {
    handleGetProvinces();
  }, [])

  useEffect(() => {
    handleGetDistricts();
  }, [codeProvince])

  useEffect(() => {
    handleGetWards();
  }, [codeDistrict])

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <div>
            <Image className={styles.avatar} width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOsBWLrWjZqh1wdvYYD0ooORXZGrEG9gqhiuLh3f6A&s" alt="" />
          </div>
          <div className={styles.leftTopRight}>
            Tài khoản của <br />
            <span className={styles.fullName}>{`${userInfomation.firstName} ${userInfomation.lastName}`}</span>
          </div>
        </div>
        <div className={styles.leftBottom}>
          <ul>
            <li>Thông tin tài khoản</li>
            <li>Quản lý đơn hàng</li>
            <li>Sổ địa chỉ</li>
            <li>Đánh giá sản phẩm</li>
            <li>Sản phẩm bạn đã xem</li>
            <li>Sản phẩm yêu thích</li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Cập nhật thông tin cá nhân</div>
        <div className={styles.rightContent}>
          <div className={styles.basicInfo}>
            <div>
              <Image className={styles.imageUser} width={200} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOsBWLrWjZqh1wdvYYD0ooORXZGrEG9gqhiuLh3f6A&s" alt="" />
            </div>
            <div className={styles.name}>Lương Minh Anh</div>
          </div>
          <div className={styles.form}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ width: '100%', margin: '0 auto' }}
              initialValues={userInfomation}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item<FieldType>
                label="Họ"
                name="firstName"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Tên"
                name="lastName"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Thành phố">
                <Select
                  // name="province"
                  onChange={handleChangeProvince}
                  options={provinces}
                >
                  <Select.Option value={userInfomation.addresses[0].provinceCode}>{userInfomation.addresses[0].province}</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Quận/huyện">
                <Select
                  name="province"
                  onChange={handleChangeDistrict}
                  options={districts}
                >
                  <Select.Option value={userInfomation.addresses[0].districtCode}>{userInfomation.addresses[0].district}</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Xã">
                <Select
                  name="ward"
                  onChange={handleChangeWard}
                  options={wards}
                >
                  <Select.Option value={userInfomation.addresses[0].warCode}>{userInfomation.addresses[0].ward}</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Địa chỉ">
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Điện thoại"
                name="phoneNumber"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Ảnh đại diện"
                name="avatar"
              >
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 5 && '+ Upload'}
                </Upload>
              </Form.Item>
              <Form.Item style={{ textAlign: 'center' }}>
                <button>Cập nhật</button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
