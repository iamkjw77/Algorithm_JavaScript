function solution(x) {
    var num = 0;
    var y = x;

    while(y>=1){
        num += y%10;
        y = Math.floor(y/10);
    }
    return x%num == 0 ? true : false;
}

console.log(solution(13));
