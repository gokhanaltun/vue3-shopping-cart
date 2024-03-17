<script setup>
import ProductList from './components/product/ProductList.vue';
import ShoppingCart from './components/shoppingCart/ShoppingCart.vue'
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Shopping Cart</h1>
    <div class="row">
      <ProductList />
      <ShoppingCart />
    </div>
  </div>
</template>
