import React from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends React.Component {
  state = {
    funcionarios: []
  };
  componentDidMount() {
    fetch("/api/funcionarios.json")
      .then(response => response.json())
      .then(funcionarios => this.setState({ funcionarios }))
      .catch(error => console.error("Erro ao carregar os funcionários:", error));
  }

  handleExcluirLinha = cpf => {
    const funcionariosAtualizados = this.state.funcionarios.filter(funcionario => funcionario.cpf !== cpf);
    this.setState({ funcionarios: funcionariosAtualizados });
  }

  handleOrdernarCrescente = (campo) => {
    const funcionariosOrdenados = [...this.state.funcionarios].sort((a, b) => {
      if (a[campo] < b[campo]) return -1;
      if (a[campo] > b[campo]) return 1;
      return 0;
    });
    this.setState({ funcionarios: funcionariosOrdenados });
  }

  handleOrdernarDecrescente = (campo) => {
    const funcionariosOrdenados = [...this.state.funcionarios].sort((a, b) => {
      if (a[campo] > b[campo]) return -1;
      if (a[campo] < b[campo]) return 1;
      return 0;
    });
    this.setState({ funcionarios: funcionariosOrdenados });
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de Funcionários</h1>
        <table className="tabela">
          <TabelaHead 
          ordenarCrescente={this.handleOrdernarCrescente}
          ordenarDecrescente={this.handleOrdernarDecrescente}
          />
          <TabelaBody 
          funcionarios={this.state.funcionarios}
          excluirFuncionario={this.handleExcluirLinha}
          />
          <TabelaFoot quantidade={this.state.funcionarios.length} />
        </table>
      </div>
    );
  }

}
export default App;
