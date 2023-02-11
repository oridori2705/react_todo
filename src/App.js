import React,{useState} from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

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
  

  
  
  return(
    <div>
      <div>
        <div>
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setvalue={setvalue}/>
      </div>
    </div>
  );
  
}