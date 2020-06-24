export const state = () => {
    return {
        datatypes: [],
    }
}

export const mutations = {
    setDatatypes(state, datatypes){
        state.datatypes = datatypes
        if(typeof localStorage !== 'undefined') localStorage.setItem('datatypes', JSON.stringify(state.datatypes))
    },

    addDatatype(state, datatype){
        state.datatypes.push(datatype)
        if(typeof localStorage !== 'undefined') localStorage.setItem('datatypes', JSON.stringify(state.datatypes))
    },

    addDatatypes(state, datatypes){
        state.datatypes.push(...datatypes)
        if(localStorage) localStorage.setItem('datatypes', JSON.stringify(state.datatypes))
    },

    updateDatatype(state, datatype){
        let currentDatatype = state.memories.find((_datatype) => { return _datatype.id == datatype.id })
        currentDatatype = {
            ...currentDatatype,
            ...datatype
        }
        if(localStorage) localStorage.setItem('datatypes', JSON.stringify(state.datatypes))
    },

    removeDatatype(state, datatypeId){
        state.datatypes = state.datatypes.filter((datatype) => { return datatype.id != datatypeId })
        if(localStorage) localStorage.setItem('datatypes', JSON.stringify(state.datatypes))
    }
}

export const getters = {
    Datatypes(state){
        return state.datatypes
    }
}