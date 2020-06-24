<template>
    <div class="parameditor">
        <label>Name</label> <input type="text" v-model="param.name" /><br>
        <label>Type</label> 
        
        <select v-model="param.type">
            <option 
                v-for="(fieldType, fieldTypeIndex) in GetFieldTypes()"
                :key="`fieldtype-${ fieldType.name }-${ fieldTypeIndex }`"
                :value="fieldType.value"
            >
                {{ fieldType.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        type: { type: Object },
        datatype: { type: Object },
        field: { type: Object },
        param: { type: Object },
    },

    
    
    methods: {
        GetFieldTypes(){
            const fieldTypes = [
                { value: 'ID', name: 'ID' },
                { value: 'String', name: 'String' },
                { value: 'Int', name: 'Integer' },
                { value: 'Date', name: 'Date' },
            ]

            let customFieldTypes = []

            this.$root.$datatypes.map((datatype) => {
                datatype.schema.types.map((type) => {
                    if(typeof this.type !== 'undefined' && type.name == this.type.name) return
                    customFieldTypes.push({ value: type.name, name: type.name })
                })
            })
           
            return [
                ...fieldTypes,
                ...customFieldTypes
            ]
        }
    }
}
</script>

<style>

</style>