import React from "react";
const TabelaFoot = props => (
    <tfoot>
        <tr>
            <td colSpan="5">Quantidade de Funcionários: {props.quantidade}</td>
        </tr>
    </tfoot>
);
export default TabelaFoot;