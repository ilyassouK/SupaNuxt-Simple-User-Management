import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', ()=>{
    const supaUser = useSupabaseUser();
    const supaClient = useSupabaseClient().auth;

    let state = reactive({user:null});

    const isAuthenticated = computed(() => state.user!== null);

    // Called From the Global Auth Middleware
    const authState = () => {
        state.user = supaUser;
        // console.log("authState(), state.user: ", state.user)
    }

    const logOut = async () => {
        const {error} = await supaClient.signOut();
        useRouter().go();
        if(error) throw error;
    }

    return {...toRefs(state), isAuthenticated, authState, logOut}
})