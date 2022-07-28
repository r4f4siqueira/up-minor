import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import BarraPesquisa from "../../Components/BarraPesquisa";
import Title from "../../Components/Title";

export default function Protocolos() {
    const { signOut, telaAtiva } = useContext(AuthContext);
    useEffect(() => {
        telaAtiva("protocolos");
    });
    return (
        <div>
            <Header />
            <Title titulo="Protocolos"/>
            <BarraPesquisa />
            <div>
                <h1>Pagina Protocolos</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
