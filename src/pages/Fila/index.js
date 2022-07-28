import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";
import Title from "../../Components/Title";

export default function Fila() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("fila");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Fila de espera"/>
            <div>
                <BarraPesquisa></BarraPesquisa>
                <h1>Fila de espera</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
