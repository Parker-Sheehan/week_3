
// const addMovie = (evt) =>{
//     evt.preventDefault()
//     let inputField = document.querySelector('input').value
//     let movie = document.createElement('li')
//     let movieTitle = document.createElement('span')

//     movieTitle.textContent = inputField
//     movieTitle.addEventListener('click', crossOffMovie)

//     movie.appendChild(movieTitle)
//     let deleteBtn = document.createElement("button")
//     deleteBtn.textContent = ('X')
//     deleteBtn.addEventListener('click', deleteMovie)
//     movie.appendChild(deleteBtn)
//     document.querySelector('ul').appendChild(movie)
//     document.querySelector('input').value = ""
// }

// const deleteMovie = (evt) => {
//     evt.target.parentNode.remove()
// }

// const crossOffMovie = (evt) =>{
//     evt.target.classList.toggle("checked")
// }

// document.querySelector('form').addEventListener('submit', addMovie)

const addMovie = evt =>{
    evt.preventDefault()
    let inputField = document.querySelector("input").value
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")

    movieTitle.textContent = inputField
    
    movie.appendChild(movieTitle)

    document.querySelector("ul").appendChild(movie)
}

document.querySelector("button").addEventListener("click", addMovie)