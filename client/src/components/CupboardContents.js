import React from "react";
import CupboardContentsRow from "./CupboardContentsRow";


const CupboardContents = ({ cupboard }) => {

    const displayCupboardContents = cupboard.map((item) => {
        return (
            <>
                <CupboardContentsRow item={item} />
            </>
        )
    })

    return (
        <>
            <h1>I am CupboardContents</h1>
            <h2>There are {cupboard.length} items in your cupboard</h2>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Superclass</td>
                    <td>Amount</td>
                </thead>
                <tbody>
                    {displayCupboardContents}
                </tbody>
            </table>
        </>
    )
}

export default CupboardContents;