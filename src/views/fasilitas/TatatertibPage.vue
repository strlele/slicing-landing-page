<script setup>
import TheNavblue from '@/components/TheNavblue.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- NAVBAR -->
  <TheNavblue />

  <div class="px-5 pb-10 pt-9 md:px-[120px] md:pt-[52px]">
    <h2 class="text-2xl md:text-[40px] font-bold">Panduan Tata Tertib</h2>
  </div>

  <section class="px-5 lg:px-[120px] pb-10 md:pb-[100px]">
     <div class="min-w-full hidden md:block">
        <img src="@/assets/img/tata-tertib.png" alt="Tata Tertib Desktop" class="w-full h-auto object-cover"/>
    </div>
     <div class="min-w-full md:hidden block">
        <img src="@/assets/img/tata-tertib-mobile.png" alt="Tata Tertib Desktop" class="w-full h-auto object-cover"/>
    </div>
  </section>


  <!-- FOOTER -->
  <TheFooter />

</template>