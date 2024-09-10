// // const country = 'Bangladesh';
// // const division = "Dhaka";
// // const district = `Gazipur`;
// // const thana = new String('Joydebpur');

// // console.log(country, division, district, thana);

// // console.log(country.length);
// // console.log(country[3]);


// //string is immutable (unchanging)
// division[0] = "F";
// console.log(division);

// // toLowerCase() and toUpperCase()
// const subject = 'Chemistry and Physics';
// const books = subject.toLowerCase();
// const dept = subject.toUpperCase();
// console.log(subject);
// console.log(books);
// console.log(dept);

// // trim()
// let drink = ' water  ';
// let liquid = '    water   ';
// console.log(drink === liquid);
// console.log(drink.trim() === liquid.trim());

// // slice()
// const address = 'Gazipur';
// const part = address.slice(2,5);
// console.log(part);

// // split()
// const sentence = 'Sifat is a Black Dog';
// console.log(sentence.split());
// console.log(sentence.split(''));
// console.log(sentence.split( ));
// console.log(sentence.split('a'));
// const friends = 'rahim,karim,fahim,nahid,shaheed';
// console.log(friends.split(','));

// // join()
// const friends2 = [ 'rahim', 'karim', 'fahim', 'nahid', 'shaheed' ];
// console.log(friends2.join('-'));

// // concat()
// const first = 'Mehedi';
// const middle = 'Hasan'
// const last = 'Rafy';
// const fullName1 = first + last;
// const fullName2 = first.concat(' ').concat(middle).concat(' ').concat(last);
// console.log(fullName);

// // includes()
// const dog = 'Sifat doggyy';
// console.log(dog.includes('g'));
// console.log(dog.includes('x'));

// reversing a string
// const goal = 'I want to learn web development.';
// let reverse = '';
// for (let letter of goal){
//     reverse = letter + reverse;
// }
// console.log(reverse);
// let rev = goal.split('').reverse().join('');
// console.log(rev);