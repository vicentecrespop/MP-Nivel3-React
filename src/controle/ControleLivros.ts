import Livro from "../modelo/Livros";


class ControleLivros {

    livros: Array<Livro> = [
        {codigo: 1, codEditora: 1, titulo: 'Use a cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra']}, 
        {codigo: 2, codEditora: 2, titulo: 'Java: como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', autores: ['Paul Deitel', 'Harvey Deitel']},
        {codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Readers familiar with Hostmanns original, two-volume Core Java books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.', autores: ['Cay Horstmann']},
    ]

    constructor(livros: Array<Livro>) {
        livros = this.livros
    }

    obterLivros(): Livro[] {
        return this.livros
    }

    // Fazer função incluir
    incluir(item: Livro) {
        const size = this.livros.length - 1
        const newCodigo = this.livros[size]['codigo'] + 1
        item.codigo = newCodigo
        this.livros.push(item)
        // console.log(this.livros)
    }

    excluir(codigo: number) {
        const index = this.livros.findIndex((item) => item.codigo === codigo)
        this.livros.splice(index, 1)
        return 
    }
}

export default ControleLivros

