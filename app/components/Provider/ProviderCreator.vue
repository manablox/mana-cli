<template>
    <div class="providercreator mt-4">
        <h2>Provider functions <button type="button" class="float-right -mr-1 h-7" @click="Add"><Icon icon="document-add" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" /> Add new provider function</button></h2>
        <div class="px-2 py-2 -mt-1 border border-gray-300">
            
            <details
                v-for="(provider, providerIndex) in datatype.provider"
                :key="`provider-${ provider.id }-${ providerIndex }`"

            >
                <summary>
                    {{ provider.name }}
                    
                    <button type="button" class="float-right -mt-1 -mr-1 h-8" @click="Delete(provider)">
                        <Icon icon="trash" class="inline-block h-4 w-4 fill-current text-blue-500 hover:text-blue-700" />
                    </button>
                    
                </summary>

                <ProviderEditor :datatype="datatype" :provider="provider" />
            </details>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: { type: Object },
        datatype: { type: Object },
    },

    methods: {
        Add(){
            const provider = {
                id: new Date().getTime(),
                name: 'NewProviderFunction',
                params: [],
                callback: '',
                errorKey: ''
            }

            this.datatype.provider.push(provider)
        },

        Delete(field){

        }
    }
}
</script>

<style>

</style>