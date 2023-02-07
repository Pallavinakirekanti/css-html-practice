function calculateBill(total,tax=0.13,tip=0.15){
    return total + (total*tax) + (total*tip);

}
const totalBill=calculateBill(120,undefined,2);
console.log(totalBill);