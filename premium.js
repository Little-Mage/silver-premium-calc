function premium_calc() {
let silver = parseFloat(document.getElementById('s').value);
let troy = parseFloat(document.getElementById('t').value);
let coin = parseFloat(document.getElementById('c').value);

let melt = silver * troy;
let premium = (coin - melt).toFixed(2);
let percent = (((coin - melt) / melt) * 100).toFixed(1);

document.getElementById('p1').innerHTML = 'Premium: $' + premium;
document.getElementById('p2').innerHTML = 'Percent: ' + percent + '%';
};
