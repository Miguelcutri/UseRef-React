import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  let inputNome =  useRef<HTMLInputElement>(null)
  let inputIdade =  useRef<HTMLInputElement>(null)
  let inputEmpresa =  useRef<HTMLInputElement>(null)
  let inputTelefone =  useRef<HTMLInputElement>(null)

  const enviarDados = () => {
    const nome = inputNome.current?.value
    const idade = inputIdade.current?.value
    const empresa = inputEmpresa.current?.value
    const telefone = inputTelefone.current?.value

    axios.post("http://localhost:4000/usuarios",{
      name: nome,
      age: idade,
      company: empresa,
      phone: telefone
    })
    
  }

  return (
    <div className="App">
      <input ref={inputNome} placeholder="Digite seu nome" type="text"/>
      <input ref={inputIdade} placeholder="Digite sua idade" type="text"/>
      <input ref={inputEmpresa} placeholder="Digite o nome de sua empresa" type="text"/>
      <input ref={inputTelefone} placeholder="Digite seu telefone" type="text"/>
      <button onClick={enviarDados}>Enviar</button>
    </div>
  );
}

export default App;
