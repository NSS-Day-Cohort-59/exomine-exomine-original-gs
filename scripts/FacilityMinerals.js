import { getColonies, getFacilities, setFacility, getfacilityResources, getTransientState, setMineral, getMinerals } from "./database.js"
import { renderCart } from "./cart.js"

const facilityResources = getFacilities()
const colonyResources = getColonies()
const transientState = getTransientState()




document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            renderFacilityMinerals();
        }

    }
)
/*      const facilityClicked = event.target

      if (event.target.id === "facility") {

          setFacility(parseInt(event.target.value))

          const facilityPrimaryKey = facilityClicked.value
          let html = "<ul>"
          let matchedFacility = null
          for (const facility of facilities) {
              if (parseInt(facilityPrimaryKey) === facility.id) {
                  matchedFacility = facility
              }
          }

          let matchedMineralFacility = null
          for (const resources of FacilityResources) {
              if (matchedFacility.id === resources.facilityId) {
                  matchedMineralFacility = resources
                  for (const mineral of minerals) {
                      if (matchedMineralFacility.mineralId === mineral.id) {
                          html += `<li>
                  <input type="radio" name="mineral" value="${mineral.id}"/>${matchedMineralFacility.quantity} tons of ${mineral.name}
                          </li>`
                      }
                  }
              }
          }
          html += "</ul>"
          const parentHTML = document.querySelector(".facility-minerals__display")
          parentHTML.innerHTML = html;
      } */


const facilityMinerals = () => {
    const facilities = getFacilities()
    const minerals = getMinerals()
    const FacilityResources = getfacilityResources()
    let html = "<ul>"
    let selectedFacility = document.querySelector("#facility")
    if (parseInt(selectedFacility.value) > 0) {
        let foundFacility = facilities.find(facility => facility.id === parseInt(selectedFacility.value))
        //setFacility(foundFacility.id); //delete?
        let matchedFacilityResources = null;
        for (const resources of FacilityResources) {
            if (foundFacility.id === resources.facilityId) {
                matchedFacilityResources = resources
                for (const mineral of minerals) {
                    if (matchedFacilityResources.mineralId === mineral.id && (matchedFacilityResources.quantity > 0)) {
                        html += `<li>
                                <input type="radio" name="mineral" value="${mineral.id}"/>${matchedFacilityResources.quantity} tons of ${mineral.name}
                        </li>`
                    }
                }
            }
        }
    }
    html += "</ul>"
    return html;

}

export const renderFacilityMinerals = () => {
    const parentHTML = document.querySelector(".facility-minerals__display")
    parentHTML.innerHTML = facilityMinerals()
}



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
