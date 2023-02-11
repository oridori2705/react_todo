import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

export default function Lists({todoData,setTodoData}) {

    
    //result는 객체다.  
    // source : 원래 어디에 있었는지와 
    //destination : 어디로 이동하는지가  나오게 된다.
    const handleEnd=(result)=>{
        if(!result.destination) return;

        const newTodoData =todoData;
        //splice(제거할 인덱스, 요소 갯수); [reorderedItem] => 구조분해 할당 splice로 제거하면 배열로 요소가 나오니까 [] 묶어줌으로써 온전한 객체형 데이터를 받는다.
        const [reorderedItem] = newTodoData.splice(result.source.index,1); 


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
                                    <List
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        completed={data.completed}
                                        todoData={todoData}
                                        setTodoData={setTodoData}
                                        provided={provided}
                                        snapshot={snapshot}
                                    />
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
