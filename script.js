const buttons = document.querySelectorAll(".informations-nav-list-li")

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
  })
})

const choose1 = document.querySelector(".informations-artcile-1")
const choose2 = document.querySelector(".informations-artcile-2")
const choose3 = document.querySelector(".informations-artcile-3")

function choosebtn1() {
  choose2.classList.add("nonactive")
  choose3.classList.add("nonactive")
  choose1.classList.remove("nonactive")
}
function choosebtn2() {
  choose1.classList.add("nonactive")
  choose3.classList.add("nonactive")
  choose2.classList.remove("nonactive")
}

function choosebtn3() {
  choose1.classList.add("nonactive")
  choose2.classList.add("nonactive")
  choose3.classList.remove("nonactive")
}
