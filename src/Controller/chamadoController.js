import * as db from '../Repository/chamadoRepository.js';


import { Router } from "express";
const endpoints = Router();


endpoints.get('/chamado/', async (req, resp) => {
    try {
        let registros = await db.consultarChamado();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/chamado/', async (req, resp) => {
    try {
        let chamado = req.body;

        let id = await db.inserirChamado(chamado);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/chamado/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let chamado = req.body;

        let linhasAfetadas = await db.alterarChamado(id, chamado);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum chamado encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/chamado/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerChamado(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum chamado encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;