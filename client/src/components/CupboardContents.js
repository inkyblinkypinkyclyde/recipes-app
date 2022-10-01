import React from "react";
import AddIngredientForm from "./AddIngredientForm";
import CupboardContentsRow from "./CupboardContentsRow";


const CupboardContents = ({ cupboard }) => {

    const displayCupboardContents = cupboard.map((item) => {
        return (
            <tr key={item._id}>
                <CupboardContentsRow item={item} />
            </tr>
        )
    })

    return (
        <>
            <h1>I am CupboardContents</h1>
            <h2>There are {cupboard.length} items in your cupboard</h2>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Superclass</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {displayCupboardContents}
                </tbody>
            </table>
            <AddIngredientForm />
        </>
    )
}

export default CupboardContents;