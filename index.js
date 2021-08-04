console.log('Hello World');

let message = document.querySelector('#message');

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    let movieList = document.querySelector('ul');
    movieList.appendChild(movie);
    inputField.value = ""
    movie.appendChild(deleteBtn);
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie watched!"
    } else{
        message.textContent = "Movie added Back!"
    }
}

document.querySelector('form').addEventListener('submit' , addMovie);