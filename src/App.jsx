import React, { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import axios from 'axios';
import './App.css';
import Login from './components/Login';

function App() {
  const [tableData, setTableData] = useState([]);
  const [tableTitle, setTableTitle] = useState('');
  const [tableNameToUrl, setTableNameToUrl] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const apiURL = 'http://localhost:3000/api';

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
            userName={userName}
            handleLogout={handleLogout} // Pasar la función handleLogout como prop al Sidebar
          />
          <Content
            tableData={tableData}
            setTableData={setTableData}
            tableTitle={tableTitle}
            tableNameToUrl={tableNameToUrl}
          />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
