//code
var x = 10; // var là từ khoá khai báo biến: number, string, boolean (true/false); array (mảng), object

// let y = 20;
x = "hello"; // dynamic tatatype
var t = true
console.log(x); // giống print

var y = 20;

var z = y+10; // = 30

var k = x+y; // = hello20 -> strcot()

var u = y+x; // = 20hello
// với chuỗi sẵ sắp xếp theo thứ tự đưa vào
var o = y+"wourd"; // = 20word
var p = "hello" + "world" + y; // helloworld20
var a = "20" + 10; // = 2010
console.log(a);
console.log(y);
var b = 5 + 10 + 15 + "a"; // = 30a

if(y>10){

}else if(y>15){

}else{

}
for(var j = 0; j<10; j++){
    console.log("j="+j);
}
console.log("xin chào các bạn "+20+", chúc buổi sáng tốt lành");

// giá trị của y = 20, giá trị đẹp
console.log("giá trị của y = "+y+", giá trị đẹp");
// nếu muốn tạo 1 chuối và chèn giá gị vào thì dùng dấu "'"
console.log(`giá trị của y = ${y}, giá trị đẹp`);

// khai báo 1 hàm
function tinhtong(a,b){
    // retorn a + b;
    console.log(a+b);
}
var kq = tinhtong(4,5);

var arr = []; // mảng không bị giới hạn phần tử; các phần tử không cần cùng kiểu dữ liệu
arr[0] = "abc";
arr[1] = 15;
arr[2] = true;

// đưa phần tử vào cuối => trình tự đc như sau: abc - 15 - true - 17 - xyz
arr.push(17);
arr.push("xyz");
for(var i = 0; i < arr.length; i++) {

    console.log(arr[i])
}
//alert("Alert"); // màn hình sẽ hiện ra cảnh
//confirm("Bạn chắc chắn muốn nộp bài"); //
// var rs = confirm("Bạn chắc chắn muốn nộp bài")
// if(rs == true){
//    console.log("Người dùng đã đồng ý rồi, làm gì thì làm đi");
//}else{
 //   console.log("Huỷ bỏ chiến dịch");
//}

// prompt("Vui lòng nhập họ tên");
//var s = prompt("Vui lòng nhập họ tên"); //để lấy được giá trị nhập
//console.log(s);
// nếu nhập = string
// nếu không nhập + ok = string rỗng
// nếu nhấn cansel = null

//setTimeout(function (){
//    alert("Hello");
//},1000);
//var i = 0;
//setInterval(function () {
//       console.log("i="+i);
//       i++;
//    },3000); // cứ 3 giây chạy 1 lần
var span_min = document.getElementById("minutes");
var span_sec = document.getElementById("seconds");

var min = 10, sec = 0;
var timer = setInterval(function () {
   var m = min<10?"0"+min:min;
   var s = sec<10?"0"+sec:sec; // toán tử 3 ngôi

    span_min.innerText = m;
    span_sec.innerText = s;

    // làm thế nào để giảm thời gian
    sec--;
    if(sec<0){
        sec = 59;
        min--;
    }
    if(min<0){
        //dừng tại đây
        clearInterval(timer);
    }
},1000);