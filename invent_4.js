var INT = 400;
var i = 0;
var yy = 416;
var xx = 576;
var x = 18;
var y = 13;
var x1 = 64;
var y1 = 224;
var six = 2;
var siy = 7; 
var x2 = 192;
var y2 = 288;
var siix = 6;
var siiy = 9;
var x3 = 192;
var y3 = 224;
var siiix = 6;
var siiiy = 7;
var x4 = 64;
var y4 = 288;
var siiiix = 2;
var siiiiy = 9;
var x5 = 352;
var y5 = 320;
var siiiiix = 11;
var siiiiiy = 10;
var x6 = 512;
var y6 = 128;
var siiiiiix = 16;
var siiiiiiy = 4;
var key = false;
var win = false;

function red(obj)
{
obj.style.color="red";
}

function blue(obj)
{
obj.style.color="blue";
}

function inputIMG(img,row,col,id)
{
document.write("<img src='"+img+"' style='position:absolute;width:32px;height:32px' id='"+id+"'>");
document.images[i].style.top = row;
document.images[i].style.left = col;
i=i+1;
}

function b(bx,by)
{
inputIMG('blk.bmp',by*32,bx*32,'kiy');
}

function block(bx,by)
{
inputIMG('blk.bmp',by*32,bx*32,'');
}

function tae(yx,xy)
{
inputIMG('tae_0.bmp',xy*32,yx*32,'tae');
}

function tre(yyy,xxx)
{
inputIMG('treasure.bmp',xxx*32,yyy*32,'tre');
}

function sha(ya,xa,ide)
{
inputIMG('shadow.bmp',xa*32,ya*32,ide);
}

function ikey(yb,xb,de)
{
inputIMG('ke.bmp',xb*32,yb*32,de);
}

function move()
{
var k = window.event.keyCode;
if(k == 37)
{
left()
}
if(k == 38)
{
up()
}
if(k == 39)
{
right()
}
if(k == 40)
{
down()
}
}

function down()
{
if(!win && ((x == 2 && y == 2) || (x == 2 && y == 3) || (x == 2 && y == 7) || (x == 2 && y == 8) || (x == 4 && y == 2) || (x == 4 && y == 3) || (x == 4 && y == 4) || (x == 4 && y == 5) || (x == 4 && y == 6) || (x == 6 && y == 7) || (x == 6 && y == 8) || (x == 6 && y == 9) || (x == 6 && y == 10) || (x == 6 && y == 11) || (x == 7 && y == 1) || (x == 7 && y == 2) || (x == 8 && y == 8) || (x == 9 && y == 5) || (x == 9 && y == 6) || (x == 9 && y == 7) || (x == 9 && y == 12) || (x == 10 && y == 1) || (x == 10 && y == 2) || (x == 11 && y == 8) || (x == 11 && y == 9) || (x == 11 && y == 10) || (x == 11 && y == 11) || (x == 13 && y == 1) || (x == 13 && y == 2) || (x == 13 && y == 10) || (x == 13 && y == 11) || (x == 16 && y == 4) || (x == 16 && y == 5) || (x == 16 && y == 6) || (x == 16 && y == 7) || (x == 18 && y == 1) || (x == 18 && y == 2) || (x == 18 && y == 3) || (x == 18 && y == 4) || (x == 18 && y == 5) || (x == 18 & y == 6) || (x == 18 && y == 7) || (x == 18 && y == 8) || (x == 18 && y ==9) || (x == 18 && y == 10) || (x == 18 && y == 11) || (x == 18 && y == 12)))
{
yy+=32;
y+=1;
document.getElementById('tae').style.top=yy;
if(x == 2 && y == 4)
{
key = true;
document.getElementById('k').src="blk_1.bmp";
document.getElementById('kiy').src="k.bmp";
INT = 200;
}
}
else
{
}
}

function up()
{
if(!win && ((x == 2 && y == 3) || (x == 2 && y == 4) || (x == 2 && y == 8) || (x == 2 && y == 9) || (x == 4 && y == 3) || (x == 4 && y == 4) || (x == 4 && y == 5) || (x == 4 && y == 6) || (x == 4 && y == 7) || (x == 6 && y == 8) || (x == 6 && y == 9) || (x == 6 && y == 10) || (x == 6 && y == 11) || (x == 6 && y == 12) || (x == 7 && y == 2) || (x == 7 && y == 3) || (x == 7 && y == 4) || (x == 8 && y == 9) || (x == 9 && y == 6) || (x == 9 && y == 7) || (x == 9 && y == 8) || (x == 9 && y == 13) || (x == 10 && y == 2) || (x == 10 && y == 3) || (x == 11 && y == 9) || (x == 11 && y == 10) || (x == 11 && y == 11) || (x == 11 && y == 12) || (x == 13 && y == 2) || (x == 13 && y == 3) || (x == 13 && y == 11) || (x == 13 && y == 12) || (x == 16 && y == 5) || (x == 16 && y == 6) || (x == 16 && y == 7) || (x == 16 && y == 8) || (x == 18 && y == 2) || (x == 18 && y == 3) || (x == 18 && y == 4) || (x == 18 && y == 5) || (x == 18 && y == 6) || (x == 18 && y == 7) || (x == 18 && y == 8) || (x == 18 && y == 9) || (x == 18 && y == 10) || (x == 18 && y == 11) || (x == 18 && y == 12) || (x == 18 && y == 13)))
{
yy-=32;
y-=1;
document.getElementById('tae').style.top=yy;
}
else
{
}
}

function left()
{
if(!win && ((x == 3 && y == 2) || (x == 3 && y == 7) || (x == 3 && y == 9) || (x == 4 && y == 2) || (x == 4 && y == 7) || (x == 4 && y == 9) || (x == 5 && y == 7) || (x == 5 && y == 9) || (x == 6 && y == 7) || (x == 6 && y == 9) || (x == 7 && y == 9) || (x == 7 && y == 12) || (x == 8 && y == 1) || (x == 8 && y == 9) || (x == 8 && y == 12) || (x == 9 && y == 1) || (x == 9 && y == 8) || (x == 9 && y == 12) || (x == 10 && y == 1) || (x == 10 && y == 5) || (x == 10 && y == 8) || (x == 10 && y == 13) || (x == 11 && y == 3) || (x == 11 && y == 5) || (x == 11 && y == 8) || (x == 12 && y == 3) || (x == 12 && y == 5) || (x == 12 && y == 10) || (x == 12 && y == 12) || (x == 13 && y == 3) || (x == 13 && y == 10) || (x == 13 && y == 12) || (x == 14 && y == 1) || (x == 14 && y == 12) || (x == 15 && y == 1) || (x == 15 && y == 12) || (x == 16 && y == 1) || (x == 16 && y == 12) || (x == 17 && y == 1) || (x == 17 && y == 4) || (x == 17 && y == 6) || (x == 17 && y == 8) || (x == 17 && y == 12) || (x == 18 && y == 1) || (x == 18 && y == 4) || (x == 18 && y == 6) || (x == 18 && y == 8) || (x == 18 && y == 12)))
{
xx-=32;
x-=1;
document.getElementById('tae').style.left=xx;
}
else
{
}
}


function right()
{
if(!win && ((x == 2 && y == 2) || (x == 2 && y == 7) || (x == 2 && y == 9) || (x == 3 && y == 2) || (x == 3 && y == 7) || (x == 3 && y == 9) || (x == 4 && y == 7) || (x == 4 && y == 9) || (x == 5 && y == 7) || (x == 5 && y == 9) || (x == 6 && y == 9) || (x == 6 && y == 12) || (x == 7 && y == 1) || (x == 7 && y == 9) || (x == 7 && y == 12) || (x == 8 && y == 1) || (x == 8 && y == 8) || (x == 8 && y == 12) || (x == 9 && y == 1) || (x == 9 && y == 5) || (x == 9 && y == 8) || (x == 9 && y == 13) || (x == 10 && y == 3) || (x == 10 && y == 5) || (x == 10 && y == 8) || (x == 11 && y == 3) || (x == 11 && y == 5) || (x == 11 && y == 10) || (x == 11 && y == 12) || (x == 12 && y == 3) || (x == 12 && y == 10) || (x == 12 && y == 12) || (x == 13 && y == 1) || (x == 13 && y == 12) || (x == 14 && y == 1) || (x == 14 && y == 12) || (x == 15 && y == 1) || (x == 15 && y == 12) || (x == 16 && y == 1) || (x == 16 && y == 4) || (x == 16 && y == 6) || (x == 16 && y == 8) || (x == 16 && y == 12) || (x == 17 && y == 1) || (x == 17 && y == 4) || (x == 17 && y == 6) || (x == 17 && y == 8) || (x == 17 && y == 12)))
{
xx+=32;
x+=1;
document.getElementById('tae').style.left=xx;
if(x == 12 && y == 5 && key)
{
invention();
}
}
else
{
}
}

document.onkeydown=move;

function invention()
{
INT = 0;
document.getElementById('pro').style.display="inline";
document.getElementById('tre').src="o_box.bmp";
win = true;
INT = 0;
}

setInterval('chk()', 25);

function chk()
{
if((x == six && y == siy) || (x == siix && y == siiy) || (x == siiix && y == siiiy) || (x == siiiix && y == siiiiy) || (x == siiiiix && y == siiiiiy) || (x == siiiiiix && y == siiiiiiy))
{
key = false;
document.getElementById('kiy').src = "blk.bmp";
document.getElementById('k').src = "ke.bmp";
INT = 400;
}
}

function s_a_a()
{
x1 += 32;
six += 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_b()', INT);
}

function s_a_b()
{
x1 += 32;
six += 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_c()', INT);
}

function s_a_c()
{
x1 += 32;
six += 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_d()', INT);
}

function s_a_d()
{
x1 += 32;
six += 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_e()', INT);
}

function s_a_e()
{
x1 += 0;
six += 0;
y1 += 32;
siy += 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_f()', INT);
}

function s_a_f()
{
x1 += 0;
six += 0;
y1 += 32;
siy += 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_g()', INT);
}

function s_a_g()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_h()', INT);
}

function s_a_h()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_i()', INT);
}

function s_a_i()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_j()', INT);
}

function s_a_j()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_k()', INT);
}

function s_a_k()
{
x1 += 0;
six += 0;
y1 -= 32;
siy -= 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_l()', INT);
}

function s_a_l()
{
x1 += 0;
six += 0;
y1 -= 32;
siy -= 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_a()', INT);
}

function s_b_a()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_b()', INT);
}

function s_b_b()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_c()', INT);
}

function s_b_c()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_d()', INT);
}

function s_b_d()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_e()', INT);
}

function s_b_e()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_f()', INT);
}

function s_b_f()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_g()', INT);
}

function s_b_g()
{
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_h()', INT);
}

function s_b_h()
{
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_i()', INT);
}

function s_b_i()
{
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_j()', INT);
}

function s_b_j()
{
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_k()', INT);
}

function s_b_k()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_l()', INT);
}

function s_b_l()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_a()', INT);
}

function s_c_a()
{
x3 += 0;
siiix += 0;
y3 += 32;
siiiy += 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_b()', INT);
}

function s_c_b()
{
x3 += 0;
siiix += 0;
y3 += 32;
siiiy += 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_c()', INT);
}

function s_c_c()
{
x3 -= 32;
siiix -= 1;
y3 += 0;
siiiy += 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_d()', INT);
}

function s_c_d()
{
x3 -= 32;
siiix -= 1;
y3 += 0;
siiiy += 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_e()', INT);
}

function s_c_e()
{
x3 -= 32;
siiix -= 1;
y3 += 0;
siiiy += 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_f()', INT);
}

function s_c_f()
{
x3 -= 32;
siiix -= 1;
y3 += 0;
siiiy += 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_g()', INT);
}

function s_c_g()
{
x3 += 0;
siiix += 0;
y3 -= 32;
siiiy -= 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_h()', INT);
}

function s_c_h()
{
x3 += 0;
siiix += 0;
y3 -= 32;
siiiy -= 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_i()', INT);
}

function s_c_i()
{
x3 += 32;
siiix += 1;
y3 -= 0;
siiiy -= 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_j()', INT);
}

function s_c_j()
{
x3 += 32;
siiix += 1;
y3 -= 0;
siiiy -= 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_k()', INT);
}

function s_c_k()
{
x3 += 32;
siiix += 1;
y3 -= 0;
siiiy -= 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_l()', INT);
}

function s_c_l()
{
x3 += 32;
siiix += 1;
y3 -= 0;
siiiy -= 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_a()', INT);
}

function s_d_a()
{
x4 += 0;
siiiix += 0;
y4 -= 32;
siiiiy -= 1;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_b()', INT);
}

function s_d_b()
{
x4 += 0;
siiiix += 0;
y4 -= 32;
siiiiy -= 1;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_c()', INT);
}

function s_d_c()
{
x4 += 32;
siiiix += 1;
y4 += 0;
siiiiy += 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_d()', INT);
}

function s_d_d()
{
x4 += 32;
siiiix += 1;
y4 += 0;
siiiiy += 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_e()', INT);
}

function s_d_e()
{
x4 += 32;
siiiix += 1;
y4 += 0;
siiiiy += 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_f()', INT);
}

function s_d_f()
{
x4 += 32;
siiiix += 1;
y4 += 0;
siiiiy += 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_g()', INT);
}

function s_d_g()
{
x4 += 0;
siiiix += 0;
y4 += 32;
siiiiy += 1;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_h()', INT);
}

function s_d_h()
{
x4 += 0;
siiiix += 0;
y4 += 32;
siiiiy += 1;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_i()', INT);
}

function s_d_i()
{
x4 -= 32;
siiiix -= 1;
y4 -= 0;
siiiiy -= 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_j()', INT);
}

function s_d_j()
{
x4 -= 32;
siiiix -= 1;
y4 -= 0;
siiiiy -= 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_k()', INT);
}

function s_d_k()
{
x4 -= 32;
siiiix -= 1;
y4 -= 0;
siiiiy -= 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_l()', INT);
}

function s_d_l()
{
x4 -= 32;
siiiix -= 1;
y4 -= 0;
siiiiy -= 0;
document.getElementById('s4').style.left=x4;
document.getElementById('s4').style.top=y4;
setTimeout('s_d_a()', INT);
}

function s_e_a()
{
x5 += 32;
siiiiix += 1;
y5 += 0;
siiiiiy += 0;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_b()', INT);
}

function s_e_b()
{
x5 += 32;
siiiiix += 1;
y5 += 0;
siiiiiy += 0;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_c()', INT);
}

function s_e_c()
{
x5 += 0;
siiiiix += 0;
y5 += 32;
siiiiiy += 1;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_d()', INT);
}

function s_e_d()
{
x5 += 0;
siiiiix += 0;
y5 += 32;
siiiiiy += 1;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_e()', INT);
}

function s_e_e()
{
x5 -= 32;
siiiiix -= 1;
y5 += 0;
siiiiiy += 0;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_f()', INT);
}

function s_e_f()
{
x5 -= 32;
siiiiix -= 1;
y5 += 0;
siiiiiy += 0;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_g()', INT);
}

function s_e_g()
{
x5 += 0;
siiiiix += 0;
y5 -= 32;
siiiiiy -= 1;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_h()', INT);
}

function s_e_h()
{
x5 += 0;
siiiiix += 0;
y5 -= 32;
siiiiiy -= 1;
document.getElementById('s5').style.left=x5;
document.getElementById('s5').style.top=y5;
setTimeout('s_e_a()', INT);
}

function s_f_a()
{
x6 += 32;
siiiiiix += 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_b()', INT);
}

function s_f_b()
{
x6 += 32;
siiiiiix += 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_c()', INT);
}

function s_f_c()
{
x6 += 0;
siiiiiix += 0;
y6 += 32;
siiiiiiy += 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_d()', INT);
}

function s_f_d()
{
x6 += 0;
siiiiiix += 0;
y6 += 32;
siiiiiiy += 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_e()', INT);
}

function s_f_e()
{
x6 -= 32;
siiiiiix -= 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_f()', INT);
}

function s_f_f()
{
x6 -= 32;
siiiiiix -= 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_g()', INT);
}

function s_f_g()
{
x6 += 0;
siiiiiix += 0;
y6 += 32;
siiiiiiy += 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_h()', INT);
}

function s_f_h()
{
x6 += 0;
siiiiiix += 0;
y6 += 32;
siiiiiiy += 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_i()', INT);
}

function s_f_i()
{
x6 += 32;
siiiiiix += 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_j()', INT);
}

function s_f_j()
{
x6 += 32;
siiiiiix += 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_k()', INT);
}

function s_f_k()
{
x6 += 0;
siiiiiix += 0;
y6 -= 32;
siiiiiiy -= 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_l()', INT);
}

function s_f_l()
{
x6 += 0;
siiiiiix += 0;
y6 -= 32;
siiiiiiy -= 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_m()', INT);
}

function s_f_m()
{
x6 -= 32;
siiiiiix -= 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_n()', INT);
}

function s_f_n()
{
x6 -= 32;
siiiiiix -= 1;
y6 += 0;
siiiiiiy += 0;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_o()', INT);
}

function s_f_o()
{
x6 += 0;
siiiiiix += 0;
y6 -= 32;
siiiiiiy -= 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_p()', INT);
}

function s_f_p()
{
x6 += 0;
siiiiiix += 0;
y6 -= 32;
siiiiiiy -= 1;
document.getElementById('s6').style.left=x6;
document.getElementById('s6').style.top=y6;
setTimeout('s_f_a()', INT);
}

function s_move()
{
setTimeout('s_a_a()', 250);
setTimeout('s_b_a()', 250);
setTimeout('s_c_a()', 250);
setTimeout('s_d_a()', 250);
setTimeout('s_e_a()', 250);
setTimeout('s_f_a()', 250);
}