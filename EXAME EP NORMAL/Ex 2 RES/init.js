// Injetar dados  da aplicação, para teste

let films = []   // Arrays que vai conter os objetos film


export function init() {

    let objectFilm = {
        title: "Star wars the rise of skywalker",
        genre:"Aventura",
        year: 2019
    }
    films.push(objectFilm)

    objectFilm = {
        title: "Oppenheimer",
        genre:"Acção",
        year: 2023
    }
    films.push(objectFilm)

    objectFilm = {
        title: "A Idade do Gelo: As Aventuras de Buck Wild",
        genre:"Comédia",
        year: 2022
    }
    films.push(objectFilm)

    return films
}