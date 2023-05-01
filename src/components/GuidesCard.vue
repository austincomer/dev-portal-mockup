<script setup>
    const props = defineProps({
        icon: String,
        header: String,
        desc: String,
        link: String
    })
</script>


<template>
    <a class="home-card" :href='link' target="_blank" rel="noopener noreferrer">
        <div class="card-content">
            <div class="guide-icon">
                <v-icon class='nav-icon' :name="icon" scale="3" />
            </div>
            <div class="card-copy">
                <h4>{{ header }}</h4>
                <p>{{ desc }}</p>
            </div>
        </div>
    </a>
</template>


<style scoped>

h4 {
    font-size: 24px;
}

h5 {
    color: #000000;
    font-family: 'Gudea', sans-serif;
    font-size: 16px;
    letter-spacing: .1em;
}

p {
    font-size: 16px;
    font-weight: 200;
}

.home-card {
    color: #333333;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    max-width: 500px;
    box-shadow: 1px 1px 25px 1px hsla(0, 0%, 0%, 0.1);
    padding: 20px;
    border-radius: 5px;
    display: flex;
    transition-property: scale;
    transition-duration: .3s;
}

.home-card:hover{
    scale: 1.02;
    cursor: pointer;
}
.card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px; 
}


</style>