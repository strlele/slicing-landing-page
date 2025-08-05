<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheCTA from '@/components/TheCTA.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheVideo from '@/components/TheVideo.vue'
import TheArticle from '@/components/TheArticle.vue'
import TheButton from '@/components/TheButton.vue'
import TheHero from '@/components/TheHero.vue'
</script>

<template>
  <div class="overflow-hidden">
    <!-- Navbar -->
    <TheNavbar />

    <!-- HERO SECTION -->
     <TheHero />

    <!-- card section mobile -->
    <section class="w-full px-5 py-10 bg-black md:hidden">
      <div class="flex flex-col gap-6">
        <img src="@/assets/img/image-card.png" alt="Card Image" class="w-full h-full rounded-2xl object-cover" />
        <div class="text-white flex flex-col gap-4">
          <h4 class="text-2xl font-bold">MA DIMSA Mengirim 15 Santri untuk Program Mobi...</h4>
          <a href="#" class="text-sm inline-flex items-center gap-1 leading-[150%]">
            Lihat Detail
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Section About -->
    <section class="w-full px-5 py-10 md:px-30 md:py-25 bg-white">
      <div class="flex flex-col md:flex-row justify-between mb-10 gap-8 lg:gap-[120px]">
        <div class="flex flex-col justify-between gap-6">
          <p class="text-sm md:text-base text-gray-500 font-medium tracking-wide">
            Selayang Pandang
          </p>

          <!-- Foto -->
          <img src="@/assets/img/Foto-Berita193.png" alt="Ustadz"
            class="w-full max-w-[400px] rounded-md object-cover" />
        </div>

        <!-- Right Side: Heading & Text -->
        <div class="flex flex-col items-start flex-1">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Utlubil Ilma Minal Mahdi <br />
            Ilallahdi
          </h1>
          <p class="text-gray-700 text-base md:text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button
            class="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
            Selengkapnya
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Jumlah Peserta Didik -->

      <div class="md:hidden flex flex-col">
        <!-- coba dulu -->
        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-informative">760</h2>
          <p class="text-xl font-bold max-w-[210px]">Jumlah santri/peserta didik</p>
        </div>

        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-neutral-500">34</h2>
          <p class="text-xl font-medium text-neutral-500 max-w-[210px]">
            Prestasi Akademik & Non Akademik
          </p>
        </div>
        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-neutral-500">56</h2>
          <p class="text-xl font-medium text-neutral-500 max-w-[210px]">
            Tenaga Pendidik Berkualitas
          </p>
        </div>
      </div>

      <!-- Video -->
       <section class="pt-[80px]">
         <TheVideo />
        </section>

    </section>

    <!-- Section Lembaga Akademik-->
    <section class="bg-[#F9FAFB] md:py-[100px] px-5 md:px-[120px] mb-10">
      <p class="text-gray-500 text-sm font-medium mb-8">Lembaga Akademik</p>

      <div class="grid md:grid-cols-2 gap-8 md:gap-[80px]">
        <!-- Card SMP -->
        <div class="bg-white rounded-lg md:rounded-2xl overflow-hidden">
          <img src="@/assets/img/smp-dimsa.jpg" alt="SMP" class="w-full md:h-[300px] object-cover" />
          <div class="p-4 md:p-6">
            <span class="inline-block bg-[#2C3E50] text-white text-xs font-semibold px-6 py-2 rounded-md mb-2">
              SMP
            </span>
            <h3 class="text-[18px] font-semibold text-gray-800">Darul Ihsan Muhammadiyah Sragen</h3>
          </div>
        </div>

        <!-- Card MA -->
        <div class="bg-white rounded-lg md:rounded-2xl overflow-hidden">
          <img src="@/assets/img/ma-dimsa.jpg" alt="MA" class="w-full md:h-[300px] object-cover" />
          <div class="p-4 md:p-6">
            <span class="inline-block bg-[#14532D] text-white text-xs font-semibold px-6 py-2 rounded-md mb-2">
              MA
            </span>
            <h3 class="text-[18px] font-semibold text-gray-800">Darul Ihsan Muhammadiyah Sragen</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Kerjasama -->

    <section class="w-full pt-6 pb-10 md:py-[60px] overflow-hidden">
      <div class="px-4 md:px-[100px] items-center mb-8">
        <h2 class="text-neutral-700 font-medium text-base mb-4 md:mb-8">Kerjasama :</h2>
      </div>
      <!-- Wrapper -->
      <div class="relative overflow-hidden bg-white py-[30px] md:py-8">
        <!-- Scroll Container -->
        <div class="animate-scroll whitespace-nowrap flex items-center gap-[100px] w-max">
          <!-- Duplikat isi agar seamless -->
          <div v-for="n in 2" :key="scroll" class="flex items-center gap-[100px]">
            <img src="@/assets/icons/harvard_university_logo.svg" class="h-12 inline-block" />
            <img src="@/assets/icons/lembaga_zakat_nasional_logo.svg" class="h-12 inline-block" />
            <img src="@/assets/icons/bankbsicoid_logo.svg" class="h-12 inline-block" />
            <img src="@/assets/icons/google_logo.svg" class="h-12 inline-block" />
            <img src="@/assets/icons/Microsoft.svg" class="h-12 inline-block" />
            <img src="@/assets/icons/Central-Philippine-University.svg" class="h-12 inline-block" />
            <img src="@/assets/img/Rangsit_University.png" class="h-12 inline-block" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION AGENDA -->
    <section class="h-full bg-[#051244] px-5 sm:px-6 md:px-[120px] md:py-[100px] py-10 text-white">
      <h2 class="text-base md:text-lg font-semibold mb-8 md:mb-6">Agenda DIMSA</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] mx-auto items-center">
        <!-- event -->
        <div class="flex flex-col justify-center gap-4 md:mt-[173px]">
          <h3 class="text-[32px] md:text-[40px] font-bold leading-snug">Dimsa Fantastic Show #4</h3>
          <p class="text-sm opacity-80 mb-3">25 Jan 2024 · 09:00 WIB</p>

          <div class="flex items-center gap-2 text-sm">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 14.6699C9.87 14.6699 8.13 12.9399 8.13 10.7999C8.13 8.65994 9.87 6.93994 12 6.93994C14.13 6.93994 15.87 8.66994 15.87 10.8099C15.87 12.9499 14.13 14.6699 12 14.6699ZM12 8.43994C10.7 8.43994 9.63 9.49994 9.63 10.8099C9.63 12.1199 10.69 13.1799 12 13.1799C13.31 13.1799 14.37 12.1199 14.37 10.8099C14.37 9.49994 13.3 8.43994 12 8.43994Z"
                fill="#FEB700" />
              <path
                d="M12.0001 23.26C10.5201 23.26 9.03005 22.7 7.87005 21.59C4.92005 18.75 1.66005 14.22 2.89005 8.83C4.00005 3.94 8.27005 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 12.0101 1.75C15.7401 1.75 20.0101 3.94 21.1201 8.84C22.3401 14.23 19.0801 18.75 16.1301 21.59C14.9701 22.7 13.4801 23.26 12.0001 23.26ZM12.0001 3.25C9.09005 3.25 5.35005 4.8 4.36005 9.16C3.28005 13.87 6.24005 17.93 8.92005 20.5C10.6501 22.17 13.3601 22.17 15.0901 20.5C17.7601 17.93 20.7201 13.87 19.6601 9.16C18.6601 4.8 14.9101 3.25 12.0001 3.25Z"
                fill="#FEB700" />
            </svg>
            <span>Hall Umar Bin Khattab</span>
          </div>
        </div>

        <!-- Image -->
        <div class="lg:col-span-2">
          <img src="@/assets/img/event1.jpg" alt="Dimsa Fantastic Show Banner"
            class="w-full h-auto rounded-xl shadow-lg object-cover" />
        </div>
      </div>
    </section>

    <!-- Section News -->
     <TheArticle />

    <!-- Section Testimoni Orangtua -->
    <section class="w-full px-5 md:px-8 lg:px-[120px] py-[100px] bg-white">
      <div class="flex justify-between items-center mb-[40px]">
        <h3 class="text-base md:text-[32px] font-bold text-black">Testimoni Orang Tua</h3>
        <a href="#"
          class="hidden md:block text-blue-600 text-base font-normal hover:underline">Selengkapnya</a>
      </div>

      <!-- Cards Container -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Card 1 -->
        <div class="border border-gray-200 rounded-3xl p-[56px] flex flex-col justify-between gap-4 h-full">
          <blockquote class="text-neutral-900 font-medium leading-relaxed mb-8">
            “Keberadaan DIMSA mengubah pandangan saya tentang kepemimpinan dan kerjasama. Kegiatan
            dan teman-teman di sini mendukung perkembangan diri saya, membuat saya siap menghad...”
          </blockquote>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/img/profile.jpg" alt="Profile Picture" class="w-12 h-12 rounded-full object-cover" />
            <div class="flex flex-col">
              <p class="text-black font-semibold">Fahmi Setiawan</p>
              <p class="text-neutral-500 text-sm">Alumni 2018</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="border border-gray-200 rounded-3xl p-[56px] flex flex-col justify-between gap-4 h-full">
          <blockquote class="text-gray-700 leading-relaxed mb-8">
            “DIMSA memberikan pengalaman luar biasa dalam berorganisasi dan kolaborasi. Saya merasa
            lebih siap menghadapi tantangan di luar sekolah. Terima kasih, DIMSA!”
          </blockquote>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/img/profile2.jpg" alt="Profile Picture" class="w-12 h-12 rounded-full object-cover" />
            <div class="flex flex-col">
              <p class="text-gray-900 font-semibold">Nina Nuraini</p>
              <p class="text-gray-500 text-sm">Alumni 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <TheCTA />

    <!-- Footer -->
    <TheFooter />

    <!-- Button Scroll up -->
    <TheButton />
  </div>
</template>
