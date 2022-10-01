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
        }
    }

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.superclass}</td>
                {nomenaDisplay(item)}
            </tr>
        </>
    )
}

export default CupboardContentsRow