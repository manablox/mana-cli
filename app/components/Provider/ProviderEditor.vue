<template>
    <div class="providereditor">
        <button type="button" class="block mb-2" @click="ToggleEditor">Edit function</button>

        <label>Name</label> <input type="text" v-model="provider.name" /><br>
        <label>Error Key</label> <input type="text" v-model="provider.errorKey" /><br>
        
        <ParamCreator :datatype="datatype" :field="provider" />
        
        <div class="modal" v-if="editorActive">
            <div class="modal__backdrop"></div>
            <div class="modal__window">
                <div class="modal__header font-bold">
                    Edit {{ provider.name }} provider function

                    <button type="button" class="float-right -mt-1" @click="ToggleEditor">
                        <Icon icon="close" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                </div>
                <div class="modal__content">
                    <!-- <ParamCreator :type="type" :datatype="datatype" :field="field" :schema="datatype.schema" /> -->
                    
                    <div class="editor">
                        <MonacoEditor theme="vs-dark" height="100%" language="javascript" :options="{}" v-model="provider.callback" />
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
        provider: { type: Object }
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

<style lang="scss">

.editor {
    height: 400px;
}
.paramslist {
    @apply mb-4
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__backdrop {
        background-color: rgba(black, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    &__window {
        position: relative;
        width: 80vw;
        height: 80vh;
        background-color: white;
        z-index: 2;
    }

    &__header {
        @apply px-2;
        @apply py-2;
        @apply bg-blue-200;
    }

    &__content {
        @apply px-2;
        @apply py-2;
    }
}
</style>