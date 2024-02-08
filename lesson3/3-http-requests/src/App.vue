<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6 my-5">
        <div>
          <figure>
            <blockquote class="blockquote">
              <p>Online store</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Looking for <cite title="Source Title">new products</cite>
            </figcaption>
          </figure>
        </div>
        <div class="input-group mb-3">
          <input
            @keydown.enter="saveProduct"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div v-if="countProducts > 0">
          <ul class="list-group">
            <li
              v-for="product in this.products"
              :key="product.created_at"
              class="list-group-item d-flex justify-content-between"
            >
              <span>{{ product.title }}</span
              ><button @click="removeProduct(product)" type="button" class="btn btn-dark">Delete</button>
            </li>
          </ul>
        </div>
        <div v-else><h3>Add new Products</h3></div>
        <div class="my-3 text-end">
          <small
            ><em>Amount of products: {{ countProducts }}</em></small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  mounted() {
    axios
      .get('http://localhost:3000/items')
      .then((response) => (this.products = response.data)||[]);
  },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    saveProduct(e) {
      const newProduct = {
        title: e.target.value,
        created_at: new Date(),
      };
      
      axios.post('http://localhost:3000/items', newProduct).then(response =>{
        console.log(response)
        this.products.push(response.data)}
      );
    },
    removeProduct(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(response =>{
        this.products = this.products.filter(product =>item.id !== product.id);
        console.log(response)
      }
      );
    },
  },
  computed: {
    countProducts() {
      return this.products.length;
    },
  },
};
</script>
