<script setup lang="ts">
useSeoMeta({
  title:"김은택 & 정윤영 결혼식에 초대합니다",
  ogTitle: '김은택 & 정윤영 결혼식에 초대합니다',
  description:"김은택 & 정윤영 결혼식에 초대합니다",
  ogDescription: '김은택 & 정윤영 결혼식에 초대합니다',
  ogUrl: 'https://invitation-letter-green.vercel.app',
  ogSiteName: '김은택 & 정윤영 결혼식에 초대합니다',
  ogType: 'website',
  ogImage: 'https://invitation-letter-green.vercel.app/introduction.png',
  formatDetection: 'telephone=no',
  viewport: 'initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;'
})
</script>

<script lang="ts">

enum Category {
  STUDIO,YONSEI, FRIENDS, SELF
}

const allImgs = [{
  category: Category.STUDIO,
  img: '/gallery/img.png',
},
  {
    category: Category.STUDIO,
    img: '/gallery/img_1.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_2.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_3.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_1.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_2.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_3.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_1.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_2.png',
  },
  {
    category: Category.STUDIO,
    img: '/gallery/img_3.png',
  },
  {
    category: Category.YONSEI,
    img: '/gallery/img.png',
  },
  {
    category: Category.YONSEI,
    img: '/gallery/img_1.png',
  },
  {
    category: Category.YONSEI,
    img: '/gallery/img_2.png',
  },
  {
    category: Category.YONSEI,
    img: '/gallery/img_3.png',
  },
  {
    category: Category.FRIENDS,
    img: '/gallery/img_2.png',
  },
  {
    category: Category.FRIENDS,
    img: '/gallery/img_3.png',
  },
];
export default {
  name: 'Gallery',
  methods: {
    changeCategory(category: Category) {
      this.currentCategory = category;
      this.imgs = allImgs.filter((i)=>i.category===this.currentCategory)
          .map((i)=>i.img);
    }
  },
  data() {
    return {
      imgs: allImgs.filter((i)=>i.category===Category.STUDIO)
          .map((n)=>n.img),
      Category,
      currentCategory: Category.STUDIO
    }
  }
}
</script>

<template>
  <section class="container">
    <h1 class="title">결혼사진</h1>
    <nav class="nav">
      <button :class="['nav-item', currentCategory===Category.STUDIO&&'selected']"
              @click="changeCategory(Category.STUDIO)"
              type="button">
        Studio
      </button>
      <button :class="['nav-item', currentCategory===Category.YONSEI&&'selected']"
              @click="changeCategory(Category.YONSEI)"
              type="button">
        Yonsei
      </button>
      <button :class="['nav-item', currentCategory===Category.FRIENDS&&'selected']"
              @click="changeCategory(Category.FRIENDS)"
              type="button">
        with Friends
      </button>
      <button :class="['nav-item', currentCategory===Category.SELF&&'selected']"
              @click="changeCategory(Category.SELF)"
              type="button">
        Self
      </button>
    </nav>
    <article class="grid">
      <img v-for="(img, idx) of imgs"
           :src="img"
           alt=''
           :key="`img ${idx}`" />
    </article>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 42px 40px;
  background-color: white;
  min-height: 100vh;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
}

.title {
  font-size: 22px;
  margin-bottom: 18px;
  font-weight: 400;
}

.nav {
  display: flex;
  align-items: center;
  column-gap: 18px;
  width: 100%;
  margin-bottom: 18px;
  position: sticky;
  top: 0;
  background-color: white;
  padding: 10px 0;
}

.nav-item {
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 22px;
  white-space: nowrap;
  cursor: pointer;
  color: black;
}

.nav-item.selected {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
}

.grid {
  grid-gap: 24px 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid img {
  width: 100%;
  aspect-ratio: 1;
}
</style>
