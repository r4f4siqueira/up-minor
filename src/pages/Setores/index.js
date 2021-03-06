import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import Title from "../../Components/Title";

export default function Setores() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("setores");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Cadastro de Setor"/>
            <h1>Tela de Setores !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
