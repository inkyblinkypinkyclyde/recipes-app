import React, { useState } from "react";


const AddIngredientForm = ({ addIngredient }) => {

    const [itemName, setItemName] = useState('')
    const [superclass, setSuperclass] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [type, setType] = useState('untracked')
    const [present, setPresent] = useState(true)



    const handleNameChange = e => setItemName(e.target.value)
    const handleSuperclassChange = e => setSuperclass(e.target.value)
    const handleQuantityChange = e => setQuantity(e.target.value)
    const handleTypeChange = e => setType(e.target.value)
    const handleSubmit = event => {
        event.preventDefault()
        const ingredient = {
            itemName,
            superclass,
            quantity,
            type,
            present
        }
        console.log(ingredient)
        addIngredient(ingredient)
        setItemName('')
        setSuperclass('')
        setQuantity(0)
        setType('untracked')
        setPresent(true)
    }



    return (
        <>
            <form onSubmit={handleSubmit} id="ingredients-form">
                <h2>Add an ingredient:</h2>
                Item name:<input
                    type="text"
                    onChange={handleNameChange}
                    name="item-name"
                    id="item-name"
                    value={itemName}
                ></input><p />
                Is a type of: <input
                    type="text"
                    onChange={handleSuperclassChange}
                    name="superclass"
                    id="superclass"
                    value={superclass}
                ></input><p />
                <div></div>
                Track volume or weight?
                <input type="radio" value="volume" name="type" onChange={handleTypeChange} /> Wet
                <input type="radio" value="weight" name="type" onChange={handleTypeChange} /> Dry
                <p />
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