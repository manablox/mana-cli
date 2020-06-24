<template>
    <div class="typeditor">
         <label>Name</label> <input type="text" v-model="type.name" /><br>
        <TypeFieldCreator :datatype="datatype" :schema="schema" :type="type" />
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