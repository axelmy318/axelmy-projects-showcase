export const saveToLocalStorage = (storage, state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(storage, serializedState)
    }
    catch(e) {
    }
}

export const loadFromLocalStorage = (storage) => {
    try {
        const serializedState = localStorage.getItem(storage)
        if(serializedState === null) 
        return undefined
        return JSON.parse(serializedState)
    }
    catch(e) {
        return undefined
    }
}

export const loadFromMultipleLocalStorages = (storages) => {
    try{
        const results = {}

        storages.forEach((storage, index) => {
        let serializedState = localStorage[storage]
            if(serializedState !== null)
            results[storage] = JSON.parse(serializedState)
        })
        
        return results
    }
    catch(e) {
        return undefined
    }
}
