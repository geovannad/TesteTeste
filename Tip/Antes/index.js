function calculando(){
    let bill = Number(document.getElementById('yourBill').value )
    let split = document.getElementById('splitValue').value
    let tip = document.getElementById('tipPercent')
   
    let tipValue = (tip / 100) * bill
    let billTotal = bill + tipValue
    let billEach = billTotal/split

    



}