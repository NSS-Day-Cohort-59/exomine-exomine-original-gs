import { getFacilities, setFacility, setMineral, getMinerals, getfacilityResources, database } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const FacilityResources = getfacilityResources()





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