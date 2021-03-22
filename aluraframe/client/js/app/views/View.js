class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template(){
        throw new Error('O metodo template deve ser implementado') //Esse erro é lançado quando eu tento usar o update em alguma classe filha de view que depende do metodo template.
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}