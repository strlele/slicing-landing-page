<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheCTA from '@/components/TheCTA.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>

<template>
  <div class="overflow-hidden">
    <!-- HERO SECTION -->
    <TheNavbar />
    <section
      class="relative min-h-screen h-[100vh] bg-center bg-cover bg-no-repeat bg-[url('/src/assets/img/ma-dimsa.jpg')] bg-black/30 bg-blend-darken">
      <!-- Kontainer utama (di bagian bawah) -->
      <div
        class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex justify-between items-end text-white">
        <!-- Header -->
        <div class="w-10/12">
          <h1 class="flex flex-col text-2xl md:text-4xl font-medium leading-snug">
            <span class="hidden md:inline-block">Gabung di</span>
            MA Darul Ihsan Muhammadiyah Sragen 
            <span class="hidden md:inline-block">Sekarang!</span>
          </h1>
        </div>

        <!-- Icon -->
        <div class="hidden md:flex flex-col gap-3 items-end">
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
      </div>
    </section>

    <!-- ABOUT -->
    <section class="w-full px-5 py-10 md:px-30 md:py-25 bg-white">
      <div class="flex flex-col md:flex-row gap-8 md:gap-[120px]">
        <h2 class="text-xl md:text-[32px] text-black font-bold tracking-wide">
          MA Darul Ihsan <br> Muhammadiyah Sragen
        </h2>

        <!-- Right Side: Heading & Text -->
        <div class="flex flex-col gap-10 items-start flex-1">
          <div class="flex flex-col items-start gap-3 md:gap-5">
            <h2 class="text-base md:text-[32px] font-bold text-[#101828] leading-snug">
              Tentang
            </h2>
            <p class="text-[#475467] text-sm md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="text-[#475467] text-sm md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <div class="flex flex-col items-start gap-3 md:gap-5">
            <h2 class="text-base md:text-[32px] font-bold text-gray-900 leading-snug">
              Visi & Misi
            </h2>
            <p class="text-[#475467] text-sm md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <TheCTA class="md:hidden block"></TheCTA>

    <!-- FOOTER -->
    <TheFooter />
  </div>
</template>