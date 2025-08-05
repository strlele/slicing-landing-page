<template>
  <!-- Toggle Button Mobile -->
   <TheSidebar />
   
  <!-- CONTENT -->
  <section class="bg-white overflow-y-auto md:ml-[360px] px-5 lg:px-[160px] py-9 lg:py-[100px]">
    <div class=" flex flex-col gap-6">
      <!-- Judul -->
      <h1 class="text-2xl md:text-[40px] font-bold">Visi & Misi</h1>

      <!-- Visi -->
      <h4 class="font-bold text-2xl">Visi</h4>
      <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <!-- Misi -->
      <h4 class="font-bold text-2xl">Misi</h4>
      <div class="flex flex-col gap-6">
        <div class="flex flex-row gap-6">
          <h4 class="text-base font-bold text-neutral-900">01</h4>
          <span class="text-base font-normal text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
        <div class="flex flex-row gap-6">
          <h4 class="text-base font-bold text-neutral-900">02</h4>
          <span class="text-base font-normal text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
        <div class="flex flex-row gap-6">
          <h4 class="text-base font-bold text-neutral-900">03</h4>
          <span class="text-base font-normal text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
        <div class="flex flex-row gap-6">
          <h4 class="text-base font-bold text-neutral-900">04</h4>
          <span class="text-base font-normal text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
      </div>

      <!-- Navigasi bawah -->
        <div class="flex flex-col md:flex-row justify-between items-start mt-20 pt-4 border-t text-sm">
            <div class="w-1/2">
                <div class="flex items-center gap-2">
                    <img src="@/assets/icons/arrow-left.svg" alt="">
                    <a href="#"
                    class="text-sm md:text-base font-normal hover:underline">Sebelumnya
                    </a>
                </div>
                <span class="font-semibold text-2xl text-black">Selayang Pandang</span>
            </div>
            <div class="w-1/2">
                <div class="flex items-center gap-2">
                    <a href="#"
                    class="text-sm md:text-base font-normal hover:underline">Berikutnya
                    </a>
                    <img src="@/assets/icons/arrow-right.svg" alt="">
                </div>
                <span class="font-semibold text-2xl text-black">Selayang Pandang</span>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
    import TheSidebar from '@/components/TheSidebar.vue';
</script>