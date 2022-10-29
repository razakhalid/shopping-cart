import axios from 'axios';

const ENDPOINT_BASE = 'http://localhost:3000';

const state = {
    cartItems: []
}

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    }
}

const actions = {
    getCartItems({ commit }) {
        axios.get(`${ENDPOINT_BASE}/cart`)
            .then(response => {
                commit('UPDATE_CART_ITEMS', response.data);
            });
    },
    addCartItem({ commit }, cartItem) {
        axios.post(`${ENDPOINT_BASE}/cart`, cartItem)
            .then(response => {
                commit('UPDATE_CART_ITEMS', response.data);
            });
    },
    removeCartItem({ commit }, cartItem) {
        axios.post(`${ENDPOINT_BASE}/cart/delete`, cartItem)
            .then(response => {
                commit('UPDATE_CART_ITEMS', response.data);
            });
    },
    removeAllCartItems({ commit }) {
        axios.post(`${ENDPOINT_BASE}/cart/delete/all`)
            .then(response => {
                commit('UPDATE_CART_ITEMS', response.data);
            });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters,
}

export default cartModule;