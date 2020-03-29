'use strict';
const indy = require('../../../indy');

exports.credentialOffer = async function (message) {
    let theirDid = message.message.origin;
    message.relationshipName = await indy.pairwise.getAttr(theirDid, 'name');
    message.links = [
        {
            name: "Aceptar",
            href: "/api/credentials/accept_offer",
            method: "POST",
            message: JSON.stringify({
                messageId: message.id
            })
        },
        {
            name: "Rechazar",
            href: "/api/credentials/reject_offer",
            method: "POST",
            message: JSON.stringify({
                messageId: message.id
            })
        }
    ];

    return message;
};