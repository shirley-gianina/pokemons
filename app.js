let counter = 1;

const poke = document.getElementById('pokemon')

const prev = document.getElementById('prev')
const next = document.getElementById('next')


function render() {
    poke.innerHTML = `<img src="https://tinyurl.com/ironhack-pokemons/${counter}.svg">`;
}


next.onclick = () => {
    if (counter < 650) {
        counter = counter + 1;
        render()
    } else {
        console.log("Can't go next")
    }
}

prev.onclick = () => {
    if (counter > 1 ) {
       counter = counter - 1;
        render();
    } else {
        console.log("Can't go back");
    }
}

render()