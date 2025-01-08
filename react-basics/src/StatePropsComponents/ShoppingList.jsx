import React, { useState } from 'react'

const ShoppingList = () => {
    const [option, setOption] = useState("")
    const [quantity, setQuantity] = useState(null);
    const [cart, setCart] = useState([])


    const setOptions = (e) => {
        setOption(e);
    }

    console.log(option);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        setCart([
            ...cart,
            {
                option,
                quantity
            }
        ])

        setQuantity('')
        setOption('')

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='options'>Product</label>
                <select name="options" id="cars" value={option} onChange={(e) => setOptions(e.target.value)}>
                    <option value="">Select</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <br />
                <label htmlFor='quantity'>Quantity</label>
                <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button type='submit'>Add to Cart</button>
            </form>
            <ul>
                {
                    cart.map((c, index) => {
                        return (
                            <>
                                <li>{c.option}</li>
                                <li>{c.quantity}</li>
                            </>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default ShoppingList