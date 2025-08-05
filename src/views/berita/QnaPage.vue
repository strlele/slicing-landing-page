<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBAR -->
    <TheNavbar />

    <!-- Hero Section -->
    <section
      class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/qna.jpg')]">
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
        <h1 class="text-[32px] md:text-[44px] font-bold text-white">Question & <br> Answer</h1>
      </div>
    </section>

    <!-- Pengumuman -->
    <section class="flex flex-col gap-6 py-10 px-[20px] md:py-[100px] md:px-[120px] spa">
      <!-- Item 1 -->
      <div class="px-4 md:px-6 flex justify-between items-center">
        <div class="flex flex-row py-4 md:py-10 gap-4">
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">01</h4>
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">Question</h4>
        </div>
        <button class="h-6 w-6 md:h-10 md:w-10">
          <img src="@/assets/icons/add.svg" alt="Add Icon" class="">
        </button>
      </div>

      <!-- Item 2 -->
      <div class="px-4 md:px-6 flex flex-col justify-between">
        <div class="flex py-4 md:py-10 justify-between items-center border-b border-neutral-300">
          <div class="flex flex-row gap-4">
            <h4 class="text-base md:text-2xl font-bold text-neutral-900">02</h4>
            <h4 class="text-base md:text-2xl font-bold text-neutral-900">Question</h4>
          </div>
          <button class="h-6 w-6 md:h-10 md:w-10">
            <img src="@/assets/icons/minus.svg" alt="Add Icon" class="">
          </button>
        </div>
        <div class="pt-6 pb-10 text-sm md:text-xl text-neutral-900 font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
      </div>

      <!-- Item 3 -->
      <div class="px-4 md:px-6 flex justify-between items-center">
        <div class="flex flex-row py-4 md:py-10 gap-4">
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">03</h4>
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">Question</h4>
        </div>
        <button class="h-6 w-6 md:h-10 md:w-10">
          <img src="@/assets/icons/add.svg" alt="Add Icon" class="">
        </button>
      </div>

      <!-- Item 4 -->
            <div class="px-4 md:px-6 flex justify-between items-center">
        <div class="flex flex-row py-4 md:py-10 gap-4">
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">04</h4>
          <h4 class="text-base md:text-2xl font-bold text-neutral-900">Question</h4>
        </div>
        <button class="h-6 w-6 md:h-10 md:w-10">
          <img src="@/assets/icons/add.svg" alt="Add Icon" class="">
        </button>
      </div>
    </section>

    <!-- FOOTER -->
    <TheFooter />
</template>
