import * as components from './src/index'
export * from './src/index'
import type { App } from 'vue'

export default{

install:(app:App)=>{
    for (let tmp in components){
        app.use(components[tmp as keyof typeof components]);
    }
}

}
