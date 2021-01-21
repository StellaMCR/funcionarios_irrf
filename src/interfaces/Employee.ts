export interface Employee {
    nome: string,
    cpf: string,
    salario: number,//deve ser maior que zero
    desconto: number, //valor em porcentagem ex: 75.2 para 75.2% de desconto, deve ser maior que zero
    dependentes: number //deve ser maior ou igual a zero
}