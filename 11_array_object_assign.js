class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
}

let axis_bank=new Bank("Axis","Pune",1232123212,"AXIS0021262","5%");
let sbi_bank=new Bank("SBI","Solapur",12321232455,"SBIN0021342","7%");
let icic_bank=new Bank("ICIC","Kolhapur",34567289301,"ICIC0021982","5%");
let kotak_bank=new Bank("Kotak","Pune",1232123212,"KOTAK0021262","7%");
let hdfc_bank=new Bank("HDFC","Sangli",1232123212,"HDFC0021262","4%");
let panjab_bank=new Bank("Panjab","Mumbai",1232123212,"PNB0021262","4%");

const array=[axis_bank,sbi_bank,icic_bank,kotak_bank,hdfc_bank,panjab_bank];
console.log(`--------------------------------C Bank Name and Location----------------------------`);
for (const a of array) {
    console.log(`${a.bank_name} ${a.location}`)
}
console.log(`--------------------------------D Kotak Bank Details----------------------------`);
for (const b of array) {
    if (b.bank_name=="Kotak") {
        console.log(`${b.bank_name} ${b.location} ${b.account_no} ${b.ifsc} ${b.interest_rate}  `);
    }
}

console.log(`--------------------------------E All Bank Details----------------------------`);
for (const c of array) {
    console.log(`${c.bank_name} ${c.location} ${c.account_no} ${c.ifsc} ${c.interest_rate}  `);
}