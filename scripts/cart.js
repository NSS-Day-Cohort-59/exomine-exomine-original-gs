import { getCart, getMinerals, getFacilities, getfacilityResources, getTransientState, getColonyResources, substractFacilityMineral, setMineral, setQuantity, pushToCart, setFacility, setColony, database } from "./database.js"
import { renderFacilityMinerals } from "./FacilityMinerals.js"
import { renderColonies } from "./colonies.js"


const minerals = getMinerals()
const facilities = getFacilities()
//make variables that contain the facility and mineral selected from facilities module

// creates the HTML in the cart
export const Cart = () => {
    //Call getCart and store the array in a variable.
    const cartContents = getCart()
    //Declare a variable with opening string.
    let html = `<ul class="cartContents">`
    //Iterate the Cart array and build html for each object.
    cartContents.forEach(obj => {
        html += `<li>${obj.quantity} tons of 
        ${minerals.find(mineral => mineral.id === obj.selectedMineral).name} from 
        ${facilities.find(facility => facility.id === obj.selectedFacility).name}</li>`
    })
    //Append string with closing html.
    html += "</ul>"
    //Return string.
    return html;
}

export const renderCart = () => {
    const parentHTML = document.querySelector(".cart")
    parentHTML.innerHTML = Cart()
}

document.addEventListener(
    "click",
    (event) => {
        
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            setQuantity(1)
            setFacility()
            setColony()
            const transientState = getTransientState()
            const facilityResources = getfacilityResources()
            const foundFacilityResource = facilityResources.find(facilityResource => (facilityResource.facilityId === transientState.selectedFacility && facilityResource.mineralId === transientState.selectedMineral))
            substractFacilityMineral(foundFacilityResource.id)
            renderFacilityMinerals();
            
            pushToCart()  
            
            renderCart()
    }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            database.Cart.forEach(order => {
                if (order.quantity > 0){
                    database.colonyResources.forEach(resource => {
                        if (order.selectedMineral === resource.mineralId && order.selectedColony === resource.colonyId){
                            resource.quantity += order.quantity;
                    }
                })
            }
        }
        )
        renderColonies();
        //deleting the Cart
        database.Cart = []
    }
        renderCart();
        }
)


