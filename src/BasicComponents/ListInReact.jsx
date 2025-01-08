import React from 'react'

const ListInReact = () => {

    const users = [
        { name: 'Alice', username: 'alice123', email: 'alice@example.com' },
        { name: 'Bob', username: 'bob456', email: 'bob@example.com' },
        { name: 'Charlie', username: 'charlie789', email: 'charlie@example.com' },
        { name: 'David', username: 'david101', email: 'david@example.com' },
        { name: 'Eve', username: 'eve202', email: 'eve@example.com' }
    ];

    return (
        <main>
            {users.map(user =>(
            <ul key={Math.random()}>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>
            ))}
        </main>
    )
}

export default ListInReact