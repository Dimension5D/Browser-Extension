
const saveBtn = document.getElementById("save-btn");
const input = document.querySelector(".input");
const listContainer = document.getElementById("list");
let list = [];
render(list);

saveBtn.addEventListener("click", function () {
    const value = input.value;
    list.push(value);
    render(list);
});

function render(list) {
    let output = "";
    for (let i=0;i<list.length; i++) {
        output += `<li><a href="${list[i]}">${list[i]}</a></li>`;
    }
    listContainer.innerHTML = output;
}