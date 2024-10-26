

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Descoberta } from '../../models/descoberta';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nome, telefone, email, genero, segmento, tamanho, areaProduto, funcao, estrategiaMarketing, ia, estrategiaAtendimento, aumentoProdutividade, comunicacao, ambienteIntegrado, capacitacao, reducaoCusto, conversao, vendas, ferramentas, timeVendas, estrategiaEmpresa, marca, jornada, marketingOportunidade
        }: Descoberta = req.body;

        if (!nome || telefone || email || genero || segmento || tamanho || areaProduto || funcao || estrategiaMarketing || ia || estrategiaAtendimento || aumentoProdutividade || comunicacao || ambienteIntegrado || capacitacao || reducaoCusto || conversao || vendas || ferramentas || timeVendas || estrategiaEmpresa || marca || jornada || marketingOportunidade
        ) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_descoberta').insertOne({ nome, telefone, email, genero, segmento, tamanho, areaProduto, funcao, estrategiaMarketing, ia, estrategiaAtendimento, aumentoProdutividade, comunicacao, ambienteIntegrado, capacitacao, reducaoCusto, conversao, vendas, ferramentas, timeVendas, estrategiaEmpresa, marca, jornada, marketingOportunidade
            });
            return res.status(201).json({ message: 'Formulário salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar o feedback:', error);
            return res.status(500).json({ error: 'Erro ao salvar Formulário' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
