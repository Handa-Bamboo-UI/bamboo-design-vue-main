import _Button from './button.vue'
import type {App,Plugin} from 'vue'
import {Icon} from "../Icon"

type SFCWithInstall<T> = T & Plugin
const withInstall=<T>(component :T)=>{
    (component as SFCWithInstall<T>).install=(app:App)=>{
        const name =(component as any).name;
        app.component(name,component as SFCWithInstall<T>)
        app.component('bm-icon',Icon)
    }
    return component as SFCWithInstall<T>
}
export const Button = withInstall(_Button)
export default Button