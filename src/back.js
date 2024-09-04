export default function mochileiro(itens, peso) {
    const tamanho = Object.keys(itens).length + 1
    const memorization = new Array(tamanho).fill(null).map(() => new Array(peso).fill(null));

    for (let index = 0; index < peso; index++) {
        memorization[0][index] = 0;
    }

    for (let index = 0; index < tamanho; index++) {
        memorization[index][0] = 0;
    }

    for (let i = 1; i < tamanho; i++) {
        let pe = Object.values(itens)[i-1].peso; 
        let valor = Object.values(itens)[i-1].valor;

        for(let w = 1; w < peso; w++) {

            if(pe > w) memorization[i][w] = memorization[i-1][w]

            else memorization[i][w] = Math.max(valor + memorization[i-1][w-pe],memorization[i-1][w]); 
        }
    }

    return memorization[tamanho-1][peso-1]; 
}