import "./barrapesquisa.css";
import { FiPlus, FiSearch } from "react-icons/fi";

export default function BarraPesquisa() {
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
            <div className="divBtNovo">
                <FiPlus size={24}></FiPlus>
            </div>
        </div>
    );
}
