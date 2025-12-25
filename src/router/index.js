import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import CobaPage from '@/views/CobaPage.vue'
// Akademik 2
import SmpPage from '@/views/akademik/SmpPage.vue'
import SmaPage from '@/views/akademik/SmaPage.vue'
import ProgramPage from '@/views/ProgramPage.vue'
import EktrakulikulerPage from '@/views/EkstraPage.vue'
// Tentang Kami 6
import SelayangPandang from '@/views/Tentang Kami/SelayangPandang.vue'
import SejarahPage from '@/views/Tentang Kami/SejarahPage.vue'
import VisimisiPage from '@/views/Tentang Kami/VisimisiPage.vue'
import StrukturPage from '@/views/Tentang Kami/StrukturPage.vue'
import AkreditasPage from '@/views/Tentang Kami/AkreditasPage.vue'
import LogoPage from '@/views/Tentang Kami/LogoPage.vue'
// Berita 9
import DetailPage from '@/views/berita/DetailPage.vue'
import DataalumniPage from '@/views/berita/DataalumniPage.vue'
import GaleriPage from '@/views/berita/GaleriPage.vue'
import VideoberitaPage from '@/views/berita/VideoberitaPage.vue'
import PengumumanPage from '@/views/berita/PengumumanPage.vue'
import MajalahPage from '@/views/berita/MajalahPage.vue'
import QnaPage from '@/views/berita/QnaPage.vue'
import TestimoniPage from '@/views/berita/TestimoniPage.vue'
import LowonganPage from '@/views/berita/LowonganPage.vue'
// Fasilitas 2
import SaranaPage from '@/views/fasilitas/SaranaPage.vue'
import TatatertibPage from '@/views/fasilitas/TatatertibPage.vue'
// Pimpinan 5
import DetailpimpinanPage from '@/views/pimpinan/DpimpinanPage.vue'
import Elsedetalpimpinan from '@/views/pimpinan/Notfound.vue'
import GurustaffPage from '@/views/pimpinan/GurustaffPage.vue'
import PengasuhPage from '@/views/pimpinan/PengasuhPage.vue'
import PimpinanPage from '@/views/pimpinan/PimpinanPage.vue'
// CMS
import SlideshowPage from '@/views/admin/SlideshowPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/coba',
      name: 'coba',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CobaPage.vue'),
    },

    // CMS
    // Slideshow
    {
      path: '/admin/slideshow',
      name: 'Slideshow',

      component: () => import('../views/admin/SlideshowPage.vue'),
    },

    // AKADEMIK DIMSA
    {
      path: '/akademik/smp',
      name: 'smp',
      component: () => import('../views/akademik/SmpPage.vue'),
    },
    {
      path: '/akademik/sma',
      name: 'sma',
      component: () => import('../views/akademik/SmaPage.vue'),
    },

    // TENTANG KAMI
    {
      path: '/ekstra',
      name: 'ekstrakurikuler',
      component: () => import('../views/EkstraPage.vue'),
    },

    {
      path: '/selayang-pandang',
      name: 'Selayang Pandang',
      component: () => import('../views/Tentang Kami/SelayangPandang.vue'),
    },
    {
      path: '/sejarah',
      name: 'Sejarah',
      component: () => import('../views/Tentang Kami/SejarahPage.vue'),
    },
    {
      path: '/visi-misi',
      name: 'Visi & Misi',
      component: () => import('../views/Tentang Kami/VisimisiPage.vue'),
    },
    {
      path: '/struktur-organisasi',
      name: 'Struktur Organisasi',
      component: () => import('../views/Tentang Kami/StrukturPage.vue'),
    },
    {
      path: '/akreditas',
      name: 'Akreditas',
      component: () => import('../views/Tentang Kami/AkreditasPage.vue'),
    },
    {
      path: '/logo',
      name: 'Logo',
      component: () => import('../views/Tentang Kami/LogoPage.vue'),
    },

    // FASILITAS
    {
      path: '/sarana',
      name: 'Sarana Prasarasana',
      component: () => import('../views/fasilitas/SaranaPage.vue'),
    },
    {
      path: '/tata-tertib',
      name: 'Tata Tertib',
      component: () => import('../views/fasilitas/TatatertibPage.vue'),
    },

    // FASILITAS
    // Detail Pimpinan
    {
      path: '/detail-pimpinan',
      name: 'Detail Pimpinan',
      component: () => import('../views/pimpinan/DpimpinanPage.vue'),
    },
    // Else
    {
      path: '/else-pim',
      name: 'Detail Pimpinan Else',
      component: () => import('../views/pimpinan/Notfound.vue'),
    },

    // Guru Staff
    {
      path: '/guru-staff',
      name: 'Guru dan Staff',
      component: () => import('../views/pimpinan/GurustaffPage.vue'),
    },

    // Pengasuh
    {
      path: '/pengasuh',
      name: 'Pengasuh Page',
      component: () => import('../views/pimpinan/PengasuhPage.vue'),
    },

    // Pimpinan
    {
      path: '/pimpinan',
      name: 'Pimpinan Page',
      component: () => import('../views/pimpinan/PimpinanPage.vue'),
    },

    // BERITA
    {
      path: '/detail-berita/:slug',
      name: 'Detail Berita',
      component: () => import('../views/berita/DetailPage.vue'),
    },

    {
      path: '/galeri-berita',
      name: 'Galeri',
      component: () => import('../views/berita/GaleriPage.vue'),
    },
    {
      path: '/video-berita',
      name: 'Video Berita',
      component: () => import('../views/berita/VideoberitaPage.vue'),
    },
    {
      path: '/pengumuman',
      name: 'Pengumuman Berita',
      component: () => import('../views/berita/PengumumanPage.vue'),
    },
    {
      path: '/qna',
      name: 'QnA',
      component: () => import('../views/berita/QnaPage.vue'),
    },
    {
      path: '/majalah',
      name: 'Majalah Berita',
      component: () => import('../views/berita/MajalahPage.vue'),
    },
    {
      path: '/testimoni',
      name: 'Testimoni',
      component: () => import('../views/berita/TestimoniPage.vue'),
    },
    {
      path: '/lowongan',
      name: 'Lowongan',
      component: () => import('../views/berita/LowonganPage.vue'),
    },
    {
      path: '/alumni',
      name: 'Data Alumni',
      component: () => import('../views/berita/DataalumniPage.vue'),
    },

    // PROGRAM AKADEMIK
    // Kurikulum
    {
      path: '/program-kurikulum',
      name: 'Kurikulum',
      component: ProgramPage,
      props: {
        title: 'Program Kurikulum',
        image: '/src/assets/img/kurikulum.jpg',
      },
    },
    // Tahfidz
    {
      path: '/program-tahfidz',
      name: 'Tahfidz',
      component: ProgramPage,
      props: {
        title: 'Program Tahfidz',
        image: '/src/assets/img/tahfidz.jpg',
      },
    },
    // Bahasa
    {
      path: '/program-bahasa',
      name: 'Bahasa',
      component: ProgramPage,
      props: {
        title: 'Program Bahasa',
        image: '/src/assets/img/bahasa.jpg',
      },
    },
    // Unggulan
    {
      path: '/program-unggulan',
      name: 'Program Unggulan',
      component: ProgramPage,
      props: {
        title: 'Program Unggulan',
        image: '/src/assets/img/program-it.jpg',
      },
    },
  ],
})

export default router
