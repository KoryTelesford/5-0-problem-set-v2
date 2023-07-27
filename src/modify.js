const getMainHeadingText = () => {
  // Select the h1 element by its id
const heading = document.querySelector('#main-heading');

// Log the text content of the heading to the console
console.log(heading.textContent);
};

const getAllMainText = () => {
  const elements = document.querySelectorAll('.main-text');

  // Initialize an empty array to store the text contents of the elements
  const textContents = [];
  
  // Iterate through the elements
  elements.forEach(element => {
    // Add the text content of the current element to the array
    textContents.push(element.textContent);
  });
  
  // Build a new string value by joining the text contents with commas
  const newText = textContents.join(',');
  
  // Log the new string to the console
  console.log(newText);
};

const setSubtitleText = () => {
   // Select the h2 element by its id or tag name
  const subtitle = document.querySelector('#my-subtitle') || document.querySelector('h2');

  // Update the text content of the subtitle
  subtitle.textContent = 'This is a subtitle!';
};

const modifyDivClassList = () => {
  const div = document.querySelector("#modify-classes");
  div.classList.remove("bad-class");
  div.classList.add("new-class");
  
};

const addH2 = () => {
  const h2 = document.createElement("h2");
  h2.id = "h2-test";
  h2.textContent = "Another one!";
  document.body.appendChild(h2);
};

const removeOldInfo = () => {
  const p = document.querySelector("#old-info");
  p.remove();
};

const makeAlphabet = () => {
  const ul = document.querySelector("#alphabet");
  const numLetters = ul.getAttribute("data-num-letters");
  
  for (let i = 0; i < numLetters; i++) {
    let li = document.createElement("li");
    li.textContent = `A is letter #${i + 1} in the alphabet`;
    ul.appendChild(li);
  }
};

const makeBio = () => {
   const bioEl = document.querySelector("#my-bio");
   
    bioEl.innerHTML = `
      <h2 id="bio-heading">About Me</h2>
      <p>My name is Zo and I like learn cool new things</p>
      <h3 id="hobby-heading">My Hobbies</h3>
      <ul>
        <li>Running</li>
        <li>Reading</li>
        <li>Writing</li>
      </ul>`
};

const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

main();
