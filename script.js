const counterContent = document.querySelector('.countries-container')
 
const api = 'https://restcountries.com/v3.1/all'


fetch(api)
    .then((data) =>{
    return data.json()
})
.then(getData)

function getData(data){
    data.forEach(countries => {
        document.body.innerHTML += `<h1>${countries.name.common}</h1>`
    })
}