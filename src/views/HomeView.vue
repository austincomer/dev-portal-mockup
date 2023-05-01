<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
    import HomeCard from '../components/HomeCard.vue'
</script>


<template>
    <div class="content-container">

        <ContentHeader 
            h1Copy="Welcome to the Docs"
            h2Copy="Here you'll find guides, resources, and references to build with Apiture"
            hasGraphic
        />

        <div class="content-body">
            <div class="card-wrapper">
                <HomeCard
                    icon="md-rocketlaunch-outlined"    
                    name="Quickstart"
                    desc="Our Developer Portal empowers you to take control of your applications, products, and test APIs."
                    link="/quickstart"
                    />
                <HomeCard 
                    icon="bi-infinity"
                    name="Core Concepts"
                    desc="Master the fundamental concepts required to effectively utilize the self-service Developer Portal features."
                    link="/concepts"
                />
                <HomeCard 
                    icon="md-questionanswer-outlined"
                    name="Support"
                    desc="Have a question? Let us know how we can help!"
                    link="/support"
                />
            </div>
        </div>

    </div>
</template>


<style scoped>
    .content-container {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
    }
    .content-body {
        height: 100%;
        padding: 30px 15px;
        display: flex;
        justify-content: center;
    }

    .card-wrapper {
        width: 100%;
        height: fit-content;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat( auto-fit, minmax(275px, 1fr) );
        row-gap: 20px;
        column-gap: 20px;
    }

    @media only screen and (min-width: 1000px) {
        .content-body {
            padding: 70px 30px;
        }

        .card-wrapper {
        column-gap: 40px;
    }

    }

    @media only screen and (min-width: 1534px) {
        .card-wrapper {
            max-width: 1150px;
    }

    }
</style>