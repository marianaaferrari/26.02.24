// a linha abaixo é uma declaração de variavel "x" que está recebendo o valor "1" encerra com ";"
var x= 1 ;
// a linha abaixo é uma declaração de variavel "y" que está recebendo o valor "2" encerra com ";"
var y= 1;
// a linha abaixo é uma declaração do algoritmo IF/ELSE, cuja condição é: se a variavel "x" for igual a "y", será exibido no log do console a msg "numeros conferem", com contrario (else);
if (x == y) {
// inicio da estrutura condicional if, que verifica se x é igual a y;
    console.log("Números conferem!");
    // se x for igual a y, etsa linha sera executada, imprimindo "numeros conferem!" na tela; fim do bloco "if" e inicio do bloco "else";
} else {
    // caso a condição do if não seja atendida, ou seja, se x nao for igual a y, a execução continuará no bloco else;
    console.log("Números divergem!");
    // esta linha será executada caso x nao seja igual a y, imprimindo "numeros divergem!" na tela;
}
// fim do bloco else;
