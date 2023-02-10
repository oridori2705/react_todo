import React, {Component} from "react";
import "./App.css";

export default class App extends Component{

  btnStyle={
    color: "#fff", // x 를 하얀색으로
    border: "none", // 
    padding: "5px 9px", // x 표시 가운데로가게끔
    borderRadius: "50%", // 동그라미 모양으로
    cursor: "pointer", //커서 타입
    float: "right" //오른쪽 정렬
  }
  // to do 목록이 체크가 되면 동적으로 줄 긋는 형태가 되도록 하기 위해 함수로 적용
  getStyle = (completed) =>{
      return{
        padding: "10px",
        borderBottom: "1px #ccc dotted", // 아래 구분선
        textDecoration : completed ? "line-through" : "none"
      }
  }
  state={
      todoData :[
    ],
    value : ""
  }
  handleSubmit =(e)=>{
    e.preventDefault(); //입력 누르면 페이지 새로고침 안되게 막음

    let newTodo={
      id : Date.now(),
      title : this.state.value,
      completed : false
    }
    this.setState({todoData : [...this.state.todoData,newTodo],value : ""})

  }

  handleClick=(id)=>
  {
    //this.todoData => this.state.todoDota로 바꿔줘야함 호출한 곳도 바꿔줘야함
    let newTodoData = this.state.todoData.filter(data=>data.id !==id)
    this.setState({todoData: newTodoData}); //todoData를 newTodoData로 업데이트
  } 
  handleCahnge=(e)=>
  {
    this.setState({value : e.target.value}) 
  }

  handleCompleChange=(id)=>{
    let newTodo=this.state.todoData.map(data=>{
      if(data.id===id){
        data.completed=!data.completed
      }
      return data;
    })
    this.setState({todoData : newTodo})
  }
  render(){
    return(
      <div>
        <div>
          <div>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data)=>( 
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p> 
                <input type="checkbox" defaultChecked={false} onChange={()=>this.handleCompleChange(data.id)}/>
                {data.title}
                <button style={this.btnStyle} onClick={()=>this.handleClick(data.id)}>x</button>
              </p>
              </div>
          ))}
          <form style={{display : 'flex'}} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{flex:'10', padding : "5px"}}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleCahnge}>
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
}