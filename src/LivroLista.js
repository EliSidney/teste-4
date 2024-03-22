import React, { useState, useEffect } from 'react';
import { ControleLivros } from '../src/controle/ControleLivros';
import { ControleEditora } from '../src/controle/ControleEditora';

// Definindo o componente auxiliar LinhaLivro
const LinhaLivro = ({ livro, excluir }) => {
    // Instanciando o controlador de editoras
    const controleEditora = new ControleEditora();

    // Obtendo o nome da editora usando o método getNomeEditora do controlador de editoras
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    // Método para exclusão de um livro
    const handleExcluir = () => {
        excluir(livro.codigo);
    };

    return (
        <tr>
            <td>
                <button onClick={handleExcluir}>Excluir</button>
            </td>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

// Definindo o componente LivroLista
const LivroLista = () => {
    // Definindo as propriedades livros e carregado usando useState
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    // Instanciando o controlador de livros
    const controleLivros = new ControleLivros();

    // Hook useEffect para carregar os livros
    useEffect(() => {
        const obterLivros = async () => {
            const livrosObtidos = await controleLivros.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        };

        if (!carregado) {
            obterLivros();
        }
    }, [carregado, controleLivros]);

    // Método para excluir um livro
    const excluir = (codigoLivro) => {
        controleLivros.excluirLivro(codigoLivro);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Código</th>
                        <th>Título</th>
                        <th>Editora</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista; // Exportando o componente LivroLista por padrão
