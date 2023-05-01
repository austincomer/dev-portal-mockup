<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
</script>


<template>
    <div class="content-container">

        <ContentHeader 
            h1Copy="API Reference"
            h2Copy="Comprehensive reference for integrating with our API endpoints"
            :hasGraphic="false"
        />

        <div class="content-body">
            <section>
                <div class="copy-block">
                    <h2>Our API</h2>
                    <p>There are several APIs available for use in application development. All of these API’s documentation are available in the Reference Documentation.</p>
                </div>
                <div class="copy-block">
                    <h3>Customer Accounts</h3>
                    <p>List the customer’s banking accounts, with access to additional information such as balance amounts and other account-specific data.</p>
                </div>
                <div class="copy-block">
                    <h3>Transaction History</h3>
                    <p>Transactions allows bank customers to view the transactions history associated with a banking account.</p>
                </div>
                <div class="copy-block">
                    <h3>Transfers</h3>
                    <p>Schedule and manage transfers from account to account.</p>
                </div>
                <a href="https://developer.apiture.com/docs/apis/banking/index.html#apiture-digital-banking" target="_blank" rel="noopener noreferrer">View Accounts API Documentation.</a>
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
        gap: 50px;
        max-width: 700px;
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