import './title.css'

export default function Title({children,titulo}){
    return (
        <div className='componente-titulo'>
            <h1>{titulo}</h1>
        </div>
    )
}