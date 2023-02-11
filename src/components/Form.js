import React from 'react'

function Form({value,setvalue,handleSubmit}) {
    
    
    const handleCahnge=(e)=>
    {
        setvalue(e.target.value) 
    }
    return (
        <div>
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
    )
}

export default Form