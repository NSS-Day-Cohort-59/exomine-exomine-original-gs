const database = {
    transientState: {},
    governors: [
        {id: 1, name: " Glub Shitto", colonyId: 1, active: true}
    ],
    colonies: [
        {id: 1, name: "Europa", governors: [], resources: []}
    ],
    facilities: [
        {id: 1, name: "Io Facility", resources: [], active: true}
    ],
    cart: {resources: []}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getColonies = () => {
    return database.colonies.map(c=>({...c}))
}

export const getGovernors = () => {
    return database.governors.map(g=>({...g}))
}

export const getCart = () => {
    return database.cart.map(c=>({...c}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") ) {
    }
}
