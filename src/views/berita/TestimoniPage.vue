<template>
  <!-- Navbar -->
  <TheNavbar />
  <!-- Hero Section -->
  <section class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/pengumuman.jpg')]">
    <div class="absolute inset-0 bg-black/40"></div>
    <div
      class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
      <h1 class="text-[32px] md:text-[44px] font-bold text-white">Testimoni</h1>
    </div>
  </section>

  <!-- Konten Testimoni -->
  <div class="px-5 md:px-[120px] py-10 md:py-20 flex flex-col gap-10">
      <h2 class="font-bold text-lg md:text-2xl">Cerita mereka tentang dimsa</h2>
    <div class="flex flex-col gap-10">
      <p class="text-base md:text-xl font-normal md:font-medium text-[#182856] leading-relaxed">
        "{{ testimonials[currentIndex].text }}"
      </p>

      <!-- Profile Testimoni -->
      <div class="flex items-center gap-3 ">
        <img :src="testimonials[currentIndex].image" class="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full object-cover" alt="Nina" />
        <div class="flex flex-col">
          <span class="text-base md:text-xl font-medium text-black">{{ testimonials[currentIndex].name }}</span>
          <span class="text-sm md:text-base text-neutral-500">{{ testimonials[currentIndex].status }}</span>
        </div>
      </div>
    </div>

    <button @click="nextTestimonial" 
    class="pt-7 border-t border-neutral-300 flex flex-row justify-between">
      <span class="font-bold text-xl md:text-2xl">{{ testimonials[currentIndex].buttonLabel }}</span>
      <img src="@/assets/icons/arrow-right.svg" alt="Panah Kanan" class="w-4 h-4" />
    </button>

    <!-- <button @click="prevTestimonial" 
    class="pt-7 border-t border-neutral-300 flex flex-row justify-between">
    <img src="@/assets/icons/arrow-left.svg" alt="Panah Kanan" class="w-4 h-4" />
      <span class="font-bold text-">Sebelumnya</span>
    </button> -->

  </div>

  <!-- Footer -->
  <TheFooter />
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

import { ref } from 'vue'

const testimonials = [
  {
    name: "Fahmi Setiawan",
    status: "Wali Siswa",
    text: "Keberadaan DIMSA mengubah pandangan saya tentang kepemimpinan dan kerjasama. Kegiatan dan teman-teman di sini mendukung perkembangan diri saya, membuat saya siap menghadapi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/src/assets/img/profile.jpg",
    buttonLabel: 'Selanjutnya'
  },
  {
    name: "Nina Nuraini",
    status: "Wali Siswa",
    text: "Keberadaan DIMSA mengubah pandangan saya tentang kepemimpinan dan kerjasama. Kegiatan dan teman-teman di sini mendukung perkembangan diri saya, membuat saya siap menghadapi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/src/assets/img/profile2.jpg",
    buttonLabel: 'Sebelumnya'
  },
]

const currentIndex = ref(0)

function nextTestimonial() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prevTestimonial() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>
