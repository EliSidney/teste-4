// Importar o controlador de editoras
import { ControleEditora } from '../../../src/controle/ControleEditora';
import { NextApiRequest, NextApiResponse } from 'next';

// Iniciar uma instância exportável de ControleEditora
const controleEditora = new ControleEditora();

// Tratar as solicitações HTTP
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Método GET para obter o nome da editora com base no código
        if (req.method === 'GET') {
            // Obter o código da editora da URL de acesso
            const { codEditora } = req.query;

            // Verificar se o código da editora foi fornecido e é um número
            if (!codEditora || isNaN(Number(codEditora))) {
                // Responder com status 400 para requisição inválida
                res.status(400).json({ error: 'Invalid request' });
                return;
            }

            // Obter o nome da editora com base no código fornecido
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));

            // Responder com status 200 e o nome da editora em JSON
            res.status(200).json({ nomeEditora });
        } else {
            // Responder com status 405 para método não permitido
            res.status(405).end();
        }
    } catch (error) {
        // Responder com status 500 para exceção ocorrida no servidor
        res.status(500).json({ error: 'Internal server error' });
    }
};
