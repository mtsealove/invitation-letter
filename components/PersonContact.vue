<template>
  <section class="container">
    <article class="contents">
      <BigContact name="신랑"
                  phone="010-8590-9102" />
      <span class="parent">&lt;신랑 측 혼주&gt;</span>
      <div class="parent-contact">
        <SmallContact name="김외진"
                      phone="010-0000-0000"
                      relation="아버지" />
        <SmallContact name="최영자"
                      phone="010-0000-0000"
                      relation="어머니" />
      </div>
    </article>
    <CircleDivider />
    <article class="contents">
      <BigContact name="신부"
                  phone="010-8411-1858" />
      <span class="parent">&lt;신부 측 혼주&gt;</span>
      <div class="parent-contact">
        <SmallContact name="정해만"
                      phone="010-0000-0000"
                      relation="아버지" />
        <SmallContact name="김지영"
                      phone="010-0000-0000"
                      relation="어머니" />
      </div>
    </article>
  </section>
</template>

<script>
import CircleDivider from "./CircleDivider.vue";
import BigContact from "./contact/BigContact.vue";
import SmallContact from "~/components/contact/SmallContact.vue";
export default {
  name: "PersonContact",
  components: {SmallContact, BigContact, CircleDivider}
}
</script>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.06);
  width: 100%;
}

.contents {
  padding: 10.8rem 9.8rem 16rem;
  background-color: rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.parent {
  font-size: 4.9rem;
  line-height: 9.8rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8.9rem;
}

.parent-contact {
  display: flex;
  column-gap: 8rem;
}
</style>
