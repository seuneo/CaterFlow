import {create} from "zustand"


export const useOrderBank = create((set) => ({
    
    orders: [],
    setOrders: (orders) => set({orders}),
    createOrder: async(newOrder) => {
        if(!newOrder.name || !newOrder.contact || !newOrder.date || !newOrder.deliveryMode || !newOrder.orderList ){
            return {success: false, message:"Please fill in all fields"}
        }
        const response = await fetch("/api/orders", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newOrder)
          });

        const data = await response.json();
        set((state) => ({orders: data.data, ...state.orders}));
        return {success: true, message:"Order Created successfully"}
    },
    fetchOrders: async ()=> {
        
        const token = localStorage.getItem("token");

        const response = await fetch("/api/orders", {
            headers: {Authorization: `Bearer ${token}`}
        });
        const data = await response.json();      
        
    set({orders: data.data}); 
            
        
    },
    fetchOrdersByStore: async(store) => {
        const response = await fetch(`/api/orders/store/${store}`);
          const data = await response.json();
          set((state) => ({orders: data.data}));
        return {success: true, message:data.message}
    },
    deleteOrder: async(id) => {
        const response = await fetch(`/api/orders/${id}`, {
            method:"DELETE",
          });
          const data = await response.json();
          set((state) => ({orders: state.orders.filter(order => order._id !== id)}));
        return {success: true, message:data.message}
    },
    editOrder: async(id, updatedOrder) => {
        const response = await fetch(`/api/orders/${id}`, {
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedOrder)
          });

        const data = await response.json();
        set((state) => ({orders: state.orders.map((order) => (order._id === id ? data.data : order)),
            
        }));
        return {success: true, message:"Order Created successfully"}
    }

}))