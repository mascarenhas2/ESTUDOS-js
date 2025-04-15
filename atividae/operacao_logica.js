const idade = 18

if (idade > 65) {
    console.log("O voto não é obrigatório.")
}else if (idade >= 18) {
    console.log("O voto é obrigatorio.")
}else if (idade >= 16){
    console.log("O voto é opcional.")
}else{
    console.log("Não pode votar.")
}