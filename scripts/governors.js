import { getGovernors, setGovernor } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

export const Governors = () => {
    let html = `<ul><select id="governor"><option value ="0">Select Governor`

    // Use .map() for converting objects to <li> elements
    const listItems = governors.map(governor => {
        return `<li>
            <option value="${governor.id}"/>${governor.name}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}
