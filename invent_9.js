var INT = 1000;
var i = 0;
var yy = 256;
var xx = 32;
var x = 1;
var y = 8;
var sxx = new Array(15);
var syy = new Array(15);
var sx = new Array(15);
var sy = new Array(15);
var num = new Array(11);
var key = false;
var win = false;

sxx[0] = 64; syy[0] = 96;
sxx[1] = 64; syy[1] = 352;
sxx[2] = 128; syy[2] = 352;
sxx[3] = 128; syy[3] = 416;
sxx[4] = 160; syy[4] = 64;
sxx[5] = 192; syy[5] = 64;
sxx[6] = 224; syy[6] = 64;
sxx[7] = 256; syy[7] = 224;
sxx[8] = 320; syy[8] = 224;
sxx[9] = 384; syy[9] = 224;
sxx[10] = 416; syy[10] = 160;
sxx[11] = 448; syy[11] = 288;
sxx[12] = 448; syy[12] = 320;
sxx[13] = 448; syy[13] = 352;
sxx[14] = 448; syy[14] = 384;
sx[0] = 2; sy[0] = 3;
sx[1] = 2; sy[1] = 11;
sx[2] = 4; sy[2] = 11;
sx[3] = 4; sy[3] = 13;
sx[4] = 5; sy[4] = 2;
sx[5] = 6; sy[5] = 2;
sx[6] = 7; sy[6] = 2;
sx[7] = 8; sy[7] = 7;
sx[8] = 10; sy[8] = 7;
sx[9] = 12; sy[9] = 7;
sx[10] = 13; sy[10] = 5;
sx[11] = 14; sy[11] = 9;
sx[12] = 14; sy[12] = 10;
sx[13] = 14; sy[13] = 11;
sx[14] = 14; sy[14] = 12;


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
left();
}
if(k == 38)
{
up();
}
if(k == 39)
{
right();
}
if(k == 40)
{
down();
}
}

function down()
{
if(!win && ((x == 2 && y == 3) || (x == 2 && y == 4) || (x == 2 && y == 5) || (x == 2 && y == 6) || (x == 2 && y == 7) || (x == 2 && y == 8) || (x == 2 && y == 9) || (x == 2 && y == 10) || (x == 2 && y == 11) || (x == 2 && y == 12) || (x == 4 && y == 3) || (x == 4 && y == 4) || (x == 4 && y == 11) || (x == 4 && y == 12) || (x == 5 && y == 2) || (x == 6 && y == 2) || (x == 6 && y == 11) || (x == 6 && y == 12) || (x == 7 && y == 2) || (x == 8 && y == 7) || (x == 10 && y == 7) || (x == 10 && y == 10) || (x == 10 && y == 11) || (x == 10 && y == 12) || (x == 12 && y == 3) || (x == 12 && y == 7) || (x == 13 && y == 4) || (x == 13 && y == 8) || (x == 13 && y == 9) || (x == 13 && y == 10) || (x == 13 && y == 11) || (x == 13 && y == 12) || (x == 14 && y == 3) || (x == 14 && y == 9) || (x == 14 && y == 10) || (x == 14 && y == 11) || (x == 17 && y == 3) || (x == 17 && y == 4)))
{
yy+=32;
y+=1;
document.getElementById('tae').style.top=yy;
if(x == 17 && y == 5 && key)
{
invention();
}
}
else
{
}
}

function up()
{
if(!win && ((x == 2 && y == 4) || (x == 2 && y == 5) || (x == 2 && y == 6) || (x == 2 && y == 7) || (x == 2 && y == 8) || (x == 2 && y == 9) || (x == 2 && y == 10) || (x == 2 && y == 11) || (x == 2 && y == 12) || (x == 2 && y == 13) || (x == 4 && y == 4) || (x == 4 && y == 5) || (x == 4 && y == 12) || (x == 4 && y == 13) || (x == 5 && y == 3) || (x == 6 && y == 3) || (x == 6 && y == 12) || (x == 6 && y == 13) || (x == 7 && y == 3) || (x == 8 && y == 8) || (x == 10 && y == 8) || (x == 10 && y == 11) || (x == 10 && y == 12) || (x == 10 && y == 13) || (x == 12 && y == 8) || (x == 12 && y == 4) || (x == 13 && y == 5) || (x == 13 && y == 9) || (x == 13 && y == 10) || (x == 13 && y == 11) || (x == 13 && y == 12) || (x == 13 && y == 13) || (x == 14 && y == 4) || (x == 14 && y == 10) || (x == 14 && y == 11) || (x == 14 && y == 12) || (x == 17 && y == 4) || (x == 17 && y == 5)))
{
yy-=32;
y-=1;
document.getElementById('tae').style.top=yy;
if(x == 10 && y == 10)
{
key = true;
document.getElementById('k').src="blk_1.bmp";
document.getElementById('kiy').src="k.bmp";
INT = 500;
}
}
else
{
}
}

function left()
{
if(!win && ((x == 2 && y == 8) || (x == 3 && y == 3) || (x == 3 && y == 5) || (x == 3 && y == 8) || (x == 3 && y == 11) || (x == 3 && y == 13) || (x == 4 && y == 3) || (x == 4 && y == 5) || (x == 4 && y == 8) || (x == 4 && y == 11) || (x == 4 && y == 13) || (x == 5 && y == 3) || (x == 5 && y == 8) || (x == 5 && y == 13) || (x == 6 && y == 2) || (x == 6 && y == 3) || (x == 6 && y == 8) || (x == 6 && y == 13) || (x == 7 && y == 2) || (x == 7 && y == 3) || (x == 7 && y == 8) || (x == 8 && y == 3) || (x == 8 && y == 8) || (x == 9 && y == 3) || (x == 9 && y == 8) || (x == 10 && y == 3) || (x == 10 && y == 8) || (x == 11 && y == 3) || (x == 11 && y == 8) || (x == 11 && y == 13) || (x == 12 && y == 3) || (x == 12 && y == 8) || (x == 12 && y == 13) || (x == 13 && y == 4) || (x == 13 && y == 8) || (x == 13 && y == 13) || (x == 14 && y == 4) || (x == 14 && y == 9) || (x == 14 && y == 10) || (x == 14 && y == 11) || (x == 14 && y == 12) || (x == 15 && y == 3) || (x == 16 && y == 3) || (x == 17 && y == 3) || (x == 18 && y == 5)))
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
if(!win && ((x == 1 && y == 8) || (x == 2 && y == 3) || (x == 2 && y == 5) || (x == 2 && y == 8) || (x == 2 && y == 11) || (x == 2 && y == 13) || (x == 3 && y == 3) || (x == 3 && y == 5) || (x == 3 && y == 8) || (x == 3 && y == 11) || (x == 3 && y == 13) || (x == 4 && y == 3) || (x == 4 && y == 8) || (x == 4 && y == 13) || (x == 5 && y == 2) || (x == 5 && y == 3) || (x == 5 && y == 8) || (x == 5 && y == 13) || (x == 6 && y == 2) || (x == 6 && y == 3) || (x == 6 && y == 8) || (x == 7 && y == 3) || (x == 7 && y == 8) || (x == 8 && y == 3) || (x == 8 && y == 8) || (x == 9 && y == 3) || (x == 9 && y == 8) || (x == 10 && y == 3) || (x == 10 && y == 8) || (x == 10 && y == 13) || (x == 11 && y == 3) || (x == 11 && y == 8) || (x == 11 && y == 13) || (x == 12 && y == 4) || (x == 12 && y == 8) || (x == 12 && y == 13) || (x == 13 && y == 4) || (x == 13 && y == 9) || (x == 13 && y == 10) || (x == 13 && y == 11) || (x == 13 && y == 12) || (x == 14 && y == 3) || (x == 15 && y == 3) || (x == 16 && y == 3)))
{
xx+=32;
x+=1;
document.getElementById('tae').style.left=xx;
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
if((x == sx[0] && y == sy[0]) || (x == sx[1] && y == sy[1]) || (x == sx[2] && y == sy[2]) || (x == sx[3] && y == sy[3]) || (x == sx[4] && y == sy[4]) || (x == sx[5] && y == sy[5]) || (x == sx[6] && y == sy[6]) || (x == sx[7] && y == sy[7]) || (x == sx[8] && y == sy[8]) || (x == sx[9] && y == sy[9]) || (x == sx[10] && y == sy[10]) || (x == sx[11] && y == sy[11]) || (x == sx[12] && y == sy[12]) || (x == sx[13] && y == sy[13]) || (x == sx[14] && y == sy[14]))
{
key = false;
document.getElementById('kiy').src = "blk.bmp";
document.getElementById('k').src = "ke.bmp";
INT = 1000;
}
}

function s_a_a()
{
sxx[0] += 32;
sx[0] += 1;
syy[0] += 0;
sy[0] += 0;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_b()', INT);
}

function s_a_b()
{
sxx[0] += 32;
sx[0] += 1;
syy[0] += 0;
sy[0] += 0;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_c()', INT);
}

function s_a_c()
{
sxx[0] += 0;
sx[0] += 0;
syy[0] += 32;
sy[0] += 1;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_d()', INT);
}

function s_a_d()
{
sxx[0] += 0;
sx[0] += 0;
syy[0] += 32;
sy[0] += 1;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_e()', INT);
}

function s_a_e()
{
sxx[0] -= 32;
sx[0] -= 1;
syy[0] += 0;
sy[0] += 0;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_f()', INT);
}

function s_a_f()
{
sxx[0] -= 32;
sx[0] -= 1;
syy[0] += 0;
sy[0] += 0;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_g()', INT);
}

function s_a_g()
{
sxx[0] += 0;
sx[0] += 0;
syy[0] -= 32;
sy[0] -= 1;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_h()', INT);
}

function s_a_h()
{
sxx[0] += 0;
sx[0] += 0;
syy[0] -= 32;
sy[0] -= 1;
document.getElementById('s1').style.left=sxx[0];
document.getElementById('s1').style.top=syy[0];
setTimeout('s_a_a()', INT);
}

function s_b_a()
{
sxx[1] += 32;
sx[1] += 1;
syy[1] += 0;
sy[1] += 0;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_b()', INT);
}

function s_b_b()
{
sxx[1] += 32;
sx[1] += 1;
syy[1] += 0;
sy[1] += 0;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_c()', INT);
}

function s_b_c()
{
sxx[1] += 0;
sx[1] += 0;
syy[1] += 32;
sy[1] += 1;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_d()', INT);
}

function s_b_d()
{
sxx[1] += 0;
sx[1] += 0;
syy[1] += 32;
sy[1] += 1;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_e()', INT);
}

function s_b_e()
{
sxx[1] -= 32;
sx[1] -= 1;
syy[1] += 0;
sy[1] += 0;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_f()', INT);
}

function s_b_f()
{
sxx[1] -= 32;
sx[1] -= 1;
syy[1] += 0;
sy[1] += 0;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_g()', INT);
}

function s_b_g()
{
sxx[1] += 0;
sx[1] += 0;
syy[1] -= 32;
sy[1] -= 1;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_h()', INT);
}

function s_b_h()
{
sxx[1] += 0;
sx[1] += 0;
syy[1] -= 32;
sy[1] -= 1;
document.getElementById('s2').style.left=sxx[1];
document.getElementById('s2').style.top=syy[1];
setTimeout('s_b_a()', INT);
}

function s_c_a()
{
sxx[2] += 0;
sx[2] += 0;
syy[2] += 32;
sy[2] += 1;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_b()', INT);
}

function s_c_b()
{
sxx[2] += 0;
sx[2] += 0;
syy[2] += 32;
sy[2] += 1;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_c()', INT);
}

function s_c_c()
{
sxx[2] -= 32;
sx[2] -= 1;
syy[2] += 0;
sy[2] += 0;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_d()', INT);
}

function s_c_d()
{
sxx[2] -= 32;
sx[2] -= 1;
syy[2] += 0;
sy[2] += 0;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_e()', INT);
}

function s_c_e()
{
sxx[2] += 0;
sx[2] += 0;
syy[2] -= 32;
sy[2] -= 1;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_f()', INT);
}

function s_c_f()
{
sxx[2] += 0;
sx[2] += 0;
syy[2] -= 32;
sy[2] -= 1;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_g()', INT);
} 

function s_c_g()
{
sxx[2] += 32;
sx[2] += 1;
syy[2] += 0;
sy[2] += 0;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_h()', INT);
}

function s_c_h()
{
sxx[2] += 32;
sx[2] += 1;
syy[2] += 0;
sy[2] += 0;
document.getElementById('s3').style.left=sxx[2];
document.getElementById('s3').style.top=syy[2];
setTimeout('s_c_a()', INT);
}

function s_d_a()
{
sxx[3] -= 32;
sx[3] -= 1;
syy[3] += 0;
sy[3] += 0;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_b()', INT);
}

function s_d_b()
{
sxx[3] -= 32;
sx[3] -= 1;
syy[3] += 0;
sy[3] += 0;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_c()', INT);
}

function s_d_c()
{
sxx[3] -= 0;
sx[3] -= 0;
syy[3] -= 32;
sy[3] -= 1;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_d()', INT);
}

function s_d_d()
{
sxx[3] -= 0;
sx[3] -= 0;
syy[3] -= 32;
sy[3] -= 1;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_e()', INT);
}

function s_d_e()
{
sxx[3] += 32;
sx[3] += 1;
syy[3] += 0;
sy[3] += 0;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_f()', INT);
}

function s_d_f()
{
sxx[3] += 32;
sx[3] += 1;
syy[3] += 0;
sy[3] += 0;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_g()', INT);
}

function s_d_g()
{
sxx[3] -= 0;
sx[3] -= 0;
syy[3] += 32;
sy[3] += 1;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_h()', INT);
}

function s_d_h()
{
sxx[3] -= 0;
sx[3] -= 0;
syy[3] += 32;
sy[3] += 1;
document.getElementById('s4').style.left=sxx[3];
document.getElementById('s4').style.top=syy[3];
setTimeout('s_d_a()', INT);
}

function s_e_a()
{
num[0] = Math.round(Math.random()*2-.5);
if(num[0] == 1)
{
sxx[4] = 160;
syy[4] = 64;
sx[4] = 5;
sy[4] = 2;
document.getElementById('s5').style.left=sxx[4];
document.getElementById('s5').style.top=syy[4];
}
else
{
sxx[4] = 160;
syy[4] = 96;
sx[4] = 5;
sy[4] = 3;
document.getElementById('s5').style.left=sxx[4];
document.getElementById('s5').style.top=syy[4];
}
setTimeout('s_e_a()', INT);
}

function s_f_a()
{
num[1] = Math.round(Math.random()*2-.5);
if(num[1] == 1)
{
sxx[5] = 192;
syy[5] = 64;
sx[5] = 6;
sy[5] = 2;
document.getElementById('s6').style.left=sxx[5];
document.getElementById('s6').style.top=syy[5];
}
else
{
sxx[5] = 192;
syy[5] = 96;
sx[5] = 6;
sy[5] = 3;
document.getElementById('s6').style.left=sxx[5];
document.getElementById('s6').style.top=syy[5];
}
setTimeout('s_f_a()', INT);
}

function s_g_a()
{
num[2] = Math.round(Math.random()*2-.5);
if(num[2] == 1)
{
sxx[6] = 224;
syy[6] = 64;
sx[6] = 7;
sy[6] = 2;
document.getElementById('s7').style.left=sxx[6];
document.getElementById('s7').style.top=syy[6];
}
else
{
sxx[6] = 224;
syy[6] = 96;
sx[6] = 7;
sy[6] = 3;
document.getElementById('s7').style.left=sxx[6];
document.getElementById('s7').style.top=syy[6];
}
setTimeout('s_g_a()', INT);
}

function s_h_a()
{
num[3] = Math.round(Math.random()*2-.5);
if(num[3] == 1)
{
sxx[7] = 256;
syy[7] = 224;
sx[7] = 8;
sy[7] = 7;
document.getElementById('s8').style.left=sxx[7];
document.getElementById('s8').style.top=syy[7];
}
else
{
sxx[7] = 256;
syy[7] = 256;
sx[7] = 8;
sy[7] = 8;
document.getElementById('s8').style.left=sxx[7];
document.getElementById('s8').style.top=syy[7];
}
setTimeout('s_h_a()', INT);
}

function s_i_a()
{
num[4] = Math.round(Math.random()*2-.5);
if(num[4] == 1)
{
sxx[8] = 320;
syy[8] = 224;
sx[8] = 10;
sy[8] = 7;
document.getElementById('s9').style.left=sxx[8];
document.getElementById('s9').style.top=syy[8];
}
else
{
sxx[8] = 320;
syy[8] = 256;
sx[8] = 10;
sy[8] = 8;
document.getElementById('s9').style.left=sxx[8];
document.getElementById('s9').style.top=syy[8];
}
setTimeout('s_i_a()', INT);
}

function s_j_a()
{
num[5] = Math.round(Math.random()*2-.5);
if(num[5] == 1)
{
sxx[9] = 384;
syy[9] = 224;
sx[9] = 12;
sy[9] = 7;
document.getElementById('s10').style.left=sxx[9];
document.getElementById('s10').style.top=syy[9];
}
else
{
sxx[9] = 384;
syy[9] = 256;
sx[9] = 12;
sy[9] = 8;
document.getElementById('s10').style.left=sxx[9];
document.getElementById('s10').style.top=syy[9];
}
setTimeout('s_j_a()', INT);
}

function s_k_a()
{
num[6] = Math.round(Math.random()*2-.5);
if(num[6] == 1)
{
sxx[10] = 416;
syy[10] = 128;
sx[10] = 13;
sy[10] = 4;
document.getElementById('s11').style.left=sxx[10];
document.getElementById('s11').style.top=syy[10];
}
else
{
sxx[10] = 416;
syy[10] = 160;
sx[10] = 13;
sy[10] = 5;
document.getElementById('s11').style.left=sxx[10];
document.getElementById('s11').style.top=syy[10];
}
setTimeout('s_k_a()', INT);
}

function s_l_a()
{
num[7] = Math.round(Math.random()*2-.5);
if(num[7] == 1)
{
sxx[11] = 448;
syy[11] = 288;
sx[11] = 14;
sy[11] = 9;
document.getElementById('s12').style.left=sxx[11];
document.getElementById('s12').style.top=syy[11];
}
else
{
sxx[11] = 416;
syy[11] = 288;
sx[11] = 13;
sy[11] = 9;
document.getElementById('s12').style.left=sxx[11];
document.getElementById('s12').style.top=syy[11];
}
setTimeout('s_l_a()', INT);
}

function s_m_a()
{
num[8] = Math.round(Math.random()*2-.5);
if(num[8] == 1)
{
sxx[12] = 448;
syy[12] = 320;
sx[12] = 14;
sy[12] = 10;
document.getElementById('s13').style.left=sxx[12];
document.getElementById('s13').style.top=syy[12];
}
else
{
sxx[12] = 416;
syy[12] = 320;
sx[12] = 13;
sy[12] = 9;
document.getElementById('s13').style.left=sxx[12];
document.getElementById('s13').style.top=syy[12];
}
setTimeout('s_m_a()', INT);
}

function s_n_a()
{
num[9] = Math.round(Math.random()*2-.5);
if(num[9] == 1)
{
sxx[13] = 448;
syy[13] = 352;
sx[13] = 14;
sy[13] = 11;
document.getElementById('s14').style.left=sxx[13];
document.getElementById('s14').style.top=syy[13];
}
else
{
sxx[13] = 416;
syy[13] = 352;
sx[13] = 13;
sy[13] = 11;
document.getElementById('s14').style.left=sxx[13];
document.getElementById('s14').style.top=syy[13];
}
setTimeout('s_n_a()', INT);
}

function s_o_a()
{
num[10] = Math.round(Math.random()*2-.5);
if(num[10] == 1)
{
sxx[14] = 448;
syy[14] = 384;
sx[14] = 14;
sy[14] = 12;
document.getElementById('s15').style.left=sxx[14];
document.getElementById('s15').style.top=syy[14];
}
else
{
sxx[14] = 416;
syy[14] = 384;
sx[14] = 13;
sy[14] = 12;
document.getElementById('s15').style.left=sxx[14];
document.getElementById('s15').style.top=syy[14];
}
setTimeout('s_o_a()', INT);
}

function s_move()
{
setTimeout('s_a_a()', 250);
setTimeout('s_b_a()', 250);
setTimeout('s_c_a()', 250);
setTimeout('s_d_a()', 250);
setTimeout('s_e_a()', 250);
setTimeout('s_f_a()', 250);
setTimeout('s_g_a()', 250);
setTimeout('s_h_a()', 250);
setTimeout('s_i_a()', 250);
setTimeout('s_j_a()', 250);
setTimeout('s_k_a()', 250);
setTimeout('s_l_a()', 250);
setTimeout('s_m_a()', 250);
setTimeout('s_n_a()', 250);
setTimeout('s_o_a()', 250);
}