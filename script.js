"use strict"

const addButton = document.querySelector(".addBtn");


addButton.addEventListener("click", () => {
    const contentContainers = document.querySelectorAll("div");
    const temp  = getClassList(contentContainers);

    const choosenClassOfContainer = prompt(
        `Select one of Containers - ${temp}`);
    let container;
    if(choosenClassOfContainer === "") {
        container = document.querySelector(".content");
    } else {
        container = document.querySelector(`.${choosenClassOfContainer}`);
    }
    console.log(container);

    const element = prompt("choose between either p, h1, h2, h3");
    const content = prompt("add textContent for element");
    const classForElement = prompt("if u want to add class, enter class name.");
    const style = prompt("give a style in form color: red;");
    if(element !== "")
        addElement(container, element, content, classForElement, style);
    else alert("Decide on an element first");
});

function getClassList(list) {
    const listArr = Array.from(list);
    let outputArray = [];
    listArr.forEach((element) => {
        outputArray.push(element.classList);
    });
    return outputArray;
}

function addElement (container, element, content, classForElement, style) { 
    const child = document.createElement(element);
    if(content!=="") child.textContent = content;
    if(classForElement!=="") child.classList.add(classForElement);
    if(style !== "") child.style.cssText = style;
    container.appendChild(child);
}