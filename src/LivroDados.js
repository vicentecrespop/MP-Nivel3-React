import ControleLivros from "./controle/ControleLivros"
import ControleEditora from "./controle/ControleEditora"
import { useState } from "react"

const controleLivros = new ControleLivros()
const controleEditora = new ControleEditora()

export default function LivroDados() {

    const opcoes = controleEditora.getEditoras()
    const [titulo, setTitulo] = useState('')
    const [resumo, setResumo] = useState('')
    const [autores, setAutores] = useState('')
    const [codEditora, setCodEditora] = useState(0)

    function tratarCombo(e) {
        const value = Number(e.target.value)
        setCodEditora(value)
    }

    function incluir(e) {
        e.preventDefault()
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split(),
            codEditora
        }
        controleLivros.incluir(livro)
        // console.log('Livro adicionado', livro)
    }


    return (
        <main className="container">
            <h1 className="my-4">Dados do Livro</h1>
            <form onSubmit={e => incluir(e)}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input className="form-control" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control" type="text" value={resumo} onChange={e => setResumo(e.target.value)} rows={3} ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select className="form-select" onChange={e => tratarCombo(e)}>
                        {opcoes.map(opcao => <option key={opcao.codEditora} value={opcao.codEditora}>{opcao.nome}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores {`(1 por linha)`}</label>
                    <textarea className="form-control" type="text" value={autores} onChange={e => setAutores(e.target.value)} rows={3} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    )
}
