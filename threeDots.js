const ages1= [12, 13, 16, 17, 15, 20, 25];
const ages2= [13, 17, 18, 28, 30];
const ages3= [33,35,65,45];
const allAges= ages1.concat(ages2).concat([99]).concat(ages3);
// console.log(allAges);

// const businessMan = 650;
// const politician = 850;
// const sochib = 250;
// const maxNumber = Math.max(businessMan, politician, sochib);
// console.log(maxNumber);

const names = [22,45,66,87,99,44,32,34];
const megaFriend = Math.max(...names);
console.log(megaFriend);