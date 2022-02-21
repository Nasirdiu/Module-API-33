//javaScript object Notation 
//JSON

//JSON stringify.
const shop={
    name:'Nasir',
    address:'Dhaka',
    mobile:{
        name:'Ipnone',price:2500,color:'green'
    },
    product:['laptop','bike','apple','mobile'],
    price:25000,
    isExpensive:false,
};

const shopString=JSON.stringify(shop);
// console.log(shop);
console.log(shopString);

//convert JSON to javaScript.
const converted=JSON.parse(shopString);
console.log(converted.product);