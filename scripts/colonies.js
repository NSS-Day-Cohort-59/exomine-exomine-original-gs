import { getColonies, getColonyResources, getMinerals, getGovernors } from "./database.js";

const colonies = getColonies()
const governors = getGovernors()
const colonyResources = getColonyResources()
const minerals = getMinerals()

const Colonies = () => {
    //Creates colony display in html based on selected governor.
    //Assign the selected governor element to a variable.
    let selectedGovernor = document.querySelector("#governor")
    //Find the matching governor object in database and assign to a variable.
    let foundGovernor = governors.find(governor => governor.id === parseInt(selectedGovernor.value))
    //Match the governor to a colony.
    let matchingColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
    //Create HTML for colony name
    let html = `<h2>${matchingColony.name} Minerals</h2>`
    //Iterate through colony resources and for each 
    // matching with a quantity above 0 match to mineral name in minerals array
    // and add html name and quantity.
    let matchingColonyResources = colonyResources.filter(resource => resource.colonyId === matchingColony.id)
    matchingColonyResources.forEach(resource => {
        if (resource.quantity > 0) {
            let matchingMineral = minerals.find(mineral => mineral.id === resource.mineralId)
            html += `<p>${resource.quantity} tons of ${matchingMineral.name}</p>`
        }
    })

    //Return string.
    return html
}

