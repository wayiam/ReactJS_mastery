import React from 'react'

function UserStatus({ loggedIn, isAdmin }) {

    if (loggedIn && isAdmin) {
        return <p>Welcome Admin!</p>
    } else if (loggedIn) {
        return <p>Welcome User!</p>
    }
    return <p>Please LogIn!</p>

}

export default UserStatus