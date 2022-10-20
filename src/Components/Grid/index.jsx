import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({itens, setItens}) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transaction", JSON.stringify(newArray));
    };
    
    return(
        <>
            <C.Table>
                <c.Thread>
                    <c.Tr>
                        <c.Th width={40}>Descricao</c.Th>
                        <c.Th width={40}>Valor</c.Th>
                        <c.Th width={10} alighCenter>Tipo</c.Th>
                        <c.Th width={10}></c.Th>
                    </c.Tr>
                </c.Thread>
                <C.Tbody>
                    {itens?.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete}/>
                    ))}
                </C.Tbody>
            </C.Table>
        
        </>
    );
};

export default Grid;