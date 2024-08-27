import { useState, useEffect } from 'react';
import React from 'react';
import { Skeleton } from 'antd';
import { Card, Space } from 'antd';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [showData, setShowData]=useState(true);
const i=[1,2,3,4,5];
  useEffect(() => {
    setTimeout(()=>{
      setShowData(false)
      const getItems = async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        );
        const data = await response.json();
        setItems(data);
      };
      getItems();
    },3000)
  }, []);
  
  console.log(items);
  
  return (
    <div>
      {showData?
      (
        <div>

<div>{i?.map((it) => (
        <div key={it.id}>
          <Space className='card' direction="vertical" size={16}>
    <Card
      // title="Item:"
      style={{
        alignItems:"center",
        width: 300,
      }}
    >
       <Skeleton />
    </Card>
    </Space>
       </div>
      ))}</div>
        </div>
      ):
      <div>{items?.map((item) => (
        <div key={item.id}>
          {/* <h2>Item: {item.title}</h2> */}

          <Space className='card' direction="vertical" size={16}>
    <Card
      title="Item:"
      style={{
        width: 300,
      }}
    >
      <p>{item.title}</p>
    </Card>
    </Space>
       </div>
      ))}</div>}
      
    </div>
  );
}

export default App;