import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";
import { toast } from "react-toastify";
//import translate from "translate";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);
    const [tela, setTela] = useState("");

    //translate.engine = "google";
    //translate.key = process.env.GOOGLE_KEY;

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem("uprotocol");
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    //login
    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                const userProfile = await firebase.firestore().collection("users").doc(uid).get();

                let data = {
                    uid: uid,
                    nome: userProfile.data().nome,
                    avatarUrl: userProfile.data().avatarUrl,
                    email: value.user.email,
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success("Bem vindo " + data.nome + "😁");
                setErro(false);
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
                toast.error("Algo deu errado 😐");
                setErro(true);
            });
    }

    //cadastrar usuario
    async function signUp(email, password, nome) {
        setLoadingAuth(true);
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase
                    .firestore()
                    .collection("users")
                    .doc(uid)
                    .set({
                        nome: nome,
                        avatarUrl: null,
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            avatarUrl: null,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        toast.success("Bem vindo " + data.nome + "😁");
                        setErro(false);
                    });
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
                toast.error("Algo deu errado 😥");
                setErro(true);
            });
    }

    function storageUser(data) {
        localStorage.setItem("uprotocol", JSON.stringify(data));
    }
    //sair do sistema
    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem("uprotocol");
        setUser(null);
    }

    function telaAtiva(nomeTela) {
        setTela(nomeTela);
    }

    return <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signOut, signIn, loadingAuth, erro, telaAtiva, tela }}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
