const filesystem = require('fs-jetpack')
const ejs = require('ejs')
const Process = require('../../utils/process')

const taskDir = __dirname
const cliRootDir = process.cwd()
const workDir = process.env.WORKDIR
const args = process.argv.slice(2)

if(args.length == 0){
    console.error('no stack type defined')
    process.exit(1)
}

let stackType = args[0]
let stackName = args[1]

const sourcePath = `${ cliRootDir }/stacks/${ stackType.trim().toLowerCase() }`
const targetPath = `${ workDir }`

const source = filesystem.list(sourcePath)
const sourceFolders = source.filter((item) => {
    return filesystem.inspect(`${ sourcePath }/${ item }`).type == 'dir'
})
const sourceFiles = source.filter((item) => {
    return filesystem.inspect(`${ sourcePath }/${ item }`).type != 'dir'
})

sourceFolders.map((folder) => {
    let target = `${ targetPath }/${ folder }`
    filesystem.remove(target)
    filesystem.copy(`${ sourcePath }/${ folder }`, target)
})

sourceFiles.map((file) => {
    let target = `${ targetPath }/`
    let isEjs = false

    if(file.endsWith('.ejs')){
        file = file.replace('.ejs', '')
        isEjs = true
    }

    target += file

    if(isEjs){
        let parser = 'babel'
        let type = 'bash'

        let fileNameParts = file.split('.')
        if(fileNameParts.length > 1) type = fileNameParts.reverse()[0]

        switch(type){
            case 'json': parser = 'json'; break
            case 'bash': parser = 'markdown'; break
            case 'md': parser = 'markdown'; break
        }

        let fileContent = filesystem.read(`${ sourcePath }/${ file }.ejs`)
        let renderedFileContent = ejs.render(fileContent, { 
            name: stackName,
            repository: '',
            author: ''
        })

        let mode = '644'
        if(type == 'bash') mode = '647'

        filesystem.remove(target)
        filesystem.file(target, { content: renderedFileContent, mode: mode })
    }else{
        filesystem.remove(target)
        filesystem.copy(`${ sourcePath }/${ file }`, target)
    }
})

filesystem.remove(`${ targetPath }/node_modules`)
filesystem.remove(`${ targetPath }/yarn.lock`)


const Start = async () => {
    await Process.Run({
        name: 'yarn',
        args: ['--ignore-scripts'],
        cwd: workDir
    })

    await Process.Run({
        name: 'yarn',
        args: ['datatypes:create'],
        cwd: workDir
    })
}

Start()
