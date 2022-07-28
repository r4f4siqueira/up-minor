import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";
import Title from "../../Components/Title";

export default function Concluidos() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("concluidos");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Protocolos Concluídos"/>
            <div>
                <BarraPesquisa></BarraPesquisa>
                <h1>Concluidos !!!!</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
