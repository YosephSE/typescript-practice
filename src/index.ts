//  Generics 

function consoleName<T>(name: T): T {
    return name;
}

console.log(consoleName<string>('Yoseph'));