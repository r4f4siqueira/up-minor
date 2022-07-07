import "./header.css";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import avatar from "../../assets/teste.jpg";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiAlertTriangle, FiCheckSquare, FiUsers, FiSmile, FiGrid, FiCornerLeftUp, FiArrowLeft } from "react-icons/fi";

export default function Header() {
    const { user, tela, signOut } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div className="divImagem">
                <Link className="linkPerfil" to="/perfil">
                    <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto de perfil" />
                </Link>
            </div>

            <div className="modulos">
                <Link className={tela === "protocolos" ? "ativa" : "naoAtiva"} to="/protocolos">
                    <FiAlignJustify size={24} />
                    <span>Protocolos</span>
                </Link>

                <Link className={tela === "fila" ? "ativa" : "naoAtiva"} to="/fila">
                    <FiAlertTriangle size={24} />
                    <span>Fila de espera</span>
                </Link>

                <Link className={tela === "concluidos" ? "ativa" : "naoAtiva"} to="/concluidos">
                    <FiCheckSquare size={24} />
                    <span>Concluidos</span>
                </Link>

                <Link className={tela === "clientes" ? "ativa" : "naoAtiva"} to="/clientes">
                    <FiUsers size={24} />
                    <span>Clientes</span>
                </Link>

                <Link className={tela === "funcionarios" ? "ativa" : "naoAtiva"} to="/funcionarios">
                    <FiSmile size={24} />
                    <span>Funcionários</span>
                </Link>

                <Link className={tela === "setores" ? "ativa" : "naoAtiva"} to="/setores">
                    <FiGrid size={24} />
                    <span>Setores</span>
                </Link>

                <Link className={tela === "prioridades" ? "ativa" : "naoAtiva"} to="/prioridades">
                    <FiCornerLeftUp size={24} />
                    <span>Prioridades</span>
                </Link>
            </div>
            <div className="divBtSair">
                <button className="btSair">
                    <FiArrowLeft size={24} onClick={() => signOut()} />
                    <span>SAIR</span>
                </button>
            </div>
        </div>
    );
}
