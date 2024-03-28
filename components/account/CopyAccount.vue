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
          });
    }
  }
}
</script>

<template>
  <div class="copy-account-btn"
       @click="copy" >
    <span class="who">{{who}}</span>
    <span class="account">{{account}}</span>
  </div>
</template>

<style scoped>
.copy-account-btn {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  font-size: 16px;
  column-gap: 14px;
  background-color: #F0F0F0;
  border-radius: 0;
  border: 0.5px solid black;
  cursor: pointer;
  position: relative;
  max-width: 100%;
  width: 100%;
  flex: 1;
}
.who {
  min-width: 42px;
  width: 42px;
  text-align: left;
  //white-space: nowrap;
  overflow: hidden;
}

.account {
  flex: 1;
  text-align: left;
  //white-space: nowrap;
  text-decoration: none;
  color: black;
  @media (max-width: 375px) {
    //text-align: right;
  }
}
</style>
