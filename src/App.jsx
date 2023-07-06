import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Content } from './components/Content'
import { Sidebar } from './components/SideBar'
import './App.css'

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/articulos/')
      .then(res => {
        setTableData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex min-h-screen flex-row bg-gray-100 dark:bg-zinc-700'>
      <Sidebar />
      <Content tableData={tableData} />
    </div>
  )
}

export default App
