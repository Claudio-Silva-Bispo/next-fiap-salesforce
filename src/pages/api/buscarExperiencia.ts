
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { db } = await connectToDatabase();
            const contatos = await db.collection('t_experiencia').find().toArray();
            return res.status(200).json(contatos);
        } catch (error) {
            console.error('Erro ao buscar os experiência:', error);
            return res.status(500).json({ error: 'Erro ao buscar os experiência' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
