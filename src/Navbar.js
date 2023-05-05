import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário ta logado ou não

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Bambu
      </Link>
      <ul>
        {/* Condicional pra exibir o botão de login apenas se o usuario não estiver logado */}
        {!isLoggedIn && <CustomLink to="/pricing">Login</CustomLink>}
        {/* Condicional pra exibir o botão de registro apenas se o usuario não estiver logado */}
        {!isLoggedIn && <CustomLink to="/about">Sign Up</CustomLink>}
        {/* Condicional pra exibit o botão de logout apenas se o usuario estiver logado */}
        {isLoggedIn && <CustomLink to="/">Logout</CustomLink>}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to); // Resolvendo o caminho completo da rota, incluindo parâmetros opcionais
  const isActive = useMatch({ path: resolvedPath.pathname, end: true }); // Verificando se a rota está ativa ou não

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
