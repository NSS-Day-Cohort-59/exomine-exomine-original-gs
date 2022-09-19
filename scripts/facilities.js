import { getFacilities, setFacility, getMinerals, getfacilityResources } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const FacilityResources = getfacilityResources()

document.addEventListener(
    "change",
    (event) => {
        const facilityClicked = event.target

        if (event.target.id === "facility") {

            setFacility(parseInt(event.target.value))

            const facilityPrimaryKey = facilityClicked.value
            let html = ""
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
            return html
        }
    })


const Facilities = () => {

    let html = `<ul><select id="facilitiesDropdown"><option value ="0">Select Facility`

    const listItems = facilities.map(facility => {
        return `<li>
        <option value="${facility.id}"/>${facility.name}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}

export const renderFacilities = () => {
    const parentHTML = document.querySelector(".facilities")
    parentHTML.innerHTML = Facilities()
} 