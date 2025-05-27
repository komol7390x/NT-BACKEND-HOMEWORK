@ -1, 137 + 0, 0 @@
// Number
// task-1
let num1 = 5.33234
console.log(num1.toFixed(2));
// ----------------------------------
// task-2
console.log(num1.toPrecision(4));
// ----------------------------------
// task-3
let num2 = 12345
console.log(num2.toString(16));
// ----------------------------------
// task-4
let str1 = "42px"
console.log(parseInt(str1));
// ----------------------------------
// task-5
let str2 = "3.14m"
console.log(parseFloat(str2));
// ----------------------------------
// task-6
let str3 = "QweRtY"
if (Number.isNaN != str3) {
    console.log("Bu son emas");
}
// ----------------------------------
// task-7
let num3 = Infinity
if (num3 != isFinite) {
    console.log("Bu cheksiz son!");
}
// ----------------------------------
// task-8 
let num4 = -125;
console.log(Math.abs(num4));
// ----------------------------------
// task-9
console.log(Math.pow(2, 9));
// ----------------------------------
// task-10
console.log(Math.sqrt(81));
// ----------------------------------
// String
// task-11
console.log(str3.charAt(0));
// ----------------------------------
// task-12
console.log(str3.toUpperCase());
// ----------------------------------
// task-13
console.log(str3.toLowerCase());
// ----------------------------------
// task-14
let str4 = "      mnoga      ";
console.log(str4.trim());
// ----------------------------------
// task-15
console.log(str2.slice(0, 2));
// ----------------------------------
// task-16
console.log(str3.substring(5, 2));
// ----------------------------------
// task-17
console.log(str3.replace("Qwe", "Hello "));
// ----------------------------------
// task-18
console.log(str3.indexOf("Q"));
// ----------------------------------
// task-19
let str5 = "olma, anor, uzum";
let res2 = str5.split(",")
console.log(res2);
// ----------------------------------
// Number
// task-21
let num5 = 3.14;
console.log(Math.ceil(num5));
// ----------------------------------
// task-22
console.log(Math.floor(num5));
// ----------------------------------
// task-23
console.log(Math.round(num5));
// ----------------------------------
// task-24
console.log(Math.trunc(num5));
// ----------------------------------
// task-25
console.log(Math.random());
// ----------------------------------
// task-26
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.max(...arr1));
// ----------------------------------
// task-27
console.log(Math.min(...arr1));
// ----------------------------------
// task-28
if (Number.isInteger == num5) {
    console.log("Bu butun son");
} else {
    console.log("Bu kasrli son");
}
// ----------------------------------
// task-29
let str6 = "Salom ";
console.log(str6.repeat(3));
// ----------------------------------
// task-30
let num6 = 7;
console.log(str2.padStart(8, "b"));
// ----------------------------------
// task-31
console.log(str2.padEnd(8, "a"));
// ----------------------------------
// task-32
if (str2.endsWith("3")) {
    console.log("Ha");
} else {
    console.log("Yoq");
}
// ----------------------------------
// task-33
if (str2.endsWith("m")) {
    console.log("Ha");
} else {
    console.log("Yoq");
}
// ----------------------------------
// task-34
let str7 = "Salom ";
let str9 = "Dunyo"
console.log(str7.concat(str9));
// ----------------------------------
// task-35
let str8 = "qwertryqwwer";
console.log(str8.lastIndexOf("w"));