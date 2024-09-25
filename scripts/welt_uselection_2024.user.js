// ==UserScript==
// @name         US election 2024 @WELT LOCALHOST
// @namespace    http://tampermonkey.net/
// @version      2024-07-25
// @description  Helper script for the us eleciton 2024. The script is used to control the artist and the data update from flowics.
// @author       v-sion GmbH
// @match        https://viz.flowics.com/public/ae704a85a5d4cad3798434fa4e0a4374/669abdc9681ab419a091ee46/live
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowics.com
// @grant        none
// ==/UserScript==

'use strict';

console.log('Load Tampermonkey script');
////////////////////
//// Event List ////
////////////////////
/**
 * Hier werden die Events definiert, auf die reagiert werden soll. Die text
 * property enthält den Text, der im Flowics für das Element vergeben wurde. Es
 * wird davon ausgegangen, dass sich der Button in einem Container befindet und
 * dass das Event im Flowics auf diesem Container liegt.
 * Der Callback wird aufgerufen, sobald auf den Container geklickt wird.
 */
//const eventList = []
//const stateList = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
//for (state in stateList) {
//  eventList.push({ text: state, callback: () => webSocket.send({ action: 'set current state', statePostal: state, sendData: 'flowics' })})
//}
const eventList = [
  // { text: 'AK', callback: () => webSocket.send({ action: 'set current state', statePostal: 'AK', sendData: 'flowics' })},
  // { text: 'AL', callback: () => webSocket.send({ action: 'set current state', statePostal: 'AL', sendData: 'flowics' })},
  // { text: 'AR', callback: () => webSocket.send({ action: 'set current state', statePostal: 'AR', sendData: 'flowics' })},
  { text: 'AZ', callback: () => webSocket.send({ action: 'set current state', statePostal: 'AZ', sendData: 'flowics' })},
  { text: 'CA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'CA', sendData: 'flowics' })},
  // { text: 'CO', callback: () => webSocket.send({ action: 'set current state', statePostal: 'CO', sendData: 'flowics' })},
  // { text: 'CT', callback: () => webSocket.send({ action: 'set current state', statePostal: 'CT', sendData: 'flowics' })},
  // { text: 'DC', callback: () => webSocket.send({ action: 'set current state', statePostal: 'DC', sendData: 'flowics' })},
  // { text: 'DE', callback: () => webSocket.send({ action: 'set current state', statePostal: 'DE', sendData: 'flowics' })},
  { text: 'FL', callback: () => webSocket.send({ action: 'set current state', statePostal: 'FL', sendData: 'flowics' })},
  // { text: 'GA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'GA', sendData: 'flowics' })},
  // { text: 'HI', callback: () => webSocket.send({ action: 'set current state', statePostal: 'HI', sendData: 'flowics' })},
  // { text: 'IA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'IA', sendData: 'flowics' })},
  { text: 'ID', callback: () => webSocket.send({ action: 'set current state', statePostal: 'ID', sendData: 'flowics' })},
  // { text: 'IL', callback: () => webSocket.send({ action: 'set current state', statePostal: 'IL', sendData: 'flowics' })},
  // { text: 'IN', callback: () => webSocket.send({ action: 'set current state', statePostal: 'IN', sendData: 'flowics' })},
  // { text: 'KS', callback: () => webSocket.send({ action: 'set current state', statePostal: 'KS', sendData: 'flowics' })},
  // { text: 'KY', callback: () => webSocket.send({ action: 'set current state', statePostal: 'KY', sendData: 'flowics' })},
  // { text: 'LA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'LA', sendData: 'flowics' })},
  { text: 'MA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MA', sendData: 'flowics' })},
  // { text: 'MD', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MD', sendData: 'flowics' })},
  // { text: 'ME', callback: () => webSocket.send({ action: 'set current state', statePostal: 'ME', sendData: 'flowics' })},
  // { text: 'MI', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MI', sendData: 'flowics' })},
  // { text: 'MN', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MN', sendData: 'flowics' })},
  // { text: 'MO', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MO', sendData: 'flowics' })},
  // { text: 'MS', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MS', sendData: 'flowics' })},
  { text: 'MT', callback: () => webSocket.send({ action: 'set current state', statePostal: 'MT', sendData: 'flowics' })},
  // { text: 'NC', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NC', sendData: 'flowics' })},
  // { text: 'ND', callback: () => webSocket.send({ action: 'set current state', statePostal: 'ND', sendData: 'flowics' })},
  // { text: 'NE', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NE', sendData: 'flowics' })},
  { text: 'NH', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NH', sendData: 'flowics' })},
  // { text: 'NJ', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NJ', sendData: 'flowics' })},
  // { text: 'NM', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NM', sendData: 'flowics' })},
  { text: 'NV', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NV', sendData: 'flowics' })},
  // { text: 'NY', callback: () => webSocket.send({ action: 'set current state', statePostal: 'NY', sendData: 'flowics' })},
  // { text: 'OH', callback: () => webSocket.send({ action: 'set current state', statePostal: 'OH', sendData: 'flowics' })},
  // { text: 'OK', callback: () => webSocket.send({ action: 'set current state', statePostal: 'OK', sendData: 'flowics' })},
  { text: 'OR', callback: () => webSocket.send({ action: 'set current state', statePostal: 'OR', sendData: 'flowics' })},
  // { text: 'PA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'PA', sendData: 'flowics' })},
  // { text: 'RI', callback: () => webSocket.send({ action: 'set current state', statePostal: 'RI', sendData: 'flowics' })},
  // { text: 'SC', callback: () => webSocket.send({ action: 'set current state', statePostal: 'SC', sendData: 'flowics' })},
  // { text: 'SD', callback: () => webSocket.send({ action: 'set current state', statePostal: 'SD', sendData: 'flowics' })},
  // { text: 'TN', callback: () => webSocket.send({ action: 'set current state', statePostal: 'TN', sendData: 'flowics' })},
  { text: 'TX', callback: () => webSocket.send({ action: 'set current state', statePostal: 'TX', sendData: 'flowics' })},
  // { text: 'UT', callback: () => webSocket.send({ action: 'set current state', statePostal: 'UT', sendData: 'flowics' })},
  // { text: 'VA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'VA', sendData: 'flowics' })},
  { text: 'VT', callback: () => webSocket.send({ action: 'set current state', statePostal: 'VT', sendData: 'flowics' })},
  { text: 'WA', callback: () => webSocket.send({ action: 'set current state', statePostal: 'WA', sendData: 'flowics' })},
  // { text: 'WI', callback: () => webSocket.send({ action: 'set current state', statePostal: 'WI', sendData: 'flowics' })},
  // { text: 'WV', callback: () => webSocket.send({ action: 'set current state', statePostal: 'WV', sendData: 'flowics' })},
  { text: 'WY', callback: () => webSocket.send({ action: 'set current state', statePostal: 'WY', sendData: 'flowics' })}
];


////////////////////
//// Websockets ////
////////////////////
/**
 * Die Klasse bündelt die Funktionen für den Websocket. Falls die Verbindung
 * verloren geht, wird beim nächsten Sendung versucht, eine neue aufzubauen.
 */
class WS {
  static #URL = 'http://localhost:3000/data-providers/ap/current-state';
  #websocket;

  constructor() {
    this.#init();
  }

  #init(data) {
    console.log('INIT!');
    this.#websocket = new WebSocket(WS.#URL);
    this.#websocket.addEventListener('close', () =>
      console.log('Websocket closed.'),
    );
    this.#websocket.addEventListener('open', () => {
      console.log('Websocket opened.');
      if (data) {
        this.send(data);
      }
    });
    this.#websocket.addEventListener('error', () =>
      console.log('Websocket error.'),
    );
  }

  send(data) {
    const toSend = { data };
    if (this.#websocket.readyState !== WebSocket.OPEN) {
      this.#init(data);
    } else {
      this.#websocket.send(JSON.stringify(toSend));
    }
  }
}

////////////////////////
//// Site structure ////
////////////////////////
/**
 * Die Funktion liest die Struktur des Trees im Flowics aus.
 *
 * @returns {object} Die Struktur der Seite
 */
const getSiteStructure = () => {
  const structure = {};
  document.querySelectorAll('div[data-cy^="Region-"]').forEach((region) => {
    structure[region.dataset.cy] = { element: region };
    region.querySelectorAll('div[data-cy^="Overlay-"]').forEach((overlay) => {
      structure[region.dataset.cy][overlay.dataset.cy] = getChildren(overlay);
    });
  });
  return structure;
};

/**
 * Die Funktion sucht nach direkten Kindern des übergebenen Elements und wird
 * rekuriv aufgerufen um die darauffolgenden Kinder zu finden. So entsteht ein
 * Tree im json Format.
 *
 * @param {*} element
 * @returns {object} Die direkten Kindelemente eines Elements
 */
const getChildren = (element) => {
  const children = { element };

  if (element.dataset.cy.startsWith('Text-')) {
    children.text = element.querySelector(
      '[data-cy="Text-content"]',
    ).textContent;
  }

  element
    .querySelectorAll(':scope > [data-cy^="Container-"]')
    .forEach(
      (container) => (children[container.dataset.cy] = getChildren(container)),
    );
  element
    .querySelectorAll(':scope > [data-cy^="Text-"]')
    .forEach((text) => (children[text.dataset.cy] = getChildren(text)));
  element
    .querySelectorAll(':scope > [data-cy^="Image-"]')
    .forEach((image) => (children[image.dataset.cy] = getChildren(image)));
  element
    .querySelectorAll(':scope > [data-cy^="Rectangle-"]')
    .forEach(
      (rectangle) => (children[rectangle.dataset.cy] = getChildren(rectangle)),
    );
  return children;
};

///////////////////////
//// Adding Events ////
///////////////////////
/**
 * Sucht nach dem nächsten Parent der ein Flowics Container ist und fügt diesem
 * Paren ein click event hinzu.
 *
 * @param {string} text
 * @param {Function} callback
 */
const addClickEvent = (text, callback) => {
  const textElement = findNode(siteStructure, 'text', text).element;
  textElement
    .closest('[data-cy^="Text-"]')
    .addEventListener('click', callback);
};

/**
 * Sucht in einem verschachtelten object nach einem key value Paar
 *
 * @param {object} obj
 * @param {string} key
 * @param {string} value
 * @returns
 */
const findNode = (obj, key, value) => {
  if (obj[key] == value) return obj;
  return Object.entries(obj).reduce(
    (acc, [k, v]) =>
      k !== 'element' && typeof v === 'object'
        ? { ...acc, ...findNode(v, key, value) }
        : {},
    {},
  );
};

/*
const postRequest = async (url, body) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
*/

//////////////
//// INIT ////
//////////////
let timer;
const observer = new MutationObserver((mutations, observer) => {
    if (mutations.every(mutation => mutation.target.closest('[data-cy^="TextCrawler-"]') === null)) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        observer.disconnect();
        init();
    }, 750);
    }
});

const waitForDomContent = () => {
    console.log('waitForDomContent')
    setTimeout(() => {
        const rootContainer = document.querySelector('#root-container')
        console.log(rootContainer);

        if (rootContainer !== null) {
            observer.observe(rootContainer, {
            attributes: false,
            childList: true,
            subtree: true,
            });
        } else {
            waitForDomContent()
        }
    }, 500)
}
waitForDomContent();

let webSocket;
let siteStructure;
const init = () => {
  // Create the websocket for the communication to the data serer.
  webSocket = new WS();

  // Read the structure of the flowics package.
  siteStructure = getSiteStructure();

  // Add the needed events.
  eventList.forEach((event) => addClickEvent(event.text, event.callback));
};
