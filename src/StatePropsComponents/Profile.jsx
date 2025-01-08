import React, { useState } from 'react'

const Profile = () => {

    const [profiles, setProfiles] = useState([{ name: "Ram", Age: 27 }])
    const [inputname, setNameField] = useState();
    const [inputage, setAgeField] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();

        setProfiles([
            ...profiles,
            {
                name: inputname,
                Age: inputage
            }
        ])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name' className="block text-lg font-semibold text-gray-700" >Enter Name: </label>
                <input required type="text" id="name" onChange={(e) => { setNameField(e.target.value) }} />
                <label htmlFor='age'>Enter age: </label>
                <input required type="number" id="age" onChange={(e) => { setAgeField(e.target.value) }} />
                <button> Submit Profile</button>
            </form>

            
            <ul>
                {profiles.map((p) => (
                    <li key={Math.random()}>
                        <section>
                            <p>Name: {p.name} Age: {p.Age}</p>
                        </section>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Profile