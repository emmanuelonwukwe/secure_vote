const REACT_ENV = "production";
const BACKEND_HOST = "same"; // 'https://mybackendapi.onrender.com' | 'same'

const BACKEND_DEV_PORT = 3000;
const BACKEND_API_BASE_URL = "/api/v1"

let productionSiteOrigin;
if (BACKEND_HOST == "same") {
    const url = new URL(location.href);
    const protocol = url.protocol;
    const hostName = url.hostname;
    productionSiteOrigin = protocol + "//" + hostName;
} else {
    productionSiteOrigin = BACKEND_HOST;
}

const BACKEND_SITE =
    REACT_ENV == "development"
        ? `http://localhost:${BACKEND_DEV_PORT}`
        : productionSiteOrigin;

export { BACKEND_SITE, BACKEND_API_BASE_URL };