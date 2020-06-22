import GraphModuleGenerator from '~~/services/graphql/utils/generatemodule'

const Start = async () => {
    try {
        const graphModuleGenerator = new GraphModuleGenerator()

        const types = []
        const typeFiles = require.context(`../../datatypes`, true, /\.js$/)
        typeFiles.keys().map((typeFilename) => { types.push(typeFiles(typeFilename).default) })

        for(let i = 0; i < types.length; i++){
            await graphModuleGenerator.Generate(types[i])
        }

        console.log('datatypes generated', types.map((type) => { console.log(type.name) }))
    }catch(err){
        console.log(err)
    }

}

Start()