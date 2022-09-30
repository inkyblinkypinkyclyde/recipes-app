import React from "react";


const CupboardContents = ({ cupboard }) => {

    return (
        <>
            <h1>I am CupboardContents</h1>
            <h2>There are {cupboard.length} items in your cupboard</h2>
        </>
    )
}

export default CupboardContents;