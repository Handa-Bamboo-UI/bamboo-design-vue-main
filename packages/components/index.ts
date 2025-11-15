import * as allExports from './src/index'  
import type { App, Component, Plugin } from 'vue'
import'./src/style/global.less'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const isPlugin = (obj: unknown): obj is Plugin => {
  return typeof obj === 'object' && obj !== null && 'install' in obj
}

const isComponent = (obj: unknown): obj is Component => {
  return typeof obj === 'object' && obj !== null && ('setup' in obj || 'render' in obj || 'template' in obj)
}
 
const {
  MessageBox, 
  MessageBoxPlugin,  
} = allExports

export default {
  install: (app: App) => {
    library.add(...Object.values(fas), ...Object.values(fab), ...Object.values(far))
    app.component('fa-icon', FontAwesomeIcon)

 
    if (isComponent(MessageBox)) {
      app.component('MessageBox', MessageBox)
    }
 
    if (isPlugin(MessageBoxPlugin)) {
      app.use(MessageBoxPlugin)
    }
 
    Object.entries(allExports).forEach(([name, exportItem]) => {
      if (isComponent(exportItem) && name !== 'MessageBox') {
        app.component(name, exportItem)
      }
      if (isPlugin(exportItem) && name !== 'MessageBoxPlugin') {  
        app.use(exportItem)
      }
 
    })
  }
}