// Importar o controlador de livros
import { ControleLivros } from '../../../src/controle/ControleLivros';
import { NextApiRequest, NextApiResponse } from 'next';

// Iniciar uma instância exportável de ControleLivro
const controleLivros = new ControleLivros();

// Tratar as solicitações HTTP
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Método DELETE para excluir um livro com base no código fornecido
        if (req.method === 'DELETE') {
            // Capturar o código do livro fornecido na URL
            const { codigo } = req.query;

            // Excluir o livro com base no código fornecido
            controleLivros.excluir(Number(codigo));

            // Responder com status 200 e mensagem de sucesso em JSON
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } else {
            // Responder com status 405 para método não permitido
            res.status(405).end();
        }
    } catch (error) {
        // Responder com status 500 para exceção ocorrida no servidor
        res.status(500).json({ error: 'Internal server error' });
    }
};
