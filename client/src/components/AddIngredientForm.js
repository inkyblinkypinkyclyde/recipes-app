import React, { useState } from "react";


const AddIngredientForm = ({ addIngredient }) => {

    const [itemName, setItemName] = useState('')
    const [superclass, setSuperclass] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [type, setType] = useState('')
    const [present, setPresent] = useState(true)

    const handleNameChange = e => setItemName(e.target.value)
    const handleSuperclassChange = e => setSuperclass(e.target.value)
    const handleQuantityChange = e => setQuantity(e.target.value)
    const handleTypeChange = e => setType(e.target.value)
    const handleSubmit = event => {
        console.log(type)
        type ? setType(type) : setType("untracked") // find out why this doesn't work
        console.log(type)
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
        setType('')
        setPresent(true)
    }

    const trackQuantity = () => {
        return (
            <>
                Quantity: <input
                    type="number"
                    onChange={handleQuantityChange}
                    name="quantity"
                    id="quantity"
                    value={quantity}
                ></input>
            </>
        )

    }



    return (
        <>
            <form onSubmit={handleSubmit} id="ingredients-form">
                <h2>Add an ingredient:</h2>
                Item name:<input
                    required
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
                Track this by:
                <p />
                <input
                    type="radio"
                    value="volume"
                    name="type"
                    checked={type === "volume"}
                    onChange={handleTypeChange}
                /> Volume (ml)
                <p />
                <input
                    type="radio"
                    value="weight"
                    name="type"
                    checked={type === "weight"}
                    onChange={handleTypeChange}
                /> Weight (g/kg)
                <p />
                <input
                    type="radio"
                    value="integer"
                    name="type"
                    checked={type === "integer"}
                    onChange={handleTypeChange}
                /> Quantity
                <p />
                <input
                    type="radio"
                    value="untracked"
                    name="type"
                    checked={type === "untracked"}
                    onChange={handleTypeChange}
                /> Neither
                <p />
                {type === "" ? null : trackQuantity()}
                <p />
                <input type="submit" value="save" id="save"></input>
            </form>
        </>
    )
}

export default AddIngredientForm