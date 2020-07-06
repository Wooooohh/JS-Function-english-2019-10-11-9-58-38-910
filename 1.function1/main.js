function reverseString(message){
  let ret = "";
  for(let i = 0; i < message.length; i++){
    let s = message.charAt(message.length-i-1)
    ret += s;
  }
  return ret;
}
reverseString('hello'); // should return 'olleh'
