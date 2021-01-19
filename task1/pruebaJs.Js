var a = 1;
var b = 2;
var c = Math.sqrt(a*a + b*b);
var sum = a+b+c;
while(sum != 1000){
    if(sum > 1000){
        a++;
        b = a+1;
    } else {
        b++;
    }
    c = Math.sqrt(a*a + b*b);
    sum = a + b + c;
}
document.getElementById('a').innerHTML = a;
document.getElementById('b').innerHTML = b;
document.getElementById('c').innerHTML = c;
document.getElementById('resultado').innerHTML = a+b+c;