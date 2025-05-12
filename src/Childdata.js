import React, { useState } from 'react'

export default function Childdata(props) {
    const [name,setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData(name);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button>Submit</button>
        </form>
    </div>
  )
}