import React from "react";
import AddIngredientForm from "./AddIngredientForm";
import CupboardContentsRow from "./CupboardContentsRow";


const CupboardContents = ({ cupboard, addIngredient }) => {

    const displayCupboardContents = cupboard.map((item, index) => {
        return (
            <tr key={index}>
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
            <AddIngredientForm addIngredient={addIngredient} />
        </>
    )
}

export default CupboardContents;