<template>
  <div class="sm-container">
    <div class="title">
      <img src="../../assets/imgs/arrowUp.svg"
           class="icon"
           alt=''/>
      <p class="name">{{relation}} <strong>{{name}}</strong></p>
    </div>
    <div class="contact">
      <em>{{phone}}</em>&nbsp;로<br/>
      연락해주세요.
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'SmallContact',
  props: {
    name: String,
    phone: String,
    relation: String
  }
}
</script>

<style scoped>
.sm-container {
  flex: 1;
  background: transparent;
}

.icon {
  width: 7.8rem;
  height: 7.8rem;
}

.title {
  display: flex;
  align-items: center;
  column-gap: 1.1rem;
}

.name {
  font-size: 6rem;
  line-height: 9.8rem;
}

.name strong {
  font-size: 7rem;
  font-weight: 400;
}

.contact {
  margin-left: 8.9rem;
  background: white;
  //flex: 1;
  padding: 2rem 3.8rem;
  font-size: 4.4rem;
  line-height: 7.9rem;
  border: 0.5px solid black;
  margin-top: 2rem;
  white-space: nowrap;
}

.contact em {
  font-style: normal;
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 5px;
}
</style>
