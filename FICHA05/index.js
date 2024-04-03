// Importa modulo dados.js
import * as data from "./dados.js";

// declara array employees
let employees = []
// invoda função data (módulo dados.js) para preencher automaticamente array de objetos
employees = data.init();

// 2. Adicionar employess
function addEmployee(nome, nif, salario, cidade, departamentos) {

    let  employee = { 
        name: nome,
        nif: nif,
        salary: salario,
        city: cidade,
        departments: departamentos,
        segSocial: function() {
            return (`${this.salary}` *.11)
        }
    }
employees.push(employee)
}

addEmployee('Ana Faria', 234212765, 2190, 'Porto', ['Production'])
addEmployee('Marco Marcolino', 244212765, 2500, 'Maia', ['Informatics', 'Health'])
console.log(employees.length)


// 3. Mostrar Employees um a um, em alerts
function showEmployees() {

    for (let employee of employees) {
        alert(
           `Nome: ${employee.name} 
            NIF: ${employee.nif}
            Cidade: ${employee.city}
            Salário: ${employee.salary}
            Departamentos: ${employee.departments}
            Seguraça Social: ${employee.segSocial()}`)
    }

}
showEmployees()


// 4. Total de salários
let totalSalaries = employees.reduce((sum, element) => sum+element.salary, 0)
alert(`Total de salários: ${totalSalaries}`)


//5. salario medio
let avgSalaries = employees.reduce((sum, element) => sum+element.salary, 0) / employees.length
alert(`Média de salários: ${avgSalaries.toFixed(2)}`)


// 6. Filtrar employees - Porto
let employeesList = employees.filter(element => element.city == "Porto")
for (let employee of employeesList) {
    console.log(employee)
}

//7. vetrificar se employee existe
function verifyEmployee(name) {
    return employees.some(element => element.name == name)
}
let name = "Ana Faria"
console.log('verifyEmployee', verifyEmployee(name))

name = "Ana faria"
console.log('verifyEmployee', verifyEmployee(name))

// 8. Vericar salario
function verifySalary() {
    console.log('verifysalary', employees.some(element => element.salary < 1500))
}
verifySalary()


//9. ordenar por ordem decrescente de nome

function sortEmployees() {
    employees.sort((a,b) => (a.name > b.name) ? 1: -1)
    employees.reverse()
    for (let employee of employees) {
        console.log(employee.name)
    }
}
sortEmployees()


//10. Filtrar employees do departamento Health 

console.log('employees do departamento Health:')
employeesList = employees.filter(element => element.departments.includes("Health"))
for (let employee of employeesList) {
    console.log(employee.name)
}

 //11.  acrescentar propriedade segSocial
  // está implementado no objeto - folha dados.js
  // assim como na função addEmployess()

//12. Está implementado na função showEmployees()