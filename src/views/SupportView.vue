<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
</script>


<template>

    <div class="content-container">

        <ContentHeader 
            h1Copy="Apiture Help & Support"
            h2Copy="We're here to help with your our integrations. Let us know what you need and we'll do our best to support you."
            :hasGraphic="false"
        />

        <div class="content-body">
            <section>
                <div class="copy-block">
                    <h2>Consumer support</h2>
                    <p>If you are a developer building with Apiture, the answers to most questions can be found in the docs -- If you can't find an answer to your question in the docs, file a Support ticket via your Dashboard account.</p>
                </div>
            </section>
            <!-- <div class="graphic">
                <img id='support-gif' src="public/support.gif" alt="Help and support">
            </div> -->
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
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 25px
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        max-width: 500px;
    }

    section h2 {
        font-size: 1.8rem;
        color: #333333;
        letter-spacing: .05em;
    }

    .copy-block {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    section a {
        color: hsl(0, 0%, 10%);
        text-decoration: none;
        font-size: 1.1rem;
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
        color: hsl(0, 0%, 5%);
        cursor: pointer;
        background-size: 0 0.1em, 100% 0.1em;
    }

    .graphic {
        max-height: 350px;
        display: flex;
    }

    #support-gif {
        height: 100%;
        width: 100%;
        object-fit: contain;
        align-self: center;
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
            flex-direction: row;
        }
    }

    @media only screen and (min-width: 1280px) {
        .content-body {
            padding: 70px 50px;
        }

        .graphic {
            height: 100%;
        }
    }

</style>