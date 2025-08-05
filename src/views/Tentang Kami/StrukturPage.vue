<template>
    <!-- SIDEBAR -->
    <TheSidebar />

  <!-- CONTENT -->
  <section class="bg-white overflow-y-auto md:ml-[360px] px-5 lg:px-[160px] py-9 md:py-[100px]">
    <div class=" flex flex-col gap-6">
        <!-- Judul -->
        <h2 class="text-2xl md:text-[40px] font-bold">Struktur Organisasi</h2>

        <!-- Gambar -->
        <div class="rounded-2xl p-6 flex flex-col justify-center bg-neutral-100 h-[300px] md:h-[600px]">
            <img src="@/assets/icons/gallery.svg"alt="Logo Gambar"
            class="w-10 h-10 md:w-14 md:h-14 mx-auto mb-4">
        </div>

        <!-- Navigasi bawah -->
        <div class="grid grid-cols-1 md:grid-cols-2 items-start mt-20 pt-4 border-t gap-9">
            <div class="">
                <div class="flex items-center gap-2 pb-2">
                    <img src="@/assets/icons/arrow-left.svg" alt="">
                    <a href="#"
                    class="text-sm md:text-base font-normal hover:underline">Sebelumnya
                    </a>
                </div>
                <span class="font-semibold text-2xl text-black">Visi & Misi</span>
            </div>
            <div class="">
                <div class="flex items-center gap-2 pb-2">
                    <a href="#"
                    class="text-sm md:text-base font-normal hover:underline">Berikutnya
                    </a>
                    <img src="@/assets/icons/arrow-right.svg" alt="">
                </div>
                <span class="font-semibold text-2xl text-black">Akreditas</span>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import TheSidebar from '@/components/TheSidebar.vue';
</script>