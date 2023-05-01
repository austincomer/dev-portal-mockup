<script setup> 
    import ContentHeader from '../components/ContentHeader.vue'
    import PageNav from '../components/PageNav.vue'
</script>



<template>
    <div class="content-container">

        <ContentHeader 
            h1Copy="Concepts"
            h2Copy="Before using the API, there are important concepts to understand. In this section, you'll find all the explanations you need on authentication setup, data organization, and more. Let's dive in!"
            :hasGraphic="false"
        />

        <div class="content-body">
            <PageNav class="page-nav"/>
            <div class="content-copy">
                <section id="concepts-section-1">
                    <div class="content-block">
                        <h2>API Keys</h2>
                        <div class="p-wrapper">
                            <p>An API Key identifies a specific application. The API key is reserved for specific organizations, such as a financial institution’s development team or an application vendor. Each application should use its own API key.</p>
                            <p>An API Key is required for unauthenticated API calls. This is specified with the apiKey security requirement on API operations. Many calls cannot be made unauthenticated.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Protecting your API key</h3>
                        <div class="p-wrapper">
                            <p>An API key is like a key to your house. Just as possession of a house key grants any holder access to the house, possession of an API key grants an application access to the APIs. Apiture will enforce API rate limits, and reject requests if the rate limit is exceeded. Rates will be exceeded more quickly if multiple sources are using the same access keys. Requests will also be rejected if they are suspected to be malicious access attempts.</p>
                            <p>If you believe your API Key has been compromised, log into the developer portal and disable the key. Any client applications which use the revoked key will not work. Contact Apiture to request a new key. Once the new key is received, update the application to use the new API key.</p>
                            <p>You should keep your company’s API key private and secure. Do not share it with other users, do not store it in version control, and do not note it in documentation.</p>
                            <p>APIs are only accessed over encrypted https which provides a level of protection for API Keys and Authorization headers passed to the APIs.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Passing the API key on requests</h3>
                        <div class="p-wrapper">
                            <p>Client applications must include an API key with requests to API operations that do not require user or client credentials. This is done with a request header called API-Key, as defined by the apiKey security definition.</p>
                            <p>For example, if you API key is <span class="word-break">ba9ac78c04f5270f54db975038d442154f70bfd2af8ec956fb9c</span>, add a header to each API call:</p>
                            <p>API-Key: <span class="word-break">ba9ac78c04f5270f54db975038d442154f70bfd2af8ec956fb9c</span></p>
                            <p>Header names are not case sensitive.</p>
                            <p>If a request does not contain an API-Key header or Authorization header when required, the operation fails with a 401 Unauthorized response code.</p>
                            <p>If an operation requires authorization and passes an invalid API key, the operation fails with a 403 Forbidden response code.</p>
                        </div>
                    </div>
                </section>
                <section id="concepts-section-2">
                    <div class="content-block">
                        <h2>Authorization and Authentication</h2>
                        <div class="p-wrapper">
                            <p>Authentication and authorization are two separate, but connected, steps used to verify that an application or user has permission to access the API.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Protecting your API key</h3>
                        <div class="p-wrapper">
                            <p>An API key is like a key to your house. Just as possession of a house key grants any holder access to the house, possession of an API key grants an application access to the APIs. Apiture will enforce API rate limits, and reject requests if the rate limit is exceeded. Rates will be exceeded more quickly if multiple sources are using the same access keys. Requests will also be rejected if they are suspected to be malicious access attempts.</p>
                            <p>If you believe your API Key has been compromised, log into the developer portal and disable the key. Any client applications which use the revoked key will not work. Contact Apiture to request a new key. Once the new key is received, update the application to use the new API key.</p>
                            <p>You should keep your company’s API key private and secure. Do not share it with other users, do not store it in version control, and do not note it in documentation.</p>
                            <p>APIs are only accessed over encrypted https which provides a level of protection for API Keys and Authorization headers passed to the APIs.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Passing the API key on requests</h3>
                        <div class="p-wrapper">
                            <p>Client applications must include an API key with requests to API operations that do not require user or client credentials. This is done with a request header called API-Key, as defined by the apiKey security definition.</p>
                            <p>For example, if you API key is <span class="word-break">ba9ac78c04f5270f54db975038d442154f70bfd2af8ec956fb9c</span>, add a header to each API call:</p>
                            <p>API-Key: <span class="word-break">ba9ac78c04f5270f54db975038d442154f70bfd2af8ec956fb9c</span></p>
                            <p>Header names are not case sensitive.</p>
                            <p>If a request does not contain an API-Key header or Authorization header when required, the operation fails with a 401 Unauthorized response code.</p>
                            <p>If an operation requires authorization and passes an invalid API key, the operation fails with a 403 Forbidden response code.</p>
                        </div>
                    </div>
                </section>
                <section id="concepts-section-3">
                    <div class="content-block">
                        <h2>Access Tokens</h2>
                        <div class="p-wrapper">
                            <p>Access tokens are strings that represent a user’s authentication and authorization, also known as a bearer token.</p>
                            <p>As part of authentication, the authorization server returns an access token to the client application. This access token is unique to that authenticated user and the requesting client application. The client application must keep the access token secure and not leak the access token to other users or other applications.</p>
                            <p>The API documentation includes an accessToken security requirement on the operations which require an access token. This security requirement means that client applications should pass the access token when invoking the operation.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Refreshing Expired Tokens</h3>
                        <div class="p-wrapper">
                            <p>A client application can refresh an access token that has expired or is about to expire. When the access token is returned during authentication, a refresh token and an expiration time are also returned. The client application can preemptively acquire a new access token before the old token expires.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Implementation</h3>
                        <div class="p-wrapper">
                            <p>For help implementing Authentication and Authorization for your project, view our tutorial.</p>
                        </div>
                    </div>
                </section>
                <section id="concepts-section-4">
                    <div class="content-block">
                        <h2>Resources and URI Structure</h2>
                        <div class="p-wrapper">
                            <p>Resources are the banking business objects, such as users, accounts, transfers, files, transactions, and statements. Resources may either be collections or instances that are stored in collections.</p>
                            <p>The API typically returns data in JSON format.</p>
                        </div>
                    </div>
                    <div class="content-block">
                        <h3>Uniform Resource Indicators (URIs)</h3>
                        <div class="p-wrapper">
                            <p>Each resource, whether it is a collection or an instance, has a unique URI which serves as the address of that resource.</p>
                            <p>Each individual resource has a resource ID which is a string consisting of ASCII characters that uniquely identify an instance. For example, each banking account is uniquely identified by its accountId.</p>
                            <p>Note: An accountId is not the same as the account number. Account numbers are not used in URIs for security reasons.</p>
                            <p>The HTTP verbs GET, POST, PATCH and DELETE describe the action performed during the request. Think of GET as an alias for “Read”, POST as an alias for “Create”, PATCH as an alias for “Update”, and DELETE for “Erase.” For example:</p>
                            <p>Read POST /transfers as “Create a new resource within the transfers collection”</p>
                            <p>Read PUT /users/u123 as “Update user u123”</p>
                        </div>
                    </div>
                </section>
                <section id="concepts-section-5">
                    <div class="content-block">
                        <h2>Resource Sets</h2>
                        <div class="p-wrapper">
                            <p>Resource sets are resources with a matching state property. Resource sets cannot be accessed via a URI as they are abstract grouping of resources.</p>
                            <p>If you think of resources like a database, a resource set functions like the result of a search query, unlike a resource collection which functions like looking at a data table.</p>
                            <p>Changing the state property of a resource differs from updating other properties because business rules are enforced when a state is updated. For example, in the Transfers API, you can not cancel a scheduled transfer which is currently being processed by the bank, nor can you resume a transfer which is not suspended.</p>
                            <p>To enforce these types of business rules, state transitions are executed with operations that place a resource into a resource set. The resource set represents a set of all resources that are in a specific state.</p>
                            <p>The state property is immutable via PATCH or PUT, which are used for most updates to a resource. To change the state of a resource, use an API operation that performs an action on the resource. For example, payment batch actions include submitting batch, approving batch, and rejecting batch. These actions change the state of the payment batch, while also performing other business logic.</p>
                            <p>The APIs use POST to perform the operation of placing a resource into a resource set. For example, submitting a valid payment batch could change the batch’s state from pending to pendingApproval. These actions add the batch to the resource set of pending approval batches.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .page-nav {
        display: none;
    }

    .word-break {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    
    .content-body {
        padding: 50px 20px;
    }

    .content-copy {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }

    .content-block h2 {
        font-size: 1.8rem;
        color: #333333;
        letter-spacing: .05em;
    }

    .content-block h3 {
        color: #333333;
        letter-spacing: .03em;
    }

    .content-block {
        display: flex;
        flex-direction: column;
        gap: 10px
    }

    .p-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
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

    @media only screen and (min-width: 1280px) {
        .page-nav {
            display: block;
        }
        .content-body {
            padding: 50px 0px 50px 100px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: start;
        }

        .content-copy {
            gap: 100px;
        }

        section {
            gap: 70px;
            scroll-margin: 30px;
        }

        .p-wrapper {
            margin-left: 20px;
            gap: 30px;
        }
    }

</style>