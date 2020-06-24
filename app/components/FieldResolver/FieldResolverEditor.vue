<template>
    <div class="resolvereditor">
        <button type="button" class="block mb-2" @click="ToggleEditor">Edit Resolver</button>
        <label>Error Key</label> <input type="text" v-model="resolver.errorKey" /><br>

        <div class="modal" v-if="editorActive">
            <div class="modal__backdrop"></div>
            <div class="modal__window">
                <div class="modal__header font-bold">
                    Edit {{ type.name }}.{{ field.name }} resolver

                    <button type="button" class="float-right -mt-1" @click="ToggleEditor">
                        <Icon icon="close" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                </div>
                <div class="modal__content">
                    <ParamCreator :type="type" :datatype="datatype" :field="field" :schema="datatype.schema" />
                    
                    <div class="editor">
                        <MonacoEditor theme="vs-dark" height="100%" language="javascript" :options="{}" v-model="resolver.callback" />
                    </div>
                </div>
                
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    props: {
        datatype: { type: Object },
        schema: { type: Object },
        field: { type: Object },
        type: { type: Object },
        resolver: { type: Object },
    },

    data(){
        return {
            editorActive: false,
        }
    },

    methods: {
        ToggleEditor(){
            this.editorActive = !this.editorActive
        },
    },
}
</script>

<style>

</style>