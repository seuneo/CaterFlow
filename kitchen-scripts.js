// CaterFlow Order Manager - Management Demo

// Mock data for orders (matching the original structure)
const mockOrders = [
    {
        _id: 1,
        name: "John Smith",
        contact: "+1-555-0123",
        date: new Date(2025, 9, 3, 10, 30), // October 3, 2025, 10:30 AM
        time: "10:30 AM",
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
        time: "2:00 PM",
        deliveryMode: "Delivery",
        status: "Pending",
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
        time: "9:45 AM",
        deliveryMode: "Delivery",
        status: "Received",
        orderList: [
            { name: "Avocado Toast", quantity: "1" },
            { name: "Fresh Juice", quantity: "1" }
        ],
        notes: "Gluten-free bread",
        deliveryAddress: "234 Park Blvd",
        paymentStatus: "Not Paid"
    },
    {
        _id: 5,
        name: "David Brown",
        contact: "+1-555-0654",
        date: new Date(2025, 9, 5, 18, 30), // October 5, 2025, 6:30 PM
        time: "6:30 PM",
        deliveryMode: "Pickup",
        status: "Pending",
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
        time: "11:00 AM",
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
        time: "8:30 AM",
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
        time: "1:45 PM",
        deliveryMode: "Delivery",
        status: "Pending",
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
        time: "12:00 PM",
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
        time: "10:15 AM",
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
        time: "5:30 PM",
        deliveryMode: "Pickup",
        status: "Pending",
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
        time: "9:00 AM",
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
        time: "2:30 PM",
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
        time: "2:20 PM",
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
        time: "11:45 AM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "Caesar Salad", quantity: "1" },
            { name: "Garlic Bread", quantity: "2" }
        ],
        notes: "",
        deliveryAddress: "654 Maple Ave",
        paymentStatus: "Not Paid"
    },
    {
        _id: 24,
        name: "Patricia Martinez",
        contact: "+1-555-7891",
        date: new Date(2025, 9, 30, 9, 30), // October 30, 2025, 9:30 AM
        time: "9:30 AM",
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Breakfast Plate", quantity: "1" },
            { name: "Orange Juice", quantity: "1" }
        ],
        notes: "No eggs",
        paymentStatus: "Paid"
    },
    {
        _id: 25,
        name: "Brian Foster",
        contact: "+1-555-8901",
        date: new Date(2025, 9, 30, 16, 45), // October 30, 2025, 4:45 PM
        time: "4:45 PM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "Philly Cheesesteak", quantity: "1" },
            { name: "French Fries", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "147 Birch Rd",
        paymentStatus: "Not Paid"
    },
    {
        _id: 26,
        name: "Michelle Chang",
        contact: "+1-555-9012",
        date: new Date(2025, 9, 31, 12, 15), // October 31, 2025, 12:15 PM
        time: "12:15 PM",
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Halloween Special", quantity: "2" },
            { name: "Pumpkin Soup", quantity: "1" }
        ],
        notes: "Happy Halloween!",
        paymentStatus: "Paid"
    },
    {
        _id: 27,
        name: "Ryan O'Connor",
        contact: "+1-555-0124",
        date: new Date(2025, 9, 31, 19, 0), // October 31, 2025, 7:00 PM
        time: "7:00 PM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "Spooky Pasta", quantity: "1" },
            { name: "Ghost Cookies", quantity: "3" }
        ],
        notes: "",
        deliveryAddress: "789 Spooky Lane",
        paymentStatus: "Not Paid"
    },
    {
        _id: 28,
        name: "Nicole Taylor",
        contact: "+1-555-1235",
        date: new Date(2025, 10, 1, 10, 0), // November 1, 2025, 10:00 AM
        time: "10:00 AM",
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Turkey Sandwich", quantity: "1" },
            { name: "Apple Cider", quantity: "1" }
        ],
        notes: "",
        paymentStatus: "Paid"
    },
    {
        _id: 29,
        name: "Justin Moore",
        contact: "+1-555-2346",
        date: new Date(2025, 10, 5, 13, 30), // November 5, 2025, 1:30 PM
        time: "1:30 PM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "Chicken Curry", quantity: "1" },
            { name: "Naan Bread", quantity: "2" },
            { name: "Rice", quantity: "1" }
        ],
        notes: "Mild spice",
        deliveryAddress: "321 Autumn Dr",
        paymentStatus: "Not Paid"
    },
    {
        _id: 30,
        name: "Lauren Harris",
        contact: "+1-555-3457",
        date: new Date(2025, 10, 8, 11, 45), // November 8, 2025, 11:45 AM
        time: "11:45 AM",
        deliveryMode: "Pickup",
        status: "Received",
        orderList: [
            { name: "Cobb Salad", quantity: "1" },
            { name: "Iced Tea", quantity: "1" }
        ],
        notes: "No bacon",
        paymentStatus: "Paid"
    },
    {
        _id: 31,
        name: "Brandon Scott",
        contact: "+1-555-4568",
        date: new Date(2025, 10, 15, 17, 15), // November 15, 2025, 5:15 PM
        time: "5:15 PM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "BBQ Chicken", quantity: "2" },
            { name: "Cornbread", quantity: "2" },
            { name: "Collard Greens", quantity: "1" }
        ],
        notes: "",
        deliveryAddress: "555 Harvest Way",
        paymentStatus: "Not Paid"
    },
    {
        _id: 16,
        name: "Daniel Kim",
        contact: "+1-555-4567",
        date: new Date(2025, 10, 29, 16, 0), // November 29, 2025, 4:00 PM
        time: "4:00 PM",
        deliveryMode: "Delivery",
        status: "Pending",
        orderList: [
            { name: "Chicken Teriyaki", quantity: 1 },
            { name: "Beef Bulgogi", quantity: 2 }
        ],
        deliveryAddress: "555 Cherry Lane"
    },
    {
        _id: 17,
        name: "Alex Thompson",
        contact: "+1-555-1111",
        date: new Date(2025, 8, 5, 12, 30), // September 5, 2025, 12:30 PM
        time: "12:30 PM",
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
        time: "3:45 PM",
        deliveryMode: "Delivery",
        status: "Pending",
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
        time: "11:15 AM",
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
        name: "Mark Johnson",
        contact: "+1-555-5555",
        date: new Date(2025, 7, 10, 12, 0), // August 10, 2025, 12:00 PM
        time: "12:00 PM",
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
        time: "2:30 PM",
        deliveryMode: "Delivery",
        status: "Pending",
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
        time: "11:00 AM",
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
        time: "1:15 PM",
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

// Application state
let currentUser = null;
let orders = [...mockOrders];
// Initialize to today's date
const today = new Date();
let currentDate = new Date(today.getFullYear(), today.getMonth(), 1); // Start of current month
let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Today's date
let orderToDelete = null;
let currentOrderItems = [];
let currentStatusFilter = 'all';

// DOM elements
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const orderDetailsScreen = document.getElementById('order-details-screen');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const errorMessage = document.getElementById('error-message');
const logoutBtn = document.getElementById('logout-btn');
const addOrderBtn = document.getElementById('add-order-btn');
const addOrderModal = document.getElementById('add-order-modal');
const closeModal = document.getElementById('close-modal');
const calendar = document.getElementById('calendar');
const ordersList = document.getElementById('orders-list');
const upcomingOrdersList = document.getElementById('upcoming-orders-list');
const orderDetailsContent = document.getElementById('order-details-content');
const currentMonthDisplay = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const weekDates = document.getElementById('week-dates');
const prevWeekBtn = document.getElementById('prev-week-btn');
const nextWeekBtn = document.getElementById('next-week-btn');
const confirmDeleteModal = document.getElementById('confirm-delete-modal');
const closeDeleteModal = document.getElementById('close-delete-modal');
const cancelDelete = document.getElementById('cancel-delete');
const confirmDelete = document.getElementById('confirm-delete');

// Form elements
const customerNameInput = document.getElementById('customer-name');
const contactInput = document.getElementById('contact');
const orderDateInput = document.getElementById('order-date');
const orderTimeInput = document.getElementById('order-time');
const storeSelect = document.getElementById('store');
const deliveryModeSelect = document.getElementById('delivery-mode');
const deliveryAddressInput = document.getElementById('delivery-address');
const paymentStatusSelect = document.getElementById('payment-status');
const notesInput = document.getElementById('notes');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const addItemBtn = document.getElementById('add-item-btn');
const orderItemsList = document.getElementById('order-items-list');
const saveOrderBtn = document.getElementById('save-order-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    } else {
        showLogin();
    }
    
    setupEventListeners();
    setDefaultDate();
}

function setupEventListeners() {
    // Login button
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn && !loginBtn.hasAttribute('data-listener-added')) {
        loginBtn.addEventListener('click', handleLogin);
        loginBtn.setAttribute('data-listener-added', 'true');
    }
    
    // Clear error on input change
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (usernameInput && !usernameInput.hasAttribute('data-listener-added')) {
        usernameInput.addEventListener('input', clearLoginError);
        usernameInput.setAttribute('data-listener-added', 'true');
    }
    if (passwordInput && !passwordInput.hasAttribute('data-listener-added')) {
        passwordInput.addEventListener('input', clearLoginError);
        passwordInput.setAttribute('data-listener-added', 'true');
    }
    
    // Logout
    if (logoutBtn && !logoutBtn.hasAttribute('data-listener-added')) {
        logoutBtn.addEventListener('click', handleLogout);
        logoutBtn.setAttribute('data-listener-added', 'true');
    }
    
    // Add order button
    if (addOrderBtn && !addOrderBtn.hasAttribute('data-listener-added')) {
        addOrderBtn.addEventListener('click', showAddOrderModal);
        addOrderBtn.setAttribute('data-listener-added', 'true');
    }
    
    // Form is now simple single-step
    
    // Modal controls
    if (closeModal && !closeModal.hasAttribute('data-listener-added')) {
        closeModal.addEventListener('click', hideAddOrderModal);
        closeModal.setAttribute('data-listener-added', 'true');
    }
    
    // Order form
    if (saveOrderBtn && !saveOrderBtn.hasAttribute('data-listener-added')) {
        saveOrderBtn.addEventListener('click', handleAddOrder);
        saveOrderBtn.setAttribute('data-listener-added', 'true');
    }
    // addItemBtn event listener removed - using HTML onclick instead
    
    // Calendar navigation
    if (prevMonthBtn && !prevMonthBtn.hasAttribute('data-listener-added')) {
        prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
        prevMonthBtn.setAttribute('data-listener-added', 'true');
    }
    if (nextMonthBtn && !nextMonthBtn.hasAttribute('data-listener-added')) {
        nextMonthBtn.addEventListener('click', () => navigateMonth(1));
        nextMonthBtn.setAttribute('data-listener-added', 'true');
    }
    if (currentMonthDisplay && !currentMonthDisplay.hasAttribute('data-listener-added')) {
        currentMonthDisplay.addEventListener('click', goToToday);
        currentMonthDisplay.setAttribute('data-listener-added', 'true');
    }
    
    // Week view navigation
    if (prevWeekBtn && !prevWeekBtn.hasAttribute('data-listener-added')) {
        prevWeekBtn.addEventListener('click', () => navigateWeek(-1));
        prevWeekBtn.setAttribute('data-listener-added', 'true');
    }
    if (nextWeekBtn && !nextWeekBtn.hasAttribute('data-listener-added')) {
        nextWeekBtn.addEventListener('click', () => navigateWeek(1));
        nextWeekBtn.setAttribute('data-listener-added', 'true');
    }
    
    // Delete confirmation
    if (closeDeleteModal) closeDeleteModal.addEventListener('click', hideDeleteModal);
    if (cancelDelete) cancelDelete.addEventListener('click', hideDeleteModal);
    if (confirmDelete) confirmDelete.addEventListener('click', confirmDeleteOrder);
    
    // Menu toggle functionality
    // Menu toggle with JavaScript state management
    const menuToggle = document.getElementById('menu__toggle');
    const menuOverlay = document.getElementById('menu__overlay');
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Menu opened
            menuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            // Menu closed
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    }
    
    function closeMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    }
    
        // Toggle menu when button is clicked
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }
        
        // Close menu when clicking menu items (except logout)
        const menuItems = document.querySelectorAll('.menu__button:not(#logout-btn)');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    if (isMenuOpen) {
                        closeMenu();
                    }
                }, 100); // Small delay to allow the action to complete
            });
        });
    
    // Close menu when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    // Close modals when clicking outside
    if (addOrderModal) {
        addOrderModal.addEventListener('click', function(e) {
            if (e.target === addOrderModal) {
                hideAddOrderModal();
            }
        });
    }
    
    if (confirmDeleteModal) {
        confirmDeleteModal.addEventListener('click', function(e) {
            if (e.target === confirmDeleteModal) {
                hideDeleteModal();
            }
        });
    }
}

function setDefaultDate() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    if (orderDateInput) orderDateInput.value = dateString;
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Accept any input for demo purposes
    if (username && password) {
        currentUser = {
            username: username,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Clear form after successful login (matching original behavior)
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        showDashboard();
    } else {
        showLoginError("Please enter both username and password");
    }
}

function showLoginError(message) {
    if (errorMessage) errorMessage.textContent = message;
    if (loginError) loginError.classList.remove('hidden');
}

function clearLoginError() {
    if (loginError) loginError.classList.add('hidden');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
}

function showLogin() {
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (dashboardScreen) dashboardScreen.classList.add('hidden');
    if (loginError) loginError.classList.add('hidden');
}

function showDashboard() {
    if (loginScreen) loginScreen.classList.add('hidden');
    if (orderDetailsScreen) orderDetailsScreen.classList.add('hidden');
    if (dashboardScreen) dashboardScreen.classList.remove('hidden');
    
    // Set user greeting
    const userGreeting = document.getElementById('user-greeting');
    if (currentUser && currentUser.username && userGreeting) {
        userGreeting.textContent = `Hello, ${currentUser.username}`;
    }
    
    renderCalendar();
    renderOrders();
    renderUpcomingOrders();
}

function showAddOrderModal() {
    if (addOrderModal) {
        addOrderModal.classList.remove('hidden');
        
        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        // Only reset form if we're not editing an existing order
        if (!window.editingOrder) {
            resetForm();
            currentOrderItems = [];
            renderOrderItems();
            setDefaultDate();
        }
        
        // Setup real-time validation
        setupRealTimeValidation();
    }
}

function hideAddOrderModal() {
    if (addOrderModal) addOrderModal.classList.add('hidden');
    
    // Restore body scroll when modal is closed
    document.body.style.overflow = '';
    
    // Clear all validation states
    clearValidationStates();
    
    window.editingOrder = null; // Clear editing state
    resetOrderForm();
    resetForm(); // Reset multi-step form
}

function resetOrderForm() {
    if (customerNameInput) customerNameInput.value = '';
    if (contactInput) contactInput.value = '';
    if (orderDateInput) orderDateInput.value = '';
    if (orderTimeInput) orderTimeInput.value = '';
    if (storeSelect) storeSelect.value = 'suyacitycatering';
    if (deliveryModeSelect) deliveryModeSelect.value = 'Pickup';
    if (deliveryAddressInput) deliveryAddressInput.value = '';
    if (paymentStatusSelect) paymentStatusSelect.value = 'Not Paid';
    if (notesInput) notesInput.value = '';
    if (itemNameInput) itemNameInput.value = '';
    if (itemQuantityInput) itemQuantityInput.value = '';
    currentOrderItems = [];
    renderOrderItems();
}

function addOrderItem() {
    const name = itemNameInput ? itemNameInput.value.trim() : '';
    const quantity = itemQuantityInput ? itemQuantityInput.value.trim() : '';
    
    if (name && quantity && parseInt(quantity) > 0 && parseInt(quantity) <= 500) {
        currentOrderItems.push({ name, quantity });
        if (itemNameInput) itemNameInput.value = '';
        if (itemQuantityInput) itemQuantityInput.value = '';
        renderOrderItems();
    }
}

function renderOrderItems() {
    if (!orderItemsList) return;
    
    orderItemsList.innerHTML = '';
    
    currentOrderItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-form-order-list';
        itemElement.innerHTML = `
            <div>${item.name}</div>
            <div>${item.quantity}</div>
            <button class="order-form-order-list-delete-item-button" onclick="removeOrderItem(${index})">Delete</button>
        `;
        orderItemsList.appendChild(itemElement);
    });
}

function removeOrderItem(index) {
    currentOrderItems.splice(index, 1);
    renderOrderItems();
}

function handleAddOrder() {
    // Get form values
    const customerName = document.getElementById('customer-name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const orderDate = document.getElementById('order-date').value;
    const orderTime = document.getElementById('order-time').value;
    const deliveryMode = document.getElementById('delivery-mode').value;
    const deliveryAddress = document.getElementById('delivery-address').value.trim();
    const notes = document.getElementById('notes').value.trim();
    
    // Clear previous validation states
    clearValidationStates();
    
    // Validate required fields with better feedback
    let hasErrors = false;
    
    if (!customerName) {
        showFieldError('customer-name', 'Customer name is required');
        hasErrors = true;
    }
    
    if (!contact) {
        showFieldError('contact', 'Phone number is required');
        hasErrors = true;
    }
    
    if (!orderDate) {
        showFieldError('order-date', 'Date is required');
        hasErrors = true;
    }
    
    if (!orderTime) {
        showFieldError('order-time', 'Time is required');
        hasErrors = true;
    }
    
    if (!deliveryMode) {
        showFieldError('delivery-mode', 'Delivery mode is required');
        hasErrors = true;
    }
    
    if (hasErrors) {
        return;
    }
    
    // Validate delivery address if delivery mode is selected
    if (deliveryMode === 'Delivery' && !deliveryAddress) {
        alert('Please enter delivery address');
        return;
    }
    
    // Get order items
    const orderItems = [];
    const itemRows = document.querySelectorAll('.item-row');
    itemRows.forEach(row => {
        const name = row.querySelector('.item-name').textContent;
        const quantity = row.querySelector('.item-quantity').textContent.replace('Qty: ', '');
        orderItems.push({ name, quantity });
    });
    
    if (orderItems.length === 0) {
        alert('Please add at least one item to the order');
        return;
    }
    
    const orderData = {
        customerName: customerName,
        contact: contact,
        date: new Date(orderDate + 'T' + orderTime),
        deliveryMode: deliveryMode,
        items: orderItems,
        notes: notes,
        deliveryAddress: deliveryMode === 'Delivery' ? deliveryAddress : ''
    };
    
    if (window.editingOrder) {
        // Update existing order
        const orderIndex = orders.findIndex(o => o._id === window.editingOrder._id);
        if (orderIndex !== -1) {
            orders[orderIndex] = {
                ...orders[orderIndex],
                ...orderData
            };
        }
        window.editingOrder = null;
    } else {
        // Create new order
        const newOrder = {
            _id: Date.now(),
            status: 'Pending',
            ...orderData
        };
        orders.push(newOrder);
    }
    
    hideAddOrderModal();
    renderCalendar();
    renderOrders();
    renderUpcomingOrders();
    // Refresh order details if on that screen
    if (orderDetailsScreen && !orderDetailsScreen.classList.contains('hidden')) {
        renderWeekView();
        updateStatusCounts();
        renderFilteredOrders();
    }
    alert('Order saved successfully!');
}

function navigateMonth(direction) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Calculate new month and year
    let newMonth = month + direction;
    let newYear = year;
    
    if (newMonth < 0) {
        newMonth = 11;
        newYear--;
    } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
    }
    
    currentDate = new Date(newYear, newMonth, 1);
    selectedDate = new Date(newYear, newMonth, 1);
    
    renderCalendar();
    renderOrders();
    renderUpcomingOrders();
}

function goToToday() {
    const today = new Date();
    currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
    selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    renderCalendar();
    renderUpcomingOrders();
    showOrderDetails();
}

function renderUpcomingOrders() {
    if (!upcomingOrdersList) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Filter orders for today or after, sort by date, and limit to 5
    const upcomingOrders = orders
        .filter(order => {
            const orderDate = new Date(order.date);
            orderDate.setHours(0, 0, 0, 0);
            return orderDate >= today;
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
    
    upcomingOrdersList.innerHTML = '';
    
    if (upcomingOrders.length === 0) {
        const noOrders = document.createElement('div');
        noOrders.className = 'past-orders-list-no-orders';
        noOrders.textContent = 'No upcoming orders';
        upcomingOrdersList.appendChild(noOrders);
        return;
    }
    
    upcomingOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-list-item';
        orderElement.style.cursor = 'pointer';
        
        const timeString = order.date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }).toUpperCase();
        
        const dateString = order.date.toLocaleDateString([], {
            month: 'short',
            day: 'numeric'
        });
        
        const orderItems = order.items || order.orderList || [];
        const totalItems = orderItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        // Get the date from the order (without time component for date selection)
        const orderDate = new Date(order.date);
        orderDate.setHours(0, 0, 0, 0);
        
        orderElement.innerHTML = `
            <div>
                <div class="order-customer-name">${order.name || order.customerName}</div>
                <div class="order-details">
                    <span class="order-contact">${totalItems} item${totalItems !== 1 ? 's' : ''}</span>
                </div>
            </div>
            <div>
                <div class="order-time">${timeString}</div>
                <div class="order-time" style="font-size: 11px; margin-top: 2px;">${dateString}</div>
            </div>
        `;
        
        // Add click event to open order details for this date
        orderElement.addEventListener('click', () => {
            selectDate(orderDate);
        });
        
        upcomingOrdersList.appendChild(orderElement);
    });
}

function renderCalendar() {
    if (!calendar) return;
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update month display
    if (currentMonthDisplay) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        currentMonthDisplay.textContent = monthNames[month];
    }
    
    // Get first day of month and calculate starting date for calendar
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    // Clear calendar
    calendar.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    dayHeaders.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day-name';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });
    
    // Generate calendar days (6 weeks * 7 days = 42 days)
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        // Create container div
        const containerElement = document.createElement('div');
        containerElement.className = 'calendar-num-container';
        
        const dayElement = document.createElement('button');
        dayElement.textContent = date.getDate();
        dayElement.dataset.date = date.toISOString().split('T')[0];
        
        // Add classes based on date state (matching demo logic exactly)
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        const isCurrentMonth = date.getMonth() === month;
        const isPast = date < today && !isToday;
        const hasOrders = orders.some(order => 
            order.date.toDateString() === date.toDateString()
        );
        const isSelected = date.toDateString() === selectedDate.toDateString();
        
        let className = 'day-num';
        
        if (hasOrders) {
            className = 'day-num-order-true';
            if (isToday) {
                className = 'day-num-today-order-true day-selected';
            } else if (isPast) {
                className = 'day-num-past-order-true';
                if (!isCurrentMonth) {
                    className = 'day-num-past-order-true day-num-grey-order-true';
                }
            }
        } else if (isToday) {
            className = 'day-num-today';
        } else if (isPast) {
            className = 'day-num-past';
        }
        
        if (!isCurrentMonth) {
            className += ' day-num-grey';
        }
        
        if (isSelected) {
            className += ' day-num-selected';
        }
        
        dayElement.className = className;
        dayElement.addEventListener('click', () => selectDate(date));
        
        containerElement.appendChild(dayElement);
        calendar.appendChild(containerElement);
    }
}

function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    renderUpcomingOrders();
    showOrderDetails();
}

function renderOrders() {
    if (!ordersList) return; // Orders list section removed from kitchen.html
    
    const selectedDateString = selectedDate.toDateString();
    const dayOrders = orders.filter(order => 
        order.date.toDateString() === selectedDateString
    );
    
    ordersList.innerHTML = '';
    
    if (dayOrders.length === 0) {
        const noOrders = document.createElement('div');
        noOrders.className = 'past-orders-list-no-orders';
        noOrders.textContent = 'No Orders Yet';
        ordersList.appendChild(noOrders);
        return;
    }
    
    dayOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-receipt-item';
        
        const timeString = order.date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }).toUpperCase();
        
        const orderItems = order.items || order.orderList || [];
        const totalItems = orderItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        // Build items list HTML
        let itemsHTML = '';
        if (orderItems.length > 0) {
            itemsHTML = orderItems.map(item => `
                <div class="receipt-item-row">
                    <span class="receipt-item-name">${item.name}</span>
                    <span class="receipt-item-qty">${item.quantity}</span>
                </div>
            `).join('');
        } else {
            itemsHTML = '<div class="receipt-item-row"><span class="receipt-item-name">No items</span></div>';
        }
        
        orderElement.innerHTML = `
            <div class="receipt-header">
                <div class="receipt-customer-info">
                    <div class="receipt-customer-name">${order.name || order.customerName}</div>
                    <div class="receipt-contact">${order.contact}</div>
                </div>
                <div class="receipt-status-section">
                    <div class="receipt-time">${timeString}</div>
                    <div class="receipt-delivery-mode-header">${order.deliveryMode || 'N/A'}</div>
                </div>
            </div>
            
            <div class="receipt-items-section ${!order.notes ? 'no-border-bottom' : ''}">
                <div class="receipt-items-header">
                    <span>Items (${totalItems} total)</span>
                </div>
                <div class="receipt-items-list">
                    ${itemsHTML}
                </div>
            </div>
            
            ${order.notes ? `
            <div class="receipt-notes">
                <div class="receipt-notes-label">Notes:</div>
                <div class="receipt-notes-content">${order.notes}</div>
            </div>
            ` : ''}
            
            <div class="receipt-status-change-section">
                <button class="receipt-status-change-button receipt-status-${order.status.toLowerCase().replace(' ', '-')}" ${order.status === 'Completed' ? 'disabled' : `onclick="changeOrderStatus('${order._id}')"`} title="${order.status === 'Completed' ? 'Order is complete' : 'Click to change status'}">
                    ${getStatusButtonText(order.status)}
                </button>
            </div>
        `;
        
        ordersList.appendChild(orderElement);
    });
}

function showOrderDetails() {
    if (dashboardScreen) dashboardScreen.classList.add('hidden');
    if (orderDetailsScreen) orderDetailsScreen.classList.remove('hidden');
    
    // Reset filter to 'all' when opening order details
    currentStatusFilter = 'all';
    updateFilterButtons();
    updateStatusCounts();
    renderWeekView();
    renderFilteredOrders();
}

function renderWeekView() {
    if (!weekDates) return;
    
    // Get start of week (Sunday) for the selected date
    const selected = new Date(selectedDate);
    const day = selected.getDay();
    const startOfWeek = new Date(selected);
    startOfWeek.setDate(selected.getDate() - day);
    startOfWeek.setHours(0, 0, 0, 0);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    weekDates.innerHTML = '';
    
    // Generate 7 days of the week
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        
        const dateNum = date.getDate();
        const dateString = date.toDateString();
        const isSelected = dateString === selectedDate.toDateString();
        const isToday = dateString === today.toDateString();
        const isPast = date < today;
        
        // Check if this date has orders
        const hasOrders = orders.some(order => {
            const orderDate = new Date(order.date);
            orderDate.setHours(0, 0, 0, 0);
            return orderDate.toDateString() === dateString;
        });
        
        let className = 'week-dates-num';
        
        if (hasOrders) {
            if (isToday) {
                className = 'week-dates-num-today-order-true';
            } else if (isPast) {
                className = 'week-dates-num-past-order-true';
            } else {
                className = 'week-dates-num-order-true';
            }
        } else if (isToday) {
            className = 'week-dates-num-today';
        } else if (isPast) {
            className = 'week-dates-num-past';
        }
        
        if (isSelected) {
            className += ' week-dates-num-selected';
        }
        
        const button = document.createElement('button');
        button.className = className;
        button.textContent = dateNum;
        button.onclick = () => {
            selectedDate = new Date(date);
            renderWeekView();
            updateStatusCounts();
            renderFilteredOrders();
        };
        
        weekDates.appendChild(button);
    }
}

function navigateWeek(direction) {
    const selected = new Date(selectedDate);
    selected.setDate(selected.getDate() + (direction * 7));
    selectedDate = selected;
    
    renderWeekView();
    updateStatusCounts();
    renderFilteredOrders();
}

function filterOrdersByStatus(status) {
    currentStatusFilter = status;
    updateFilterButtons();
    renderWeekView();
    renderFilteredOrders();
}

function updateStatusCounts() {
    const selectedDateString = selectedDate.toDateString();
    const dayOrders = orders.filter(order => 
        order.date.toDateString() === selectedDateString
    );
    
    // Calculate counts for each status
    const counts = {
        'all': dayOrders.length,
        'Pending': dayOrders.filter(o => o.status === 'Pending').length,
        'Received': dayOrders.filter(o => o.status === 'Received').length,
        'In Progress': dayOrders.filter(o => o.status === 'In Progress').length,
        'Completed': dayOrders.filter(o => o.status === 'Completed').length
    };
    
    // Update count displays
    const statuses = ['all', 'Pending', 'Received', 'In Progress', 'Completed'];
    statuses.forEach(status => {
        // Handle spaces in status names by using the exact ID format from HTML
        const statusId = status === 'In Progress' ? 'count-In Progress' : `count-${status}`;
        const countElement = document.getElementById(statusId);
        if (countElement) {
            countElement.textContent = counts[status];
        }
    });
    
    // Update bell icon color based on pending count
    const pendingBellIcon = document.getElementById('pending-bell-icon');
    if (pendingBellIcon) {
        if (counts['Pending'] > 0) {
            pendingBellIcon.style.color = '#dc2626'; // Red color
        } else {
            pendingBellIcon.style.color = ''; // Reset to default
        }
    }
}

function updateFilterButtons() {
    const filterButtons = document.querySelectorAll('.status-filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-status') === currentStatusFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderFilteredOrders() {
    updateStatusCounts(); // Update counts before rendering
    const selectedDateString = selectedDate.toDateString();
    let dayOrders = orders.filter(order => 
        order.date.toDateString() === selectedDateString
    );
    
    // Apply status filter
    if (currentStatusFilter !== 'all') {
        if (currentStatusFilter === 'Pending') {
            dayOrders = dayOrders.filter(order => order.status === 'Pending');
        } else {
            dayOrders = dayOrders.filter(order => order.status === currentStatusFilter);
        }
    }
    
    if (!orderDetailsContent) return;
    orderDetailsContent.innerHTML = '';
    
    if (dayOrders.length === 0) {
        const noOrders = document.createElement('div');
        noOrders.className = 'past-orders-list-no-orders';
        noOrders.textContent = 'No Orders Yet';
        orderDetailsContent.appendChild(noOrders);
        return;
    }
    
    dayOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-receipt-item';
        
        const timeString = order.date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }).toUpperCase();
        
        const orderItems = order.items || order.orderList || [];
        const totalItems = orderItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        // Build items list HTML
        let itemsHTML = '';
        if (orderItems.length > 0) {
            itemsHTML = orderItems.map(item => `
                <div class="receipt-item-row">
                    <span class="receipt-item-name">${item.name}</span>
                    <span class="receipt-item-qty">${item.quantity}</span>
                </div>
            `).join('');
        } else {
            itemsHTML = '<div class="receipt-item-row"><span class="receipt-item-name">No items</span></div>';
        }
        
        orderElement.innerHTML = `
            <div class="receipt-header">
                <div class="receipt-customer-info">
                    <div class="receipt-customer-name">${order.name || order.customerName}</div>
                    <div class="receipt-contact">${order.contact}</div>
                </div>
                <div class="receipt-status-section">
                    <div class="receipt-time">${timeString}</div>
                    <div class="receipt-delivery-mode-header">${order.deliveryMode || 'N/A'}</div>
                </div>
            </div>
            
            <div class="receipt-items-section ${!order.notes ? 'no-border-bottom' : ''}">
                <div class="receipt-items-header">
                    <span>Items (${totalItems} total)</span>
                </div>
                <div class="receipt-items-list">
                    ${itemsHTML}
                </div>
            </div>
            
            ${order.notes ? `
            <div class="receipt-notes">
                <div class="receipt-notes-label">Notes:</div>
                <div class="receipt-notes-content">${order.notes}</div>
            </div>
            ` : ''}
            
            <div class="receipt-status-change-section">
                <button class="receipt-status-change-button receipt-status-${order.status.toLowerCase().replace(' ', '-')}" ${order.status === 'Completed' ? 'disabled' : `onclick="changeOrderStatus('${order._id}')"`} title="${order.status === 'Completed' ? 'Order is complete' : 'Click to change status'}">
                    ${getStatusButtonText(order.status)}
                </button>
            </div>
        `;
        
        orderDetailsContent.appendChild(orderElement);
    });
}

function goBackToCalendar() {
    if (orderDetailsScreen) orderDetailsScreen.classList.add('hidden');
    if (dashboardScreen) dashboardScreen.classList.remove('hidden');
}

function getStatusButtonText(status) {
    const statusTexts = {
        'Pending': 'Accept Order',
        'Received': 'Start Prep',
        'In Progress': 'Complete Order',
        'Completed': 'Order Complete'
    };
    return statusTexts[status] || 'Change Status';
}

function changeOrderStatus(orderId) {
    const order = orders.find(o => o._id == orderId);
    if (!order) return;
    
    // Define status progression
    const statusFlow = {
        'Pending': 'Received',
        'Received': 'In Progress',
        'In Progress': 'Completed',
        'Completed': 'Completed' // Completed stays completed
    };
    
    const currentStatus = order.status;
    const nextStatus = statusFlow[currentStatus] || 'Received';
    
    // Update the order status
    orders = orders.map(o => {
        if (o._id == orderId) {
            return { ...o, status: nextStatus };
        }
        return o;
    });
    
    // Show toast notification based on new status
    const toastMessages = {
        'Received': 'Order received',
        'In Progress': 'Order in progress',
        'Completed': 'Order completed'
    };
    
    if (toastMessages[nextStatus]) {
        showToast(toastMessages[nextStatus]);
    }
    
    // Update status filter to match the new status
    if (orderDetailsScreen && !orderDetailsScreen.classList.contains('hidden')) {
        currentStatusFilter = nextStatus;
        updateFilterButtons();
    }
    
    // Refresh displays
    renderCalendar();
    renderOrders();
    renderUpcomingOrders();
    
    // Refresh order details if on that screen
    if (orderDetailsScreen && !orderDetailsScreen.classList.contains('hidden')) {
        renderWeekView();
        updateStatusCounts();
        renderFilteredOrders();
    }
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function editOrder(orderId) {
    const order = orders.find(o => o._id == orderId);
    if (!order) return;
    
    // Populate form with order data
    const customerNameInput = document.getElementById('customer-name');
    const contactInput = document.getElementById('contact');
    const orderDateInput = document.getElementById('order-date');
    const orderTimeInput = document.getElementById('order-time');
    const deliveryModeSelect = document.getElementById('delivery-mode');
    const deliveryAddressInput = document.getElementById('delivery-address');
    const notesInput = document.getElementById('notes');
    
    if (customerNameInput) customerNameInput.value = order.name || order.customerName;
    if (contactInput) contactInput.value = order.contact;
    if (orderDateInput) orderDateInput.value = order.date.toISOString().split('T')[0];
    if (orderTimeInput) orderTimeInput.value = order.date.toTimeString().slice(0, 5);
    if (deliveryModeSelect) deliveryModeSelect.value = order.deliveryMode;
    if (deliveryAddressInput) deliveryAddressInput.value = order.deliveryAddress || '';
    if (notesInput) notesInput.value = order.notes || '';
    
    // Show/hide delivery address based on delivery mode
    if (order.deliveryMode === 'Delivery') {
        document.getElementById('address-group').style.display = 'block';
    } else {
        document.getElementById('address-group').style.display = 'none';
    }
    
    // Clear existing items and populate with order items
    const itemsList = document.getElementById('order-items-list');
    if (itemsList) {
        itemsList.innerHTML = '';
        
        const orderItems = order.items || order.orderList || [];
        orderItems.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = 'item-row';
            const itemId = Date.now() + Math.random(); // Simple ID generation
            itemRow.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div class="item-quantity">${item.quantity}</div>
                <button type="button" class="remove-item-btn" onclick="removeItem(${itemId})">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            `;
            itemRow.dataset.itemId = itemId;
            itemsList.appendChild(itemRow);
        });
    }
    
    // Set editing state
    window.editingOrder = order;
    
    // Show modal
    showAddOrderModal();
}

function deleteOrder(orderId) {
    orderToDelete = orderId;
    if (confirmDeleteModal) {
        confirmDeleteModal.classList.remove('hidden');
        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function hideDeleteModal() {
    if (confirmDeleteModal) confirmDeleteModal.classList.add('hidden');
    
    // Restore body scroll when modal is closed
    document.body.style.overflow = '';
    
    orderToDelete = null;
}

function confirmDeleteOrder() {
    if (orderToDelete) {
        orders = orders.filter(order => order._id != orderToDelete);
        renderCalendar();
        renderOrders();
        renderUpcomingOrders();
        // Refresh order details if on that screen
        if (orderDetailsScreen && !orderDetailsScreen.classList.contains('hidden')) {
            updateStatusCounts();
            renderFilteredOrders();
        }
        hideDeleteModal();
    }
}

// Simple form functionality
function resetForm() {
    // Clear all form fields
    document.getElementById('customer-name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('order-date').value = '';
    document.getElementById('order-time').value = '';
    document.getElementById('delivery-mode').value = '';
    document.getElementById('delivery-address').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
    
    // Clear items list
    const itemsList = document.getElementById('order-items-list');
    if (itemsList) {
        itemsList.innerHTML = '';
    }
    
    // Hide delivery address
    document.getElementById('address-group').style.display = 'none';
    
    // Clear all validation states and error messages
    clearValidationStates();
}

// Enhanced item management
function addItemToList() {
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    
    const itemName = itemNameInput ? itemNameInput.value.trim() : '';
    const itemQuantity = itemQuantityInput ? itemQuantityInput.value.trim() : '';

    if (!itemName || !itemQuantity) {
        alert('Please fill in both item name and quantity');
        return;
    }

    const quantity = parseInt(itemQuantity);
    if (isNaN(quantity) || quantity < 1 || quantity > 500) {
        alert('Quantity must be a number between 1 and 500');
        return;
    }

    const itemsList = document.getElementById('order-items-list');
    if (!itemsList) {
        alert('Items list not found');
        return;
    }

    const itemId = Date.now(); // Simple ID generation

    const itemRow = document.createElement('div');
    itemRow.className = 'item-row';
    itemRow.innerHTML = `
        <div class="item-name">${itemName}</div>
        <div class="item-quantity">${itemQuantity}</div>
        <button type="button" class="remove-item-btn" onclick="removeItem(${itemId})">
            <span class="material-symbols-outlined">delete</span>
        </button>
    `;
    itemRow.dataset.itemId = itemId;

    itemsList.appendChild(itemRow);

    // Clear input fields
    if (itemNameInput) itemNameInput.value = '';
    if (itemQuantityInput) itemQuantityInput.value = '';
}

function removeItem(itemId) {
    const itemRow = document.querySelector(`[data-item-id="${itemId}"]`);
    if (itemRow) {
        itemRow.remove();
    }
}

function toggleDeliveryAddress() {
    const deliveryMode = document.getElementById('delivery-mode');
    const addressGroup = document.getElementById('address-group');
    
    if (deliveryMode && addressGroup) {
        if (deliveryMode.value === 'Delivery') {
            addressGroup.style.display = 'block';
        } else {
            addressGroup.style.display = 'none';
        }
    }
}


// Validation helper functions
function clearValidationStates() {
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.classList.remove('error', 'success');
        // Remove error messages
        const errorMsg = input.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    });
}

function setupRealTimeValidation() {
    const formInputs = document.querySelectorAll('#add-order-form .form-input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear error state when user starts typing
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = this.parentNode.querySelector('.field-error');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
            
            // Add success state for valid fields
            if (this.value.trim() !== '') {
                this.classList.add('success');
            } else {
                this.classList.remove('success');
            }
        });
    });
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
        field.classList.remove('success');
        
        // Show error message
        let errorMsg = field.parentNode.querySelector('.field-error');
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'field-error';
            errorMsg.style.cssText = 'color: #dc2626; font-size: 12px; margin-top: 4px;';
            field.parentNode.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }
}

function showFieldSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('success');
        field.classList.remove('error');
        
        // Remove error message if exists
        const errorMsg = field.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
}

// Make functions globally available for onclick handlers
window.editOrder = editOrder;
window.addItemToList = addItemToList;
window.removeItem = removeItem;
window.deleteOrder = deleteOrder;
window.hideAddOrderModal = hideAddOrderModal;
window.toggleDeliveryAddress = toggleDeliveryAddress;
window.showAddOrderModal = showAddOrderModal;