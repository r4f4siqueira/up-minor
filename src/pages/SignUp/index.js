import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/UProtocol1.png";
import { AuthContext } from "../../contexts/auth";

function SignUp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (nome !== "" && email !== "" && password !== "") {
            signUp(email, password, nome); //passar os parametros na mesma ordem que a funcao que foi declarada no arquivo auth na pasta contexts
        }
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
                        {loadingAuth ? "Carregando..." : "Criar Conta"}
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
