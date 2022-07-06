import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Prioridades() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("prioridades");
    });
    return (
        <div>
            <Header></Header>
            <h1>Prioridades</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
