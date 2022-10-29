import axios from 'axios';

const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    getProductItems({ commit }) {
        const endpoint = 'http://localhost:3000/products';
        axios.get(endpoint)
            .then(response => {
               commit('UPDATE_PRODUCT_ITEMS', response.data);
            });
    }
}

const getters = {
    productItems: state => state.productItems
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;