import React, { useState } from 'react'
import CopyInput from './CopyInput';
import {createPortal} from 'react-dom'


function PopupCopied({ input, copied }) {

  return createPortal(
      <div>Copied to the clipboard</div>,
      document.querySelector("#popup-content")
  )
}

export default PopupCopied