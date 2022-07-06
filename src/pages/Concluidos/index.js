import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Concluidos() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("concluidos");
    });
    return (
        <div>
            <Header></Header>
            <h1>Concluidos !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
