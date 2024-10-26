

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Feedback } from '../../models/feedback';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, rating, message }: Feedback = req.body;

        if (!name || !email || !rating || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_feedback').insertOne({ name, email, rating, message });
            return res.status(201).json({ message: 'Feedback salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar o feedback:', error);
            return res.status(500).json({ error: 'Erro ao salvar feedback' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
