# mana-cli


## Zero configuration webpack runner

With mana-cli you can run any ES20xx js file from anywhere. This is heavily inspired by [backpack](https://github.com/jaredpalmer/backpack).


## Installation

run ```npm install -g mana-cli```


## How to use

Get into the folder, where your javascript lives, and get started by typing ```mana dev myfile.js```
This will start a development instance of your code.




## Other starting options


### Usage: mana build [file]

```
Build a production package

Options:
  -h, --help        output usage information
```



### Usage: mana production [file]

```
Build and start a production package

Options:
  -h, --help        output usage information
```



### Usage: mana dev [file]

```
start a development server

Options:
  -h, --help  output usage information
```



### Usage: mana stack:create [type] [name]

```
create a stack clone into the current workfolder (process.cwd())

for example: 

> mana stack:create api wonderapi

creates an api stack names wonderapi 


Options:
  -h, --help  output usage information
```



## Custom configuration

To add a new config to webpack, you can create a ```manablox.config.js``` file.

For example: 

```js
module.exports = {
    webpack: (config, options, webpack) => {
        // add a custom alias for imports
        config.resolve = {
            alias: {
                '~~': './'
            }
        }

        return config
    }
}
```
