import React, { useState } from 'react';
import "./App.css";

function Login(){
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[mensagem, setMensagem] = useState('');
  const [classeMensagem, setClasseMensagem] = useState('');


  const handleLogin = () => {
    if(email === 'maria.gabriele@pucpr.br' && senha === '246810'){
      setMensagem('Acessado com Sucesso!');
      setClasseMensagem('message-correct'); 
    } else {
      setMensagem('Usuário ou senha incorretos!');
      setClasseMensagem('message-incorrect'); 
  }
} 
  

return(
  <div className="container">
    <h2>Login</h2>
    <input 
    className="input"
    type="email"
    placeholder="E-mail"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}/>
    <br/>
    <input
    className="input"
    type="password"
    placeholder="Senha"
    value={senha}
    onChange={(e) => setSenha(e.target.value)}
    />
    <br/>
    <button className="button" onClick={handleLogin}>Acessar</button>
    <br/>
    <label className={`message ${classeMensagem}`} >{mensagem}</label>
  </div>
);

}
 
export default Login;