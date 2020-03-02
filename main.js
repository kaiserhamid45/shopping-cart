const addItem = document.getElementById('addItem');
addItem.addEventListener('click', function() {
    const itemOneTotal = singleItemAdd('quantity', 1219);
    document.getElementById('unitPrice').innerText = itemOneTotal;
    taxCalculation();
});
const addItem1 = document.getElementById('addItem1');
addItem1.addEventListener('click', function() {
    const itemTwoTotal = singleItemAdd('quantity1', 50);
    document.getElementById('unitPrice1').innerText = itemTwoTotal;
    taxCalculation();
});
 
const deleteItem = document.getElementById('deleteItem');
deleteItem.addEventListener('click', function() {
    const itemOneTotalAfterdelete = singleItemDelete('quantity', 1219);
    document.getElementById('unitPrice').innerText = itemOneTotalAfterdelete;
    taxCalculation();
});
 
const deleteItem1 = document.getElementById('deleteItem1');
deleteItem1.addEventListener('click', function() {
    const itemTwoTotalAfterdelete = singleItemDelete('quantity1', 59);
    document.getElementById('unitPrice1').innerText = itemTwoTotalAfterdelete;
    taxCalculation();
});
 
// taxCalculation();
/** Funcion For Tax and sub-total Calculation */
function taxCalculation() {
    const subTotal1 = converSpantext('unitPrice');
    const subTotal2 = converSpantext('unitPrice1');
    const subTotal = subTotal1 + subTotal2;
    const tax = subTotal * 0.15;
    const grandTotal = subTotal + tax;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grandTotal').innerText = grandTotal;
}
 
 
 
function converSpantext(id) {
    return parseFloat(document.getElementById(id).innerText);
    // return 10
}
function singleItemAdd(id, unitPrice) {
    const qunatity = document.getElementById(id).value;
    const quantityNumber = parseFloat(qunatity);
    const newQuantity = quantityNumber + 1;
    document.getElementById(id).value = newQuantity;
    const totalPrice = unitPrice * newQuantity;
    return totalPrice;
}
 
function singleItemDelete(id, unitPrice) {
    const qunatity = document.getElementById(id).value;
    const quantityNumber = parseFloat(qunatity);
    const newQuantity = quantityNumber - 1;
    document.getElementById(id).value = newQuantity;
    const totalPrice = newQuantity * unitPrice;
    return totalPrice;
}
 
function hideBlock(id) {
    const cartItem1 = document.getElementById(id);
    cartItem1.style.display = 'none';
}