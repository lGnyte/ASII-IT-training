function sendCUI(){
  fetch('https://salty-tor-02993.herokuapp.com/https://webservicesp.anaf.ro/PlatitorTvaRest/api/v6/ws/tva', {
    method: 'POST',
    headers : { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{
      'cui': 6859662,
      'data': '2022-05-12'
    }])
  })
  .then(response =>  response.json())
  .then( data => fillForm(data) )
  .catch(err => console.log("There was an error: " + err));
}
  
function fillForm(data){
  console.log(data.found[0].denumire)
}


// var url = "https://salty-tor-02993.herokuapp.com/https://webservicesp.anaf.ro/PlatitorTvaRest/api/v6/ws/tva";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};

// var data = `[

//                 {

//                     "cui": 6859662,

//                     "data": "2015-02-14"

//                 }
//   ]`;

// xhr.send(data);