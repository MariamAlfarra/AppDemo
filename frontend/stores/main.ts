import { defineStore } from "pinia";
import users from "~/public/users.json";
import type { User } from "~/types/user";

export const useMainStore = defineStore("main", {
    state: ()=> ({
        isAuthenticated:false,
        user: null as User | null,
        userData: []
    }),
    actions: {
        login(email: string, password: string) {
            const user = users.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                this.isAuthenticated = true;
                this.user = user;
                localStorage.setItem("auth", JSON.stringify(this.user.id));
                return true;
            }
            return false;
        },

        logout(router: string[]) {
            this.isAuthenticated = false;
            router.push("/login");
            this.user = null;
            localStorage.removeItem("auth");
            
        },

        checkAuth() {
            const auth = localStorage.getItem("auth");
            console.log("Initial isAuthenticated:", this.isAuthenticated); 
            console.log(auth);
          
            try {
                if (auth) {
                    const user_id = JSON.parse(auth);
                    const user = users.find(
                        (u) => u.id === user_id
                    );
                    if (user) { 
                        console.log(user.id);
                        this.isAuthenticated = true;
                        this.user = user;
                        console.log("Updated isAuthenticated:", this.isAuthenticated);
                    }
                }
            } catch (error) { 
                this.isAuthenticated = false;
                this.user = null;
                localStorage.removeItem("auth");
            }
        }
    }
});