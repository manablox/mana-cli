<template>
    <div class="typefieldcreator mt-4">
        <h2>Fields <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add new field</button></h2>
        <div class="px-2 py-2 -mt-1 border border-gray-300">
            
            <details
                v-for="(field, fieldIndex) in type.fields"
                :key="`field-${ field.id }-${ fieldIndex }`"

            >
                <summary>
                    {{ field.name }} ({{ field.type }})
                    
                    <button type="button" class="float-right -mt-1 -mr-1 h-8" @click="Delete(field)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <TypeFieldEditor :type="type" :datatype="datatype" :schema="schema" :field="field" />
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
            const field = {
                id: new Date().getTime(),
                name: 'newfield',
                type: 'String',
                params: [],
                resolver: {
                    callback: '',
                    errorKey: ''
                }
            }

            this.type.fields.push(field)
        },

        Delete(field){

        }
    }
}
</script>

<style>

</style>