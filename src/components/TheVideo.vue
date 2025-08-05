<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

let player = null
const hasPlayed = ref(false)
const videoContainer = ref(null)

function playVideo() {
  if (player) {
    player.playVideo()
    hasPlayed.value = true
  }
}

function onYouTubeIframeAPIReady() {
  player = new window.YT.Player('player', {
    videoId: 'U25Nbeyfn8A',
    events: {
      onReady: () => {
        observeVisibility()
      }
    },
    playerVars: {
      rel: 0,
      modestbranding: 1,
      autoplay: 0, 
      controls: 1
    }
  })
}

function observeVisibility() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && player && hasPlayed.value) {
        player.pauseVideo()
      }
    })
  }, { threshold: 0.5 })

  observer.observe(videoContainer.value)
}

function loadYouTubeAPI() {
  if (!window.YT) {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
  } else {
    onYouTubeIframeAPIReady()
  }
}

onMounted(() => {
  loadYouTubeAPI()
})

onBeforeUnmount(() => {
  if (player) player.destroy()
})
</script>

<template>
    <div class="w-full">
        <!-- Video Container -->
        <div class="w-full aspect-video relative" ref="videoContainer">
          <div id="player" class="w-full h-full rounded-lg shadow-lg"></div>

          <!-- Tombol Play Manual -->
          <button v-if="!hasPlayed" @click="playVideo"
            class="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
            <svg class="w-[68px] h-[68px]" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.9 0.666656C15.5 0.666656 0.566711 15.6 0.566711 34C0.566711 52.4 15.5 67.3333 33.9 67.3333C52.3 67.3333 67.2334 52.4 67.2334 34C67.2334 15.6 52.3334 0.666656 33.9 0.666656ZM43.9 41.4333L34.2334 47C33.0334 47.7 31.7 48.0333 30.4 48.0333C29.0667 48.0333 27.7667 47.7 26.5667 47C24.1667 45.6 22.7334 43.1333 22.7334 40.3333V29.1667C22.7334 26.4 24.1667 23.9 26.5667 22.5C28.9667 21.1 31.8334 21.1 34.2667 22.5L43.9334 28.0667C46.3334 29.4667 47.7667 31.9333 47.7667 34.7333C47.7667 37.5333 46.3334 40.0333 43.9 41.4333Z"
                fill="white" />
            </svg>
          </button>
        </div>
      </div>
</template>