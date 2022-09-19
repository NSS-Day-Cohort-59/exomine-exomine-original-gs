import { getMinerals, getFacilities, getfacilityResources, colonyResources, getTransientState, getColonyResources, addColonyMineral, substractFacilityMineral} from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityResources = getfacilityResources()
const colonyResources = getColonyResources()
//make variables that contain the facility and mineral selected from facilities module
const transientState = getTransientState()

export const Cart = () => {
// creates the HTML in the cart

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

        if (event.target.id === "orderButton") {

    let colonyMineralId = null
    let facilityMineralId = null
    if(transientState.length){
            for (const order of transientState) {
                const facilityMinerals = facilityResources.find(facilityResource.id === order.facilityId)
                facilityMineralId = facilityMinerals
            }
            for (const order of transientState) {
                const colonyMinerals = colonyResources.find(colonyResource.id === order.colonyId)
                    colonyMineralId = colonyMinerals
            }
    }
        //call function that adds to colony resources
        //call function that subtracts 1 ton from facilityResources
    addColonyMineral(colonyMineralId)
    substractFacilityMineral(facilityMineralId)
        }
    }    
)