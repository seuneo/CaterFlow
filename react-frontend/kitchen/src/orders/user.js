
import {create} from "zustand"

export const usersBank = create((set) => ({
    user: [],
    logInUser: async(user) => {
        
            const response = await fetch("/auth/login/", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
              });
              const result = await response.json();
              console.log(result);
    

        //set((state) => ({user: []}));
        //return {success: true, message:"Order Created successfully"}
    }

}))