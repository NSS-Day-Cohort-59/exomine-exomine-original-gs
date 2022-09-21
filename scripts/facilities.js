import { getFacilities, setFacility, setMineral, getMinerals, getfacilityResources, database } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const FacilityResources = getfacilityResources()





const Facilities = () => {

    let html = `<select id="facility"><option value ="0">Select Facility`

    facilities.forEach(facility => {
        if (facility.active) {
            html += `<option value="${facility.id}"/>${facility.name}`
        }
    })

    html += `</select>`
    return html
}



export const renderFacilities = () => {
    const parentHTML = document.querySelector(".facilities")
    parentHTML.innerHTML = Facilities()
} 