webpackJsonp([ 0 ], {
    /***/
    25: /***/
    function(module, exports) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function() {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function toString() {
                for (var result = [], i = 0; i < this.length; i++) {
                    var item = this[i];
                    item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
                }
                return result.join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    },
    /***/
    26: /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            // This method of obtaining a reference to the global object needs to be
            // kept identical to the way it is obtained in runtime.js
            var g = "object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this, hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0, oldRuntime = hadRuntime && g.regeneratorRuntime;
            if (// Force reevalutation of runtime.js.
            g.regeneratorRuntime = void 0, module.exports = __webpack_require__(34), hadRuntime) // Restore the original runtime.
            g.regeneratorRuntime = oldRuntime; else // Remove the global property added by runtime.js.
            try {
                delete g.regeneratorRuntime;
            } catch (e) {
                g.regeneratorRuntime = void 0;
            }
        }).call(exports, __webpack_require__(11));
    },
    /***/
    27: /***/
    function(module, exports) {
        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function listToStyles(list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        function insertStyleElement(options, styleElement) {
            var head = getHeadElement(), lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
            if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), 
            styleElementsInsertedAtTop.push(styleElement); else {
                if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                head.appendChild(styleElement);
            }
        }
        function removeStyleElement(styleElement) {
            styleElement.parentNode.removeChild(styleElement);
            var idx = styleElementsInsertedAtTop.indexOf(styleElement);
            idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
        }
        function createStyleElement(options) {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css", insertStyleElement(options, styleElement), 
            styleElement;
        }
        function createLinkElement(options) {
            var linkElement = document.createElement("link");
            return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), 
            linkElement;
        }
        function addStyle(obj, options) {
            var styleElement, update, remove;
            if (options.singleton) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
            } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
            update = updateLink.bind(null, styleElement), remove = function() {
                removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
            }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
            remove = function() {
                removeStyleElement(styleElement);
            });
            return update(obj), function updateStyle(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css, media = obj.media;
            if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        function updateLink(linkElement, obj) {
            var css = obj.css, sourceMap = obj.sourceMap;
            sourceMap && (// http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
            var blob = new Blob([ css ], {
                type: "text/css"
            }), oldSrc = linkElement.href;
            linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        var stylesInDom = {}, memoize = function(fn) {
            var memo;
            return function() {
                return "undefined" == typeof memo && (memo = fn.apply(this, arguments)), memo;
            };
        }, isOldIE = memoize(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }), getHeadElement = memoize(function() {
            return document.head || document.getElementsByTagName("head")[0];
        }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
        module.exports = function(list, options) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            options = options || {}, // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            "undefined" == typeof options.singleton && (options.singleton = isOldIE()), // By default, add <style> tags to the bottom of <head>.
            "undefined" == typeof options.insertAt && (options.insertAt = "bottom");
            var styles = listToStyles(list);
            return addStylesToDom(styles, options), function update(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                if (newList) {
                    var newStyles = listToStyles(newList);
                    addStylesToDom(newStyles, options);
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };
        var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    },
    /***/
    32: /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(25)(), // imports
        // module
        exports.push([ module.i, "body {\n  background-color: gray; }\n", "" ]);
    },
    /***/
    33: /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(25)(), // imports
        // module
        exports.push([ module.i, 'body {\n  margin: 0; }\n\n.splash {\n  text-align: center;\n  margin: 10% 0 0 0;\n  box-sizing: border-box; }\n\n.splash .message {\n  font-size: 72px;\n  line-height: 72px;\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\n  text-transform: uppercase;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }\n\n.splash .fa-spinner {\n  text-align: center;\n  display: inline-block;\n  font-size: 72px;\n  margin-top: 50px; }\n\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@media print {\n  .page-host {\n    position: absolute;\n    left: 10px;\n    right: 0;\n    top: 50px;\n    bottom: 0;\n    overflow-y: inherit;\n    overflow-x: inherit; } }\n\nsection {\n  margin: 0 20px; }\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px; }\n\n.pictureDetail {\n  max-width: 425px; }\n\n/* animate page transitions */\nsection.au-enter-active {\n  -webkit-animation: fadeInRight 1s;\n  animation: fadeInRight 1s; }\n\ndiv.au-stagger {\n  /* 50ms will be applied between each successive enter operation */\n  -webkit-animation-delay: 50ms;\n  animation-delay: 50ms; }\n\n.card-container.au-enter {\n  opacity: 0 !important; }\n\n.card-container.au-enter-active {\n  -webkit-animation: fadeIn 2s;\n  animation: fadeIn 2s; }\n\n.card {\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #CCC;\n  border-radius: 8px;\n  text-align: center;\n  padding: 0;\n  background-color: #337ab7;\n  color: #88acd9;\n  margin-bottom: 32px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n.card .content {\n  margin-top: 10px; }\n\n.card .content .name {\n  color: white;\n  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);\n  font-size: 18px; }\n\n.card .header-bg {\n  /* This stretches the canvas across the entire hero unit */\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  border-bottom: 1px #FFF solid;\n  border-radius: 6px 6px 0 0; }\n\n.card .avatar {\n  position: relative;\n  margin-top: 15px;\n  z-index: 100; }\n\n.card .avatar img {\n  width: 100px;\n  height: 100px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  border: 2px #FFF solid; }\n\n/* animation definitions */\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n', "" ]);
    },
    /***/
    34: /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(global, Promise, process) {
            /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
            !function(global) {
                "use strict";
                function wrap(innerFn, outerFn, self, tryLocsList) {
                    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
                    // The ._invoke method unifies the implementations of the .next,
                    // .throw, and .return methods.
                    return generator._invoke = makeInvokeMethod(innerFn, self, context), generator;
                }
                // Try/catch helper to minimize deoptimizations. Returns a completion
                // record like context.tryEntries[i].completion. This interface could
                // have been (and was previously) designed to take a closure to be
                // invoked without arguments, but in all the cases we care about we
                // already have an existing method we want to call, so there's no need
                // to create a new function object. We can even get away with assuming
                // the method takes exactly one argument, since that happens to be true
                // in every case, so we don't have to touch the arguments object. The
                // only additional allocation required is the completion record, which
                // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
                    try {
                        return {
                            type: "normal",
                            arg: fn.call(obj, arg)
                        };
                    } catch (err) {
                        return {
                            type: "throw",
                            arg: err
                        };
                    }
                }
                // Dummy constructor functions that we use as the .constructor and
                // .constructor.prototype properties for functions that return Generator
                // objects. For full spec compliance, you may wish to configure your
                // minifier not to mangle the names of these two functions.
                function Generator() {}
                function GeneratorFunction() {}
                function GeneratorFunctionPrototype() {}
                // Helper for defining the .next, .throw, and .return methods of the
                // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
                    [ "next", "throw", "return" ].forEach(function(method) {
                        prototype[method] = function(arg) {
                            return this._invoke(method, arg);
                        };
                    });
                }
                function AwaitArgument(arg) {
                    this.arg = arg;
                }
                function AsyncIterator(generator) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if ("throw" !== record.type) {
                            var result = record.arg, value = result.value;
                            return value instanceof AwaitArgument ? Promise.resolve(value.arg).then(function(value) {
                                invoke("next", value, resolve, reject);
                            }, function(err) {
                                invoke("throw", err, resolve, reject);
                            }) : Promise.resolve(value).then(function(unwrapped) {
                                // When a yielded Promise is resolved, its final value becomes
                                // the .value of the Promise<{value,done}> result for the
                                // current iteration. If the Promise is rejected, however, the
                                // result for this iteration will be rejected with the same
                                // reason. Note that rejections of yielded Promises are not
                                // thrown back into the generator function, as is the case
                                // when an awaited Promise is rejected. This difference in
                                // behavior between yield and await is important, because it
                                // allows the consumer to decide what to do with the yielded
                                // rejection (swallow it and continue, manually .throw it back
                                // into the generator, abandon iteration, whatever). With
                                // await, by contrast, there is no opportunity to examine the
                                // rejection reason outside the generator function, so the
                                // only option is to throw it from the await expression, and
                                // let the generator function handle the exception.
                                result.value = unwrapped, resolve(result);
                            }, reject);
                        }
                        reject(record.arg);
                    }
                    function enqueue(method, arg) {
                        function callInvokeWithMethodAndArg() {
                            return new Promise(function(resolve, reject) {
                                invoke(method, arg, resolve, reject);
                            });
                        }
                        // If enqueue has been called before, then we want to wait until
                        // all previous Promises have been resolved before calling invoke,
                        // so that results are always delivered in the correct order. If
                        // enqueue has not been called before, then it is important to
                        // call invoke immediately, without waiting on a callback to fire,
                        // so that the async generator function has the opportunity to do
                        // any necessary setup in a predictable way. This predictability
                        // is why the Promise constructor synchronously invokes its
                        // executor callback, and why async functions synchronously
                        // execute code before the first await. Since we implement simple
                        // async functions in terms of async generators, it is especially
                        // important to get this right, even though it requires care.
                        // Avoid propagating failures to Promises returned by later
                        // invocations of the iterator.
                        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                    }
                    "object" == typeof process && process.domain && (invoke = process.domain.bind(invoke));
                    var previousPromise;
                    // Define the unified helper method that is used to implement .next,
                    // .throw, and .return (see defineIteratorMethods).
                    this._invoke = enqueue;
                }
                function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;
                    return function invoke(method, arg) {
                        if (state === GenStateExecuting) throw new Error("Generator is already running");
                        if (state === GenStateCompleted) {
                            if ("throw" === method) throw arg;
                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                            return doneResult();
                        }
                        for (;;) {
                            var delegate = context.delegate;
                            if (delegate) {
                                if ("return" === method || "throw" === method && delegate.iterator[method] === undefined) {
                                    // A return or throw (when the delegate iterator has no throw
                                    // method) always terminates the yield* loop.
                                    context.delegate = null;
                                    // If the delegate iterator has a return method, give it a
                                    // chance to clean up.
                                    var returnMethod = delegate.iterator.return;
                                    if (returnMethod) {
                                        var record = tryCatch(returnMethod, delegate.iterator, arg);
                                        if ("throw" === record.type) {
                                            // If the return method threw an exception, let that
                                            // exception prevail over the original return or throw.
                                            method = "throw", arg = record.arg;
                                            continue;
                                        }
                                    }
                                    if ("return" === method) // Continue with the outer return, now that the delegate
                                    // iterator has been terminated.
                                    continue;
                                }
                                var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
                                if ("throw" === record.type) {
                                    context.delegate = null, // Like returning generator.throw(uncaught), but without the
                                    // overhead of an extra function call.
                                    method = "throw", arg = record.arg;
                                    continue;
                                }
                                // Delegate generator ran and handled its own exceptions so
                                // regardless of what the method was, we continue as if it is
                                // "next" with an undefined arg.
                                method = "next", arg = undefined;
                                var info = record.arg;
                                if (!info.done) return state = GenStateSuspendedYield, info;
                                context[delegate.resultName] = info.value, context.next = delegate.nextLoc, context.delegate = null;
                            }
                            if ("next" === method) // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = arg; else if ("throw" === method) {
                                if (state === GenStateSuspendedStart) throw state = GenStateCompleted, arg;
                                context.dispatchException(arg) && (// If the dispatched exception was caught by a catch block,
                                // then let that catch block handle the exception normally.
                                method = "next", arg = undefined);
                            } else "return" === method && context.abrupt("return", arg);
                            state = GenStateExecuting;
                            var record = tryCatch(innerFn, self, context);
                            if ("normal" === record.type) {
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                                var info = {
                                    value: record.arg,
                                    done: context.done
                                };
                                if (record.arg !== ContinueSentinel) return info;
                                context.delegate && "next" === method && (// Deliberately forget the last sent value so that we don't
                                // accidentally pass it on to the delegate.
                                arg = undefined);
                            } else "throw" === record.type && (state = GenStateCompleted, // Dispatch the exception by looping back around to the
                            // context.dispatchException(arg) call above.
                            method = "throw", arg = record.arg);
                        }
                    };
                }
                function pushTryEntry(locs) {
                    var entry = {
                        tryLoc: locs[0]
                    };
                    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], 
                    entry.afterLoc = locs[3]), this.tryEntries.push(entry);
                }
                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal", delete record.arg, entry.completion = record;
                }
                function Context(tryLocsList) {
                    // The root entry object (effectively a try statement without a catch
                    // or a finally block) gives us a place to store values thrown from
                    // locations where there is no enclosing try statement.
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
                }
                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) return iteratorMethod.call(iterable);
                        if ("function" == typeof iterable.next) return iterable;
                        if (!isNaN(iterable.length)) {
                            var i = -1, next = function next() {
                                for (;++i < iterable.length; ) if (hasOwn.call(iterable, i)) return next.value = iterable[i], 
                                next.done = !1, next;
                                return next.value = undefined, next.done = !0, next;
                            };
                            return next.next = next;
                        }
                    }
                    // Return an iterator with no values.
                    return {
                        next: doneResult
                    };
                }
                function doneResult() {
                    return {
                        value: undefined,
                        done: !0
                    };
                }
                var hasOwn = Object.prototype.hasOwnProperty, undefined, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag", inModule = "object" == typeof module, runtime = global.regeneratorRuntime;
                if (runtime) // Don't bother evaluating the rest of this file if the runtime was
                // already defined globally.
                // If regeneratorRuntime is defined globally and we're in a module,
                // make the exports object identical to regeneratorRuntime.
                return void (inModule && (module.exports = runtime));
                // Define the runtime globally (as expected by generated code) as either
                // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {}, runtime.wrap = wrap;
                var GenStateSuspendedStart = "suspendedStart", GenStateSuspendedYield = "suspendedYield", GenStateExecuting = "executing", GenStateCompleted = "completed", ContinueSentinel = {}, Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, 
                GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", 
                runtime.isGeneratorFunction = function(genFun) {
                    var ctor = "function" == typeof genFun && genFun.constructor;
                    // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
                }, runtime.mark = function(genFun) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, 
                    toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), 
                    genFun.prototype = Object.create(Gp), genFun;
                }, // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `value instanceof AwaitArgument` to determine if the yielded value is
                // meant to be awaited. Some may consider the name of this method too
                // cutesy, but they are curmudgeons.
                runtime.awrap = function(arg) {
                    return new AwaitArgument(arg);
                }, defineIteratorMethods(AsyncIterator.prototype), // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
                    return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                        return result.done ? result.value : iter.next();
                    });
                }, // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp), Gp[iteratorSymbol] = function() {
                    return this;
                }, Gp[toStringTagSymbol] = "Generator", Gp.toString = function() {
                    return "[object Generator]";
                }, runtime.keys = function(object) {
                    var keys = [];
                    for (var key in object) keys.push(key);
                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return keys.reverse(), function next() {
                        for (;keys.length; ) {
                            var key = keys.pop();
                            if (key in object) return next.value = key, next.done = !1, next;
                        }
                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                        return next.done = !0, next;
                    };
                }, runtime.values = values, Context.prototype = {
                    constructor: Context,
                    reset: function(skipTempReset) {
                        if (this.prev = 0, this.next = 0, // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.tryEntries.forEach(resetTryEntry), 
                        !skipTempReset) for (var name in this) // Not sure about the optimal order of these conditions:
                        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
                    },
                    stop: function() {
                        this.done = !0;
                        var rootEntry = this.tryEntries[0], rootRecord = rootEntry.completion;
                        if ("throw" === rootRecord.type) throw rootRecord.arg;
                        return this.rval;
                    },
                    dispatchException: function(exception) {
                        function handle(loc, caught) {
                            return record.type = "throw", record.arg = exception, context.next = loc, !!caught;
                        }
                        if (this.done) throw exception;
                        for (var context = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i], record = entry.completion;
                            if ("root" === entry.tryLoc) // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                } else {
                                    if (!hasFinally) throw new Error("try statement without catch or finally");
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(type, arg) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }
                        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (// Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null);
                        var record = finallyEntry ? finallyEntry.completion : {};
                        return record.type = type, record.arg = arg, finallyEntry ? this.next = finallyEntry.finallyLoc : this.complete(record), 
                        ContinueSentinel;
                    },
                    complete: function(record, afterLoc) {
                        if ("throw" === record.type) throw record.arg;
                        "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = record.arg, 
                        this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc);
                    },
                    finish: function(finallyLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), 
                            resetTryEntry(entry), ContinueSentinel;
                        }
                    },
                    catch: function(tryLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if ("throw" === record.type) {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }
                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(iterable, resultName, nextLoc) {
                        return this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        }, ContinueSentinel;
                    }
                };
            }(// Among the various tricks for obtaining a reference to the global
            // object, this seems to be the most reliable technique that does not
            // use indirect eval (which violates Content Security Policy).
            "object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this);
        }).call(exports, __webpack_require__(11), __webpack_require__("bluebird"), __webpack_require__(14));
    },
    /***/
    35: /***/
    function(module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(32);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        // add the styles to the DOM
        var update = __webpack_require__(27)(content, {
            singleton: !0
        });
        content.locals && (module.exports = content.locals);
    },
    /***/
    36: /***/
    function(module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(33);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        // add the styles to the DOM
        var update = __webpack_require__(27)(content, {
            singleton: !0
        });
        content.locals && (module.exports = content.locals);
    },
    /***/
    37: /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            !function(self) {
                "use strict";
                function normalizeName(name) {
                    if ("string" != typeof name && (name = String(name)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
                    return name.toLowerCase();
                }
                function normalizeValue(value) {
                    return "string" != typeof value && (value = String(value)), value;
                }
                // Build a destructive iterator for the value list
                function iteratorFor(items) {
                    var iterator = {
                        next: function() {
                            var value = items.shift();
                            return {
                                done: void 0 === value,
                                value: value
                            };
                        }
                    };
                    return support.iterable && (iterator[Symbol.iterator] = function() {
                        return iterator;
                    }), iterator;
                }
                function Headers(headers) {
                    this.map = {}, headers instanceof Headers ? headers.forEach(function(value, name) {
                        this.append(name, value);
                    }, this) : headers && Object.getOwnPropertyNames(headers).forEach(function(name) {
                        this.append(name, headers[name]);
                    }, this);
                }
                function consumed(body) {
                    return body.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (body.bodyUsed = !0);
                }
                function fileReaderReady(reader) {
                    return new Promise(function(resolve, reject) {
                        reader.onload = function() {
                            resolve(reader.result);
                        }, reader.onerror = function() {
                            reject(reader.error);
                        };
                    });
                }
                function readBlobAsArrayBuffer(blob) {
                    var reader = new FileReader(), promise = fileReaderReady(reader);
                    return reader.readAsArrayBuffer(blob), promise;
                }
                function readBlobAsText(blob) {
                    var reader = new FileReader(), promise = fileReaderReady(reader);
                    return reader.readAsText(blob), promise;
                }
                function readArrayBufferAsText(buf) {
                    for (var view = new Uint8Array(buf), chars = new Array(view.length), i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
                    return chars.join("");
                }
                function bufferClone(buf) {
                    if (buf.slice) return buf.slice(0);
                    var view = new Uint8Array(buf.byteLength);
                    return view.set(new Uint8Array(buf)), view.buffer;
                }
                function Body() {
                    return this.bodyUsed = !1, this._initBody = function(body) {
                        if (this._bodyInit = body, body) if ("string" == typeof body) this._bodyText = body; else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body; else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body; else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString(); else if (support.arrayBuffer && support.blob && isDataView(body)) this._bodyArrayBuffer = bufferClone(body.buffer), 
                        // IE 10-11 can't handle a DataView body.
                        this._bodyInit = new Blob([ this._bodyArrayBuffer ]); else {
                            if (!support.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = bufferClone(body);
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                    }, support.blob && (this.blob = function() {
                        var rejected = consumed(this);
                        if (rejected) return rejected;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([ this._bodyText ]));
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer);
                    }), this.text = function() {
                        var rejected = consumed(this);
                        if (rejected) return rejected;
                        if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText);
                    }, support.formData && (this.formData = function() {
                        return this.text().then(decode);
                    }), this.json = function() {
                        return this.text().then(JSON.parse);
                    }, this;
                }
                function normalizeMethod(method) {
                    var upcased = method.toUpperCase();
                    return methods.indexOf(upcased) > -1 ? upcased : method;
                }
                function Request(input, options) {
                    options = options || {};
                    var body = options.body;
                    if ("string" == typeof input) this.url = input; else {
                        if (input.bodyUsed) throw new TypeError("Already read");
                        this.url = input.url, this.credentials = input.credentials, options.headers || (this.headers = new Headers(input.headers)), 
                        this.method = input.method, this.mode = input.mode, body || null == input._bodyInit || (body = input._bodyInit, 
                        input.bodyUsed = !0);
                    }
                    if (this.credentials = options.credentials || this.credentials || "omit", !options.headers && this.headers || (this.headers = new Headers(options.headers)), 
                    this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, 
                    this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(body);
                }
                function decode(body) {
                    var form = new FormData();
                    return body.trim().split("&").forEach(function(bytes) {
                        if (bytes) {
                            var split = bytes.split("="), name = split.shift().replace(/\+/g, " "), value = split.join("=").replace(/\+/g, " ");
                            form.append(decodeURIComponent(name), decodeURIComponent(value));
                        }
                    }), form;
                }
                function parseHeaders(rawHeaders) {
                    var headers = new Headers();
                    return rawHeaders.split("\r\n").forEach(function(line) {
                        var parts = line.split(":"), key = parts.shift().trim();
                        if (key) {
                            var value = parts.join(":").trim();
                            headers.append(key, value);
                        }
                    }), headers;
                }
                function Response(bodyInit, options) {
                    options || (options = {}), this.type = "default", this.status = "status" in options ? options.status : 200, 
                    this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in options ? options.statusText : "OK", 
                    this.headers = new Headers(options.headers), this.url = options.url || "", this._initBody(bodyInit);
                }
                if (!self.fetch) {
                    var support = {
                        searchParams: "URLSearchParams" in self,
                        iterable: "Symbol" in self && "iterator" in Symbol,
                        blob: "FileReader" in self && "Blob" in self && function() {
                            try {
                                return new Blob(), !0;
                            } catch (e) {
                                return !1;
                            }
                        }(),
                        formData: "FormData" in self,
                        arrayBuffer: "ArrayBuffer" in self
                    };
                    if (support.arrayBuffer) var viewClasses = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ], isDataView = function(obj) {
                        return obj && DataView.prototype.isPrototypeOf(obj);
                    }, isArrayBufferView = ArrayBuffer.isView || function(obj) {
                        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                    };
                    Headers.prototype.append = function(name, value) {
                        name = normalizeName(name), value = normalizeValue(value);
                        var oldValue = this.map[name];
                        this.map[name] = oldValue ? oldValue + "," + value : value;
                    }, Headers.prototype.delete = function(name) {
                        delete this.map[normalizeName(name)];
                    }, Headers.prototype.get = function(name) {
                        return name = normalizeName(name), this.has(name) ? this.map[name] : null;
                    }, Headers.prototype.has = function(name) {
                        return this.map.hasOwnProperty(normalizeName(name));
                    }, Headers.prototype.set = function(name, value) {
                        this.map[normalizeName(name)] = normalizeValue(value);
                    }, Headers.prototype.forEach = function(callback, thisArg) {
                        for (var name in this.map) this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this);
                    }, Headers.prototype.keys = function() {
                        var items = [];
                        return this.forEach(function(value, name) {
                            items.push(name);
                        }), iteratorFor(items);
                    }, Headers.prototype.values = function() {
                        var items = [];
                        return this.forEach(function(value) {
                            items.push(value);
                        }), iteratorFor(items);
                    }, Headers.prototype.entries = function() {
                        var items = [];
                        return this.forEach(function(value, name) {
                            items.push([ name, value ]);
                        }), iteratorFor(items);
                    }, support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                    // HTTP methods whose capitalization should be normalized
                    var methods = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
                    Request.prototype.clone = function() {
                        return new Request(this, {
                            body: this._bodyInit
                        });
                    }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
                        return new Response(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new Headers(this.headers),
                            url: this.url
                        });
                    }, Response.error = function() {
                        var response = new Response(null, {
                            status: 0,
                            statusText: ""
                        });
                        return response.type = "error", response;
                    };
                    var redirectStatuses = [ 301, 302, 303, 307, 308 ];
                    Response.redirect = function(url, status) {
                        if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
                        return new Response(null, {
                            status: status,
                            headers: {
                                location: url
                            }
                        });
                    }, self.Headers = Headers, self.Request = Request, self.Response = Response, self.fetch = function(input, init) {
                        return new Promise(function(resolve, reject) {
                            var request = new Request(input, init), xhr = new XMLHttpRequest();
                            xhr.onload = function() {
                                var options = {
                                    status: xhr.status,
                                    statusText: xhr.statusText,
                                    headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                                };
                                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                                var body = "response" in xhr ? xhr.response : xhr.responseText;
                                resolve(new Response(body, options));
                            }, xhr.onerror = function() {
                                reject(new TypeError("Network request failed"));
                            }, xhr.ontimeout = function() {
                                reject(new TypeError("Network request failed"));
                            }, xhr.open(request.method, request.url, !0), "include" === request.credentials && (xhr.withCredentials = !0), 
                            "responseType" in xhr && support.blob && (xhr.responseType = "blob"), request.headers.forEach(function(value, name) {
                                xhr.setRequestHeader(name, value);
                            }), xhr.send("undefined" == typeof request._bodyInit ? null : request._bodyInit);
                        });
                    }, self.fetch.polyfill = !0;
                }
            }("undefined" != typeof self ? self : this);
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    38: /***/
    function(module, exports, __webpack_require__) {
        function webpackContext(req) {
            return __webpack_require__(webpackContextResolve(req));
        }
        function webpackContextResolve(req) {
            var id = map[req];
            if (!(id + 1)) // check for number
            throw new Error("Cannot find module '" + req + "'.");
            return id;
        }
        var map = {
            "./app": "app.js",
            "./app.html": "app.html",
            "./aurelia-bootstrapper-webpack": "aurelia-bootstrapper-webpack",
            "./aurelia-event-aggregator": "aurelia-event-aggregator",
            "./aurelia-fetch-client": "aurelia-fetch-client",
            "./aurelia-framework": "aurelia-framework",
            "./aurelia-history-browser": "aurelia-history-browser",
            "./aurelia-loader-webpack": "aurelia-loader-webpack",
            "./aurelia-logging-console": "aurelia-logging-console",
            "./aurelia-pal-browser": "aurelia-pal-browser",
            "./aurelia-polyfills": "aurelia-polyfills",
            "./aurelia-route-recognizer": "aurelia-route-recognizer",
            "./aurelia-router": "aurelia-router",
            "./aurelia-templating-binding": "aurelia-templating-binding",
            "./aurelia-templating-resources": "aurelia-templating-resources",
            "./aurelia-templating-resources/attr-binding-behavior": "aurelia-templating-resources/attr-binding-behavior.js",
            "./aurelia-templating-resources/attr-binding-behavior.js": "aurelia-templating-resources/attr-binding-behavior.js",
            "./aurelia-templating-resources/binding-mode-behaviors": "aurelia-templating-resources/binding-mode-behaviors.js",
            "./aurelia-templating-resources/binding-mode-behaviors.js": "aurelia-templating-resources/binding-mode-behaviors.js",
            "./aurelia-templating-resources/compose": "aurelia-templating-resources/compose.js",
            "./aurelia-templating-resources/compose.js": "aurelia-templating-resources/compose.js",
            "./aurelia-templating-resources/debounce-binding-behavior": "aurelia-templating-resources/debounce-binding-behavior.js",
            "./aurelia-templating-resources/debounce-binding-behavior.js": "aurelia-templating-resources/debounce-binding-behavior.js",
            "./aurelia-templating-resources/focus": "aurelia-templating-resources/focus.js",
            "./aurelia-templating-resources/focus.js": "aurelia-templating-resources/focus.js",
            "./aurelia-templating-resources/hide": "aurelia-templating-resources/hide.js",
            "./aurelia-templating-resources/hide.js": "aurelia-templating-resources/hide.js",
            "./aurelia-templating-resources/if": "aurelia-templating-resources/if.js",
            "./aurelia-templating-resources/if.js": "aurelia-templating-resources/if.js",
            "./aurelia-templating-resources/repeat": "aurelia-templating-resources/repeat.js",
            "./aurelia-templating-resources/repeat.js": "aurelia-templating-resources/repeat.js",
            "./aurelia-templating-resources/replaceable": "aurelia-templating-resources/replaceable.js",
            "./aurelia-templating-resources/replaceable.js": "aurelia-templating-resources/replaceable.js",
            "./aurelia-templating-resources/sanitize-html": "aurelia-templating-resources/sanitize-html.js",
            "./aurelia-templating-resources/sanitize-html.js": "aurelia-templating-resources/sanitize-html.js",
            "./aurelia-templating-resources/show": "aurelia-templating-resources/show.js",
            "./aurelia-templating-resources/show.js": "aurelia-templating-resources/show.js",
            "./aurelia-templating-resources/signal-binding-behavior": "aurelia-templating-resources/signal-binding-behavior.js",
            "./aurelia-templating-resources/signal-binding-behavior.js": "aurelia-templating-resources/signal-binding-behavior.js",
            "./aurelia-templating-resources/throttle-binding-behavior": "aurelia-templating-resources/throttle-binding-behavior.js",
            "./aurelia-templating-resources/throttle-binding-behavior.js": "aurelia-templating-resources/throttle-binding-behavior.js",
            "./aurelia-templating-resources/update-trigger-binding-behavior": "aurelia-templating-resources/update-trigger-binding-behavior.js",
            "./aurelia-templating-resources/update-trigger-binding-behavior.js": "aurelia-templating-resources/update-trigger-binding-behavior.js",
            "./aurelia-templating-resources/with": "aurelia-templating-resources/with.js",
            "./aurelia-templating-resources/with.js": "aurelia-templating-resources/with.js",
            "./aurelia-templating-router": "aurelia-templating-router",
            "./aurelia-templating-router/route-href": "aurelia-templating-router/route-href.js",
            "./aurelia-templating-router/route-href.js": "aurelia-templating-router/route-href.js",
            "./aurelia-templating-router/router-view": "aurelia-templating-router/router-view.js",
            "./aurelia-templating-router/router-view.js": "aurelia-templating-router/router-view.js",
            "./bluebird": "bluebird",
            "./blur-image": "blur-image.js",
            "./blur-image.js": "blur-image.js",
            "./child-router": "child-router.js",
            "./child-router.html": "child-router.html",
            "./isomorphic-fetch": "isomorphic-fetch",
            "./main": "main.js",
            "./nav-bar.html": "nav-bar.html",
            "./users": "users.js",
            "./users.html": "users.html",
            "./welcome": "welcome.js",
            "./welcome.html": "welcome.html"
        };
        webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
        }, webpackContext.resolve = webpackContextResolve, module.exports = webpackContext, 
        webpackContext.id = 38;
    },
    /***/
    39: /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("main.js");
    },
    /***/
    "app.html": /***/
    function(module, exports) {
        module.exports = '<template><require from="./nav-bar.html"></require><nav-bar router.bind="router"></nav-bar><div class="page-host"><router-view></router-view></div></template>';
    },
    /***/
    "app.js": /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var App = exports.App = function() {
            function App() {
                _classCallCheck(this, App);
            }
            return App.prototype.configureRouter = function configureRouter(config, router) {
                config.title = "Aurelia", config.map([ {
                    route: [ "", "welcome" ],
                    name: "welcome",
                    moduleId: "./welcome",
                    nav: !0,
                    title: "Welcome"
                }, {
                    route: "users",
                    name: "users",
                    moduleId: "./users",
                    nav: !0,
                    title: "Github Users"
                }, {
                    route: "child-router",
                    name: "child-router",
                    moduleId: "./child-router",
                    nav: !0,
                    title: "Child Router"
                } ]), this.router = router;
            }, App;
        }();
    },
    /***/
    "aurelia-fetch-client": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function json(body) {
                return new Blob([ JSON.stringify(body) ], {
                    type: "application/json"
                });
            }
            function rejectOnError(response) {
                if (!response.ok) throw response;
                return response;
            }
            function trackRequestStart() {
                this.isRequesting = !!++this.activeRequestCount;
            }
            function trackRequestEnd() {
                this.isRequesting = !!--this.activeRequestCount;
            }
            function trackRequestEndWith(promise) {
                var handle = trackRequestEnd.bind(this);
                return promise.then(handle, handle), promise;
            }
            function parseHeaderValues(headers) {
                var parsedHeaders = {};
                for (var name in headers || {}) headers.hasOwnProperty(name) && (parsedHeaders[name] = "function" == typeof headers[name] ? headers[name]() : headers[name]);
                return parsedHeaders;
            }
            function buildRequest(input, init) {
                var defaults = this.defaults || {}, request = void 0, body = void 0, requestContentType = void 0, parsedDefaultHeaders = parseHeaderValues(defaults.headers);
                if (Request.prototype.isPrototypeOf(input)) request = input, requestContentType = new Headers(request.headers).get("Content-Type"); else {
                    init || (init = {}), body = init.body;
                    var bodyObj = body ? {
                        body: body
                    } : null, requestInit = Object.assign({}, defaults, {
                        headers: {}
                    }, init, bodyObj);
                    requestContentType = new Headers(requestInit.headers).get("Content-Type"), request = new Request(getRequestUrl(this.baseUrl, input), requestInit);
                }
                return !requestContentType && new Headers(parsedDefaultHeaders).has("content-type") && request.headers.set("Content-Type", new Headers(parsedDefaultHeaders).get("content-type")), 
                setDefaultHeaders(request.headers, parsedDefaultHeaders), body && Blob.prototype.isPrototypeOf(body) && body.type && request.headers.set("Content-Type", body.type), 
                request;
            }
            function getRequestUrl(baseUrl, url) {
                return absoluteUrlRegexp.test(url) ? url : (baseUrl || "") + url;
            }
            function setDefaultHeaders(headers, defaultHeaders) {
                for (var name in defaultHeaders || {}) defaultHeaders.hasOwnProperty(name) && !headers.has(name) && headers.set(name, defaultHeaders[name]);
            }
            function processRequest(request, interceptors) {
                return applyInterceptors(request, interceptors, "request", "requestError");
            }
            function processResponse(response, interceptors, request) {
                return applyInterceptors(response, interceptors, "response", "responseError", request);
            }
            function applyInterceptors(input, interceptors, successName, errorName) {
                for (var _len = arguments.length, interceptorArgs = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) interceptorArgs[_key - 4] = arguments[_key];
                return (interceptors || []).reduce(function(chain, interceptor) {
                    var successHandler = interceptor[successName], errorHandler = interceptor[errorName];
                    return chain.then(successHandler && function(value) {
                        return successHandler.call.apply(successHandler, [ interceptor, value ].concat(interceptorArgs));
                    } || identity, errorHandler && function(reason) {
                        return errorHandler.call.apply(errorHandler, [ interceptor, reason ].concat(interceptorArgs));
                    } || thrower);
                }, Promise.resolve(input));
            }
            function identity(x) {
                return x;
            }
            function thrower(x) {
                throw x;
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
            };
            exports.json = json;
            var HttpClientConfiguration = exports.HttpClientConfiguration = function() {
                function HttpClientConfiguration() {
                    this.baseUrl = "", this.defaults = {}, this.interceptors = [];
                }
                return HttpClientConfiguration.prototype.withBaseUrl = function withBaseUrl(baseUrl) {
                    return this.baseUrl = baseUrl, this;
                }, HttpClientConfiguration.prototype.withDefaults = function withDefaults(defaults) {
                    return this.defaults = defaults, this;
                }, HttpClientConfiguration.prototype.withInterceptor = function withInterceptor(interceptor) {
                    return this.interceptors.push(interceptor), this;
                }, HttpClientConfiguration.prototype.useStandardConfiguration = function useStandardConfiguration() {
                    var standardConfig = {
                        credentials: "same-origin"
                    };
                    return Object.assign(this.defaults, standardConfig, this.defaults), this.rejectErrorResponses();
                }, HttpClientConfiguration.prototype.rejectErrorResponses = function rejectErrorResponses() {
                    return this.withInterceptor({
                        response: rejectOnError
                    });
                }, HttpClientConfiguration;
            }(), HttpClient = exports.HttpClient = function() {
                function HttpClient() {
                    if (this.activeRequestCount = 0, this.isRequesting = !1, this.isConfigured = !1, 
                    this.baseUrl = "", this.defaults = null, this.interceptors = [], "undefined" == typeof fetch) throw new Error("HttpClient requires a Fetch API implementation, but the current environment doesn't support it. You may need to load a polyfill such as https://github.com/github/fetch.");
                }
                return HttpClient.prototype.configure = function configure(config) {
                    var _interceptors, normalizedConfig = void 0;
                    if ("object" === ("undefined" == typeof config ? "undefined" : _typeof(config))) normalizedConfig = {
                        defaults: config
                    }; else {
                        if ("function" != typeof config) throw new Error("invalid config");
                        normalizedConfig = new HttpClientConfiguration();
                        var c = config(normalizedConfig);
                        HttpClientConfiguration.prototype.isPrototypeOf(c) && (normalizedConfig = c);
                    }
                    var defaults = normalizedConfig.defaults;
                    if (defaults && Headers.prototype.isPrototypeOf(defaults.headers)) throw new Error("Default headers must be a plain object.");
                    return this.baseUrl = normalizedConfig.baseUrl, this.defaults = defaults, (_interceptors = this.interceptors).push.apply(_interceptors, normalizedConfig.interceptors || []), 
                    this.isConfigured = !0, this;
                }, HttpClient.prototype.fetch = function(_fetch) {
                    function fetch(_x, _x2) {
                        return _fetch.apply(this, arguments);
                    }
                    return fetch.toString = function() {
                        return _fetch.toString();
                    }, fetch;
                }(function(input, init) {
                    var _this = this;
                    trackRequestStart.call(this);
                    var request = Promise.resolve().then(function() {
                        return buildRequest.call(_this, input, init, _this.defaults);
                    }), promise = processRequest(request, this.interceptors).then(function(result) {
                        var response = null;
                        if (Response.prototype.isPrototypeOf(result)) response = result; else {
                            if (!Request.prototype.isPrototypeOf(result)) throw new Error("An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [" + result + "]");
                            request = Promise.resolve(result), response = fetch(result);
                        }
                        return request.then(function(_request) {
                            return processResponse(response, _this.interceptors, _request);
                        });
                    });
                    return trackRequestEndWith.call(this, promise);
                }), HttpClient;
            }(), absoluteUrlRegexp = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "blur-image.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function stackBlurCanvasRGBA(canvas, top_x, top_y, width, height, radius) {
            if (!(isNaN(radius) || radius < 1)) {
                radius |= 0;
                var context = canvas.getContext("2d"), imageData;
                try {
                    imageData = context.getImageData(top_x, top_y, width, height);
                } catch (e) {
                    throw new Error("unable to access image data: " + e);
                }
                var pixels = imageData.data, x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs, div = radius + radius + 1, w4 = width << 2, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), stack = stackStart;
                for (i = 1; i < div; i++) if (stack = stack.next = new BlurStack(), i == radiusPlus1) var stackEnd = stack;
                stack.next = stackStart;
                var stackIn = null, stackOut = null;
                yw = yi = 0;
                var mul_sum = mul_table[radius], shg_sum = shg_table[radius];
                for (y = 0; y < height; y++) {
                    for (r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0, 
                    r_out_sum = radiusPlus1 * (pr = pixels[yi]), g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]), 
                    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]), a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]), 
                    r_sum += sumFactor * pr, g_sum += sumFactor * pg, b_sum += sumFactor * pb, a_sum += sumFactor * pa, 
                    stack = stackStart, i = 0; i < radiusPlus1; i++) stack.r = pr, stack.g = pg, stack.b = pb, 
                    stack.a = pa, stack = stack.next;
                    for (i = 1; i < radiusPlus1; i++) p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2), 
                    r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i), g_sum += (stack.g = pg = pixels[p + 1]) * rbs, 
                    b_sum += (stack.b = pb = pixels[p + 2]) * rbs, a_sum += (stack.a = pa = pixels[p + 3]) * rbs, 
                    r_in_sum += pr, g_in_sum += pg, b_in_sum += pb, a_in_sum += pa, stack = stack.next;
                    for (stackIn = stackStart, stackOut = stackEnd, x = 0; x < width; x++) pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum, 
                    0 != pa ? (pa = 255 / pa, pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa, pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa, 
                    pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa) : pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0, 
                    r_sum -= r_out_sum, g_sum -= g_out_sum, b_sum -= b_out_sum, a_sum -= a_out_sum, 
                    r_out_sum -= stackIn.r, g_out_sum -= stackIn.g, b_out_sum -= stackIn.b, a_out_sum -= stackIn.a, 
                    p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2, r_in_sum += stackIn.r = pixels[p], 
                    g_in_sum += stackIn.g = pixels[p + 1], b_in_sum += stackIn.b = pixels[p + 2], a_in_sum += stackIn.a = pixels[p + 3], 
                    r_sum += r_in_sum, g_sum += g_in_sum, b_sum += b_in_sum, a_sum += a_in_sum, stackIn = stackIn.next, 
                    r_out_sum += pr = stackOut.r, g_out_sum += pg = stackOut.g, b_out_sum += pb = stackOut.b, 
                    a_out_sum += pa = stackOut.a, r_in_sum -= pr, g_in_sum -= pg, b_in_sum -= pb, a_in_sum -= pa, 
                    stackOut = stackOut.next, yi += 4;
                    yw += width;
                }
                for (x = 0; x < width; x++) {
                    for (g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0, 
                    yi = x << 2, r_out_sum = radiusPlus1 * (pr = pixels[yi]), g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]), 
                    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]), a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]), 
                    r_sum += sumFactor * pr, g_sum += sumFactor * pg, b_sum += sumFactor * pb, a_sum += sumFactor * pa, 
                    stack = stackStart, i = 0; i < radiusPlus1; i++) stack.r = pr, stack.g = pg, stack.b = pb, 
                    stack.a = pa, stack = stack.next;
                    for (yp = width, i = 1; i <= radius; i++) yi = yp + x << 2, r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i), 
                    g_sum += (stack.g = pg = pixels[yi + 1]) * rbs, b_sum += (stack.b = pb = pixels[yi + 2]) * rbs, 
                    a_sum += (stack.a = pa = pixels[yi + 3]) * rbs, r_in_sum += pr, g_in_sum += pg, 
                    b_in_sum += pb, a_in_sum += pa, stack = stack.next, i < heightMinus1 && (yp += width);
                    for (yi = x, stackIn = stackStart, stackOut = stackEnd, y = 0; y < height; y++) p = yi << 2, 
                    pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum, pa > 0 ? (pa = 255 / pa, pixels[p] = (r_sum * mul_sum >> shg_sum) * pa, 
                    pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa, pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa) : pixels[p] = pixels[p + 1] = pixels[p + 2] = 0, 
                    r_sum -= r_out_sum, g_sum -= g_out_sum, b_sum -= b_out_sum, a_sum -= a_out_sum, 
                    r_out_sum -= stackIn.r, g_out_sum -= stackIn.g, b_out_sum -= stackIn.b, a_out_sum -= stackIn.a, 
                    p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2, 
                    r_sum += r_in_sum += stackIn.r = pixels[p], g_sum += g_in_sum += stackIn.g = pixels[p + 1], 
                    b_sum += b_in_sum += stackIn.b = pixels[p + 2], a_sum += a_in_sum += stackIn.a = pixels[p + 3], 
                    stackIn = stackIn.next, r_out_sum += pr = stackOut.r, g_out_sum += pg = stackOut.g, 
                    b_out_sum += pb = stackOut.b, a_out_sum += pa = stackOut.a, r_in_sum -= pr, g_in_sum -= pg, 
                    b_in_sum -= pb, a_in_sum -= pa, stackOut = stackOut.next, yi += width;
                }
                context.putImageData(imageData, top_x, top_y);
            }
        }
        function BlurStack() {
            this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
        }
        function drawBlur(canvas, image) {
            var w = canvas.width, h = canvas.height, canvasContext = canvas.getContext("2d");
            canvasContext.drawImage(image, 0, 0, w, h), stackBlurCanvasRGBA(canvas, 0, 0, w, h, BLUR_RADIUS);
        }
        exports.__esModule = !0, exports.BlurImageCustomAttribute = void 0;
        var _dec, _class, _aureliaFramework = __webpack_require__("aurelia-framework"), BlurImageCustomAttribute = exports.BlurImageCustomAttribute = (_dec = (0, 
        _aureliaFramework.inject)(Element), _dec(_class = function() {
            function BlurImageCustomAttribute(element) {
                _classCallCheck(this, BlurImageCustomAttribute), this.element = element;
            }
            return BlurImageCustomAttribute.prototype.valueChanged = function valueChanged(newImage) {
                var _this = this;
                newImage.complete ? drawBlur(this.element, newImage) : newImage.onload = function() {
                    return drawBlur(_this.element, newImage);
                };
            }, BlurImageCustomAttribute;
        }()) || _class), mul_table = [ 512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259 ], shg_table = [ 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ], BLUR_RADIUS = 40;
    },
    /***/
    "child-router.html": /***/
    function(module, exports) {
        module.exports = '<template><section class="au-animate"><h2>${heading}</h2><div><div class="col-md-2"><ul class="well nav nav-pills nav-stacked"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a href.bind="row.href">${row.title}</a></li></ul></div><div class="col-md-10" style="padding: 0"><router-view></router-view></div></div></section></template>';
    },
    /***/
    "child-router.js": /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var ChildRouter = exports.ChildRouter = function() {
            function ChildRouter() {
                _classCallCheck(this, ChildRouter), this.heading = "Child Router";
            }
            return ChildRouter.prototype.configureRouter = function configureRouter(config, router) {
                config.map([ {
                    route: [ "", "welcome" ],
                    name: "welcome",
                    moduleId: "./welcome",
                    nav: !0,
                    title: "Welcome"
                }, {
                    route: "users",
                    name: "users",
                    moduleId: "./users",
                    nav: !0,
                    title: "Github Users"
                }, {
                    route: "child-router",
                    name: "child-router",
                    moduleId: "./child-router",
                    nav: !0,
                    title: "Child Router"
                } ]), this.router = router;
            }, ChildRouter;
        }();
    },
    /***/
    "isomorphic-fetch": /***/
    function(module, exports, __webpack_require__) {
        // the whatwg-fetch polyfill installs the fetch() function
        // on the global object (window or self)
        //
        // Return that as the export for use in Webpack, Browserify etc.
        __webpack_require__(37), module.exports = self.fetch.bind(self);
    },
    /***/
    "main.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(regeneratorRuntime, Promise) {
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function _asyncToGenerator(fn) {
                return function() {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function(resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg), value = info.value;
                            } catch (error) {
                                return void reject(error);
                            }
                            return info.done ? void resolve(value) : Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                        return step("next");
                    });
                };
            }
            exports.__esModule = !0, exports.configure = void 0;
            var configure = exports.configure = function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(aurelia) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        for (;;) switch (_context.prev = _context.next) {
                          case 0:
                            // Uncomment the line below to enable animation.
                            // aurelia.use.plugin('aurelia-animator-css');
                            // if the css animator is enabled, add swap-order="after" to all router-view elements
                            // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
                            // aurelia.use.plugin('aurelia-html-import-template-loader')
                            return aurelia.use.standardConfiguration().developmentLogging(), _context.next = 3, 
                            aurelia.start();

                          case 3:
                            aurelia.setRoot("app");

                          // if you would like your website to work offline (Service Worker),
                            // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
                            /*
            const offline = await System.import('offline-plugin/runtime');
            offline.install();
            */
                            case 4:
                          case "end":
                            return _context.stop();
                        }
                    }, _callee, this);
                }));
                return function configure(_x) {
                    return _ref.apply(this, arguments);
                };
            }();
            __webpack_require__(36), __webpack_require__(35);
            var _bluebird = __webpack_require__("bluebird"), Bluebird = _interopRequireWildcard(_bluebird);
            // we want font-awesome to load as soon as possible to show the fa-spinner
            // import 'font-awesome/css/font-awesome.css';
            // import 'bootstrap/dist/css/bootstrap.css';
            // import 'bootstrap';
            // comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
            Bluebird.config({
                warnings: !1
            });
        }).call(exports, __webpack_require__(26), __webpack_require__("bluebird"));
    },
    /***/
    "nav-bar.html": /***/
    function(module, exports) {
        module.exports = '<template bindable="router"><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><i class="fa fa-home"></i> <span>${router.title}</span></a></div><div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"><ul class="nav navbar-nav"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="loader" if.bind="router.isNavigating"><i class="fa fa-spinner fa-spin fa-2x"></i></li></ul></div></nav></template>';
    },
    /***/
    "users.html": /***/
    function(module, exports) {
        module.exports = '<template><require from="./blur-image"></require><section class="au-animate"><h2>${heading}</h2><div class="row au-stagger"><div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users"><div class="card"><canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas><div class="avatar"><img src.bind="user.avatar_url" crossorigin ref="image"></div><div class="content"><p class="name">${user.login}</p><p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p></div></div></div></div></section></template>';
    },
    /***/
    "users.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise, regeneratorRuntime) {
            function _asyncToGenerator(fn) {
                return function() {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function(resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg), value = info.value;
                            } catch (error) {
                                return void reject(error);
                            }
                            return info.done ? void resolve(value) : Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                        return step("next");
                    });
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            exports.__esModule = !0, exports.Users = void 0;
            var _dec, _class, _aureliaFramework = __webpack_require__("aurelia-framework"), _aureliaFetchClient = __webpack_require__("aurelia-fetch-client"), fetch = self.fetch ? Promise.resolve(self.fetch) : Promise.resolve().then(__webpack_require__.bind(null, "isomorphic-fetch")), Users = exports.Users = (_dec = (0, 
            _aureliaFramework.inject)(_aureliaFramework.Lazy.of(_aureliaFetchClient.HttpClient)), 
            _dec(_class = function() {
                function Users(getHttpClient) {
                    _classCallCheck(this, Users), this.heading = "Github Users", this.users = [], this.getHttpClient = getHttpClient;
                }
                return Users.prototype.activate = function() {
                    function activate() {
                        return _ref.apply(this, arguments);
                    }
                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                        var http, response;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            for (;;) switch (_context.prev = _context.next) {
                              case 0:
                                return _context.next = 2, fetch;

                              case 2:
                                return http = this.http = this.getHttpClient(), http.configure(function(config) {
                                    config.useStandardConfiguration().withBaseUrl("https://api.github.com/");
                                }), _context.next = 6, http.fetch("users");

                              case 6:
                                return response = _context.sent, _context.next = 9, response.json();

                              case 9:
                                this.users = _context.sent;

                              case 10:
                              case "end":
                                return _context.stop();
                            }
                        }, _callee, this);
                    }));
                    return activate;
                }(), Users;
            }()) || _class);
        }).call(exports, __webpack_require__("bluebird"), __webpack_require__(26));
    },
    /***/
    "welcome.html": /***/
    function(module, exports) {
        module.exports = '<template><section class="au-animate"><h2>${heading}</h2><form role="form" submit.delegate="submit()"><div class="form-group"><label for="fn">First Name</label><input type="text" value.bind="firstName" class="form-control" id="fn" placeholder="first name"></div><div class="form-group"><label for="ln">Last Name</label><input type="text" value.bind="lastName" class="form-control" id="ln" placeholder="last name"></div><div class="form-group"><label>Full Name</label><p class="help-block">${fullName | upper}</p></div><button type="submit" class="btn btn-default">Submit</button></form></section></template>';
    },
    /***/
    "welcome.js": /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), Welcome = exports.Welcome = function() {
            function Welcome() {
                _classCallCheck(this, Welcome), this.heading = "Welcome to the Aurelia Navigation App!", 
                this.firstName = "John", this.lastName = "Doe", this.previousValue = this.fullName;
            }
            return Welcome.prototype.submit = function submit() {
                this.previousValue = this.fullName, alert("Welcome, " + this.fullName + "!");
            }, Welcome.prototype.canDeactivate = function canDeactivate() {
                if (this.fullName !== this.previousValue) return confirm("Are you sure you want to leave?");
            }, _createClass(Welcome, [ {
                key: "fullName",
                //Getters can't be directly observed, so they must be dirty checked.
                //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
                //To optimize by declaring the properties that this getter is computed from, uncomment the line below
                //as well as the corresponding import above.
                //@computedFrom('firstName', 'lastName')
                get: function get() {
                    return this.firstName + " " + this.lastName;
                }
            } ]), Welcome;
        }(), UpperValueConverter = exports.UpperValueConverter = function() {
            function UpperValueConverter() {
                _classCallCheck(this, UpperValueConverter);
            }
            return UpperValueConverter.prototype.toView = function toView(value) {
                return value && value.toUpperCase();
            }, UpperValueConverter;
        }();
    }
}, [ 39 ]);