<template>
  <header>
    <!-- Toggle Button Mobile -->
    <nav class="md:hidden flex flex-row justify-between items-center p-4 border-b">
      <div>
        <button @click="isSidebarOpen = !isSidebarOpen">
          <img src="https://www.dimsa.sch.id/template2/assets/image/buger-icon.svg" alt="menu" />
        </button>
      </div>

      <div>
        <a href="#">
          <img src="https://www.dimsa.sch.id/template3/image/icon/logo-sidebar.svg" alt="logo" />
        </a>
      </div>
    </nav>

    <!-- Sidebar -->
    <aside :class="[
      'fixed top-0 left-0 z-40 w-full md:w-[360px] h-screen bg-[#F9FAFB] shadow-md transform transition-transform duration-300 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0 md:shadow-none'
    ]">
      <!-- Header Sidebar -->
      <div class="flex justify-between items-center p-4 border-b-2 border-neutral-300">
        <button @click="isSidebarOpen = false">
          <img src="https://www.dimsa.sch.id/template2/assets/image/buger-icon.svg" alt="close" />
        </button>
        <a href="#">
          <img src="https://www.dimsa.sch.id/template3/image/icon/logo-sidebar.svg" alt="logo" />
        </a>
      </div>

      <!-- Isi Sidebar -->
      <div class="flex flex-col px-10 py-6 gap-6">
        <div class="py-[11px]">
          <a href="#" class="flex items-center space-x-2">
            <span>👈</span>
            <span class="text-base leading-[160%]">Kembali ke beranda</span>
          </a>
        </div>

        <ul class="flex flex-col text-base font-medium text-neutral-500">
          <li class="px-2 py-3"><a href="#" class="font-bold text-black">Selayang Pandang</a></li>
          <li class="px-2 py-3"><a href="#" class="text-gray-500 hover:text-black hover:font-bold">Sejarah Pondok</a></li>
          <li class="px-2 py-3"><a href="#" class="text-gray-500">Visi & Misi</a></li>
          <li class="px-2 py-3"><a href="#" class="text-gray-500">Struktur Organisasi</a></li>
          <li class="px-2 py-3"><a href="#" class="text-gray-500">Akreditasi</a></li>
          <li class="px-2 py-3"><a href="#" class="text-gray-500">Logo & Brand</a></li>
        </ul>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)
</script>
