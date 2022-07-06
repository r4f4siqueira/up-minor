import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Protocolos() {
    const { signOut, telaAtiva } = useContext(AuthContext);
    useEffect(() => {
        telaAtiva("protocolos");
    });
    return (
        <div>
            <Header></Header>
            <h1>Pagina dashboard</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
