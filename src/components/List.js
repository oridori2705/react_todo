import React from 'react'

export default function List({id,title,completed,todoData,setTodoData,provided,snapshot}) {
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
        <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex itme-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                <div className='items-center'>
                    <input type="checkbox" defaultChecked={false} onChange={()=>handleCompleChange(id)}/>
                    <span className={completed ? "line-through" : undefined}>{title}</span>
                </div>
                <div className='items-center'>
                    <button className='px-4 py-2 float-right' onClick={()=>handleClick(id)}>x</button>
                </div>
            </div>
    </div>
  )
}
