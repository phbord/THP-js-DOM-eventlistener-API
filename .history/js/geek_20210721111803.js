fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
    .then((response) => response.json())
    .then((response) => console.log('fetch1 =>', response))
    .catch((error) => console.error('fetch error =>', error));



const URL = "TheAPIEndpointThatYouWant";
const data = {
    name: "Mathis",
    password: "GigaPassword"
};

fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.error(error));