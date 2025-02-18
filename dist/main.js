/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/styles.scss */ "./src/styles.scss");
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_terminal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/terminal.js */ "./src/terminal.js");



// Banner text
const banner = `

 :::====  :::= === :::=== 
 :::  === :::===== :::    
 ======== ========  ===== 
 ===  === === ====     ===
 ===  === ===  === ====== 

Technology Consulting

contact@ans.consulting



`;

// Help text
const helpText = `help - This output
ls - Lists files
cat <filename> - Lists file contents
cd <dir> - Enters directory
contact - Prints contact information
contact <key> - Open contact link
clear - Clears the display
`;

// Contact texts
const contactInfo = {
  email: 'contact@alexnicita.com',
  twitter: 'https://twitter.com/NicitaAlex'
};
const contactList = Object.keys(contactInfo).reduce((result, key) => result.concat([`${key} - ${contactInfo[key]}`]), []).join('\n');
const contactText = `

${contactList}

Use ex. 'contact twitter' to open the links.
`;
const openContact = key => window.open(key === 'email' ? `mailto:${contactInfo[key]}` : contactInfo[key]);

// File browser
const browser = function () {
  let current = '/';
  let tree = [
  // {
  //   location: '/',
  //   filename: 'documents',
  //   type: 'directory'
  // },
  // {
  //   location: '/',
  //   filename: 'AUTHOR',
  //   type: 'file',
  //   content: 'Alex Nicita <contact@alexnicita.com>'
  // }, 
  {
    location: '/',
    filename: 'CLIENTS',
    type: 'file',
    content: `
    
    Select clients include:

    Anchorage - anchorage.com
    Polymarket - polymarket.com
    Profound - tryprofound.com
    Scimitar - scimitarfinance.com
    NFG - networkforgooddaf.org
    `
  }];
  const fix = str => str.trim().replace(/\/+/g, '/') || '/';
  const setCurrent = dir => {
    if (typeof dir !== 'undefined') {
      if (dir == '..') {
        const parts = current.split('/');
        parts.pop();
        current = fix(parts.join('/'));
      } else {
        const found = tree.filter(iter => iter.location === current).find(iter => iter.filename === fix(dir));
        if (found) {
          current = fix(current + '/' + dir);
        } else {
          return `Directory '${dir}' not found in '${current}'`;
        }
      }
      return `Entered '${current}'`;
    }
    return current;
  };
  const ls = () => {
    const found = tree.filter(iter => iter.location === current);
    const fileCount = found.filter(iter => iter.type === 'file').length;
    const directoryCount = found.filter(iter => iter.type === 'directory').length;
    const status = `${fileCount} file(s), ${directoryCount} dir(s)`;
    const maxlen = Math.max(...found.map(iter => iter.filename).map(n => n.length));
    const list = found.map(iter => {
      return `${iter.filename.padEnd(maxlen + 1, ' ')}`;
    }).join('\n');
    return `${list}\n\n${status} in ${current}`;
  };
  const cat = filename => {
    const found = tree.filter(iter => iter.location === current);
    const foundFile = found.find(iter => iter.filename === filename);
    if (foundFile) {
      return foundFile.content;
    }
    return `File '${filename}' not found in '${current}'`;
  };
  return {
    cwd: () => setCurrent(),
    pwd: () => setCurrent(),
    cd: dir => setCurrent(fix(dir)),
    cat,
    ls
  };
}();

///////////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////////////

const load = () => {
  // Create hidden input element
  const hiddenInput = document.createElement('input');
  hiddenInput.style.position = 'absolute';
  hiddenInput.style.opacity = '0';
  hiddenInput.style.height = '0';
  hiddenInput.style.width = '0';
  document.body.appendChild(hiddenInput);

  // Add click event listener to document
  document.addEventListener('click', () => {
    hiddenInput.focus();
  });
  const t = Object(_src_terminal_js__WEBPACK_IMPORTED_MODULE_1__["terminal"])({
    prompt: () => `$ ${browser.cwd()} > `,
    banner,
    commands: {
      help: () => helpText,
      cwd: () => browser.cwd(),
      pwd: () => browser.cwd(),
      cd: dir => browser.cd(dir),
      ls: () => browser.ls(),
      cat: file => browser.cat(file),
      clear: () => t.clear(),
      contact: key => {
        if (key in contactInfo) {
          openContact(key);
          return `Opening ${key} - ${contactInfo[key]}`;
        }
        return contactText;
      }
    }
  });
};
document.addEventListener('DOMContentLoaded', load);

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/terminal.js":
/*!*************************!*\
  !*** ./src/terminal.js ***!
  \*************************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminal", function() { return terminal; });
// Creates initial options
const createOptions = opts => Object.assign({}, {
  banner: 'Hello World',
  prompt: () => '$ > ',
  tickrate: 1000 / 60,
  buflen: 8,
  commands: {}
}, opts || {});

// Creates our textarea element
const createElement = root => {
  const el = document.createElement('textarea');
  el.contentEditable = true;
  el.spellcheck = false;
  el.value = '';
  root.appendChild(el);
  return el;
};

// Keys that must be ignored

// Sets text selection range
const setSelectionRange = input => {
  const length = input.value.length;
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(length, length);
  } else if (input.createTextRange) {
    const range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', length);
    range.moveStart('character', length);
    range.select();
  }
};

// Gets the font size of an element
const getFontSize = element => parseInt(window.getComputedStyle(element).getPropertyValue('font-size'), 10);

// Creates the rendering loop
const renderer = (tickrate, onrender) => {
  let lastTick = 0;
  const tick = time => {
    const now = performance.now();
    const delta = now - lastTick;
    if (delta > tickrate) {
      lastTick = now - delta % tickrate;
      onrender();
    }
    window.requestAnimationFrame(tick);
  };
  return tick;
};

// Pronts buffer onto the textarea
const printer = ($element, buflen) => buffer => {
  if (buffer.length > 0) {
    const len = Math.min(buflen, buffer.length);
    const val = buffer.splice(0, len);
    $element.value += val.join('');
    setSelectionRange($element);
    $element.scrollTop = $element.scrollHeight;
    return true;
  }
  return false;
};

// Parses input
const parser = onparsed => str => {
  if (str.length) {
    const args = str.split(' ').map(s => s.trim());
    const cmd = args.splice(0, 1)[0];
    console.debug(cmd, args);
    onparsed(cmd, ...args);
  }
};

// Command executor
const executor = commands => (cmd, ...args) => cb => {
  try {
    commands[cmd] ? cb(commands[cmd](...args) + '\n') : cb(`No such command '${cmd}'\n`);
  } catch (e) {
    console.warn(e);
    cb(`Exception: ${e}\n`);
  }
};

// Handle keyboard events
const keyboard = parse => {
  let input = [];
  const keys = {
    8: 'backspace',
    13: 'enter'
  };
  const ignoreKey = code => code >= 33 && code <= 40;
  const key = ev => keys[ev.which || ev.keyCode];
  return {
    keypress: ev => {
      if (key(ev) === 'enter') {
        input.push('\n'); // Add newline to input first
        const str = input.join('').trim();
        parse(str);
        input = [];
      } else if (key(ev) !== 'backspace') {
        input.push(String.fromCharCode(ev.which || ev.keyCode));
      }
    },
    keydown: ev => {
      if (key(ev) === 'backspace') {
        if (input.length > 0) {
          input.pop();
        } else {
          ev.preventDefault();
        }
      } else if (ignoreKey(ev.keyCode)) {
        ev.preventDefault();
      }
    }
  };
};

// Creates the terminal
const terminal = opts => {
  let buffer = []; // What will be output to display
  let busy = false; // If we cannot type at the moment

  const {
    prompt,
    banner,
    commands,
    buflen,
    tickrate
  } = createOptions(opts);
  const $root = document.querySelector('#terminal');
  const $element = createElement($root);
  const fontSize = getFontSize($element);
  const width = $element.offsetWidth;
  const cwidth = Math.round(width / fontSize * 1.9); // FIXME: Should be calculated via canvas

  const output = (output, center) => {
    let lines = output.split(/\n/);
    if (center) {
      lines = lines.map(line => line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line);
    }

    // Ensure proper spacing with explicit newlines
    const append = '\n' + lines.join('\n') + '\n' + prompt();
    buffer = buffer.concat(append.split(''));
  };
  const print = printer($element, buflen);
  const execute = executor(commands);
  const onrender = () => busy = print(buffer);
  const onparsed = (cmd, ...args) => execute(cmd, ...args)(output);
  const render = renderer(tickrate, onrender);
  const parse = parser(onparsed);
  const focus = () => setTimeout(() => $element.focus(), 1);
  const kbd = keyboard(parse);
  const clear = () => $element.value = '';
  const input = ev => busy ? ev.preventDefault() : kbd[ev.type](ev);
  $element.addEventListener('focus', () => setSelectionRange($element));
  $element.addEventListener('blur', focus);
  $element.addEventListener('keypress', input);
  $element.addEventListener('keydown', input);
  window.addEventListener('focus', focus);
  $root.addEventListener('click', focus);
  $root.appendChild($element);
  render();
  output(banner, true);
  focus();
  return {
    focus,
    parse,
    clear,
    print: output
  };
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/utils/misc/ans/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map