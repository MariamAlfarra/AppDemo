import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref as dbRef, get } from "firebase/database";
import type { User } from "~/types/user";
export const pageInit = async (): Promise<User | null> => {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                resolve(null);
                return;
            }

            try {
                const database = getDatabase();
                const userId = user.uid;
                const userDataRef = dbRef(database, `users/${userId}`);
                const snapshot = await get(userDataRef);

                if (snapshot.exists()) {
                    resolve(snapshot.val());
                } else {
                    useToast().add({
                        title: "User data not found.",
                        timeout: 5000,
                        icon: "i-heroicons-exclamation-circle",
                        color: "red"
                    });
                    resolve(null);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                useToast().add({
                    title: "Error Logging In",
                    timeout: 5000,
                    icon: "i-heroicons-exclamation-circle",
                    color: "red"
                });
                reject(error); 
            }
        }, (error) => {
            console.error("Auth state change error:", error);
            useToast().add({
                title: "Authentication error.",
                timeout: 5000,
                icon: "i-heroicons-exclamation-circle",
                color: "red"
            });
            reject(error);
        });
    });
};

