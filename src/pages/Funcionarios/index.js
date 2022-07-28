import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import Title from "../../Components/Title";

export default function Funcionarios() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("funcionarios");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Funcionários"/>
            <h1>Tela de Funcionarios 😁 !!!!</h1>
            <button onClick={() => signOut()}>SAIR</button>
        </div>
    );
}
