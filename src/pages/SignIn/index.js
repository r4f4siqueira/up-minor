import { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import logo from "../../assets/UProtocol1.png";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Email : ${email}\nSenha: ${password}`);
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
                        Entrar
                    </button>
                </form>
                <div className="bottom">
                    <button className="google">Entrar com o Google</button>
                    <Link to="/register">Cadastrar-se</Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
