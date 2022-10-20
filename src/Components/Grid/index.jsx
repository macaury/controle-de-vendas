import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({itens, setItens}) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transaction", JSON.stringify(newArray));
    }
}