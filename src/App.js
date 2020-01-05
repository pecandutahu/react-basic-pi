import React, {useState, useEffect} from 'react';
import './App.css';
import Insert from './components/InsertTodoList';
import Lists from './components/Lists';
import axios from 'axios';

function App() {

  // const initialLists = [
  //   {id:Math.random(),text:"text1"},
  //   {id:Math.random(),text:"text2"},
  //   {id:Math.random(),text:"text3"}
  // ];

  const[lists,setLists] = useState([]);
  const addList = (inputText)=> {
    setLists([...lists,{id:Math.random(),text:inputText}]);
  }
  const delList = (id) => {
    setLists(lists.filter((list) => {
      return  list.id !== id ? list : null;
    }));
  };

  useEffect(()=>{
    axios.get('http://localhost:5000')
    .then((res) => {
      const lists = res.data
      setLists(lists);
    });
  },[])

  return (
    <div className="App">
      <h1> Selamat Datang React JS</h1>
      <h2> Belajar React dalam satu hari</h2>
      <p> Belajar React dalam satu hari Garansi Uang Kembali</p>
      <Insert addList = {addList} />
      <Lists lists={lists} delList={delList}/>

    </div>
  );
}

export default App;
