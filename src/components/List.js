import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({todoData,setTodoData}) {

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
    //result는 객체다.  
    // source : 원래 어디에 있었는지와 
    //destination : 어디로 이동하는지가  나오게 된다.
    const handleEnd=(result)=>{
        if(!result.destination) return;

        const newTodoData =todoData;

        const [reorderedItem] = newTodoData.splice(result.source.index,1); //splice(제거할 인덱스, 요소 갯수); [reorderedItem] => 구조분해 할당 splice로 제거하며
        console.log(reorderedItem)

        newTodoData.splice(result.destination.index,0,reorderedItem);
        setTodoData(newTodoData);
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId='todo'>
                    {(provided)=>(
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                             {todoData.map((data,index)=>( 
                            <Draggable
                                key={data.id}
                                draggableId={data.id.toString()}
                                index={index}    
                                >
                                {(provided,snapshot)=>(
                                    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                                    className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex itme-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                                        <div className='items-center'>
                                            <input type="checkbox" defaultChecked={false} onChange={()=>handleCompleChange(data.id)}/>
                                            <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                                        </div>
                                        <div className='items-center'>
                                            <button className='px-4 py-2 float-right' onClick={()=>handleClick(data.id)}>x</button>
                                        </div>
                                    </div>
                                )}
                                
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                       
                    )}
                    
                    
                </Droppable>
            </DragDropContext>
            
        </div>
    )
}
