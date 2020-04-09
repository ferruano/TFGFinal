'use strict';

const config = {

    // Change to your endpoint did's endpoint
    endpointDidEndpoint: process.env.PUBLIC_DID_ENDPOINT,

    // IP Address of the running ledger
    testPoolIp: process.env.TEST_POOL_IP || '127.0.0.1',

    // the port to run the agent server on
    port: process.env.PORT || 3000,

    // Optional: Give your wallet a unique name
    walletName: `${process.env.USERNAME || 'marcos'}_wallet`,

    // Optional: Give your pool config a unique name
    poolName: process.env.POOL_NAME || 'pool1',

    // This information is used to issue your "Government ID"
    userInformation: {
        type: process.env.TIPO || 'alumno',
        name: process.env.NAME || 'MARCOS',
        email: process.env.EMAIL || 'marcos@upm.es',
        dni: process.env.TAX_ID || '056965472J',
        icon_src: process.env.ICON_SRC || 'https://image.flaticon.com/icons/png/512/46/46285.png',
        username: process.env.USERNAME || 'MARCOS',
        password: process.env.PASSWORD || '123'
    },

    sessionSecret: "YUYFDISYFSIUOFYERTEWRTEWTWETRNNNMNJHKHFASDdyfiudayDAYIUSDFYASIOFOOASIUDFYEREAHLSKJFE57894502354354HJKAFDDFS"
};

module.exports = config;