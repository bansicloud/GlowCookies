/*
  GLOW COOKIES
  CREATED BY GLOW MEDIA
  WWW.GLOWMEDIA.ES
  2020 - v 1.6
*/


// ADD THE CSS WITH CDN
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
// CHANGE THE LINK BELOW TO "v1/cookiesGlow.css" IF YOU DONT WANT TO USE A CDN
linkElement.setAttribute('href', 'https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@1.6/v1/cookiesGlow.min.css'); 
document.body.appendChild(linkElement);


// ======================
// CHECK USER VARIABLES & SET DEFAULTS
// ======================
var bannerDescription = bannerDescription  || 'We use our own and third-party cookies to personalize content and to analyze web traffic.';
var linkTexto = linkTexto  || 'Read more about cookies';
var linkHref = linkHref  || '#';
var bannerPosition = bannerPosition  || 'left';
var bannerBackground = bannerBackground  || '#fff';
var descriptionColor = descriptionColor  || '#505050';

// Accept cookies btn
var btn1Text = btn1Text  || 'Aceptar cookies';
var btn1Background = btn1Background  || '#24273F';
var btn1Color = btn1Color  || '#fff';

// Disable cookies btn
var btn2Text = btn2Text  || 'Denegar';
var btn2Background = btn2Background  || '#E8E8E8';
var btn2Color = btn2Color  || '#636363';

// Manage cookies Btn
var manageColor = manageColor  || '#24273F';
var manageBackground = manageBackground  || '#fff';
var manageText = manageText  || 'Manage cookies';

var border = border  || 'yes';
if(border == "yes"){
  var border = "border";
} else if (border == "none"){
  var border = "border-none";
} else {
  var border = "border";
}
// ======================
// END USER VARIABLES
// ======================


// COOKIES BUTTON -- INCLUDE USER VARIABLES
var preBanner = document.createElement("div");
preBanner.innerHTML = `<button type="button" id="prebanner" onClick="abrirSelector()" class="prebanner prebanner-${bannerPosition} ${border}" style="color: ${manageColor}; background-color: ${manageBackground};">
                          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                          </svg>
                          ${manageText}
                      </button>`;
preBanner.style.display = "none";
document.body.appendChild(preBanner);

// COOKIES BANNER -- INCLUDE USER VARIABLES
var cookies = document.createElement("div");
cookies.innerHTML = `
<div class="banner banner-${bannerPosition} ${border}" style="background-color: ${bannerBackground};">
    <div class="cookie-consent-banner__inner">
      <div class="cookie-consent-banner__copy">
          <div class="cookie-consent-banner__description" style="color: ${descriptionColor};">
          ${bannerDescription} 
          <a href="${linkHref}" class="link-btn" style="color: ${descriptionColor};" target="_blank">${linkTexto}</a></div>
      </div>
      <div class="buttons">
        <button type="button" id="aceptarCookies" onClick="aceptarCookies()" class="cookie-consent-btn" style="background-color: ${btn1Background}; color: ${btn1Color};">
          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
          </svg>
          ${btn1Text}
        </button>
        <button type="button" id="rechazarCookies" onClick="rechazarCookies()" class="cookie-consent-btn-secondary" style="background-color: ${btn2Background}; color: ${btn2Color};">
          ${btn2Text}
        </button>
      </div>
    </div>
</div>`;
cookies.style.display = "none";
document.body.appendChild(cookies);


// START TRACKING FUNCTION
function activarSeguimiento(){

// Google Analytics Tracking
  if(typeof(AnalyticsCode) != "undefined" && AnalyticsCode !== null){
    var Analytics = document.createElement('script');
    Analytics.setAttribute('src',`https://www.googletagmanager.com/gtag/js?id=${AnalyticsCode}`);
    document.head.appendChild(Analytics);
    var AnalyticsData = document.createElement('script');
    AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${AnalyticsCode}');`;
    document.head.appendChild(AnalyticsData);
    console.log(`Activado el seguimiento de Analytics para: ${AnalyticsCode}`);
  }

  // Facebook pixel tracking code
  if(typeof(FacebookPixelCode) != "undefined" && FacebookPixelCode !== null){
    var FacebookPixelData = document.createElement('script');
    FacebookPixelData.text = `
                                !function(f,b,e,v,n,t,s)
                                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', '${FacebookPixelCode}');
                                fbq('track', 'PageView');
                            `;
    document.head.appendChild(FacebookPixelData);

    var FacebookPixel = document.createElement('noscript');
    FacebookPixel.setAttribute('height',`1`);
    FacebookPixel.setAttribute('width',`1`);
    FacebookPixel.setAttribute('style',`display:none`);
    FacebookPixel.setAttribute('src',`https://www.facebook.com/tr?id=${FacebookPixelCode}&ev=PageView&noscript=1`);
    document.head.appendChild(FacebookPixel);

    console.log(`Activado el seguimiento de Facebook Pixel para: ${FacebookPixelCode}`);
  }

}

// Disable Tracking - Future update
function desactivarSeguimiento(){
  console.log("Seguimiento desactivado");
}


// COOKIE NAME -- We use de hostname for the cookies name
var hostname = window.location.hostname;
var cookieName = `cookies${hostname}`;


// FUNCTIONS -- ACCEPT AND DENY COOKIES
// Accept Cookies
function aceptarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=aceptadas; ${expires}`;
  cookies.style.display = "none";
  preBanner.style.display = "block";
  activarSeguimiento();
}
// Deny Cookies
function rechazarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=denegadas; ${expires}`;
  cookies.style.display = "none";
  preBanner.style.display = "block";
  desactivarSeguimiento();
}

// OPEN COOKIES BUTTON
function abrirSelector(){
  preBanner.style.display = "none";
  cookies.style.display = "block";
}

// VERIFY IF COOKIE EXISTS & VALUE
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if(c.substring(name.length, c.length) == "aceptadas"){
          return "ok";
        } else if (c.substring(name.length, c.length) == "denegadas") {
          return "no";
        }
      }
    }
    return "";
  }

  // VERIFY -- ACCEPTED OR DISABLED
  var isCookieSet = getCookie(cookieName);

  switch(isCookieSet) {
    case "ok":
      console.log('Cookies: Aceptadas');
      preBanner.style.display = "block";
      activarSeguimiento();
      break;
    case "no":
      console.log('Cookies: Denegadas');
      preBanner.style.display = "block";
      break;
    default:
      console.log('Cookies: Sin escoger');
      cookies.style.display = "block";
  }
