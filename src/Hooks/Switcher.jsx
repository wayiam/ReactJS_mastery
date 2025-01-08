import React, {useState} from 'react'

function Switcher() {

    const [sw, setSw] = useState()
  return (
    <div>
        {sw? <span>Dark</span>: <span>Light</span>}
        <br />
        <input type="text" key={sw? "dark": "light"}/>
        <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switcher