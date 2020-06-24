<template>
    <div class="importscreator border border-gray-500">
        <h2>Imports <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add import</button></h2>

        <div class="px-2 py-2">
            <div
                v-for="(currentImport, currentImportIndex) in datatype.imports"
                :key="`import-${ currentImport.id }-${ currentImportIndex }`"
            >
                <select v-model="datatype.imports[currentImportIndex]">
                    <option
                        v-for="(type, typeIndex) in GetDataTypes()"
                        :key="`datatypeoption-${ type.name }-${ typeIndex }`"
                        :value="type.name"
                    >
                        {{ type.name }}
                    </option>
                </select>
                
                <button type="button" class="float-right -mt-1 -mr-1 h-8" @click="Delete(currentImport)">
                    <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                </button>


            </div> 
        </div>
           
    </div>
</template>

<script>
export default {
    props: {
        datatype: { type: Object },
        schema: { type: Object }
    },

    methods: {
        Add(){
            this.datatype.imports.push('')
        },
        Delete(currentImport){
            this.datatype.imports = this.datatype.imports.filter((_currentImport) => {
                return _currentImport != currentImport
            })
        },
        GetDataTypes(){
            let items = this.$root.$datatypes.filter((_datatype) => { return  _datatype.name != this.datatype.name })
            console.log(items)
            return items
        }
    }
}
</script>

<style>

</style>