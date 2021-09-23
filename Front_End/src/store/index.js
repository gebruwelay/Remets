import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// total
const totalIni = { total: 0 }
const totalSlice = createSlice(
    {
        name: "total",
        initialState: totalIni,
        reducers: {
            increment(state, action) {
                state.total = state.total + action.payload;
            }
        }

    }
)
// Counter
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: initialCounterState,
        reducers: {
            increment(state) {
                state.counter++;
            },
            decrement(state) {
                state.counter--;
            },
            increase(state, action) {
                state.counter = state.counter + action.payload;
            },
            toggleCounter(state) {
                state.showCounter = !state.showCounter;
            }
        }
    }
);

// Authentication
const initialAuthState = { isAuthenticated: false, user: null };

const authSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
            login(state, action) {
                const userCred = action.payload;
                state.user = userCred.username
                axios.post('http://localhost:8080/authenticate', userCred)
                    .then(response => {
                        Cookies.set('user', response.data.jwt)

                        axios.defaults.headers.common = {
                            'Authorization': 'Bearer ' + response.data.jwt
                        };
                    })
                    .catch(err => console.log(err.message))

                if (Cookies.get('user') != null) {
                    state.isAuthenticated = true
                }

            },
            logout(state) {
                Cookies.remove('user')
                axios.defaults.headers.common = {
                    'Authorization': ''
                };
                state.isAuthenticated = false;
            },

        }

    }
);

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        total: totalSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export const totalActions = totalSlice.actions;

export default store;