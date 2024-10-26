import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Usuario } from '../../models/experiencia';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nome, email, nota, mensagem }: Usuario = req.body;

        if (!nome || !email || !nota || !mensagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_experiencia').insertOne({ nome, email, nota, mensagem });
            return res.status(201).json({ message: 'Dados salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
            return res.status(500).json({ error: 'Erro ao salvar dado' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
