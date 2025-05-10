import React,{ useState } from 'react'

export default function Child({sendDataToParent }) {
    const [data, setData] = useState("");

    function handleClick() {
        sendDataToParent(data);
        setData("");
    }
  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  )
}
