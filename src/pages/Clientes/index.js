import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";
import Title from "../../Components/Title";
import { Link } from "react-router-dom";

export default function Clientes() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("clientes");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Clientes"/>
            <div>
                <BarraPesquisa adicionar="/clientes/cadastro"></BarraPesquisa>
                <h1>Tela de clientes !!!!</h1>
                <button onClick={() => signOut()}>SAIR</button>
                <Link to="/clientes/cadastro">
                    <span>Cadastro de Clientes333333333333333333333333333333333333333333333333333333</span>
                </Link>
            </div>
        </div>
    );
}
