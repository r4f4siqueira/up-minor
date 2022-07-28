import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import Title from "../../Components/Title";

export default function Prioridades() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("prioridades");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Cadastro de Prioridade"/>
            <h1>Prioridades</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
