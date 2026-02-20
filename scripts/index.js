
const saveBtn = document.getElementById("save-btn");
const input = document.querySelector(".input");
const listContainer = document.getElementById("list");
const tabBtn = document.getElementById("tab-btn");

let list = [];
render(list);

saveBtn.addEventListener("click", function () {
    if (localStorage.getItem("list")) {
       list = JSON.parse(localStorage.getItem("list")) 
    }
    const value = input.value;
    list.push(value);
    render(list);
    localStorage.setItem("list", JSON.stringify(list));
});

function render(list) {
    let output = "";
    for (let i=0;i<list.length; i++) {
        output += `<li><a href="${list[i]}">${list[i]}</a></li>`;
    }
    listContainer.innerHTML = output;
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const activeTab = tabs[0];
        if (activeTab) {
            list.push(activeTab.url);
            render(list);
        }
    })
});