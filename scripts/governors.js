import { getColonies, getGovernors, setGovernor } from "./database.js"
import { renderFacilities } from "./facilities.js"
import { renderColonies } from "./colonies.js"
import { render } from "./main.js"

// const governors = getGovernors()

//Event listener for when a governor is selected.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            //Displayed colony should change to reflect governor colony.
            let selectedGovernor = governors.find(governor => governor.id === parseInt(event.target.value))
            renderColonies(selectedGovernor.colonyId)
            //Facility dropdown enabled.
            if (parseInt(event.target.value) > 0 && document.querySelector("#facilitiesDropdown").disabled) {
                renderFacilities()
            }
        }
    }
)

export const Governors = () => {
    let html = `<select id="governor"><option value ="0">Select Governor</option>`

    // Use .forEach() for converting objects to <li> elements
    const listItems = governors.forEach(governor => {
        if (governor.active === true) {
            html += `<option value="${governor.id}"/>${governor.name}</option>`
        }
    })

    html += `</select>`
    return html
}
