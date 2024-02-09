import {useAuthStore} from '~/stores/authStore';
export default defineNuxtPlugin(()=>{
    return{
        provide:{
            authStore:useAuthStore()
        }
    }
})