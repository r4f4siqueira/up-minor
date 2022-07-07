import { Switch } from "react-router-dom";
import Route from "./Route";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Prioridades from "../pages/Prioridades";
import Protocolos from "../pages/Protocolos";
import Fila from "../pages/Fila";
import Concluidos from "../pages/Concluidos";
import Clientes from "../pages/Clientes";
import Funcionarios from "../pages/Funcionarios";
import Setores from "../pages/Setores";
import Perfil from "../pages/Perfil";

export default function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />

            <Route exact path="/perfil" component={Perfil} isPrivate />
            <Route exact path="/protocolos" component={Protocolos} isPrivate />
            <Route exact path="/fila" component={Fila} isPrivate />
            <Route exact path="/concluidos" component={Concluidos} isPrivate />
            <Route exact path="/clientes" component={Clientes} isPrivate />
            <Route exact path="/funcionarios" component={Funcionarios} isPrivate />
            <Route exact path="/setores" component={Setores} isPrivate />
            <Route exact path="/prioridades" component={Prioridades} isPrivate />

            <Route exact path="/*" component={Protocolos} isPrivate />
        </Switch>
    );
}
