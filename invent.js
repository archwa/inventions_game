var INT = 500;
i = 0;
var yy = 32;
var xx = 32;
var x = 1;
var y = 1;
var key = false;
var x1 = 64;
var y1 = 160;
var six = 2;
var siy = 5; 
var x2 = 160;
var y2 = 64;
var siix = 5;
var siiy = 2;
var x3 = 416;
var y3 = 64;
var siiix = 13;
var siiiy = 2;
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

function tae(xy,yx)
{
inputIMG('tae_0.bmp',xy*32,yx*32,'tae');
}

function tre(xxx,yyy)
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

document.onkeydown=move;

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
if(!win && ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2) || (x == 1 && y == 10) || (x == 1 && y == 11) || (x == 2 && y == 3) || (x == 2 && y == 4) || (x == 2 && y == 5) || (x == 2 && y == 6) || (x == 3 && y == 1) || (x == 3 && y == 2) || (x == 4 && y == 5) || (x == 4 && y == 6) || (x == 4 && y == 7) || (x == 4 && y == 8) || (x == 4 && y == 9) || (x == 5 && y == 1) || (x == 5 && y == 2) || (x == 5 && y == 3) || (x == 6 && y == 4) || (x == 6 && y == 5) || (x == 6 && y == 6) || (x == 6 && y == 7) || (x == 6 && y == 11) || (x == 7 && y == 2) || (x == 7 && y == 3) || (x == 9 && y == 2) || (x == 9 && y == 3) || (x == 11 && y == 0) || (x == 11 && y == 1) || (x == 11 && y == 2) || (x == 11 && y == 3) || (x == 11 && y == 6) || (x == 11 && y == 7) || (x == 11 && y == 8) || (x == 13 && y == 0) || (x == 13 && y == 1) || (x == 13 && y == 2) || (x == 13 && y == 3) || (x == 13 && y == 6) || (x == 15 && y == 2) || (x == 15 && y == 3) || (x == 15 && y == 6) || (x == 17 && y == 3) || (x == 17 && y == 7) || (x == 17 && y == 8) || (x == 19 && y == 3) || (x == 19 && y == 4) || (x == 19 && y == 5) || (x == 19 && y == 6)))
{
yy+=32;
y+=1;
document.getElementById('tae').style.top=yy;
}
else
{
}
}

function up()
{
if(!win && ((x == 1 && y == 2) || (x == 1 && y == 3) || (x == 1 && y == 11) || (x == 1 && y == 12) || (x == 2 && y == 4) || (x == 2 && y == 5) || (x == 2 && y == 6) || (x == 2 && y == 7) || (x == 3 && y == 2) || (x == 3 && y == 3) || (x == 4 && y == 6) || (x == 4 && y == 7) || (x == 4 && y == 8) || (x == 4 && y == 9) || (x == 4 && y == 10) || (x == 5 && y == 4) || (x == 5 && y == 3) || (x == 5 && y == 2) || (x == 6  && y == 5) || (x == 6 && y == 6) || (x == 6 && y == 7) || (x == 6 && y == 8) || (x == 6 && y == 12) || (x == 7 && y == 3) || (x == 7 && y == 4) || (x == 9 && y == 3) || (x == 9 && y == 4) || (x == 11 && y == 1) || (x == 11 && y == 2) || (x == 11 && y == 3) || (x == 11 && y == 4) || (x == 11 && y == 7) || (x == 11 && y == 8) || (x == 11 && y == 9) || (x == 13 && y == 1) || (x == 13 && y == 2) || (x == 13 && y == 3) || (x == 13 && y == 4) || (x == 13 && y == 7) || (x == 15 && y == 3) || (x == 15 && y == 4) || (x == 15 && y == 7) || (x == 17 && y == 4) || (x == 17 && y == 8) || (x == 17 && y == 9) || (x == 19 && y == 4) || (x == 19 && y == 5) || (x == 19 && y == 6) || (x == 19 && y == 7)))
{
yy-=32;
y-=1;
document.getElementById('tae').style.top=yy;
if(x == 15 && y == 6)
{
key = true;
document.getElementById('k').src="blk_1.bmp";
document.getElementById('kiy').src="k.bmp";
INT = 250;
}
if(x == 6 && y == 11 && key)
{
invention();
}
}
else
{
}
}

function left()
{
if(!win && ((x == 2 && y == 3) || (x == 2 && y == 10) || (x == 2 && y == 12) || (x == 3 && y == 3) || (x == 3 && y == 5) || (x == 3 && y == 7) || (x == 3 && y == 10) || (x == 3 && y == 12) || (x == 4 && y == 1) || (x == 4 && y == 5) || (x == 4 && y == 7) || (x == 4 && y == 10) || (x == 4 && y == 12) || (x == 5 && y == 1) || (x == 5 && y == 12) || (x == 6 && y == 2) || (x == 6 && y == 4) || (x == 6 && y == 12) || (x == 7 && y == 2) || (x == 7 && y == 4) || (x == 7 && y == 8) || (x == 8 && y == 2) || (x == 8 && y == 4) || (x == 8 && y == 8) || (x == 9 && y == 2) || (x == 9 && y == 4) || (x == 10 && y == 2) || (x == 10 && y == 4) || (x == 11 && y == 2) || (x == 11 && y == 4) || (x == 12 && y == 0) || (x == 12 && y == 6) || (x == 12 && y == 9) || (x == 13 && y == 0) || (x == 13 && y == 6) || (x == 13 && y == 9) || (x == 14 && y == 2) || (x == 14 && y == 4) || (x == 14 && y == 7) || (x == 14 && y == 9) || (x == 15 && y == 2) || (x == 15 && y == 4) || (x == 15 && y == 7) || (x == 15 && y == 9) || (x == 16 && y == 4) || (x == 16 && y == 9) || (x == 17 && y == 4) || (x == 17 && y == 9) || (x == 18 && y == 3) || (x == 18 && y == 7) || (x == 19 && y == 3) || (x == 19 && y == 7)))
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
if(!win && ((x == 1 && y == 3) || (x == 1 && y == 10) || (x == 1 && y == 12) || (x == 2 && y == 3) || (x == 2 && y == 5) || (x == 2 && y == 7) || (x == 2 && y == 10) || (x == 2 && y == 12) || (x == 3 && y == 1) || (x == 3 && y == 5) || (x == 3 && y == 7) || (x == 3 && y == 10) || (x == 3 && y == 12) || (x == 4 && y == 1) || (x == 4 && y == 12) || (x == 5 && y == 2) || (x == 5 && y == 4) || (x == 5 && y == 12) || (x == 6 && y == 2) || (x == 6 && y == 4) || (x == 6 && y == 8) || (x == 7 && y == 2) || (x == 7 && y == 4) || (x == 7 && y == 8) || (x == 8 && y == 2) || (x == 8 && y == 4) || (x == 9 && y == 2) || (x == 9 && y == 4) || (x == 10 && y == 2) || (x == 10 && y == 4) || (x == 11 && y == 0) || (x == 11 && y == 6) || (x == 11 && y == 9) || (x == 12 && y == 0) || (x == 12 && y == 6) || (x == 12 && y == 9) || (x == 13 && y == 2) || (x == 13 && y == 4) || (x == 13 && y == 7) || (x == 13 && y == 9) || (x == 14 && y == 2) || (x == 14 && y == 4) || (x == 14 && y == 7) || (x == 14 && y == 9) || (x == 15 && y == 4) || (x == 15 && y == 9) || (x == 16 && y == 4) || (x == 16 && y == 9) || (x == 17 && y == 3) || (x == 17 && y == 7) || (x == 18 && y == 3) || (x == 18 && y == 7)))
{
xx+=32;
x+=1;
document.getElementById('tae').style.left=xx;
}
else
{
}
}

function invention()
{
INT = 0;
document.getElementById('tre').src="o_box.bmp";
document.getElementById('pro').style.display="inline";
win = true;
}

function s_move()
{
setTimeout('s_a_a();', 250);
setTimeout('s_b_a();', 250);
setTimeout('s_c_a();', 250);
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
x1 += 0;
six += 0;
y1 += 32;
siy += 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_d()', INT);
}

function s_a_d()
{
x1 += 0;
six += 0;
y1 += 32;
siy += 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_e()', INT);
}

function s_a_e()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_f()', INT);
}

function s_a_f()
{
x1 -= 32;
six -= 1;
y1 += 0;
siy += 0;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_g()', INT);
}

function s_a_g()
{
x1 += 0;
six += 0;
y1 -= 32;
siy -= 1;
document.getElementById('s1').style.left=x1;
document.getElementById('s1').style.top=y1;
setTimeout('s_a_h()', INT);
}

function s_a_h()
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
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_b()', INT);
}

function s_b_b()
{
x2 += 32;
siix += 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_c()', INT);
}

function s_b_c()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_d()', INT);
}

function s_b_d()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_e()', INT);
}

function s_b_e()
{
x2 += 32;
siix += 1;
y2 -= 0;
siiy -= 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_f()', INT);
}

function s_b_f()
{
x2 += 32;
siix += 1;
y2 -= 0;
siiy -= 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_g()', INT);
}

function s_b_g()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_h()', INT);
}

function s_b_h()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_i()', INT);
}

function s_b_i()
{
x2 += 32;
siix += 1;
y2 -= 0;
siiy -= 0;
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
setTimeout('s_b_m()', INT);
}

function s_b_m()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_n()', INT);
}

function s_b_n()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_o()', INT);
}

function s_b_o()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_p()', INT);
}

function s_b_p()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_q()', INT);
}

function s_b_q()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_r()', INT);
}

function s_b_r()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_s()', INT);
}

function s_b_s()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_t()', INT);
}

function s_b_t()
{
x2 += 0;
siix += 0;
y2 += 32;
siiy += 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_u()', INT);
}

function s_b_u()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_v()', INT);
}

function s_b_v()
{
x2 -= 32;
siix -= 1;
y2 += 0;
siiy += 0;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_w()', INT);
}

function s_b_w()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_x()', INT);
}

function s_b_x()
{
x2 += 0;
siix += 0;
y2 -= 32;
siiy -= 1;
document.getElementById('s2').style.left=x2;
document.getElementById('s2').style.top=y2;
setTimeout('s_b_a()', INT);
}


function s_c_a()
{
x3 += 32;
siiix += 1;
y3 -= 0;
siiiy -= 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_b()', INT);
}

function s_c_b()
{
x3 += 32;
siiix += 1;
y3 += 0;
siiiy += 0;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_c()', INT);
}

function s_c_c()
{
x3 += 0;
siiix += 0;
y3 += 32;
siiiy += 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_d()', INT);
}

function s_c_d()
{
x3 += 0;
siiix += 0;
y3 += 32;
siiiy += 1;
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
siix += 0;
y3 -= 32;
siiiy -= 1;
document.getElementById('s3').style.left=x3;
document.getElementById('s3').style.top=y3;
setTimeout('s_c_a()', INT);
}

setInterval('chk()', 25);

function chk()
{
if((x == six && y == siy) || (x == siix && y == siiy) || (x == siiix && y == siiiy))
{
key = false;
document.getElementById('kiy').src = "blk.bmp";
document.getElementById('k').src = "ke.bmp";
INT = 500;
}
}