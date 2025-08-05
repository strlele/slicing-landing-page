<template>
    <!-- NAVBAR -->
     <div class="hidden md:block">
        <TheNavblue />
     </div>

        <!-- Kembali Button -->
    <div class="px-5 md:px-20 pt-10 md:pt-0">
        <button class="flex gap-8 items-center py-2 font-medium text-base text-[#182856]">
            <img src="@/assets/icons/chevron_left.svg" alt="Unduh" class="w-5 h-5" />
            Kembali
        </button>
    </div>

    <section class="px-5 md:px-20 py-10 pb-10 md:pb-20">
        <!-- <button class="flex items-center py-2 font-medium text-sm text-[#182856]">
            <img src="@/assets/icons/chevron_left.svg" alt="Unduh" class="w-5 h-5" />
            Kembali
        </button> -->

        <img src="@/assets/img/image-card.png" alt="Foto Berita" class="rounded-2xl w-full">
    </section>

    <section class="px-5 md:px-[360px] pb-[100px] flex flex-col gap-6">
        <div class="flex flex-col gap-6 pb-10">
            <h3 class="font-bold text-xl md:text-[32px] text-[#272727]">MA DIMSA Mengirim 15 Santri untuk Program Mobilitas Pelajar
                Internasional ke Singapura dan Malaysia, Memperluas Wawasan dan Pengalaman Mereka</h3>
            <span class="text-sm font-medium">Admin 1 Okt, 2024</span>
            <div class="flex flex-col gap-2">
                <span class="text-[#051244] text-sm font-medium ">Bagikan ini</span>
                <div class="flex gap-2 flex-wrap">
                    <!-- Icons -->
                    <a href="https://www.facebook.com/profile.php?id=100006142277425" target="_blank">
                        <div class="rounded-full border border-black h-8 w-8 flex items-center justify-center">
                            <img src="@/assets/icons/facebook-black.svg" alt="Facebok Icon">
                        </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" class="">
                        <div class="rounded-full border border-black h-8 w-8 flex items-center justify-center">
                            <img src="@/assets/icons/instagram-black.svg" alt="Instagram Icon">
                        </div>
                    </a>
                    <a href="#" target="_blank" class="p-0">
                        <div class="rounded-full border border-black h-8 w-8 flex items-center justify-center">
                            <img src="@/assets/icons/whatsapp-black.svg" alt="WhatsApp Icon">
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <p class="text-sm md:text-lg text-black leading-[150%] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions
            of Lorem Ipsum.</p>

        <p class="text-sm md:text-lg text-black leading-[150%] font-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
            and
            going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by
            Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
            Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

        <p class="text-sm md:text-lg text-black leading-[150%] font-normal">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32
            and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H. Rackham.</p>

        <p class="text-sm md:text-lg text-black leading-[150%] font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at
            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).</p>
    </section>

    <!-- FOOTER -->
    <TheFooter />
</template>

<script setup>
import TheNavblue from '@/components/TheNavblue.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>