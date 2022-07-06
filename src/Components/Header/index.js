import "./header.css";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import avatar from "../../assets/account.svg";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiAlertTriangle, FiCheckSquare, FiUsers, FiSmile, FiGrid, FiCornerLeftUp } from "react-icons/fi";

export default function Header() {
    const { user, tela, telaAtiva } = useContext(AuthContext);
    return (
        <div className="sidebar">
            <div className="divImagem">
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto de perfil" />
            </div>

            <div className="links">
                <Link className={tela === "protocolos" ? "ativa" : "naoAtiva"} to="/protocolos">
                    <FiAlignJustify size={24} /> Protocolos
                </Link>

                <Link className={tela === "fila" ? "ativa" : "naoAtiva"} to="/fila">
                    <FiAlertTriangle size={24} /> Fila de espera
                </Link>

                <Link className={tela === "concluidos" ? "ativa" : "naoAtiva"} to="/concluidos">
                    <FiCheckSquare size={24} /> Concluidos
                </Link>

                <Link className={tela === "clientes" ? "ativa" : "naoAtiva"} to="/clientes">
                    <FiUsers size={24} /> Clientes
                </Link>

                <Link className={tela === "funcionarios" ? "ativa" : "naoAtiva"} to="/funcionarios">
                    <FiSmile size={24} /> Funcionários
                </Link>

                <Link className={tela === "setores" ? "ativa" : "naoAtiva"} to="/setores">
                    <FiGrid size={24} /> Setores
                </Link>

                <Link className={tela === "prioridades" ? "ativa" : "naoAtiva"} to="/prioridades">
                    <FiCornerLeftUp size={24} /> Prioridades
                </Link>
            </div>
        </div>
    );
}
