<script>
import { RouterLink, RouterView } from 'vue-router';

    export default {
        name: 'NavBar',
        data() {
            return {
                isActive: true,
            }
        }
    }
</script>


<template>
    <div class="navbar-container">
        <!-- <RouterLink class="home-link" to="/"> -->
            <RouterLink class="navbar-header" to="/">
                <h1>APITURE <span id="docs-text">Docs</span></h1>
                <div class="open-nav-icon" @click='isActive = !isActive'>
                    <v-icon name="co-hamburger-menu" scale="1.5" />
                </div>
            </RouterLink>
        <!-- </RouterLink> -->
        <aside :class="{'navbar-active': isActive}">
            <div class="close-nav-icon" @click='isActive = !isActive'>
                <v-icon name="io-close-outline" scale="1.5" />
            </div>
            <nav>
                <RouterLink class='nav-link' to="/" @click='isActive = !isActive'><v-icon class='nav-icon' name="hi-home" scale="1" />Home</RouterLink>
                <RouterLink class='nav-link' to="/quickstart" @click='isActive = !isActive'><v-icon class='nav-icon' name="md-rocketlaunch-outlined" scale="1" />Quickstart</RouterLink>
                <RouterLink class='nav-link' to="/concepts" @click='isActive = !isActive'><v-icon class='nav-icon' name="bi-infinity" scale="1" />Concepts</RouterLink>
                <RouterLink class='nav-link' to="/guides" @click='isActive = !isActive'><v-icon class='nav-icon' name="bi-map" scale="1" />Guides</RouterLink>
                <RouterLink class='nav-link' to="/api" @click='isActive = !isActive'><v-icon class='nav-icon' name="oi-workflow" scale="1" />API</RouterLink>
                <RouterLink class='nav-link' to="/support" @click='isActive = !isActive'><v-icon class='nav-icon' name="md-questionanswer-outlined" scale="1" />Support</RouterLink>
            </nav>
        </aside>

    </div>
</template>


<style scoped>
    .navbar-container {
        padding: 0 20px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .navbar-header {
        width: 100%;
        background-color: #f9f9f9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333333;
        text-decoration: none;
    }

    #docs-text {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    .open-nav-icon {
        fill: #333333;
    }

    .close-nav-icon {
        margin-top: 35px;
        margin-right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .open-nav-icon:hover,
    .close-nav-icon:hover {
        cursor: pointer;
    }

    aside {
        background-color: #f9f9f9;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 0 5px;
    }

    .navbar-active {
        display: none;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 40px;
    }

    .nav-link {
        font-family: 'Gudea', sans-serif;
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        font-weight: 400;
        color: hsl(0, 0%, 20%);
        text-decoration: none;
        padding: 3px 5px 3px 50px;
        display: flex;
        align-items: center;
    }

    .nav-link:hover,
    .nav-link.router-link-active,
    .nav-link.router-link-exact-active {
        background-color: hsl(0, 0%, 95%);
        border-radius: 5px;
        color: hsl(0, 0%, 3%);
        font-weight: 600;
        cursor: pointer;
    }

    .nav-icon {
        margin-right: 20px;
        scale: 1.5;
    }

    nav-link:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active {
        background-color: indianred;
        cursor: pointer;
    }


    @media only screen and (min-width: 1000px) {

        .navbar-container {
            padding: 20px;
            position: fixed;
            z-index: 1;
            height: 100%;   
            width: 300px;
        }


        .navbar-header {
            align-items: start;
            margin-bottom: 25px;
        }

        .open-nav-icon {
            display: none;
        }

        .close-nav-icon {
            display: none;
        }

        aside {
            position: static;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .navbar-active {
            display: block;
        }

        nav {
            gap: 8px;
            padding: 0;
        }

        .nav-link {
            font-size: 1rem;
            padding: 3px 5px;
        }

        .nav-icon {
            margin-right: 10px;
            scale: 1;
        }

    }

</style>