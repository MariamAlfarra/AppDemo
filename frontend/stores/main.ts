import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {pageInit} from "~/composables/useData";
import type { User } from "~/types/user";
export const useMainStore = defineStore("main", {
    state: () => ({
        isAuthenticated: false,
        loading: false,
        user: null as User| null,
        activeTab: 0,
        isModalVisible: false,
        leftSideModal: false
    }),

    actions: {
        async loginUser(email: string, password: string) {
            this.loading = true;
            const auth = getAuth();
        
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.isAuthenticated = true;

                const token = useCookie("token");
                token.value = await userCredential.user.getIdToken();
                this.user = await pageInit(); 

                return userCredential; 
            } catch (error) {
                console.error("Login Error:", error);
                useToast().add({
                    title: "Invalid Credentials",
                    timeout: 5000,
                    icon: "i-heroicons-exclamation-circle",
                    color: "red"
                });
                throw error; 
            } finally {
                this.loading = false;
            }
        },
        
        async logoutUser() {
            const auth = getAuth();
            try {
                await signOut(auth);
                navigateTo("/login");
                
            } catch (error) {
                console.error("Logout Error:", error);
            }finally{
                this.user = null;
                this.isAuthenticated = false;
                const token = useCookie("token");
                token.value = null;
                this.activeTab=0;
            }
        },

        setActiveTab(index: number) {
            this.activeTab = index;
        }
    }
});