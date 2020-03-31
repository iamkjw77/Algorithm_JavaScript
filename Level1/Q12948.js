function solution(phone_number) {
    for(var i=0;i<phone_number.length-4;i++){
      phone_number = phone_number.replace(phone_number[i],'*');
    }
    return phone_number;
}
console.log(solution("01012341234")); //"*******1234" 출력
