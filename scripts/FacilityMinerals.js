import { getFacilities, getfacilityResources, getMinerals } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            renderFacilityMinerals();
        }

    }
)

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