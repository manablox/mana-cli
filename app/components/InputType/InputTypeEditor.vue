<template>
    <div class="inputtypeditor">
         <label>Name</label> <input type="text" v-model="type.name" /><br>
        <InputTypeFieldCreator :datatype="datatype" :schema="schema" :type="type" />
    </div>
</template>

<script>
export default {
    props: {
        datatype: { type: Object },
        schema: { type: Object },
        type: { type: Object }
    }
}
</script>

<style>

</style>