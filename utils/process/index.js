const util = require('util');
const { cwd } = require('process');
const exec = util.promisify(require('child_process').exec);

module.exports = class Process {
    static async Run({ 
        name = null, 
        args = [], 
        env = {}, 
        onStdout = () => {},
        cwd = null
    }){
        const _process = exec(`${ name } ${ args.join(' ') }`, {
            cwd: cwd,
            env: {
                ...process.env,
                ...env
            }
        })

        _process.child.stdout.on('data', (text) => { onStdout(text) })
        
        const { stdout, error, stderr } = await _process
        
        if(error) return { error, stderr }
        
        return stdout
    }
}