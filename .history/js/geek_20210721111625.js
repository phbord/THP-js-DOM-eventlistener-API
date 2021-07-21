console.log('Méthode 1');

fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
    .then((response) => response.json())
    .then((response) => {
        console.log('Méthode 1');
        console.log(response.json());
    })
    .catch((error) => console.error('error =>', error));



console.log('\n------------\nMéthode 2');

// const URL = "TheAPIEndpointThatYouWant";
// const data = {
//     name: "Mathis",
//     password: "GigaPassword"
// };

// fetch(URL, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json" }
//     })
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));