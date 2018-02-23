module.exports = function solveEquation(equation) {
 	var a,b,c='';
var d, x1, x2=0;
var x=[];
equation = equation.split(' ');
a=equation[0];
if (equation[3]=='-') {
    b='-'+equation[4];
    
} else {
    b=equation[4];
};
if (equation[7]=='-') {
        c='-'+equation[8];
} else {
        c=equation[8];
};
a=+a;
b=+b;
c=+c;
d=b*b-(4*a*c);
d=Math.sqrt(d);
x1=Math.round((-b+d)/(2*a));
x2=Math.round((-b-d)/(2*a));
if (x1<x2){
	x[0]=x1;
	x[1]=x2;
} else {
	x[0]=x2;
	x[1]=x1;
};
return(x);
}
