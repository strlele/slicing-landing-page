<script setup>
import TheNavblue from '@/components/TheNavblue.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBAR -->
  <TheNavblue />

  <div class="px-5 pb-10 pt-9 md:px-[120px] md:pt-[52px]">
    <h2 class="text-2xl md:text-[40px] font-bold">Sarana Prasarana</h2>
  </div>

  <main class="flex flex-col gap-6 md:gap-10 px-5 lg:px-[120px] pb-10 md:pb-[100px]">
    <!-- Baris 1 -->
    <section class="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      <!-- Gambar Utama -->
      <div class="flex flex-col gap-2 md:gap-6">
        <img src="@/assets/img/asrama-santri.jpg" alt="Asrama Santri"
          class="w-[335px] h-[240px] md:w-[860px] md:h-[684px] rounded-[8px] object-cover" />
        <p class="text-start text-sm text-[#080E1E]">Asrama Santri</p>
      </div>

      <!-- Gambar 2 & 3 -->
      <div class="flex flex-col gap-6 md:gap-10">
        <!-- Gedung Madrasah -->
        <div class="flex flex-col gap-2 md:gap-6">
          <img src="@/assets/img/gedung-madrasah.jpg" alt="Gedung Ma’had"
            class="w-[335px] h-[240px] md:w-[300px] md:h-[300px] rounded-[8px] object-cover" />
          <p class="text-start text-sm text-[#080E1E]">Gedung Ma’had</p>
        </div>
        <!-- Laboratorium Komputer -->
        <div class="flex flex-col gap-2 md:gap-6">
          <img src="@/assets/img/lab-komputer.png" alt="Laboratorium Komputer"
            class="w-[335px] h-[240px] md:w-[300px] md:h-[300px] rounded-[8px] object-cover" />
          <p class="text-start text-sm text-[#080E1E]">Laboratorium Komputer</p>
        </div>
      </div>
    </section>

    <!-- Baris 2 -->
    <section class="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-start">
      <!-- Gambar Utama -->
      <div class="flex flex-col gap-2 md:gap-6">
        <img src="@/assets/img/masjid.jpg" alt="Asrama Santri"
          class="w-[335px] h-[240px] md:w-[860px] md:h-[684px] rounded-[8px] object-cover" />
        <p class="text-start text-sm text-[#080E1E]">Masjid</p>
      </div>

      <!-- Gambar 2 & 3 -->
      <div class="flex flex-col gap-6 md:gap-10">
        <!-- Laboratorium Sains -->
        <div class="flex flex-col gap-2 md:gap-6">
          <img src="@/assets/img/lab-sains.png" alt="Laboratorium Komputer" class="w-full h-[240px] md:w-[300px] md:h-[300px] rounded-[8px] object-cover" />
          <p class="text-start text-sm text-[#080E1E]">Laboratorium Sains</p>
        </div>
        <!-- Perpustakaan -->
        <div class="flex flex-col gap-2 md:gap-6">
          <img src="@/assets/img/perpustakaan.jpg" alt="Gedung Ma’had" class="w-[335px] h-[240px] md:w-[300px] md:h-[300px] rounded-[8px] object-cover" />
          <p class="text-start text-sm text-[#080E1E]">Perpustakaan</p>
        </div>
      </div>
    </section>

    <!-- Carousel -->
    <div class="pt-6 md:pt-10 border-t border-neutral-300">
      <div class="flex flex-row gap-4">
        <img src="@/assets/icons/arrow-circle-left.svg" alt="arrow left" class="cursor-pointer h-6 w-6" />
        <button class="bg-blue-500 rounded-sm h-[30px] w-[30px]">
          <span class="text-sm text-neutral-50 font-medium">1</span>
        </button>
        <button class="h-[30px] w-[30px]">
          <span class="text-sm text-neutral-900 font-medium">2</span>
        </button>
        <button class="h-[30px] w-[30px]">
          <span class="text-sm text-neutral-900 font-medium">3</span>
        </button>
        <button class="h-[30px] w-[30px]">
          <span class="text-sm text-neutral-900 font-medium">...</span>
        </button>
        <button class="h-[30px] w-[30px]">
          <span class="text-sm text-neutral-900 font-medium">10</span>
        </button>
        <img src="@/assets/icons/arrow-circle-right.svg" alt="arrow right" class="cursor-pointer h-6 w-6" />
      </div>
    </div>
  </main>


  <!-- FOOTER -->
  <TheFooter />

</template>