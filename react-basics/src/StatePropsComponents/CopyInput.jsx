import React, {useState} from 'react'
import PopupCopied from './PopupCopied.jsx'

function CopyInput() {

    const [input, setInput] = useState('');
    const [copy, setCopy] = useState(false)

    const handleClick = (e) => {
        navigator.clipboard.writeText(input).then(()=>
            setCopy(true),
            setTimeout(()=>setCopy(false), 2000)
        )
    }

    return (
        <div>
            <input type="text" id="inputVal" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Copy</button>
            <PopupCopied input={input} copied={copy}/>
        </div>
    )
}

export default CopyInput