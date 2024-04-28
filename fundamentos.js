let x = 10; //let veio para substituir o var
const y = 5;//tentar usar a maior número de vezes possível

console.log(typeof y);

console.log("5" === 5);

const idade = 26;

if (idade < 13){
    console.log('Criança');
}else if (idade < 20){
    console.log('Adolescente');
}else{
    console.log('Adulto')
}

for (let i = 0; i < 5; i++){
    console.log(i)
}

const testeFuncao = () => console.log('Isto também é uma função.');
testeFuncao();

const numeros = [1,2,3,4,5]
console.log(numeros);

numeros.push(6);
console.log(numeros)

const minhaString1 = "Olá mundo!"
const minhaString2 = `${minhaString1} Como você está?`
console.log(minhaString2)

//for..in - itera objetos e chaves
const valores = {a:1, b:2, c:3, d:4};
for (const x in valores){
    console.log(x, valores[x]);
}

//for..of - intera valores
const arr = [1,2,3,4]
for (const x of arr){
    console.log(x);
}

//Map
const frutas = new Map([
    ["Bergamota", 500],
    ["Maça", 200],
    ["Banana", 120],
    ["Carambola", 234],
]);

let textoFrutas = "";
for (const x of frutas){
    textoFrutas += x + "; ";
}
console.log(textoFrutas);


//valores falsy: 0, '', [], false, undefined, null

/* (nullish coalescing) - LEFT ?? RIGTH - retorna o lado LEFT a não ser que o lado LEFT seja null ou undefined.*/
const curso = {
    nome: "Curso de JavaScript", 
    preco: 123.00,
    desconto: undefined
};
const precoAplicado = curso.desconto ?? curso.preco;
console.log(precoAplicado);


//optional-chaining

const fulanoDeTal = {
    nome: "Fulano de Tal",
    email: "fulano@example.com",
    endereco: {
      rua: "Rua das Flores",
      bairro: "Centro",
      numero: 123,
      cep: "12345-678",
      complemento: "Casa 1",
    //   cidade: {
    //     estado: "São Paulo",
    //     uf: 'SP'
    //   }
    },
    // enderecoCompleto(){
    //     return `${this.endereco.rua}, ${this.endereco.numero} - ${this.endereco.bairro}, ${this.endereco.cep}`
    // },
    profissao: "Programador",
    estadoCivil: "Solteiro(a)"
  };

  /** o código abaixo vai gerar um TypeError por não conseguir acessar uf */
  /** se fosse só fulanoDeTal.endereco.cidade ele daria um undefined */
 // console.log(fulanoDeTal.endereco.cidade.uf);

  /**o problema do código acima se resolve com optional chaining */
  console.log(fulanoDeTal?.endereco?.cidade?.uf ?? 'Não Preenchido');

  /**O código abaixo vai gerar um TypeError: fulanoDeTal.enderecoCompleto is not a function */
  //console.log(fulanoDeTal.enderecoCompleto())

  //com optional chaining o código abaixo vai retornar undefined
  console.log(fulanoDeTal.enderecoCompleto?.());

  //filter, map, reduce, find, include

  const precos = [
    "R$ 300",
    "R$ 100",
    "Crédito",
    "Débito",
    "R$ 450",
    "Pix",
  ]

//retorna array
const precoFiltro = precos.filter(preco => preco.includes("R$"));
console.log(precoFiltro);

//retorna array
//esse + antes transforma tudo para numérico, é o mesmo que Number()
const precoNumeros = precoFiltro.map(preco => +preco.replace("R$", ""));
console.log(precoNumeros);

//retorna somente um valor
const somaPrecos = precoNumeros.reduce((a, b) => a+b);
console.log(somaPrecos);
  //assincronismo
  //Promisses (async/await)


  

