let input = document.getElementById("userInput");

const btnSearch = document
  .querySelector("button.btnSearch")
  .addEventListener("click", gifSearch);

input.addEventListener("keyup", function (event) {
  // enter listening
  if (event.keyCode === 13) {
    // Trigger search function
    gifSearch();
  }
});

function gifSearch() {
  let userInput = document.getElementById("userInput").value;
  let numLimit = 10;
  let limit = `&limit=${numLimit}`;
  let query = `q=${userInput}`;
  const api = "https://api.giphy.com/v1/gifs/search?";
  const apiKey = "&api_key=kXiXWCAvm98W38ZJORFwmIzqXIXAIyz5";
  // getting search in Giphy API
  var xhr = $.get(api + query + apiKey + limit);

  xhr.done(function (response) {
    let giff = response.data;
    console.log(giff);
    // loop through all responed data and display in container
    for (let i = 0; i < giff.length; i++) {
      let myImage = new Image();
      myImage.src = `${giff[i].images.original.url}`;
      let container = document.querySelector("div.container");
      container.appendChild(myImage);
    }
  });
  // clear input value
  document.getElementById("userInput").value = "";
  // clear gifs
  document.querySelector("div.container").innerHTML = "";
}