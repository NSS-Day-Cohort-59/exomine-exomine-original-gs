import { getMinerals, getFacilities, getfacilityResources, getTransientState, getColonyResources, addColonyMineral, substractFacilityMineral, setMineral, setQuantity } from "./database.js"
import { renderFacilityMinerals } from "./FacilityMinerals.js"
import { renderColonies } from "./colonies.js"
import { renderFacilities } from "./facilities.js"


const minerals = getMinerals()
const facilities = getFacilities()
const facilityResources = getfacilityResources()
const colonyResources = getColonyResources()
//make variables that contain the facility and mineral selected from facilities module
const transientState = getTransientState()
let purchaseJustMade = false;
export const Cart = () => {
    // creates the HTML in the cart

    let html = ""

    if (transientState.selectedFacility && !purchaseJustMade) {

        const facilityChosen = facilities.find(facility => facility.id === transientState.selectedFacility)

        const mineralChosen = minerals.find(mineral => mineral.id === transientState.selectedMineral)


        html += `<div class="cartContents">
        ${transientState.quantity} tons of ${mineralChosen?.name} from ${facilityChosen?.name}
    </div>`
    }
    else {
        html += `<div class="cartContents">
    </div>`
    purchaseJustMade = false;
    }
    return html;
}

export const renderCart = () => {
    const parentHTML = document.querySelector(".cart")
    parentHTML.innerHTML = Cart()
}

document.addEventListener(
    "click",
    (event) => {

        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            setQuantity(1)

            let facilityMineralId = null
            let colonyMineralId = null

            

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
        
        const foundColonyResource = colonyResources.find(colonyResource => (colonyResource.colonyId === transientState.selectedColony && colonyResource.mineralId === transientState.selectedMineral))
        addColonyMineral(foundColonyResource.id)
        renderColonies();
        
        const foundFacilityResource = facilityResources.find(facilityResource => (facilityResource.facilityId === transientState.selectedFacility && facilityResource.mineralId === transientState.selectedMineral))
        substractFacilityMineral(foundFacilityResource.id)
        
        //renderFacilities();
        transientState.quantity = 0;
        purchaseJustMade = true;
        renderFacilityMinerals();
        renderCart();
        }
    }
)


// User clicks order button
// When click we have all id's in transient state
// When click add one ton of particular mineral to colony
    // match up the colonyID and mineralId to link to the correct colonyResource object 
    // Add one ton to the quantity property of the colonyResource obj
// subtract one ton of particular mineral from facility
    // match facilityId and mineralId to link to correct facilityResources object
    // subtract one ton from the quantity property of the facilityResources obj
// empty out cart display



