let td_user = document.querySelector(".td_user")
let td_task = document.querySelector(".td_task")
let td_description = document.querySelector(".td_description")

let input_user = document.querySelector(".input_user")
let input_task = document.querySelector(".input_task")
let input_description = document.querySelector(".input_description")

let button = document.querySelector(".btn")

button.addEventListener("click", () => {
    td_user.textContent = input_user.value
    td_task.textContent = input_task.value
    td_description.textContent = input_description.value

    input_user.value = null
    input_task.value = null
    input_description.value = null

})