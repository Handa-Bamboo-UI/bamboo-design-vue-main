import * as components from './src/index'
import type { App } from 'vue'
export * from './src/index'
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

 
export default{
    install:(app:App)=>{
        library.add(...Object.values(fas));
        library.add(...Object.values(fab));
        library.add(...Object.values(far));
        app.component('fa-icon', FontAwesomeIcon);
        for (let tmp in components){
            app.use(components[tmp as keyof typeof components]);
        }
    }
}
