import { useState } from "react";

const AddIngredientForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        superclass: "",
        quantity: 0
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // postIngredient(formData).then((data)=>{
        //     addIngredient(data);
        // })
        console.log(formData)
        // Reset the form input values
        setFormData({
            name: "",
            superclass: "",
            quantity: 0
        });
    }



    return (
        <>
            <form onSubmit={onSubmit}>
                Item name:<input
                    type="text"
                    onChange={onChange}
                    name="name"
                    id="name"
                    value={formData.name}
                ></input><p />
                Is a type of: <input
                    type="text"
                    onChange={onChange}
                    name="superclass"
                    id="superclass"
                    value={formData.superclass}
                ></input><p />
                Quantity: <input
                    type="number"
                    onChange={onChange}
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                ></input><p />
                <input type="submit" value="save" id="save"></input>
            </form>
        </>
    )
}

export default AddIngredientForm