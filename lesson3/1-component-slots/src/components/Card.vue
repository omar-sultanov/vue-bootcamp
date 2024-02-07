<template>
  <div class="card" style="width: 18rem">
    <img
      src="https://images.unsplash.com/photo-1707173513949-da36b73461ad?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="card-img-top"
      alt="beach"
    />
    <div class="card-body">
      <slot name="card-title"/>
      <slot name="card-text"/>
      <slot/>
    </div>
  </div>
</template>
<script>
export default {};
</script>
