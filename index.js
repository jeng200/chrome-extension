let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputButton.addEventListener("click", function(){
  myLeads.push(inputEl.value) //push value from input field into myLeads array
  console.log(myLeads)
})

for (let i =0; i<myLeads.length; i++) {
  console.log(myLeads[i])
}