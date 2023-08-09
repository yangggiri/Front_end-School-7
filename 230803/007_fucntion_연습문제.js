function add(x, y) {
    return x + y
}
add(1, 2)

function sub(x, y) {
    return x - y
}
sub(5, 1)

function multi(x, y) {
    return x * y
}
multi(5, 6)

function divide(x, y) {
    return x / y
}
divide(10, 2)

//string > 문자열
//문제 :  '10,000,000,000'와 같은 숫자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요
//parseInt > 문자열을 숫자로 변환해줌

function stringToNunber(str) {
    let = answer = parseInt(str.replaceAll(',', ''))
    return answer
}
stringToNunber('10,000,000,000')

//문제 : 입력된 문자열을 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요
//입력 : world
//출력 : ['w', 'o', 'r', 'l', 'd']
//split > 문자열을 배열로 변환시켜줌
function printAndSplit(str) {
    console.log(str)
    return str.split('')
}
printAndSplit('world')


//문제 : 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어주세요
//입력 : 1, 2
//출력 : (1 + 2) * (1 + 2) = 9


//1번 풀이

function add(x, y) {
    return x + y
}
function addAndMultiply(x, y) {
    let sum = x + y
    let multiply = sum * sum
    return multiply
}
addAndMultiply(1, 2)


//2번 풀이

function add(x, y) {
    return x + y
}
function addAndMultiply(x, y) {
    let sum = add(x, y) * add(x, y)
    return sum
}
addAndMultiply(1, 2)


//3번 풀이

function addAndMultiply(x, y) {
    //메모리 효율을 위해 함수를 내부에서 만들어서 사용
    function add(x, y) {
        return x + y
    }
    let sum = add(x, y) * add(x, y)
    return sum
}
addAndMultiply(1, 2)



//문제 : x**2 + 4x - 12 를 구해주는 함수를 만들어주세요
//입력 : 3
//출력 : 9 + 12 - 12 = 9

function calculate(x) {
    return x ** 2 + 4 * x - 12
}

calculate(3)