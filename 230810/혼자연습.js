Q1. 1~100까지 짝수 합과 홀수 합 구하기

let sum1 = 0;
let sum2 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        continue;
    }
    sum1 = sum1 + i;
}
console.log(sum1)

for (let j = 1; j <= 100; j++) {
    if (j % 2 == 0) {
        continue;
    }
    sum2 = sum2 + j;
}
console.log(sum2);


for (let i = 0; i < 100)


    let sum1 = 0;
let sum2 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum1 = sum1 + i;
    } else if (i % 2 != 0) {
        sum2 = sum2 + i;
    }
}

