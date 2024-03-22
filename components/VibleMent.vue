<template>
  <section class="container">
    <div class="contents"
         data-aos="fade-up"
         data-aos-offset="50"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1300"
    >
      <p class="ment">“ 무엇보다도 뜨겁게 서로 사랑할지니<br/>
        사랑은 허다한 죄를 덮느니라 ”
      </p>
      <p class="where">
        1 Peter 4:8
      </p>
    </div>

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
  font-size: 22px;
  line-height: 1.4;
  text-align: center;
}

.where {
  font-size: 22px;
  margin-top: 24px;
  color: rgba(0, 0, 0, .4);
}

.contents {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
