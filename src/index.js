import $ from 'jquery'

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector("#word-list");


const wordCallUrl = "https://wordwatch-api.herokuapp.com/api/v1/top_word"

$(document).ready(() => {
  renderWordAndCount(wordCallUrl);
})

function renderWordAndCount(url) {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(wordObj) {
    console.log(Object.values(wordObj.word)[0])
    // var li = document.createElement('li')
    //
    // let word_key = Object.keys(wordObj.word)[0]
    // li.innerHTML = word_key
    const header = document.querySelector("#head");
    const count = document.querySelector("#count");
    // console.log(header.innerHTML + Object.keys(wordObj.word)[0])

    header.innerHTML = header.innerHTML + Object.keys(wordObj.word)[0]
    count.innerHTML = count.innerHTML + Object.values(wordObj.word)[0]
  })
  .catch(error => {
    return error
  });
}
