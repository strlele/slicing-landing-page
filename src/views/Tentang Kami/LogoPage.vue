<template>
  <!-- Toggle Button Mobile -->
   <TheSidebar />
   
  <!-- CONTENT -->
  <section class="bg-white overflow-y-auto md:ml-[360px] px-5 lg:px-[160px] py-9 lg:py-[100px]">
    <div class=" flex flex-col gap-6">
      <!-- Judul -->
      <h1 class="text-2xl md:text-[40px] font-bold">Logo</h1>

      <!-- Konten -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo Card 1 -->
        <div class="flex flex-col items-start gap-4">
          <h6 class="font-bold text-lg md:text-xl tracking-[-0.5%]">Logo Yayasan</h6>
          <img src="@/assets/img/logo-yayasan.png" alt="Logo Yayasan" class="w-[120px] h-[64px] object-contain" />
          <button class="flex items-center gap-2 bg-[#E6E6E8] rounded-md px-4 py-2 font-medium text-sm text-[#182856]">
            <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-5 h-5" />
            Unduh file gambar
          </button>
        </div>

        <!-- Logo Card 2 -->
        <div class="flex flex-col items-start gap-4">
          <h6 class="font-bold text-lg md:text-xl tracking-[-0.5%]">Logo SMP</h6>
          <img src="@/assets/img/logo-yayasan.png" alt="Logo SMP" class="w-[120px] h-[64px] object-contain" />
          <button class="flex items-center gap-2 bg-[#E6E6E8] rounded-md px-4 py-2 font-medium text-sm text-[#182856]">
            <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-5 h-5" />
            Unduh file gambar
          </button>
        </div>

        <!-- Logo Card 3 -->
        <div class="flex flex-col items-start gap-4">
          <h6 class="font-bold text-lg md:text-xl tracking-[-0.5%]">Logo MA</h6>
          <img src="@/assets/img/logo-yayasan.png" alt="Logo MA" class="w-[120px] h-[64px] object-contain" />
          <button class="flex items-center gap-2 bg-[#E6E6E8] rounded-md px-4 py-2 font-medium text-sm text-[#182856]">
            <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-5 h-5" />
            Unduh file gambar
          </button>
        </div>
      </div>

      <!-- Navigasi bawah -->
      <div class="flex flex-col md:flex-row justify-between mt-20 pt-4 border-t text-sm">
        <div class="flex items-center gap-2 pb-2 ">
          <img src="@/assets/icons/arrow-left.svg" alt="">
            <a href="#"
              class="text-sm md:text-base font-normal hover:underline">Sebelumnya
            </a>
        </div>
        <span class="font-bold text-2xl text-black">Akreditas</span>
      </div>
    </div>
  </section>
</template>

<script setup>
    import TheSidebar from '@/components/TheSidebar.vue';
</script>