<template>
    <div class="paramcreator mt-4">
        <h2>Params <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add new param</button></h2>
        <div class="px-2 py-2 -mt-1 border border-gray-300">
            
            <details
                v-for="(param, paramIndex) in field.params"
                :key="`param-${ param.id }-${ paramIndex }`"

            >
                <summary>
                    {{ param.name }}
                    
                    <button type="button" @click="Delete(param)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <ParamEditor :type="type" :datatype="datatype" :schema="schema" :field="field" :param="param" />
            </details>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: { type: Object },
        datatype: { type: Object },
        schema: { type: Object },
        field: { type: Object },
    },

    methods: {
        Add(){
            this.field.params.push({
                id: new Date().getTime(),
                name: 'newParam',
                type: 'String',
            })
        },

        Delete(param){
            this.field.params = this.field.params.filter((_param) => {
                return _param.id !== param.id
            })
        }
    }
}
</script>

<style>

</style>