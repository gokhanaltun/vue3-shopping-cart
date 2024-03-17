<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart/shoppingCartStore';

const store = useShoppingCartStore()

const deleteFromCart = (productId) => {
    store.deleteFromCart(productId)
}

const clearCart = () => {
    store.state.cart = []
    alert("Thank you :)")
}
</script>

<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Cart</h5>
                <ul v-if="store.state.cart.length > 0" v-for="product in store.state.cart" :key="product.id"
                    class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {{ product.name }}
                        <span class="badge badge-primary badge-pill">${{ product.price }}</span>
                        <button @click="deleteFromCart(product.id)" class="btn btn-danger btn-sm">Delete</button>
                    </li>
                </ul>
                <ul v-else class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Empty
                    </li>
                </ul>
                <div class="mt-3">
                    <h6>Total: ${{ store.getCartTotalPrice }}</h6>
                    <button :disabled="store.state.cart.length == 0" @click="clearCart" class="btn btn-success btn-block">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>
