import {defineConfig} from "vite";

export default defineConfig(()=>{
    // const env = loadEnv(mode,process.cwd(),'')
    // return {
    //     define:{
    //         __APP_ENV_:JSON.stringify(env.APP_ENV)
    //     }
    // }
    let config = {}
    // if (mode === "development"){
    //     config = require('./vite.config.dev').default
    // }
    config = require('./vite.config.dev').default
    return defineConfig(config)
})