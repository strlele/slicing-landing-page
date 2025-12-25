<template>
  <section
    class="relative min-h-screen pb-[80px] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/10"
    :style="{
      backgroundImage: currentSlide
        ? `url(http://127.0.0.1:8000/storage/${currentSlide.image})`
        : `url(/src/assets/img/banner.jpg)`,
    }"
  >
    <div class="mx-5 md:mx-[80px] flex flex-col gap-y-8 text-white">
      <!-- Teks Hero -->
      <div class="mt-[362px] mb-8">
        <h1
          class="text-[32px] md:text-[44px] font-bold md:font-semibold md:w-1/2 md:leading-snug leading-[120%]"
        >
          {{
            currentSlide
              ? currentSlide.headline
              : 'Beriman, Unggul dalam Prestasi, dan Berakhlaqul Karimah'
          }}
        </h1>
      </div>

      <!-- Card News & Icons -->
      <div class="flex flex-row justify-between items-end">
        <!-- Card Content -->
        <div
          class="w-full md:w-[560px] hidden md:flex bg-[#00000040] backdrop-blur-[16px] rounded-2xl px-6 py-[62px] gap-6 shadow-lg"
        >
          <!-- Image -->
          <div class="w-[200px] h-[160px] rounded-lg overflow-hidden shadow-md flex-none">
            <img
              src="@/assets/img/image-card.png"
              alt="Card Image"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Description Content -->
          <div class="flex flex-col justify-center gap-[10px]">
            <button
              class="bg-informative-light text-informative w-[89px] h-[26px] rounded-[4px] font-medium text-xs"
            >
              Kabar Dimsa
            </button>
            <h2 class="font-bold text-xl leading-[140%]">
              MA DIMSA Mengirim 15 Santri untuk Program Mobi...
            </h2>
            <a href="#" class="text-sm inline-flex items-center gap-1">
              Lihat Detail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Icons -->
        <div class="flex md:flex-col flex-row gap-4 mb-2 mr-4">
          <!-- Facebook -->
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8667 10C20.8667 4.47715 16.3896 0 10.8667 0C5.34385 0 0.866699 4.47715 0.866699 10C0.866699 14.9912 4.52354 19.1283 9.3042 19.8785V12.8906H6.76514V10H9.3042V7.79688C9.3042 5.29063 10.7972 3.90625 13.0813 3.90625C14.1751 3.90625 15.3198 4.10156 15.3198 4.10156V6.5625H14.0589C12.8167 6.5625 12.4292 7.3334 12.4292 8.125V10H15.2026L14.7593 12.8906H12.4292V19.8785C17.2099 19.1283 20.8667 14.9912 20.8667 10Z"
                fill="#FCFCFD"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8667 1.80078C13.5386 1.80078 13.855 1.8125 14.9058 1.85937C15.8823 1.90234 16.4097 2.06641 16.7612 2.20313C17.2261 2.38281 17.562 2.60156 17.9097 2.94922C18.2612 3.30078 18.4761 3.63281 18.6558 4.09766C18.7925 4.44922 18.9565 4.98047 18.9995 5.95312C19.0464 7.00781 19.0581 7.32422 19.0581 9.99219C19.0581 12.6641 19.0464 12.9805 18.9995 14.0313C18.9565 15.0078 18.7925 15.5352 18.6558 15.8867C18.4761 16.3516 18.2573 16.6875 17.9097 17.0352C17.5581 17.3867 17.2261 17.6016 16.7612 17.7813C16.4097 17.918 15.8784 18.082 14.9058 18.125C13.8511 18.1719 13.5347 18.1836 10.8667 18.1836C8.19483 18.1836 7.87842 18.1719 6.82764 18.125C5.85108 18.082 5.32373 17.918 4.97217 17.7813C4.50732 17.6016 4.17139 17.3828 3.82373 17.0352C3.47217 16.6836 3.25732 16.3516 3.07764 15.8867C2.94092 15.5352 2.77686 15.0039 2.73389 14.0313C2.68701 12.9766 2.67529 12.6602 2.67529 9.99219C2.67529 7.32031 2.68701 7.00391 2.73389 5.95312C2.77686 4.97656 2.94092 4.44922 3.07764 4.09766C3.25732 3.63281 3.47607 3.29688 3.82373 2.94922C4.17529 2.59766 4.50732 2.38281 4.97217 2.20313C5.32373 2.06641 5.85498 1.90234 6.82764 1.85937C7.87842 1.8125 8.19483 1.80078 10.8667 1.80078ZM10.8667 0C8.15186 0 7.81201 0.0117187 6.74561 0.0585938C5.68311 0.105469 4.95264 0.277344 4.31982 0.523438C3.65967 0.78125 3.10107 1.12109 2.54639 1.67969C1.98779 2.23438 1.64795 2.79297 1.39014 3.44922C1.14404 4.08594 0.972168 4.8125 0.925293 5.875C0.878418 6.94531 0.866699 7.28516 0.866699 10C0.866699 12.7148 0.878418 13.0547 0.925293 14.1211C0.972168 15.1836 1.14404 15.9141 1.39014 16.5469C1.64795 17.207 1.98779 17.7656 2.54639 18.3203C3.10107 18.875 3.65967 19.2188 4.31592 19.4727C4.95264 19.7188 5.6792 19.8906 6.7417 19.9375C7.80811 19.9844 8.14795 19.9961 10.8628 19.9961C13.5776 19.9961 13.9175 19.9844 14.9839 19.9375C16.0464 19.8906 16.7769 19.7188 17.4097 19.4727C18.0659 19.2188 18.6245 18.875 19.1792 18.3203C19.7339 17.7656 20.0776 17.207 20.3315 16.5508C20.5776 15.9141 20.7495 15.1875 20.7964 14.125C20.8433 13.0586 20.855 12.7188 20.855 10.0039C20.855 7.28906 20.8433 6.94922 20.7964 5.88281C20.7495 4.82031 20.5776 4.08984 20.3315 3.45703C20.0855 2.79297 19.7456 2.23438 19.187 1.67969C18.6323 1.125 18.0737 0.78125 17.4175 0.527344C16.7808 0.28125 16.0542 0.109375 14.9917 0.0625C13.9214 0.0117188 13.5815 0 10.8667 0Z"
                fill="#FCFCFD"
              />
              <path
                d="M10.8667 4.86328C8.03076 4.86328 5.72998 7.16406 5.72998 10C5.72998 12.8359 8.03076 15.1367 10.8667 15.1367C13.7026 15.1367 16.0034 12.8359 16.0034 10C16.0034 7.16406 13.7026 4.86328 10.8667 4.86328ZM10.8667 13.332C9.02686 13.332 7.53467 11.8398 7.53467 10C7.53467 8.16016 9.02686 6.66797 10.8667 6.66797C12.7065 6.66797 14.1987 8.16016 14.1987 10C14.1987 11.8398 12.7065 13.332 10.8667 13.332Z"
                fill="#FCFCFD"
              />
              <path
                d="M17.4058 4.66016C17.4058 5.32422 16.8667 5.85938 16.2065 5.85938C15.5425 5.85938 15.0073 5.32031 15.0073 4.66016C15.0073 3.99609 15.5464 3.46094 16.2065 3.46094C16.8667 3.46094 17.4058 4 17.4058 4.66016Z"
                fill="#FCFCFD"
              />
            </svg>
          </a>

          <!-- Youtube -->
          <a
            href="https://youtube.com"
            target="_blank"
            aria-label="Youtube"
            class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition"
          >
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6675 4.00006C20.6675 4.00006 20.4722 2.62115 19.8706 2.01569C19.1089 1.21881 18.2573 1.2149 17.8667 1.16803C15.0698 0.964905 10.8706 0.964905 10.8706 0.964905H10.8628C10.8628 0.964905 6.66357 0.964905 3.8667 1.16803C3.47607 1.2149 2.62451 1.21881 1.86279 2.01569C1.26123 2.62115 1.06982 4.00006 1.06982 4.00006C1.06982 4.00006 0.866699 5.62116 0.866699 7.23834V8.75397C0.866699 10.3712 1.06592 11.9922 1.06592 11.9922C1.06592 11.9922 1.26123 13.3712 1.85889 13.9766C2.62061 14.7735 3.62061 14.7462 4.06592 14.8321C5.66748 14.9844 10.8667 15.0313 10.8667 15.0313C10.8667 15.0313 15.0698 15.0235 17.8667 14.8243C18.2573 14.7774 19.1089 14.7735 19.8706 13.9766C20.4722 13.3712 20.6675 11.9922 20.6675 11.9922C20.6675 11.9922 20.8667 10.3751 20.8667 8.75397V7.23834C20.8667 5.62116 20.6675 4.00006 20.6675 4.00006ZM8.80029 10.5938V4.97272L14.2026 7.79303L8.80029 10.5938Z"
                fill="#FCFCFD"
              />
            </svg>
          </a>

          <!-- TikTok -->
          <a
            href="https://tiktok.com"
            target="_blank"
            aria-label="Tiktok"
            class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition"
          >
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7244 4.00883C14.6453 3.30649 13.8671 2.18226 13.6239 0.872401C13.5717 0.58946 13.5426 0.297991 13.5426 0H10.0992L10.0936 13.7798C10.0359 15.3229 8.7638 16.5616 7.20488 16.5616C6.72007 16.5616 6.2639 16.4407 5.86198 16.2295C4.9406 15.7454 4.31009 14.7811 4.31009 13.6715C4.31009 12.0777 5.60878 10.7808 7.20438 10.7808C7.50229 10.7808 7.78816 10.83 8.05844 10.9143V7.40412C7.77861 7.36599 7.49426 7.34241 7.20438 7.34241C3.70974 7.34241 0.866699 10.1814 0.866699 13.6715C0.866699 15.8126 1.9378 17.7074 3.57258 18.8532C4.60198 19.5751 5.85445 20 7.20488 20C10.6995 20 13.5426 17.1611 13.5426 13.6715V6.68372C14.893 7.65144 16.5479 8.22184 18.3334 8.22184V4.7834C17.3718 4.7834 16.476 4.49796 15.7244 4.00883Z"
                fill="white"
              />
            </svg>
          </a>

          <!-- Twitter -->
          <a
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            class="w-[44px] h-[44px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white/10 transition"
          >
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2889 0H21.6667L14.2889 8.48889L23 20H16.1556L10.8223 13.0222L4.68892 20H1.31114L9.22225 10.9333L0.866699 0H7.88892L12.7334 6.4L18.2889 0ZM17.0889 17.9556H18.9556L6.8667 1.91111H4.82225L17.0889 17.9556Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      slides: [],
      currentIndex: 0,
      interval: null,
    }
  },
  computed: {
    currentSlide() {
      if (!this.slides.length) return null
      return this.slides[this.currentIndex % this.slides.length]
    },
  },
  methods: {
    async fetchSlides() {
      const res = await axios.get('http://127.0.0.1:8000/api/slideshows')
      this.slides = res.data.slides
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        if (this.slides.length) {
          this.currentIndex = (this.currentIndex + 1) % this.slides.length
        }
      }, 5000)
    },
    goToSlide(index) {
      this.currentIndex = index
    },
  },
  async mounted() {
    await this.fetchSlides()
    if (this.slides.length) this.startAutoSlide()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>
