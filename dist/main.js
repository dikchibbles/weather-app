/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/findLocationJson.js":
/*!*********************************!*\
  !*** ./src/findLocationJson.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocationJson\": () => (/* binding */ getLocationJson)\n/* harmony export */ });\nasync function getLocationJson(location, units='metric') {\n    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=964d5713e914f8e5574cd64379128469`;\n    let response = await fetch(url);\n    let data = await response.json();\n    console.log(data)\n    return data;\n}\n\n//# sourceURL=webpack://weather-app/./src/findLocationJson.js?");

/***/ }),

/***/ "./src/imageLookup.js":
/*!****************************!*\
  !*** ./src/imageLookup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getImageFromGiphyAndReturnURL\": () => (/* binding */ getImageFromGiphyAndReturnURL)\n/* harmony export */ });\nasync function getImageFromGiphyAndReturnURL(word) {\n    let url = `https://api.giphy.com/v1/gifs/translate?api_key=wNb2C0ucoisHtIHM1KAd4L1RRhiTqJVL&s=${word}`\n    let response = await fetch(url, {mode: \"cors\"});\n    let data = await response.json();\n    let imageURL = data.data.images.original.url;\n    return imageURL;\n}\n\n//# sourceURL=webpack://weather-app/./src/imageLookup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _findLocationJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLocationJson */ \"./src/findLocationJson.js\");\n/* harmony import */ var _pageManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageManipulation */ \"./src/pageManipulation.js\");\n\n\n\nlet data = (0,_findLocationJson__WEBPACK_IMPORTED_MODULE_0__.getLocationJson)('Tehran');\n\n(0,_pageManipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n\ndocument.addEventListener('keypress', e => {\n    if (e.key === 'Enter') {\n        let searchInput = document.querySelector('#search').value.trim();\n        let newData = (0,_findLocationJson__WEBPACK_IMPORTED_MODULE_0__.getLocationJson)(searchInput);\n        (0,_pageManipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newData);\n    }\n})\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/pageManipulation.js":
/*!*********************************!*\
  !*** ./src/pageManipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addStatsToPage)\n/* harmony export */ });\n/* harmony import */ var _imageLookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageLookup */ \"./src/imageLookup.js\");\n\n\nasync function addStatsToPage(data) {\n    let stats = await data;\n    let cityName = stats.name;\n    let allItems = {\n        Longitude: stats.coord.lon, \n        Latitude: stats.coord.lat, \n        \"Wind Speed\": stats.wind.speed, \n        \"Wind Degrees\": stats.wind.deg, \n        Weather: stats.weather[0].description, \n        \"Feels Like\": stats.main.feels_like, \n        Humidity: stats.main.humidity, \n        Pressure: stats.main.pressure, \n        Temperature: stats.main.temp, \n        \"Min Temperature\": stats.main.temp_max, \n        \"Max Temperature\": stats.main.temp_min,\n    }\n\n    // Change the Name of the city on the main page\n    document.querySelector('.current-city').textContent = `Current City: ${cityName}`;\n\n    const containerStats = document.querySelector('#container-stats');\n    containerStats.innerHTML = '';\n    for (let [key, value] of Object.entries(allItems)) {\n        let newDiv = document.createElement('div');\n        newDiv.classList.add('stat');\n        let p = document.createElement('p');\n        p.innerHTML = `<strong>${key}</strong>: ${value}`\n        newDiv.append(p);\n        containerStats.append(newDiv)\n    }    \n}\n\n//# sourceURL=webpack://weather-app/./src/pageManipulation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;