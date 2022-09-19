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
        }
    }
)


const Facilities = () => {

    let html = `<ul><select id="facility"><option value ="0">Select Facility`

    facilities.forEach(facility => {
        if (facility.active) {
            html += `<li>
        <option value="${facility.id}"/>${facility.name}
        </li>`
        }
    })

    html += `</select></ul>`
    return html
}



export const renderFacilities = () => {
    const parentHTML = document.querySelector(".facilities")
    parentHTML.innerHTML = Facilities()
} 