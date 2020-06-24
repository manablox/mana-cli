<template>
    <div class="inputtypefieldcreator mt-4">
        <h2>Fields</h2>
        <div class="px-2 py-2 -mt-1 border border-gray-300">
            <button type="button" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add new field</button>
            <details
                v-for="(field, fieldIndex) in type.fields"
                :key="`field-${ field.id }-${ fieldIndex }`"

            >
                <summary>
                    {{ field.name }}
                    
                    <button type="button" @click="Delete(field)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <InputTypeFieldEditor :type="type" :datatype="datatype" :schema="schema" :field="field" />
            </details>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        type: { type: Object },
        datatype: { type: Object },
        schema: { type: Object }
    },

    methods: {
        Add(){
            this.type.fields.push({
                id: new Date().getTime(),
                name: 'newfield',
                type: 'String'
            })
        },

        Delete(field){

        }
    }
}
</script>

<style>

</style>