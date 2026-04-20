import React from "react";
const TabelaBody = props => (
    <tbody>
        {props.funcionarios.map((funcionario) => (
        <tr key={funcionario.cpf}>
            <td>{funcionario.cpf}</td>
            <td>{funcionario.nome}</td>
            <td>{funcionario.cargo}</td>
            <td>R${funcionario.salario.toFixed(2)}</td>
            <td><button className="excluir"
                onClick={() => props.excluirFuncionario(funcionario.cpf)}
                >
                    Excluir
                </button>
            </td>
        </tr>
        ))}
    </tbody>
);
export default TabelaBody;