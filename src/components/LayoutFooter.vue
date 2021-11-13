<template>
    <div>
        <b-container fluid class="pt-5">
            <b-container class="py-5">
                <b-row class="justify-content-md-center">
                    <b-col md="8">
                        <b-row>
                            <b-col cols="3">
                                <icon style="font-size: 5rem" :icon="icon.earthIcon"/>
                            </b-col>
                            <b-col cols="9" class="text-start">
                                <h4 class="ff-1 fw-bolder">GRAND SENGON PURWOSARI</h4>
                                <p class="ff-2 fs-7">Tanah kavling strategis, nyaman, dekat dengan akses jalan raya, View pemandangan gunung arjuna. Proses pembelian yang mudah.</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
            <div class="py-2">
                <b-row>
                    <b-col md="6" class="py-2">
                        @2021 Copyright by Grand Sengon View
                    </b-col>
                    <b-col md="6" class="py-2">
                        <img src="@/assets/image/dev.png" width="36px" class="mx-2" alt="Sidescript Developer">
                        @2021 Developed by <a href="https://www.instagram.com/sidescript.id/" class="text-dark" style="text-decoration: none !important" target="_blank">Sidescript Indonesia</a>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
import earthIcon from '@iconify/icons-carbon/earth-southeast-asia'
export default {
   data() {
       return {
           icon: {
               earthIcon,
           }
       }
   } 
}
</script>