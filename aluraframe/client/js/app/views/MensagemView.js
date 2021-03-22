class MensagemView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>` //se o model.texto tiver conteudo ele mostra o primeiro template se nao ele mostra o p vazio
    }
}