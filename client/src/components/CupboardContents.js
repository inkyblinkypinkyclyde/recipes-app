import React from "react";
import AddIngredientForm from "./AddIngredientForm";
import CupboardContentsRow from "./CupboardContentsRow";
import styled from 'styled-components';

const GridBox = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
`

const StyledTable = styled.table`
width: 100%;
`

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
            <h1>Cupboard contents</h1>
            <GridBox>
                <div>
                    <h2>There are {cupboard.length} items in your cupboard</h2>
                    <StyledTable>
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
                    </StyledTable>
                </div>
                <div>
                    <AddIngredientForm addIngredient={addIngredient} />
                </div>
            </GridBox>
        </>
    )
}

export default CupboardContents;