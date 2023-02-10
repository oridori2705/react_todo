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
  getStyle = () =>{
      return{
        padding: "10px",
        borderBottom: "1px #ccc dotted", // 아래 구분선
        textDecoration : "none"
      }
  }
  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    },
  ]
  
  render(){
    return(
      <div calssName="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.todoData.map((data)=>( //data라는 변수로 선언
          //<p></p> 태그는 paragraph, 즉 문단의 약자로, 하나의 문단을 만들 때 쓰입니다. 없어도 됨
          //나열을 해줄 때는 key속성으로 배열의 유니크한 값으로 지정한다.
            <div style={this.getStyle()} key={data.id}>
              <p> 
                <input type="checkbox" defaultChecked={false}/>
                {data.title}
                <button style={this.btnStyle}>x</button>
              </p>
              </div>
          ))}
        </div>
      </div>
    )
  }
}