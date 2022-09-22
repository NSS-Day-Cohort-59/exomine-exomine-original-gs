export const database = {
    governors: [
        { id: 1, colonyId: 2, name: "Silver Stallion", active: true },
        { id: 2, colonyId: 1, name: "Blue Dolphin", active: true },
        { id: 3, colonyId: 2, name: "Red Baron", active: true },
        { id: 4, colonyId: 1, name: "Green Bean", active: true },
        { id: 5, colonyId: 3, name: "White Wave", active: false },
        { id: 6, colonyId: 3, name: "Pink Salmon", active: true },
        { id: 7, colonyId: 2, name: "Black Swan", active: true },
        { id: 8, colonyId: 3, name: "Orange Cone", active: false },
        { id: 9, colonyId: 1, name: "Yellow Sunshine", active: true },
        { id: 10, colonyId: 2, name: "Purple Rain", active: true }
    ],
    colonies: [
        { id: 1, name: "Europa" },
        { id: 2, name: "Ganymede" },
        { id: 3, name: "Titan" }
    ],
    colonyResources: [
        { id: 1, mineralId: 1, colonyId: 1, quantity: 10 },
        { id: 2, mineralId: 2, colonyId: 1, quantity: 20 },
        { id: 3, mineralId: 3, colonyId: 1, quantity: 25 },
        { id: 4, mineralId: 4, colonyId: 1, quantity: 45 },
        { id: 5, mineralId: 5, colonyId: 1, quantity: 15 },
        { id: 6, mineralId: 6, colonyId: 1, quantity: 0 },
        { id: 7, mineralId: 7, colonyId: 1, quantity: 0 },
        { id: 8, mineralId: 1, colonyId: 2, quantity: 2 },
        { id: 9, mineralId: 2, colonyId: 2, quantity: 5 },
        { id: 10, mineralId: 3, colonyId: 2, quantity: 0 },
        { id: 11, mineralId: 4, colonyId: 2, quantity: 7 },
        { id: 12, mineralId: 5, colonyId: 2, quantity: 3 },
        { id: 13, mineralId: 6, colonyId: 2, quantity: 0 },
        { id: 14, mineralId: 7, colonyId: 2, quantity: 0 },
        { id: 15, mineralId: 1, colonyId: 3, quantity: 1 },
        { id: 16, mineralId: 2, colonyId: 3, quantity: 2 },
        { id: 17, mineralId: 3, colonyId: 3, quantity: 0 },
        { id: 18, mineralId: 4, colonyId: 3, quantity: 2 },
        { id: 19, mineralId: 5, colonyId: 3, quantity: 8 },
        { id: 20, mineralId: 6, colonyId: 3, quantity: 0 },
        { id: 21, mineralId: 7, colonyId: 3, quantity: 5 }
    ],
    facilities: [
        { id: 1, name: "Io Facility", active: true },
        { id: 2, name: "Mimas Facility", active: true },
        { id: 3, name: "Callisto Facility", active: true },
        { id: 4, name: "Phobos Facility", active: true },
        { id: 5, name: "Enceladus Facility", active: true }
    ],
    facilityResources: [
        { id: 1, facilityId: 1, mineralId: 1, quantity: 100 },
        { id: 2, facilityId: 1, mineralId: 2, quantity: 20 },
        { id: 3, facilityId: 2, mineralId: 3, quantity: 45 },
        { id: 4, facilityId: 4, mineralId: 5, quantity: 25 },
        { id: 5, facilityId: 3, mineralId: 4, quantity: 88 },
        { id: 6, facilityId: 5, mineralId: 6, quantity: 77 },
        { id: 7, facilityId: 4, mineralId: 7, quantity: 99 }
    ],
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Platinum" },
        { id: 3, name: "Bronze" },
        { id: 4, name: "Gold" },
        { id: 5, name: "Silver" },
        { id: 6, name: "Copper" },
        { id: 7, name: "Bronze" }

    ],

    transientState: {
        //Needs to store selected facilityIds and mineralIds
    },
    Cart: []

}


export const returnMinerals = () => {
    database.Cart.forEach(cartObj => {
        const foundFacilityResource = database.facilityResources.find(facilityResourceObj => (facilityResourceObj.facilityId === cartObj.selectedFacility && facilityResourceObj.mineralId === cartObj.selectedMineral))
        foundFacilityResource.quantity += cartObj.quantity;
    })

    database.Cart = [];
}



export const setFacility = () => {
    let currentFacility = document.querySelector("#facility")
    database.transientState.selectedFacility = parseInt(currentFacility.value)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColony = () => {
    //database.transientState.selectedColony = colonyId
    let matchGovernor = document.querySelector("#governor");
    let foundGovernor = database.governors.find(governor => governor.id === parseInt(matchGovernor.value))
    for (const colony of database.colonies) {
        if (foundGovernor.colonyId === colony.id) {
            database.transientState.selectedColony = colony.id;
        }
    }

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setQuantity = (quantity) => {
    database.transientState.quantity = quantity
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//Function pushes transient state to cart if similar object does not yet exist.
// In case of similar object, quantity on said object is incremented instead.
export const pushToCart = () => {
    //Find an object in Cart with same properties as transient state.
    let foundObject = database.Cart.find(obj => obj.selectedFacility === database.transientState.selectedFacility && obj.selectedMineral === database.transientState.selectedMineral)
    //If found  object, increase quantity by 1.
    if (foundObject) {
        foundObject.quantity++
    } else {
        //Else push transientState to Cart.
        database.Cart.push(database.transientState)
    }
    //reset transientState to an empty object
    database.transientState = {}
}

export const getfacilityResources = () => {
    return database.facilityResources.map(f => ({ ...f }))
}

export const getColonyResources = () => {
    return database.colonyResources.map(c => ({ ...c }))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}
export const getMinerals = () => {
    return database.minerals.map(m => ({ ...m }))
}
export const getColonies = () => {
    return database.colonies.map(c => ({ ...c }))
}

export const getGovernors = () => {
    return database.governors.map(g => ({ ...g }))
}

export const getTransientState = () => {
    return database.transientState
}

export const getCart = () => {
    return database.Cart.map(obj => ({ ...obj }))
}

// function where inventory is subtracted from facility resources

export const substractFacilityMineral = (facilityResourceId) => {
    const facilityResourceObj = database.facilityResources.find(facilityResource => facilityResource.id === facilityResourceId)
    facilityResourceObj.quantity -= database.transientState.quantity;
}

//function where inventory is added to colony resources
// Takes in ID of colony resource obj
// use .find on colonyResources to find matching primary key
// access quantity property on this object
// increment the quantity property
export const addColonyMineral = (colonyResourceId) => {
    const NewCart = getCart()
    const colonyResourceObj = database.colonyResources.find(colonyResource => colonyResource.id === colonyResourceId)
    colonyResourceObj.quantity += NewCart.quantity;
}

export const purchaseMineral = () => {

    // Broadcast custom event to entire document so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged")); {
    }
}
