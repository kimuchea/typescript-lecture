//const today = new Date();
//console.log(today.toISString()); // 현재 날짜와 시간
//const seconds = today.getSeconds(); // 초
//console.log(seconds); // 초
//const oneHoursAGO=
//today.setHours()-1; // 1시간 전

import dayjs from 'dayjs'; // dayjs 라이브러리 import
const today = dayjs(); // 현재 날짜와 시간
console.log(today.toISOString()); // 현재 날짜와 시간
console.log(today.toISOString()); // 현재 날짜와 시간

// const worldCupFinalDate = dayjs('2002-06-30');
// console.log(worldCupFinalDate.format('YYYY.MM.DD'));

//TODO: 2002년 월드컵 결승전 날짜를 dayjs 생성하여
//TODO: yyyy.mm.dd 형식으로 출력하세요

const worldCupFinalDate = dayjs('2002-06-30');
const formattedDate =
  worldCupFinalDate.format('YYYY.MM.DD');
console.log(formattedDate); // 2002.06.30
