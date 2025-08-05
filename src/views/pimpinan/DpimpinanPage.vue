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
          <a href="" class="text-base font-bold whitespace-nowrap">Pimpinan Pondok</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hoverfont-bold whitespace-nowrap">Dewan Guru</a>
        </div>

        <div class="py-4 px-2 shrink-0">
          <a href="" class="text-base hover:font-bold whitespace-nowrap">Guru & Staff</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Kembali Button -->
  <div class="px-5 py-10 md:px-[120px] md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center">
    <button class="flex gap-8 items-center py-2 font-medium text-base text-[#182856]">
      <img src="@/assets/icons/chevron_left.svg" alt="Unduh" class="w-5 h-5" />
      Kembali
    </button>
    <div class="flex gap-2.5">
      <span class="text-[#898FA0] font-semibold text-sm">Dewan Guru</span> 
      <span class="text-[#898FA0] font-semibold text-sm">/</span>
      <span class="text-sm font-semibold text-[#091E6F]">Detail</span>
    </div>
  </div>

<section class="px-5 md:px-[120px] pb-20 md:py-10">
    <div class="flex flex-col md:flex-row gap-6 md:gap-16 md:pb-8">
      <!-- Foto -->
      <div class="flex-shrink-0">
        <img
          src="@/assets/img/pimpinan-1.jpg"
          alt="Prof. Dr. K.H. Haedar Nashir"
          class="w-full md:w-[320px] h-[418px] md:h-[400px] object-cover rounded-2xl"
        />
      </div>

      <!-- Biodata -->
      <div class="flex-1 flex flex-col gap-10">
        <h3 class="text-2xl md:text-[32px] font-bold mb-4">
          Prof. Dr. K.H. Haedar Nashir, M.Si.
        </h3>

        <div class="flex flex-col gap-6 text-sm md:text-base">
          <div class="flex md:flex-row flex-col gap-2 md:gap-6">
            <p class="w-[160px] font-bold">Jabatan</p>
            <p>Pimpinan Pondok</p>
          </div>

          <div class="flex md:flex-row flex-col gap-2 md:gap-6">
            <p class="w-[160px] font-bold">Riwayat Pendidikan</p>
            <div class="space-y-2">
              <p>SDN 12 Pagi Petang Jakarta</p>
              <p>SMP ponpes Tahfidzul Qur’an Ulul albab</p>
              <p>SMA ponpes Tahfidzul Qur’an Daarul Fithrah</p>
              <p>S1 Universitas Al-Azhar, Kairo</p>
              <p>S2 UIN Maliki, Malang</p>
            </div>
          </div>

          <div class="flex md:flex-row flex-col gap-2 md:gap-6">
            <p class="w-[160px] font-bold">Pengalaman</p>
            <div class="space-y-2">
              <p>Guru PAI SMAN 3 Malang, 2013–2021</p>
              <p>Guru Tahfidz Qur’an Camp bersama BSI, 2020</p>
              <p>Guru Fiqih & Tahfidz Mahasiswa Al-Furqon, 2014–2019</p>
            </div>
          </div>

          <div class="flex md:flex-row flex-col gap-2 md:gap-6">
            <p class="w-[160px] font-bold">Prestasi</p>
            <div class="space-y-2">
              <p>Hafidz 30 Juz (Mutqin)</p>
              <p>Juara 3 Lomba Da’i Telkomsel Jatim, 2019</p>
              <p>Juara 1 MTQ Nasional MFQ di Medan, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- FOOTER -->
  <TheFooter />

</template>
