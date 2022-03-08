const API_CITIES_BASE_URL = "http://localhost:3000/villes";

// function addCity(){
//     $("#liste-villes").append("<li>Bayonne</li>")
// }

function addCityJQ(cityName){
    $("#liste-villes").append(`<li>${cityName}</li>`)
}

function addCityJS(cityName){
    const cityHTML = document.createElement("li")
    cityHTML.innerText=cityName
    document.getElementById("liste-villes").append(cityHTML)
}

function changeTitle(){
    $("#section-villes h2")
        .text("Villes du Sud-Ouest")
        .css("background-color", "yellow")
}

function deleteCities() {
    // 1ere
    $("#liste-villes li:first-child").remove()
    // celle à la position 2 (commence à 1)
    $("#liste-villes li:nth-child(2)").remove()
}

function deleteCityByNameV1(cityName){
    // https://api.jquery.com/each
    // parcoure les elements : index, element (JS)
    $("#liste-villes li").each(function(i,cityHTML){
        if (cityHTML.innerText==cityName) {
            cityHTML.remove()
        }
    })
}

function deleteCityByNameV2(cityName){
    $("#liste-villes li").each(function(){
        if ($(this).text()==cityName) {
            $(this).remove()
        }
    })
}

function deleteCityByNameV3(cityName){
    // https://api.jquery.com/filter/
    $("#liste-villes li")
        .filter((i,cityHTML) => cityHTML.innerText == cityName)
        .remove()
}

function cleanCities() {
    // $("#liste-villes").html("")
    $("#liste-villes").html(null)
    // document.getElementById("#liste-villes").innerHTML=""
    // document.getElementById("#liste-villes").innerHTML=null
}

function writeReadAttributes(){
    // https://api.jquery.com/html/
    // https://api.jquery.com/text/
    // https://api.jquery.com/attr
    // https://api.jquery.com/val/
    // https://api.jquery.com/category/manipulation/class-attribute/ (addClass,removeClass,toggleClass,hasClass)
    
    // change width, height with .css
    $("#bandeau").css("height","200px")
    // read attr
    const url = $("#bandeau").attr("src")
    console.log("Image bandeau url", url)
    // change attr
    $("#bandeau").attr("src", 
        "https://www.chateauversailles.fr/sites/default/files/styles/visuel_principal_home/public/visuels_principaux/couv_2021_2_0.jpg?itok=HMVhJhJ5")
    // change attr class
    $("#liste-villes li:last-child").addClass("active")
    $("#liste-villes li:nth-child(3n+1)").addClass("active")
    $("#liste-villes li:nth-child(3n+1)").addClass("active")
    $("#liste-villes li:nth-child(3n+1)").addClass("sieste")
    $("#liste-villes li:nth-child(3n+1)").removeClass("sieste")
    console.log($("#liste-villes li:last-child").hasClass("active"))
}

function displayCities(cities) {
    cleanCities();
    cities.forEach(c => addCityJS(c.name))
}

function loadCitiesMock(){
    const cities = [
        {name:"Pau"},
        {name:"Arbus"},
        {name:"Abos"}    
    ]
    displayCities(cities)   
}

// AJAX en JS
// https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
// https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState

// AJAX en jQuery
function loadCitiesApiAjax() {
    // https://api.jquery.com/jquery.ajax/
    $.ajax(API_CITIES_BASE_URL,{
        //accepts: {}
        method: 'GET'
    })
    .done(function(data){
        // data : JSON deserialisé en objet JavaScript
        console.log(data)
        displayCities(data)
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("Error while loading cities:",textStatus, errorThrown)
    })
}

// appels simplifiés avec get,post (pas de delete, put, patch => ajax)

function loadCitiesApiGet() {
    // https://api.jquery.com/jQuery.get
    $.get(API_CITIES_BASE_URL, function(data){
        // data : JSON deserialisé en objet JavaScript
        console.log(data)
        displayCities(data)
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("Error while loading cities:",textStatus, errorThrown)
    })
}

function postCity(city){
    // https://api.jquery.com/jQuery.post/
    $.post(API_CITIES_BASE_URL,city,null, 'json')
        .done(function(data){
            console.log("City added:", data)
            // sol 1 : refaire un get pour avoir la liste complete et rafraichir
            // loadCitiesApiGet()
            // sol 2 : ajouter uniquement dans le HTML
            addCityJS(data.name)
            // sol 3 : ajouter data à un cache local puis sol2
        })
        .fail(function(xhr){
            console.log("Error whileadding city:", xhr.status)
        })
}


// events :
// * JQuery : 
//      https://api.jquery.com/on/ 
//      https://api.jquery.com/category/events/
//      (click, submit, load, ready, mouseenter, mouseleave, ...)

function initToggleActive(){
    $("#liste-villes li").on("click",function(e){
        // if ($(this).hasClass("active")) {
        //     $(this).removeClass("active")   
        // } else {
        //     $(this).addClass("active")
        // }
        $(this).toggleClass("active")
        // e.target.classList.add("active")
    })
}

function initSubmitForm(){
    $("#form-city").on("submit",function(e){
        e.preventDefault();
        const city = {
            name: $("#name").val(),
            cp: $("#cp").val(),
            pop: $("#pop").val(),
            tdf: $("#tdf").val()
        }
        console.log("Submit form city", city)
        postCity(city)
    })
}

// 3 ways of initialising events in a web page
// NB: window onload  is after document ready (DOM load in memory finished)

// pure javascript
// window.onload=loadCitiesMock

// with jQuery

//$(window).on("load", loadCitiesMock)

$(window).on("load",function(e) {
    // loadCitiesMock();
    // loadCitiesApiAjax();
    loadCitiesApiGet();   
    initToggleActive();
    initSubmitForm();
})

// $(document).ready(loadCitiesMock)