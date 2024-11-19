import chamadoController from './Controller/chamadoController.js'


export default function adicionarRotas(servidor) {
    servidor.use(chamadoController)
}



