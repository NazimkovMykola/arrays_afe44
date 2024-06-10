const afe44 = 'Андрій, Іван, Данило, Женя'
 
// масиви -  це сховище в якому можна зберігати різні типи данних 
// всі елементи які зберігаются в масиві мають - індекс
// щоб звернутися до елементу

//примітивні типи данних (7 типів)


//літерал масиву - []

//               0   1   2 -----------------    50
const myArray = [5, 10 , 25,                   100 ]

console.log(myArray[2])
// довжиною  - кількість елементів в масиві
const myArray2 = Array(3)
console.log(myArray2.length)

myArray2[0] = 'Mykola'
console.log(myArray2)

const items = [12, 654, 654, 444, 65465, 4 , 45,478]

// ------------ push,unshift(додають елементи) |  shift, pop (видалюять елементи)
// items.push(777)
// items.shift()
// console.log(items.splice(2,3))

console.log(items.slice(2))

// forEach - дозволяє перебрати весь массив
function printArrElement (element, index) {
    console.log(`Це елемент з індексом ${index} та зі значенням ${element}`)
}
// items.forEach(printArrElement)

items.forEach((element, index) => {
    const div = document.createElement('div')
    div.classList.add('element')
    div.textContent =  `Це елемент з індексом ${index} та зі значенням ${element}`
    document.body.appendChild(div)
})


const numbers = [2, 5, 10, 25, 35, 100, 10]
// пошук 

console.log(numbers.find((el) => el === 150))
console.log(numbers.findIndex((el) => el === 150))

//фільтрація 
console.log(numbers.filter((el) => el > 20))

const randomNumbersArray = []

for(let i = 0; i <=4 ; i++) {
    randomNumbersArray[i] = Math.floor(Math.random()*10)  //0 - 1 
}

console.log(randomNumbersArray)


console.log(Math.max(...randomNumbersArray))

let sum = null

randomNumbersArray.forEach(el => {
    sum = sum + el
})

const averageValue = sum / randomNumbersArray.length 

console.log(averageValue)