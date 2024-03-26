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
  margin-top: 60px;
}

.peter img {
  width: 100%;
}

.peter span {
  position: absolute;
  font-size: 22px;
  color: white;
  text-align: center;
}

.small {
  font-size: 18px !important;
  line-height: 1.3 !important;
}
</style>
