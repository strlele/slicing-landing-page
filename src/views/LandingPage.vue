<script setup>
import { ref } from 'vue'
const isSidebarOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="overflow-hidden">
    <!-- HEADER -->
    <header class="absolute top-0 left-0 right-0 z-10">
      <nav class="flex justify-between bg-transparent">
        <!-- Logo -->
        <div class="flex items-center p-5 pb-2 md:px-[80px] md:pt-[29px]">
          <img src="@/assets/img/logo.png" alt="Logo" class="w-[67px] h-full md:w-[103px] md:h-[56px] object-contain" />
        </div>

        <!-- Menu -->
        <div class="flex">
          <button class="bg-informative text-white px-[40px] py-[29px] rounded-bl-lg hidden md:block">
            PSB Online
          </button>
          <button @click="isSidebarOpen = true"
            class="bg-neutral text-white p-6 pb-4 md:pl-[40px] md:pr-[80px] md:py-[29px] rounded-bl-lg md:rounded-none flex items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="hidden md:block"> Menu</span>
          </button>
        </div>
      </nav>

      <aside class="fixed top-0 left-0 w-full pb-20 bg-[#02060d] text-white transform transition-transform duration-300 z-50"
        :class="isSidebarOpen ? 'translate-y-0' : '-translate-y-full'">

        <div class="flex justify-between bg-transparent">
          <!-- Logo -->
          <div class="flex items-center p-5 pb-2 md:px-[80px] md:pt-[29px]">
            <img src="@/assets/img/logo.png" alt="Logo"
              class="w-[67px] h-full md:w-[103px] md:h-[56px] object-contain" />
          </div>

          <!-- Menu -->
          <div class="flex">
            <button class="bg-informative text-white px-[40px] py-[29px] rounded-bl-lg hidden md:block">
              PSB Online
            </button>
            <button @click="isSidebarOpen = false"
              class="bg-neutral text-white p-6 pb-4 md:pl-[40px] md:pr-[80px] md:py-[29px] rounded-bl-lg md:rounded-none flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span class="hidden md:block"> Tutup</span>
            </button>
          </div>
        </div>

        <ul class="mt-10 space-y-8 px-18 pb-12 mb:pb-24 text-2xl text-[#667085]">
          <li><a href="#">Profil</a></li>
          <li><a href="#">Akademik</a></li>
          <li><a href="#">Program</a></li>
          <li><a href="#">Fasilitas</a></li>
          <li><a href="#">Berita</a></li>
        </ul>

        <!-- Responsive Mobile Button -->
        <div class="px-18 pb-12">
         <button class="md:hidden bg-informative text-white px-[40px] py-4 rounded-xl">
            PSB Online
          </button>
        </div>

        <div class="flex flex-row px-18 gap-4">
          <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8667 10C20.8667 4.47715 16.3896 0 10.8667 0C5.34385 0 0.866699 4.47715 0.866699 10C0.866699 14.9912 4.52354 19.1283 9.3042 19.8785V12.8906H6.76514V10H9.3042V7.79688C9.3042 5.29063 10.7972 3.90625 13.0813 3.90625C14.1751 3.90625 15.3198 4.10156 15.3198 4.10156V6.5625H14.0589C12.8167 6.5625 12.4292 7.3334 12.4292 8.125V10H15.2026L14.7593 12.8906H12.4292V19.8785C17.2099 19.1283 20.8667 14.9912 20.8667 10Z"
                  fill="#FCFCFD" />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8667 1.80078C13.5386 1.80078 13.855 1.8125 14.9058 1.85937C15.8823 1.90234 16.4097 2.06641 16.7612 2.20313C17.2261 2.38281 17.562 2.60156 17.9097 2.94922C18.2612 3.30078 18.4761 3.63281 18.6558 4.09766C18.7925 4.44922 18.9565 4.98047 18.9995 5.95312C19.0464 7.00781 19.0581 7.32422 19.0581 9.99219C19.0581 12.6641 19.0464 12.9805 18.9995 14.0313C18.9565 15.0078 18.7925 15.5352 18.6558 15.8867C18.4761 16.3516 18.2573 16.6875 17.9097 17.0352C17.5581 17.3867 17.2261 17.6016 16.7612 17.7813C16.4097 17.918 15.8784 18.082 14.9058 18.125C13.8511 18.1719 13.5347 18.1836 10.8667 18.1836C8.19483 18.1836 7.87842 18.1719 6.82764 18.125C5.85108 18.082 5.32373 17.918 4.97217 17.7813C4.50732 17.6016 4.17139 17.3828 3.82373 17.0352C3.47217 16.6836 3.25732 16.3516 3.07764 15.8867C2.94092 15.5352 2.77686 15.0039 2.73389 14.0313C2.68701 12.9766 2.67529 12.6602 2.67529 9.99219C2.67529 7.32031 2.68701 7.00391 2.73389 5.95312C2.77686 4.97656 2.94092 4.44922 3.07764 4.09766C3.25732 3.63281 3.47607 3.29688 3.82373 2.94922C4.17529 2.59766 4.50732 2.38281 4.97217 2.20313C5.32373 2.06641 5.85498 1.90234 6.82764 1.85937C7.87842 1.8125 8.19483 1.80078 10.8667 1.80078ZM10.8667 0C8.15186 0 7.81201 0.0117187 6.74561 0.0585938C5.68311 0.105469 4.95264 0.277344 4.31982 0.523438C3.65967 0.78125 3.10107 1.12109 2.54639 1.67969C1.98779 2.23438 1.64795 2.79297 1.39014 3.44922C1.14404 4.08594 0.972168 4.8125 0.925293 5.875C0.878418 6.94531 0.866699 7.28516 0.866699 10C0.866699 12.7148 0.878418 13.0547 0.925293 14.1211C0.972168 15.1836 1.14404 15.9141 1.39014 16.5469C1.64795 17.207 1.98779 17.7656 2.54639 18.3203C3.10107 18.875 3.65967 19.2188 4.31592 19.4727C4.95264 19.7188 5.6792 19.8906 6.7417 19.9375C7.80811 19.9844 8.14795 19.9961 10.8628 19.9961C13.5776 19.9961 13.9175 19.9844 14.9839 19.9375C16.0464 19.8906 16.7769 19.7188 17.4097 19.4727C18.0659 19.2188 18.6245 18.875 19.1792 18.3203C19.7339 17.7656 20.0776 17.207 20.3315 16.5508C20.5776 15.9141 20.7495 15.1875 20.7964 14.125C20.8433 13.0586 20.855 12.7188 20.855 10.0039C20.855 7.28906 20.8433 6.94922 20.7964 5.88281C20.7495 4.82031 20.5776 4.08984 20.3315 3.45703C20.0855 2.79297 19.7456 2.23438 19.187 1.67969C18.6323 1.125 18.0737 0.78125 17.4175 0.527344C16.7808 0.28125 16.0542 0.109375 14.9917 0.0625C13.9214 0.0117188 13.5815 0 10.8667 0Z"
                  fill="#FCFCFD" />
                <path
                  d="M10.8667 4.86328C8.03076 4.86328 5.72998 7.16406 5.72998 10C5.72998 12.8359 8.03076 15.1367 10.8667 15.1367C13.7026 15.1367 16.0034 12.8359 16.0034 10C16.0034 7.16406 13.7026 4.86328 10.8667 4.86328ZM10.8667 13.332C9.02686 13.332 7.53467 11.8398 7.53467 10C7.53467 8.16016 9.02686 6.66797 10.8667 6.66797C12.7065 6.66797 14.1987 8.16016 14.1987 10C14.1987 11.8398 12.7065 13.332 10.8667 13.332Z"
                  fill="#FCFCFD" />
                <path
                  d="M17.4058 4.66016C17.4058 5.32422 16.8667 5.85938 16.2065 5.85938C15.5425 5.85938 15.0073 5.32031 15.0073 4.66016C15.0073 3.99609 15.5464 3.46094 16.2065 3.46094C16.8667 3.46094 17.4058 4 17.4058 4.66016Z"
                  fill="#FCFCFD" />
              </svg>
            </a>

            <!-- Youtube -->
            <a href="https://youtube.com" target="_blank" aria-label="Youtube"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.6675 4.00006C20.6675 4.00006 20.4722 2.62115 19.8706 2.01569C19.1089 1.21881 18.2573 1.2149 17.8667 1.16803C15.0698 0.964905 10.8706 0.964905 10.8706 0.964905H10.8628C10.8628 0.964905 6.66357 0.964905 3.8667 1.16803C3.47607 1.2149 2.62451 1.21881 1.86279 2.01569C1.26123 2.62115 1.06982 4.00006 1.06982 4.00006C1.06982 4.00006 0.866699 5.62116 0.866699 7.23834V8.75397C0.866699 10.3712 1.06592 11.9922 1.06592 11.9922C1.06592 11.9922 1.26123 13.3712 1.85889 13.9766C2.62061 14.7735 3.62061 14.7462 4.06592 14.8321C5.66748 14.9844 10.8667 15.0313 10.8667 15.0313C10.8667 15.0313 15.0698 15.0235 17.8667 14.8243C18.2573 14.7774 19.1089 14.7735 19.8706 13.9766C20.4722 13.3712 20.6675 11.9922 20.6675 11.9922C20.6675 11.9922 20.8667 10.3751 20.8667 8.75397V7.23834C20.8667 5.62116 20.6675 4.00006 20.6675 4.00006ZM8.80029 10.5938V4.97272L14.2026 7.79303L8.80029 10.5938Z"
                  fill="#FCFCFD" />
              </svg>
            </a>
        </div>
      </aside>
    </header>

    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen pb-[80px] bg-center bg-cover bg-no-repeat bg-[url('/src/assets/img/banner.jpg')] bg-blend-darken bg-black/10">
      <div class="mx-5 md:mx-[80px] flex flex-col gap-y-8 text-white">
        <!-- Teks Hero -->
        <div class="mt-[362px] mb-8">
          <h1 class="text-[32px] md:text-[44px] font-bold md:font-semibold md:w-1/2 md:leading-snug leading-[120%]">
            Beriman, Unggul dalam Prestasi,
            dan Berakhlaqul Karimah
          </h1>
        </div>

        <!-- Card News & Icons -->
        <div class="flex flex-row justify-between items-end">
          <!-- Card Content -->
          <div
            class="w-full md:w-[560px] hidden md:flex bg-[#00000040] backdrop-blur-[16px] rounded-2xl px-6 py-[62px] gap-6 shadow-lg">
            <!-- Image -->
            <div class="w-[200px] h-[160px] rounded-lg overflow-hidden shadow-md flex-none">
              <img src="@/assets/img/image-card.png" alt="Card Image" class="w-full h-full object-cover" />
            </div>

            <!-- Description Content -->
            <div class="flex flex-col justify-center gap-[10px]">
              <button class="bg-informative-light text-informative w-[89px] h-[26px] rounded-[4px] font-medium text-xs">
                Kabar Dimsa
              </button>
              <h2 class="font-bold text-xl leading-[140%]">
                MA DIMSA Mengirim 15 Santri untuk Program Mobi...
              </h2>
              <a href="#" class="text-sm inline-flex items-center gap-1">
                Lihat Detail
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Icons -->
          <div class="flex md:flex-col flex-row gap-4 mb-2 mr-4">
            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8667 10C20.8667 4.47715 16.3896 0 10.8667 0C5.34385 0 0.866699 4.47715 0.866699 10C0.866699 14.9912 4.52354 19.1283 9.3042 19.8785V12.8906H6.76514V10H9.3042V7.79688C9.3042 5.29063 10.7972 3.90625 13.0813 3.90625C14.1751 3.90625 15.3198 4.10156 15.3198 4.10156V6.5625H14.0589C12.8167 6.5625 12.4292 7.3334 12.4292 8.125V10H15.2026L14.7593 12.8906H12.4292V19.8785C17.2099 19.1283 20.8667 14.9912 20.8667 10Z"
                  fill="#FCFCFD" />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8667 1.80078C13.5386 1.80078 13.855 1.8125 14.9058 1.85937C15.8823 1.90234 16.4097 2.06641 16.7612 2.20313C17.2261 2.38281 17.562 2.60156 17.9097 2.94922C18.2612 3.30078 18.4761 3.63281 18.6558 4.09766C18.7925 4.44922 18.9565 4.98047 18.9995 5.95312C19.0464 7.00781 19.0581 7.32422 19.0581 9.99219C19.0581 12.6641 19.0464 12.9805 18.9995 14.0313C18.9565 15.0078 18.7925 15.5352 18.6558 15.8867C18.4761 16.3516 18.2573 16.6875 17.9097 17.0352C17.5581 17.3867 17.2261 17.6016 16.7612 17.7813C16.4097 17.918 15.8784 18.082 14.9058 18.125C13.8511 18.1719 13.5347 18.1836 10.8667 18.1836C8.19483 18.1836 7.87842 18.1719 6.82764 18.125C5.85108 18.082 5.32373 17.918 4.97217 17.7813C4.50732 17.6016 4.17139 17.3828 3.82373 17.0352C3.47217 16.6836 3.25732 16.3516 3.07764 15.8867C2.94092 15.5352 2.77686 15.0039 2.73389 14.0313C2.68701 12.9766 2.67529 12.6602 2.67529 9.99219C2.67529 7.32031 2.68701 7.00391 2.73389 5.95312C2.77686 4.97656 2.94092 4.44922 3.07764 4.09766C3.25732 3.63281 3.47607 3.29688 3.82373 2.94922C4.17529 2.59766 4.50732 2.38281 4.97217 2.20313C5.32373 2.06641 5.85498 1.90234 6.82764 1.85937C7.87842 1.8125 8.19483 1.80078 10.8667 1.80078ZM10.8667 0C8.15186 0 7.81201 0.0117187 6.74561 0.0585938C5.68311 0.105469 4.95264 0.277344 4.31982 0.523438C3.65967 0.78125 3.10107 1.12109 2.54639 1.67969C1.98779 2.23438 1.64795 2.79297 1.39014 3.44922C1.14404 4.08594 0.972168 4.8125 0.925293 5.875C0.878418 6.94531 0.866699 7.28516 0.866699 10C0.866699 12.7148 0.878418 13.0547 0.925293 14.1211C0.972168 15.1836 1.14404 15.9141 1.39014 16.5469C1.64795 17.207 1.98779 17.7656 2.54639 18.3203C3.10107 18.875 3.65967 19.2188 4.31592 19.4727C4.95264 19.7188 5.6792 19.8906 6.7417 19.9375C7.80811 19.9844 8.14795 19.9961 10.8628 19.9961C13.5776 19.9961 13.9175 19.9844 14.9839 19.9375C16.0464 19.8906 16.7769 19.7188 17.4097 19.4727C18.0659 19.2188 18.6245 18.875 19.1792 18.3203C19.7339 17.7656 20.0776 17.207 20.3315 16.5508C20.5776 15.9141 20.7495 15.1875 20.7964 14.125C20.8433 13.0586 20.855 12.7188 20.855 10.0039C20.855 7.28906 20.8433 6.94922 20.7964 5.88281C20.7495 4.82031 20.5776 4.08984 20.3315 3.45703C20.0855 2.79297 19.7456 2.23438 19.187 1.67969C18.6323 1.125 18.0737 0.78125 17.4175 0.527344C16.7808 0.28125 16.0542 0.109375 14.9917 0.0625C13.9214 0.0117188 13.5815 0 10.8667 0Z"
                  fill="#FCFCFD" />
                <path
                  d="M10.8667 4.86328C8.03076 4.86328 5.72998 7.16406 5.72998 10C5.72998 12.8359 8.03076 15.1367 10.8667 15.1367C13.7026 15.1367 16.0034 12.8359 16.0034 10C16.0034 7.16406 13.7026 4.86328 10.8667 4.86328ZM10.8667 13.332C9.02686 13.332 7.53467 11.8398 7.53467 10C7.53467 8.16016 9.02686 6.66797 10.8667 6.66797C12.7065 6.66797 14.1987 8.16016 14.1987 10C14.1987 11.8398 12.7065 13.332 10.8667 13.332Z"
                  fill="#FCFCFD" />
                <path
                  d="M17.4058 4.66016C17.4058 5.32422 16.8667 5.85938 16.2065 5.85938C15.5425 5.85938 15.0073 5.32031 15.0073 4.66016C15.0073 3.99609 15.5464 3.46094 16.2065 3.46094C16.8667 3.46094 17.4058 4 17.4058 4.66016Z"
                  fill="#FCFCFD" />
              </svg>
            </a>

            <!-- Youtube -->
            <a href="https://youtube.com" target="_blank" aria-label="Youtube"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.6675 4.00006C20.6675 4.00006 20.4722 2.62115 19.8706 2.01569C19.1089 1.21881 18.2573 1.2149 17.8667 1.16803C15.0698 0.964905 10.8706 0.964905 10.8706 0.964905H10.8628C10.8628 0.964905 6.66357 0.964905 3.8667 1.16803C3.47607 1.2149 2.62451 1.21881 1.86279 2.01569C1.26123 2.62115 1.06982 4.00006 1.06982 4.00006C1.06982 4.00006 0.866699 5.62116 0.866699 7.23834V8.75397C0.866699 10.3712 1.06592 11.9922 1.06592 11.9922C1.06592 11.9922 1.26123 13.3712 1.85889 13.9766C2.62061 14.7735 3.62061 14.7462 4.06592 14.8321C5.66748 14.9844 10.8667 15.0313 10.8667 15.0313C10.8667 15.0313 15.0698 15.0235 17.8667 14.8243C18.2573 14.7774 19.1089 14.7735 19.8706 13.9766C20.4722 13.3712 20.6675 11.9922 20.6675 11.9922C20.6675 11.9922 20.8667 10.3751 20.8667 8.75397V7.23834C20.8667 5.62116 20.6675 4.00006 20.6675 4.00006ZM8.80029 10.5938V4.97272L14.2026 7.79303L8.80029 10.5938Z"
                  fill="#FCFCFD" />
              </svg>
            </a>

            <!-- Tiktok -->
            <a href="https://tiktok.com" target="_blank" aria-label="Youtube"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.7244 4.00883C14.6453 3.30649 13.8671 2.18226 13.6239 0.872401C13.5717 0.58946 13.5426 0.297991 13.5426 0H10.0992L10.0936 13.7798C10.0359 15.3229 8.7638 16.5616 7.20488 16.5616C6.72007 16.5616 6.2639 16.4407 5.86198 16.2295C4.9406 15.7454 4.31009 14.7811 4.31009 13.6715C4.31009 12.0777 5.60878 10.7808 7.20438 10.7808C7.50229 10.7808 7.78816 10.83 8.05844 10.9143V7.40412C7.77861 7.36599 7.49426 7.34241 7.20438 7.34241C3.70974 7.34241 0.866699 10.1814 0.866699 13.6715C0.866699 15.8126 1.9378 17.7074 3.57258 18.8532C4.60198 19.5751 5.85445 20 7.20488 20C10.6995 20 13.5426 17.1611 13.5426 13.6715V6.68372C14.893 7.65144 16.5479 8.22184 18.3334 8.22184V4.7834C17.3718 4.7834 16.476 4.49796 15.7244 4.00883Z"
                  fill="white" />
              </svg>
            </a>

            <!-- Twitter -->
            <a href="https://twitter.com" target="_blank" aria-label="Youtube"
              class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.2889 0H21.6667L14.2889 8.48889L23 20H16.1556L10.8223 13.0222L4.68892 20H1.31114L9.22225 10.9333L0.866699 0H7.88892L12.7334 6.4L18.2889 0ZM17.0889 17.9556H18.9556L6.8667 1.91111H4.82225L17.0889 17.9556Z"
                  fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

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
          <p class="text-sm md:text-base text-gray-500 font-medium tracking-wide">Selayang Pandang</p>

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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-informative">760</h2>
          <p class="text-xl font-bold">Jumlah satri/peserta didik</p>
        </div>
        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-neutral-500">34</h2>
          <p class="text-xl font-medium text-neutral-500">Prestasi Akademik & Non Akademik</p>
        </div>
        <div class="flex flex-row justify-between py-10 w-full items-center border-b-2 border-neutral-300">
          <h2 class="text-[40px] font-bold text-neutral-500">56</h2>
          <p class="text-xl font-medium text-neutral-500">Tenaga Pendidik Berkualitas</p>
        </div>
      </div>

      <!-- Video -->
      <div class="w-full relative py-8 md:pt-[80px]">
        <!-- Banner Background Image -->
        <img src="@/assets/img/cover.jpg" alt="Banner Dimsa" class="w-full rounded-md object-cover" />

        <!-- Centered SVG Overlay -->
        <div class="absolute inset-0 flex justify-center items-center">
          <svg class="w-[68px] h-[68px]" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.9 0.666656C15.5 0.666656 0.566711 15.6 0.566711 34C0.566711 52.4 15.5 67.3333 33.9 67.3333C52.3 67.3333 67.2334 52.4 67.2334 34C67.2334 15.6 52.3334 0.666656 33.9 0.666656ZM43.9 41.4333L34.2334 47C33.0334 47.7 31.7 48.0333 30.4 48.0333C29.0667 48.0333 27.7667 47.7 26.5667 47C24.1667 45.6 22.7334 43.1333 22.7334 40.3333V29.1667C22.7334 26.4 24.1667 23.9 26.5667 22.5C28.9667 21.1 31.8334 21.1 34.2667 22.5L43.9334 28.0667C46.3334 29.4667 47.7667 31.9333 47.7667 34.7333C47.7667 37.5333 46.3334 40.0333 43.9 41.4333Z"
              fill="white" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Lembaga Akademik Section -->
    <section class="bg-[#F9FAFB] md:py-[100px] px-5 md:px-[120px] mb-10">
      <p class="text-gray-500 text-sm font-medium mb-8">Lembaga Akademik</p>

      <div class="grid md:grid-cols-2 gap-8 md:gap-[80px]">
        <!-- Card SMP -->
        <div class="bg-white rounded-lg md:rounded-2xl overflow-hidden">
          <img src="@/assets/img/image1.jpg" alt="SMP" class="w-full md:h-[300px] object-cover" />
          <div class="p-4 md:p-6">
            <span class="inline-block bg-[#2C3E50] text-white text-xs font-semibold px-6 py-2 rounded-md mb-2">
              SMP
            </span>
            <h3 class="text-[18px] font-semibold text-gray-800">Darul Ihsan Muhammadiyah Sragen</h3>
          </div>
        </div>

        <!-- Card MA -->
        <div class="bg-white rounded-lg md:rounded-2xl overflow-hidden">
          <img src="@/assets/img/image2.jpg" alt="MA" class="w-full md:h-[300px] object-cover" />
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
    <section class="h-full bg-[#051244] px-5 sm:px-6 md:px-8 md:px-[120px] md:py-[100px] py-10 text-white">
      <h2 class="text-base md:text-lg font-semibold mb-8 md:mb-6">Agenda DIMSA</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]  mx-auto items-center">
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
    <section class="px-5 md:px-[120px] py-10 md:py-[100px]">
      <div class="flex justify-between items-center mb-6 md:mb-[40px]">
        <h3 class="text-base md:text-[32px] font-bold text-black">Apa yang terjadi di DIMSA</h3>
        <a href="#" class="hidden md:block text-blue-600 text-base font-normal hover:underline">Selengkapnya</a>
      </div>

      <div class="flex flex-col lg:flex-row gap-[40px]">
        <!-- Berita Utama -->
        <div class="flex flex-col justify-between w-full flex-1 cursor-pointer">
          <img src="@/assets/img/image-card.png" alt="Kabar DIMSA"
            class="w-full h-full object-cover rounded-2xl mb-4" />
        <div class="flex flex-col gap-6">
          <p class="text-[10px] md:text-sm text-gray-500">Kabar Dimsa • 05 Jan, 2024</p>
            <h3 class="text-2xl font-bold text-[#080E1E] leading-snug">
              MA DIMSA Mengirim 15 Santri untuk Program Mobilitas Pelajar Internasional ke Singapura
              ...
            </h3>
          </div>
        </div>

        <!-- Berita -->
        <div class="w-full lg:w-[430px] h-[684px] flex flex-col gap-[40px]">
          <!-- Item 1 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-1.png" alt="" class="w-[200px] h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-[10px] md:text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#272727] leading-snug">
                Gemilang di Ajang FLS2N Sragen, Ananda Berhasil Raih Juara 3 dan Ba...
              </h6>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-2.png" alt="" class="w-[200px] h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-[10px] md:text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                Prestasi Gemilang! Shufina Nur Aziziyah Juara 2 di Lomba Engli...
              </h6>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-3.png" alt="" class="w-[200px] h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-sm text-gray-500">Prestasi • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                DIMSA Bawa Pulang Medali di Turnamen Tapak Suci Nasional Universi...
              </h6>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="flex flex-row-reverse md:flex-row gap-4 cursor-pointer">
            <img src="@/assets/img/berita-4.png" alt="" class="w-[200px] h-[140px] object-cover rounded-xl" />
            <div class="flex flex-col justify-center flex-1 gap-4">
              <p class="text-sm text-gray-500">Kabar Dimsa • 03 Jan, 2024</p>
              <h6 class="text-base font-bold text-[#080E1E] leading-snug">
                Selamat Menempuh Asesmen Nasional Berbasis Komputer AN...
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Testimoni Orangtua -->
    <section class="w-full px-5 md:px-8 lg:px-[120px] py-[100px] bg-white">
      <div class="flex justify-between items-center mb-[40px]">
        <h3 class="text-base md:text-[32px] font-bold text-black">Testimoni Orang Tua</h3>
        <a href="https://www.dimsa.sch.id/kabar"
          class="hidden md:block text-blue-600 text-base font-normal hover:underline">Selengkapnya</a>
      </div>

      <!-- Cards Container -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Card 1 -->
        <div class="border border-gray-200 rounded-3xl p-[56px] flex flex-col justify-between gap-4 h-full">
          <blockquote class="text-neutral-900 font-medium leading-relaxed mb-8">
            “Keberadaan DIMSA mengubah pandangan saya tentang kepemimpinan dan kerjasama. Kegiatan dan
            teman-teman di sini mendukung perkembangan diri saya, membuat saya siap menghad...”
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
    <section class="w-full bg-white px-5 py-10 lg:px-[120px] md:py-[100px]">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="grid lg:grid-cols-2 gap-6 md:h-[700px]">
          <!-- PMB -->
          <div class="relative bg-green-700 text-white rounded-xl p-6 overflow-hidden min-h-[335px]">
            <!-- MA -->
            <div class="absolute -left-54 md:-left-44 top-8 md:top-[86px] flex gap-3 md:gap-[23px]">
              <div
                class="flex justify-center items-center bg-white rounded-[10px]">
                <p class="text-center text-[#091E6F] text-xl md:text-[28px] font-semibold py-5 md:py-5 px-4 md:px-[40px]">MA Darul Ihsan Muhammadiyah</p>
              </div>
              <div class="bg-[#091E6F] text-white text-xs font-semibold py-5 px-4 rounded-[10px]">
                <img src="https://www.dimsa.sch.id/template3/image/buliding2.svg" class="aspect-square w-[32px] md:w-[64px]" />
              </div>
            </div>

            <!-- SMP -->
            <div class="absolute -right-54 md:-right-44 top-[116px] md:top-[204px] flex flex-row-reverse gap-3 md:gap-[23px]">
              <div
                class="flex justify-center items-center bg-white rounded-[10px]">
                <p class="text-center text-[#091E6F] text-xl md:text-[28px] font-semibold py-5 md:py-5 px-4 md:px-[40px]">SMP Darul Ihsan Muhammadiyah</p>
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
          <div class="relative bg-neutral-100 rounded-xl p-6 overflow-hidden min-h-[335px]">
            <!-- Teks Judul -->
            <div class="flex flex-col justify-start h-full md:ml-[50px] mt-8 md:mt-[56px]">
              <h2 class="text-5xl font-bold text-gray-900 mb-1">Ruang Literasi</h2>
              <p class="text-xl text-gray-600">Darul Ihsan Muhammadiyah Sragen</p>
            </div>

            <!-- Buku Putih -->
            <img src="@/assets/img/buku-putih.png" alt="Buku Putih"
              class="absolute rotate-[-4deg] w-[273px] h-[339px] rounded-[12px] shadow-custom"
              style="top: 369.87px; left: 182px" />

            <!-- Buku Pink -->
            <img src="@/assets/img/buku-pink.png" alt="Buku Pink"
              class="absolute rotate-[3.5deg] w-[275px] h-[340px] rounded-[12px] shadow-custom"
              style="top: 302px; left: 300.05px" />

            <!-- Buku Biru -->
            <img src="@/assets/img/buku-biiru.png" alt="Buku Biru"
              class="absolute rotate-[17deg] w-[274px] h-[340px] rounded-[12px] shadow-custom"
              style="top: 362px; left: 380.05px" />
          </div>
        </div>

        <!-- Baris Bawah: Banner Donasi Full Width -->
        <div
          class="bg-gradient-to-tr from-[#FCD13F] to-[#FBA13A] rounded-[20px] pl-[80px] pr-[40px] relative flex items-center justify-between overflow-hidden min-h-[440px]">
          <!-- KIRI -->
          <div class="flex flex-col items-start gap-4 max-w-[550px] text-left">
            <img src="@/assets/icons/lazismu.svg" alt="Lazismu" class="h-8 mb-7" />

            <h3 class="text-[32px] font-bold leading-snug mb-4">
              Salurkan Harta Terbaikmu,<br />Raih Berkah Ilahi.
            </h3>

            <button
              class="px-6 py-2 bg-black text-white text-base font-medium rounded-lg shadow hover:bg-gray-800 transition">
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

    <footer class="bg-[#080E1E] text-white pt-4">
      <div class="max-w-7xl mx-auto px-5 md:px-[72px]">
        <div class="flex flex-col lg:flex-row justify-between">
          <!-- Kiri -->
          <div class="w-full lg:w-9/12 mb-8 lg:mb-0">
            <img src="@/assets/img/logo.png" alt="" class="py-3 mb-4 w-20" />

            <!-- Informasi Kontak & Alamat -->
            <div class="flex flex-col md:flex-row gap-16">
              <!-- Kontak -->
              <div class="flex flex-col gap-[6px] w-full md:w-[259px]">
                <h5 class="text-white font-semibold mb-3">Informasi kontak</h5>
                <a href="#" class="text-[#98A2B3] flex items-center gap-2 mb-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.38028 7.85335C8.07627 9.30297 9.02506 10.6616 10.2266 11.8632C11.4282 13.0648 12.7869 14.0136 14.2365 14.7096C14.3612 14.7694 14.4235 14.7994 14.5024 14.8224C14.7828 14.9041 15.127 14.8454 15.3644 14.6754C15.4313 14.6275 15.4884 14.5704 15.6027 14.4561C15.9523 14.1064 16.1271 13.9316 16.3029 13.8174C16.9658 13.3864 17.8204 13.3864 18.4833 13.8174C18.6591 13.9316 18.8339 14.1064 19.1835 14.4561L19.3783 14.6509C19.9098 15.1824 20.1755 15.4481 20.3198 15.7335C20.6069 16.301 20.6069 16.9713 20.3198 17.5389C20.1755 17.8242 19.9098 18.09 19.3783 18.6214L19.2207 18.779C18.6911 19.3087 18.4263 19.5735 18.0662 19.7757C17.6667 20.0001 17.0462 20.1615 16.588 20.1601C16.1751 20.1589 15.8928 20.0788 15.3284 19.9186C12.295 19.0576 9.43264 17.4332 7.04466 15.0452C4.65668 12.6572 3.03221 9.79483 2.17124 6.76144C2.01103 6.19699 1.93092 5.91477 1.9297 5.50182C1.92833 5.0436 2.08969 4.42311 2.31411 4.0236C2.51636 3.66357 2.78117 3.39876 3.3108 2.86913L3.46843 2.7115C3.99987 2.18006 4.2656 1.91433 4.55098 1.76999C5.11854 1.48292 5.7888 1.48292 6.35636 1.76999C6.64174 1.91433 6.90747 2.18006 7.43891 2.7115L7.63378 2.90637C7.98338 3.25597 8.15819 3.43078 8.27247 3.60655C8.70347 4.26945 8.70347 5.12403 8.27247 5.78692C8.15819 5.96269 7.98338 6.1375 7.63378 6.4871C7.51947 6.60142 7.46231 6.65857 7.41447 6.72538C7.24446 6.96281 7.18576 7.30707 7.26748 7.58743C7.29048 7.66632 7.32041 7.72866 7.38028 7.85335Z"
                      stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  0822 9822 2200 (Call Center)
                </a>
                <a href="#" class="text-[#98A2B3] flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.744 2.63346L20.272 7.52667C20.538 7.69957 20.671 7.78602 20.7674 7.90134C20.8527 8.00342 20.9167 8.12149 20.9558 8.24865C21 8.39229 21 8.55092 21 8.86818V16.1999C21 17.88 21 18.7201 20.673 19.3619C20.3854 19.9263 19.9265 20.3853 19.362 20.6729C18.7202 20.9999 17.8802 20.9999 16.2 20.9999H5.8C4.11984 20.9999 3.27976 20.9999 2.63803 20.6729C2.07354 20.3853 1.6146 19.9263 1.32698 19.3619C1 18.7201 1 17.88 1 16.1999V8.86818C1 8.55092 1 8.39229 1.04417 8.24865C1.08327 8.12149 1.14735 8.00342 1.23265 7.90134C1.32901 7.78602 1.46201 7.69957 1.72802 7.52667L9.25604 2.63346M12.744 2.63346C12.1127 2.22315 11.7971 2.01799 11.457 1.93817C11.1564 1.86761 10.8436 1.86761 10.543 1.93817C10.2029 2.01799 9.88728 2.22315 9.25604 2.63346M12.744 2.63346L18.9361 6.65837C19.624 7.10547 19.9679 7.32902 20.087 7.61252C20.1911 7.86027 20.1911 8.13949 20.087 8.38724C19.9679 8.67074 19.624 8.89429 18.9361 9.34139L12.744 13.3663C12.1127 13.7766 11.7971 13.9818 11.457 14.0616C11.1564 14.1321 10.8436 14.1321 10.543 14.0616C10.2029 13.9818 9.88728 13.7766 9.25604 13.3663L3.06386 9.34139C2.37601 8.89429 2.03209 8.67074 1.91297 8.38724C1.80888 8.13949 1.80888 7.86027 1.91297 7.61252C2.03209 7.32902 2.37601 7.10547 3.06386 6.65837L9.25604 2.63346M20.5 18.9999L13.8572 12.9999M8.14282 12.9999L1.5 18.9999"
                      stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  pondokdarulihsan@gmail.com
                </a>
              </div>

              <!-- Alamat -->
              <div class="w-full md:w-1/2">
                <h5 class="text-white font-semibold mb-3">Alamat</h5>
                <p class="text-[#98A2B3] flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z"
                      stroke="#98A2B3" stroke-width="1.5" />
                    <path
                      d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                      stroke="#98A2B3" stroke-width="1.5" />
                  </svg>

                  Karang Tengah, Kabupaten Sragen, Jawa Tengah
                </p>
              </div>
            </div>
          </div>

          <!-- Kanan: Sosial Media -->
          <div class="w-full lg:w-3/12">
            <h5 class="text-white font-semibold pt-3">Sosial media</h5>
            <div class="flex gap-4 my-4 mb-5 flex-wrap">
              <!-- Icons -->
              <a href="https://www.facebook.com/profile.php?id=100006142277425" target="_blank" class="p-0">
                <div class="rounded-full border border-white p-2 flex items-center justify-center shadow-md">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.8667 10C20.8667 4.47715 16.3896 0 10.8667 0C5.34385 0 0.866699 4.47715 0.866699 10C0.866699 14.9912 4.52354 19.1283 9.3042 19.8785V12.8906H6.76514V10H9.3042V7.79688C9.3042 5.29063 10.7972 3.90625 13.0813 3.90625C14.1751 3.90625 15.3198 4.10156 15.3198 4.10156V6.5625H14.0589C12.8167 6.5625 12.4292 7.3334 12.4292 8.125V10H15.2026L14.7593 12.8906H12.4292V19.8785C17.2099 19.1283 20.8667 14.9912 20.8667 10Z"
                      fill="#FCFCFD" />
                  </svg>
                </div>
              </a>
              <a href="https://www.instagram.com/" target="_blank" class="p-0">
                <div class="rounded-full border border-white p-2 flex items-center justify-center shadow-md">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8667 1.80078C13.5386 1.80078 13.855 1.8125 14.9058 1.85937C15.8823 1.90234 16.4097 2.06641 16.7612 2.20313C17.2261 2.38281 17.562 2.60156 17.9097 2.94922C18.2612 3.30078 18.4761 3.63281 18.6558 4.09766C18.7925 4.44922 18.9565 4.98047 18.9995 5.95312C19.0464 7.00781 19.0581 7.32422 19.0581 9.99219C19.0581 12.6641 19.0464 12.9805 18.9995 14.0313C18.9565 15.0078 18.7925 15.5352 18.6558 15.8867C18.4761 16.3516 18.2573 16.6875 17.9097 17.0352C17.5581 17.3867 17.2261 17.6016 16.7612 17.7813C16.4097 17.918 15.8784 18.082 14.9058 18.125C13.8511 18.1719 13.5347 18.1836 10.8667 18.1836C8.19483 18.1836 7.87842 18.1719 6.82764 18.125C5.85108 18.082 5.32373 17.918 4.97217 17.7813C4.50732 17.6016 4.17139 17.3828 3.82373 17.0352C3.47217 16.6836 3.25732 16.3516 3.07764 15.8867C2.94092 15.5352 2.77686 15.0039 2.73389 14.0313C2.68701 12.9766 2.67529 12.6602 2.67529 9.99219C2.67529 7.32031 2.68701 7.00391 2.73389 5.95312C2.77686 4.97656 2.94092 4.44922 3.07764 4.09766C3.25732 3.63281 3.47607 3.29688 3.82373 2.94922C4.17529 2.59766 4.50732 2.38281 4.97217 2.20313C5.32373 2.06641 5.85498 1.90234 6.82764 1.85937C7.87842 1.8125 8.19483 1.80078 10.8667 1.80078ZM10.8667 0C8.15186 0 7.81201 0.0117187 6.74561 0.0585938C5.68311 0.105469 4.95264 0.277344 4.31982 0.523438C3.65967 0.78125 3.10107 1.12109 2.54639 1.67969C1.98779 2.23438 1.64795 2.79297 1.39014 3.44922C1.14404 4.08594 0.972168 4.8125 0.925293 5.875C0.878418 6.94531 0.866699 7.28516 0.866699 10C0.866699 12.7148 0.878418 13.0547 0.925293 14.1211C0.972168 15.1836 1.14404 15.9141 1.39014 16.5469C1.64795 17.207 1.98779 17.7656 2.54639 18.3203C3.10107 18.875 3.65967 19.2188 4.31592 19.4727C4.95264 19.7188 5.6792 19.8906 6.7417 19.9375C7.80811 19.9844 8.14795 19.9961 10.8628 19.9961C13.5776 19.9961 13.9175 19.9844 14.9839 19.9375C16.0464 19.8906 16.7769 19.7188 17.4097 19.4727C18.0659 19.2188 18.6245 18.875 19.1792 18.3203C19.7339 17.7656 20.0776 17.207 20.3315 16.5508C20.5776 15.9141 20.7495 15.1875 20.7964 14.125C20.8433 13.0586 20.855 12.7188 20.855 10.0039C20.855 7.28906 20.8433 6.94922 20.7964 5.88281C20.7495 4.82031 20.5776 4.08984 20.3315 3.45703C20.0855 2.79297 19.7456 2.23438 19.187 1.67969C18.6323 1.125 18.0737 0.78125 17.4175 0.527344C16.7808 0.28125 16.0542 0.109375 14.9917 0.0625C13.9214 0.0117188 13.5815 0 10.8667 0Z"
                      fill="#FCFCFD" />
                    <path
                      d="M10.8667 4.86328C8.03076 4.86328 5.72998 7.16406 5.72998 10C5.72998 12.8359 8.03076 15.1367 10.8667 15.1367C13.7026 15.1367 16.0034 12.8359 16.0034 10C16.0034 7.16406 13.7026 4.86328 10.8667 4.86328ZM10.8667 13.332C9.02686 13.332 7.53467 11.8398 7.53467 10C7.53467 8.16016 9.02686 6.66797 10.8667 6.66797C12.7065 6.66797 14.1987 8.16016 14.1987 10C14.1987 11.8398 12.7065 13.332 10.8667 13.332Z"
                      fill="#FCFCFD" />
                    <path
                      d="M17.4058 4.66016C17.4058 5.32422 16.8667 5.85938 16.2065 5.85938C15.5425 5.85938 15.0073 5.32031 15.0073 4.66016C15.0073 3.99609 15.5464 3.46094 16.2065 3.46094C16.8667 3.46094 17.4058 4 17.4058 4.66016Z"
                      fill="#FCFCFD" />
                  </svg>
                </div>
              </a>
              <a href="https://www.youtube.com/" target="_blank" class="p-0">
                <div class="rounded-full border border-white p-2 flex items-center justify-center shadow-md">
                  <img src="https://www.dimsa.sch.id/template3/image/icon/YouTube.svg" alt="YouTube" />
                </div>
              </a>
              <a href="https://www.tiktok.com/@dimsatv" target="_blank" class="p-0">
                <div class="rounded-full border border-white p-2 flex items-center justify-center shadow-md">
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.7244 4.00883C14.6453 3.30649 13.8671 2.18226 13.6239 0.872401C13.5717 0.58946 13.5426 0.297991 13.5426 0H10.0992L10.0936 13.7798C10.0359 15.3229 8.7638 16.5616 7.20488 16.5616C6.72007 16.5616 6.2639 16.4407 5.86198 16.2295C4.9406 15.7454 4.31009 14.7811 4.31009 13.6715C4.31009 12.0777 5.60878 10.7808 7.20438 10.7808C7.50229 10.7808 7.78816 10.83 8.05844 10.9143V7.40412C7.77861 7.36599 7.49426 7.34241 7.20438 7.34241C3.70974 7.34241 0.866699 10.1814 0.866699 13.6715C0.866699 15.8126 1.9378 17.7074 3.57258 18.8532C4.60198 19.5751 5.85445 20 7.20488 20C10.6995 20 13.5426 17.1611 13.5426 13.6715V6.68372C14.893 7.65144 16.5479 8.22184 18.3334 8.22184V4.7834C17.3718 4.7834 16.476 4.49796 15.7244 4.00883Z"
                      fill="white" />
                  </svg>
                </div>
              </a>
              <a href="https://www.x.com/" target="_blank" class="p-0">
                <div class="rounded-full border border-white p-2 flex items-center justify-center shadow-md">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.2889 0H21.6667L14.2889 8.48889L23 20H16.1556L10.8223 13.0222L4.68892 20H1.31114L9.22225 10.9333L0.866699 0H7.88892L12.7334 6.4L18.2889 0ZM17.0889 17.9556H18.9556L6.8667 1.91111H4.82225L17.0889 17.9556Z"
                      fill="white" />
                  </svg>
                </div>
              </a>
            </div>

            <!-- Tombol Kontak -->
            <a href="https://wa.me/6282298222200" target="_blank"
              class="flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-md hover:bg-gray-100 transition">
              <img src="https://www.dimsa.sch.id/template2/assets/image/whatsapp.svg" alt="WA" />
              Kontak Kami
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-[#667085] font-medium border-t border-gray-700 mt-8 py-4 text-center text-sm">
          <p class="mb-0">Copyright © 2025 | Ponpes Darul Ihsan Muhammadiyah Sragen</p>
        </div>
      </div>
    </footer>

    <div class="hidden md:fixed bottom-6 right-[80px] z-50 md:flex items-center justify-center p-2">
      <button @click="scrollToTop" class="bg-white shadow-2xl rounded-full w-[56px] h-[56px] hover:bg-gray-100"
        title="Back to Top">
        <div class="flex items-center justify-center w-full h-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.07 10.32C17.88 10.32 17.69 10.25 17.54 10.1L12 4.56L6.46 10.1C6.17 10.39 5.69 10.39 5.4 10.1C5.11 9.81 5.11 9.33 5.4 9.04L11.47 2.97C11.76 2.68 12.24 2.68 12.53 2.97L18.6 9.04C18.89 9.33 18.89 9.81 18.6 10.1C18.46 10.25 18.26 10.32 18.07 10.32Z"
              fill="black" />
            <path
              d="M12 21.25C11.59 21.25 11.25 20.91 11.25 20.5V3.66998C11.25 3.25998 11.59 2.91998 12 2.91998C12.41 2.91998 12.75 3.25998 12.75 3.66998V20.5C12.75 20.91 12.41 21.25 12 21.25Z"
              fill="black" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>