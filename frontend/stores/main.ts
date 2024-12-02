import { defineStore } from "pinia";
import users from "~/public/users.json";
import type { User } from "~/types/user";

export const useMainStore = defineStore("main", {
    state: ()=> ({
        isAuthenticated:false,
        user: null as User | null,
        userData: [],
        activeTab: 0,
        isModalVisible: false
    }),
    actions: {
        login(email: string, password: string) {
            const user = users.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                this.isAuthenticated = true;
                this.user = user;
                localStorage.setItem("auth", JSON.stringify(this.user?.id));
                return true;
            }
            return false;
        },

        logout(router: string[]) {
            router.push("/login");
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem("auth");
            this.isModalVisible=false;
            this.activeTab = 0;
            
        },

        checkAuth() {
            const auth = localStorage.getItem("auth");
            try {
                if (auth) {
                    const user_id = JSON.parse(auth);
                    const user = users.find(
                        (u) => u.id === user_id
                    );
                    if (user) { 
                        this.isAuthenticated = true;
                        this.user = user;
                    }
                }
            } catch (error) { 
                this.isAuthenticated = false;
                this.user = null;
                localStorage.removeItem("auth");
            }
        },
        setActiveTab(index: number) {
            this.activeTab = index;
        }
    }
});