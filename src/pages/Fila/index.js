import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";

export default function Fila() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("fila");
    });
    return (
        <div>
            <Header></Header>
            <div>
                <BarraPesquisa></BarraPesquisa>
                <h1>Fila de espera</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
