// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

router.get('/listar', (request, response) => {
    response.send('Método GET: listar informações');
});
router.post('/cadastrar', (request, response) => {
    response.send('Método POST: salvar informações');
});
router.put('/inserir', (request, response) => {
    response.send('Método PUT: atualizar informações');
});
router.delete('/deletar', (request, response) => {
    response.send('Método DELETE: remover informações');
});

module.exports = router;