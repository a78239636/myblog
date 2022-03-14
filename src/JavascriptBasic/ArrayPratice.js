"use strict"

/**
 * slice 函数 和 splice 函数
 *
 */
let a = [1, "2", "game"];
console.log(a.slice(-1));

let b = a.slice(-2);
console.log(b)

a.splice(0, 2, "let's", "start");

a.push( "In Winter");

console.log("替换元素后 数组 a = ", a)

a.forEach( ((value, index, array) => {
    console.log("序号 = ", index, "值 = ", value, "数组 = ", array)
   // array.splice(-1, 0, "bbb");
}))

let afterMap = a.map( (value => value.length ))

console.log("a数组中各个元素的长度为 =", afterMap)