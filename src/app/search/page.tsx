'use client'
import { Button, Checkbox, Col, Divider, Form, InputNumber, Pagination, Rate, Row, Spin, Tabs } from 'antd'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import AppCard from '@/components/app.card';
import { Brand, ListBrand, Product } from '@/types/property.types';
import handleProducts from '@/api/user.request';
import { useRouter, useSearchParams } from 'next/navigation';
enum SortBy {
  TOTAL_SOLD = 'totalSold',
  UPDATED_AT = 'updatedAt',
  PRICE = 'price',
  DECREASE_PRICE = '-price'
}
const SearchPage = () => {
  const items = [
    {
      key: SortBy.TOTAL_SOLD,
      label: 'Phổ biến',
    },
    {
      key: SortBy.UPDATED_AT,
      label: 'Mới nhất',
    },
    {
      key: SortBy.PRICE,
      label: 'Giá thấp đến cao',
    },
    {
      key: SortBy.DECREASE_PRICE,
      label: 'Giá cao đến thấp',
    },
  ];
  const [listProduct1, setListProduct1] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const brand: string | any = searchParams.get('brand');
  const [brandIds, setBrandIds] = useState<string>(brand);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>('-totalSold');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(30000000);
  const [orderBy, setOrderBy] = useState('asc')
  const [query, setQuery] = useState<string>(`brandIds=${brandIds}&index=${pageIndex}&limit=${pageSize}&field=${sortBy}&minPrice=${fromPrice}&maxPrice=${toPrice}&direction=${orderBy}`);
  const [totalItem, setTotalItem] = useState(10);

  //const router = useRouter()
  //const searchTerm = router.query || 'laptop';
  const handleGetProducts = async () => {
    try {
      setQuery(`brandIds=${brandIds}&index=${pageIndex}&limit=${pageSize}&field=${sortBy}&minPrice=${fromPrice}&maxPrice=${toPrice}&direction=${orderBy}`);
      const res: any = await handleProducts.getActiveProducts(query);
      if (res) {
        setListProduct1(res.items);
        setTotalItem(res.totalItems);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const changePageIndex = (pageIndex: number) => {
    setPageIndex(+pageIndex - 1)
  }
  useEffect(() => {
    handleGetProducts();
    document.title = 'Tìm kiếm'
  }, [pageIndex, pageSize, sortBy])

  const [listBrand, setListBrand] = useState<Brand[]>([]);
  const handleGetListBrands = async () => {
    try {
      let res: any = await handleProducts.getListBrands();
      if (res) {
        setListBrand(res.items);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleFilterProductsByProperty = (key: string) => {
    console.log(key);
    switch (key) {
      case SortBy.TOTAL_SOLD:
        setSortBy(SortBy.TOTAL_SOLD);
        setOrderBy('desc');
        break;
      case SortBy.UPDATED_AT:
        setSortBy(SortBy.UPDATED_AT);
        setOrderBy('desc');
        break;
      case SortBy.PRICE:
        setSortBy(SortBy.PRICE);
        break;
      case SortBy.DECREASE_PRICE:
        setSortBy(SortBy.DECREASE_PRICE);
        setOrderBy('desc');
        break;
    }
  }
  const onChangeForm = (changedVal: any, values: any) => {
    if (!!changedVal?.category) {
      setBrandIds(values.category.join(','));
    }
    if (!!changedVal.range) {
      setFromPrice(values.range.from);
      setToPrice(values.range.to);
    }
  }
  const handleApplyForm = async () => {
    await handleGetProducts();
  }
  useEffect(() => {
    handleGetListBrands();
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <Form
            onValuesChange={(changedValues, values) => onChangeForm(changedValues, values)}
          >
            <div className={styles.titleMenu}>
              Bộ lọc tìm kiếm
            </div>
            <Form.Item
              name="category"
            >
              <Checkbox.Group>
                <Row>
                  {listBrand?.map((item: Brand) => <Col key={item.id} span={24}>
                    <Checkbox value={item.id}>{item.name}</Checkbox>
                  </Col>)}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Divider />
            <Form.Item>
              <p className={styles.priceTitle}>Khoảng giá</p>
              <div className={styles.price}>
                <Form.Item name={["range", "from"]}>
                  <InputNumber placeholder='đ từ' width={100} />
                </Form.Item>
                -
                <Form.Item name={["range", "to"]} className={styles.toPrice}>
                  <InputNumber placeholder='đ đến' />
                </Form.Item>
              </div>
            </Form.Item>
            <Button type="primary" block onClick={handleApplyForm}>Áp dụng</Button>
            <Divider />
            <p>Đánh giá</p>
            {[5, 4, 3, 2, 1].map((item: number) => {
              return <div key={item} className='review' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Rate value={item} /> {item} sao
              </div>
            })}
          </Form>
        </div>
        <div className={styles.right}>
          <Spin spinning={false} tip="...Loading">
            <div className={styles.bookDisplay}>
              <Tabs
                defaultActiveKey={SortBy.TOTAL_SOLD}
                items={items}
                onChange={handleFilterProductsByProperty}
              />
              <div className={styles.listBook}>
                {
                  listProduct1?.map((item) => {
                    return (
                      <AppCard key={item.id} product={item} />
                    )
                  })
                }
              </div>
              <div className={styles.pagination}>
                <Pagination
                  onChange={changePageIndex}
                  total={totalItem}
                  current={+pageIndex + 1}
                  pageSize={pageSize}
                />
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SearchPage);
