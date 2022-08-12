
const burgerBtn = document.querySelector("#burger-btn")
const showdownMenu = document.querySelector("#showdown-menu")

var opened = false
burgerBtn.addEventListener("click", () => {
	if(opened == false){
		showdownMenu.style.height = "252px"
		opened = true
	}else if(opened){
		showdownMenu.style.height = "0px"
		opened = false
	}
})

window.onresize = () => {
	opened = false
	showdownMenu.style.height = "0px"
}