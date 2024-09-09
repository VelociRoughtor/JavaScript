let numbers = [2, 43, 5, 97];
let friends = ['rabby', 'sabbir', 'riad'];
// console.log(friends[2]);

friends.push('mobassir', 'mahfuz', 'akib');
friends[0]='israk';
let out1 = friends.pop();
// console.log(friends.length);
// console.log(friends);

let out2 = friends.shift();
friends.unshift('Munni');
// console.log(friends);
// console.log(out1, out2);

// Methods

// console.log(friends.includes('sabbir'));
// if(friends.includes('emon')){
//     console.log("kire ki obostha riad");
// }
// else{
//     console.log('oh tui to friend na');
// }

// console.log(friends.indexOf('mahfuz'))

const food = 'ros o gol l a';
console.log(Array.isArray(friends));
console.log(Array.isArray(food));

console.log(friends.join('+'));
let newFriends = friends.slice(2,4);
console.log(newFriends);