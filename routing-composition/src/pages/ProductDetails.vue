<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { ref, inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  // setup(props) {
  setup() {
    const products = inject('products');

    const route = useRoute();
    // console.log(route);

    let title = ref('');
    let price = ref(null);
    let description = ref('');
    const selectedProducts = computed(() => 
      products.value.find(product => 
      product.id === route.params.pid
    ));

    title = computed(() => selectedProducts.value.title);
    price = computed(() => selectedProducts.value.price);
    description = computed(() => selectedProducts.value.description);

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>