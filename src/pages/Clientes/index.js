import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Clientes() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("clientes");
    });
    return (
        <div>
            <Header></Header>
            <h1>Tela de clientes !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
