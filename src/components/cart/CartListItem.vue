<template>
  <div>
    <p class="cart-item--title is-inline">Item # 1</p>
    <div class="is-pulled-right">
      <i
          class="fa fa-arrow-circle-up cart-item--modify"></i>
      <i
          class="fa fa-arrow-circle-down cart-item--modify"></i>
    </div>
    <div class="cart-item--content">
      <span class="cart-item--price has-text-primary has-text-weight-bold">
        10$ each
      </span>
      <span class="cart-item--quantity has-text-grey is-pulled-right">
        Quantity: 10
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem'
};
</script>

<style scoped>
.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>