
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
    let deletBtn = document.createElement("button")

    deletBtn.textContent = "X"
    deletBtn.addEventListener('click', (evt) => {
        evt.target.parentNode.remove()
        message.textContent = "Removed thing"
    })
    movieTitle.textContent = inputField
    movie.appendChild(movieTitle)
    movie.appendChild(deletBtn)

    document.querySelector("ul").appendChild(movie)
    movieTitle.addEventListener("click", () => {
        movie.classList.toggle("checked")
        message.textContent = "Greyed thing"
    })

    document.querySelector("input").value = ""
    message.textContent = "Added thing"
}

document.querySelector("button").addEventListener("click", addMovie)