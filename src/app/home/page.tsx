'use client'
import AppCard from '@/components/app.card';
import AppTable from '@/components/app.table';
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const HomePage = () => {
  useEffect(()=> {
    document.title = 'Trang chủ'
  }, [])
  return (
    <div>
      <AppCard />
    </div>
  )
}

export default HomePage
