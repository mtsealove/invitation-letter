<template>
  <div>
    <div class="title-container">
      <img src="../../assets/imgs/arrowUp.svg"
           class="icon"
           alt=''/>
      <p class="title">{{name}}에게 연락하기</p>
    </div>
    <div class="content">
      <em>{{phone}}</em>로 연락해주세요
    </div>
  </div>
</template>

<script>
export default {
  name: "BigContact",
  props: {
    name: String,
    phone: String,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.icon {
  width: 7.8rem;
  height: 7.8rem;
  object-fit: contain;
}

.title {
  font-size: 7rem;
  line-height: 9.8rem;
  margin-left: 1.8rem;
}

.title-container {
  display: flex;
  align-items: center;
}

.content {
  font-size: 6rem;
  margin-top: 2rem;
  border: 0.5px solid black;
  padding: 2rem 4.3rem 2.4rem;
  line-height: 9.8rem;
  margin-left: 9.6rem;
  background-color: white;
}

.content em {
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 4px;
}
</style>
