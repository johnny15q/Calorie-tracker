// Import necessary icons as SVG strings for dynamic rendering
const icons = {
    User: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    Plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    Utensils: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><line x1="7" x2="7" y1="21" y2="12"/><path d="M16 17h2l1 1v2l-1 1h-3v-2l1-1z"/><line x1="15" x2="15" y1="21" y2="17"/><line x1="18" x2="18" y1="21" y2="17"/></svg>',
    TrendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucude-trending-up"><polyline points="22 7 13 16 9 12 2 19"/><polyline points="18 7 22 7 22 11"/></svg>',
    Settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 2h-.44a2 2 0 0 0-2-2V4a2 2 0 0 1 2-2zM20 7l-.83.83a4 4 0 0 0 0 5.66L20 15"/><path d="M22 17h-.44a2 2 0 0 1-2-2v-.44a2 2 0 0 0-2-2h-.44a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2z"/></svg>',
    LogOut: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
    ChevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>',
    Flame: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.24-.774-2.264-1.84-2.818a2 2 0 0 1-.418-2.671L10 2l-.42 2.671A2 2 0 0 1 11 8c1.24 0 2.264.774 2.818 1.84a2.5 2.5 0 0 0 2.67-4.13A5 5 0 0 0 12 2C7.3 6.7 8 13 8.5 14.5z"/></svg>',
    Scale: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale"><path d="m16 16 3-8 1.88 7.5-.13.5H16zm-7 0 3-8 1.88 7.5-.13.5H9zm-7 0 3-8 1.88 7.5-.13.5H2zm7-9 3-8 1.88 7.5-.13.5H9zM12 12v10m-3-3h6"/></svg>',
    Calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    Search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',
    Check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>',
    X: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    ShoppingBag: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    Trash2: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
    ChevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>',
    ChevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>',
};

// --- Mock Data & Initial State ---

const KJ_TO_CAL = 0.239006;

const MOCK_USER = {
    username: 'user',
    password: 'pass123',
    name: 'Alex Doe',
    height: 175, // cm
    currentWeight: 80, // kg
    goalWeight: 70, // kg
    dailyGoal: 2000, // calories
};

let INITIAL_FOOD_DATABASE = []; 
let INITIAL_LOGS = [];

let state = {
    isAuthenticated: false,
    user: MOCK_USER,
    view: 'dashboard',
    logs: INITIAL_LOGS,
    foodDb: INITIAL_FOOD_DATABASE, 
    // history expanded
    expandedHistory: {},
    // LogFood temporary state
    logFood: {
        selectedFood: null,
        portionMult: 1,
        searchTerm: '',
        mealBasket: [],
        isCreating: false,
        newFoodName: '',
        newFoodEnergy: '',
        energyUnit: 'cal',
        newFoodUnitType: '100g', // Default unit
        manualConsumedQty: '1',
        saveToLibrary: true,
    }
};

const appRoot = document.getElementById('app');

// --- Utility Functions ---

const getTodayDate = () => new Date().toISOString().split('T')[0];

const formatDate = (dateString) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const convertToCal = (val, unit) => {
    if (unit === 'cal') return Math.round(Number(val));
    return Math.round(Number(val) * KJ_TO_CAL);
};

// --- Persistence ---

const STORAGE_KEY = 'trackfit_data'; 
const AUTH_KEY = 'trackfit_auth';    

const loadState = () => {
    try {
        // 1. Load Data from LocalStorage
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState) {
            const loadedState = JSON.parse(serializedState);
            state.user = loadedState.user || MOCK_USER;
            state.foodDb = loadedState.foodDb || INITIAL_FOOD_DATABASE;
            state.logs = loadedState.logs || INITIAL_LOGS;
        }

        // 2. Load Auth from SessionStorage
        const authSession = sessionStorage.getItem(AUTH_KEY);
        if (authSession === 'true') {
            state.isAuthenticated = true;
            state.view = 'dashboard';
        } else {
            state.isAuthenticated = false;
            state.view = 'login';
        }

    } catch (err) {
        console.error("Could not load state:", err);
    }
};

const saveState = () => {
    try {
        // Only save DATA to localStorage
        const stateToSave = {
            user: state.user,
            foodDb: state.foodDb,
            logs: state.logs,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (err) {
        console.error("Could not save state to localStorage:", err);
    }
};

// --- State Updaters ---

const setView = (newView) => {
    state.view = newView;
    if (newView !== 'log') {
            state.logFood = {
            selectedFood: null, portionMult: 1, searchTerm: '', mealBasket: [], isCreating: false, 
            newFoodName: '', newFoodEnergy: '', energyUnit: 'cal', newFoodUnitType: '100g', 
            manualConsumedQty: '1', saveToLibrary: true,
        };
    }
    renderApp();
};

const setIsAuthenticated = (authStatus) => {
    state.isAuthenticated = authStatus;
    state.view = authStatus ? 'dashboard' : 'login';
    
    // Update SessionStorage based on status
    if (authStatus) {
        sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
        sessionStorage.removeItem(AUTH_KEY);
    }
    
    renderApp();
};

const updateLogFoodState = (updates) => {
    state.logFood = { ...state.logFood, ...updates };
    renderApp();
};

const updateFoodDb = (newDb) => {
    state.foodDb = newDb;
    saveState();
    renderApp();
};

const updateUser = (updatedUser) => {
    state.user = updatedUser;
    saveState();
    renderApp();
}

const handleDeleteLog = (logId) => {
    state.logs = state.logs.filter(l => l.id !== logId);
    saveState();
    renderApp();
};

const toggleHistoryExpansion = (date) => {
    // Toggle the boolean value for the specific date
    state.expandedHistory[date] = !state.expandedHistory[date];
    renderApp();
};

// --- Core Application Logic ---

const handleAddLog = (logData) => {
    const newLog = {
        id: Date.now().toString(),
        date: getTodayDate(),
        ...logData
    };
    state.logs = [newLog, ...state.logs];
    saveState();
};

const handleAddFoodToDb = (newFood) => {
    const foodWithId = {
        id: Date.now(),
        ...newFood
    };
    state.foodDb.push(foodWithId);
    updateFoodDb(state.foodDb);
};

const handleDeleteFoodFromDb = (id) => {
    state.foodDb = state.foodDb.filter(item => item.id !== id);
    updateFoodDb(state.foodDb);
};

// --- View Rendering Functions ---

function renderLoginScreen() {
    appRoot.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div class="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <div class="flex justify-center mb-6">
                    <div class="bg-blue-600 p-3 rounded-full">
                        <div class="w-8 h-8 text-white">${icons.Scale}</div>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-center text-white mb-2">TrackFit</h2>
                <p class="text-center text-gray-400 mb-6">Login to manage your health</p>
                
                <form id="loginForm" class="space-y-4" autocomplete="off">
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1" for="username">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            class="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="user" 
                            autocomplete="off"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1" for="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            class="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="pass123"
                            autocomplete="new-password"
                        />
                    </div>
                    
                    <p id="loginError" class="text-red-400 text-sm text-center hidden"></p>
                    
                    <button 
                        type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorElement = document.getElementById('loginError');

        if (username === state.user.username && password === state.user.password) {
            setIsAuthenticated(true);
        } else {
            errorElement.textContent = 'Invalid credentials';
            errorElement.classList.remove('hidden');
        }
    });
}

function renderDashboard() {
    const todayDate = getTodayDate();
    const todaysLogs = state.logs.filter(l => l.date === todayDate);
    const totalCalories = todaysLogs.reduce((acc, curr) => acc + curr.calories, 0);
    const progress = Math.min((totalCalories / state.user.dailyGoal) * 100, 100);
    const remaining = state.user.dailyGoal - totalCalories;

    return `
        <div class="space-y-6 pb-20">
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h2 class="text-lg font-medium opacity-90">Daily Summary</h2>
                        <p class="text-sm opacity-75">${formatDate(todayDate)}</p>
                    </div>
                    <div class="bg-white/20 p-2 rounded-lg">
                        <div class="w-5 h-5">${icons.Flame}</div>
                    </div>
                </div>

                <div class="flex items-end space-x-2 mb-2">
                    <span class="text-4xl font-bold">${totalCalories}</span>
                    <span class="text-lg opacity-80 mb-1">/ ${state.user.dailyGoal} kcal</span>
                </div>

                <div class="w-full bg-black/20 rounded-full h-3 mb-2">
                    <div 
                        class="h-3 rounded-full transition-all duration-500 ${remaining < 0 ? 'bg-red-400' : 'bg-green-400'}" 
                        style="width: ${progress}%"
                    ></div>
                </div>
                
                <p class="text-sm font-medium">
                    ${remaining >= 0 
                        ? `${remaining} calories remaining` 
                        : `${Math.abs(remaining)} calories over limit`}
                </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <p class="text-gray-400 text-xs uppercase font-bold tracking-wider">Current</p>
                    <p class="text-2xl font-bold text-white mt-1">${state.user.currentWeight} <span class="text-sm text-gray-500">kg</span></p>
                </div>
                <div class="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <p class="text-gray-400 text-xs uppercase font-bold tracking-wider">Goal</p>
                    <p class="text-2xl font-bold text-white mt-1">${state.user.goalWeight} <span class="text-sm text-gray-500">kg</span></p>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-white mb-3">Today's Meals</h3>
                ${todaysLogs.length === 0 ? `
                    <div class="text-center py-8 bg-gray-800/50 rounded-xl border border-gray-700 border-dashed">
                        <div class="w-8 h-8 text-gray-500 mx-auto mb-2">${icons.Utensils}</div>
                        <p class="text-gray-400">No meals logged yet today.</p>
                    </div>
                ` : `
                    <div class="space-y-3">
                        ${todaysLogs.map((log) => `
                            <div class="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center">
                                <div>
                                    <p class="font-medium text-white">${log.foodName}</p>
                                    <p class="text-sm text-gray-400">${log.portion}</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-blue-400">${log.calories} kcal</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

function renderLogFood() {
    const { 
        selectedFood, portionMult, searchTerm, mealBasket, isCreating, 
        newFoodName, newFoodEnergy, energyUnit, newFoodUnitType, 
        manualConsumedQty, saveToLibrary 
    } = state.logFood;
    
    const filteredFoods = state.foodDb.filter(f => 
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // --- Sub-View: Manual Entry / New Item ---
    if (isCreating) {
        const availableUnits = ["1 serving"];
        return `
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold text-white">Manual / Quick Entry</h2>
                    <button id="btnBackToLog">${icons.X}</button>
                </div>
                
                <div class="space-y-4" id="manualEntryForm">
                    <div>
                        <label class="text-sm text-gray-400">Food Name</label>
                        <input 
                            id="newFoodName"
                            class="w-full bg-gray-700 text-white rounded-lg p-3 mt-1"
                            placeholder="e.g. Grandma's Pie"
                            value="${newFoodName}"
                        />
                    </div>

                    <div class="bg-gray-700/50 p-3 rounded-lg border border-gray-700 space-y-3">
                        <p class="text-xs text-blue-300 font-semibold uppercase">Nutrition Info</p>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm text-gray-400">Energy Amount</label>
                                <input 
                                    type="number"
                                    id="newFoodEnergy"
                                    class="w-full bg-gray-700 text-white rounded-lg p-3 mt-1"
                                    placeholder="0"
                                    value="${newFoodEnergy}"
                                />
                            </div>
                            <div>
                                <label class="text-sm text-gray-400">Unit Type</label>
                                <div class="flex mt-1 bg-gray-700 rounded-lg p-1">
                                    <button data-unit="cal" class="flex-1 py-2 rounded-md text-xs font-bold ${energyUnit === 'cal' ? 'bg-blue-600 text-white' : 'text-gray-400'}">Cal</button>
                                    <button data-unit="kj" class="flex-1 py-2 rounded-md text-xs font-bold ${energyUnit === 'kj' ? 'bg-blue-600 text-white' : 'text-gray-400'}">kJ</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="text-sm text-gray-400">Per Serving Size Name</label>
                            <select 
                                id="newFoodUnitType"
                                class="w-full bg-gray-700 text-white rounded-lg p-3 mt-1"
                            >
                                ${availableUnits.map(unit => `
                                    <option value="${unit}" ${newFoodUnitType === unit ? 'selected' : ''}>${unit}</option>
                                `).join('')}
                            </select>
                            <p class="text-xs text-gray-500 mt-1">Select the unit that matches the energy above.</p>
                        </div>
                    </div>

                    <div class="bg-gray-700/50 p-3 rounded-lg border border-gray-700 space-y-3">
                        <p class="text-xs text-green-300 font-semibold uppercase">How much did you eat?</p>
                        <div>
                            <label class="text-sm text-gray-400">Number of Servings Consumed</label>
                            <div class="flex items-center gap-3 mt-1">
                                <input 
                                    type="number"
                                    id="manualConsumedQty"
                                    class="w-full bg-gray-700 text-white rounded-lg p-3"
                                    value="${manualConsumedQty}"
                                />
                                <span class="text-gray-400 whitespace-nowrap">x (${newFoodUnitType})</span>
                            </div>
                        </div>
                    </div>
                    
                    <button id="btnToggleSave" class="flex items-center gap-2 py-2">
                        <div class="w-5 h-5 rounded border flex items-center justify-center ${saveToLibrary ? 'bg-blue-600 border-blue-600' : 'border-gray-500'}">
                            ${saveToLibrary ? icons.Check.replace('w-24 h-24', 'w-4 h-4') : ''}
                        </div>
                        <span class="text-sm text-gray-300">Save this food to my library for later</span>
                    </button>

                    <button 
                        id="btnConfirmManualEntry"
                        class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
                    >
                        Add to Meal
                    </button>
                </div>
            </div>
        `;
    }

    // --- Sub-View: Selected from DB ---
    if (selectedFood) {
        const totalCals = Math.round(selectedFood.baseCalories * portionMult);
        return `
            <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h3 class="text-xl font-bold text-white">${selectedFood.name}</h3>
                        <p class="text-gray-400 text-sm">Base: ${selectedFood.baseCalories} cal per ${selectedFood.unit}</p>
                    </div>
                    <button id="btnBackFromSelection" class="text-gray-400 hover:text-white">Back</button>
                </div>

                <div class="mb-8">
                    <label class="text-sm font-medium text-gray-300 mb-3 block">Portion Size Multiplier</label>
                    <div class="grid grid-cols-3 gap-3">
                        ${[0.25, 0.5, 0.75, 1, 1.5, 2].map((m) => `
                            <button
                                data-mult="${m}"
                                class="btn-portion py-3 rounded-lg border text-sm font-medium transition-all ${
                                    portionMult === m ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-600 text-gray-400 hover:border-gray-500'
                                }"
                            >
                                ${m === 0.25 ? '1/4' : m === 0.5 ? '1/2' : m === 0.75 ? '3/4' : m} ${selectedFood.unit === '1 cup' ? 'Cup' : 'x'}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="bg-gray-900/50 p-4 rounded-lg mb-6 flex justify-between items-center">
                    <span class="text-gray-300">Total Calories:</span>
                    <span class="text-2xl font-bold text-green-400">${totalCals}</span>
                </div>

                <button 
                    id="btnConfirmDbSelection"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg"
                >
                    Add to Meal Basket
                </button>
            </div>
        `;
    }


    // --- Main Log View ---
    return `
        <div class="space-y-6 pb-20" id="mainLogView">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-white">Log Meal</h2>
            </div>

            ${mealBasket.length > 0 ? `
                <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 mb-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-5 h-5 text-blue-400">${icons.ShoppingBag}</div>
                        <h3 class="font-bold text-blue-100">Current Meal Basket</h3>
                    </div>
                    <div class="space-y-2 mb-4">
                        ${mealBasket.map((item, idx) => `
                            <div class="flex justify-between items-center bg-gray-900/50 p-2 rounded-lg">
                                <span class="text-sm text-white">${item.foodName} <span class="text-gray-400 text-xs">(${item.portion})</span></span>
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-bold text-blue-400">${item.calories}</span>
                                    <button data-index="${idx}" class="btn-remove-basket text-gray-500 hover:text-red-400"><div class="w-3.5 h-3.5">${icons.X}</div></button>
                                </div>
                            </div>
                        `).join('')}
                        <div class="flex justify-between pt-2 border-t border-white/10">
                            <span class="text-sm font-medium text-gray-300">Total</span>
                            <span class="font-bold text-white">${mealBasket.reduce((a,b) => a + b.calories, 0)} kcal</span>
                        </div>
                    </div>
                    <button 
                        id="btnFinishLogging"
                        class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-lg"
                    >
                        Log Entire Meal
                    </button>
                </div>
            ` : ''}

            <div class="relative">
                <div class="absolute left-3 top-3.5 text-gray-400 w-5 h-5">${icons.Search}</div>
                <input 
                    id="searchTerm"
                    class="w-full bg-gray-800 text-white rounded-xl py-3 pl-10 pr-4 border border-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Search foods..."
                    value="${searchTerm}"
                />
            </div>

            <button 
                id="btnStartCreating"
                class="w-full py-3 border-2 border-dashed border-gray-600 text-gray-400 rounded-xl hover:border-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
                <div class="w-4 h-4">${icons.Plus}</div> Manual Entry / New Item
            </button>

            <div class="space-y-2">
                <p class="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4">Your Library</p>
                ${filteredFoods.map(food => `
                    <div 
                        class="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center hover:bg-gray-750 transition-colors"
                    >
                        <div 
                            data-food-id="${food.id}"
                            class="flex-1 cursor-pointer food-select-area"
                        >
                            <p class="font-medium text-white">${food.name}</p>
                            <p class="text-xs text-gray-400">${food.baseCalories} cal / ${food.unit}</p>
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <button 
                                data-food-id="${food.id}"
                                data-food-name="${food.name}"
                                class="btn-delete-food p-2 text-gray-500 hover:text-red-400 hover:bg-gray-700/50 rounded-lg transition-colors"
                                title="Delete Item"
                            >
                                <div class="w-4 h-4">${icons.Trash2}</div>
                            </button>
                            <button 
                                data-food-id="${food.id}"
                                class="food-select-action flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300"
                            >
                                Add <div class="w-4 h-4">${icons.ChevronRight}</div>
                            </button>
                        </div>
                    </div>
                `).join('')}
                ${filteredFoods.length === 0 ? `
                    <p class="text-gray-500 text-center py-4">No foods found matching "${searchTerm}"</p>
                ` : ''}
            </div>
        </div>
    `;
}

function renderProfile() {
    const user = state.user;
    const [isEditing, setIsEditing] = [state.view === 'profile-edit', (val) => setView(val ? 'profile-edit' : 'profile')];

    return `
        <div class="space-y-6 pb-20">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-white">My Profile</h2>
                <button 
                    id="btnToggleEdit"
                    class="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                        isEditing ? 'bg-green-600 text-white' : 'bg-gray-700 text-white'
                    }"
                >
                    ${isEditing ? `<div class="w-4 h-4">${icons.Check}</div> Save` : `<div class="w-4 h-4">${icons.Settings}</div> Edit`}
                </button>
            </div>

            <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <div class="p-6 bg-gradient-to-r from-gray-800 to-gray-750">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0">
                            ${user.name.charAt(0)}
                        </div>
                        <div class="flex-1">
                            ${isEditing ? `
                                <input 
                                    name="name"
                                    value="${user.name}"
                                    onchange="updateUser({ ...state.user, name: this.value })"
                                    class="bg-gray-900 text-white font-bold text-lg rounded px-2 py-1 w-full border border-gray-600"
                                />
                            ` : `
                                <h3 class="text-xl font-bold text-white">${user.name}</h3>
                            `}
                            <p class="text-gray-400 text-sm">Your account</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-6 space-y-6">
                    <div class="grid grid-cols-1 gap-6">
                        ${['height', 'currentWeight', 'goalWeight', 'dailyGoal'].map(key => {
                            const labelMap = {
                                height: 'Height (cm)',
                                currentWeight: 'Current Weight (kg)',
                                goalWeight: 'Goal Weight (kg)',
                                dailyGoal: 'Daily Calorie Goal'
                            };
                            const unit = key === 'dailyGoal' ? 'kcal' : (key === 'height' ? 'cm' : 'kg');

                            return `
                                <div>
                                    <label class="block text-sm font-medium text-gray-400 mb-1">${labelMap[key]}</label>
                                    <div class="relative">
                                        <input 
                                            name="${key}"
                                            data-key="${key}"
                                            ${isEditing ? '' : 'disabled'}
                                            value="${user[key]}"
                                            type="number"
                                            class="input-profile-field w-full bg-gray-900 ${isEditing ? '' : 'disabled:bg-gray-800/50'} text-white rounded-lg p-3 border border-gray-700 disabled:border-transparent focus:border-blue-500 outline-none"
                                        />
                                        <div class="absolute right-3 top-3 text-gray-500 text-sm">${unit}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHistory() {
    const grouped = state.logs.reduce((acc, log) => {
        if (!acc[log.date]) acc[log.date] = [];
        acc[log.date].push(log);
        return acc;
    }, {});

    const dates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

    return `
        <div class="space-y-6 pb-20">
            <h2 class="text-2xl font-bold text-white">History</h2>
            
            <div class="space-y-4">
                ${dates.map(date => {
                    const dayLogs = grouped[date];
                    const dayTotal = dayLogs.reduce((sum, item) => sum + item.calories, 0);
                    
                    // Logic to limit items to 3 unless expanded
                    const isExpanded = state.expandedHistory[date] || false;
                    const visibleLogs = isExpanded ? dayLogs : dayLogs.slice(0, 3);
                    const hiddenCount = dayLogs.length - visibleLogs.length;

                    return `
                        <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                        <div class="bg-gray-700/50 p-4 flex justify-between items-center border-b border-gray-700">
                            <div class="flex items-center gap-2">
                            <div class="w-4 h-4 text-blue-500">${icons.Calendar}</div>
                            <span class="font-medium text-white">${formatDate(date)}</span>
                            </div>
                            <span class="font-bold text-blue-400">${dayTotal} kcal</span>
                        </div>
                        <div class="p-2">
                            ${visibleLogs.map((item) => `
                            <div class="flex justify-between text-sm text-gray-300 py-2 px-2 border-b border-gray-700/50 last:border-0 items-center">
                                <div>
                                    <span>${item.foodName} <span class="text-gray-500 text-xs">(${item.portion})</span></span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span>${item.calories}</span>
                                    <button data-log-id="${item.id}" class="btn-delete-log p-2 text-gray-500 hover:text-red-400" title="Delete entry">
                                        <div class="w-4 h-4">${icons.Trash2}</div>
                                    </button>
                                </div>
                            </div>
                            `).join('')}

                            ${(hiddenCount > 0 || isExpanded && dayLogs.length > 3) ? `
                                <button 
                                    data-date="${date}"
                                    class="btn-toggle-history w-full py-2 text-xs font-medium text-blue-400 hover:text-blue-300 hover:bg-gray-700/30 transition-colors flex items-center justify-center gap-1"
                                >
                                    ${isExpanded 
                                        ? `Show Less ${icons.ChevronUp}` 
                                        : `Show ${hiddenCount} More ${icons.ChevronDown}`}
                                </button>
                            ` : ''}
                        </div>
                        </div>
                    `;
                }).join('')}
                ${dates.length === 0 ? `
                    <div class="text-center py-10 text-gray-500">
                        No history recorded yet.
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// --- Event Listener Registration ---

function attachListeners() {
    // Use event delegation on the main app root
    appRoot.onclick = (e) => {
        const target = e.target.closest('button, .food-select-area, input, [data-view]');
        if (!target) return;

        const { view, logFood } = state;

        // --- Global Navigation ---
        if (target.closest('[data-view]')) {
            setView(target.closest('[data-view]').dataset.view);
        }

        // --- Profile View ---
        if (view.startsWith('profile')) {
            if (target.id === 'btnToggleEdit') {
                if (view === 'profile-edit') {
                    const user = state.user;
                    // Perform save logic
                    updateUser({
                        ...user,
                        height: Number(user.height),
                        currentWeight: Number(user.currentWeight),
                        goalWeight: Number(user.goalWeight),
                        dailyGoal: Number(user.dailyGoal)
                    });
                    setView('profile');
                } else {
                    setView('profile-edit');
                }
            }
        }
        
        // --- Log Food View - Shared ---
        if (view === 'log') {
            if (target.id === 'btnStartCreating') {
                updateLogFoodState({ isCreating: true });
            } else if (target.id === 'btnFinishLogging') {
                // Log items
                logFood.mealBasket.forEach(handleAddLog);
                
                // Clear basket but STAY on page
                updateLogFoodState({ mealBasket: [] });
                
                // Optional: Alert o
                //alert("Meal logged successfully!");
                
            } else if (target.classList.contains('btn-remove-basket')) {
                const index = parseInt(target.dataset.index);
                const newBasket = [...logFood.mealBasket];
                newBasket.splice(index, 1);
                updateLogFoodState({ mealBasket: newBasket });
            } else if (target.classList.contains('btn-delete-food')) {
                const foodId = parseInt(target.dataset.foodId);
                const foodName = target.dataset.foodName;
                if (confirm(`Delete ${foodName} from your library?`)) {
                        handleDeleteFoodFromDb(foodId);
                }
            } else if (target.classList.contains('food-select-area') || target.classList.contains('food-select-action')) {
                const foodId = parseInt(target.dataset.foodId || target.closest('.food-select-area').dataset.foodId);
                const food = state.foodDb.find(f => f.id === foodId);
                updateLogFoodState({ selectedFood: food, portionMult: 1 });
            }
        }
        
        // --- Log Food View - Selected DB Food ---
        if (view === 'log' && logFood.selectedFood) {
            if (target.id === 'btnBackFromSelection') {
                updateLogFoodState({ selectedFood: null, portionMult: 1 });
            } else if (target.classList.contains('btn-portion')) {
                updateLogFoodState({ portionMult: parseFloat(target.dataset.mult) });
            } else if (target.id === 'btnConfirmDbSelection') {
                const food = logFood.selectedFood;
                const cals = Math.round(food.baseCalories * logFood.portionMult);
                
                let portionStr = "";
                if (logFood.portionMult === 0.25) portionStr = "1/4";
                else if (logFood.portionMult === 0.5) portionStr = "1/2";
                else if (logFood.portionMult === 0.75) portionStr = "3/4";
                else portionStr = logFood.portionMult.toString();
                
                const displayPortion = `${portionStr} x ${food.unit}`;

                const newItem = { foodName: food.name, calories: cals, portion: displayPortion };
                updateLogFoodState({ mealBasket: [...logFood.mealBasket, newItem], selectedFood: null });
            }
        }

        // --- Log Food View - Manual Entry ---
        if (view === 'log' && logFood.isCreating) {
            if (target.id === 'btnBackToLog') {
                updateLogFoodState({ isCreating: false });
            } else if (target.closest('[data-unit]')) {
                updateLogFoodState({ energyUnit: target.dataset.unit });
            } else if (target.id === 'btnToggleSave') {
                updateLogFoodState({ saveToLibrary: !logFood.saveToLibrary });
            } else if (target.id === 'btnConfirmManualEntry') {
                const name = document.getElementById('newFoodName').value;
                const energy = document.getElementById('newFoodEnergy').value;
                const unitType = document.getElementById('newFoodUnitType').value;
                const consumedQty = document.getElementById('manualConsumedQty').value;
                
                if (!name || !energy || !consumedQty) return;

                const baseCals = convertToCal(energy, logFood.energyUnit); 
                const totalCals = Math.round(baseCals * Number(consumedQty));
                const displayPortion = `${consumedQty} x (${unitType})`;

                // Add to Basket
                const newItem = { foodName: name, calories: totalCals, portion: displayPortion };
                updateLogFoodState({ 
                    mealBasket: [...logFood.mealBasket, newItem], 
                    isCreating: false,
                    newFoodName: '', 
                    newFoodEnergy: '', 
                    manualConsumedQty: '1' // Reset form fields
                });

                // Optionally Save to DB
                if (logFood.saveToLibrary) {
                    handleAddFoodToDb({ name: name, baseCalories: baseCals, unit: unitType });
                }
            }
        }

        // --- History deletion handling ---
        if (target.classList.contains('btn-delete-log')) {
            const logId = target.dataset.logId;
            if (confirm('Delete this history entry?')) {
                handleDeleteLog(logId);
            }
        }

        // --- History Expansion Toggle ---
        if (target.classList.contains('btn-toggle-history')) {
            const date = target.dataset.date;
            toggleHistoryExpansion(date);
        }

    };
    
    // Input change listeners (Manual Entry)
    appRoot.oninput = (e) => {
        const target = e.target;
        const { view, logFood } = state;

        // FIXED: Do not re-render for manual entry fields
        if (view === 'log' && logFood.isCreating) {
            if (target.id === 'newFoodName') state.logFood.newFoodName = target.value;
            else if (target.id === 'newFoodEnergy') state.logFood.newFoodEnergy = target.value;
            else if (target.id === 'newFoodUnitType') state.logFood.newFoodUnitType = target.value;
            else if (target.id === 'manualConsumedQty') state.logFood.manualConsumedQty = target.value;
            return; // EXIT before render
        } 
        
        if (view === 'log' && target.id === 'searchTerm') {
            updateLogFoodState({ searchTerm: target.value });
        } else if (view === 'profile-edit' && target.classList.contains('input-profile-field')) {
                const key = target.dataset.key;
                updateUser({ ...state.user, [key]: target.value });
        }
    }
}

// --- Main Renderer ---

function renderApp() {
    if (!state.isAuthenticated) {
        renderLoginScreen();
        return;
    }

    const activeView = state.view.split('-')[0]; // dashboard, log, profile, history

    let contentHTML;
    if (activeView === 'dashboard') contentHTML = renderDashboard();
    else if (activeView === 'log') contentHTML = renderLogFood();
    else if (activeView === 'profile') contentHTML = renderProfile();
    else if (activeView === 'history') contentHTML = renderHistory();
    else contentHTML = `
        <div class="p-8 text-center text-red-400">View not found!</div>
    `;
    
    appRoot.innerHTML = `
        <div class="min-h-screen bg-gray-900 text-gray-100 flex justify-center">
            
            <div class="hidden md:flex flex-col w-64 fixed left-0 top-0 bottom-0 bg-gray-800 border-r border-gray-700 p-6 z-50">
                <div class="flex items-center gap-3 mb-10">
                    <div class="bg-blue-600 p-2 rounded-lg">${icons.Scale}</div>
                    <h1 class="text-xl font-bold text-white">TrackFit</h1>
                </div>
                
                <nav class="flex-1 space-y-2">
                    <button data-view="dashboard" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeView === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}">
                        <div class="w-5 h-5">${icons.TrendingUp}</div> <span class="font-medium">Dashboard</span>
                    </button>
                    <button data-view="log" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeView === 'log' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}">
                        <div class="w-5 h-5">${icons.Plus}</div> <span class="font-medium">Log Food</span>
                    </button>
                    <button data-view="history" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeView === 'history' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}">
                        <div class="w-5 h-5">${icons.Calendar}</div> <span class="font-medium">History</span>
                    </button>
                    <button data-view="profile" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeView === 'profile' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}">
                        <div class="w-5 h-5">${icons.User}</div> <span class="font-medium">Profile</span>
                    </button>
                </nav>

                <button onclick="setIsAuthenticated(false)" class="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-all">
                    <div class="w-5 h-5">${icons.LogOut}</div> <span class="font-medium">Sign Out</span>
                </button>
            </div>

            <div class="w-full md-pl-64"> 
                <div class="max-w-2xl mx-auto min-h-screen relative shadow-2xl bg-gray-900">
                    <div class="p-4 pt-6 md:p-8 main-content-container">
                        ${contentHTML}
                    </div>
                </div>
            </div>

            <div class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-800 border-t border-gray-700">
                <div class="flex justify-around items-center h-16 max-w-md mx-auto">
                    <button data-view="dashboard" class="flex flex-col items-center justify-center w-full h-full space-y-1 ${activeView === 'dashboard' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'}">
                        <div class="w-5 h-5">${icons.TrendingUp}</div>
                        <span class="text-xs font-medium">Home</span>
                    </button>
                    <button data-view="log" class="flex flex-col items-center justify-center w-full h-full space-y-1 ${activeView === 'log' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'}">
                        <div class="w-5 h-5">${icons.Plus}</div>
                        <span class="text-xs font-medium">Log</span>
                    </button>
                    <button data-view="history" class="flex flex-col items-center justify-center w-full h-full space-y-1 ${activeView === 'history' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'}">
                        <div class="w-5 h-5">${icons.Calendar}</div>
                        <span class="text-xs font-medium">History</span>
                    </button>
                    <button data-view="profile" class="flex flex-col items-center justify-center w-full h-full space-y-1 ${activeView === 'profile' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'}">
                        <div class="w-5 h-5">${icons.User}</div>
                        <span class="text-xs font-medium">Profile</span>
                    </button>
                    <button onclick="setIsAuthenticated(false)" class="flex flex-col items-center justify-center w-full h-full space-y-1 text-red-400 hover:text-red-300">
                        <div class="w-5 h-5">${icons.LogOut}</div>
                        <span class="text-xs font-medium">Exit</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- Initialization ---

window.setIsAuthenticated = setIsAuthenticated; // Expose to global scope for onclick in logout button
window.updateUser = updateUser; // Expose to global scope for inline onchange in profile

// 1. Load existing state if available (but do NOT auto-login)
loadState();

// 2. Attach all event listeners (delegated)
attachListeners();

// 3. Initial render based on loaded authentication state
renderApp();

