import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";

export default function Protocolos() {
    const { signOut, telaAtiva } = useContext(AuthContext);
    useEffect(() => {
        telaAtiva("protocolos");
    });
    return (
        <div>
            <Header />
            <BarraPesquisa />
            <div>
                <h1>Pagina Protocolos</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
