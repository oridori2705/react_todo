import React,{useState} from 'react'



const List=React.memo(({id,title,completed,todoData,setTodoData,provided,snapshot}) => {


    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);


    const handleClick=(id)=>
    {
        //this.todoData => this.state.todoDota로 바꿔줘야함 호출한 곳도 바꿔줘야함
        let newTodoData = todoData.filter(data=>data.id !==id)
        setTodoData(newTodoData); //todoData를 newTodoData로 업데이트
        localStorage.setItem("todo",JSON.stringify(newTodoData))
    }
    const handleCompleChange=(id)=>{
        let newTodo=todoData.map(data=>{
            if(data.id===id){
            data.completed=!data.completed
            }
            return data;
        })
        setTodoData(newTodo)
        localStorage.setItem("todo",JSON.stringify(newTodo))
    }


    const handleEditChange=(e)=>{
        setEditedTitle(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTododata = todoData.map((data)=>{
            if(data.id===id){
                data.title = editedTitle;
            }
            return data;
        });
        setTodoData(newTododata);
        localStorage.setItem("todo",JSON.stringify(newTododata))
        setIsEditing(false);
    }
    //그리고 form 태그를 이용해서 대표적으로 얻을 수 있는 기능은
    //따로 엔터 이벤트가 발생했을 때 form 안에 type으로 submit이 들어간 input의 함수를 실행시켜준다는 것입니다. 
    //form을 사용하지 않으면 따로 엔터키를 눌렀을 때 어떠한 액션이 취해져야 하는지 설정해줘야 합니다. 감사합니다.
    if(isEditing){
        return (
            <div>
                <div className={`flex itme-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                    <div className='items-center'>
                        <form onSubmit={handleSubmit}>
                            <input
                            value={editedTitle}
                            onChange={handleEditChange}
                            className="w-full px-3 py-2 mr-4 text-gray-500 rounded">
                            </input>
                        </form>
                        
                    </div>
                    <div className='items-center'>
                        <button className='px-4 py-2 float-right' onClick={()=>setIsEditing(false)}>x</button>
                        <button className='px-4 py-2 float-right' onClick={handleSubmit} type="submit">save</button>
                    </div>
                </div>
            </div>
          )
    }
    else{
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
                            <button className='px-4 py-2 float-right' onClick={()=>setIsEditing(true)}>edit</button>
                        </div>
                    </div>
            </div>
          )
    }
  
})

export default List;
