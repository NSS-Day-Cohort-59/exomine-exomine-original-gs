import { getFacilities, getMinerals, getfacilityResources } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
facilityResources = getfacilityResources()

document.addEventListener(
    "change",
    (event) => {
        const facilityClicked = event.target

        if (event.target.id === "facility") {

            setFacilities(parseInt(event.target.value))

            const [,facilityPrimaryKey] = facilityClicked.id.split("--")

                let matchedFacility = null
                for (facility of facilities) {
                    if (parseInt(facilityPrimaryKey) === facility.id) {
                        matchedFacility = facility
                    }
                }
                for (const resources of facilityResources) {
                    if (matchedFacility.id === facility.facilityId) {
                    return `<li>
                    <input type="radio" name="minerals" value="${mineral.id}"/> ${mineral.name}
                    </li>`}
                }
        }
    })

export const Facilities = () => {

    let html = `<ul><select id="facility"><option value ="0">Select Facility`

    // Use .map() for converting objects to <li> elements
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