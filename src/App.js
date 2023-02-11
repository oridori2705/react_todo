import React,{useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App (){

  const [todoData, setTodoData] = useState([])
  const [value, setvalue] = useState("")
  

  const handleSubmit =(e)=>{
    e.preventDefault(); //입력 누르면 페이지 새로고침 안되게 막음

    let newTodo={
      id : Date.now(),
      title : value,
      completed : false
    }
    setTodoData(prev=>[...prev,newTodo]); //인수에 함수를 이용하면 prev가 이전의 todoData 값을 가져올 수 있다.
  }

  const handleRemoveClick=()=>{
    setTodoData([]);
  }
  return(
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-5 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setvalue={setvalue}/>
      </div>
    </div>
  );
  
}