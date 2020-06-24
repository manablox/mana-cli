<template>
    <div class="datatypetypecreator border border-gray-500">
        <h2>Types <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add type</button></h2>

        <div class="px-2 py-2">
            
            <details
                v-for="(type, typeIndex) in schema.types"
                :key="`type-${ type.id }-${ typeIndex }`"

            >
                <summary>
                    {{ type.name }}
                    <button type="button" class="float-right -mt-1 -mr-1 h-8" @click="Delete(type)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <TypeEditor :datatype="datatype" :schema="schema" :type="type" />
            </details> 
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
            this.schema.types.push({
                id: new Date().getTime(),
                name: 'NewType',
                fields: [],
            })
        },
        Delete(id){
            this.schema.types = this.schema.types.filter((type) => {
                return type.id == id
            })
        }
    }
}
</script>

<style>

</style>