import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

export default function Register() {
  // useState é o hook do react pra gerenciar estado da aplicação
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // função chamda quando o formulario e enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); // evitar comportamento padrão do formulario

    try {
      const response = await axios.post('/api/auth/register', formData); // envia a solicitação HTTP POST para o servidor com os dados do formuladio (substituir caminho pelo endpoint de registro do nosso backend)
      console.log(response.data); // exibe a resposta do servidor no console
      
    } catch (error) {
      console.error(error); // falha na solicitação HTTP
    
    }
  };

  // função chamada quando o usuario digitar algo em algum dos campos
  const handleInputChange = (event) => {
    const { name, value } = event.target; // extrai o nome e o valor do campo do formulário que foi alterado
    setFormData({ ...formData, [name]: value }); // atualiza o estado da aplicação com os novos valores dos campos do formulário
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>      
        <label>
          Username:
          <input type="text" name="username" onChange={handleInputChange} /> {/*chama handleInputChange quando o valor do campo é alterado*/}
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} /> 
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} /> 
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" onChange={handleInputChange} /> 
        </label>
        <button type="submit">Sign Up</button> 
      </form>
    </div>
  );
}
