// ==UserScript==
// @name         US election 2024 @WELT
// @namespace    http://tampermonkey.net/
// @version      2024-07-19
// @description  Helper script for the us eleciton 2024. The script is used to control the artist and the data update from flowics.
// @author       v-sion GmbH
// @match        https://viz.flowics.com/public/ae704a85a5d4cad3798434fa4e0a4374/669abdc9681ab419a091ee46/live
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowics.com
// @grant        none
// @run-at document-start
// ==/UserScript==

'use strict';
console.log('Load Tampermonkey script');

const getElements = () => {
  const state1Container = document.querySelector('[data-cy="Container-n13"]');
  const state2Container = document.querySelector('[data-cy="Container-n16"]');
  const state3Container = document.querySelector('[data-cy="Container-n10"]');
  console.log(state1Container, state2Container, state3Container);
  state1Container.addEventListener('click', () => fetch('http://localhost:3000/flowics/1'));
  state2Container.addEventListener('click', () => fetch('http://localhost:3000/flowics/2'));
  state3Container.addEventListener('click', () => fetch('http://localhost:3000/flowics/3'));
};

setTimeout(getElements, 3000);
