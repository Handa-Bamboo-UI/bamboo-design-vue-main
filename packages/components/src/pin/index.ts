import _Pin from './pin.vue'
import { Button } from "../button";
import type {App,Plugin} from 'vue'
type SFCWithInstall<T> = T & Plugin
const withInstall=<T>(component :T)=>{
    (component as SFCWithInstall<T>).install=(app:App)=>{
        const name =(component as any).name;
        app.component(name,component as SFCWithInstall<T>)
        app.component('bm-button',Button)
    }
    return component as SFCWithInstall<T>
}
export const Pin = withInstall(_Pin)
export type PinProps = InstanceType<typeof Pin>
export default Pin
