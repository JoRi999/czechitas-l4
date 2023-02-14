// DÚ číslo 1

let title = "Hoří, má panenko"

console.log(title)

console.log(title.length)
console.log(title.toUpperCase())
console.log(title.slice(0,7))
console.log(title.slice(title.length -5,title.length))

// DÚ číslo 2

let email = prompt("Zde zadejte svůj e-mail: ")

let atIndex = email.indexOf("@")

let celeJmeno = email.slice(0, atIndex)
let domena = email.slice(atIndex + 1, email.length)

let parsedEmail = {
    userName: celeJmeno,
    domain: domena,
}

let {userName, domain} = parsedEmail

document.body.innerHTML = 
    `<h2>Vaše údaje</h2>` +
    `<p>Uživatelské jméno: ${userName}</p>` +
    `<p>Doména: ${domain}</p>`













