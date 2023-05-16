document.addEventListener('DOMContentLoaded', (event) => {
    var tutorial = document.createElement('article');
    var title = document.createElement('h3');
    title.textContent = 'Gonna put tutorials here';
    var description = document.createElement('p');
    description.textContent = '-- Placeholder --';
    description.className = 'description';
    var body = document.createElement('pre');
    body.className = 'language-js';
    body.innerHTML = '<code class="language-js">console.log("Hello, world!");</code>';
    tutorial.appendChild(title);
    tutorial.appendChild(description);
    tutorial.appendChild(body);
    document.getElementById('tutorials').appendChild(tutorial);

    var bookmarklet = document.createElement('pre');
    bookmarklet.className = 'language-js';
    bookmarklet.innerHTML = '<code class="language-js">alert("This is a placeholder!");</code>';
    document.getElementById('bookmarklets').appendChild(bookmarklet);
});
