import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";

export default function Funcionarios() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("funcionarios");
    });
    return (
        <div>
            <Header></Header>
            <h1>Tela de Funcionarios 😁 !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
