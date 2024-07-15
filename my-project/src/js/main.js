console.log('xxxxxxxxxxxxx');
console.log('aaaaaaaaaaaaa');
const jsonUrl = "https://test-nabthat.netlify.app/public/json/data.json";
let listOptions = document.querySelectorAll('input[name="option"]');
let listButtons = document.querySelectorAll('.button');
let boxText = document.querySelector('.box-text');
let element = document.createElement('div');
console.log('listButtons');
console.log(listButtons);
// fetch(jsonUrl)
//     .then(response => response.text()) // Pobranie danych jako tekst
//     .then(text => {
//         // Przetworzenie danych na obiekt JavaScript za pomocą JSON.parse()
//         const jsonData = JSON.parse(text);
//
//         // Przykładowe użycie danych
//         processData(jsonData);
//     })
//     .catch(error => {
//         console.error('Błąd podczas pobierania danych:', error);
//     });
//
// function processData(data) {
//     // Funkcja do przetwarzania danych
//     console.log('Dane przetworzone:', data);
//     let listDescriptions = data.descriptions;
//
//     listOptions.forEach((radio) => {
//         radio.addEventListener('change', (event) => {
//             listOptions.forEach((radio) => {
//                 let icon = radio.parentElement.querySelector('.fa-regular');
//                 if(radio.checked){
//                     icon.classList.remove("fa-circle");
//                     icon.classList.add("fa-circle-dot");
//                 }
//                 else {
//                     icon.classList.add("fa-circle");
//                     icon.classList.remove("fa-circle-dot");
//                 }
//             });
//         });
//     });
//
//     listButtons.forEach((button) => {
//         button.addEventListener('click', (event) => {
//             listOptions.forEach((radio) => {
//                 if(radio.checked){
//                     let listDiv = document.querySelectorAll('.box-text div');
//                     let listValue = [];
//                     listDiv.forEach(el=>{
//                         addIfNotExist(listValue, el.attributes.value.nodeValue);
//                     });
//                     console.log(listDiv)
//                     if (radio.value == 'one' && event.target.value == 'replace'){
//                         boxText.innerHTML = `<div value="0">${listDescriptions[0].story}</div>`;
//                     }
//                     else if(radio.value == 'one' && event.target.value == 'add'){
//                         addElement(listDescriptions[0].story, 0,listValue,boxText);
//                     }
//                     else if(radio.value == 'second' && event.target.value == 'replace'){
//                         boxText.innerHTML = `<div value="1">${listDescriptions[1].story}</div>`;
//                     }
//                     else if(radio.value == 'second' && event.target.value == 'add'){
//                         addElement(listDescriptions[1].story, 1, listValue, boxText);
//                     }
//                     else if(radio.value == 'random'){
//
//
//                         let index = random(listDescriptions.length, listValue);
//                         if(event.target.value == 'replace'){
//                             boxText.innerHTML = `<div value="${index}">${listDescriptions[index].story}</div>`;
//                         }
//                         else {
//                             addElement(listDescriptions[index].story, index, listValue,boxText);
//                         }
//                     }
//                 }
//             });
//         });
//     });
//
//
// }
//
// function addElement(text, value, listElement, boxText){
//     let div = document.createElement('div');
//     div.innerText = text;
//     div.setAttribute('value', value);
//     boxText.appendChild(div);
// }
// function addIfNotExist(list, value) {
//     if (!list.includes(value)) {
//         list.push(value);
//     }
// }
//
// function random(maxNumber, list) {
//     let randomNumber = Math.floor(Math.random() * maxNumber);
//
//     if(list.includes(randomNumber)){
//         return random(maxNumber, list)
//     }
//
//     return randomNumber;
// }
//
// let clearData = document.querySelector('.clear-data');
// let showData = document.querySelector('.show-data');
// let myData = document.querySelector('.my-data');
//
// clearData.addEventListener('click', () => {
//     boxText.innerHTML = '';
//     myData.style.display = "none";
//     listOptions.forEach((radio) => {
//         if (radio.checked) {
//             radio.checked = false;
//             let icon = radio.parentElement.querySelector('.fa-regular');
//             icon.classList.add("fa-circle");
//             icon.classList.remove("fa-circle-dot");
//         }
//     });
// });
//
// showData.addEventListener('click', () => {
//     if (myData.style.display === "none") {
//         myData.style.display = "block";
//     }
// });
