import { Router } from "express";
import  tabelaprecoController  from '../controller/tabelapreco.controller';

class ProdutoRouter{
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    private init(){
        this.router.get('/', tabelaprecoController.find);
        this.router.post('/', tabelaprecoController.create);
        this.router.get('/:id([0-9]+)', tabelaprecoController.findById);
        this.router.put('/:id([0-9]+)', tabelaprecoController.update);
        this.router.delete('/:id([0-9]+)', tabelaprecoController.delete);
    }
}

export default new ProdutoRouter().router;