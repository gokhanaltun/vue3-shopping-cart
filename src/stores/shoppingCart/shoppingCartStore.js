import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useShoppingCartStore = defineStore('cart-store', () => {
    const state = reactive({
        products: [
            {
                id: 0,
                name: 'Test Product 1',
                price: 10
            },
            {
                id: 1,
                name: 'Test Product 2',
                price: 15
            },
            {
                id: 2,
                name: 'Test Product 3',
                price: 5
            }
        ],
        cart: [{
            id: 1,
            name: 'Test Product 2',
            price: 15
        },]
    })

    const isProductInCart = (product) => {
        return state.cart.some(item => item.id === product.id)
    }
    
    const addToCart = (productId) => {
        state.cart.push(state.products.find(item => item.id == productId))
    }

    const deleteFromCart = (productId) => {
        state.cart.splice(state.cart.findIndex(item => item.id == productId), 1)
    }

    const getCartTotalPrice = computed(() => {
        return state.cart.reduce((acc, curr) => acc + curr.price, 0)
    })
    
    return {
        state,
        isProductInCart,
        addToCart,
        deleteFromCart,
        getCartTotalPrice
    }
})