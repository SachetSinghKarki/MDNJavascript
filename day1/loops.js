

// // // // // // // for (let steps = 0 ; steps < 5; steps++) {
// // // // // // //     console.log(`Step ${steps}`)
// // // // // // // }

// // // // // // let i = 0 
// // // // // // do {
// // // // // //     console.log(i)
// // // // // //     i++
// // // // // // }
// // // // // // while(i<5)



// // // // // let i = 0 
// // // // // do {
// // // // //     i+=1
// // // // //     console.log(i)
// // // // // }
// // // // // while(i<5)

// // // // let i = 0
// // // // do {
// // // //     console.log(i)
// // // //     i++
// // // // }
// // // // while(i<1)

// // // let i =0
// // // while(i<3){
// // //     i++
// // //     console.log(i)
// // // }

// // let i = 0
// // while(i<3){
// //     console.log(i)
// //     i++
// // }

// // i  = 0 , n. =0   0<5 true i++ = 1 1===3 no go down n = n+i
// // n = 1 clg 1 
// // i = 1 n = 1 1<5 true ++ 2 , 2===3 no go down 2+1 = 3
// // i = 2 n = 3 2<5 true ++ 2 , 3 === 3 true continue 
// // i= 3 n =3 3<5 true ++ 4, 4===3 false go down 4+3 = 7
// // i = 4 n = 7 4<5 true ++ 5 5===3 false go down 5+ 7 = 12
// // i = 5 n = 12 5<5 false end of the loop 
// // output : 1,3,7,12

// let i = 0
// let n = 0 

// while(i< 5) {
//     i++
//     if(i === 3) {
//         continue
//     }
//     n+=i
//     console.log(n)
// }


let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}