<template>
  <div class="hello">
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      products: []
    }
  },
  created() {
    const self = this;
    axios.get('http://localhost:3000/cart', {})
    .then(response => {
      const data = response.data;
      self.products.push(data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
