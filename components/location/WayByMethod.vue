<template>
  <article class="way">
    <h6 class="title">{{title}}</h6>
    <ul class="contents">
      <li v-for="item in contents">
        {{item}}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "WayByMethod",
  props: {
    title: String,
    contents: Array
  }
}
</script>

<style scoped>
.way {
  width: 100%;
  max-width: calc(100% - 27rem);
  margin-top: 10.2rem;
}

.title {
  font-size: 7.2rem;
  font-weight: 400;
  line-height: 10.5rem;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 7px;
}

.contents {
  font-size: 4.8rem;
  line-height: 6.3rem;
  list-style: '∙';
  padding-left: 2rem;
  word-break: keep-all;
}
</style>
