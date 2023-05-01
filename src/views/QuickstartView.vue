<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
</script>


<template>

    <div class="content-container">

        <ContentHeader 
            h1Copy="Get started with the Quickstart"
            h2Copy="A quick introduction to building with Apiture"
            :hasGraphic="false"
        />

        <div class="content-body">

            <section>
                <h2>Introduction</h2>
                <div class="p-wrapper">
                    <p>Apiture Digital Banking APIs allow you to customize your online bank the way you’d like.</p>
                    <p>Before any development can begin, you will need to set up a Developer Portal account to manage your applications and receive API keys. Visit <a href="https://dx.apiture.com/" target="_blank" rel="noopener noreferrer">Apiture Digital Banking APIs</a> to set up access your account.</p>
                    <p>Our API’s are expansive and can be used for many applications. For concepts that anyone using the APIs need to know, read our <router-link to="/concepts">concepts section</router-link></p>
                    <p>For guides on setting up authentication, read our tutorial <a href="https://dx.apiture.com/docs/api/guides/secure-access/" target="_blank" rel="noopener noreferrer">Authenticate Users in Your App Using OpenID Connect</a>.</p>
                    <p>Use the side navigation to view more content, including the <a href="https://dx.apiture.com/docs/api/api-reference/" target="_blank" rel="noopener noreferrer">API Reference</a> which <a href="https://developer.apiture.com/docs/apis/banking/index.html#apiture-digital-banking" target="_blank" rel="noopener noreferrer">links to code examples and in-depth API explanations</a>.</p>
                    <p>If you cannot find the information you are looking for, please contact support <router-link to="/support">here</router-link></p>
                </div>
            </section>
            
        </div>

    </div>
</template>


<style scoped>
    .content-container {
        display: flex;
        flex-direction: column;
    }

    .content-body {
        padding: 35px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        max-width: 700px;
    }

    section h2 {
        font-size: 1.8rem;
        color: #333333;
        letter-spacing: .05em;
    }

    .p-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    section a {
        color: inherit;
        text-decoration: none;
        background: 
            linear-gradient(to right, hsl(329, 87%, 86%), hsl(35, 95%, 83%)),
            linear-gradient(to right, hsl(35, 95%, 53%), hsl(329, 87%, 36%));
        background-size: 100% 0.1em, 0 0.1em;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 500ms;
    }

    section a:hover,
    section a:focus {

        cursor: pointer;
        background-size: 0 0.1em, 100% 0.1em;
    }

    @media only screen and (min-width: 500px) {
        .content-body {
            padding: 35px 35px;
        }
    }

    @media only screen and (min-width: 751px) {
        .content-body {
            padding: 35px 70px;
        }
    }


    @media only screen and (min-width: 1000px) {
        .content-body {
            padding: 60px 50px;
        }
    }

    @media only screen and (min-width: 1280px) {
        .content-body {
            padding: 70px 0;
        }
    }

</style>