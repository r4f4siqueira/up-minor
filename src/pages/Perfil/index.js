import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import { FiUpload } from "react-icons/fi";
import avatar from "../../assets/teste.jpg";
import "./perfil.css";

export default function Perfil() {
    const { telaAtiva, user } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    useEffect(() => {
        telaAtiva("");
    });
    return (
        <div>
            <Header></Header>
            <div className="containerPerfil">
                <form className="formPerfil"></form>
            </div>
        </div>
    );
}
