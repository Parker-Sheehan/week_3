console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

document.querySelector("img").addEventListener('mouseover', () =>{
	alert("you're super silly, it's great!");
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);