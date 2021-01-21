const DEPENDENT_DEDUCTION = 164.56
const IRRF_TABLE = [
  {
    min: 0,
    max: 1903.98,
    aliquot: 0,
    deduction: 0
  }, {
    min: 1903.99,
    max: 2826.65,
    aliquot: 0.075,
    deduction: 142.80
  }, {
    min: 2826.66,
    max: 3751.05,
    aliquot: 0.15,
    deduction: 354.80
  }, {
    min: 3751.06,
    max: 4664.68,
    aliquot: 0.225,
    deduction: 636.13
  }, {
    min: 4664.69,
    aliquot: 0.275,
    deduction: 869.36
  }
]

export function calculateBaseSalary (salary: number, socialSecurityDiscount: number, numDependents: number): number {
  return salary - socialSecurityDiscount - (numDependents * DEPENDENT_DEDUCTION)
}

export function calculateIRRFDiscount (baseSalary:number): number {
  const taxes = IRRF_TABLE.find((item) => {
    if (item.max) { return (baseSalary >= item.min && baseSalary <= item.max) } else return baseSalary >= item.min
  })

  const aliquot = taxes?.aliquot || 0
  const IRPFDeduction = taxes?.deduction || 0

  return (baseSalary * aliquot) - IRPFDeduction
}
