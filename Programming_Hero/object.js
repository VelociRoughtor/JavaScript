// declaration
// const bottle = {
//     brand: 'mum',
//     quantity: '1L',
//     price: '20',
//     isClean: true
// }
// console.log(bottle);

// const subject = {
//     name: 'biology',
//     teacher: 'rakib',
//     examDate: '30 sept',
//     chapters: ['first', 'second', 'third'],
//     exams:{
//         name: 'Final exam',
//         marks: 100
//     },
//     'fav coaching': 'udvash'
// }
// console.log(subject);
// console.log(subject.teacher);
// console.log(subject.exams);
// console.log(subject.exams.marks);
// console.log(subject['exams']);
// subject.name = 'chemistry';
// console.log(subject["fav coaching"]);
// subject.free = 'palestine';
// console.log(subject);

// const computer = {
//     brand: 'lenovo',
//     price: 35000,
//     processor: 'intel',
//     hdd: '512gb'
// }
// const keys = Object.keys(computer);
// console.log(keys);
// console.log(keys[2]);
// const values = Object.values(computer);
// console.log(values);
// console.log(values[2]);

// const university = {
//     dept: 'CSE',
//     year: '2024',
//     session: '2021-22',
//     unique: {
//         speciality: 'session jot',
//         years: '6',
//         result: {
//             merit: 'top',
//             rank: '2nd',
//         }
//     }
// }
// console.log(university.unique.result.merit);
// university.unique.result.merit = 'bottom';
// console.log(university.unique.result.merit);
// delete university.unique.result;
// console.log(university);


// loop on a object
// const mobile = {
//     brand: 'Samsung',
//     price: 200000,
//     color: 'black',
//     camera: '12mp',
// }
// for(let properties in mobile){
//     console.log(properties, mobile[properties]);
// }
// const pencil = new Object();
// const rubber = Object.create({});