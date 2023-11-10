const container = document.querySelector('.container');
// const row = document.querySelector('.row');

const gridLength = 3;

for (let i = 0; i < gridLength; i++) {
    console.log(i);

    const row = document.createElement('div');
    row.classList.add("row");

    for (let j = 0; j < gridLength; j++) {
        const box = document.createElement('div');
        box.classList.add("box");

        row.appendChild(box);
    }

    container.appendChild(row);
}

