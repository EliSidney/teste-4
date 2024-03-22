// Importar o controlador de editoras
import { ControleEditora } from '../../../src/controle/ControleEditora';
import { NextApiRequest, NextApiResponse } from 'next';

// Iniciar uma instância exportável de ControleEditora
const controleEditora = new ControleEditora();

// Tratar as solicitações HTTP
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Método GET para obter todas as editoras
        if (req.method === 'GET') {
            // Obter o vetor de editoras
            const editoras = controleEditora.getEditoras();

            // Responder com status 200 e o vetor de editoras em JSON
            res.status(200).json(editoras);
        } else {
            // Responder com status 405 para método não permitido
            res.status(405).end();
        }
    } catch (error) {
        // Responder com status 500 para exceção ocorrida no servidor
        res.status(500).json({ error: 'Internal server error' });
    }
};
