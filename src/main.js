import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { 
    MdRocketlaunchOutlined, 
    CoHamburgerMenu, 
    MdArrowforwardiosRound, 
    BiMap, 
    MdQuestionanswerOutlined, 
    OiWorkflow, 
    BiInfinity, 
    HiHome, 
    BiLockFill, 
    MdManageaccounts,
    FaBalanceScale,
    FaDatabase,
    RiFileTransferFill,
    MdHistoryRound,
    IoCloseOutline
} from "oh-vue-icons/icons"



addIcons( 
    MdRocketlaunchOutlined, 
    CoHamburgerMenu, 
    MdArrowforwardiosRound, 
    BiMap, MdQuestionanswerOutlined, 
    OiWorkflow, 
    BiInfinity, 
    HiHome, 
    BiLockFill, 
    MdManageaccounts, 
    FaBalanceScale,
    FaDatabase,
    RiFileTransferFill,
    MdHistoryRound,
    IoCloseOutline
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon)

app.mount('#app')
