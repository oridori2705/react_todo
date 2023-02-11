import React,{useState} from "react";
import "./App.css";

export default function App (){

  const [todoData, setTodoData] = useState([])
  const [value, setvalue] = useState("")
  const btnStyle={
    color: "#fff", // x 를 하얀색으로
    border: "none", // 
    padding: "5px 9px", // x 표시 가운데로가게끔
    borderRadius: "50%", // 동그라미 모양으로
    cursor: "pointer", //커서 타입
    float: "right" //오른쪽 정렬
  }
  // to do 목록이 체크가 되면 동적으로 줄 긋는 형태가 되도록 하기 위해 함수로 적용
  const getStyle = (completed) =>{
      return{
        padding: "10px",
        borderBottom: "1px #ccc dotted", // 아래 구분선
        textDecoration : completed ? "line-through" : "none"
      }
  }

  const handleSubmit =(e)=>{
    e.preventDefault(); //입력 누르면 페이지 새로고침 안되게 막음

    let newTodo={
      id : Date.now(),
      title : value,
      completed : false
    }
    setTodoData(prev=>[...prev,newTodo]); //인수에 함수를 이용하면 prev가 이전의 todoData 값을 가져올 수 있다.

  }

  const handleClick=(id)=>
  {
    //this.todoData => this.state.todoDota로 바꿔줘야함 호출한 곳도 바꿔줘야함
    let newTodoData = todoData.filter(data=>data.id !==id)
    setTodoData(newTodoData); //todoData를 newTodoData로 업데이트
  } 
  const handleCahnge=(e)=>
  {
    setvalue(e.target.value) 
  }

  const handleCompleChange=(id)=>{
    let newTodo=todoData.map(data=>{
      if(data.id===id){
        data.completed=!data.completed
      }
      return data;
    })
    setTodoData( newTodo)
  }
  
  return(
    <div>
      <div>
        <div>
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data)=>( 
          <div style={getStyle(data.completed)} key={data.id}>
            <p> 
              <input type="checkbox" defaultChecked={false} onChange={()=>handleCompleChange(data.id)}/>
              {data.title}
              <button style={btnStyle} onClick={()=>handleClick(data.id)}>x</button>
            </p>
            </div>
        ))}
        <form style={{display : 'flex'}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex:'10', padding : "5px"}}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleCahnge}>
          </input>
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex:'1'}}/>
        </form>
      </div>
    </div>
  );
  
}