const container = document.querySelector('.container');
const color = document.querySelector('input');


const defaltColor = '#fff';
container.style.backgroundColor


function onChangeBg(){
    container.style.backgroundColor = `${color.value}`


}
