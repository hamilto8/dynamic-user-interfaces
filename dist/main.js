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

/***/ "./src/imageGallery.js":
/*!*****************************!*\
  !*** ./src/imageGallery.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nextSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextSlide */ \"./src/nextSlide.js\");\n\r\n\r\nconst imageGallery = () => {\r\n    const galleryDiv = document.createElement('div');\r\n    // <i class=\"far fa-images\"></i>\r\n        galleryDiv.classList.add('image-gallery');\r\n    const leftArrow = document.createElement('p');\r\n        leftArrow.innerHTML = `<i class=\"fas fa-arrow-left left-key\"></i>`;\r\n        leftArrow.addEventListener('click', _nextSlide__WEBPACK_IMPORTED_MODULE_0__.default);\r\n        leftArrow.addEventListener('keydown', e =>{\r\n            if(e.code === 37){\r\n                console.log('left arrow hit');\r\n            }\r\n        });\r\n    const rightArrow = document.createElement('p');\r\n        rightArrow.innerHTML = `<i class=\"fas fa-arrow-right right-key\"></i>`;\r\n        rightArrow.addEventListener('click', _nextSlide__WEBPACK_IMPORTED_MODULE_0__.default);\r\n        rightArrow.addEventListener('keypress', _nextSlide__WEBPACK_IMPORTED_MODULE_0__.default);\r\n        galleryDiv.appendChild(leftArrow);\r\n        galleryDiv.appendChild(rightArrow);\r\n    return galleryDiv\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageGallery);\n\n//# sourceURL=webpack://dynamic-user-interfaces/./src/imageGallery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _imageGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageGallery */ \"./src/imageGallery.js\");\n/* harmony import */ var _nextSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextSlide */ \"./src/nextSlide.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst homeTab = document.querySelector('.home-tab');\r\nconst blogTab = document.querySelector('.blog-tab');\r\nconst aboutTab = document.querySelector('.about-tab');\r\nconst galleryLink = document.querySelector('.gallery-link');\r\n\r\nhomeTab.addEventListener('click', showHome);\r\naboutTab.addEventListener('click', showAbout);\r\nblogTab.addEventListener('click', showBlog);\r\ngalleryLink.addEventListener('click', showGallery);\r\n\r\nfunction showHome() {\r\n    console.log(\"Showing home...\");\r\n};\r\n\r\nfunction showBlog() {\r\n    console.log('Showing blog...');\r\n};\r\n\r\nfunction showAbout()  {\r\n    console.log('Showing about...');\r\n};\r\n\r\nfunction showGallery() {\r\n    const mainPage = contentDiv.querySelector('.main-page');\r\n    contentDiv.removeChild(mainPage);\r\n    contentDiv.appendChild((0,_imageGallery__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n}\r\n\r\ndocument.onload = contentDiv.appendChild((0,_mainPage__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n//# sourceURL=webpack://dynamic-user-interfaces/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainPage = () => {\r\n    const mainPageDiv = document.createElement('div');\r\n    mainPageDiv.classList.add('main-page');\r\n    mainPageDiv.innerHTML = `\r\n        <h1 class=\"header\">Content Lives Here</h1>\r\n\r\n        <p>\r\n            \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\r\n        </p>\r\n        <p>\r\n            \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\r\n        </p>\r\n        <p>\r\n            \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\r\n        </p>\r\n    `;\r\n    return mainPageDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\n\n//# sourceURL=webpack://dynamic-user-interfaces/./src/mainPage.js?");

/***/ }),

/***/ "./src/nextSlide.js":
/*!**************************!*\
  !*** ./src/nextSlide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showNextSlide = (e) => {\r\n    console.log(e.target);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNextSlide);\n\n//# sourceURL=webpack://dynamic-user-interfaces/./src/nextSlide.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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