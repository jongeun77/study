const name ='김루나';
const age ='20';
let addr ='서울';

//이름은 김루나이고 나이는 20살 이며 주소는 서울입니다.
console.log('이름은', name, '나이는', age, '이고 주소는', addr, '입니다.');
// %s 문자열, %d 정수형
console.log('이름은 %s 이고 나이는 %d이며 주소 %s입니다.', name,age,addr);
//이스케이프 (잘안슴)
const msg = '안녕하세요 저는 \'김태리\'이고 나이는 22살이며 주소는 제주도입니다.';
console.log('김태리 신상: %s',msg);
//%s 문자  %d 숫자