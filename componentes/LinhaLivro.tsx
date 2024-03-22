import React from 'react';
import { Livro } from '../types/Livro'; // Supondo que você tenha um tipo de dados Livro definido

// Definição de uma instância de ControleEditora
const controleEditora = new ControleEditora();

// Definição da interface LinhaLivroProps
interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

// Componente exportável LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    // Obtendo o nome da editora usando o método getNomeEditora do controlador de editoras
    const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    // Método para exclusão de um livro
    const handleExcluir = () => {
        props.excluir();
    };

    return (
        <tr>
            <td>
                <button onClick={handleExcluir}>Excluir</button>
            </td>
            <td>{props.livro.codigo}</td>
            <td>{props.livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>{props.livro.resumo}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};
