<template>
    <div class="px-5 md:px-[120px] py-10 md:py-[100px]">
      <div class="flex justify-between items-center mb-6 md:mb-[40px]">
        <h3 class="text-base md:text-[32px] font-bold text-black">Apa yang terjadi di DIMSA</h3>
        <a href="#" class="hidden md:block text-blue-600 text-base font-normal hover:underline">Selengkapnya</a>
      </div>

      <div class="flex flex-col lg:flex-row gap-[40px]">
        <!-- Berita Utama -->
        <article class="flex flex-col justify-between w-full flex-1 cursor-pointer">
          <img src="@/assets/img/image-card.png" alt="Kabar DIMSA"
            class="w-full h-full object-cover rounded-2xl mb-4" />
          <div class="flex flex-col gap-6">
            <p class="text-[10px] md:text-sm text-gray-500">Kabar Dimsa • 05 Jan, 2024</p>
            <h3 class="text-2xl font-bold text-[#080E1E] leading-snug">
              MA DIMSA Mengirim 15 Santri untuk Program Mobilitas Pelajar Internasional ke Singapura
              ...
            </h3>
          </div>
        </article>

        <!-- Berita -->
        <article class="w-full lg:w-[430px] h-[684px] flex flex-col gap-[40px]">
          <!-- Item 1 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-1.png" alt="" class="w-1/2  h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-[10px] md:text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#272727] leading-snug">
                Gemilang di Ajang FLS2N Sragen, Ananda Berhasil Raih Juara 3 dan Ba...
              </h6>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-2.png" alt="" class="w-1/2 h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-[10px] md:text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                Prestasi Gemilang! Shufina Nur Aziziyah Juara 2 di Lomba Engli...
              </h6>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-3.png" alt="" class="w-1/2 h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                DIMSA Bawa Pulang Medali di Turnamen Tapak Suci Nasional Universi...
              </h6>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-4.png" alt="" class="w-1/2 h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-sm text-gray-500">Kabar Dimsa • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                Selamat Menempuh Asesmen Nasional Berbasis Komputer AN...
              </h6>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>