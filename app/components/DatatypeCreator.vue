<template>
    <div class="datatypetypegenerator">
        <button type="button" @click="Add">
            <Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
            Add new datatype
        </button>
        <details
            class="mx-2"
            v-for="(datatype, datatypeIndex) in datatypes"
            :key="`datatype-${ datatype.id }-${ datatypeIndex }`"

        >
            <summary>
                {{ datatype.name }}
                <button type="button" @click="Export(datatype)">
                    export
                </button>
                
                <button type="button" v-if="!datatype.imported" @click="Delete(datatype)">
                    <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                </button>
                
            </summary>

            <DatatypeEditor :datatype="datatype" />
        </details>
    </div>
</template>

<script>
export default {

    data(){
        const datatypes = JSON.parse(JSON.stringify(this.$store.getters['datatypes/Datatypes']))
        
        return {
            datatypes
        }
    },

    mounted(){
        this.$root.$datatypes = this.datatypes
    },

    methods: {
        Add(){
            this.datatypes.push({
                id: new Date().getTime(),
                name: 'NewDatatype',
                collection: '',
                imported: false,
                schema: {
                    types: [],
                    inputTypes: [],
                    queries: [],
                    mutations: []
                }
            })
        },

        Delete(datatype){
            this.datatypes = this.datatypes.filter((item) => {
                return item.id !== datatype.id
            })
        },

        Export(datatype){
            console.log('export')
        }
    }
}
</script>

<style lang="scss">
input[type="text"],
select{
    @apply bg-gray-100;
    @apply border;
    @apply border-gray-500;
    // @apply px-1;
    // @apply py-1;
    @apply mb-1;
    @apply w-48;
}

label {
    @apply w-20;
    @apply inline-block;
}

button {
    @apply bg-blue-200;
    // @apply border;
    // @apply border-blue-500;
    @apply px-2;
    @apply py-1;
    @apply text-sm;
    @apply font-bold;
    @apply text-blue-500;
    @apply rounded-sm;
    @apply shadow-sm;

    &:hover {
        @apply text-blue-600;
        @apply shadow-md;
    }

    
    // @apply shadow-outline;
}

details {
    // @apply px-1;
    @apply border;
    @apply border-gray-500;
    @apply mt-2;

    details {
        @apply border-gray-400;

        summary {
            @apply bg-gray-300;
        }

        details {
            @apply border-gray-300;

            summary {
                @apply bg-gray-200;
            }
        }
    }

    summary {
        @apply px-1;
        @apply py-1;
        @apply bg-gray-400;
        @apply font-bold;
        @apply text-base;
    }

    > div {
        @apply px-2;
        @apply py-2;
    }
}

h2 {
    @apply text-xl;
    @apply font-bold;
    @apply bg-gray-300;
    // @apply inline-block;
    // @apply -mx-1;
    // @apply -mt-1;
    @apply px-1;
    @apply mb-1;
}

</style>