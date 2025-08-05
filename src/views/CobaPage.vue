<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheArticle from '@/components/TheArticle.vue';
</script>

<template>
  <!-- NAVBAR -->
  <TheNavbar />

  <!-- Hero Section -->
  <section class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/pimpinan.jpg')]">
    <div class="absolute inset-0 bg-black/40"></div>
    <div
      class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
      <h1 class="text-[32px] md:text-[44px] font-bold text-white">DIMSA <br> dalam Berita</h1>
    </div>
  </section>

  <section class="px-5 md:px-[120px]">
    <div class="overflow-x-auto whitespace-nowrap scroll-smooth">
      <div class="flex flex-row gap-10 pt-8 pb-4 border-b border-neutral-300 min-w-max">
        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hover:font-bold whitespace-nowrap">Pimpinan Pondok</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hover:font-bold whitespace-nowrap">Dewan Guru</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base font-bold whitespace-nowrap">Guru & Staff</a>
        </div>
      </div>
    </div>
  </section>


  <!-- Artikel -->
  <TheArticle />


  <!-- Berita Lainnya -->
  <section class="px-4 md:px-12 py-12">
    <h2 class="text-2xl font-semibold mb-8 pt-10 border-t border-neutral-300">Berita lainnya</h2>

    <div class="grid grid-cols-1 md:grid-cols-2grid-cols-3 gap-x-6">
      <!-- Card Berita -->
      <div class="rounded-lg overflow-hidden shadow-sm">
        <img src="@/assets/img/banner.jpg" alt="Gambar Berita" class="w-full h-[200px] object-cover" />
        <div class="flex flex-col py-4 gap-4">
          <h3 class="font-bold text-xl leading-[140%] line-clamp-2">Selamat Menempuh Asesmen Nasional Berbasis Komputer (ANBK)
          </h3>
          <p class="text-sm text-[#272727] leading-[140%]">Kabar Dimsa • 14 Jul, 2024</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <button class="px-6 py-2 rounded-md border text-sm font-medium hover:bg-gray-100 transition">Lihat Indeks</button>
    </div>
  </section>

  <!-- FOOTER -->
  <TheFooter />


</template>