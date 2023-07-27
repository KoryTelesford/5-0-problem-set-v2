let h1 = document.createElement("h1");
h1.id = "main-heading";
h1.textContent = "Hello world!";
document.body.appendChild(h1);

let p = document.createElement("p");
p.id = "main-text";
p.classList.add("boring-text");
p.textContent = "Look I'm some text!";
document.body.appendChild(p);