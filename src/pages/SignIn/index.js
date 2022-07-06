import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import logo from "../../assets/UProtocol1.png";
import { AuthContext } from "../../contexts/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, loadingAuth, erro } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            signIn(email, password);
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Uprotocol" />
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="text" placeholder="exemplo@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Senha:</label>
                    <input type="password" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="entrar" type="submit">
                        {loadingAuth ? "Carregando..." : "Entrar"}
                    </button>
                </form>
                <a className="erroSenha" href="http://www.google.com">
                    {erro ? "Esqueci a senha" : ""}
                </a>
                <div className="bottom">
                    <button className="google">Entrar com o Google</button>
                    <Link to="/register">Cadastrar-se</Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
