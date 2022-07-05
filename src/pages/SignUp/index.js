import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/UProtocol1.png";

function SignUp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Nome: ${nome}\nEmail : ${email}\nSenha: ${password}\nSenha2: ${password2}`);
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Uprotocol" />
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Nome Completo:</label>
                    <input type="text" placeholder="Uprotocol da Silva" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" placeholder="exemplo@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Senha:</label>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Repita a Senha:</label>
                    <input type="password" placeholder="******" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    <button className="entrar" type="submit">
                        Criar Conta
                    </button>
                </form>
                <div className="bottom">
                    <Link to="/">Voltar ao Inicio</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
