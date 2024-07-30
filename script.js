/*const apiUrl = 'https://api.exemplo.com/dados'; 

fetch(apiUrl)
.then(response => {

    if(!response.ok){
        throw new Error('A solicitação não foi bem sucedida.');
    } 
    return response.json();

})

.then(data => {
    console.log(data)
})


.catch(error =>[
 alert('Erro:', error.message)
]);
*/

//////////////////////////////////////////////////////////////////


const botao = document.getElementById('botao')
const catImages = document.getElementById('catImages')

botao.addEventListener('click', fetchCatImages)

function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20')
     .then(response => {
        if(!response.ok){
            throw new Error("A solicitaçao nao foi bem-sucedida")
        }
        return response.json();

    })
    .then(data => {
        catImages.innerHTML = '';
        data.forEach(cat => {
            const catImage = document.createElement('img')
            catImage.src = cat.url;
            catImage.alt = 'imagem de gato';
            catImages.appendChild(catImage)
        })
    })
    .catch(error => {
        console.error('Erro: ' , error)
    })
}; 

