import { getMinerals, getFacilities, getfacilityResources, getTransientState, getColonyResources, addColonyMineral, substractFacilityMineral, setMineral, setQuantity } from "./database.js"
import { renderColonies } from "./colonies.js"
import { renderFacilities } from "./facilities.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityResources = getfacilityResources()
const colonyResources = getColonyResources()
//make variables that contain the facility and mineral selected from facilities module
const transientState = getTransientState()

export const Cart = () => {
    // creates the HTML in the cart

    let html = ""

    if (transientState.selectedFacility) {

        const facilityChosen = facilities.find(facility => facility.id === transientState.selectedFacility)

        const mineralChosen = minerals.find(mineral => mineral.id === transientState.selectedMineral)


        html += `<div class="cartContents">
   ${transientState.quantity} tons of ${mineralChosen?.name} from ${facilityChosen?.name}
    </div>`
    }
    return html;
}

export const renderCart = () => {
    const parentHTML = document.querySelector(".cart__display")
    parentHTML.innerHTML = Cart()
}

document.addEventListener(
    "click",
    (event) => {

        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            if (transientState.quantity) {
                transientState.quantity++
            } else {
                setQuantity(1)
                    }
            let facilityMineralId = null
            let colonyMineralId = null

            const facilityMinerals = facilityResources.find(facilityResource => facilityResource.facilityId === transientState.selectedFacility)
            facilityMineralId = facilityMinerals.id

            const colonyMinerals = colonyResources.find(colonyResource => colonyResource.id === transientState.selectedColony)
            colonyMineralId = colonyMinerals.id

        renderCart()
    }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        let facilityMineralId = null
        let colonyMineralId = null

        const facilityMinerals = facilityResources.find(facilityResource => facilityResource.facilityId === transientState.selectedFacility)
            facilityMineralId = facilityMinerals.id

        const colonyMinerals = colonyResources.find(colonyResource => colonyResource.id === transientState.selectedColony)
            colonyMineralId = colonyMinerals.id
        addColonyMineral(colonyMineralId, transientState.quantity)
        substractFacilityMineral(facilityMineralId)

        }
    }
)