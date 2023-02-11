import React from 'react'

export default function List({todoData,setTodoData}) {

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
    const handleClick=(id)=>
    {
        //this.todoData => this.state.todoDota로 바꿔줘야함 호출한 곳도 바꿔줘야함
        let newTodoData = todoData.filter(data=>data.id !==id)
        setTodoData(newTodoData); //todoData를 newTodoData로 업데이트
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
    return (
        <div>
            {todoData.map((data)=>( 
            <div style={getStyle(data.completed)} key={data.id}>
                <p> 
                <input type="checkbox" defaultChecked={false} onChange={()=>handleCompleChange(data.id)}/>
                {data.title}
                <button style={btnStyle} onClick={()=>handleClick(data.id)}>x</button>
                </p>
                </div>
            ))}
        </div>
    )
}
