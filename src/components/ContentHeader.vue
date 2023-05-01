<script setup>
    const props = defineProps({
        h1Copy: String,
        h2Copy: String,
        hasGraphic: Boolean
    })
</script>


<template>
    <div class="content-header">
        <div class="header-copy">
            <h1>{{ h1Copy }}</h1>
            <h2>{{ h2Copy }}</h2>
        </div>
        <div v-if="hasGraphic" class="graphic">
            <img id='teamwork-gif' src="public/team-work.gif" alt="Team work">
        </div>
       
    </div>
</template>


<style scoped>

h1 {
    font-size: 2.25rem;
}

h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
}

.content-header {
    background-color: #ffffff;
    border-bottom: 1px solid #ececec;
    padding: 35px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.header-copy {
    height: fit-content;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.graphic {
    max-height: 350px;
}

#teamwork-gif {
    height: 100%;
    width: 100%;
    object-fit: contain;
}


@media only screen and (min-width: 500px) {

    .content-header {
        padding: 35px 35px;
    }

    .header-copy {
        padding: 30px 0;
    }

}

@media only screen and (min-width: 751px) {

    .content-header {
        padding: 35px 70px;
        flex-direction: row;
    }

    .header-copy {
        padding: 50px 0;
    }

}


@media only screen and (min-width: 1000px) {

    .content-header {
        padding: 0 40px;
    }

    .header-copy {
        padding: 100px 0;
    }

    .graphic {
        height: 100%;
    }

}

@media only screen and (min-width: 1280px) {

    .content-header {
        padding: 0 80px;
        gap: 25px;
    }

    .header-copy {
        max-width: 800px;
    }
}

@media only screen and (min-width: 1440px) {
    .content-header {
        padding: 20px 180px;
        flex-direction: row;
    }

}


</style>