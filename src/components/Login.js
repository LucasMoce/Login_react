import React, { useState } from "react";  
import "./Login.css";  
import axios from "axios";  // Importa a biblioteca axios, que é usada para fazer requisições HTTP

function Login() {
  const [username, setUsername] = useState("");  // Declara o estado "username" e o método "setUsername" para atualizá-lo, inicializados com uma string vazia
  const [password, setPassword] = useState("");  // Declara o estado "password" e o método "setPassword" para atualizá-lo, inicializados com uma string vazia
  const [error, setError] = useState("");  // Declara o estado "error" e o método "setError" para atualizá-lo, inicializados com uma string vazia

  const handleSubmit = async (event) => {  // Declara uma função assíncrona chamada handleSubmit que será chamada quando o formulário for enviado
    event.preventDefault();  // Impede o comportamento padrão do formulário de atualizar a página quando enviado
    
    // Faz uma requisição HTTP POST para o servidor no caminho "/api/login" com os dados do formulário
    try {
      const response = await axios.post("/api/login", {  
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);  // Armazena o token de acesso no armazenamento local

      // redirecionar o usuario para outra pagina apos o login bem sucedido
    } catch (error) {
      setError("Incorrect Username or Password.");  // Define o estado "error" como "Incorrect Username or Password" em caso de falha na requisição
    }
  };

  return (
    <div className="login-container">  
      <h2>Login</h2>  
      {error && <p className="error-message">{error}</p>}  {/*exibe uma mensagem de erro na tela se o estado "error" tiver um valor */}
      <form onSubmit={handleSubmit}>  
        <div className="form-control">  
          <label htmlFor="username">Username:</label>  
          <input
            type="text"
            id="username"
            name="username"
            value={username}            
            onChange={(event) => setUsername(event.target.value)}  // Aaualiza o estado "username" quando o valor do campo é alterado
          />
        </div>
        <div className="form-control">  
          <label htmlFor="password">Password:</label>  
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}  
          />
        </div>
        <button type="submit">Login</button>  
      </form>

    </div>
  );
}

export default Login;
