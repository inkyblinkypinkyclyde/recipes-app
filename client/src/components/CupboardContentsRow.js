import React from "react";

const CupboardContentsRow = ({ item }) => {
    const nomenaDisplay = () => {
        switch (item.type) {
            case "untracked":
                return (
                    <td> In stock </td>
                )
            case "integer":
                return (
                    <td>{item.quantity}</td>
                )
            case "weight":
                return (
                    <td>{item.quantity}g</td>
                )
            case "volume":
                return (
                    <td>{item.quantity}ml</td>
                )
            default:
                return (
                    <td>error</td>
                )
        }
    }

    return (
        <>
            <td>{item.itemName}</td>
            <td>{item.superclass}</td>
            {nomenaDisplay(item)}
        </>
    )
}

export default CupboardContentsRow