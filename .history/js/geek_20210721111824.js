fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
    .then((response) => response.json())
    .then((response) => console.log('fetch1 =>', response))
    .catch((error) => console.error('fetch1 error =>', error));



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
    .then((response) => console.log('fetch2 =>', response))
    .catch((error) => console.error('fetch2 =>', error));