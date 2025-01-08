import React from 'react'

const DynamicContent = () => {

    const message = "Hello World!"
    const currentDateObject = new Date();
    const date  = currentDateObject.getDate();
    const month = currentDateObject.getMonth()+1;
    const year = currentDateObject.getMonth();

    return (
        <>
          <div>
          <h1>{message}</h1>
          <p>{`Date:${date}-${month}-${year}`}</p>
          </div>
        </>
    )
}

export default DynamicContent;