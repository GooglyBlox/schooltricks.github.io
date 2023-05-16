document.addEventListener('DOMContentLoaded', (event) => {
    var tutorial = document.createElement('pre');
    tutorial.className = 'language-js';
    tutorial.innerHTML = '<code class="language-js">console.log("Hello, world!");</code>';
    document.getElementById('tutorials').appendChild(tutorial);
    
    var bookmarklet = document.createElement('pre');
    bookmarklet.className = 'language-js';
    bookmarklet.innerHTML = '<code class="language-js">alert("This is a bookmarklet!");</code>';
    document.getElementById('bookmarklets').appendChild(bookmarklet);
});
