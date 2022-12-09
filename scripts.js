let url = document.location.href
let nametext = document.getElementById('nametext')

function paginaprincipal() {
    if (url.includes("?listagem=padrao") !== true) {
    document.location.href = document.location.href+'?listagem=padrao'
    } else {
        return
    }
    
} 

if(url.includes("padrao")) {
    nametext.textContent = ""
}