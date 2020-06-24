<template>
    <div class="datatypeinputtypecreator border border-gray-500">
        <h2>Input Types <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add input type</button></h2>

        <div class="px-2 py-2">
            <details
                v-for="(type, typeIndex) in schema.inputTypes"
                :key="`type-${ type.id }-${ typeIndex }`"

            >
                <summary>
                    {{ type.name }}
                    <button type="button" @click="Delete(type)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <InputTypeEditor :datatype="datatype" :schema="schema" :type="type" />
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
            this.schema.inputTypes.push({
                id: new Date().getTime(),
                name: 'NewInputType',
                fields: [],
            })
        },
        Delete(id){
            this.schema.inputTypes = this.schema.inputTypes.filter((type) => {
                return type.id == id
            })
        }
    }
}
</script>

<style>

</style>