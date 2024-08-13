type SorN = string | number | boolean

type user = {name: string, birthDate: number}

function great(username: user): string{
    return `Hello, ${username.name}`
}

great({name: "Yoseph", birthDate: 45})