import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#gifSearch').click(function() {
    const search = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=5&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`You Searched for ${search}: `);
      $(".showDescription").empty();
      for (let i = 0; i < response.data.length; i++) {
      $(".showDescription").append("<img src='" + response.data[i].images.original.url + "'style='height:350px; width:400px;'/>");
    }
    }
  });

  $('#gifTrending').click(function() {

    let request = new XMLHttpRequest();
    const url2 = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5&offset=0&lang=en`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url2, true);
    request.send();

    function getElements(response) {
      $(".showDescription").empty();
      for (let i = 0; i < response.data.length; i++) {
      $(".showDescription").append("<img src='" + response.data[i].images.original.url + "'style='height:350px; width:400px;'/>");
    }
    }
  });
  
  $('#gifRandom').click(function() {

    let request = new XMLHttpRequest();
    const url3 = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=`;
    console.log(url3);
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url3, true);
    request.send();

    function getElements(response) {
      $(".showDescription").empty();
      $(".showDescription").append("<img src='" + response.data.images.original.url + "'style='height:350px; width:400px;'/>");
    }
  });
});