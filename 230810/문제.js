//문제

const person = {
    name: ‘재현’,
    age: 20,
    gender: 'male'
};
const props = Object.keys(person);

//1번 풀이
for (let i = 0; i < props.length; i++) {
    console.log(`key: ${props[i]} , value: ${person[props[i]]}`);
};
// person.props[i]

//2번 풀이
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log(`key: ${Object.keys(person)[i]} , value: ${person[Object.keys(person)[i]]}`);
};


// for (let i = 0; i <  ; i++) {
//     console.log(`${key} : ${value}`);
// }


//문제

사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다.만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.

const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

let input = 0;
while (input !== -1) {
    input = parseInt(prompt(' 메뉴를 선택해주세요 : 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : -1 '));

    switch (input) {
        case 1:
            console.log(`${menu[0].name} : ${menu[0].price}`);
            break;
        case 2:
            console.log(`${menu[1].name} : ${menu[1].price}`);
            break;
        case 3:
            console.log(`${menu[2].name} : ${menu[2].price}`);
            break;
        case 4:
            console.log(`${menu[3].name} : ${menu[3].price}`);
            break;
        case 5:
            console.log(`${menu[4].name} : ${menu[4].price}`);
            break;
        case -1:
            console.log('종료합니다.');
            break;
        default:
            console.log('잘못된 번호입니다.')
    }
}

// let number = prompt();
// let close = 5;
// prompt([i])
// console.log(menu[`${key},${value}`]);
// if (close) {
//     console.log('종료합니다');
// };
// for (i = 0; i < ; i++) {
//     console.log(menu[`${key}, ${value}`]);
// }