import React, { useState } from "react";


const AddIngredientForm = ({ addIngredient }) => {

    const [name, setName] = useState('')
    const [superclass, setSuperclass] = useState('')
    const [quantity, setQuantity] = useState(0)

    const handleNameChange = e => setName(e.target.value)
    const handleSuperclassChange = e => setSuperclass(e.target.value)
    const handleQuantityChange = e => setQuantity(e.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        const ingredient = {
            name,
            superclass,
            quantity
        }
        addIngredient(ingredient)
        setName('')
        setSuperclass('')
        setQuantity(0)
    }



    return (
        <>
            <form onSubmit={handleSubmit} id="ingredients-form">
                <h2>Add an ingredient:</h2>
                Item name:<input
                    type="text"
                    onChange={handleNameChange}
                    name="name"
                    id="name"
                    value={name}
                ></input><p />
                Is a type of: <input
                    type="text"
                    onChange={handleSuperclassChange}
                    name="superclass"
                    id="superclass"
                    value={superclass}
                ></input><p />
                Quantity: <input
                    type="number"
                    onChange={handleQuantityChange}
                    name="quantity"
                    id="quantity"
                    value={quantity}
                ></input><p />
                <input type="submit" value="save" id="save"></input>
            </form>
        </>
    )
}

export default AddIngredientForm