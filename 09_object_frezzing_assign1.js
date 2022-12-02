const bank_bod={
    branch:"Sangli",
    ifsc:"bod123456789",
    MICR_code:416312416,
    AccountNo:12071029
}
console.log(bank_bod);
const bank_location={
    street:"Aamrai Road",
    city:"Sangli",
    pin_Code:416416
}
console.log(bank_location);
console.log("-------------Clone objects using Object.assign()------------");
let bank_bodClone=Object.assign({},bank_bod);
console.log('Branch:${bank_bodClone.branch} ifsc:${bank_bodClone.ifsc} MICR:${bank_bodClone.MICR}  AccountNo:${bank_bodClone. AccountNo}');

let bank_locationClone=Object.assign({},bank_location);
console.log();('Street:${bank_locationClone.street} City:${bank_locationClone.city} Pin_Code:${bank_locationClone.pin_Code}');