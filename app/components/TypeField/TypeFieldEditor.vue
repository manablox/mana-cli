<template>
    <div class="typefieldeditor">
        <label>Name</label> <input type="text" v-model="field.name" /><br>
        <label>Type</label> 
        
        <select v-model="field.type">
            <option 
                v-for="(fieldType, fieldTypeIndex) in GetFieldTypes()"
                :key="`fieldtype-${ fieldType.name }-${ fieldTypeIndex }`"
                :value="fieldType.value"
            >
                {{ fieldType.name }}
            </option>
        </select>

        <ParamCreator :type="type" :datatype="datatype" :field="field" :schema="datatype.schema" />
        
        <h2 class="mt-4" v-if="field.resolver">Resolver</h2>
        <FieldResolverEditor v-if="field.resolver" :type="type" :datatype="datatype" :field="field" :schema="datatype.schema" :resolver="field.resolver" />
    </div>
</template>

<script>
export default {
    props: {
        type: { type: Object },
        datatype: { type: Object },
        field: { type: Object }
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
                    // if(type.id == this.type.id) return
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