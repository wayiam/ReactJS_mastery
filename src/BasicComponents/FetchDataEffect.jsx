import React, { useState, useEffect } from 'react'

export const FetchDataEffect = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            if (data && data.length) setData(data)
            console.log(data)
        }
        getData();
    }, [])

    return (
        <ul>
            {data.map((element) =>
                <section>
                    <h4 key={element.id}>{element.id}</h4>
                    <h3>{`Title:${element.title}`}</h3>
                    <p>{`Description:${element.body}`}</p>
                </section>

            )}
        </ul>
    )
}
