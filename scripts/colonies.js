import { getColonies, getColonyResources, getMinerals, getGovernors, setColony } from "./database.js";


const Colonies = () => {
    //Creates colony display in html based on selected governor.
    //Assign the selected governor element to a variable.
    const colonyResources = getColonyResources()
    const colonies = getColonies()
    const governors = getGovernors()
    const minerals = getMinerals()
    let selectedGovernor = document.querySelector("#governor")
    if (parseInt(selectedGovernor.value) > 0) {
        //Find the matching governor object in database and assign to a variable.
        let foundGovernor = governors.find(governor => governor.id === parseInt(selectedGovernor.value))
        //Match the governor to a colony.
        let matchingColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
        //Set ColonyId in transient state
        setColony(matchingColony.id)
        //Create HTML for colony name
        let html = `<h3>${matchingColony.name} Minerals</h3>`
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
    } else return ""
}

export const renderColonies = () => {
    const parentElement = document.querySelector(".colonies")
    parentElement.innerHTML = Colonies()
}