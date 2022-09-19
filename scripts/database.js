const database = {
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
        {id: 1, name: "Europa"},
        {id: 2, name: "Ganymede"},
        {id: 3, name: "Titan"}
    ],
    colonyResources: [
        {id: 1, mineralId: 1, colonyId: 1, quantity: 10},
        {id: 2, mineralId: 2, colonyId: 1, quantity: 20},
        {id: 3, mineralId: 1, colonyId: 2, quantity: 25},
        {id: 4, mineralId: 2, colonyId: 3, quantity: 45},
        {id: 5, mineralId: 1, colonyId: 2, quantity: 15}
    ],
    facilities: [
        {id: 1, name: "Io Facility", active: true},
        {id: 2, name: "Mimas Facility", active: true},
        {id: 3, name: "Callisto Facility", active: true},
        {id: 4, name: "Phobos Facility", active: true},
        {id: 5, name: "Enceladus Facility", active: true}
    ],
    facilityResources: [
        {id: 1, facilityId: 1, mineralId: 1, quantity: 100},
        {id: 2, facilityId: 1, mineralId: 2, quantity: 20},
        {id: 3, facilityId: 2, mineralId: 3, quantity: 45},
        {id: 4, facilityId: 4, mineralId: 5, quantity: 25},
        {id: 5, facilityId: 3, mineralId: 4, quantity: 88},
        {id: 6, facilityId: 5, mineralId: 6, quantity: 77},
        {id: 7, facilityId: 4, mineralId: 7, quantity: 99}
    ],
    minerals: [
        {id: 1, name: "Iron"},
        {id: 2, name: "Platinum"},
        {id: 3, name: "Bronze"},
        {id: 4, name: "Gold"},
        {id: 5, name: "Silver"},
        {id: 6, name: "Copper"},
        {id: 7, name: "Bronze"}

    ],
    
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged"))
}

export const getfacilityResources = () => {
    return database.facilityResources.map(f=>({...f}))
}

export const getColonyResources = () => {
    return database.colonyResources.map(c => ({...c}))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}
export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}
export const getColonies = () => {
    return database.colonies.map(c=>({...c}))
}

export const getGovernors = () => {
    return database.governors.map(g=>({...g}))
}

export const getCart = () => {
    return database.transientState.map(c=>({...c}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") ) ;{
    }
}
