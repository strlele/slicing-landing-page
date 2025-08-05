<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBR -->
    <TheNavbar />

    <!-- Hero Section -->
    <section class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/qna.jpg')]">
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
        <h1 class="text-[32px] md:text-[44px] font-bold text-white">Majalah</h1>
      </div>
    </section>

    <!-- Majalah -->
    <section class="flex flex-col gap-6 py-10 px-[20px] md:py-[100px] md:px-[72px]">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <!-- Majalah 1 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-biiru.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Sisi Berakhlak Yang Hilang</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 2 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-pink.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Ayah Bundaku Madrasah Pertamaku</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 3 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-putih.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Sejarah Umat Islam</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 4 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-4.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Berteduh Untuk Ketenangan Hati</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 5 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-biiru.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Kisah Kisah Para Nabi & Rasul</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 6 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-biiru.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Bimbingan Praktikal Solat Wajib & Sunat Lelaki</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 7 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-7.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Berkahnya Anak Yatim & Fakir Miskin</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>
        <!-- Majalah 8 -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3 w-full md:w-[294px]">
          <!-- Gambar Majalah -->
          <div class="relative w-full rounded-lg overflow-hidden shadow-lg group">
            <div class="h-[214px] md:h-[357px]">
              <img src="@/assets/img/buku-8.png" alt="Majalah" class="object-cover" />
            </div>
            <!-- Overlay & Download Button -->
            <div class="hidden md:block">
              <div class="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-base font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100">
                  <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                  Unduh file
                </button>
              </div>
            </div>
          </div>

          <!-- Judul & Tanggal -->
          <div class="flex flex-col justify-center gap-3">
            <div class="flex flex-col justify-center gap-1">
              <h3 class="font-bold text-base md:text-lg text-[#101828] leading-[150%] md:leading-[140%]">Tuanku Imam Bonjol Ulama & Pejuang</h3>
              <p class="text-[10px] md:text-base font-medium text-neutral-500">21 Februari 2024</p>
            </div>

            <div class="none md:hidden">
              <button
                class="flex items-center gap-2 bg-[#E6E6E8] text-[#182856] text-xs font-medium px-2 py-1 rounded-sm hover:bg-blue-100">
                <img src="@/assets/icons/document-download.svg" alt="Unduh" class="w-4 h-4 md:w-auto md:h-auto" />
                Unduh file
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Carousel -->
      <div class="pt-10">
        <div class="flex flex-row gap-4 border-t border-neutral-300 pt-6">
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
