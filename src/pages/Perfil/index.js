import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Components/Header";
import { FiCheck, FiLock, FiMail, FiEdit, FiUser } from "react-icons/fi";
import avatar from "../../assets/teste.jpg";
import "./perfil.css";
import Title from "../../Components/Title";
import firebase from '../../services/firebaseConnection'
import { toast } from "react-toastify";

export default function Perfil() {
    const { telaAtiva, user, setUser, storageUser } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null)
    const [loadingSalvar, setLoadingSalvar] = useState(false);

    //funcao para setar a tela ativa no menu lateral
    useEffect(() => {
        telaAtiva("");
    });

    //funcao para carregar preview da imagem
    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'||image.type === 'image/gif'){
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                toast.error(`Tipo de arquivo inválido! Formatos válidos: JPEG e PNG`);
                setImageAvatar(null);
                return null
            }
        }
    }
    
    //funcao para salvar a imagem no Storage
    async function handleUpload(currentUid){
        const uploadTask = await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then(async ()=>{
            await firebase.storage()
            .ref(`images/${currentUid}`)
            .child(imageAvatar.name)
            .getDownloadURL()
            .then( async (url)=>{
                let urlFoto = url
                await firebase.firestore()
                .collection('users')
                .doc(currentUid)
                .update({
                    avatarUrl: urlFoto,
                    nome: nome
                })
                .then(()=>{
                    let data ={
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    }
                    setUser(data)
                    storageUser(data)
                    toast.success('Dados atualizados')
                    setLoadingSalvar(false)
                })
            })
        })
    }
    
    async function handleSave(e){
        e.preventDefault()
        setLoadingSalvar(true)

        //salva apenas alteração no nome
        if (imageAvatar === null && nome !==''){
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome
            })
            .then(()=>{
                let data ={
                    ...user,
                    nome: nome
                }
                setUser(data)
                storageUser(data);
                setLoadingSalvar(false)
            })
        }else if(nome !== '' && imageAvatar !== null){
            handleUpload(user.uid)
        }
    }

    return (
        <div>
            <Header/>
            <Title titulo="Preferências da conta"/>
            <div className="container">
                <form className="formPerfil" onSubmit={handleSave}>
                    <label className="label-perfil">
                        <span>
                            <FiEdit size={25} color="##e9e9e9" />
                        </span>
                        <input type="file" accept="image" onChange={handleFile}/>
                        <br />
                        {avatarUrl === null ? (
                            <img src={avatar} width="248" height="248" alt="Foto de perfil" />
                        ) : (
                            <img src={avatarUrl} width="248" height="248" alt="Foto de perfil" />
                        )}
                    </label>
                    <div className="perfilDados">
                        <div className="inputNome">
                            <FiUser color="#000" size={40} />
                            <input type="text" className="input-perfil" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        </div>
                        <div className="inputEmail">
                            <FiMail color="#000" size={40} />
                            <input type="text" className="input-perfil" value={email} disabled={true} />
                        </div>
                        <div className="inputSenha">
                            <FiLock color="#000" size={40} />
                            <input type="password" className="input-perfil" placeholder="******" />
                        </div>
                        <div className="selectConvites">
                            <label>Receber convites : </label>
                            <select>
                                <option value="s">SIM</option>
                                <option value="n">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <button className="btSalvar" type="submit">
                        <FiCheck size={24}/>{loadingSalvar ? "Carregando..." : "Salvar"}
                    </button>
                </form>
            </div>
        </div>
    );
}
