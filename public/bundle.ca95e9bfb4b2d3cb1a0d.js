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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**\\r\\n * Body CSS\\r\\n */\\r\\n\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ninput,\\r\\ntextarea,\\r\\nbutton {\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -moz-osx-font-smoothing: grayscale;\\r\\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\\r\\n}\\r\\n\\r\\n\\r\\n/**\\r\\n * Sidebar CSS\\r\\n */\\r\\n\\r\\n#sidebar {\\r\\n    background-color: #2196f3;\\r\\n    padding: 15px;\\r\\n    color: #fff;\\r\\n}\\r\\n.sidebar-title{\\r\\n    margin: 0;\\r\\n    font-size: 24px;\\r\\n    line-height: 1.3;\\r\\n    padding-bottom: 10px;\\r\\n}\\r\\n.sidebar-info{\\r\\n    padding: 0 0 10px;\\r\\n}\\r\\n.sidebar-info p{\\r\\n    margin: 0;\\r\\n}\\r\\n.sidebar-info small{\\r\\n    font-weight: bold;\\r\\n    color: #000;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n    #sidebar {\\r\\n        position: fixed;\\r\\n        top: 0;\\r\\n        bottom: 0;\\r\\n        width: 180px;\\r\\n        height: 100%;\\r\\n        padding-top: 30px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.mui-form{\\r\\n    margin-bottom: 20px;\\r\\n    padding-top: 20px;\\r\\n}\\r\\n\\r\\n.list{\\r\\n    list-style: none;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n.list li{\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.floating-btn{\\r\\n    position: fixed;\\r\\n    bottom: 50px;\\r\\n    right: 50px;\\r\\n}\\r\\n.modal{\\r\\n    max-width: 600px;\\r\\n    margin: 100px auto;\\r\\n    background: #fff;\\r\\n    padding: 50px 20px;\\r\\n}\\r\\n.modal-title{\\r\\n    margin: 0;\\r\\n    padding-bottom: 5px;\\r\\n    text-align: center;\\r\\n}\\r\\n.modal-content{\\r\\n\\r\\n}\\r\\n.modal-content .mui-form{\\r\\n    padding: 0;\\r\\n}\\r\\n/**\\r\\n * Content CSS\\r\\n */\\r\\n@media (min-width: 768px) {\\r\\n    #content {\\r\\n        margin-left: 180px;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-app-firebase/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-app-firebase/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://js-app-firebase/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-app-firebase/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAuthForm\": () => (/* binding */ getAuthForm),\n/* harmony export */   \"authWithLoginAndPass\": () => (/* binding */ authWithLoginAndPass)\n/* harmony export */ });\nfunction getAuthForm() {\r\n    const html = `\r\n            <form class=\"mui-form\" id=\"auth-form\">\r\n                <div class=\"mui-textfield mui-textfield--float-label\">\r\n                    <input id=\"email\" type=\"text\" required>\r\n                    <label for=\"email\">Email</label>\r\n                </div>\r\n                <div class=\"mui-textfield mui-textfield--float-label\">\r\n                    <input id=\"password\" type=\"password\" required>\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n                <button type=\"submit\" class=\"mui-btn mui-btn--raised mui-btn--primary\">Login</button>\r\n            </form>\r\n    `;\r\n    return html;\r\n}\r\n\r\n\r\nfunction authWithLoginAndPass(email, password) {\r\n    const apiKey = 'AIzaSyDSDC1pOcCyj1Q4mgkZMBe_Btx9QLhSUuU';\r\n    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            email, password, returnSecureToken: true\r\n        }),\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        }\r\n    })\r\n        .then(response => response.json())\r\n        .then(data => data.idToken)\r\n}\r\n\n\n//# sourceURL=webpack://js-app-firebase/./src/auth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/question.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', _question__WEBPACK_IMPORTED_MODULE_2__.Question.renderList);\r\n\r\n\r\nconst form = document.getElementById('form');\r\nform.addEventListener('submit', submitFormHandler)\r\n\r\nfunction submitFormHandler($event) {\r\n    $event.preventDefault();\r\n    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValid)(input.value)) {\r\n        const question = {\r\n            text: input.value.trim(),\r\n            date: new Date().toJSON(),\r\n        }\r\n\r\n        submitBtn.disabled = true;\r\n        //Async request to API\r\n        _question__WEBPACK_IMPORTED_MODULE_2__.Question.create(question).then((res) => {\r\n            input.value = \"\";\r\n            input.className = \"\";\r\n        });\r\n    }\r\n}\r\n\r\n\r\nconst submitBtn = form.querySelector('#submit');\r\nconst input = form.querySelector('#ask');\r\ninput.addEventListener('input', () => {\r\n    submitBtn.disabled = !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValid)(input.value)\r\n})\r\n\r\n\r\nconst modalBtn = document.querySelector('#modal-btn');\r\nmodalBtn.addEventListener('click', openModal);\r\n\r\n\r\nfunction openModal() {\r\n    console.log(\"openModal\")\r\n    ;(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createModal)('Login', (0,_auth__WEBPACK_IMPORTED_MODULE_3__.getAuthForm)());\r\n    const authForm = document.getElementById('auth-form');\r\n    authForm.addEventListener('submit', authFormHandler, {once: true})\r\n}\r\n\r\nfunction authFormHandler($event) {\r\n    $event.preventDefault();\r\n    const btn = $event.target.querySelector('button');\r\n    const email = $event.target.querySelector('#email').value;\r\n    const password = $event.target.querySelector('#password').value;\r\n    btn.disabled = true;\r\n    (0,_auth__WEBPACK_IMPORTED_MODULE_3__.authWithLoginAndPass)(email, password)\r\n        .then((token) => _question__WEBPACK_IMPORTED_MODULE_2__.Question.fetchAllquestions(token))\r\n        .then(question => {\r\n            renderModalAfterAuth(question)\r\n            btn.disabled = false\r\n        });\r\n}\r\n\r\nfunction renderModalAfterAuth(content) {\r\n    console.log(\"Content\", content);\r\n    if (typeof content == \"string\"){\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createModal)(\"Error\", content)\r\n    }else {\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createModal)(\"Result\", _question__WEBPACK_IMPORTED_MODULE_2__.Question.listToHtml(content));\r\n        (0,_question__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(content);\r\n        _question__WEBPACK_IMPORTED_MODULE_2__.Question.renderList();\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-app-firebase/./src/index.js?");

/***/ }),

/***/ "./src/question.js":
/*!*************************!*\
  !*** ./src/question.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Question\": () => (/* binding */ Question),\n/* harmony export */   \"addToLocalStorage\": () => (/* binding */ addToLocalStorage)\n/* harmony export */ });\nconst baseUrl = 'https://js-app-firebase-default-rtdb.firebaseio.com/'\r\n\r\nclass Question {\r\n    static create(question) {\r\n        return fetch(`${baseUrl}/questions.json`, {\r\n            method: 'POST',\r\n            body: JSON.stringify(question),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        })\r\n            .then(res => res.json())\r\n            .then(res => {\r\n                question.id = res.name;\r\n                question.id = res.name;\r\n                return question;\r\n            })\r\n            .then(addToLocalStorage)\r\n            .then(Question.renderList);\r\n    }\r\n\r\n    static fetchAllquestions(token) {\r\n        if (!token) {\r\n            return Promise.resolve('<p class=\"error\">no token</p>')\r\n        }\r\n        return fetch(`${baseUrl}/questions.json?auth=${token}`)\r\n            .then(res => res.json())\r\n            .then(res => {\r\n                if (res && res.error) {\r\n                    return `Error: ${res.error}`;\r\n                }\r\n                return res ? Object.keys(res).map((key) => {\r\n                    return {...res[key], id: key}\r\n                }) : [];\r\n            })\r\n    }\r\n\r\n    static renderList() {\r\n        const questions = getKeyFromLocalStorage('questions');\r\n        const html = questions.length\r\n            ? questions.map(toCart).join(\" \")\r\n            : '<li class=\"list-item\">no data</li>';\r\n\r\n        const list = document.getElementById('list');\r\n        list.innerHTML = html;\r\n    }\r\n\r\n    static listToHtml(questions) {\r\n        return questions.length\r\n            ? `<ol>${questions.map(q=>`<li>${q.text}</li>`).join(' ')}</ol>`\r\n            : `<p>no questions yet</p>`;\r\n    }\r\n\r\n}\r\n\r\nfunction addToLocalStorage(question) {\r\n    const questions = getKeyFromLocalStorage('questions');\r\n    questions.push(question);\r\n    localStorage.setItem('questions', JSON.stringify(questions));\r\n    return question;\r\n}\r\n\r\nfunction getKeyFromLocalStorage(key) {\r\n    return JSON.parse(localStorage.getItem(key) || '[]');\r\n}\r\n\r\nfunction toCart(question) {\r\n\r\n    return `<li class=\"list-item\"><em>${new Date(question.date).toLocaleString()}</em><p>${question.text}</p></li>`\r\n}\r\n\n\n//# sourceURL=webpack://js-app-firebase/./src/question.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValid\": () => (/* binding */ isValid),\n/* harmony export */   \"createModal\": () => (/* binding */ createModal)\n/* harmony export */ });\nfunction isValid(value){\r\n    return value.length >=10;\r\n}\r\n\r\nfunction createModal(title, content){\r\n    var modal = document.createElement('div');\r\n    modal.classList.add('modal');\r\n\r\n    const html = `\r\n        <h1 class=\"modal-title\">${title}</h1>\r\n        <div class=\"modal-content\">${content}</div>\r\n    `;\r\n\r\n    modal.innerHTML = html;\r\n\r\n    mui.overlay('on', modal);\r\n}\r\n\n\n//# sourceURL=webpack://js-app-firebase/./src/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;