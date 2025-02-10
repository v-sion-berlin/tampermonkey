// ==UserScript==
// @name         Bundestagswahl 2025 Civey
// @namespace    http://tampermonkey.net/
// @version      2025-02-10_18-07
// @description  Changes the styling of the civey polls inside the iframe
// @author       Andreas Müller <andreas.mueller@v-sion.de
// @match        *://app.civey.com/*
// @icon64       https://v-sion.de/core/images/apple-touch-icon-72x72.png
// @grant        GM_addStyle
// ==/UserScript==

// Return if we aren't inside the iframe
if (window.top == window.self) {return;}

const style=`

/* BACKGROUND */
main {
  background: rgba(255, 255, 255, 0.0) !important;
  border: 0 !important;
}

/* HEADER */
header {
  border: 0 !important;
}

/* CONTENT */
[class^='analytics-widget-module__chartContainer'] {
  margin: 0 0 10px 0 !important;

  /* LEGENDE */
  [class^='legend-module__'] {
    zoom: 0.8 !important;
  }

  /* VALUES */
  .vx-group:not(.vx-axis) text {
    font-size: 20px !important;
  }

  /* MAP ZOOM */
  [class^='map-module__zoomControls'] {
    display: none;
  }
}



/* FOOTER */
[class^='analytics-widget-module__metadataWrapper'] {
  zoom: 0.7;

  /* CIVEY LINK */
  a {
    pointer-events: none;
  }
}

/* GRUPPIEREN */
[class^='analytics-widget-module__mergedAnswerToggleWrapper'] {
  position: absolute;
  zoom: 0.8;
  opacity: 0.5;
  right: 21px;
  bottom: 39px;
}
`
GM_addStyle(style);

(function() {
  'use strict';
  console.log('Load Bundestagswahl 2025 Civey')
})();
