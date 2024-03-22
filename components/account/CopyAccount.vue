<script lang="ts">
export default {
  name: 'CopyAccount',
  props: {
    who: String,
    account: String
  },
  methods: {
    copy() {
      window.navigator.clipboard.writeText(this.account)
          .then(()=>{
            window.alert('계좌번호가 복사되었습니다.');
          })
    }
  }
}
</script>

<template>
  <div class="button"
          @click="copy" >
    <div class="who">{{who}}</div>
    <div class="account">{{account}}</div>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  padding: 4.6rem 6.6rem;
  font-size: 6rem;
  column-gap: 4rem;
  background-color: #F0F0F0;
  border-radius: 0;
  border: 0.5px solid black;
  cursor: pointer;
}
.who {
  width: 16rem;
  min-width: 16rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}

.account {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  text-decoration: none;
  color: black;
  @media (max-width: 375px) {
    //text-align: right;
  }
}
</style>
