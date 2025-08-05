<template>
  <!-- Toggle Button Mobile -->
   <TheSidebar />
   
  <!-- CONTENT -->
  <section class="bg-white overflow-y-auto md:ml-[360px] px-5 lg:px-[160px] py-9 lg:py-[100px]">
    <div class=" flex flex-col gap-6">
      <!-- Gambar -->
      <img src="/src/assets/img/selayang-pandang.jpg" alt="Selayang Pandang" class="rounded-xl object-cover h-[274px] w-full">

      <!-- Judul -->
      <h1 class="text-2xl md:text-[40px] font-bold">Selayang Pandang</h1>

      <!-- Konten -->
      <div class="text-gray-700 flex flex-col gap-6 text-base font-normal text-justify">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </div>

      <!-- Navigasi bawah -->
      <div class="flex flex-col md:flex-row justify-between mt-20 pt-4 border-t text-sm">
        <div class="flex items-center gap-2 pb-2 ">
            <a href="https://www.dimsa.sch.id/kabar"
              class="text-sm md:text-base font-normal hover:underline">Berikutnya
            </a>
            <img src="@/assets/icons/arrow-right.svg" alt="">
        </div>
        <span class="font-bold text-2xl text-black">Sejarah Pondok</span>
      </div>
    </div>
  </section>
</template>

<script setup>
    import TheSidebar from '@/components/TheSidebar.vue';
</script>