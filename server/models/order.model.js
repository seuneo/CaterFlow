import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    store:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Ordered", "Received", "In Progress", "prepComplete", "pickedUp", "deliveryComplete" ],
        default: "Ordered"
    },
    
    paymentStatus:{
        type: String,
        enum: ["Paid", "Not Paid"],
        default: "Not Paid"
    },
    orderedBy:{
        type: String
    },
    receivedBy:{
        type: String
    },
    startedBy:{
        type: String
    },
    prepCompletedBy:{
        type: String
    },
    pickedUpBy:{
        type: String
    },
    deliveredBy:{
        type: String
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    notes:{
        type: String
    },
    deliveryMode: {
        type: String,
        enum: ["Pickup", "Delivery" ],
        default: "Pickup",
        required: true
    },
    deliveryAddress:{
        type: String
    },
    date:{
        type: Date,
        required: true
    },
    orderList:{
        type: [Object],
        default:[{name: "", quantity:0}],
        required: true
    }
}, {
    timestamps: true //createdAt updatedAt
});

const Order = mongoose.model('Order', orderSchema);

export default Order;