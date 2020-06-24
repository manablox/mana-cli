const fs = process.server ? require('fs') : undefined

export const actions = {
    async nuxtServerInit({ commit }, context){
        let datatypeFiles = fs.readdirSync('../datatypes').filter((item) => {
            return item.endsWith('.js') || item.endsWith('.json')
        })

        const datatypes = []

        for(let i = 0; i < datatypeFiles.length; i++){
            try {
                const datatype = await import(`../../datatypes/${ datatypeFiles[i] }`)
                datatypes.push({ ...datatype.default, imported: true, id: datatype.default.name })
            }catch(err){  }
            
        }

        commit('datatypes/setDatatypes', datatypes)
    },

    nuxtClientInit({ commit }, context){
        try {
            let items = localStorage.getItem('datatypes')
            if(!items || items == 'null') items = '[]'
            items = JSON.parse(items).filter((item) => {
                return item.imported == false
            })

            commit('datatypes/addDatatypes', items)
        }catch(err){ console.log(err) }
    }
}