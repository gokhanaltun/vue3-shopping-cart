<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart/shoppingCartStore'

const store = useShoppingCartStore()

const addToCart = (productId) => {
    store.addToCart(productId)
}


</script>

<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Products</h5>
                <ul class="list-group">
                    <li v-for="product in store.state.products" :key="product.id"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        {{ product.name }}
                        <span class="badge badge-primary badge-pill">${{ product.price }}</span>
                        <button :disabled="store.isProductInCart(product)" class="btn btn-primary btn-sm"
                            @click="addToCart(product.id)">Add to
                            Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
