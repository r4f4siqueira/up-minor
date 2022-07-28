import "./barrapesquisa.css";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BarraPesquisa({adicionar}) {
    return (
        <div className="barraPesquisa">
            <form className="filtros">
                <div className="divSeletor">
                    <select>
                        <option value="descricao">Descrição</option>
                        <option value="id">Codigo</option>
                    </select>
                </div>
                <div className="divInput">
                    <input type="text" placeholder="Pesquisar"></input>
                </div>
                <div className="divBtPesquisa">
                    <FiSearch size={32}></FiSearch>
                </div>
            </form>
            <Link to={adicionar} className="linkBtNovo">
                <div>
                    <FiPlus size={24}></FiPlus>
                </div>
            </Link>
        </div>
    );
}
