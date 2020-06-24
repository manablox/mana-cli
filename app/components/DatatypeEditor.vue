<template>
    <div class="datatypeeditor">
        
        <label>Name</label> <input class="px-3 py-1 border border-green-500" type="text" v-model="datatype.name" /><br>
        <label>Collection</label> <input class="px-3 py-1 border border-green-500" type="text" v-model="datatype.collection" />
        <br>
        
        <div class="flex">
            <div class="w-1/2 px-2 py-1">
                <DatatypeTypeCreator :datatype="datatype" :schema="datatype.schema" />
            </div>
            <div class="w-1/2 px-2 py-1">
                <DatatypeInputTypeCreator :datatype="datatype" :schema="datatype.schema" />
            </div>
        </div>
        
        
        
        <!-- {{ datatype }} -->

    </div>
</template>

<script>
export default {
    props: {
        datatype: { type: Object }
    },


    
}
</script>

