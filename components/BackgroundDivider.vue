<script lang="ts">
export default {
  name: 'BackgroundDivider',
  props: {
    text: String,
    isSmall: Boolean
  }
}
</script>

<template>
  <div class="peter">
    <img src="/plz.png"
         alt="peter4">
    <span v-html="text" :class="isSmall?'small':''">
    </span>
  </div>
</template>

<style scoped>
.peter {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20rem;
}

.peter img {
  width: 100%;
}

.peter span {
  position: absolute;
  font-size: 6.6rem;
  color: white;
  text-align: center;
}

.small {
  font-size: 5.9rem;
  line-height: 7.6rem;
}
</style>
