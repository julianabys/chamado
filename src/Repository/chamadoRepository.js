import con from "./connection.js";


export async function inserirChamado(chamado) {
    const comando = `
        insert into chamado (titulo, informacoes, impacto, data_ocorrencia, atribuir) 
        values (?, ?, ?, ?, ?)
    `;
    let resposta = await con.query(comando, [chamado.titulo, chamado.informacoes, chamado.impacto, chamado.data_ocorrencia, chamado.atribuir ]);
    let info = resposta[0];

    return info.insertId;
}


export async function consultarChamado() {
    const comando = `
    select 
        titulo, 
        impacto, 
        data_ocorrencia, 
        atribuir
    from 
        chamado;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}


export async function alterarChamado(id, chamado) {
    const comando = `
         update chamado
            set titulo = ?,
                informacoes = ?,
                impacto = ?,
                data_ocorrencia = ?,
                atribuir = ?,
            where id_chamado = ?;
    `

    let resposta = await con.query(comando, [chamado.titulo, chamado.informacoes, chamado.impacto, chamado.data_ocorrencia, chamado.atribuir , id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerChamado(id) {
    const comando = `
        delete from chamado 
        where id_chamado = ?;
        
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

