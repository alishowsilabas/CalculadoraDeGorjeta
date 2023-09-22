function formatingDisplays(value){
    value = value.toFixed(2)
    return 'R$ ' + value
}

function tipUpdate(){
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tipPercent').innerHTML = tipPercent + '%';
    document.getElementById('tipValue').innerHTML = formatingDisplays(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatingDisplays(billTotal);
    document.getElementById('splitValue').innerHTML = split;
    document.getElementById('billEachDisplay').innerHTML = formatingDisplays(billEach);
}
