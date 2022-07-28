import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import Title from "../../Components/Title";

export default function CadastroCliente() {
    const { signOut, telaAtiva } = useContext(AuthContext);

    useEffect(() => {
        telaAtiva("clientes");
    });
    return (
        <div>
            <Header/>
            <Title titulo="Cadastro de Contados do Cliente"/>
            <div>
                <h1>Tela de CADASTRO clientes !!!!</h1>
                <button onClick={() => signOut()}>SAIR</button>
            </div>
        </div>
    );
}
