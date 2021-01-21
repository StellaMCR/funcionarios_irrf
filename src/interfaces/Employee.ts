export interface Employee {
    name?: string,
    cpf?: string,
    salary?: number, // deve ser maior que zero
    discount?: number, // valor em porcentagem ex: 75.2 para 75.2% de desconto, deve ser maior que zero
    dependents?: number // deve ser maior ou igual a zero
}
