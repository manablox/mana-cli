import Vue from 'vue'

const LoadComponents = context => {    
    context.keys().forEach(key => {
        let component = context(key).default
        let componentName = key.split('/').reverse()[0].replace('.vue', '')
        Vue.component(componentName, component)
    })
}

LoadComponents(require.context('~/components', true, /\.vue$/))