console.log('Métod');
fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
    .then((response) => response.json() )
    .then((response) => console.log(response) )
    .catch((error) => console.error('error:', error));
