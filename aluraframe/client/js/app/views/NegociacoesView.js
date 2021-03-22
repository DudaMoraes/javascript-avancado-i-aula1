class NegociacoesView extends View {
    constructor(elemento){
        super(elemento);
    }

    template(model){ //o join la no final é para transformar o array gerado no map concatenando tudo em uma string + '' (string vazia).
       return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map( negociacao =>{
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                }).join('')} 
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0)}
                </td>
            </tfoot>
        </table>
        `;
    }
}
