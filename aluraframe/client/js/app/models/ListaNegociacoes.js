class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes); //para nao permitir que o array seja alterado com um .lenght(0) por exemplo, eu entrego uma copia do meu array apenas para visualização
    }
}