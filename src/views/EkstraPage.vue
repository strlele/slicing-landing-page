<script setup>
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <TheNavbar />

    <!-- Hero Section -->
    <section
      class="relative h-[700px] bg-cover bg-center text-white bg-black/50 bg-blend-darken bg-[url('/src/assets/img/ekstrakurikuler.jpg')]">
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
        <h1 class="text-[32px] md:text-[44px] font-bold">Ekstrakurikuler</h1>
        <p class="text-base md:text-lg max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </section>

    <!-- Ekstrakurikuler -->
    <section class="py-10 px-[20px] md:py-[100px] md:px-[120px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Menjahit -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/menjahit.jpg" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-base font-bold leading-[150%]">Menjahit</span>
            </div>
          </div>
        </div>

        <!-- Desain Grafis -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/desain-grafis.jpg" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-lg font-semibold">Desain Grafis</span>
            </div>
          </div>
        </div>

        <!-- Pramuka -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/pramuka.png" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-lg font-semibold">Pramuka</span>
            </div>
          </div>
        </div>

        <!-- Pramuka -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/pramuka.png" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-lg font-semibold">Pramuka</span>
            </div>
          </div>
        </div>

        <!-- Menjahit -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/menjahit.jpg" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-base font-bold leading-[150%]">Menjahit</span>
            </div>
          </div>
        </div>

        <!-- Desain Grafis -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <!-- Gambar -->
          <img src="@/assets/img/desain-grafis.jpg" alt="Ekstrakurikuler"
            class="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 ease-in-out" />

          <!-- Overlay-->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              class="absolute left-4 inset-4 flex items-end justify-items-end opacity-0 group-hover:opacity-100 transition duration-500">
              <span class="text-white text-lg font-semibold">Desain Grafis</span>
            </div>
          </div>
        </div>
      </div>

    <!-- Carousel -->
        <div class="pt-10 border-t border-neutral-300">
           <div class="flex flex-row gap-4">
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

    <TheFooter />
  </div>
</template>
