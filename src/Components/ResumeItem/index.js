import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value}) =>{
    return (
        <C.container>
            <C.Header>
                <c.HeaderTitle>{title}</c.HeaderTitle>
                <Icon/>
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.container>
    );
};

export default ResumeItem;