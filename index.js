//TODO: 2025-03-15 ~ 2025-04-16 사이의 날짜가 몇일 차이인지 게산해서
//TODO: console.log()로 띄어봅시다
//? 힌트: 1초=1000ms,1분 60*1000,1시간 60*60*1000
//? 타임스탬프를 구하는 메소드는 getTime()입니다

const startTime = new Date('2025-03-15').getTime();
const endTime = new Date('2025-04-16').getTime();
const diffTime = endTime - startTime;
const diffDay = diffTime / (1000 * 60 * 60 * 24); // 날짜차이를 계산
console.log(diffDay); //32밀리초 단위로 차이계산

console.log(diffDay); //32일 차이
//? 힌트: 1초=1000ms,1분 60*1000,1시간 60*60*1000

const string1 = '2025-03-15';
const string2 = '2025-04-16';
