<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBAR -->
  <TheNavbar />

  <!-- Hero Section -->
  <section class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/pimpinan.jpg')]">
    <div class="absolute inset-0 bg-black/40"></div>
    <div
      class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
      <h1 class="text-[32px] md:text-[44px] font-bold text-white">Pimpinan & <br> Dewan Guru</h1>
    </div>
  </section>

  <section class="px-5 md:px-[120px]">
    <div class="overflow-x-auto whitespace-nowrap scroll-smooth">
      <div class="flex flex-row gap-10 pt-8 pb-4 border-b border-neutral-300 min-w-max">
        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hover:font-bold whitespace-nowrap">Pimpinan Pondok</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base font-bold whitespace-nowrap">Dewan Guru</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hover:font-bold whitespace-nowrap">Guru & Staff</a>
        </div>
      </div>
    </div>
  </section>


  <!-- Pengumuman -->
  <section class="flex flex-col gap-10 py-10 px-5 md:pb-[100px] md:pt-20 md:px-[120px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 place-items-center">

      <!-- Card -->
      <div class="w-full max-w-[373px] rounded-2xl overflow-hidden shadow-md">
        <img src="@/assets/img/profile-3.jpg" alt="Prof. Dr. K.H. Haedar Nashir"
          class="w-full h-[400px] object-cover" />
        <div class="bg-white px-6 py-6 flex flex-col gap-1">
          <h3 class="text-lg font-bold text-neutral-900 leading-tight">
            Prof. Dr. K.H. Haedar Nashir, M.Si.
          </h3>
          <p class="text-base text-neutral-700">Jabatan</p>
        </div>
      </div>

      <!-- Card -->
      <div class="w-full max-w-[373px] rounded-2xl overflow-hidden shadow-md">
        <img src="@/assets/img/profile-3.jpg" alt="Prof. Muhammad Sirajuddin" class="w-full h-[400px] object-cover" />
        <div class="bg-white px-6 py-6 flex flex-col gap-1">
          <h3 class="text-lg font-bold text-neutral-900 leading-tight">
            Nama Pimpinan
          </h3>
          <p class="text-base text-neutral-700">Jabatan</p>
        </div>
      </div>

      <!-- Card -->
      <div class="w-full max-w-[373px] rounded-2xl overflow-hidden shadow-md">
        <img src="@/assets/img/profile-3.jpg" alt="Prof. Ahmad Syafii Maarif" class="w-full h-[400px] object-cover" />
        <div class="bg-white px-6 py-6 flex flex-col gap-1">
          <h3 class="text-lg font-bold text-neutral-900 leading-tight">
            Nama Pimpinan
          </h3>
          <p class="text-base text-neutral-700">Jabatan</p>
        </div>
      </div>

      <!-- Card -->
      <div class="w-full max-w-[373px] rounded-2xl overflow-hidden shadow-md">
        <img src="@/assets/img/profile-3.jpg" alt="Prof. Ahmad Syafii Maarif" class="w-full h-[400px] object-cover" />
        <div class="bg-white px-6 py-6 flex flex-col gap-1">
          <h3 class="text-lg font-bold text-neutral-900 leading-tight">
            Nama Pimpinan
          </h3>
          <p class="text-base text-neutral-700">Jabatan</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <TheFooter />

</template>