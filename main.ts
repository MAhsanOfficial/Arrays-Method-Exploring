
// ***************************************  ARRAYS  *******************************************

 // Array is set of Element and values

 let names :string[]=["Ali","Danish","arsaln","Uzair","Khan"]
// Acess the value "Index" number thats start is "0"
console.log(names[3]);     // uzair


let numArr = [1,2,3,4,5,6,7]
console.log(numArr[7]);      //undefined

let numArr2= [234,554,76,8856,785,433];
console.log(numArr2[4]);

// Find array elements
let numArr3 = [23,45,67,43,32,21]
console.log(numArr3.length);



// ****************** Nested Arrays :=>>>>
// Array Inside The array 


let courses  = ["Web Development","Graphic Designing","Devops",["Meta","ML","DL","Socail Engineering"]]
let select = courses[2]
console.log(select);            // Devops
 
let select2 = courses[3]
console.log(select);                      //Complete Second Array

let select3 = courses[3][2]
console.log(select3);                  // 2nd array acess and the 2nd Element index 2 "Dl"
 






//                   ********************* METHODS OF ARRAY *****************
// Method is that the  allow to easy acess and changes and updatation the Element and arrays

//    1) pop()   ==>>>                 //Delete the last element of array

let popArr = ["Ahsan","Habib","Aness","Faraz","Ali"]
popArr.pop()                 // so the ali is delete of the array
console.log(popArr);

let popArr2 :number[] = [23,45,667,879,98]
popArr.pop()
console.log(popArr2);         // delte last element in array  "98"




//     2) Push()  ===>>>            // The add on last element in array

let pushArr = ["IPhone","Samsung","vivo","Infinix"]
console.log(pushArr.push("Techno"));
 
let PushArr2= ["Dell","HP","MSI"]
PushArr2.push("MacOS","Lenovo")
console.log(pushArr);




//      3) Shift()   ===>>>                  Delete First Element Of Array

let shiftArr = ["PIA","Blue Air","Emirates"]
shiftArr.shift()               // delete the "PIA"
console.log(shiftArr);




//      4)UnShift ()   ===>>>                 Add the first Element in Array..

let unshiftArr = ["Karachi","'Lahore","Islamabad","Rawal Pindi"]
unshiftArr.unshift("Multan")
console.log(unshiftArr);




//      5) Slice()   ===>>>               Create new Array select element between the array...

let sliceArr = [1,2,3,4,5,6,7,8,9,10]
// splicArr.slice(2)          // Start Two Index create array but no stop on the last array 

let newArr =sliceArr.slice(3,8)          //Start 3 Index but end 8 number and Create new Array
console.log(newArr);




//     6) Splice()   ===>>>                  Method are Handle on three state the first is "index no" and 2nd is delete
                                    // "element number"  and third is "add element  the modify array

   let spliceArr = [23,34,35,57,78]
   spliceArr.splice( 1 ,  3 ,  100 , 200)
//                index delte   add  add
   console.log(spliceArr);

   let names2:string[] = ["Asad","Sheeraz","Sohail","Saad","Abdul"]
   names2.splice(3,2,"Nasir","Ahsan","Mohsin")
   console.log(names2);
   
   


//     7) Joint()  ===>>>                        Seprate Between element And Add element All element values
                                        // add string type

let joinArr :string[] = ["Mouse","Monitor","KeyBoard"];
let join = joinArr.join(" & ")
console.log(join);     // only string use in join method




//     8) Concat ()  ===>>>              Two Arrays merge on New Array
  
let arr1 :string[] = ["WebSite","Software","MobilePhone","Web Application"]
let arr2 :string[] = ["IOS Application","Networking","Pentration Testing"]


console.log(arr1.concat(arr2));                           // arr1 merge on arr3




//    9) tostring () ===>>>             This method return as a string in other words it conver number,array into string
  let a = 10
  let b = a.toString()
console.log(typeof(b));            // the type of b is "String"

let c = ["Pc","Laptop"]
console.log(c.toString());       // the simple value not a type of array this convert into string


 

//    10) Valueof ()    ===>>>         The Valueof() method returns the array
 
let arr4:any = [1213,false,"ahsan",4546] 
arr4.valueOf()
console.log(arr4);                // array all the element are print



 
//    11) fill()  ====>>>         The fill() fills all the elements in an array with a static value

let arr5  = ["Tea",false,123]
console.log(arr5.fill("Coffee"));            /// tea false 123 are cancel and fill out the coffee on three element



//  12) Include()  ===>>>        Array element include on main so answer is boolien

let inArr = ["Pakistan","USA","USE","India"]
console.log(inArr.includes("Pakistan"));         // Truee
console.log(inArr.includes("Brazil"));          // False






//  13) Sort () ====>>>           Sort is a Sorting is used to sort an array alphabatically

let sortArr:number[] = [4545,6734,343.123,56,932,22]
sortArr.sort()
console.log(sortArr);           // the sequance of number in line to line exicute 
                           



// 14) Reverse()          Reversing The Value 
let reverseArr = [234,"ahsan",32432,false,434,"Ali"]
reverseArr.reverse()
console.log(reverseArr);
