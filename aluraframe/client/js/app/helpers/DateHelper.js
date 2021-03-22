class DateHelper {
    constructor(){
        throw new Error('DateHelper nao pode ser instanciada')
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Dado deve estar no formado YYYY-MM-DD') //Expressao regular para verificar se o dado esta sendo passado de forma correta
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
        //esses 3 pontinhos(spread operator ...) é pra dizer q o parametro passado é justamente as posições do array criado no split logo a abaixo
    }
}