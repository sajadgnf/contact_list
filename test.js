var $ = document

function _id(id_name) {
    return $.getElementById(id_name)
}

function _class(class_name) {
    return $.getElementById(class_name)
}

var contactFrom = _id("main_form")
var contactName = _id("name")
var contactNumber = _id("phone_num")
var subminBtn = _id("submit_btn")
var contactList = _id("phone_list")
var error = _id("error")

var contac = $.createElement("li")
var confirmedName = $.createElement("span")
var confirmedNumber = $.createElement("span")
var deletContact = $.createElement("span")
var deletIcon = $.createElement("i")

// Contact Save
contactFrom.addEventListener("submit", function (event) {
    if (!contactNumber.value == "" && !contactName.value == "") {
        confirmedName.innerHTML = contactNumber.value
        confirmedNumber.innerHTML = contactName.value
        deletIcon.setAttribute("class", "fas fa-times deletIcon")
        contac.setAttribute("class", "li_style")
    
        contac.appendChild(confirmedNumber)
        contac.appendChild(confirmedName)
        deletContact.appendChild(deletIcon)
        contac.appendChild(deletContact)
        contactList.appendChild(contac)
    }

    // Save In Browser
    localStorage.setItem("contactList", contactList.innerHTML)
    event.preventDefault()
})

// deleteContact
deletContact.addEventListener("click", function () {
    contactList.removeChild(contac)
})

// refresh Action
if (window.performance) {
    contactList.innerHTML = localStorage.getItem("contactList")
}

// delet All
function deletFunc() {
    localStorage.clear()

    contactNumber.value = ""
    contactName.value = ""
    contactList.innerHTML = ""
}



