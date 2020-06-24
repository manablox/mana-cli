<template>
    <div class="datatypeeditor">
        
        
        <div class="flex">
            <div class="w-1/2 px-2 py-1">
                <label>Name</label> <input class="px-3 py-1 border border-green-500" type="text" v-model="datatype.name" /><br>
                <label>Collection</label> <input class="px-3 py-1 border border-green-500" type="text" v-model="datatype.collection" />
            </div>

            <div class="w-1/2 px-2 py-1">
                <ImportsCreator :datatype="datatype" />
            </div>
        </div>

        <div class="flex">
            <div class="w-full px-2 py-1">
                <ProviderCreator v-if="datatype.provider" :datatype="datatype" :provider="datatype.provider" />
            </div>
        </div>
        
        <div class="flex">
            <div class="w-1/2 px-2 py-1">
                <TypeCreator :datatype="datatype" :schema="datatype.schema" />
            </div>

            <div class="w-1/2 px-2 py-1">
                <InputTypeCreator :datatype="datatype" :schema="datatype.schema" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        datatype: { type: Object }
    },


    
}
</script>

