<!-- src/views/ProgramPage.vue -->
<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <TheNavbar />

    <!-- <section class="relative h-[700px] bg-cover bg-center text-white  bg-black/50 bg-blend-darken" :style="{ backgroundImage: `url(${image})` }">
      <div class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px">
        <div class="flex flex-col gap-10 items-start text-white pb-20 md:pb-[100px]">
          <h1 class="text-[32px] md:text-[44px] font-bold">{{ title }}</h1>
          <p class="text-base md:text-lg max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </section> -->

    <section
      class="relative h-[700px] bg-cover bg-center text-white bg-black/50 bg-blend-darken" :style="{ backgroundImage: `url(${image})` }">
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
        <h1 class="text-[32px] md:text-[44px] font-bold">{{ title }}r</h1>
        <p class="text-base md:text-lg max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    <section class="py-10 px-[37px] md:py-[100px] md:px-[120px]">
      <TheVideo />
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String
})

import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import TheVideo from '../components/TheVideo.vue'
</script>
