console.log('Hello world from HTML')
let a = 5;
let b = 10;
let c = 11;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.'); // \n = xuống dòng
console.log('Fifteen is ' + a + b + ' and\nnot ' + (2 * a + b) + '.'); // \n = xuống dòng

console.log(`Check string : a = ${a} b = ${b} a + b = ${a + b}`) //template string
console.log(`/hoidanit/${a}`)


// var jsonData = '[{"rank":"9","content":"Alon","UID":"5"},{"rank":"6","content":"Tala","UID":"6"}]';

// $.ajax({
//     url: '/echo/json/',
//     type: 'POST',
//     data: {
//         json: jsonData
//     },
//     success: function (response) {
//         var trHTML = '';
//         $.each(response, function (i, item) {
    let trHTML = '';
            trHTML += `
            <tr>
                <td>${a}</td>
                <td>${b}</td>
                <td>${c}</td>
            </tr>`
            // trHTML += '<tr><td>' + item.rank + '</td><td>' + item.content + '</td><td>' + item.UID + '</td></tr>';
        // });
        console.log(trHTML)
//         $('#records_table').append(trHTML);
//     }
// });