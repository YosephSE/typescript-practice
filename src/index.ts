type SorN = string | number | boolean


type User = {name: string, birthDate: Date}

function greet(username: User): string{
    return `Hello, ${username.name}`
}

console.log(greet({name: "Yoseph", birthDate: new Date()}))