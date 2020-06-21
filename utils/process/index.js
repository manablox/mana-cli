export default class Process {
    static async Start(_process, args = []){
        return new Promise((resolve, reject) => {
            const _processInstance = spawn(_process, args, { stdio: 'inherit' })
            _processInstance.on('close', (code) => { resolve() })
            _processInstance.on('error', (err) => { console.error(err); reject(); process.exit(1) })
        })
    }
}