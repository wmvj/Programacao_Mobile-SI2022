// Tipagem explícita
let userName: boolean

// userName = "Warley"
// userName = 34
userName = true

// Tipagem implícita
let mensagem1 = "Ola, tudo bem"
mensagem1 = "certinho"

// Tipagem em arrays
let numbers: number[] = [1,2,3]

// Tipagem em funções
function sum(x:number,y:number):number{
   const result = x+y
   console.log("Resultado: " + result) 
   return result   
}

const result = sum(3,5)

//Tipagem em função anônima
const showMessage = (name:string):string => {
    const message = "Olá" + name
    return message
}

// Tipagem em objetos
let user:{name:string, age:number, avatarURL?:string} 
user = {name:"Samilly", age:21}

// Tipagem personalizada
interface Product{
    id: number,
    name: string,
    value: number
}

type Product2 = {
    id: number,
    name: string,
    value: number
}


function newProduct(product:Product){

}

newProduct({id:1, name:"Remedio", value:34.67})




