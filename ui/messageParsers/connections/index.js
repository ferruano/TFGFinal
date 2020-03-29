'use strict';

exports.connectionsRequest = function (message) {
    message.links = {
        accept: {
            href: "/api/connections/request",
            method: "PUT",
            rel: "Aceptar"
        },
        reject: {
            href: "/api/connections/request",
            method: "DELETE",
            rel: "Rechazar"
        }
    };
    message.relationship = {};
    return Promise.resolve(message);
};

exports.connectionsResponse = function (message) {
    message.links = {
        accept: {
            href: "/api/connections/request",
            method: "PUT",
            rel: "Aceptar"
        },
        reject: {
            href: "/api/connections/request",
            method: "DELETE",
            rel: "Rechazar"
        }
    };
    message.relationship = {};
    return Promise.resolve(message);
};