const axios = require("axios");
const URL="https://restcountries.com/v3.1/all"
/*
node js code debugging methods:
1. core node js 
2.node js inspector
3.built in debugger in ide
----
webstorm is best ide
*/
// const a=10
// const b=20
// const c=30
// const d=40
//
// const ab=a+b
// const cd=c+d
// const result=cd-ab
// console.log(result)

// case 2: make error. dont pass the value of c and check.return NaN
// const a=10
// const b=20
// const c
// const d=40
//
// const ab=a+b
// const cd=c+d
// const result=cd-ab
// console.log(result)

//case 3:

axios.get(URL)
    .then(function (response) {

        const countries=response.data
        return countries
    })
    .catch(function (error) {

        console.log(error);
    })
