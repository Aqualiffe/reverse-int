module.exports = function reverse (n) {
    let str = n.toString();
    
    return  parseFloat (str.split('').reverse().join(''));
   
}
