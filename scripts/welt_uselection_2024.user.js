// ==UserScript==
// @name         US election 2024 @WELT
// @namespace    http://tampermonkey.net/
// @version      2024-07-25
// @description  Helper script for the us eleciton 2024. The script is used to control the artist and the data update from flowics.
// @author       v-sion GmbH
// @match        https://viz.flowics.com/public/ae704a85a5d4cad3798434fa4e0a4374/669abdc9681ab419a091ee46/live
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowics.com
// @grant        none
// @run-at document-start
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
const eventList = [
  {
    text: 'State 1',
    callback: () => webSocket.send({ postalCode: '1', sendData: 'flowics' }),
  },
  {
    text: 'State 2',
    callback: () => webSocket.send({ postalCode: '2', sendData: 'flowics' }),
  },
  {
    text: 'State 3',
    callback: () => webSocket.send({ postalCode: '3', sendData: 'flowics' }),
  },
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
    .closest('[data-cy^="Container-"]')
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

document.addEventListener('DOMContentLoaded', () => {
  /**
   * We observe the #root-container because we don't know when loading the
   * flowics package is finished. After adding the first element to the #root-
   * container the timeout is set to one second. If there will be more elements
   * added within this second the timer starts again. After one second we assume
   * that the loading is finished and start initilising our stuff.
   */
  let timer;
  const observer = new MutationObserver((mutationList, observer) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      observer.disconnect();
      init();
    }, 1000);
  });

  observer.observe(document.querySelector('#root-container'), {
    attributes: true,
    childList: true,
    subtree: true,
  });
});

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
