document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Mostrar el banner si no se ha dado el consentimiento
    if (!getCookie('cookies_accepted')) {
        cookieBanner.style.display = 'block';
    } else {
        loadGoogleAnalytics();
    }

    // Manejar el clic en el botón de aceptar cookies
    acceptCookiesButton.addEventListener('click', () => {
        setCookie('cookies_accepted', 'true', 365);
        cookieBanner.style.display = 'none';
        loadGoogleAnalytics();
    });

    // Función para obtener una cookie por nombre
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Función para cargar Google Analytics
    function loadGoogleAnalytics() {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-HD00BWQM92`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-HD00BWQM92');
        };
    }
});
