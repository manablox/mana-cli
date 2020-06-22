const taskDir = __dirname
const cliRootDir = process.cwd()
const workDir = process.env.WORKDIR
const args = process.argv.slice(2)

console.log(taskDir, cliRootDir, workDir)
console.log('start manablox app', process.env.HOST, process.env.PORT)
console.log(args)