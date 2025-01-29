// ==UserScript==
// @name         Bundestagswahl 2025 Flowics
// @namespace    http://tampermonkey.net/
// @version      2025-01-29_14-50
// @description  Changes the styling of the iframe where the civey polls are loaded
// @author       Andreas Müller <andreas.mueller@v-sion.de
// @match        https://viz.flowics.com/public/7d7488e486249ff2ced9ebb92efe3bd3/*
// @icon64       https://v-sion.de/core/images/apple-touch-icon-72x72.png
// @grant        GM_addStyle
// ==/UserScript==

const style=`
iframe {
  zoom: 2.5 !important;
}
`
GM_addStyle(style);

(function() {
  'use strict';
  console.log('Load Bundestagswahl 2025 Flowics')
})();
