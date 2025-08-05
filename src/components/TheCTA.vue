<template>
    <section class="w-full bg-white px-5 py-10 lg:px-[120px] md:py-[100px]">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="grid lg:grid-cols-2 gap-6 md:h-[700px]">
          <!-- PMB -->
          <div class="relative bg-green-700 hover:bg-[#062215] text-white rounded-xl p-6 overflow-hidden min-h-[335px] group">
            <!-- MA -->
            <div class="absolute -left-54 md:-left-44 top-8 md:top-[86px] flex gap-3 md:gap-[23px] transition-all duration-500 group-hover:left-6 md:group-hover:left-1">
              <div class="flex justify-center items-center bg-white rounded-[10px]">
                <p
                  class="text-center text-[#091E6F] text-xl md:text-[28px] font-semibold py-5 md:py-5 px-4 md:px-[40px]">
                  MA Darul Ihsan Muhammadiyah
                </p>
              </div>
              <div class="bg-[#091E6F] text-white text-xs font-semibold py-5 px-4 rounded-[10px]">
                <img src="https://www.dimsa.sch.id/template3/image/buliding2.svg"
                  class="aspect-square w-[32px] md:w-[64px]" />
              </div>
            </div>

            <!-- SMP -->
            <div
              class="absolute -right-54 md:-right-44 top-[116px] md:top-[204px] flex flex-row-reverse gap-3 md:gap-[23px] transition-all duration-500 group-hover:right-6 md:group-hover:right-1">
              <div class="flex justify-center items-center bg-white rounded-[10px]">
                <p
                  class="text-center text-[#091E6F] text-xl md:text-[28px] font-semibold py-5 md:py-5 px-4 md:px-[40px]">
                  SMP Darul Ihsan Muhammadiyah
                </p>
              </div>

              <div class="bg-white text-xs font-semibold py-5 px-4 rounded-[10px]">
                <img src="@/assets/icons/buildings.svg" class="aspect-square w-[32px] md:w-[64px]" />
              </div>
            </div>

            <!-- Text -->
            <div class="flex flex-col justify-end h-full md:ml-[50px]">
              <p class="text-base md:text-[32px] font-medium">Jadwal Penerimaan</p>
              <p class="text-[32px] md:text-5xl font-bold">Santri Baru 2024</p>
            </div>
          </div>

          <!-- Ruang Literasi -->
          <div class="relative bg-neutral-100 rounded-xl p-6 overflow-hidden min-h-[335px] group">
            <!-- Teks Judul -->
            <div class="flex flex-col justify-start h-full md:ml-[50px] mt-8 md:mt-[56px]">
              <h2 class="text-[32px] md:text-5xl font-bold text-gray-900 mb-1">Ruang Literasi</h2>
              <p class="text-base md:text-xl text-gray-600">Darul Ihsan Muhammadiyah Sragen</p>
            </div>

            <!-- Buku Putih -->
            <img src="@/assets/img/buku-putih.png" alt="Buku Putih"
              class="absolute top-[184px] md:top-[369.87px] left-[142px] md:left-[182px] rotate-[-4deg] w-[133px] h-[165px] md:w-[273px] md:h-[339px] rounded-[12px] shadow-custom" />

            <!-- Buku Pink -->
            <img src="@/assets/img/buku-pink.png" alt="Buku Pink"
              class="absolute top-[152px] md:top-[302px] left-[199px] md:left-[300.05px] rotate-[3.5deg] w-[133px] h-[165px] md:w-[275px] md:h-[340px] rounded-[12px] shadow-custom" />

            <!-- Buku Biru -->
            <img src="@/assets/img/buku-biiru.png" alt="Buku Biru"
              class="absolute top-[191px] md:top-[362px] left-[238px] md:left-[380.05px] rotate-[17deg] w-[133px] h-[165px] md:w-[274px] md:h-[340px] rounded-[12px] shadow-custom" />
          </div>
        </div>

        <!-- Baris Bawah: Banner Donasi Full Width -->
        <div
          class="bg-gradient-to-tr from-[#FCD13F] to-[#FBA13A] rounded-[20px] px-6 md:pl-[80px] md:pr-[40px] relative flex items-center justify-between overflow-hidden min-h-[335px]">
          <!-- KIRI -->
          <div class="flex flex-col items-start gap-4 max-w-[550px] text-left">
            <img src="@/assets/icons/lazismu.svg" alt="Lazismu" class="h-8 mb-7" />

            <h3 class="text-[32px] md:text-[40px] font-bold leading-snug mb-4">
              Salurkan Harta Terbaikmu, Raih Berkah Ilahi.
            </h3>

            <button
              class="px-[79px] md:px-6 py-[16px] md:py-2 bg-black text-white text-base font-medium rounded-lg shadow hover:bg-gray-800 transition">
              Donasi Sekarang
            </button>
          </div>

          <!-- KANAN (Gambar Besar & Terpotong) -->
          <div class="hidden md:block">
            <img src="https://www.dimsa.sch.id/template3/image/donasi.svg" alt="Donation Box"
              class="w-[100%] h-[280%] object-contain" />
          </div>
        </div>
      </div>
    </section>
</template>