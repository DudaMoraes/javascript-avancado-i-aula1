class Negociacao {
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime())
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //é passada uma copia de uma data baseada na data q eu tenha salva do meu objeto, com essa copia nao é possivel de alterar o atributo do objeto em si
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}