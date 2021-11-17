<template>
  <div class="home">
    
    <b-container fluid id="header-home" class="position-relative">
      <div class="bg-image position-absolute">
        <b-row>
          <b-col md="7" offset-md="5">
            <div class="image position-relative">
              <div class="overlay-white"></div>
              <div class="overlay-white-to-top d-md-none d-inline-block"></div>
              <img src="@/assets/image/2.jpg" class="object-fit" alt="Kavling Indah Sengon">
            </div>
          </b-col>
        </b-row>
      </div>
      <b-container class="py-5 position-relative">
        <b-row>
          <b-col md="7" class="text-start py-5">
            <div class="bg-m-primary rounded-8 px-5 py-2 mt-5 d-inline-block"></div>
            <div class="ms-4">
              <h2 class="ff-1 fw-bolder mb-4" data-aos="fade-right">Kavling Grand Sengon Purwosari Pasuruan</h2>
              <p class="ff-2 fs-6 mb-5" data-aos="fade-up">Saatnya berinvestasi property sekarang, pilihannya kavling dan ruko Grand Sengon Purwosari, Pandaan. Berlokasi Nol Jalan Kabupaten yang terhubung dengan 2 jalan propinsi Malang - Surabaya dan Pasuruan - Surabaya. Dikelilingi oleh tempat wisata dan kawasan industri di Pandaan, menjadikan Grand Sengon Purwosari sebagai pilihan terbaik. Dapatkan promo diskon selama launching. Segera hubungi kami untuk survey lokasi dan booking.</p>
              <a class="btn-m-primary mb-5" data-aos="fade-up" href="#">
                <icon :icon="icon.downIcon"/>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid id="dev-content" class="py-5 position-relative bg-light-gray">
      <img src="@/assets/image/decoration/1.png" class="decoration-dev-1"/>
      <img src="@/assets/image/decoration/2.png" class="decoration-dev-2"/>
      <b-container class="position-relative">
        <h2 class="ff-1 fw-bolder mb-3" data-aos="fade-down">Siapa Developernya ?</h2>
        <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
        <b-row class="justify-content-md-center text-start">
          <b-col md="2" class="text-center">
            <div class="icon-dev mt-4 mb-3" data-aos="fade-right">
              <icon :icon="icon.usersIcon"/>
            </div>
          </b-col>
          <b-col md="6">
            <div class="card-dev" data-aos="fade-left">
              <div class="pt-4 ps-4 bg-white rounded-16 overflow-hidden position-relative card-dev-child">
                <h4 class="ff-1 fw-bolder">Syar’i Land</h4>
                <p class="ff-2 fs-8 mb-1">Member DPS (Developer Property Syariah)</p>
                <div class="py-1 px-3 ff-2 fs-8 bg-m-primary d-inline-block rounded-8">Tersebar 600-an Project Seluruh Indonesia</div>
                <div class="note-dev ff-2 fs-8 px-4 py-3 mt-3 bg-m-primary-light">
                  Member DPS Insya allah Projeck nya Tidak Ada Yang Abal - Abal Real project real syariah
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container class="py-5 position-relative" fluid id="faq-content">
      <b-container class="py-4 position-relative">
        <b-row>
          <b-col md="7" class="text-start">
            <div class="bg-m-primary rounded-8 mb-2 px-5 py-2 d-inline-block" data-aos="fade-right"></div>
            <h2 class="fw-bolder ff-1 mb-3" data-aos="fade-right">Pertanyaan Seputar Kami</h2>
            <div class="questions">
              <div class="question py-3 px-4 mt-3 mb-2 rounded-8 border" role="button" v-for="item, index in questions" :key="index" :class="{'active': index == question}" @click="question = index, gotoAnswer()">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </b-col>
          <b-col md="5" class="text-start position-relative pt-5">
            <div class="sticky-top d-inline-block w-100" data-aos="fade-up" style="top: 100px; z-index: 50">
              <div class="card-answer p-5 rounded-16 w-100" id="answerofquestion">
                <h4 class="ff-1 fw-bolder">{{ questions[question].name }}</h4>
                <div v-if="question == 0">
                  <p class="ff-2 fs-7 mb-0">Sebelum Grand Sengon Purwosari Kita Mengembangkan Di Cepu Blora Jawa Tengah & Surabaya,Sidoarjo Jawa timur Sudah banyak yg progres bangun dan sudah serah terima kunci</p>
                </div>
                <div v-if="question == 1">
                  <p class="ff-2 fs-7 mb-0">Jl. Dsn Payaman Sukodermo Nol Jalan Raya Penghubung Surabaya - Pasuruan - Malang</p>
                </div>
                <div v-if="question == 2">
                  <p class="ff-2 fs-7 mb-0">Lokasi sangat strategis, dekat ke mana-mana</p>
                  <ul class="ff-2 fs-7 mb-0">
                    <li>Nol Jalan Raya</li>
                    <li>3 menit ke Saygon WaterPark</li>
                    <li>5 menit ke Pasar Purwosari</li>
                    <li>8 menit ke Pasar Wonorejo</li>
                    <li>15 menit ke Tol Purwodadi</li>
                    <li>20 menit ke Taman Safari</li>
                    <li>25 menit ke Tol Pandaan</li>
                    <li>Lokasi sangat strategis, dekat ke mana-mana</li>
                  </ul>
                </div>
                <div v-if="question == 3">
                  <p class="ff-2 fs-7 mb-0">Sekitar 46 unit</p>
                </div>
                <div v-if="question == 4">
                  <p class="ff-2 fs-7 mb-0">mulai LT 4 x 15 m</p>
                </div>
                <div v-if="question == 5">
                  <p class="ff-2 fs-7 mb-0">
                    <ul class="ff-2 fs-7 mb-0">
                      <li>Ruko 1 lantai Type 33</li>
                      <li>Ruko 2 lantai Type 50</li>
                      <li>Ruko 3 lantai Type 72</li>
                    </ul>
                  </p>
                </div>
                <div v-if="question == 6">
                  <p class="ff-2 fs-7 mb-0">
                    <ul class="ff-2 fs-7 mb-0">
                      <li>Harga Mulai 90 jtan Pembelian Cash Diskon 20 Jt</li>
                    </ul>
                  </p>
                </div>
                <div v-if="question == 7">
                  <p class="ff-2 fs-7 mb-0">
                    <ul class="ff-2 fs-7 mb-0">
                      <li>Harga Mulai 299 jtan Pembelian Cash Discon 100 Jt Khusus Pembeli 5 Unit Pertama</li>
                    </ul>
                  </p>
                </div>
                <div v-if="question == 8">
                  <p class="ff-2 fs-7 mb-0">
                    <ul class="ff-2 fs-7 mb-0">
                      <li>Cash / Kredit 1 tahun tanpa DP</li>
                      <li>Kredit 3 Tahun Kavling</li>
                      <li>Kredit 5 Tahun Ruko</li>
                    </ul>
                  </p>
                </div>
                <div v-if="question == 9">
                  <p class="ff-2 fs-7 mb-0">-+ 6-7 meter</p>
                </div>
                <div v-if="question == 10">
                  <p class="ff-2 fs-7 mb-0">Utara SEMUA Menghadap Jalan</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <img src="@/assets/image/decoration/faq-illustration.png" class="decoration-faq" alt="Illustration">
    </b-container>

    <b-container class="py-5" id="order-content">
      <b-container class="py-3">
        <b-row class="py-3">
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3" data-aos="fade-right">Booking Unit</h2>
            <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block" data-aos="fade-left"></div>
          </b-col>
          <b-col md="4" class="py-2" v-for="item, index in orders" :key="index">
            <div class="card-simple-1" data-aos="fade-left" @click="order = index, $bvModal.show('bv-order')">
              <div class="image">
                <img :src="require('@/assets/image/orders/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
              </div>
              <div class="body ff-2">
                {{ item.name }}
              </div>
            </div>
          </b-col>
          <b-modal id="bv-order" hide-footer hide-header centered>
            <img :src="require('@/assets/image/orders/'+ parseInt(order + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
            <h5 class="ff-1 mt-2">
              {{ orders[order].name }}
            </h5>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-order')">Tutup</b-button>
          </b-modal>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="bg-light-gray py-5 position-relative" id="comision-content">
      <img src="@/assets/image/decoration/1.png" class="decoration-dev-2" style="transform: rotate(180deg); bottom: auto; top: -70px; left: -20px!important"/>
      <b-container class="py-3 position-relative">
        <b-row>
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark" data-aos="fade-right">Penyerahan Komisi Marketing</h2>
            <div class="bg-dark rounded-8 mb-4 px-5 py-2 d-inline-block" data-aos="fade-left"></div>
          </b-col>
          <b-col md="4" class="py-2" v-for="item, index in comisions" :key="index">
            <div class="card-simple-1" data-aos="fade-right" @click="comision = index, $bvModal.show('bv-comision')">
              <div class="image">
                <img :src="require('@/assets/image/comision/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
              </div>
              <div class="body ff-2 text-start fs-7 fw-bolder bg-white">
                {{ item.name }} {{ index + 1 }}
              </div>
            </div>
          </b-col>
          <b-modal id="bv-comision" hide-footer hide-header centered>
            <img :src="require('@/assets/image/comision/'+ parseInt(comision + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
            <h5 class="ff-1 mt-2">
              {{ comisions[comision].name }} {{ comision + 1 }}
            </h5>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-comision')">Tutup</b-button>
          </b-modal>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="bg-m-primary py-5" id="design-content">
      <b-container class="py-3">
        <b-row>
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark" data-aos="fade-left">Desain Ruko</h2>
            <div class="bg-dark rounded-8 mb-4 px-5 py-2 d-inline-block" data-aos="fade-right"></div>
          </b-col>
          <b-col md="6" class="py-2" v-for="item, index in designs" :key="index">
            <div class="card-simple-1" data-aos="fade-left" @click="design = index, $bvModal.show('bv-design')">
              <div class="image">
                <img :src="require('@/assets/image/design/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
              </div>
              <div class="body ff-2">
                {{ item.name }}
              </div>
            </div>
          </b-col>
          <b-modal id="bv-design" hide-footer hide-header centered>
            <img :src="require('@/assets/image/design/'+ parseInt(design + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
            <h5 class="ff-1 mt-2">
              {{ designs[design].name }}
            </h5>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-design')">Tutup</b-button>
          </b-modal>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="position-relative py-5" id="marketing-content">
      <div class="overlay-black"></div>
      <b-container class="position-relative text-white">
        <b-row class="justify-content-md-center">
          <b-col md="5">
            <div class="py-5 mt-4 px-4 text-start">
              <h1 class="fw-bolder ff-1" data-aos="fade-right">Gathering Marketing</h1>
              <p class="ff-2" data-aos="fade-left">Bukti Gathering Marketing Grand Sengon Purwosari Gathering Marketing.</p>
            </div>
          </b-col>
          <b-col md="5">
            <div class="image" data-aos="fade-right" @click="$bvModal.show('bv-marketing')" role="button">
              <img src="@/assets/image/marketing/1.jpg" class="w-100 d-inline-block rounded-16" alt="Gathering Marketing Grand Sengon">
            </div>
            <b-modal id="bv-marketing" hide-footer hide-header centered>
              <img src="@/assets/image/marketing/1.jpg" class="object-fit" alt="Gathering Marketing Grand Sengon">
              <b-button class="mt-3" block @click="$bvModal.hide('bv-marketing')">Tutup</b-button>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="py-5 position-relative" id="location-content">
      <img src="@/assets/image/decoration/2.png" class="decoration-dev-2" style="transform: rotate(180deg); bottom: auto; top: -70px; right: 0; left: auto !important"/>
      <b-container class="py-3 position-relative">
        <b-row>
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark">Survei Lokasi</h2>
            <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
          </b-col>
          <b-col md="12" class="py-2 position-relative">
            <div class="arrows prev">
              <button class="btn" @click="slideNavigation('prev')">
                <icon :icon="icon.leftIcon"/>
              </button>
            </div>
            <div class="arrows next">
              <button class="btn" @click="slideNavigation('next')">
                <icon :icon="icon.rightIcon"/>
              </button>
            </div>
            <slick :options="locationSlider" ref="locationSlider">
              <div class="card-simple-1" @click="location = index, $bvModal.show('bv-location')" v-for="item, index in locations" :key="index">
                <div class="image">
                  <img :src="require('@/assets/image/location/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
                </div>
                <div class="body ff-2 text-start fs-7 fw-bolder bg-light-gray">
                  {{ item.name }} {{ index + 1 }}
                </div>
              </div>
            </slick>
            <b-modal id="bv-location" hide-footer hide-header centered>
              <img :src="require('@/assets/image/location/'+ parseInt(location + 1) + '.jpg')" class="object-fit" alt="Location kavling">
              <h5 class="ff-1 mt-2">
                {{ locations[location].name }} {{ location + 1 }}
              </h5>
              <b-button class="mt-3" block @click="$bvModal.hide('bv-location')">Tutup</b-button>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="bg-light-gray py-5" id="legality-content">
      <b-container class="py-3">
        <b-row>
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark">Legalitas</h2>
            <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
          </b-col>
          <b-col md="6" class="py-2" v-for="item, index in 2" :key="index">
            <div class="card-simple-1" style="height: 360px" @click="design = index, $bvModal.show('bv-legality')">
              <div class="image" style="height: 360px">
                <img :src="require('@/assets/image/legality/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
              </div>
            </div>
          </b-col>
          <b-modal id="bv-legality" hide-footer hide-header centered>
            <img :src="require('@/assets/image/legality/'+ parseInt(design + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
            <b-button class="mt-3" block @click="$bvModal.hide('bv-legality')">Tutup</b-button>
          </b-modal>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="py-5" id="gallery-content">
      <b-container class="py-3">
        <b-row>
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark">Galeri Grand Sengon</h2>
            <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
          </b-col>
          <b-col md="12" class="py-2 position-relative">
            <div class="arrows prev">
              <button class="btn" @click="slideNavigationGallery('prev')">
                <icon :icon="icon.leftIcon"/>
              </button>
            </div>
            <div class="arrows next">
              <button class="btn" @click="slideNavigationGallery('next')">
                <icon :icon="icon.rightIcon"/>
              </button>
            </div>
            <slick :options="locationSlider" ref="gallerySlider">
              <div class="card-simple-1" @click="gallery = index, $bvModal.show('bv-gallery')" v-for="item, index in galleries" :key="index">
                <div class="image">
                  <img :src="require('@/assets/image/'+ parseInt(index + 1) + '.jpg')" class="object-fit" alt="Booking Unit">
                </div>
                <div class="body ff-2 text-start fs-7 fw-bolder bg-light-gray">
                  {{ item.name }}
                </div>
              </div>
            </slick>
            <b-modal id="bv-gallery" hide-footer hide-header centered>
              <img :src="require('@/assets/image/'+ parseInt(gallery + 1) + '.jpg')" class="object-fit" alt="Location kavling">
              <h5 class="ff-1 mt-2">
                {{ galleries[gallery].name }}
              </h5>
              <b-button class="mt-3" block @click="$bvModal.hide('bv-gallery')">Tutup</b-button>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="py-5" id="gallery-content">
      <b-container class="py-3">
        <b-row class="justify-content-md-center">
          <b-col md="12" class="text-start">
            <h2 class="ff-1 fw-bolder mb-3 text-dark">Investasi Dengan Kami</h2>
            <div class="bg-m-primary rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
          </b-col>
          <b-col md="5" v-for="item, index in investations" :key="index" class="py-2 position-relative">
            <div class="card-simple-1">
              <div class="image">
                <img :src="require('@/assets/image/invest/'+ parseInt(index + 1) + '.png')" class="object-fit" alt="Booking Unit">
              </div>
              <div class="body ff-2 text-start fs-7 fw-bolder bg-light-gray">
                {{ item.name }}
              </div>
            </div>
            <div class="p-3 text-start ff-2">
              {{ item.text }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="bg-m-primary py-5" id="video-content">
      <b-container class="py-3">
        <b-row class="justify-content-md-center">
          <b-col md="4" class="text-start py-5">
            <h2 class="ff-1 fw-bolder mb-3 text-dark">Video Grand Sengon</h2>
            <div class="bg-dark rounded-8 mb-4 px-5 py-2 d-inline-block"></div>
          </b-col>
          <b-col md="7" class="py-2 position-relative">
            <div class="arrows prev">
              <button class="btn" @click="slideNavigationVideo('prev')">
                <icon :icon="icon.leftIcon"/>
              </button>
            </div>
            <div class="arrows next">
              <button class="btn" @click="slideNavigationVideo('next')">
                <icon :icon="icon.rightIcon"/>
              </button>
            </div>
            <slick :options="videoSlider" ref="videoSlider">
              <div v-for="item, index in videos" :key="index">
                <div class="text-start">
                  <h5 class="ff-1 fw-bolder mb-4">{{ item.name }}</h5>
                </div>
                <youtube player-width="480" player-height="240" :video-id="item.link"/>
              </div>
            </slick>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="position-relative py-5" id="hub-content">
      <div class="overlay-black"></div>
      <b-container class="position-relative text-white py-5">
        <b-row class="justify-content-md-center">
          <b-col md="8">
            <div class="px-4 text-start">
              <h1 class="fw-bolder ff-1">Segera Hub Marketing</h1>
              <p class="ff-2 mb-0">Grand Sengon Purwosari Sebelum kehabisan Unit nya.</p>
            </div>
          </b-col>
          <b-col md="4">
             <div class="py-4">
                <a class="btn-m-primary py-3 px-5" style="text-decoration: none !important" href="https://wa.me/+6281252203567">
                  <icon :icon="icon.whatsappIcon"/> Hubungi Kami
                </a>
             </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import downIcon from '@iconify/icons-akar-icons/arrow-down'
import leftIcon from '@iconify/icons-akar-icons/chevron-left'
import rightIcon from '@iconify/icons-akar-icons/chevron-right'
import usersIcon from '@iconify/icons-ph/users-three-duotone'
import whatsappIcon from '@iconify/icons-akar-icons/whatsapp-fill'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
export default {
  name: 'Home',
  metaInfo: {
    title: 'Introduction',
    titleTemplate: '%s | Grand Sengon View',
  },
  data() {
    return {
      icon: {
        downIcon,
        leftIcon,
        usersIcon,
        whatsappIcon,
        rightIcon,
      },
      locationSlider: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 15000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      },
      videoSlider: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
      },
      question: 0,
      order: 0,
      gallery: 0,
      location: 0,
      comision: 0,
      design: 0,
      comisions: [
        { name: 'Penyerahan Ruko Kepada Client' },
        { name: 'Penyerahan Ruko Kepada Client' },
        { name: 'Penyerahan Ruko Kepada Client' },
      ],
      orders: [
        { name: 'Booking Kavling Mudah' },
        { name: 'Booking Kavling Nyaman' },
        { name: 'Booking Kavling Strategis' },
      ],
      designs: [
        { name: 'Desain Ruko Indah Lantai 2' },
        { name: 'Desain Ruko Indah Lantai 3' },
      ],
      questions: [
        { name: 'Apa saja track record developer?' },
        { name: 'Di mana lokasi nya?' },
        { name: 'Apa prospek lokasinya?' },
        { name: 'Berapa jumlah unit Kavling?' },
        { name: 'Berapa ukuran tanah Kavlingnya?' },
        { name: 'Berapa type Ruko nya' },
        { name: 'Berapa harga Kavling Ruko?' },
        { name: 'Berapa harga Rukonya ?' },
        { name: 'Cara bayar apa saja?' },
        { name: 'ROW jalan dalam ruko berapa?' },
        { name: 'Hadap Kavling / Ruko?' },
      ],
      videos: [
        { name: 'AJB Notaris Grand Sengon Purwosari arah Pandaan dekat Malang', link: getIdFromURL('https://youtu.be/uopW2zKGQa0'), time: getTimeFromURL('https://youtu.be/uopW2zKGQa0')},
        { name: 'Ruko dan kavling siap bangun Grand Sengon Purwosari', link: getIdFromURL('https://youtu.be/U_fhVm6I_Aw'), time: getTimeFromURL('https://youtu.be/U_fhVm6I_Aw')},
        { name: 'TESTIMONI ! Ruko dan Kavling Siap Bangun', link: getIdFromURL('https://youtu.be/2gCoGz8BfmA'), time: getTimeFromURL('https://youtu.be/2gCoGz8BfmA')},
        { name: 'TESTIMONI ! Ruko dan Kavling Terlaris', link: getIdFromURL('https://youtu.be/N_4QBG4tNcs'), time: getTimeFromURL('https://youtu.be/N_4QBG4tNcs')},
      ],
      galleries: [
        { name: 'Foto Kavling 1' },
        { name: 'Desain Ruko Kavling 1' },
        { name: 'Foto Kavling 2' },
        { name: 'Foto Kavling 3' },
        { name: 'Foto Kavling 4' },
        { name: 'Foto Peta Kavling' },
        { name: 'Poster Grand Sengon 1' },
        { name: 'Poster Grand Sengon 2' },
      ],
      investations: [
        { name: 'Investasi Masa Kini', text: 'Kenapa Dikatakan Investasi masa Kini : Lokasi Nol Jalan Raya Lalu Lintas Ramai Cocok Untuk Usaha / Bisnis Usaha Buat Bayar Angsuran' },
        { name: 'Investasi Masa Kini', text: 'Kenapa Dikatakan Investasi Masa Depan : Lokasi Nol Jalan Raya Harga  Property nya Akan Cepat Naik Melambung Tinggi' },
      ],
      locations: [
        { name: 'Lokasi Kavling' },
        { name: 'Lokasi Kavling' },
        { name: 'Lokasi Kavling' },
        { name: 'Lokasi Kavling' },
        { name: 'Lokasi Kavling' },
        { name: 'Lokasi Kavling' },
      ],
      photos: [
        { name: 'Kavling Grand SengonIndah', },
        { name: 'Kavling Bersih', },
        { name: 'Kavling Strategis', photo: '3.jpg' },
      ],
      services: [
        { name: 'Name' }
      ],
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    gotoAnswer() {
      window.location.href = '#answerofquestion'
    },
    slideNavigation(method) {
      if(method == 'next') {
        this.$refs.locationSlider.next()
      } else {
        this.$refs.locationSlider.prev()
      }
    },
    slideNavigationGallery(method) {
      if(method == 'next') {
        this.$refs.gallerySlider.next()
      } else {
        this.$refs.gallerySlider.prev()
      }
    },
    slideNavigationVideo(method) {
      if(method == 'next') {
        this.$refs.videoSlider.next()
      } else {
        this.$refs.videoSlider.prev()
      }
    },
  }
}
</script>

<style lang="sass">
@import '@/assets/style/home.sass'
@import '@/assets/style/custom.sass'
</style>