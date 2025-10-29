const mockOrders = [
    {
        _id: 1,
        name: "John Smith",
        contact: "+1-555-0123",
        date: new Date(2025, 9, 3, 10, 30), // October 3, 2025, 10:30 AM
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Chicken Caesar Salad", quantity: "2" },
            { name: "Grilled Salmon", quantity: "1" }
        ],
        notes: "Extra dressing on the side",
        paymentStatus: "Not Paid"
    },
    {
        _id: 2,
        name: "Sarah Johnson",
        contact: "+1-555-0456",
        date: new Date(2025, 9, 7, 14, 0), // October 7, 2025, 2:00 PM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Vegetarian Pasta", quantity: "1" },
            { name: "Greek Salad", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "123 Main St",
        paymentStatus: "Paid"
    },
    {
        _id: 4,
        name: "Emily Davis",
        contact: "+1-555-0321",
        date: new Date(2025, 8, 17, 9, 45), // September 17, 2025, 9:45 AM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Avocado Toast", quantity: "1" },
            { name: "Fresh Juice", quantity: "1" }
        ],
        notes: "Gluten-free bread",
        paymentStatus: "Not Paid"
    },
    {
        _id: 5,
        name: "David Brown",
        contact: "+1-555-0654",
        date: new Date(2025, 9, 5, 18, 30), // October 5, 2025, 6:30 PM
        deliveryMode: "Pickup",
        status: "Ordered",
        orderList: [
            { name: "Fish Tacos", quantity: "2" },
            { name: "Rice Bowl", quantity: "1" }
        ],
        notes: "Spicy salsa",
        paymentStatus: "Not Paid"
    },
    {
        _id: 6,
        name: "Lisa Anderson",
        contact: "+1-555-0987",
        date: new Date(2025, 9, 8, 11, 0), // October 8, 2025, 11:00 AM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Quinoa Bowl", quantity: "1" },
            { name: "Green Smoothie", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "Office building",
        paymentStatus: "Paid"
    },
    {
        _id: 7,
        name: "Robert Taylor",
        contact: "+1-555-1234",
        date: new Date(2025, 9, 12, 8, 30), // October 12, 2025, 8:30 AM
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Breakfast Burrito", quantity: "2" },
            { name: "Coffee", quantity: "2" }
        ],
        notes: "Extra hot coffee",
        paymentStatus: "Paid"
    },
    {
        _id: 8,
        name: "Maria Garcia",
        contact: "+1-555-5678",
        date: new Date(2025, 9, 14, 13, 45), // October 14, 2025, 1:45 PM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Chicken Quesadilla", quantity: "1" },
            { name: "Side Salad", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "456 Oak Ave",
        paymentStatus: "Not Paid"
    },
    {
        _id: 9,
        name: "James Wilson",
        contact: "+1-555-9012",
        date: new Date(2025, 9, 23, 12, 0), // October 23, 2025, 12:00 PM
        deliveryMode: "Pickup",
        status: "Completed",
        orderList: [
            { name: "Club Sandwich", quantity: "1" },
            { name: "Soup of the Day", quantity: "1" }
        ],
        notes: "No mayo on sandwich",
        paymentStatus: "Paid"
    },
    {
        _id: 10,
        name: "Jennifer Lee",
        contact: "+1-555-3456",
        date: new Date(2025, 9, 24, 10, 15), // October 24, 2025, 10:15 AM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Veggie Wrap", quantity: "1" },
            { name: "Fruit Bowl", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "789 Pine St",
        paymentStatus: "Paid"
    },
    {
        _id: 11,
        name: "Michael Chen",
        contact: "+1-555-7890",
        date: new Date(2025, 9, 25, 17, 30), // October 25, 2025, 5:30 PM
        deliveryMode: "Pickup",
        status: "Ordered",
        orderList: [
            { name: "Teriyaki Bowl", quantity: "1" },
            { name: "Spring Rolls", quantity: "2" }
        ],
        notes: "Extra sauce on the side",
        paymentStatus: "Not Paid"
    },
    {
        _id: 12,
        name: "Amanda Rodriguez",
        contact: "+1-555-2345",
        date: new Date(2025, 9, 26, 9, 0), // October 26, 2025, 9:00 AM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Acai Bowl", quantity: "1" },
            { name: "Green Tea", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "321 Elm St",
        paymentStatus: "Paid"
    },
    {
        _id: 13,
        name: "Michael Chen",
        contact: "+1-555-3456",
        date: new Date(2025, 9, 26, 14, 30), // October 26, 2025, 2:30 PM
        deliveryMode: "Pickup",
        status: "Pending",
        orderList: [
            { name: "Chicken Teriyaki Bowl", quantity: "2" },
            { name: "Miso Soup", quantity: "1" },
            { name: "Edamame", quantity: "1" }
        ],
        notes: "No onions in the teriyaki bowl",
        paymentStatus: "Not Paid"
    },
    {
        _id: 14,
        name: "Kevin Thompson",
        contact: "+1-555-6789",
        date: new Date(2025, 9, 27, 14, 20), // October 27, 2025, 2:20 PM
        deliveryMode: "Pickup",
        status: "Completed",
        orderList: [
            { name: "BBQ Ribs", quantity: "1" },
            { name: "Coleslaw", quantity: "1" }
        ],
        notes: "Extra BBQ sauce",
        paymentStatus: "Paid"
    },
    {
        _id: 15,
        name: "Sarah Williams",
        contact: "+1-555-0123",
        date: new Date(2025, 9, 28, 11, 45), // October 28, 2025, 11:45 AM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Caesar Salad", quantity: "1" },
            { name: "Garlic Bread", quantity: "2" }
        ],
        notes: "",
        deliveryAddress: "654 Maple Ave",
        paymentStatus: "Not Paid"
    },
    {
        _id: 16,
        name: "Daniel Kim",
        contact: "+1-555-4567",
        date: new Date(2025, 10, 29, 16, 0), // November 29, 2025, 4:00 PM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Chicken Teriyaki", quantity: 1 },
            { name: "Beef Bulgogi", quantity: 2 }
        ]
    },
    {
        _id: 17,
        name: "Alex Thompson",
        contact: "+1-555-1111",
        date: new Date(2025, 8, 5, 12, 30), // September 5, 2025, 12:30 PM
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Turkey Sandwich", quantity: "1" },
            { name: "Chips", quantity: "1" }
        ],
        notes: "No pickles",
        paymentStatus: "Paid"
    },
    {
        _id: 18,
        name: "Rachel Green",
        contact: "+1-555-2222",
        date: new Date(2025, 8, 12, 15, 45), // September 12, 2025, 3:45 PM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Pasta Salad", quantity: "1" },
            { name: "Iced Tea", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "999 Cedar St",
        paymentStatus: "Not Paid"
    },
    {
        _id: 19,
        name: "Tom Wilson",
        contact: "+1-555-3333",
        date: new Date(2025, 10, 2, 11, 15), // November 2, 2025, 11:15 AM
        deliveryMode: "Pickup",
        status: "Completed",
        orderList: [
            { name: "Chicken Wings", quantity: "6" },
            { name: "Ranch Dip", quantity: "1" }
        ],
        notes: "Extra crispy",
        paymentStatus: "Paid"
    },
    {
        _id: 20,
        name: "Lisa Park",
        contact: "+1-555-4444",
        date: new Date(2025, 10, 8, 14, 0), // November 8, 2025, 2:00 PM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Pho Soup", quantity: "1" },
            { name: "Spring Rolls", quantity: "2" }
        ],
        notes: "",
        deliveryAddress: "777 Birch Ave",
        paymentStatus: "Paid"
    },
    {
        _id: 20,
        name: "Mark Johnson",
        contact: "+1-555-5555",
        date: new Date(2025, 7, 10, 12, 0), // August 10, 2025, 12:00 PM
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Summer Salad", quantity: "1" },
            { name: "Lemonade", quantity: "1" }
        ],
        notes: "Extra lemon",
        paymentStatus: "Paid"
    },
    {
        _id: 21,
        name: "Jessica Brown",
        contact: "+1-555-6666",
        date: new Date(2025, 11, 5, 14, 30), // December 5, 2025, 2:30 PM
        deliveryMode: "Delivery",
        status: "Ordered",
        orderList: [
            { name: "Holiday Special", quantity: "1" },
            { name: "Hot Chocolate", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "888 Winter St",
        paymentStatus: "Not Paid"
    },
    {
        _id: 22,
        name: "Chris Davis",
        contact: "+1-555-7777",
        date: new Date(2026, 0, 8, 11, 0), // January 8, 2026, 11:00 AM
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "New Year Bowl", quantity: "1" },
            { name: "Green Tea", quantity: "1" }
        ],
        notes: "Fresh start",
        paymentStatus: "Paid"
    },
    {
        _id: 23,
        name: "Anna Wilson",
        contact: "+1-555-8888",
        date: new Date(2026, 1, 14, 13, 15), // February 14, 2026, 1:15 PM
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Valentine Special", quantity: "2" },
            { name: "Chocolate Cake", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "999 Love Ave",
        paymentStatus: "Paid"
    }
];