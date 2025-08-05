<template>
    <!-- Navbar -->
    <TheNavbar />
    <!-- Hero Section -->
    <section class="relative h-[500px] bg-cover bg-center text-white bg-[url('/src/assets/img/lowongan.jpg')]">
        <div class="absolute inset-0"></div>
        <div
            class="absolute bottom-0 left-0 right-0 px-6 md:px-[80px] pb-[80px] flex flex-col gap-10 items-start text-white">
            <h1 class="text-[32px] md:text-[44px] font-bold text-white">Lowongan</h1>
        </div>
    </section>

    <section class="px-5 lg:px-[120px] py-12 flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
            <!-- Card -->
            <div class="flex flex-col gap-4 items-start border border-neutral-300 p-4 rounded-2xl">
                <span class="text-neutral-500 text-xs">Rilis 3 hari yang lalu</span>
                <h3 class="font-bold text-2xl text-[#051244]">Guru Mapel Matematika</h3>
                <p class="font-normal text-sm text-[#051244]">
                    Kami membuka kesempatan bagi Anda yang berdedikasi dalam dunia pendidikan untuk bergab...
                </p>
                <button class="text-succes font-medium text-sme leading-[16px] p-4">Detail Lowongan</button>
            </div>
            <div class="flex flex-col gap-4 items-start border border-neutral-300 p-4 rounded-2xl">
                <span class="text-neutral-500 text-xs">Rilis 3 hari yang lalu</span>
                <h3 class="font-bold text-2xl text-[#051244]">Guru Mapel Matematika</h3>
                <p class="font-normal text-sm text-[#051244]">
                    Kami sedang mencari Office Boy yang rajin, jujur, dan bertanggung jawab untuk membantu
                    operas...
                </p>
                <button class="text-succes font-medium text-base leading-[16px] p-4">
                    Detail Lowongan
                </button>
            </div>
        </div>

        <div class="border-t border-neutral-300">
            <div class="pt-6">
                <div class="flex gap-4 py-[3px]">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                fill="#D0D5DD" />
                            <path
                                d="M13.2619 16.2802C13.0719 16.2802 12.8819 16.2102 12.7319 16.0602L9.20188 12.5302C8.91188 12.2402 8.91188 11.7602 9.20188 11.4702L12.7319 7.94016C13.0219 7.65016 13.5019 7.65016 13.7919 7.94016C14.0819 8.23016 14.0819 8.71016 13.7919 9.00016L10.7919 12.0002L13.7919 15.0002C14.0819 15.2902 14.0819 15.7702 13.7919 16.0602C13.6519 16.2102 13.4619 16.2802 13.2619 16.2802Z"
                                fill="#D0D5DD" />
                        </svg>
                    </button>

                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                fill="#D0D5DD" />
                            <path
                                d="M10.7397 16.2802C10.5497 16.2802 10.3597 16.2102 10.2097 16.0602C9.91969 15.7702 9.91969 15.2902 10.2097 15.0002L13.2097 12.0002L10.2097 9.00016C9.91969 8.71016 9.91969 8.23016 10.2097 7.94016C10.4997 7.65016 10.9797 7.65016 11.2697 7.94016L14.7997 11.4702C15.0897 11.7602 15.0897 12.2402 14.7997 12.5302L11.2697 16.0602C11.1197 16.2102 10.9297 16.2802 10.7397 16.2802Z"
                                fill="#D0D5DD" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <TheFooter />
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
