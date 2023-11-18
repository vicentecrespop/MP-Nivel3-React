import React from "react"
import ControleEditora from "./controle/ControleEditora"
import ControleLivros from "./controle/ControleLivros"
import { useEffect, useState } from "react"

const controleLivros = new ControleLivros()
const controleEditora = new ControleEditora()

function LinhaLivro(props) {
    const codEditora = props.livro.codEditora
    const nomeEditora = controleEditora.getNomeEditora(codEditora)

    return (
        <tr key={props.key}>
            <td className="d-flex flex-column">
                <span>{props.livro.titulo}</span>
                <button className="bg-danger text-white border-0" onClick={() => controleLivros.excluir(props.livro.codigo)}>Excluir</button>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                {props.livro.autores.map(autor => <li>{autor}</li>)}
                </ul>
            </td>
        </tr>
    )
    // titulo resumo nomeEditora autores

}

export default function LivroLista() {
    const [livros, setLivros] = useState([])
    const [carregado, setCarregado] = useState(false)

    const excluirLivro = (codigo) => {
        controleLivros.excluir(codigo)
        setCarregado(false)
    }

    useEffect(() => {
        const books = controleLivros.obterLivros()
        setLivros(books)
        setCarregado(true)
    }, [])

    return (
        <main className="container">
            <h1 className="my-4">Catálogo de Livros</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="bg-dark text-white">Título</th>
                        <th className="bg-dark text-white">Resumo</th>
                        <th className="bg-dark text-white">Editora</th>
                        <th className="bg-dark text-white">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        LinhaLivro({livro, excluir: excluirLivro, key: livro.codigo})
                    ))}
                </tbody>
            </table>
        </main>
    )
}