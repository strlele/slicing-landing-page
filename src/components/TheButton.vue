<template>
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
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>