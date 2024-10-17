// Connect to the ul list where everything will be displayed
const placement = document.querySelector('#output');
// Create the event listener for the button
const element = document.querySelector('#click-button');
element.addEventListener('click', () => {
    const value = document.querySelector('#add-item').value;

    // Check if the input is correct
    if (value === '') {
        alert('You must write something!');
    }else {
        // Display the list on the website
        // Add the text
        const li = document.createElement('li');
        li.innerText = value;
        placement.appendChild(li);
        // Add the X icon
        const span = document.createElement("SPAN");
        const icon = document.createTextNode("\u00D7");
        span.className = "close";
        // Create a onclick function to remove the clicked item
        span.onclick = (e) => {
            e.target.parentElement.remove()
        };
        span.appendChild(icon);
        li.appendChild(span);

        // Clear the input field
        document.querySelector('#add-item').value = ''
    }
});

// Create event listener for ul and it's list items
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);