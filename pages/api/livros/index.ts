// Importar o controlador de livros
import { ControleLivros } from '../../../src/controle/ControleLivros';
import { NextApiRequest, NextApiResponse } from 'next';

// Iniciar uma instância exportável de ControleLivro
const controleLivros = new ControleLivros();

// Tratar as solicitações HTTP
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Método GET para obter todos os livros
        if (req.method === 'GET') {
            // Obter o vetor de livros
            const livros = controleLivro.obterLivros();

            // Responder com status 200 e o vetor de livros em JSON
            res.status(200).json(livros);
        }
        // Método POST para adicionar um novo livro
        else if (req.method === 'POST') {
            // Capturar os dados do livro fornecidos no corpo da requisição
            const novoLivro = req.body;

            // Incluir o novo livro no vetor de livros
            controleLivros.incluir(novoLivro);

            // Responder com status 200 e mensagem de sucesso em JSON
            res.status(200).json({ message: 'Livro adicionado com sucesso' });
        } else {
            // Responder com status 405 para método não permitido
            res.status(405).end();
        }
    } catch (error) {
        // Responder com status 500 para exceção ocorrida no servidor
        res.status(500).json({ error: 'Internal server error' });
    }
};
