import { getColonies, getFacilities, getTransientState, setMineral } from "./database.js"
import { renderCart } from "./cart.js"

const facilityResources = getFacilities()
const colonyResources = getColonies()
const transientState = getTransientState()


// document.addEventListener(
//     "click",
//     (event) => {

//         if (event.target.name === "mineral") {
//             setMineral(parseInt(event.target.value))
//             let facilityMineralId = null
//             let colonyMineralId = null

//             const facilityMinerals = facilityResources.find(facilityResource => facilityResource.facilityId === transientState.selectedFacility)
//             facilityMineralId = facilityMinerals.id

//             const colonyMinerals = colonyResources.find(colonyResource => colonyResource.id === transientState.selectedColony)
//             colonyMineralId = colonyMinerals.id
//         //call function that adds to colony resources
//         //call function that subtracts 1 ton from facilityResources
//         renderCart()
//     }
//     }
// )
