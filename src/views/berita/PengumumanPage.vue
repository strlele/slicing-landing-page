<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBAR -->
    <TheNavbar />

    <!-- Hero Section -->
    <section
      class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/pengumuman.jpg')]">
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
        <h1 class="text-[32px] md:text-[44px] font-bold text-white">Pengumuman</h1>
      </div>
    </section>

    <!-- Pengumuman -->
    <section class="flex flex-col gap-10 py-10 px-[20px] md:py-[100px] md:px-[120px] spa">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        <!-- Pengumuman 1 -->
        <div class="flex flex-col gap-4">
          <p class="text-xs text-neutral-900 font-medium leading-[140%]">13 Maret • 2024</p>
          <h2 class="text-xl md:text-2xl font-bold tracking-[-0.24px]">Libur & Cuti Bersama Awal Ramadhan 1445 Hijriyah</h2>
          <p class="text-xs md:text-sm text-neutral-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus...</p>
          <div class="flex flex-row gap-2 items-center">
            <div class="flex flex-row gap-2 px-3 py-2.5">
              <a href="#" class="text-sm font-medium text-[#12B76A]">Baca Selengkapnya</a>
              <img src="@/assets/icons/other-icon.svg" alt="Download Icon" class="h-6 w-6">
            </div>

            <button type="button" class="border border-[#12B76A] rounded-lg px-3 py-2">
              <img src="@/assets/icons/icon-left.svg" alt="h-6 w-6">
            </button>
          </div>
        </div>

        <!-- Pengumuman 2 -->
        <div class="flex flex-col gap-4">
          <p class="text-xs text-neutral-900 font-medium leading-[140%]">13 Maret • 2024</p>
          <h2 class="text-xl md:text-2xl font-bold tracking-[-0.24px]">Libur & Cuti Bersama Awal Ramadhan 1445 Hijriyah</h2>
          <p class="text-xs md:text-sm text-neutral-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus...</p>
          <div class="flex flex-row gap-2 items-center">
            <div class="flex flex-row gap-2 px-3 py-2.5">
              <a href="#" class="text-sm font-medium text-[#12B76A]">Baca Selengkapnya</a>
              <img src="@/assets/icons/other-icon.svg" alt="Download Icon" class="h-6 w-6">
            </div>

            <button type="button" class="border border-[#12B76A] rounded-lg px-3 py-2">
              <img src="@/assets/icons/icon-left.svg" alt="h-6 w-6">
            </button>
          </div>
        </div>

        <!-- Pengumuman 3 -->
        <div class="flex flex-col gap-4">
          <p class="text-xs text-neutral-900 font-medium leading-[140%]">13 Maret • 2024</p>
          <h2 class="text-xl md:text-2xl font-bold tracking-[-0.24px]">Penetapan Hasil Seleksi Administrasi Calon Guru & Karyawan Tahun 2024</h2>
          <p class="text-xs md:text-sm text-neutral-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus...</p>
          <div class="flex flex-row gap-2 items-center">
            <div class="flex flex-row gap-2 px-3 py-2.5">
              <a href="#" class="text-sm font-medium text-[#12B76A]">Baca Selengkapnya</a>
              <img src="@/assets/icons/other-icon.svg" alt="Download Icon" class="h-6 w-6">
            </div>

            <button type="button" class="border border-[#12B76A] rounded-lg px-3 py-2">
              <img src="@/assets/icons/icon-left.svg" alt="h-6 w-6">
            </button>
          </div>
        </div>

        <!-- Pengumuman 4 -->
        <div class="flex flex-col gap-4">
          <p class="text-xs text-neutral-900 font-medium leading-[140%]">13 Maret • 2024</p>
          <h2 class="text-xl md:text-2xl font-bold tracking-[-0.24px]">SMA Laboratorium UM Membuka penjaringan Guru & Karyawan Baru Tahun 2024</h2>
          <p class="text-xs md:text-sm text-neutral-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus...</p>
          <div class="flex flex-row gap-2 items-center">
            <div class="flex flex-row gap-2 px-3 py-2.5">
              <a href="#" class="text-sm font-medium text-[#12B76A]">Baca Selengkapnya</a>
              <img src="@/assets/icons/other-icon.svg" alt="Download Icon" class="h-6 w-6">
            </div>

            <button type="button" class="border border-[#12B76A] rounded-lg px-3 py-2">
              <img src="@/assets/icons/icon-left.svg" alt="h-6 w-6">
            </button>
          </div>
        </div>
      </div>

      <!-- Carousel -->
      <div class="pt-10">
        <div class="flex flex-row gap-4 border-t border-neutral-300 pt-6">
          <img src="@/assets/icons/arrow-circle-left.svg" alt="arrow left" class="cursor-pointer h-6 w-6">
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
          <img src="@/assets/icons/arrow-circle-right.svg" alt="arrow right" class="cursor-pointer h-6 w-6">
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <TheFooter />

</template>
