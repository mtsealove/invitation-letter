<template>
  <section class="container">
    <p class="ment">“ 무엇보다도 뜨겁게 서로 사랑할지니<br/>
      사랑은 허다한 죄를 덮느니라 ”
    </p>
    <span class="where">1 Peter 4:8</span>
  </section>
</template>

<script>
export default {
  name: "VibleMent"
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ment {
  font-size: 7.2rem;
  line-height: 1.4;
  text-align: center;
}

.where {
  font-size: 7.2rem;
  margin-top: 7.4rem;
  color: rgba(0, 0, 0, .4);
}
</style>
