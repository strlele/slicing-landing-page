<template>
  <!-- NAVBAR -->
  <TheNavblue />

  <div class="flex flex-col px-5 md:px-[120px] pt-[52px] pb-6 md:pb-10">
    <h2 class="text-[40px] font-bold">Data Alumni</h2>
  </div>

  <section class="px-5 md:px-[120px] pb-10 md:pb-9 flex flex-col">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col md:flex-row gap-6">
        <span class="font-bold text-base md:text-2xl leading-[150%] md:leading-[140%]">Angkatan</span>
        <select
          class="w-full md:w-[156px] px-2 border border-neutral-300 text-[#182856] text-base rounded-lg focus:ring-neutral-900">
          <option selected>2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-black table-fixed">
          <thead class="text-xs md:text-sm font-bold bg-[#F5F6FA]">
            <tr>
              <th class="px-6 py-3 w-[235px] md:w-[700px]">Nama</th>
              <th class="px-6 py-3 w-[100px] md:w-[200px]">Angkatan</th>
              <th class="px-6 py-3 w-[300px] hidden lg:table-cell">Lembaga Pendidikan/Perusahaan</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[#D6D8DB] text-black text-xs md:text-sm leading-[150%]">
              <td class="flex flex-col px-6 py-4">
                <span class="font-bold">Ahmad Rozikin</span>
                <span class="lg:hidden text-xs">Universitas Indonesia</span>
              </td>
              <td class="px-6 py-4">2024</td>
              <td class="px-6 py-4 hidden lg:table-cell">Universitas Indonesia</td>
            </tr>
            <tr class="border-b border-[#D6D8DB] text-black text-xs md:text-sm leading-[150%]">
              <td class="flex flex-col px-6 py-4">
                <span class="font-bold">Austin Pascal Ibrahim</span>
                <span class="lg:hidden text-xs">Institut Pertanian Bogor</span>
              </td>
              <td class="px-6 py-4">2024</td>
              <td class="px-6 py-4 hidden lg:table-cell">Institut Pertanian Bogor</td>
            </tr>
            <tr class="border-b border-[#D6D8DB] text-black text-xs md:text-sm leading-[150%]">
              <td class="flex flex-col px-6 py-4">
                <span class="font-bold">Sabrina Harianti</span>
                <span class="lg:hidden text-xs">PT Mayora Indonesia</span>
              </td>
              <td class="px-6 py-4">2024</td>
              <td class="px-6 py-4 hidden lg:table-cell">PT Mayora Indonesia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Carousel -->
    <div class="flex flex-row gap-4 pt-6">
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

  </section>

  <!-- FOOTER -->
  <TheFooter />
</template>

<script setup>
import TheNavblue from '@/components/TheNavblue.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>