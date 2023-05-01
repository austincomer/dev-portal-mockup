<script setup>

    function handlePageNavClick(id) {
        document.getElementById(id).scrollIntoView()
    }

</script>


<template>
    <div class="page-nav-container">
        <ul>
            <li class='page-nav' @click="handlePageNavClick('concepts-section-1')">API Keys</li>
            <li class='page-nav' @click="handlePageNavClick('concepts-section-2')">Authorization & Authentication</li>
            <li class='page-nav' @click="handlePageNavClick('concepts-section-3')">Access Tokens</li>
            <li class='page-nav' @click="handlePageNavClick('concepts-section-4')">Resources and URI Structure</li>
            <li class='page-nav' @click="handlePageNavClick('concepts-section-5')">Resource Sets</li>
        </ul>
    </div>
</template>


<style scoped>
    .page-nav-container {
        min-width: 350px;
        /* border: 1px solid seagreen; */
        position: -webkit-sticky;
        position: sticky;
        top: 50px;
        overflow: hidden;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .page-nav-btn {
        all: unset
    }

    .page-nav {
        font-family: 'Gudea', sans-serif;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: hsl(0, 0%, 20%);
        text-decoration: none;
        padding: 6px 10px;
        cursor: pointer;
    }

    .page-nav:hover,
    .page-nav.router-link-active,
    .page-nav.router-link-exact-active {
        color: hsl(0, 0%, 3%);
        font-weight: 600;
    }

    .active {
        background-color: hsl(0, 0%, 95%);
        border-radius: 5px 0 0 5px;
        color: hsl(0, 0%, 3%);
        font-weight: 600;
    }

</style>