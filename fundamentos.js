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