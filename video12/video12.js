console.log('hello world from HTML')
let arrTop4 = ["Man City", 'Liverpool', 'Mu', 'Chelsea'];

// for(let i = 0; i < arrTop4.length;i++) {
//     console.log('Top: ',i +1, arrTop4[i]);
// }

let i = 0;
let flag = false;

while(!flag)
{
     console.log('Top: ',i +1, i);
     i++;
     if (i === 10) flag = true;
}

// do {
//     console.log('Top: ',i +1, arrTop4[i]);
//     i++;
// } while (i < 4)
