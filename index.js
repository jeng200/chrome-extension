let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value) //push value from input field into myLeads array
  inputEl.value=""
  renderLeads()
  
})
function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) { //use backticks in template strings
 listItems += ` 
  <li>
   <a target='_blank' href='${myLeads[i]}'> 
     ${myLeads[i]}
   </a>
  </li>
 `
}

ulEl.innerHTML = listItems
}