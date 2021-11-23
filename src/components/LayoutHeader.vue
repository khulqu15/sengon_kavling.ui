<template>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" class="py-3 animate__animated"
            :class="{'nav-fixed animate__bounceInDown': navMode == 'fixed'}">
            <b-navbar-brand href="#header-home" class="px-3">
                <img src="@/assets/image/logo1.png" style="width: 140px" alt="Logo Grand View">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse">
                <icon class="text-dark" :icon="icon.menuIcon"/>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" class="pe-lg-4 pe-0" is-nav>
                <b-navbar-nav class="ms-auto">
                    <b-nav-item href="#header-home">Beranda</b-nav-item>
                    <b-nav-item href="#dev-content">Tentang Kami</b-nav-item>
                    <b-nav-item href="#design-content">Pelayanan</b-nav-item>
                    <b-nav-item href="#location-content">Lokasi</b-nav-item>
                    <b-nav-item href="#hub-content">Hubungi Kami</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import menuIcon from '@iconify/icons-icon-park-outline/hamburger-button'
import earthIcon from '@iconify/icons-carbon/earth-southeast-asia'
export default {
    data() {
        return {
            navMode: 'static',
            icon: {
                earthIcon,
                menuIcon,
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScrollNav)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScrollNav)
    },
    methods: {
        handleScrollNav(e) {
            let maxScrollDown = 150
            let scroll = window.scrollY
            if(scroll > maxScrollDown) {
                this.navMode = 'fixed'
            } else {
                this.navMode = 'static'
            }
        }
    }
}
</script>

<style lang="sass">
@import '@/assets/style/navbar.sass'
</style>