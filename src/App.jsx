import React, { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { Sidebar } from './components/SideBar';
import axios from 'axios';
import './App.css';
import Login from './components/Login';//componente Login

function App() {
  const [tableData, setTableData] = useState([]);
  const [tableTitle, setTableTitle] = useState('');
  const [tableNameToUrl, setTableNameToUrl] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState();//constante para el inico de sesion


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
      {isLoggedIn ? (
        <>
          <Sidebar
            setTableTitle={setTableTitle}
            setTableNameToUrl={setTableNameToUrl}
          />
          <Content
            tableData={tableData}
            setTableData={setTableData}
            tableTitle={tableTitle}
            tableNameToUrl={tableNameToUrl}
          />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} /> // Renderiza el componente Login
      )}
    </div>
  );
  
}

export default App;
