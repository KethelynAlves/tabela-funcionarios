import React from "react";
const TabelaHead = props => (
    <thead>
        <tr>
            <th colSpan="5">Tabela de Funcionários</th>
        </tr>
        <tr>
            <th>CPF</th>
            <th>Nome
                <div className="setinhas">
                    <div onClick={()=>props.ordenarCrescente('nome')}>&#129093;</div>
                    <div onClick={()=>props.ordenarDecrescente('nome')}>&#129095;</div>
                </div>
            </th>
            <th>Cargo
                <div className="setinhas">
                    <div onClick={()=>props.ordenarCrescente('cargo')}>&#129093;</div>
                    <div onClick={()=>props.ordenarDecrescente('cargo')}>&#129095;</div>
                </div>
            </th>
            <th>Salário
                <div className="setinhas">
                    <div onClick={()=>props.ordenarCrescente('salario')}>&#129093;</div>
                    <div onClick={()=>props.ordenarDecrescente('salario')}>&#129095;</div>
                </div>
            </th>
            <th>Apagar</th>
        </tr>
    </thead>
);
export default TabelaHead;