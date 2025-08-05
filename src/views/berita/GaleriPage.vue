<template>
    <!-- NAVBAR -->
    <TheNavblue />

    <section class="flex flex-col px-5 md:px-[120px] pt-[52px]">
        <h2 class="text-[40px] font-bold">Galeri</h2>
        <div class="flex flex-row gap-10 py-4">
            <div class="py-4 px-2">
                <a href="" class="text-base font-bold">Foto Kegiatan</a>
            </div>
            <div class="py-4 px-2">
                <a href="" class="text-base hover:font-bold">Video</a>
            </div>
        </div>
    </section>

    <section class="pb-10 md:pb-[100px] px-5 md:px-[120px]">
        <!-- Ekstrakurikuler -->
        <div class="py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Gambar 1 -->
            <img src="@/assets/img/galeri-1.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 2 -->
            <img src="@/assets/img/galeri-2.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 3 -->
            <img src="@/assets/img/galeri-3.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 4 -->
            <img src="@/assets/img/galeri-4.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 5 -->
            <img src="@/assets/img/galeri-5.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 6 -->
            <img src="@/assets/img/galeri-6.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 7 -->
            <img src="@/assets/img/galeri-7.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
                <!-- Gambar 8 -->
            <img src="@/assets/img/galeri-8.jpg" alt="Ekstrakurikuler"
                class="w-full h-[240px] object-cover rounded-lg" />
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

    <!-- FOOTER -->
    <TheFooter />
</template>

<script setup>
import TheNavblue from '@/components/TheNavblue.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>