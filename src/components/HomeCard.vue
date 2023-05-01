<script setup>
    const props = defineProps({
        icon: String,
        name: String,
        desc: String,
        link: String
    })
</script>


<template>
    <RouterLink class='home-card-link' :to="link">
        <div class="home-card">
            <div class="card-top">
                <v-icon :name="icon" scale="1.25" />
                <div class="card-copy">
                    <h4>{{ name }}</h4>
                    <p>{{ desc }}</p>
                </div>
            </div>
            <div class="card-bottom">
                <h5>{{ name }}</h5>
                <v-icon id='arrow' name="md-arrowforwardios-round" />
            </div>
        </div>
    </RouterLink>
</template>


<style scoped>

h4 {
    font-size: 20px;
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

.home-card-link {
    /* border: 1px solid; */
    color: #333333;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 25px 1px hsla(0, 0%, 0%, 0.1);
    min-height: 250px;
    max-height: 300px;
    max-width: 375px;
    padding: 30px;
    border-radius: 5px;
    display: flex;
    transition-property: scale;
    transition-duration: .3s;
}

.home-card-link:hover .card-bottom,
.home-card-link:hover .card-bottom > h5 {
    color: #2e86d7;
    gap: 12px;
}

.home-card-link:hover{
    scale: 1.01;
}
.home-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px; 
}

.card-top {
    display: flex;
    flex-direction: column;
    gap: 10px
}

.card-bottom {
    display: flex;
    align-items: center;
    gap: 4px;

    transition-property: gap;
    transition-duration: .5s;
}

#arrow {
    height: 10px;
}


</style>