import { getMinerals, getFacilities, getfacilityResources, getTransientState} from "./database.js"

export const Cart = () => {

const minerals = getMinerals()
const facilities = getFacilities()
const facilityResources = getfacilityResources()
//make variables that contain the facility and mineral selected from facilities module
const transientState = getTransientState()


let html = ""

if(transientState.length) {
    for (const order of transientState) {

    const facilityChosen = facilities.find(facility.id === order.facilityId)

    const mineralChosen = minerals.find(mineral.id === order.facilityId)

    html += `<div class="cartContents">
   1 ton of ${mineralChosen.name} from ${facilityChosen.name}
    </div>`
}
    return html
    }
        }


document.addEventListener(
    "change",
    (event) => {
        const cartClicked = event.target

        if (event.target.id === "orderButton") {
        //call function that adds to colony resources
        //call function that subtracts from facility resources
        }
    })