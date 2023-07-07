import React, { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { Sidebar } from './components/SideBar';
import axios from 'axios';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [tableTitle, setTableTitle] = useState('');
  const [tableNameToUrl, setTableNameToUrl] = useState('');

  // API URL
  const apiURL = 'http://localhost:3000/api';

  // Get data from API
  useEffect(() => {
    if (tableNameToUrl) {
      axios
        .get(`${apiURL}/${tableNameToUrl}`)
        .then((res) => {
          setTableData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tableNameToUrl]);

  return (
    <div className='flex min-h-screen flex-row bg-gray-100 dark:bg-zinc-700'>
      <Sidebar
        setTableTitle={setTableTitle}
        setTableNameToUrl={setTableNameToUrl} />
      <Content
        tableData={tableData}
        setTableData={setTableData}
        tableTitle={tableTitle}
        tableNameToUrl={tableNameToUrl} />
    </div>
  );
}

export default App;
