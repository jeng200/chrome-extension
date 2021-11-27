let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  console.log(tabs[0].url)
})


function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) { //use backticks in template strings
   listItems += ` 
    <li>
     <a target='_blank' href='${leads[i]}'> 
       ${leads[i]}
     </a>
    </li>
   `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value) //push value from input field into myLeads array
  inputEl.value=""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads) 
})



