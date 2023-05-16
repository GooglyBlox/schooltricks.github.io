document.addEventListener('DOMContentLoaded', (event) => {
    // Example tutorial
    var tutorial = document.createElement('article');
    var title = document.createElement('h3');
    title.textContent = 'Example Tutorial';
    var description = document.createElement('p');
    description.textContent = 'This is an example tutorial.';
    description.className = 'description';
    var body = document.createElement('pre');
    body.className = 'language-js';
    body.innerHTML = '<code class="language-js">console.log("Hello, world!");</code>';
    tutorial.appendChild(title);
    tutorial.appendChild(description);
    tutorial.appendChild(body);
    document.getElementById('tutorials').appendChild(tutorial);

    // Example bookmarklet
    var bookmarklet = document.createElement('pre');
    bookmarklet.className = 'language-js';
    bookmarklet.innerHTML = '<code class="language-js">alert("This is a bookmarklet!");</code>';
    document.getElementById('bookmarklets').appendChild(bookmarklet);
});
