const api_url = 'https://programming-quotes-api.herokuapp.com/quotes/random';
let results = null;

document.querySelector('#getQuoteButton').addEventListener('click', getapi);

function quote(data) {
  let h2 = document.createElement('h2');
  h2.textContent = data.en;

  let h3 = document.createElement('h3');
  h3.textContent = data.author;
  
  document.querySelector('#quotes').appendChild(h2);
  document.querySelector('#quotes').appendChild(h3);
}

async function getapi() {
  const response = await fetch(api_url);

  if (response.ok) {
    let data = await response.json();
    //console.log(data)
    quote(data);
  }
}