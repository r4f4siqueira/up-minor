import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Setores() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("setores");
    });
    return (
        <div>
            <Header></Header>
            <h1>Tela de Setores !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
