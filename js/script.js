const listaSpesa = [
    'pomodori',
    'insalata',
    'pasta',
    'biscotti',
    'cereali',
    'frittelle',
    'latte',
];
console.log(listaSpesa);
const ul = document.querySelector('ul');

console.log(ul);

let contatore = 0;

while (contatore < listaSpesa.length){
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = listaSpesa[contatore];
    ul.appendChild(li);
    console.log(ul);
    contatore ++;
}
