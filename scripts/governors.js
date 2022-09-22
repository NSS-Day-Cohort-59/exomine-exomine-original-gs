import { getGovernors, returnMinerals } from "./database.js"
import { renderFacilities } from "./facilities.js"
import { renderColonies } from "./colonies.js"
import { render } from "./main.js"
import { renderFacilityMinerals } from "./FacilityMinerals.js"
import { renderCart } from "./cart.js"


const governors = getGovernors()

//Event listener for when a governor is selected.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            //Displayed colony should change to reflect governor colony.
            renderColonies()
            returnMinerals();
            //Facility dropdown enabled.
            if (parseInt(event.target.value) > 0) {
                renderFacilities()
                renderFacilityMinerals()
                renderCart()
            } else { render() }
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
