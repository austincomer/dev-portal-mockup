<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
    import GuidesCard from '../components/GuidesCard.vue';
</script>


<template>
    <div class="content-container">

        <ContentHeader 
            h1Copy="Guides"
            h2Copy="Check out our comprehensive tutorials for step-by-step guides on using our APIs in your application. Let's get started!"
            :hasGraphic="false"
        />

        <div class="content-body">
            <div class="card-wrapper">
                <GuidesCard 
                    icon="bi-lock-fill"    
                    header="Authentication"
                    desc="Authenticate Users in your App using OpenID Connect"
                    link="https://dx.apiture.com/docs/api/guides/secure-access/"
                />
                <GuidesCard 
                    icon="md-manageaccounts"    
                    header="Accounts"
                    desc="Gather a list of a customer's financial accounts"
                    link="https://dx.apiture.com/docs/api/guides/getting-a-list-of-accounts/"
                />
                <GuidesCard 
                    icon="fa-balance-scale"    
                    header="Balances"
                    desc="How to gather balance data from a list of accounts"
                    link="https://dx.apiture.com/docs/api/guides/listing-the-balances-for-accounts/"
                />
                <GuidesCard 
                    icon="fa-database"    
                    header="Pagination"
                    desc="Learn to use Pagination when passing large amounts of data"
                    link="https://dx.apiture.com/docs/api/guides/using-pagination/"
                />
                <GuidesCard 
                    icon="ri-file-transfer-fill"    
                    header="Transfer"
                    desc="Transfer funds from one account to another at a single, scheduled time."
                    link="https://dx.apiture.com/docs/api/guides/creating-a-one-time-transfer/"
                />
                <GuidesCard 
                    icon="md-history-round"    
                    header="History"
                    desc="Check the status of a transfer or review their transfer history. "
                    link="https://dx.apiture.com/docs/api/guides/listing-transfers/"
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
    grid-template-columns: repeat( auto-fit, minmax(375px, 1fr) );
    row-gap: 20px;
    column-gap: 20px;
}

@media only screen and (min-width: 1000px) {
    .content-body {
        padding: 70px 30px;
    }

    .card-wrapper {
    column-gap: 20px;
}

}

@media only screen and (min-width: 1534px) {
    .card-wrapper {
        max-width: 1280px;
}

}
</style>