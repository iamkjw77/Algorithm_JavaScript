function solution(s, n) {
    /*
    var answer = '';
    var arr = s.split('');
    var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var b = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    for(var i=0;i<arr.length;i++){
      if(a.indexOf(arr[i]) != -1){
        if(a.indexOf(arr[i])+n > 25){
          answer += a[a.indexOf(arr[i])+n-26];
        }else{
          answer += a[a.indexOf(arr[i])+n];
        }
      }else if(b.indexOf(arr[i]) != -1){
        if(b.indexOf(arr[i])+n > 25){
          answer += b[b.indexOf(arr[i])+n-26];
        }else{
          answer += b[b.indexOf(arr[i])+n];
        }
      }else{
        answer+= ' ';
      }
    }
    return answer;
    */

    var answer = '';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(var i=0; i<s.length; i++){
      if(s[i] == ' '){
        answer += ' ';
        continue;
      }
      var word = lower.includes(s[i]) ? lower : upper;
      var index = word.indexOf(s[i])+n;
      if(index >= word.length) index -= word.length;
      answer += word[index];
    }

    return answer;
}

console.log(solution('a c z',25)); //z b y 출력
