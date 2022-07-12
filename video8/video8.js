console.log("Hello World from HTML")


let obj = {
    name: 'Tung',
    firstName: 'Tran',  
    address: 'Ha Noi',
    email: 'suse.ron12900@gmail.com',
    gender: 'male',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    //     console.log('Hello world inside function')
    //     return ''
    // }
};

let b = 'name';
//obj[b] = 'Hary' dùng như nhau giữa 2 cách
obj.name = 'Ron';

let c = obj.fullName;

console.log('type of a: ', typeof a, ' type of b: ', typeof b)

console.log('What is your name?', `My name is: `, obj.name, c) 

console.log('Where are you from?', `I'm from: `, obj['address'])


