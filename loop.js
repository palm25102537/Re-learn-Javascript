// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')

// for(let rep = 1;rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)
// }

// const loop = [
//     'Palm',
//     2022-1994,
//     'Wasin'
// ]

// for(let i = 0; i < loop.length; i++){
//     if(typeof loop[i] !== 'string') continue;
//     console.log(loop[i],typeof loop[i])

// }
// console.log('-----Break Loop ----')

// for(let i = 0; i < loop.length; i++){
//     if(typeof loop[i] === 'number') break;
//     console.log(loop[i],typeof loop[i])

// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1110, 86, 52];

function calcTips(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] <= 300) {
      tip = arr[i] * (1 + 15 / 100);
      res.push({ bill: arr[i], tip, total: arr[i] + tip });
    } else {
      tip = arr[i] * (1 + 20 / 100);
      res.push({ bill: arr[i], tip, total: arr[i] + tip });
    }
  }
  return res;
}

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const avg = total / arr.length;
  return avg;
}

const tips = calcTips(bills);
const avgTips = calcAverage(bills);

console.log("tips", tips);
console.log("avg", avgTips);

foo(6);

function foo(x) {
  alert(x);
  if (x < 9) {
    foo(x + 1);
  }
  alert(x);
}
