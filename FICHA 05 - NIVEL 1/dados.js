// OBJECTS

let employees = []

export function init() {
// Object that describes a person
let  employee = { 
        name: 'Maria Carla Pereira',
        nif: 111222333,
        salary: 2800,
        city: 'Porto',
        departments: ['CEO', 'Supervisor']
    }
employees.push(employee)
//------------------------
employee = { 
        name: 'Carlos Manuel Costa',
        nif: 234567890,
        salary: 1750,
        city: 'Maia',
        departments: ['Production']
    }
employees.push(employee)
//---------------------------
employee = { 
    name: 'Isabel Maria Teixeira',
    nif: 334567890,
    salary: 1950,
    city: 'Matosinhos',
    departments: ['Informatics', 'Health']
   
}
employees.push(employee)
//---------------------------
employee = { 
    name: 'Vasco Manuel Carvalho',
    nif: 434567890,
    salary: 2150,
    city: 'Matosinhos',
    departments: ['Informatics', 'Health']
   
}
employees.push(employee)
return employees
}