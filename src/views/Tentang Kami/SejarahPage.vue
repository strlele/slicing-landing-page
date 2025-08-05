<template>
    <!-- SIDEBAR -->
    <TheSidebar />

  <!-- CONTENT -->
  <section class="bg-white overflow-y-auto md:ml-[360px] px-5 lg:px-[160px] py-9 md:py-[100px]">
    <div class=" flex flex-col gap-6">
        <!-- Judul -->
        <h2 class="text-2xl md:text-[40px] font-bold">Sejarah Pondok</h2>

        <!-- Pararaf 1 -->
        <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <!-- Gambar -->
        <img src="/src/assets/img/selayang-pandang.jpg" alt="Selayang Pandang" class="rounded-xl object-cover h-[274px] w-full">

        <!-- Subtitle 01 -->
        <h4 class="font-bold text-2xl">Subtitle 01</h4>
        <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p class="text-gray-700 text-base">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p class="text-gray-700 text-base">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

        <!-- Subtitle 02 -->
        <h4 class="font-bold text-2xl">Subtitle 02</h4>
        <p class="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p class="text-gray-700 text-base">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

        <!-- Navigasi bawah -->
        <div class="grid grid-cols-1 md:grid-cols-2 items-start mt-20 pt-4 border-t gap-9">
            <div class="">
                <div class="flex items-center gap-2 pb-2">
                    <img src="@/assets/icons/arrow-left.svg" alt="">
                    <a href="#"
                    class="text-sm md:text-base font-normal hover:underline">Sebelumnya
                    </a>
                </div>
                <span class="font-semibold text-2xl text-black">Selayang Pandang</span>
            </div>
            <div class="">
                <div class="flex items-center gap-2 pb-2">
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