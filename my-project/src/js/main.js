// let json = '{"descriptions":[' +
//     '{"story" : "aa a aa aaa a"},' +
//     '{"story" : "bb bbb bbbb bbbb bbb" },' +
//     '{"story" : "cc ccc cccc cccc c"},' +
//     '{"story" : "dd dd ddd ddd" },' +
//     '{"story" : "ee eee eee eee" },' +
//     '{"story" : "ff ffff ffffff ff"},' +
//     '{"story" : "ggg gggg ggggg gg" }]}';
//
// const obj = JSON.parse(json);
// let listDescriptions = obj.descriptions;
// listDescriptions.forEach(el =>{
//    console.log(el.story);
// });
// let list = document.querySelectorAll('input[name="size"]');
// console.log(document.querySelectorAll('input[name="option"]'));
// document.querySelectorAll('input[name="option"]').forEach((radio) => {
//    radio.addEventListener('change', (event) => {
//       console.log(`Selected option: ${event.target.value}`);
//    });
// });
console.log('xxxxxxxxxxxxx');
const jsonUrl = "https://test-nabthat.netlify.app/public/json/data.json";

fetch(jsonUrl)
    .then(response => response.text()) // Pobranie danych jako tekst
    .then(text => {
        // Przetworzenie danych na obiekt JavaScript za pomocą JSON.parse()
        const jsonData = JSON.parse(text);

        // Przykładowe użycie danych
        processData(jsonData);
    })
    .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
    });

function processData(data) {
    // Funkcja do przetwarzania danych
    console.log('Dane przetworzone:', data);
}

let listOptions = document.querySelectorAll('input[name="option"]');
console.log('listOptions')
console.log(listOptions)
