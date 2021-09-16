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
var contacts = []

// Bild Contact
var bildContact = () => {
    contactList.innerHTML = ""

    contacts.forEach((contact) => {
        // clear Contact
        var clearIcon = $.createElement('i')
        clearIcon.setAttribute("class", "fas fa-times deletIcon")
        clearIcon.addEventListener("click", () => {
            deletContact(contact.name, contact.number)
        })

        // Creat Contact
        var confirmedName = $.createElement("span")
        var confirmedNumber = $.createElement("span")
        confirmedName.innerText = contact.name
        confirmedNumber.innerText = contact.number

        // Contact Box
        var contactEl = $.createElement("li")
        contactEl.setAttribute('class', "li_style")

        contactEl.append( confirmedName, confirmedNumber, clearIcon)
        contactList.appendChild(contactEl)
    })
}

// clearing Inputs
var clear = () => {
    contactName.value = ""
    contactNumber.value = ""
}

// Error
const Inputerror = (name, number) => {
    if (name == "" || number == "") {
        error.innerHTML = "Please Inter A Name"
        return false
    }
    return true
}

// Clear The Error Notif
var clearError = () => {
    error.innerHTML = ""
}

// deletItem
var deletContact = (inputName, inputNum) => {
    var deleteContactConfirm = confirm("Are You Sure...?")
    if (deleteContactConfirm) {
        contacts.forEach((item, index) => {
            if (item.name == inputName && item.number == inputNum) {
                contacts.splice(index, 1)
            }
        })
    }
    localStorage.setItem("contacts", JSON.stringify(contacts))
    fetchContacts()
}

// Submit The Form
contactFrom.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!Inputerror(contactName.value, contactNumber.value)) {
        return false
    }

    contacts.push({ name: contactName.value, number: contactNumber.value })
    localStorage.setItem("contacts", JSON.stringify(contacts))

    bildContact()
    clear()
})

// Fetch Contacts
const fetchContacts = () => {
    if (localStorage.getItem("contacts")) {
        contacts = JSON.parse(localStorage.getItem("contacts"))
    } else {
        contacts = []
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }
    bildContact()
}

// delet All
var deletFunc = () => {
    localStorage.clear()

    contactList.innerHTML = ""
    clear()
}

fetchContacts()