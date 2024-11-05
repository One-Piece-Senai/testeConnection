import { useState } from 'react'
import axios from 'axios'
// import './App.css'

import Tabela from '../Tabela'

function Requisicao() {
  const [resposta, setResposta] = useState([])

  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = event => {
     setInputValue(event.target.value);
  };

  const callApi =  () =>{
    axios.get('http://localhost:8080/usuario/listar')
    .then(function (response) {
      setResposta(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  const writeApi =  () =>{
    axios.post('http://localhost:8080/usuario/criar', {
        nome: "fabio",
        username: "fabio",
        senha: "123456789",
        cpf_cnpj: cpf,
        email: "fabio@outlook.com",
        telefone: "893727865",
        tipo: "CLIENTE",
        cep: "03421800",
        endereco: "rua benedict",
        numero: "12",
        foto_perfil: "//path",
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(function (response) {
      console.log('ok');
      callApi;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  

  return (
    <>
      <div>
        <h1>Usuário</h1>
        <Tabela lista={resposta}/>
        <button onClick={callApi}>Consumir</button>
        <button onClick={writeApi}>Postar</button>
        <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={inputValue}
        />
      </div>
    </>
  )
}

export default Requisicao;
