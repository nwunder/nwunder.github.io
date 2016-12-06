/******/ !function(modules) {
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: !1,
            /******/
            exports: {}
        };
        /******/
        if (!modules[moduleId] && "string" == typeof moduleId) {
            /******/
            var newModuleId;
            /******/
            (modules[newModuleId = moduleId + ".js"] || modules[newModuleId = moduleId + ".ts"]) && (/******/
            moduleId = newModuleId, /******/
            installedModules[moduleId] = module);
        }
        /******/
        /******/
        /******/
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    // webpackBootstrap
    /******/
    // install a JSONP callback for chunk loading
    /******/
    var parentJsonpFunction = window.webpackJsonp;
    /******/
    window.webpackJsonp = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
        /******/
        for (/******/
        // add "moreModules" to the modules object,
        /******/
        // then flag all "chunkIds" as loaded and fire callback
        /******/
        var moduleId, chunkId, i = 0, resolves = [], result; i < chunkIds.length; i++) /******/
        chunkId = chunkIds[i], /******/
        installedChunks[chunkId] && /******/
        resolves.push(installedChunks[chunkId][0]), /******/
        installedChunks[chunkId] = 0;
        /******/
        for (moduleId in moreModules) /******/
        Object.prototype.hasOwnProperty.call(moreModules, moduleId) && (/******/
        modules[moduleId] = moreModules[moduleId]);
        /******/
        for (/******/
        parentJsonpFunction && parentJsonpFunction(chunkIds, moreModules, executeModules); resolves.length; ) /******/
        resolves.shift()();
        /******/
        if (executeModules) /******/
        for (i = 0; i < executeModules.length; i++) /******/
        result = __webpack_require__(__webpack_require__.s = executeModules[i]);
        /******/
        return result;
    };
    /******/
    // The module cache
    /******/
    var installedModules = {}, installedChunks = {
        /******/
        1: 0
    };
    /******/
    // Load entry module and return exports
    /******/
    /******/
    // This file contains only the entry chunk.
    /******/
    // The chunk loading function for additional chunks
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    /******/
    // expose the module cache
    /******/
    /******/
    // identity function for calling harmory imports with the correct context
    /******/
    /******/
    // define getter function for harmory exports
    /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    /******/
    // __webpack_public_path__
    /******/
    /******/
    // on error function for async loading
    /******/
    return __webpack_require__.e = function requireEnsure(chunkId) {
        /******/
        function onScriptComplete() {
            /******/
            // avoid mem leaks in IE.
            /******/
            script.onerror = script.onload = null, /******/
            clearTimeout(timeout);
            /******/
            var chunk = installedChunks[chunkId];
            /******/
            0 !== chunk && (/******/
            chunk && chunk[1](new Error("Loading chunk " + chunkId + " failed.")), /******/
            installedChunks[chunkId] = void 0);
        }
        /******/
        if (0 === installedChunks[chunkId]) /******/
        return Promise.resolve();
        /******/
        // an Promise means "currently loading".
        /******/
        if (installedChunks[chunkId]) /******/
        return installedChunks[chunkId][2];
        /******/
        // start chunk loading
        /******/
        var head = document.getElementsByTagName("head")[0], script = document.createElement("script");
        /******/
        script.type = "text/javascript", /******/
        script.charset = "utf-8", /******/
        script.async = !0, /******/
        script.timeout = 12e4, /******/
        script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
        /******/
        var timeout = setTimeout(onScriptComplete, 12e4);
        /******/
        script.onerror = script.onload = onScriptComplete, /******/
        head.appendChild(script);
        /******/
        var promise = new Promise(function(resolve, reject) {
            /******/
            installedChunks[chunkId] = [ resolve, reject ];
        });
        /******/
        return installedChunks[chunkId][2] = promise;
    }, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        /******/
        Object.defineProperty(exports, name, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ? /******/
        function getDefault() {
            return module.default;
        } : /******/
        function getModuleExports() {
            return module;
        };
        /******/
        /******/
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__.oe = function(err) {
        throw console.error(err), err;
    }, __webpack_require__(__webpack_require__.s = 40);
}({
    /***/
    0: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {
            function AggregateError(message, innerError, skipIfAlreadyAggregate) {
                if (innerError) {
                    if (innerError.innerError && skipIfAlreadyAggregate) return innerError;
                    var separator = "\n------------------------------------------------\n";
                    message += separator + "Inner Error:\n", "string" == typeof innerError ? message += "Message: " + innerError : (message += innerError.message ? "Message: " + innerError.message : "Unknown Inner Error Type. Displaying Inner Error as JSON:\n " + JSON.stringify(innerError, null, "  "), 
                    innerError.stack && (message += "\nInner Error Stack:\n" + innerError.stack, message += "\nEnd Inner Error Stack")), 
                    message += separator;
                }
                var e = new Error(message);
                return innerError && (e.innerError = innerError), e;
            }
            function initializePAL(callback) {
                "function" != typeof Object.getPropertyDescriptor && (Object.getPropertyDescriptor = function(subject, name) {
                    for (var pd = Object.getOwnPropertyDescriptor(subject, name), proto = Object.getPrototypeOf(subject); "undefined" == typeof pd && null !== proto; ) pd = Object.getOwnPropertyDescriptor(proto, name), 
                    proto = Object.getPrototypeOf(proto);
                    return pd;
                }), callback(PLATFORM, FEATURE, DOM);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.AggregateError = AggregateError, exports.initializePAL = initializePAL;
            var FEATURE = exports.FEATURE = {}, PLATFORM = exports.PLATFORM = {
                noop: function noop() {},
                eachModule: function eachModule() {}
            };
            PLATFORM.global = function() {
                return "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")();
            }();
            var DOM = exports.DOM = {};
        }).call(exports, __webpack_require__(11));
    },
    /***/
    1: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function addHyphenAndLower(char) {
                return "-" + char.toLowerCase();
            }
            function _hyphenate(name) {
                return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
            }
            function _isAllWhitespace(node) {
                return !(node.auInterpolationTarget || /[^\t\n\r ]/.test(node.textContent));
            }
            function viewEngineHooks(target) {
                var deco = function deco(t) {
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ViewEngineHooksResource(), t);
                };
                return target ? deco(target) : deco;
            }
            function mi(name) {
                throw new Error("BindingLanguage must implement " + name + "().");
            }
            function register(lookup, name, resource, type) {
                if (name) {
                    var existing = lookup[name];
                    if (existing) {
                        if (existing !== resource) throw new Error("Attempted to register " + type + " when one with the same name already exists. Name: " + name + ".");
                    } else lookup[name] = resource;
                }
            }
            function getAnimatableElement(view) {
                if (void 0 !== view.animatableElement) return view.animatableElement;
                for (var current = view.firstChild; current && 1 !== current.nodeType; ) current = current.nextSibling;
                return current && 1 === current.nodeType ? view.animatableElement = current.classList.contains("au-animate") ? current : null : view.animatableElement = null;
            }
            function elementContainerGet(key) {
                if (key === _aureliaPal.DOM.Element) return this.element;
                if (key === BoundViewFactory) {
                    if (this.boundViewFactory) return this.boundViewFactory;
                    var factory = this.instruction.viewFactory, _partReplacements = this.partReplacements;
                    return _partReplacements && (factory = _partReplacements[factory.part] || factory), 
                    this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements), 
                    this.boundViewFactory;
                }
                return key === ViewSlot ? (void 0 === this.viewSlot && (this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer), 
                this.element.isContentProjectionSource = this.instruction.lifting, this.children.push(this.viewSlot)), 
                this.viewSlot) : key === ElementEvents ? this.elementEvents || (this.elementEvents = new ElementEvents(this.element)) : key === CompositionTransaction ? this.compositionTransaction || (this.compositionTransaction = this.parent.get(key)) : key === ViewResources ? this.viewResources : key === TargetInstruction ? this.instruction : this.superGet(key);
            }
            function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
                var container = parent.createChild(), providers = void 0, i = void 0;
                for (container.element = element, container.instruction = instruction, container.children = children, 
                container.viewResources = resources, container.partReplacements = partReplacements, 
                providers = instruction.providers, i = providers.length; i--; ) container._resolvers.set(providers[i], providerResolverInstance);
                return container.superGet = container.get, container.get = elementContainerGet, 
                container;
            }
            function makeElementIntoAnchor(element, elementInstruction) {
                var anchor = _aureliaPal.DOM.createComment("anchor");
                if (elementInstruction) {
                    var firstChild = element.firstChild;
                    firstChild && "AU-CONTENT" === firstChild.tagName && (anchor.contentElement = firstChild), 
                    anchor.hasAttribute = function(name) {
                        return element.hasAttribute(name);
                    }, anchor.getAttribute = function(name) {
                        return element.getAttribute(name);
                    }, anchor.setAttribute = function(name, value) {
                        element.setAttribute(name, value);
                    };
                }
                return _aureliaPal.DOM.replaceNode(anchor, element), anchor;
            }
            function applyInstructions(containers, element, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources) {
                var behaviorInstructions = instruction.behaviorInstructions, expressions = instruction.expressions, elementContainer = void 0, i = void 0, ii = void 0, current = void 0, instance = void 0;
                if (instruction.contentExpression) return bindings.push(instruction.contentExpression.createBinding(element.nextSibling)), 
                element.nextSibling.auInterpolationTarget = !0, void element.parentNode.removeChild(element);
                if (instruction.shadowSlot) {
                    var commentAnchor = _aureliaPal.DOM.createComment("slot"), slot = void 0;
                    return slot = instruction.slotDestination ? new PassThroughSlot(commentAnchor, instruction.slotName, instruction.slotDestination, instruction.slotFallbackFactory) : new ShadowSlot(commentAnchor, instruction.slotName, instruction.slotFallbackFactory), 
                    _aureliaPal.DOM.replaceNode(commentAnchor, element), shadowSlots[instruction.slotName] = slot, 
                    void controllers.push(slot);
                }
                if (behaviorInstructions.length) for (instruction.anchorIsContainer || (element = makeElementIntoAnchor(element, instruction.elementInstruction)), 
                containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources), 
                i = 0, ii = behaviorInstructions.length; i < ii; ++i) current = behaviorInstructions[i], 
                instance = current.type.create(elementContainer, current, element, bindings), controllers.push(instance);
                for (i = 0, ii = expressions.length; i < ii; ++i) bindings.push(expressions[i].createBinding(element));
            }
            function styleStringToObject(style, target) {
                var attributes = style.split(";"), firstIndexOfColon = void 0, i = void 0, current = void 0, key = void 0, value = void 0;
                for (target = target || {}, i = 0; i < attributes.length; i++) current = attributes[i], 
                firstIndexOfColon = current.indexOf(":"), key = current.substring(0, firstIndexOfColon).trim(), 
                value = current.substring(firstIndexOfColon + 1).trim(), target[key] = value;
                return target;
            }
            function styleObjectToString(obj) {
                var result = "";
                for (var key in obj) result += key + ":" + obj[key] + ";";
                return result;
            }
            function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
                var behaviorInstructions = instruction.behaviorInstructions, expressions = instruction.expressions, providers = instruction.providers, values = instruction.values, i = void 0, ii = void 0, current = void 0, instance = void 0, currentAttributeValue = void 0;
                for (i = providers.length; i--; ) container._resolvers.set(providers[i], providerResolverInstance);
                for (var key in values) if (currentAttributeValue = element.getAttribute(key)) {
                    if ("class" === key) element.setAttribute("class", currentAttributeValue + " " + values[key]); else if ("style" === key) {
                        var styleObject = styleStringToObject(values[key]);
                        styleStringToObject(currentAttributeValue, styleObject), element.setAttribute("style", styleObjectToString(styleObject));
                    }
                } else element.setAttribute(key, values[key]);
                if (behaviorInstructions.length) for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) current = behaviorInstructions[i], 
                instance = current.type.create(container, current, element, bindings), instance.contentView && children.push(instance.contentView), 
                controllers.push(instance);
                for (i = 0, ii = expressions.length; i < ii; ++i) bindings.push(expressions[i].createBinding(element));
            }
            function getNextInjectorId() {
                return ++nextInjectorId;
            }
            function configureProperties(instruction, resources) {
                var type = instruction.type, attrName = instruction.attrName, attributes = instruction.attributes, property = void 0, key = void 0, value = void 0, knownAttribute = resources.mapAttribute(attrName);
                knownAttribute && attrName in attributes && knownAttribute !== attrName && (attributes[knownAttribute] = attributes[attrName], 
                delete attributes[attrName]);
                for (key in attributes) value = attributes[key], null !== value && "object" === ("undefined" == typeof value ? "undefined" : _typeof(value)) && (property = type.attributes[key], 
                void 0 !== property ? value.targetProperty = property.name : value.targetProperty = key);
            }
            function getNextAUTargetID() {
                return (++lastAUTargetID).toString();
            }
            function makeIntoInstructionTarget(element) {
                var value = element.getAttribute("class"), auTargetID = getNextAUTargetID();
                return element.setAttribute("class", value ? value + " au-target" : "au-target"), 
                element.setAttribute("au-target-id", auTargetID), auTargetID;
            }
            function makeShadowSlot(compiler, resources, node, instructions, parentInjectorId) {
                var auShadowSlot = _aureliaPal.DOM.createElement("au-shadow-slot");
                _aureliaPal.DOM.replaceNode(auShadowSlot, node);
                var auTargetID = makeIntoInstructionTarget(auShadowSlot), instruction = TargetInstruction.shadowSlot(parentInjectorId);
                if (instruction.slotName = node.getAttribute("name") || ShadowDOM.defaultSlotKey, 
                instruction.slotDestination = node.getAttribute("slot"), node.innerHTML.trim()) {
                    for (var fragment = _aureliaPal.DOM.createDocumentFragment(), _child3 = void 0; _child3 = node.firstChild; ) fragment.appendChild(_child3);
                    instruction.slotFallbackFactory = compiler.compile(fragment, resources);
                }
                return instructions[auTargetID] = instruction, auShadowSlot;
            }
            function ensureRegistryEntry(loader, urlOrRegistryEntry) {
                return urlOrRegistryEntry instanceof _aureliaLoader.TemplateRegistryEntry ? Promise.resolve(urlOrRegistryEntry) : loader.loadTemplate(urlOrRegistryEntry);
            }
            function getObserver(behavior, instance, name) {
                var lookup = instance.__observers__;
                return void 0 === lookup && (behavior.isInitialized || behavior.initialize(_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container(), instance.constructor), 
                lookup = behavior.observerLocator.getOrCreateObserversLookup(instance), behavior._ensurePropertiesDefined(instance, lookup)), 
                lookup[name];
            }
            function nextProviderId() {
                return ++lastProviderId;
            }
            function doProcessContent() {
                return !0;
            }
            function doProcessAttributes() {}
            function createChildObserverDecorator(selectorOrConfig, all) {
                return function(target, key, descriptor) {
                    var actualTarget = "string" == typeof key ? target.constructor : target, r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);
                    "string" == typeof selectorOrConfig && (selectorOrConfig = {
                        selector: selectorOrConfig,
                        name: key
                    }), descriptor && (descriptor.writable = !0), selectorOrConfig.all = all, r.addChildBinding(new ChildObserver(selectorOrConfig));
                };
            }
            function children(selectorOrConfig) {
                return createChildObserverDecorator(selectorOrConfig, !0);
            }
            function child(selectorOrConfig) {
                return createChildObserverDecorator(selectorOrConfig, !1);
            }
            function trackMutation(groupedMutations, binder, record) {
                var mutations = groupedMutations.get(binder);
                mutations || (mutations = [], groupedMutations.set(binder, mutations)), mutations.push(record);
            }
            function onChildChange(mutations, observer) {
                for (var binders = observer.binders, bindersLength = binders.length, groupedMutations = new Map(), i = 0, ii = mutations.length; i < ii; ++i) {
                    for (var record = mutations[i], added = record.addedNodes, removed = record.removedNodes, j = 0, jj = removed.length; j < jj; ++j) {
                        var node = removed[j];
                        if (1 === node.nodeType) for (var k = 0; k < bindersLength; ++k) {
                            var binder = binders[k];
                            binder.onRemove(node) && trackMutation(groupedMutations, binder, record);
                        }
                    }
                    for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
                        var _node = added[_j];
                        if (1 === _node.nodeType) for (var _k = 0; _k < bindersLength; ++_k) {
                            var _binder = binders[_k];
                            _binder.onAdd(_node) && trackMutation(groupedMutations, _binder, record);
                        }
                    }
                }
                groupedMutations.forEach(function(value, key) {
                    null !== key.changeHandler && key.viewModel[key.changeHandler](value);
                });
            }
            function tryActivateViewModel(context) {
                return context.skipActivation || "function" != typeof context.viewModel.activate ? Promise.resolve() : context.viewModel.activate(context.model) || Promise.resolve();
            }
            function validateBehaviorName(name, type) {
                if (/[A-Z]/.test(name)) {
                    var newName = _hyphenate(name);
                    return LogManager.getLogger("templating").warn("'" + name + "' is not a valid " + type + " name and has been converted to '" + newName + "'. Upper-case letters are not allowed because the DOM is not case-sensitive."), 
                    newName;
                }
                return name;
            }
            function resource(instance) {
                return function(target) {
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, instance, target);
                };
            }
            function behavior(override) {
                return function(target) {
                    if (override instanceof HtmlBehaviorResource) _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, override, target); else {
                        var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
                        Object.assign(r, override);
                    }
                };
            }
            function customElement(name) {
                return function(target) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
                    r.elementName = validateBehaviorName(name, "custom element");
                };
            }
            function customAttribute(name, defaultBindingMode) {
                return function(target) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
                    r.attributeName = validateBehaviorName(name, "custom attribute"), r.attributeDefaultBindingMode = defaultBindingMode;
                };
            }
            function templateController(target) {
                var deco = function deco(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.liftsContent = !0;
                };
                return target ? deco(target) : deco;
            }
            function bindable(nameOrConfigOrTarget, key, descriptor) {
                var deco = function deco(target, key2, descriptor2) {
                    var actualTarget = key2 ? target.constructor : target, r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget), prop = void 0;
                    return key2 && (nameOrConfigOrTarget = nameOrConfigOrTarget || {}, nameOrConfigOrTarget.name = key2), 
                    prop = new BindableProperty(nameOrConfigOrTarget), prop.registerWith(actualTarget, r, descriptor2);
                };
                if (!nameOrConfigOrTarget) return deco;
                if (key) {
                    var _target = nameOrConfigOrTarget;
                    return nameOrConfigOrTarget = null, deco(_target, key, descriptor);
                }
                return deco;
            }
            function dynamicOptions(target) {
                var deco = function deco(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.hasDynamicOptions = !0;
                };
                return target ? deco(target) : deco;
            }
            function useShadowDOM(targetOrOptions) {
                var options = "function" != typeof targetOrOptions && targetOrOptions ? targetOrOptions : defaultShadowDOMOptions, deco = function deco(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.targetShadowDOM = !0, r.shadowDOMOptions = options;
                };
                return "function" == typeof targetOrOptions ? deco(targetOrOptions) : deco;
            }
            function processAttributes(processor) {
                return function(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.processAttributes = function(compiler, resources, node, attributes, elementInstruction) {
                        try {
                            processor(compiler, resources, node, attributes, elementInstruction);
                        } catch (error) {
                            LogManager.getLogger("templating").error(error);
                        }
                    };
                };
            }
            function doNotProcessContent() {
                return !1;
            }
            function processContent(processor) {
                return function(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.processContent = processor ? function(compiler, resources, node, instruction) {
                        try {
                            return processor(compiler, resources, node, instruction);
                        } catch (error) {
                            return LogManager.getLogger("templating").error(error), !1;
                        }
                    } : doNotProcessContent;
                };
            }
            function containerless(target) {
                var deco = function deco(t) {
                    var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
                    r.containerless = !0;
                };
                return target ? deco(target) : deco;
            }
            function useViewStrategy(strategy) {
                return function(target) {
                    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, strategy, target);
                };
            }
            function useView(path) {
                return useViewStrategy(new RelativeViewStrategy(path));
            }
            function inlineView(markup, dependencies, dependencyBaseUrl) {
                return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
            }
            function noView(targetOrDependencies, dependencyBaseUrl) {
                var target = void 0, dependencies = void 0;
                "function" == typeof targetOrDependencies ? target = targetOrDependencies : (dependencies = targetOrDependencies, 
                target = void 0);
                var deco = function deco(t) {
                    _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(dependencies, dependencyBaseUrl), t);
                };
                return target ? deco(target) : deco;
            }
            function elementConfig(target) {
                var deco = function deco(t) {
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ElementConfigResource(), t);
                };
                return target ? deco(target) : deco;
            }
            function viewResources() {
                for (var _len = arguments.length, resources = Array(_len), _key = 0; _key < _len; _key++) resources[_key] = arguments[_key];
                return function(target) {
                    _aureliaMetadata.metadata.define(ViewEngine.viewModelRequireMetadataKey, resources, target);
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.TemplatingEngine = exports.ElementConfigResource = exports.CompositionEngine = exports.HtmlBehaviorResource = exports.BindableProperty = exports.BehaviorPropertyObserver = exports.Controller = exports.ViewEngine = exports.ModuleAnalyzer = exports.ResourceDescription = exports.ResourceModule = exports.ViewCompiler = exports.ViewFactory = exports.BoundViewFactory = exports.ViewSlot = exports.View = exports.ViewResources = exports.ShadowDOM = exports.ShadowSlot = exports.PassThroughSlot = exports.SlotCustomAttribute = exports.BindingLanguage = exports.ViewLocator = exports.InlineViewStrategy = exports.TemplateRegistryViewStrategy = exports.NoViewStrategy = exports.ConventionalViewStrategy = exports.RelativeViewStrategy = exports.viewStrategy = exports.TargetInstruction = exports.BehaviorInstruction = exports.ViewCompileInstruction = exports.ResourceLoadContext = exports.ElementEvents = exports.ViewEngineHooksResource = exports.CompositionTransaction = exports.CompositionTransactionOwnershipToken = exports.CompositionTransactionNotifier = exports.Animator = exports.animationEvent = void 0;
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
            }(), _class4, _temp, _dec, _class5, _dec2, _class6, _dec3, _class7, _dec4, _class8, _dec5, _class9, _class10, _temp2, _dec6, _class11, _class12, _temp3, _class15, _dec7, _class17, _dec8, _class18, _class19, _temp4, _dec9, _class21, _dec10, _class22, _dec11, _class23, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
            };
            exports._hyphenate = _hyphenate, exports._isAllWhitespace = _isAllWhitespace, exports.viewEngineHooks = viewEngineHooks, 
            exports.children = children, exports.child = child, exports.resource = resource, 
            exports.behavior = behavior, exports.customElement = customElement, exports.customAttribute = customAttribute, 
            exports.templateController = templateController, exports.bindable = bindable, exports.dynamicOptions = dynamicOptions, 
            exports.useShadowDOM = useShadowDOM, exports.processAttributes = processAttributes, 
            exports.processContent = processContent, exports.containerless = containerless, 
            exports.useViewStrategy = useViewStrategy, exports.useView = useView, exports.inlineView = inlineView, 
            exports.noView = noView, exports.elementConfig = elementConfig, exports.viewResources = viewResources;
            var _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), _aureliaMetadata = __webpack_require__(4), _aureliaPal = __webpack_require__(0), _aureliaPath = __webpack_require__(6), _aureliaLoader = __webpack_require__(9), _aureliaDependencyInjection = __webpack_require__(3), _aureliaBinding = __webpack_require__(2), _aureliaTaskQueue = __webpack_require__(7), animationEvent = exports.animationEvent = {
                enterBegin: "animation:enter:begin",
                enterActive: "animation:enter:active",
                enterDone: "animation:enter:done",
                enterTimeout: "animation:enter:timeout",
                leaveBegin: "animation:leave:begin",
                leaveActive: "animation:leave:active",
                leaveDone: "animation:leave:done",
                leaveTimeout: "animation:leave:timeout",
                staggerNext: "animation:stagger:next",
                removeClassBegin: "animation:remove-class:begin",
                removeClassActive: "animation:remove-class:active",
                removeClassDone: "animation:remove-class:done",
                removeClassTimeout: "animation:remove-class:timeout",
                addClassBegin: "animation:add-class:begin",
                addClassActive: "animation:add-class:active",
                addClassDone: "animation:add-class:done",
                addClassTimeout: "animation:add-class:timeout",
                animateBegin: "animation:animate:begin",
                animateActive: "animation:animate:active",
                animateDone: "animation:animate:done",
                animateTimeout: "animation:animate:timeout",
                sequenceBegin: "animation:sequence:begin",
                sequenceDone: "animation:sequence:done"
            }, Animator = exports.Animator = function() {
                function Animator() {}
                return Animator.prototype.enter = function enter(element) {
                    return Promise.resolve(!1);
                }, Animator.prototype.leave = function leave(element) {
                    return Promise.resolve(!1);
                }, Animator.prototype.removeClass = function removeClass(element, className) {
                    return element.classList.remove(className), Promise.resolve(!1);
                }, Animator.prototype.addClass = function addClass(element, className) {
                    return element.classList.add(className), Promise.resolve(!1);
                }, Animator.prototype.animate = function animate(element, className) {
                    return Promise.resolve(!1);
                }, Animator.prototype.runSequence = function runSequence(animations) {}, Animator.prototype.registerEffect = function registerEffect(effectName, properties) {}, 
                Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {}, 
                Animator;
            }(), CompositionTransactionNotifier = exports.CompositionTransactionNotifier = function() {
                function CompositionTransactionNotifier(owner) {
                    this.owner = owner, this.owner._compositionCount++;
                }
                return CompositionTransactionNotifier.prototype.done = function done() {
                    this.owner._compositionCount--, this.owner._tryCompleteTransaction();
                }, CompositionTransactionNotifier;
            }(), CompositionTransactionOwnershipToken = exports.CompositionTransactionOwnershipToken = function() {
                function CompositionTransactionOwnershipToken(owner) {
                    this.owner = owner, this.owner._ownershipToken = this, this.thenable = this._createThenable();
                }
                return CompositionTransactionOwnershipToken.prototype.waitForCompositionComplete = function waitForCompositionComplete() {
                    return this.owner._tryCompleteTransaction(), this.thenable;
                }, CompositionTransactionOwnershipToken.prototype.resolve = function resolve() {
                    this._resolveCallback();
                }, CompositionTransactionOwnershipToken.prototype._createThenable = function _createThenable() {
                    var _this = this;
                    return new Promise(function(resolve, reject) {
                        _this._resolveCallback = resolve;
                    });
                }, CompositionTransactionOwnershipToken;
            }(), CompositionTransaction = exports.CompositionTransaction = function() {
                function CompositionTransaction() {
                    this._ownershipToken = null, this._compositionCount = 0;
                }
                return CompositionTransaction.prototype.tryCapture = function tryCapture() {
                    return null === this._ownershipToken ? new CompositionTransactionOwnershipToken(this) : null;
                }, CompositionTransaction.prototype.enlist = function enlist() {
                    return new CompositionTransactionNotifier(this);
                }, CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
                    if (this._compositionCount <= 0 && (this._compositionCount = 0, null !== this._ownershipToken)) {
                        var token = this._ownershipToken;
                        this._ownershipToken = null, token.resolve();
                    }
                }, CompositionTransaction;
            }(), capitalMatcher = /([A-Z])/g, ViewEngineHooksResource = exports.ViewEngineHooksResource = function() {
                function ViewEngineHooksResource() {}
                return ViewEngineHooksResource.prototype.initialize = function initialize(container, target) {
                    this.instance = container.get(target);
                }, ViewEngineHooksResource.prototype.register = function register(registry, name) {
                    registry.registerViewEngineHooks(this.instance);
                }, ViewEngineHooksResource.prototype.load = function load(container, target) {}, 
                ViewEngineHooksResource.convention = function convention(name) {
                    if (name.endsWith("ViewEngineHooks")) return new ViewEngineHooksResource();
                }, ViewEngineHooksResource;
            }(), ElementEvents = exports.ElementEvents = function() {
                function ElementEvents(element) {
                    this.element = element, this.subscriptions = {};
                }
                return ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
                    this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [], 
                    this.subscriptions[handler.eventName].push(handler);
                }, ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
                    var index = void 0, subscriptions = this.subscriptions[handler.eventName];
                    return subscriptions && (index = subscriptions.indexOf(handler), index > -1 && subscriptions.splice(index, 1)), 
                    handler;
                }, ElementEvents.prototype.publish = function publish(eventName) {
                    var detail = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], bubbles = arguments.length <= 2 || void 0 === arguments[2] || arguments[2], cancelable = arguments.length <= 3 || void 0 === arguments[3] || arguments[3], event = _aureliaPal.DOM.createCustomEvent(eventName, {
                        cancelable: cancelable,
                        bubbles: bubbles,
                        detail: detail
                    });
                    this.element.dispatchEvent(event);
                }, ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
                    var _this2 = this, bubbles = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
                    if (handler && "function" == typeof handler) return handler.eventName = eventName, 
                    handler.handler = handler, handler.bubbles = bubbles, handler.dispose = function() {
                        _this2.element.removeEventListener(eventName, handler, bubbles), _this2._dequeueHandler(handler);
                    }, this.element.addEventListener(eventName, handler, bubbles), this._enqueueHandler(handler), 
                    handler;
                }, ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
                    var _this3 = this, bubbles = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
                    if (handler && "function" == typeof handler) {
                        var _ret = function() {
                            var _handler = function _handler(event) {
                                handler(event), _handler.dispose();
                            };
                            return {
                                v: _this3.subscribe(eventName, _handler, bubbles)
                            };
                        }();
                        if ("object" === ("undefined" == typeof _ret ? "undefined" : _typeof(_ret))) return _ret.v;
                    }
                }, ElementEvents.prototype.dispose = function dispose(eventName) {
                    if (eventName && "string" == typeof eventName) {
                        var subscriptions = this.subscriptions[eventName];
                        if (subscriptions) for (;subscriptions.length; ) {
                            var subscription = subscriptions.pop();
                            subscription && subscription.dispose();
                        }
                    } else this.disposeAll();
                }, ElementEvents.prototype.disposeAll = function disposeAll() {
                    for (var key in this.subscriptions) this.dispose(key);
                }, ElementEvents;
            }(), ResourceLoadContext = exports.ResourceLoadContext = function() {
                function ResourceLoadContext() {
                    this.dependencies = {};
                }
                return ResourceLoadContext.prototype.addDependency = function addDependency(url) {
                    this.dependencies[url] = !0;
                }, ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
                    return url in this.dependencies;
                }, ResourceLoadContext;
            }(), ViewCompileInstruction = exports.ViewCompileInstruction = function ViewCompileInstruction() {
                var targetShadowDOM = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], compileSurrogate = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                this.targetShadowDOM = targetShadowDOM, this.compileSurrogate = compileSurrogate, 
                this.associatedModuleId = null;
            };
            ViewCompileInstruction.normal = new ViewCompileInstruction();
            var BehaviorInstruction = exports.BehaviorInstruction = function() {
                function BehaviorInstruction() {
                    this.initiatedByBehavior = !1, this.enhance = !1, this.partReplacements = null, 
                    this.viewFactory = null, this.originalAttrName = null, this.skipContentProcessing = !1, 
                    this.contentFactory = null, this.viewModel = null, this.anchorIsContainer = !1, 
                    this.host = null, this.attributes = null, this.type = null, this.attrName = null, 
                    this.inheritBindingContext = !1;
                }
                return BehaviorInstruction.enhance = function enhance() {
                    var instruction = new BehaviorInstruction();
                    return instruction.enhance = !0, instruction;
                }, BehaviorInstruction.unitTest = function unitTest(type, attributes) {
                    var instruction = new BehaviorInstruction();
                    return instruction.type = type, instruction.attributes = attributes || {}, instruction;
                }, BehaviorInstruction.element = function element(node, type) {
                    var instruction = new BehaviorInstruction();
                    return instruction.type = type, instruction.attributes = {}, instruction.anchorIsContainer = !(node.hasAttribute("containerless") || type.containerless), 
                    instruction.initiatedByBehavior = !0, instruction;
                }, BehaviorInstruction.attribute = function attribute(attrName, type) {
                    var instruction = new BehaviorInstruction();
                    return instruction.attrName = attrName, instruction.type = type || null, instruction.attributes = {}, 
                    instruction;
                }, BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
                    var instruction = new BehaviorInstruction();
                    return instruction.host = host, instruction.viewModel = viewModel, instruction.viewFactory = viewFactory, 
                    instruction.inheritBindingContext = !0, instruction;
                }, BehaviorInstruction;
            }();
            BehaviorInstruction.normal = new BehaviorInstruction();
            var TargetInstruction = exports.TargetInstruction = (_temp = _class4 = function() {
                function TargetInstruction() {
                    this.injectorId = null, this.parentInjectorId = null, this.shadowSlot = !1, this.slotName = null, 
                    this.slotFallbackFactory = null, this.contentExpression = null, this.expressions = null, 
                    this.behaviorInstructions = null, this.providers = null, this.viewFactory = null, 
                    this.anchorIsContainer = !1, this.elementInstruction = null, this.lifting = !1, 
                    this.values = null;
                }
                return TargetInstruction.shadowSlot = function shadowSlot(parentInjectorId) {
                    var instruction = new TargetInstruction();
                    return instruction.parentInjectorId = parentInjectorId, instruction.shadowSlot = !0, 
                    instruction;
                }, TargetInstruction.contentExpression = function contentExpression(expression) {
                    var instruction = new TargetInstruction();
                    return instruction.contentExpression = expression, instruction;
                }, TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
                    var instruction = new TargetInstruction();
                    return instruction.parentInjectorId = parentInjectorId, instruction.expressions = TargetInstruction.noExpressions, 
                    instruction.behaviorInstructions = [ liftingInstruction ], instruction.viewFactory = liftingInstruction.viewFactory, 
                    instruction.providers = [ liftingInstruction.type.target ], instruction.lifting = !0, 
                    instruction;
                }, TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
                    var instruction = new TargetInstruction();
                    return instruction.injectorId = injectorId, instruction.parentInjectorId = parentInjectorId, 
                    instruction.providers = providers, instruction.behaviorInstructions = behaviorInstructions, 
                    instruction.expressions = expressions, instruction.anchorIsContainer = !elementInstruction || elementInstruction.anchorIsContainer, 
                    instruction.elementInstruction = elementInstruction, instruction;
                }, TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
                    var instruction = new TargetInstruction();
                    return instruction.expressions = expressions, instruction.behaviorInstructions = behaviorInstructions, 
                    instruction.providers = providers, instruction.values = values, instruction;
                }, TargetInstruction;
            }(), _class4.noExpressions = Object.freeze([]), _temp), viewStrategy = exports.viewStrategy = _aureliaMetadata.protocol.create("aurelia:view-strategy", {
                validate: function validate(target) {
                    return "function" == typeof target.loadViewFactory || "View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>";
                },
                compose: function compose(target) {
                    "function" != typeof target.makeRelativeTo && (target.makeRelativeTo = _aureliaPal.PLATFORM.noop);
                }
            }), RelativeViewStrategy = exports.RelativeViewStrategy = (_dec = viewStrategy(), 
            _dec(_class5 = function() {
                function RelativeViewStrategy(path) {
                    this.path = path, this.absolutePath = null;
                }
                return RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
                    return null === this.absolutePath && this.moduleId && (this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, this.moduleId)), 
                    compileInstruction.associatedModuleId = this.moduleId, viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext, target);
                }, RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
                    null === this.absolutePath && (this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, file));
                }, RelativeViewStrategy;
            }()) || _class5), ConventionalViewStrategy = exports.ConventionalViewStrategy = (_dec2 = viewStrategy(), 
            _dec2(_class6 = function() {
                function ConventionalViewStrategy(viewLocator, origin) {
                    this.moduleId = origin.moduleId, this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
                }
                return ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
                    return compileInstruction.associatedModuleId = this.moduleId, viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext, target);
                }, ConventionalViewStrategy;
            }()) || _class6), NoViewStrategy = exports.NoViewStrategy = (_dec3 = viewStrategy(), 
            _dec3(_class7 = function() {
                function NoViewStrategy(dependencies, dependencyBaseUrl) {
                    this.dependencies = dependencies || null, this.dependencyBaseUrl = dependencyBaseUrl || "";
                }
                return NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
                    var entry = this.entry, dependencies = this.dependencies;
                    if (entry && entry.factoryIsReady) return Promise.resolve(null);
                    if (this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl), 
                    entry.dependencies = [], entry.templateIsLoaded = !0, null !== dependencies) for (var i = 0, ii = dependencies.length; i < ii; ++i) {
                        var current = dependencies[i];
                        "string" == typeof current || "function" == typeof current ? entry.addDependency(current) : entry.addDependency(current.from, current.as);
                    }
                    return compileInstruction.associatedModuleId = this.moduleId, viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
                }, NoViewStrategy;
            }()) || _class7), TemplateRegistryViewStrategy = exports.TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), 
            _dec4(_class8 = function() {
                function TemplateRegistryViewStrategy(moduleId, entry) {
                    this.moduleId = moduleId, this.entry = entry;
                }
                return TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
                    var entry = this.entry;
                    return entry.factoryIsReady ? Promise.resolve(entry.factory) : (compileInstruction.associatedModuleId = this.moduleId, 
                    viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target));
                }, TemplateRegistryViewStrategy;
            }()) || _class8), InlineViewStrategy = exports.InlineViewStrategy = (_dec5 = viewStrategy(), 
            _dec5(_class9 = function() {
                function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
                    this.markup = markup, this.dependencies = dependencies || null, this.dependencyBaseUrl = dependencyBaseUrl || "";
                }
                return InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
                    var entry = this.entry, dependencies = this.dependencies;
                    if (entry && entry.factoryIsReady) return Promise.resolve(entry.factory);
                    if (this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl), 
                    entry.template = _aureliaPal.DOM.createTemplateFromMarkup(this.markup), null !== dependencies) for (var i = 0, ii = dependencies.length; i < ii; ++i) {
                        var current = dependencies[i];
                        "string" == typeof current || "function" == typeof current ? entry.addDependency(current) : entry.addDependency(current.from, current.as);
                    }
                    return compileInstruction.associatedModuleId = this.moduleId, viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
                }, InlineViewStrategy;
            }()) || _class9), ViewLocator = exports.ViewLocator = (_temp2 = _class10 = function() {
                function ViewLocator() {}
                return ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
                    if (!value) return null;
                    if ("object" === ("undefined" == typeof value ? "undefined" : _typeof(value)) && "getViewStrategy" in value) {
                        var _origin = _aureliaMetadata.Origin.get(value.constructor);
                        return value = value.getViewStrategy(), "string" == typeof value && (value = new RelativeViewStrategy(value)), 
                        viewStrategy.assert(value), _origin.moduleId && value.makeRelativeTo(_origin.moduleId), 
                        value;
                    }
                    if ("string" == typeof value && (value = new RelativeViewStrategy(value)), viewStrategy.validate(value)) return value;
                    "function" != typeof value && (value = value.constructor);
                    var origin = _aureliaMetadata.Origin.get(value), strategy = _aureliaMetadata.metadata.get(ViewLocator.viewStrategyMetadataKey, value);
                    if (strategy) origin.moduleId && (strategy.moduleId = origin.moduleId); else {
                        if (!origin.moduleId) throw new Error("Cannot determine default view strategy for object.", value);
                        strategy = this.createFallbackViewStrategy(origin);
                    }
                    return strategy;
                }, ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
                    return new ConventionalViewStrategy(this, origin);
                }, ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
                    var moduleId = origin.moduleId, id = moduleId.endsWith(".js") || moduleId.endsWith(".ts") ? moduleId.substring(0, moduleId.length - 3) : moduleId;
                    return id + ".html";
                }, ViewLocator;
            }(), _class10.viewStrategyMetadataKey = "aurelia:view-strategy", _temp2), BindingLanguage = exports.BindingLanguage = function() {
                function BindingLanguage() {}
                return BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
                    mi("inspectAttribute");
                }, BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
                    mi("createAttributeInstruction");
                }, BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
                    mi("inspectTextContent");
                }, BindingLanguage;
            }(), noNodes = Object.freeze([]), SlotCustomAttribute = exports.SlotCustomAttribute = (_dec6 = (0, 
            _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element), _dec6(_class11 = function() {
                function SlotCustomAttribute(element) {
                    this.element = element, this.element.auSlotAttribute = this;
                }
                return SlotCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {}, 
                SlotCustomAttribute;
            }()) || _class11), PassThroughSlot = exports.PassThroughSlot = function() {
                function PassThroughSlot(anchor, name, destinationName, fallbackFactory) {
                    this.anchor = anchor, this.anchor.viewSlot = this, this.name = name, this.destinationName = destinationName, 
                    this.fallbackFactory = fallbackFactory, this.destinationSlot = null, this.projections = 0, 
                    this.contentView = null;
                    var attr = new SlotCustomAttribute(this.anchor);
                    attr.value = this.destinationName;
                }
                return PassThroughSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
                    if (null === this.contentView) {
                        this.contentView = this.fallbackFactory.create(this.ownerView.container), this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
                        var slots = Object.create(null);
                        slots[this.destinationSlot.name] = this.destinationSlot, ShadowDOM.distributeView(this.contentView, slots, projectionSource, index, this.destinationSlot.name);
                    }
                }, PassThroughSlot.prototype.passThroughTo = function passThroughTo(destinationSlot) {
                    this.destinationSlot = destinationSlot;
                }, PassThroughSlot.prototype.addNode = function addNode(view, node, projectionSource, index) {
                    return null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), 
                    this.contentView.unbind(), this.contentView = null), node.viewSlot instanceof PassThroughSlot ? void node.viewSlot.passThroughTo(this) : (this.projections++, 
                    void this.destinationSlot.addNode(view, node, projectionSource, index));
                }, PassThroughSlot.prototype.removeView = function removeView(view, projectionSource) {
                    this.projections--, this.destinationSlot.removeView(view, projectionSource), this.needsFallbackRendering && this.renderFallbackContent(null, noNodes, projectionSource);
                }, PassThroughSlot.prototype.removeAll = function removeAll(projectionSource) {
                    this.projections = 0, this.destinationSlot.removeAll(projectionSource), this.needsFallbackRendering && this.renderFallbackContent(null, noNodes, projectionSource);
                }, PassThroughSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
                    this.destinationSlot.projectFrom(view, projectionSource);
                }, PassThroughSlot.prototype.created = function created(ownerView) {
                    this.ownerView = ownerView;
                }, PassThroughSlot.prototype.bind = function bind(view) {
                    this.contentView && this.contentView.bind(view.bindingContext, view.overrideContext);
                }, PassThroughSlot.prototype.attached = function attached() {
                    this.contentView && this.contentView.attached();
                }, PassThroughSlot.prototype.detached = function detached() {
                    this.contentView && this.contentView.detached();
                }, PassThroughSlot.prototype.unbind = function unbind() {
                    this.contentView && this.contentView.unbind();
                }, _createClass(PassThroughSlot, [ {
                    key: "needsFallbackRendering",
                    get: function get() {
                        return this.fallbackFactory && 0 === this.projections;
                    }
                } ]), PassThroughSlot;
            }(), ShadowSlot = exports.ShadowSlot = function() {
                function ShadowSlot(anchor, name, fallbackFactory) {
                    this.anchor = anchor, this.anchor.isContentProjectionSource = !0, this.anchor.viewSlot = this, 
                    this.name = name, this.fallbackFactory = fallbackFactory, this.contentView = null, 
                    this.projections = 0, this.children = [], this.projectFromAnchors = null, this.destinationSlots = null;
                }
                return ShadowSlot.prototype.addNode = function addNode(view, node, projectionSource, index, destination) {
                    if (null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), 
                    this.contentView.unbind(), this.contentView = null), node.viewSlot instanceof PassThroughSlot) return void node.viewSlot.passThroughTo(this);
                    if (null !== this.destinationSlots) ShadowDOM.distributeNodes(view, [ node ], this.destinationSlots, this, index); else {
                        node.auOwnerView = view, node.auProjectionSource = projectionSource, node.auAssignedSlot = this;
                        var anchor = this._findAnchor(view, node, projectionSource, index), parent = anchor.parentNode;
                        parent.insertBefore(node, anchor), this.children.push(node), this.projections++;
                    }
                }, ShadowSlot.prototype.removeView = function removeView(view, projectionSource) {
                    if (null !== this.destinationSlots) ShadowDOM.undistributeView(view, this.destinationSlots, this); else if (this.contentView && this.contentView.hasSlots) ShadowDOM.undistributeView(view, this.contentView.slots, projectionSource); else {
                        var found = this.children.find(function(x) {
                            return x.auSlotProjectFrom === projectionSource;
                        });
                        if (found) {
                            for (var _children = found.auProjectionChildren, i = 0, ii = _children.length; i < ii; ++i) {
                                var _child = _children[i];
                                _child.auOwnerView === view && (_children.splice(i, 1), view.fragment.appendChild(_child), 
                                i--, ii--, this.projections--);
                            }
                            this.needsFallbackRendering && this.renderFallbackContent(view, noNodes, projectionSource);
                        }
                    }
                }, ShadowSlot.prototype.removeAll = function removeAll(projectionSource) {
                    if (null !== this.destinationSlots) ShadowDOM.undistributeAll(this.destinationSlots, this); else if (this.contentView && this.contentView.hasSlots) ShadowDOM.undistributeAll(this.contentView.slots, projectionSource); else {
                        var found = this.children.find(function(x) {
                            return x.auSlotProjectFrom === projectionSource;
                        });
                        if (found) {
                            for (var _children2 = found.auProjectionChildren, i = 0, ii = _children2.length; i < ii; ++i) {
                                var _child2 = _children2[i];
                                _child2.auOwnerView.fragment.appendChild(_child2), this.projections--;
                            }
                            found.auProjectionChildren = [], this.needsFallbackRendering && this.renderFallbackContent(null, noNodes, projectionSource);
                        }
                    }
                }, ShadowSlot.prototype._findAnchor = function _findAnchor(view, node, projectionSource, index) {
                    if (projectionSource) {
                        var found = this.children.find(function(x) {
                            return x.auSlotProjectFrom === projectionSource;
                        });
                        if (found) {
                            if (void 0 !== index) for (var _children3 = found.auProjectionChildren, viewIndex = -1, lastView = void 0, i = 0, ii = _children3.length; i < ii; ++i) {
                                var current = _children3[i];
                                if (current.auOwnerView !== lastView && (viewIndex++, lastView = current.auOwnerView, 
                                viewIndex >= index && lastView !== view)) return _children3.splice(i, 0, node), 
                                current;
                            }
                            return found.auProjectionChildren.push(node), found;
                        }
                    }
                    return this.anchor;
                }, ShadowSlot.prototype.projectTo = function projectTo(slots) {
                    this.destinationSlots = slots;
                }, ShadowSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
                    var anchor = _aureliaPal.DOM.createComment("anchor"), parent = this.anchor.parentNode;
                    anchor.auSlotProjectFrom = projectionSource, anchor.auOwnerView = view, anchor.auProjectionChildren = [], 
                    parent.insertBefore(anchor, this.anchor), this.children.push(anchor), null === this.projectFromAnchors && (this.projectFromAnchors = []), 
                    this.projectFromAnchors.push(anchor);
                }, ShadowSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
                    if (null === this.contentView && (this.contentView = this.fallbackFactory.create(this.ownerView.container), 
                    this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext), 
                    this.contentView.insertNodesBefore(this.anchor)), this.contentView.hasSlots) {
                        var slots = this.contentView.slots, projectFromAnchors = this.projectFromAnchors;
                        if (null !== projectFromAnchors) for (var slotName in slots) for (var slot = slots[slotName], i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
                            var anchor = projectFromAnchors[i];
                            slot.projectFrom(anchor.auOwnerView, anchor.auSlotProjectFrom);
                        }
                        this.fallbackSlots = slots, ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index);
                    }
                }, ShadowSlot.prototype.created = function created(ownerView) {
                    this.ownerView = ownerView;
                }, ShadowSlot.prototype.bind = function bind(view) {
                    this.contentView && this.contentView.bind(view.bindingContext, view.overrideContext);
                }, ShadowSlot.prototype.attached = function attached() {
                    this.contentView && this.contentView.attached();
                }, ShadowSlot.prototype.detached = function detached() {
                    this.contentView && this.contentView.detached();
                }, ShadowSlot.prototype.unbind = function unbind() {
                    this.contentView && this.contentView.unbind();
                }, _createClass(ShadowSlot, [ {
                    key: "needsFallbackRendering",
                    get: function get() {
                        return this.fallbackFactory && 0 === this.projections;
                    }
                } ]), ShadowSlot;
            }(), ShadowDOM = exports.ShadowDOM = (_temp3 = _class12 = function() {
                function ShadowDOM() {}
                return ShadowDOM.getSlotName = function getSlotName(node) {
                    return void 0 === node.auSlotAttribute ? ShadowDOM.defaultSlotKey : node.auSlotAttribute.value;
                }, ShadowDOM.distributeView = function distributeView(view, slots, projectionSource, index, destinationOverride) {
                    var nodes = void 0;
                    if (null === view) nodes = noNodes; else {
                        var childNodes = view.fragment.childNodes, ii = childNodes.length;
                        nodes = new Array(ii);
                        for (var i = 0; i < ii; ++i) nodes[i] = childNodes[i];
                    }
                    ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride);
                }, ShadowDOM.undistributeView = function undistributeView(view, slots, projectionSource) {
                    for (var slotName in slots) slots[slotName].removeView(view, projectionSource);
                }, ShadowDOM.undistributeAll = function undistributeAll(slots, projectionSource) {
                    for (var slotName in slots) slots[slotName].removeAll(projectionSource);
                }, ShadowDOM.distributeNodes = function distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride) {
                    for (var i = 0, ii = nodes.length; i < ii; ++i) {
                        var currentNode = nodes[i], nodeType = currentNode.nodeType;
                        if (currentNode.isContentProjectionSource) {
                            currentNode.viewSlot.projectTo(slots);
                            for (var slotName in slots) slots[slotName].projectFrom(view, currentNode.viewSlot);
                            nodes.splice(i, 1), ii--, i--;
                        } else if (1 === nodeType || 3 === nodeType || currentNode.viewSlot instanceof PassThroughSlot) if (3 === nodeType && _isAllWhitespace(currentNode)) nodes.splice(i, 1), 
                        ii--, i--; else {
                            var found = slots[destinationOverride || ShadowDOM.getSlotName(currentNode)];
                            found && (found.addNode(view, currentNode, projectionSource, index), nodes.splice(i, 1), 
                            ii--, i--);
                        } else nodes.splice(i, 1), ii--, i--;
                    }
                    for (var _slotName in slots) {
                        var slot = slots[_slotName];
                        slot.needsFallbackRendering && slot.renderFallbackContent(view, nodes, projectionSource, index);
                    }
                }, ShadowDOM;
            }(), _class12.defaultSlotKey = "__au-default-slot-key__", _temp3), ViewResources = exports.ViewResources = function() {
                function ViewResources(parent, viewUrl) {
                    this.bindingLanguage = null, this.parent = parent || null, this.hasParent = null !== this.parent, 
                    this.viewUrl = viewUrl || "", this.lookupFunctions = {
                        valueConverters: this.getValueConverter.bind(this),
                        bindingBehaviors: this.getBindingBehavior.bind(this)
                    }, this.attributes = Object.create(null), this.elements = Object.create(null), this.valueConverters = Object.create(null), 
                    this.bindingBehaviors = Object.create(null), this.attributeMap = Object.create(null), 
                    this.values = Object.create(null), this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = !1;
                }
                return ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
                    if ("function" == typeof obj[name]) {
                        for (var func = obj[name].bind(obj), counter = 1, callbackName = void 0; void 0 !== this[callbackName = name + counter.toString()]; ) counter++;
                        this[name] = !0, this[callbackName] = func;
                    }
                }, ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
                    if (this.hasParent && this.parent._invokeHook(name, one, two, three, four), this[name]) {
                        this[name + "1"](one, two, three, four);
                        var callbackName = name + "2";
                        if (this[callbackName] && (this[callbackName](one, two, three, four), callbackName = name + "3", 
                        this[callbackName])) {
                            this[callbackName](one, two, three, four);
                            for (var counter = 4; void 0 !== this[callbackName = name + counter.toString()]; ) this[callbackName](one, two, three, four), 
                            counter++;
                        }
                    }
                }, ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
                    this._tryAddHook(hooks, "beforeCompile"), this._tryAddHook(hooks, "afterCompile"), 
                    this._tryAddHook(hooks, "beforeCreate"), this._tryAddHook(hooks, "afterCreate"), 
                    this._tryAddHook(hooks, "beforeBind"), this._tryAddHook(hooks, "beforeUnbind");
                }, ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
                    return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
                }, ViewResources.prototype.patchInParent = function patchInParent(newParent) {
                    var originalParent = this.parent;
                    this.parent = newParent || null, this.hasParent = null !== this.parent, null === newParent.parent && (newParent.parent = originalParent, 
                    newParent.hasParent = null !== originalParent);
                }, ViewResources.prototype.relativeToView = function relativeToView(path) {
                    return (0, _aureliaPath.relativeToFile)(path, this.viewUrl);
                }, ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
                    register(this.elements, tagName, behavior, "an Element");
                }, ViewResources.prototype.getElement = function getElement(tagName) {
                    return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
                }, ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
                    return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
                }, ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
                    this.attributeMap[attribute] = knownAttribute, register(this.attributes, attribute, behavior, "an Attribute");
                }, ViewResources.prototype.getAttribute = function getAttribute(attribute) {
                    return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
                }, ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
                    register(this.valueConverters, name, valueConverter, "a ValueConverter");
                }, ViewResources.prototype.getValueConverter = function getValueConverter(name) {
                    return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
                }, ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
                    register(this.bindingBehaviors, name, bindingBehavior, "a BindingBehavior");
                }, ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
                    return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
                }, ViewResources.prototype.registerValue = function registerValue(name, value) {
                    register(this.values, name, value, "a value");
                }, ViewResources.prototype.getValue = function getValue(name) {
                    return this.values[name] || (this.hasParent ? this.parent.getValue(name) : null);
                }, ViewResources;
            }(), View = exports.View = function() {
                function View(container, viewFactory, fragment, controllers, bindings, children, slots) {
                    this.container = container, this.viewFactory = viewFactory, this.resources = viewFactory.resources, 
                    this.fragment = fragment, this.firstChild = fragment.firstChild, this.lastChild = fragment.lastChild, 
                    this.controllers = controllers, this.bindings = bindings, this.children = children, 
                    this.slots = slots, this.hasSlots = !1, this.fromCache = !1, this.isBound = !1, 
                    this.isAttached = !1, this.bindingContext = null, this.overrideContext = null, this.controller = null, 
                    this.viewModelScope = null, this.animatableElement = void 0, this._isUserControlled = !1, 
                    this.contentView = null;
                    for (var key in slots) {
                        this.hasSlots = !0;
                        break;
                    }
                }
                return View.prototype.returnToCache = function returnToCache() {
                    this.viewFactory.returnViewToCache(this);
                }, View.prototype.created = function created() {
                    var i = void 0, ii = void 0, controllers = this.controllers;
                    for (i = 0, ii = controllers.length; i < ii; ++i) controllers[i].created(this);
                }, View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
                    var controllers = void 0, bindings = void 0, children = void 0, i = void 0, ii = void 0;
                    if (!_systemUpdate || !this._isUserControlled) {
                        if (this.isBound) {
                            if (this.bindingContext === bindingContext) return;
                            this.unbind();
                        }
                        for (this.isBound = !0, this.bindingContext = bindingContext, this.overrideContext = overrideContext || (0, 
                        _aureliaBinding.createOverrideContext)(bindingContext), this.resources._invokeHook("beforeBind", this), 
                        bindings = this.bindings, i = 0, ii = bindings.length; i < ii; ++i) bindings[i].bind(this);
                        for (null !== this.viewModelScope && (bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext), 
                        this.viewModelScope = null), controllers = this.controllers, i = 0, ii = controllers.length; i < ii; ++i) controllers[i].bind(this);
                        for (children = this.children, i = 0, ii = children.length; i < ii; ++i) children[i].bind(bindingContext, overrideContext, !0);
                        this.hasSlots && ShadowDOM.distributeView(this.contentView, this.slots);
                    }
                }, View.prototype.addBinding = function addBinding(binding) {
                    this.bindings.push(binding), this.isBound && binding.bind(this);
                }, View.prototype.unbind = function unbind() {
                    var controllers = void 0, bindings = void 0, children = void 0, i = void 0, ii = void 0;
                    if (this.isBound) {
                        for (this.isBound = !1, this.resources._invokeHook("beforeUnbind", this), null !== this.controller && this.controller.unbind(), 
                        bindings = this.bindings, i = 0, ii = bindings.length; i < ii; ++i) bindings[i].unbind();
                        for (controllers = this.controllers, i = 0, ii = controllers.length; i < ii; ++i) controllers[i].unbind();
                        for (children = this.children, i = 0, ii = children.length; i < ii; ++i) children[i].unbind();
                        this.bindingContext = null, this.overrideContext = null;
                    }
                }, View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
                    refNode.parentNode.insertBefore(this.fragment, refNode);
                }, View.prototype.appendNodesTo = function appendNodesTo(parent) {
                    parent.appendChild(this.fragment);
                }, View.prototype.removeNodes = function removeNodes() {
                    for (var fragment = this.fragment, current = this.firstChild, end = this.lastChild, next = void 0; current && (next = current.nextSibling, 
                    fragment.appendChild(current), current !== end); ) current = next;
                }, View.prototype.attached = function attached() {
                    var controllers = void 0, children = void 0, i = void 0, ii = void 0;
                    if (!this.isAttached) {
                        for (this.isAttached = !0, null !== this.controller && this.controller.attached(), 
                        controllers = this.controllers, i = 0, ii = controllers.length; i < ii; ++i) controllers[i].attached();
                        for (children = this.children, i = 0, ii = children.length; i < ii; ++i) children[i].attached();
                    }
                }, View.prototype.detached = function detached() {
                    var controllers = void 0, children = void 0, i = void 0, ii = void 0;
                    if (this.isAttached) {
                        for (this.isAttached = !1, null !== this.controller && this.controller.detached(), 
                        controllers = this.controllers, i = 0, ii = controllers.length; i < ii; ++i) controllers[i].detached();
                        for (children = this.children, i = 0, ii = children.length; i < ii; ++i) children[i].detached();
                    }
                }, View;
            }(), ViewSlot = exports.ViewSlot = function() {
                function ViewSlot(anchor, anchorIsContainer) {
                    var animator = arguments.length <= 2 || void 0 === arguments[2] ? Animator.instance : arguments[2];
                    this.anchor = anchor, this.anchorIsContainer = anchorIsContainer, this.bindingContext = null, 
                    this.overrideContext = null, this.animator = animator, this.children = [], this.isBound = !1, 
                    this.isAttached = !1, this.contentSelectors = null, anchor.viewSlot = this, anchor.isContentProjectionSource = !1;
                }
                return ViewSlot.prototype.animateView = function animateView(view) {
                    var direction = arguments.length <= 1 || void 0 === arguments[1] ? "enter" : arguments[1], animatableElement = getAnimatableElement(view);
                    if (null !== animatableElement) switch (direction) {
                      case "enter":
                        return this.animator.enter(animatableElement);

                      case "leave":
                        return this.animator.leave(animatableElement);

                      default:
                        throw new Error("Invalid animation direction: " + direction);
                    }
                }, ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
                    var parent = this.anchor;
                    this.children.push({
                        fragment: parent,
                        firstChild: parent.firstChild,
                        lastChild: parent.lastChild,
                        returnToCache: function returnToCache() {},
                        removeNodes: function removeNodes() {
                            for (var last = void 0; last = parent.lastChild; ) parent.removeChild(last);
                        },
                        created: function created() {},
                        bind: function bind() {},
                        unbind: function unbind() {},
                        attached: function attached() {},
                        detached: function detached() {}
                    });
                }, ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
                    var i = void 0, ii = void 0, children = void 0;
                    if (this.isBound) {
                        if (this.bindingContext === bindingContext) return;
                        this.unbind();
                    }
                    for (this.isBound = !0, this.bindingContext = bindingContext = bindingContext || this.bindingContext, 
                    this.overrideContext = overrideContext = overrideContext || this.overrideContext, 
                    children = this.children, i = 0, ii = children.length; i < ii; ++i) children[i].bind(bindingContext, overrideContext, !0);
                }, ViewSlot.prototype.unbind = function unbind() {
                    if (this.isBound) {
                        var i = void 0, ii = void 0, _children4 = this.children;
                        for (this.isBound = !1, this.bindingContext = null, this.overrideContext = null, 
                        i = 0, ii = _children4.length; i < ii; ++i) _children4[i].unbind();
                    }
                }, ViewSlot.prototype.add = function add(view) {
                    if (this.anchorIsContainer ? view.appendNodesTo(this.anchor) : view.insertNodesBefore(this.anchor), 
                    this.children.push(view), this.isAttached) return view.attached(), this.animateView(view, "enter");
                }, ViewSlot.prototype.insert = function insert(index, view) {
                    var children = this.children, length = children.length;
                    return 0 === index && 0 === length || index >= length ? this.add(view) : (view.insertNodesBefore(children[index].firstChild), 
                    children.splice(index, 0, view), this.isAttached ? (view.attached(), this.animateView(view, "enter")) : void 0);
                }, ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
                    if (sourceIndex !== targetIndex) {
                        var children = this.children, view = children[sourceIndex];
                        view.removeNodes(), view.insertNodesBefore(children[targetIndex].firstChild), children.splice(sourceIndex, 1), 
                        children.splice(targetIndex, 0, view);
                    }
                }, ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
                    return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
                }, ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
                    var _this4 = this, children = this.children, ii = viewsToRemove.length, i = void 0, rmPromises = [];
                    viewsToRemove.forEach(function(child) {
                        if (skipAnimation) return void child.removeNodes();
                        var animation = _this4.animateView(child, "leave");
                        animation ? rmPromises.push(animation.then(function() {
                            return child.removeNodes();
                        })) : child.removeNodes();
                    });
                    var removeAction = function removeAction() {
                        if (_this4.isAttached) for (i = 0; i < ii; ++i) viewsToRemove[i].detached();
                        if (returnToCache) for (i = 0; i < ii; ++i) viewsToRemove[i].returnToCache();
                        for (i = 0; i < ii; ++i) {
                            var index = children.indexOf(viewsToRemove[i]);
                            index >= 0 && children.splice(index, 1);
                        }
                    };
                    return rmPromises.length > 0 ? Promise.all(rmPromises).then(function() {
                        return removeAction();
                    }) : removeAction();
                }, ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
                    var _this5 = this, view = this.children[index], removeAction = function removeAction() {
                        return index = _this5.children.indexOf(view), view.removeNodes(), _this5.children.splice(index, 1), 
                        _this5.isAttached && view.detached(), returnToCache && view.returnToCache(), view;
                    };
                    if (!skipAnimation) {
                        var animation = this.animateView(view, "leave");
                        if (animation) return animation.then(function() {
                            return removeAction();
                        });
                    }
                    return removeAction();
                }, ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
                    var _this6 = this, children = this.children, ii = children.length, i = void 0, rmPromises = [];
                    children.forEach(function(child) {
                        if (skipAnimation) return void child.removeNodes();
                        var animation = _this6.animateView(child, "leave");
                        animation ? rmPromises.push(animation.then(function() {
                            return child.removeNodes();
                        })) : child.removeNodes();
                    });
                    var removeAction = function removeAction() {
                        if (_this6.isAttached) for (i = 0; i < ii; ++i) children[i].detached();
                        if (returnToCache) for (i = 0; i < ii; ++i) children[i].returnToCache();
                        _this6.children = [];
                    };
                    return rmPromises.length > 0 ? Promise.all(rmPromises).then(function() {
                        return removeAction();
                    }) : removeAction();
                }, ViewSlot.prototype.attached = function attached() {
                    var i = void 0, ii = void 0, children = void 0, child = void 0;
                    if (!this.isAttached) for (this.isAttached = !0, children = this.children, i = 0, 
                    ii = children.length; i < ii; ++i) child = children[i], child.attached(), this.animateView(child, "enter");
                }, ViewSlot.prototype.detached = function detached() {
                    var i = void 0, ii = void 0, children = void 0;
                    if (this.isAttached) for (this.isAttached = !1, children = this.children, i = 0, 
                    ii = children.length; i < ii; ++i) children[i].detached();
                }, ViewSlot.prototype.projectTo = function projectTo(slots) {
                    var _this7 = this;
                    this.projectToSlots = slots, this.add = this._projectionAdd, this.insert = this._projectionInsert, 
                    this.move = this._projectionMove, this.remove = this._projectionRemove, this.removeAt = this._projectionRemoveAt, 
                    this.removeMany = this._projectionRemoveMany, this.removeAll = this._projectionRemoveAll, 
                    this.children.forEach(function(view) {
                        return ShadowDOM.distributeView(view, slots, _this7);
                    });
                }, ViewSlot.prototype._projectionAdd = function _projectionAdd(view) {
                    ShadowDOM.distributeView(view, this.projectToSlots, this), this.children.push(view), 
                    this.isAttached && view.attached();
                }, ViewSlot.prototype._projectionInsert = function _projectionInsert(index, view) {
                    0 === index && !this.children.length || index >= this.children.length ? this.add(view) : (ShadowDOM.distributeView(view, this.projectToSlots, this, index), 
                    this.children.splice(index, 0, view), this.isAttached && view.attached());
                }, ViewSlot.prototype._projectionMove = function _projectionMove(sourceIndex, targetIndex) {
                    if (sourceIndex !== targetIndex) {
                        var children = this.children, view = children[sourceIndex];
                        ShadowDOM.undistributeView(view, this.projectToSlots, this), ShadowDOM.distributeView(view, this.projectToSlots, this, targetIndex), 
                        children.splice(sourceIndex, 1), children.splice(targetIndex, 0, view);
                    }
                }, ViewSlot.prototype._projectionRemove = function _projectionRemove(view, returnToCache) {
                    ShadowDOM.undistributeView(view, this.projectToSlots, this), this.children.splice(this.children.indexOf(view), 1), 
                    this.isAttached && view.detached();
                }, ViewSlot.prototype._projectionRemoveAt = function _projectionRemoveAt(index, returnToCache) {
                    var view = this.children[index];
                    ShadowDOM.undistributeView(view, this.projectToSlots, this), this.children.splice(index, 1), 
                    this.isAttached && view.detached();
                }, ViewSlot.prototype._projectionRemoveMany = function _projectionRemoveMany(viewsToRemove, returnToCache) {
                    var _this8 = this;
                    viewsToRemove.forEach(function(view) {
                        return _this8.remove(view, returnToCache);
                    });
                }, ViewSlot.prototype._projectionRemoveAll = function _projectionRemoveAll(returnToCache) {
                    ShadowDOM.undistributeAll(this.projectToSlots, this);
                    var children = this.children;
                    if (this.isAttached) for (var i = 0, ii = children.length; i < ii; ++i) children[i].detached();
                    this.children = [];
                }, ViewSlot;
            }(), ProviderResolver = (0, _aureliaDependencyInjection.resolver)(_class15 = function() {
                function ProviderResolver() {}
                return ProviderResolver.prototype.get = function get(container, key) {
                    var id = key.__providerId__;
                    return id in container ? container[id] : container[id] = container.invoke(key);
                }, ProviderResolver;
            }()) || _class15, providerResolverInstance = new ProviderResolver(), BoundViewFactory = exports.BoundViewFactory = function() {
                function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
                    this.parentContainer = parentContainer, this.viewFactory = viewFactory, this.factoryCreateInstruction = {
                        partReplacements: partReplacements
                    };
                }
                return BoundViewFactory.prototype.create = function create() {
                    var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
                    return view._isUserControlled = !0, view;
                }, BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
                    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
                }, BoundViewFactory.prototype.getCachedView = function getCachedView() {
                    return this.viewFactory.getCachedView();
                }, BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
                    this.viewFactory.returnViewToCache(view);
                }, _createClass(BoundViewFactory, [ {
                    key: "isCaching",
                    get: function get() {
                        return this.viewFactory.isCaching;
                    }
                } ]), BoundViewFactory;
            }(), ViewFactory = exports.ViewFactory = function() {
                function ViewFactory(template, instructions, resources) {
                    this.isCaching = !1, this.template = template, this.instructions = instructions, 
                    this.resources = resources, this.cacheSize = -1, this.cache = null;
                }
                return ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
                    size && ("*" === size ? size = Number.MAX_VALUE : "string" == typeof size && (size = parseInt(size, 10))), 
                    this.cacheSize !== -1 && doNotOverrideIfAlreadySet || (this.cacheSize = size), this.cacheSize > 0 ? this.cache = [] : this.cache = null, 
                    this.isCaching = this.cacheSize > 0;
                }, ViewFactory.prototype.getCachedView = function getCachedView() {
                    return null !== this.cache ? this.cache.pop() || null : null;
                }, ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
                    view.isAttached && view.detached(), view.isBound && view.unbind(), null !== this.cache && this.cache.length < this.cacheSize && (view.fromCache = !0, 
                    this.cache.push(view));
                }, ViewFactory.prototype.create = function create(container, createInstruction, element) {
                    createInstruction = createInstruction || BehaviorInstruction.normal;
                    var cachedView = this.getCachedView();
                    if (null !== cachedView) return cachedView;
                    var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(!0), instructables = fragment.querySelectorAll(".au-target"), instructions = this.instructions, resources = this.resources, controllers = [], bindings = [], children = [], shadowSlots = Object.create(null), containers = {
                        root: container
                    }, partReplacements = createInstruction.partReplacements, i = void 0, ii = void 0, view = void 0, instructable = void 0, instruction = void 0;
                    for (this.resources._invokeHook("beforeCreate", this, container, fragment, createInstruction), 
                    element && null !== this.surrogateInstruction && applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children), 
                    createInstruction.enhance && fragment.hasAttribute("au-target-id") && (instructable = fragment, 
                    instruction = instructions[instructable.getAttribute("au-target-id")], applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources)), 
                    i = 0, ii = instructables.length; i < ii; ++i) instructable = instructables[i], 
                    instruction = instructions[instructable.getAttribute("au-target-id")], applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
                    return view = new View(container, this, fragment, controllers, bindings, children, shadowSlots), 
                    createInstruction.initiatedByBehavior || view.created(), this.resources._invokeHook("afterCreate", view), 
                    view;
                }, ViewFactory;
            }(), nextInjectorId = 0, lastAUTargetID = 0, ViewCompiler = exports.ViewCompiler = (_dec7 = (0, 
            _aureliaDependencyInjection.inject)(BindingLanguage, ViewResources), _dec7(_class17 = function() {
                function ViewCompiler(bindingLanguage, resources) {
                    this.bindingLanguage = bindingLanguage, this.resources = resources;
                }
                return ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
                    resources = resources || this.resources, compileInstruction = compileInstruction || ViewCompileInstruction.normal, 
                    source = "string" == typeof source ? _aureliaPal.DOM.createTemplateFromMarkup(source) : source;
                    var content = void 0, part = void 0, cacheSize = void 0;
                    source.content ? (part = source.getAttribute("part"), cacheSize = source.getAttribute("view-cache"), 
                    content = _aureliaPal.DOM.adoptNode(source.content)) : content = source, compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM, 
                    resources._invokeHook("beforeCompile", content, resources, compileInstruction);
                    var instructions = {};
                    this._compileNode(content, resources, instructions, source, "root", !compileInstruction.targetShadowDOM);
                    var firstChild = content.firstChild;
                    if (firstChild && 1 === firstChild.nodeType) {
                        var targetId = firstChild.getAttribute("au-target-id");
                        if (targetId) {
                            var ins = instructions[targetId];
                            (ins.shadowSlot || ins.lifting || ins.elementInstruction && !ins.elementInstruction.anchorIsContainer) && content.insertBefore(_aureliaPal.DOM.createComment("view"), firstChild);
                        }
                    }
                    var factory = new ViewFactory(content, instructions, resources);
                    return factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null, 
                    factory.part = part, cacheSize && factory.setCacheSize(cacheSize), resources._invokeHook("afterCompile", factory), 
                    factory;
                }, ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
                    switch (node.nodeType) {
                      case 1:
                        return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);

                      case 3:
                        var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
                        if (expression) {
                            var marker = _aureliaPal.DOM.createElement("au-marker"), auTargetID = makeIntoInstructionTarget(marker);
                            for ((node.parentNode || parentNode).insertBefore(marker, node), node.textContent = " ", 
                            instructions[auTargetID] = TargetInstruction.contentExpression(expression); node.nextSibling && 3 === node.nextSibling.nodeType; ) (node.parentNode || parentNode).removeChild(node.nextSibling);
                        } else for (;node.nextSibling && 3 === node.nextSibling.nodeType; ) node = node.nextSibling;
                        return node.nextSibling;

                      case 11:
                        for (var currentChild = node.firstChild; currentChild; ) currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
                    }
                    return node.nextSibling;
                }, ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
                    var tagName = node.tagName.toLowerCase(), attributes = node.attributes, bindingLanguage = resources.getBindingLanguage(this.bindingLanguage), knownAttribute = void 0, property = void 0, instruction = void 0, i = void 0, ii = void 0, attr = void 0, attrName = void 0, attrValue = void 0, info = void 0, type = void 0, expressions = [], expression = void 0, behaviorInstructions = [], values = {}, hasValues = !1, providers = [];
                    for (i = 0, ii = attributes.length; i < ii; ++i) if (attr = attributes[i], attrName = attr.name, 
                    attrValue = attr.value, info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue), 
                    type = resources.getAttribute(info.attrName), type && (knownAttribute = resources.mapAttribute(info.attrName), 
                    knownAttribute && (property = type.attributes[knownAttribute], property && (info.defaultBindingMode = property.defaultBindingMode, 
                    info.command || info.expression || (info.command = property.hasOptions ? "options" : null)))), 
                    instruction = bindingLanguage.createAttributeInstruction(resources, node, info, void 0, type)) if (instruction.alteredAttr && (type = resources.getAttribute(instruction.attrName)), 
                    instruction.discrete) expressions.push(instruction); else if (type) {
                        if (instruction.type = type, configureProperties(instruction, resources), type.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
                        behaviorInstructions.push(instruction);
                    } else expressions.push(instruction.attributes[instruction.attrName]); else if (type) {
                        if (instruction = BehaviorInstruction.attribute(attrName, type), instruction.attributes[resources.mapAttribute(attrName)] = attrValue, 
                        type.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
                        behaviorInstructions.push(instruction);
                    } else "id" !== attrName && "part" !== attrName && "replace-part" !== attrName && (hasValues = !0, 
                    values[attrName] = attrValue);
                    if (expressions.length || behaviorInstructions.length || hasValues) {
                        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) instruction = behaviorInstructions[i], 
                        instruction.type.compile(this, resources, node, instruction), providers.push(instruction.type.target);
                        for (i = 0, ii = expressions.length; i < ii; ++i) expression = expressions[i], void 0 !== expression.attrToRemove && node.removeAttribute(expression.attrToRemove);
                        return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
                    }
                    return null;
                }, ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
                    var tagName = node.tagName.toLowerCase(), attributes = node.attributes, expressions = [], expression = void 0, behaviorInstructions = [], providers = [], bindingLanguage = resources.getBindingLanguage(this.bindingLanguage), liftingInstruction = void 0, viewFactory = void 0, type = void 0, elementInstruction = void 0, elementProperty = void 0, i = void 0, ii = void 0, attr = void 0, attrName = void 0, attrValue = void 0, instruction = void 0, info = void 0, property = void 0, knownAttribute = void 0, auTargetID = void 0, injectorId = void 0;
                    if ("slot" === tagName) return targetLightDOM && (node = makeShadowSlot(this, resources, node, instructions, parentInjectorId)), 
                    node.nextSibling;
                    for ("template" === tagName ? (viewFactory = this.compile(node, resources), viewFactory.part = node.getAttribute("part")) : (type = resources.getElement(node.getAttribute("as-element") || tagName), 
                    type && (elementInstruction = BehaviorInstruction.element(node, type), type.processAttributes(this, resources, node, attributes, elementInstruction), 
                    behaviorInstructions.push(elementInstruction))), i = 0, ii = attributes.length; i < ii; ++i) if (attr = attributes[i], 
                    attrName = attr.name, attrValue = attr.value, info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue), 
                    targetLightDOM && "slot" === info.attrName && (info.attrName = attrName = "au-slot"), 
                    type = resources.getAttribute(info.attrName), elementProperty = null, type ? (knownAttribute = resources.mapAttribute(info.attrName), 
                    knownAttribute && (property = type.attributes[knownAttribute], property && (info.defaultBindingMode = property.defaultBindingMode, 
                    info.command || info.expression || (info.command = property.hasOptions ? "options" : null)))) : elementInstruction && (elementProperty = elementInstruction.type.attributes[info.attrName], 
                    elementProperty && (info.defaultBindingMode = elementProperty.defaultBindingMode)), 
                    instruction = elementProperty ? bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction) : bindingLanguage.createAttributeInstruction(resources, node, info, void 0, type)) if (instruction.alteredAttr && (type = resources.getAttribute(instruction.attrName)), 
                    instruction.discrete) expressions.push(instruction); else if (type) {
                        if (instruction.type = type, configureProperties(instruction, resources), type.liftsContent) {
                            instruction.originalAttrName = attrName, liftingInstruction = instruction;
                            break;
                        }
                        behaviorInstructions.push(instruction);
                    } else elementProperty ? elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name : expressions.push(instruction.attributes[instruction.attrName]); else if (type) {
                        if (instruction = BehaviorInstruction.attribute(attrName, type), instruction.attributes[resources.mapAttribute(attrName)] = attrValue, 
                        type.liftsContent) {
                            instruction.originalAttrName = attrName, liftingInstruction = instruction;
                            break;
                        }
                        behaviorInstructions.push(instruction);
                    } else elementProperty && (elementInstruction.attributes[attrName] = attrValue);
                    if (liftingInstruction) liftingInstruction.viewFactory = viewFactory, node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode), 
                    auTargetID = makeIntoInstructionTarget(node), instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction); else {
                        if (expressions.length || behaviorInstructions.length) {
                            for (injectorId = !!behaviorInstructions.length && getNextInjectorId(), i = 0, ii = behaviorInstructions.length; i < ii; ++i) instruction = behaviorInstructions[i], 
                            instruction.type.compile(this, resources, node, instruction, parentNode), providers.push(instruction.type.target);
                            for (i = 0, ii = expressions.length; i < ii; ++i) expression = expressions[i], void 0 !== expression.attrToRemove && node.removeAttribute(expression.attrToRemove);
                            auTargetID = makeIntoInstructionTarget(node), instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
                        }
                        if (elementInstruction && elementInstruction.skipContentProcessing) return node.nextSibling;
                        for (var currentChild = node.firstChild; currentChild; ) currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
                    }
                    return node.nextSibling;
                }, ViewCompiler;
            }()) || _class17), ResourceModule = exports.ResourceModule = function() {
                function ResourceModule(moduleId) {
                    this.id = moduleId, this.moduleInstance = null, this.mainResource = null, this.resources = null, 
                    this.viewStrategy = null, this.isInitialized = !1, this.onLoaded = null, this.loadContext = null;
                }
                return ResourceModule.prototype.initialize = function initialize(container) {
                    var current = this.mainResource, resources = this.resources, vs = this.viewStrategy;
                    if (!this.isInitialized) {
                        this.isInitialized = !0, void 0 !== current && (current.metadata.viewStrategy = vs, 
                        current.initialize(container));
                        for (var i = 0, ii = resources.length; i < ii; ++i) current = resources[i], current.metadata.viewStrategy = vs, 
                        current.initialize(container);
                    }
                }, ResourceModule.prototype.register = function register(registry, name) {
                    var main = this.mainResource, resources = this.resources;
                    void 0 !== main && (main.register(registry, name), name = null);
                    for (var i = 0, ii = resources.length; i < ii; ++i) resources[i].register(registry, name), 
                    name = null;
                }, ResourceModule.prototype.load = function load(container, loadContext) {
                    if (null !== this.onLoaded) return this.loadContext === loadContext ? Promise.resolve() : this.onLoaded;
                    var main = this.mainResource, resources = this.resources, loads = void 0;
                    if (void 0 !== main) {
                        loads = new Array(resources.length + 1), loads[0] = main.load(container, loadContext);
                        for (var i = 0, ii = resources.length; i < ii; ++i) loads[i + 1] = resources[i].load(container, loadContext);
                    } else {
                        loads = new Array(resources.length);
                        for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) loads[_i] = resources[_i].load(container, loadContext);
                    }
                    return this.loadContext = loadContext, this.onLoaded = Promise.all(loads), this.onLoaded;
                }, ResourceModule;
            }(), ResourceDescription = exports.ResourceDescription = function() {
                function ResourceDescription(key, exportedValue, resourceTypeMeta) {
                    resourceTypeMeta || (resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue), 
                    resourceTypeMeta || (resourceTypeMeta = new HtmlBehaviorResource(), resourceTypeMeta.elementName = _hyphenate(key), 
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, resourceTypeMeta, exportedValue))), 
                    resourceTypeMeta instanceof HtmlBehaviorResource ? void 0 === resourceTypeMeta.elementName ? resourceTypeMeta.elementName = _hyphenate(key) : void 0 === resourceTypeMeta.attributeName ? resourceTypeMeta.attributeName = _hyphenate(key) : null === resourceTypeMeta.attributeName && null === resourceTypeMeta.elementName && HtmlBehaviorResource.convention(key, resourceTypeMeta) : resourceTypeMeta.name || (resourceTypeMeta.name = _hyphenate(key)), 
                    this.metadata = resourceTypeMeta, this.value = exportedValue;
                }
                return ResourceDescription.prototype.initialize = function initialize(container) {
                    this.metadata.initialize(container, this.value);
                }, ResourceDescription.prototype.register = function register(registry, name) {
                    this.metadata.register(registry, name);
                }, ResourceDescription.prototype.load = function load(container, loadContext) {
                    return this.metadata.load(container, this.value, loadContext);
                }, ResourceDescription;
            }(), ModuleAnalyzer = exports.ModuleAnalyzer = function() {
                function ModuleAnalyzer() {
                    this.cache = Object.create(null);
                }
                return ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
                    return this.cache[moduleId];
                }, ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
                    var mainResource = void 0, fallbackValue = void 0, fallbackKey = void 0, resourceTypeMeta = void 0, key = void 0, exportedValue = void 0, resources = [], conventional = void 0, vs = void 0, resourceModule = void 0;
                    if (resourceModule = this.cache[moduleId]) return resourceModule;
                    resourceModule = new ResourceModule(moduleId), this.cache[moduleId] = resourceModule, 
                    "function" == typeof moduleInstance && (moduleInstance = {
                        default: moduleInstance
                    }), mainResourceKey && (mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]));
                    for (key in moduleInstance) exportedValue = moduleInstance[key], key !== mainResourceKey && "function" == typeof exportedValue && (resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue), 
                    resourceTypeMeta ? (null === resourceTypeMeta.attributeName && null === resourceTypeMeta.elementName && HtmlBehaviorResource.convention(key, resourceTypeMeta), 
                    null === resourceTypeMeta.attributeName && null === resourceTypeMeta.elementName && (resourceTypeMeta.elementName = _hyphenate(key)), 
                    !mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && null !== resourceTypeMeta.elementName ? mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta) : resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta))) : viewStrategy.decorates(exportedValue) ? vs = exportedValue : exportedValue instanceof _aureliaLoader.TemplateRegistryEntry ? vs = new TemplateRegistryViewStrategy(moduleId, exportedValue) : (conventional = HtmlBehaviorResource.convention(key)) ? (null === conventional.elementName || mainResource ? resources.push(new ResourceDescription(key, exportedValue, conventional)) : mainResource = new ResourceDescription(key, exportedValue, conventional), 
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue)) : (conventional = _aureliaBinding.ValueConverterResource.convention(key) || _aureliaBinding.BindingBehaviorResource.convention(key) || ViewEngineHooksResource.convention(key)) ? (resources.push(new ResourceDescription(key, exportedValue, conventional)), 
                    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue)) : fallbackValue || (fallbackValue = exportedValue, 
                    fallbackKey = key));
                    return !mainResource && fallbackValue && (mainResource = new ResourceDescription(fallbackKey, fallbackValue)), 
                    resourceModule.moduleInstance = moduleInstance, resourceModule.mainResource = mainResource, 
                    resourceModule.resources = resources, resourceModule.viewStrategy = vs, resourceModule;
                }, ModuleAnalyzer;
            }(), logger = LogManager.getLogger("templating"), ProxyViewFactory = function() {
                function ProxyViewFactory(promise) {
                    var _this9 = this;
                    promise.then(function(x) {
                        return _this9.viewFactory = x;
                    });
                }
                return ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
                    return this.viewFactory.create(container, bindingContext, createInstruction, element);
                }, ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
                    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
                }, ProxyViewFactory.prototype.getCachedView = function getCachedView() {
                    return this.viewFactory.getCachedView();
                }, ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
                    this.viewFactory.returnViewToCache(view);
                }, _createClass(ProxyViewFactory, [ {
                    key: "isCaching",
                    get: function get() {
                        return this.viewFactory.isCaching;
                    }
                } ]), ProxyViewFactory;
            }(), ViewEngine = exports.ViewEngine = (_dec8 = (0, _aureliaDependencyInjection.inject)(_aureliaLoader.Loader, _aureliaDependencyInjection.Container, ViewCompiler, ModuleAnalyzer, ViewResources), 
            _dec8((_temp4 = _class19 = function() {
                function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
                    this.loader = loader, this.container = container, this.viewCompiler = viewCompiler, 
                    this.moduleAnalyzer = moduleAnalyzer, this.appResources = appResources, this._pluginMap = {};
                    var auSlotBehavior = new HtmlBehaviorResource();
                    auSlotBehavior.attributeName = "au-slot", auSlotBehavior.initialize(container, SlotCustomAttribute), 
                    auSlotBehavior.register(appResources);
                }
                return ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
                    var name = extension.replace(".", "") + "-resource-plugin";
                    this._pluginMap[extension] = name, this.loader.addPlugin(name, implementation);
                }, ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext, target) {
                    var _this10 = this;
                    return loadContext = loadContext || new ResourceLoadContext(), ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function(registryEntry) {
                        return registryEntry.onReady ? loadContext.hasDependency(urlOrRegistryEntry) ? null === registryEntry.template ? registryEntry.onReady : Promise.resolve(new ProxyViewFactory(registryEntry.onReady)) : (loadContext.addDependency(urlOrRegistryEntry), 
                        registryEntry.onReady) : (loadContext.addDependency(urlOrRegistryEntry), registryEntry.onReady = _this10.loadTemplateResources(registryEntry, compileInstruction, loadContext, target).then(function(resources) {
                            if (registryEntry.resources = resources, null === registryEntry.template) return registryEntry.factory = null;
                            var viewFactory = _this10.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
                            return registryEntry.factory = viewFactory;
                        }), registryEntry.onReady);
                    });
                }, ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext, target) {
                    var resources = new ViewResources(this.appResources, registryEntry.address), dependencies = registryEntry.dependencies, importIds = void 0, names = void 0;
                    if (compileInstruction = compileInstruction || ViewCompileInstruction.normal, 0 === dependencies.length && !compileInstruction.associatedModuleId) return Promise.resolve(resources);
                    if (importIds = dependencies.map(function(x) {
                        return x.src;
                    }), names = dependencies.map(function(x) {
                        return x.name;
                    }), logger.debug("importing resources for " + registryEntry.address, importIds), 
                    target) {
                        var viewModelRequires = _aureliaMetadata.metadata.get(ViewEngine.viewModelRequireMetadataKey, target);
                        if (viewModelRequires) {
                            for (var templateImportCount = importIds.length, i = 0, ii = viewModelRequires.length; i < ii; ++i) {
                                var req = viewModelRequires[i], importId = "function" == typeof req ? _aureliaMetadata.Origin.get(req).moduleId : (0, 
                                _aureliaPath.relativeToFile)(req.src || req, registryEntry.address);
                                importIds.indexOf(importId) === -1 && (importIds.push(importId), names.push(req.as));
                            }
                            logger.debug("importing ViewModel resources for " + compileInstruction.associatedModuleId, importIds.slice(templateImportCount));
                        }
                    }
                    return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
                }, ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
                    var _this11 = this;
                    return this.loader.loadModule(moduleImport).then(function(viewModelModule) {
                        var normalizedId = _aureliaMetadata.Origin.get(viewModelModule).moduleId, resourceModule = _this11.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);
                        if (!resourceModule.mainResource) throw new Error('No view model found in module "' + moduleImport + '".');
                        return resourceModule.initialize(_this11.container), resourceModule.mainResource;
                    });
                }, ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
                    var _this12 = this;
                    return loadContext = loadContext || new ResourceLoadContext(), compileInstruction = compileInstruction || ViewCompileInstruction.normal, 
                    moduleIds = moduleIds.map(function(x) {
                        return _this12._applyLoaderPlugin(x);
                    }), this.loader.loadAllModules(moduleIds).then(function(imports) {
                        var i = void 0, ii = void 0, analysis = void 0, normalizedId = void 0, current = void 0, associatedModule = void 0, container = _this12.container, moduleAnalyzer = _this12.moduleAnalyzer, allAnalysis = new Array(imports.length);
                        for (i = 0, ii = imports.length; i < ii; ++i) current = imports[i], normalizedId = _aureliaMetadata.Origin.get(current).moduleId, 
                        analysis = moduleAnalyzer.analyze(normalizedId, current), analysis.initialize(container), 
                        analysis.register(resources, names[i]), allAnalysis[i] = analysis;
                        for (compileInstruction.associatedModuleId && (associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId), 
                        associatedModule && associatedModule.register(resources)), i = 0, ii = allAnalysis.length; i < ii; ++i) allAnalysis[i] = allAnalysis[i].load(container, loadContext);
                        return Promise.all(allAnalysis).then(function() {
                            return resources;
                        });
                    });
                }, ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
                    var index = id.lastIndexOf(".");
                    if (index !== -1) {
                        var ext = id.substring(index), pluginName = this._pluginMap[ext];
                        return void 0 === pluginName ? id : this.loader.applyPluginToUrl(id, pluginName);
                    }
                    return id;
                }, ViewEngine;
            }(), _class19.viewModelRequireMetadataKey = "aurelia:view-model-require", _class18 = _temp4)) || _class18), Controller = exports.Controller = function() {
                function Controller(behavior, instruction, viewModel, container) {
                    this.behavior = behavior, this.instruction = instruction, this.viewModel = viewModel, 
                    this.isAttached = !1, this.view = null, this.isBound = !1, this.scope = null, this.container = container, 
                    this.elementEvents = container.elementEvents || null;
                    var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel), handlesBind = behavior.handlesBind, attributes = instruction.attributes, boundProperties = this.boundProperties = [], properties = behavior.properties, i = void 0, ii = void 0;
                    for (behavior._ensurePropertiesDefined(viewModel, observerLookup), i = 0, ii = properties.length; i < ii; ++i) properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
                }
                return Controller.prototype.created = function created(owningView) {
                    this.behavior.handlesCreated && this.viewModel.created(owningView, this.view);
                }, Controller.prototype.automate = function automate(overrideContext, owningView) {
                    this.view.bindingContext = this.viewModel, this.view.overrideContext = overrideContext || (0, 
                    _aureliaBinding.createOverrideContext)(this.viewModel), this.view._isUserControlled = !0, 
                    this.behavior.handlesCreated && this.viewModel.created(owningView || null, this.view), 
                    this.bind(this.view);
                }, Controller.prototype.bind = function bind(scope) {
                    var skipSelfSubscriber = this.behavior.handlesBind, boundProperties = this.boundProperties, i = void 0, ii = void 0, x = void 0, observer = void 0, selfSubscriber = void 0;
                    if (this.isBound) {
                        if (this.scope === scope) return;
                        this.unbind();
                    }
                    for (this.isBound = !0, this.scope = scope, i = 0, ii = boundProperties.length; i < ii; ++i) x = boundProperties[i], 
                    observer = x.observer, selfSubscriber = observer.selfSubscriber, observer.publishing = !1, 
                    skipSelfSubscriber && (observer.selfSubscriber = null), x.binding.bind(scope), observer.call(), 
                    observer.publishing = !0, observer.selfSubscriber = selfSubscriber;
                    var overrideContext = void 0;
                    null !== this.view ? (skipSelfSubscriber && (this.view.viewModelScope = scope), 
                    this.viewModel === scope.overrideContext.bindingContext ? overrideContext = scope.overrideContext : this.instruction.inheritBindingContext ? overrideContext = (0, 
                    _aureliaBinding.createOverrideContext)(this.viewModel, scope.overrideContext) : (overrideContext = (0, 
                    _aureliaBinding.createOverrideContext)(this.viewModel), overrideContext.__parentOverrideContext = scope.overrideContext), 
                    this.view.bind(this.viewModel, overrideContext)) : skipSelfSubscriber && (overrideContext = scope.overrideContext, 
                    void 0 !== scope.overrideContext.__parentOverrideContext && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements && (overrideContext = Object.assign({}, scope.overrideContext), 
                    overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext), 
                    this.viewModel.bind(scope.bindingContext, overrideContext));
                }, Controller.prototype.unbind = function unbind() {
                    if (this.isBound) {
                        var boundProperties = this.boundProperties, i = void 0, ii = void 0;
                        for (this.isBound = !1, this.scope = null, null !== this.view && this.view.unbind(), 
                        this.behavior.handlesUnbind && this.viewModel.unbind(), null !== this.elementEvents && this.elementEvents.disposeAll(), 
                        i = 0, ii = boundProperties.length; i < ii; ++i) boundProperties[i].binding.unbind();
                    }
                }, Controller.prototype.attached = function attached() {
                    this.isAttached || (this.isAttached = !0, this.behavior.handlesAttached && this.viewModel.attached(), 
                    null !== this.view && this.view.attached());
                }, Controller.prototype.detached = function detached() {
                    this.isAttached && (this.isAttached = !1, null !== this.view && this.view.detached(), 
                    this.behavior.handlesDetached && this.viewModel.detached());
                }, Controller;
            }(), BehaviorPropertyObserver = exports.BehaviorPropertyObserver = (_dec9 = (0, 
            _aureliaBinding.subscriberCollection)(), _dec9(_class21 = function() {
                function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
                    this.taskQueue = taskQueue, this.obj = obj, this.propertyName = propertyName, this.notqueued = !0, 
                    this.publishing = !1, this.selfSubscriber = selfSubscriber, this.currentValue = this.oldValue = initialValue;
                }
                return BehaviorPropertyObserver.prototype.getValue = function getValue() {
                    return this.currentValue;
                }, BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
                    var oldValue = this.currentValue;
                    oldValue !== newValue && (this.oldValue = oldValue, this.currentValue = newValue, 
                    this.publishing && this.notqueued && (this.taskQueue.flushing ? this.call() : (this.notqueued = !1, 
                    this.taskQueue.queueMicroTask(this))));
                }, BehaviorPropertyObserver.prototype.call = function call() {
                    var oldValue = this.oldValue, newValue = this.currentValue;
                    this.notqueued = !0, newValue !== oldValue && (this.selfSubscriber && this.selfSubscriber(newValue, oldValue), 
                    this.callSubscribers(newValue, oldValue), this.oldValue = newValue);
                }, BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
                    this.addSubscriber(context, callable);
                }, BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                    this.removeSubscriber(context, callable);
                }, BehaviorPropertyObserver;
            }()) || _class21), BindableProperty = exports.BindableProperty = function() {
                function BindableProperty(nameOrConfig) {
                    "string" == typeof nameOrConfig ? this.name = nameOrConfig : Object.assign(this, nameOrConfig), 
                    this.attribute = this.attribute || _hyphenate(this.name), null !== this.defaultBindingMode && void 0 !== this.defaultBindingMode || (this.defaultBindingMode = _aureliaBinding.bindingMode.oneWay), 
                    this.changeHandler = this.changeHandler || null, this.owner = null, this.descriptor = null;
                }
                return BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
                    if (behavior.properties.push(this), behavior.attributes[this.attribute] = this, 
                    this.owner = behavior, descriptor) return this.descriptor = descriptor, this._configureDescriptor(behavior, descriptor);
                }, BindableProperty.prototype._configureDescriptor = function _configureDescriptor(behavior, descriptor) {
                    var name = this.name;
                    return descriptor.configurable = !0, descriptor.enumerable = !0, "initializer" in descriptor && (this.defaultValue = descriptor.initializer, 
                    delete descriptor.initializer, delete descriptor.writable), "value" in descriptor && (this.defaultValue = descriptor.value, 
                    delete descriptor.value, delete descriptor.writable), descriptor.get = function() {
                        return getObserver(behavior, this, name).getValue();
                    }, descriptor.set = function(value) {
                        getObserver(behavior, this, name).setValue(value);
                    }, descriptor.get.getObserver = function(obj) {
                        return getObserver(behavior, obj, name);
                    }, descriptor;
                }, BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
                    var name = this.name, handlerName = void 0;
                    null === this.changeHandler && (handlerName = name + "Changed", handlerName in target.prototype && (this.changeHandler = handlerName)), 
                    null === this.descriptor && Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
                }, BindableProperty.prototype.createObserver = function createObserver(viewModel) {
                    var selfSubscriber = null, defaultValue = this.defaultValue, changeHandlerName = this.changeHandler, name = this.name, initialValue = void 0;
                    if (!this.hasOptions) {
                        if (changeHandlerName in viewModel) selfSubscriber = "propertyChanged" in viewModel ? function selfSubscriber(newValue, oldValue) {
                            viewModel[changeHandlerName](newValue, oldValue), viewModel.propertyChanged(name, newValue, oldValue);
                        } : function selfSubscriber(newValue, oldValue) {
                            return viewModel[changeHandlerName](newValue, oldValue);
                        }; else if ("propertyChanged" in viewModel) selfSubscriber = function selfSubscriber(newValue, oldValue) {
                            return viewModel.propertyChanged(name, newValue, oldValue);
                        }; else if (null !== changeHandlerName) throw new Error("Change handler " + changeHandlerName + " was specified but not declared on the class.");
                        return void 0 !== defaultValue && (initialValue = "function" == typeof defaultValue ? defaultValue.call(viewModel) : defaultValue), 
                        new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
                    }
                }, BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
                    var selfSubscriber = void 0, observer = void 0, attribute = void 0, defaultValue = this.defaultValue;
                    if (this.isDynamic) for (var key in attributes) this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties); else this.hasOptions || (observer = observerLookup[this.name], 
                    null !== attributes && (selfSubscriber = observer.selfSubscriber, attribute = attributes[this.attribute], 
                    behaviorHandlesBind && (observer.selfSubscriber = null), "string" == typeof attribute ? (viewModel[this.name] = attribute, 
                    observer.call()) : attribute ? boundProperties.push({
                        observer: observer,
                        binding: attribute.createBinding(viewModel)
                    }) : void 0 !== defaultValue && observer.call(), observer.selfSubscriber = selfSubscriber), 
                    observer.publishing = !0);
                }, BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
                    var changeHandlerName = name + "Changed", selfSubscriber = null, observer = void 0, info = void 0;
                    changeHandlerName in viewModel ? selfSubscriber = "propertyChanged" in viewModel ? function selfSubscriber(newValue, oldValue) {
                        viewModel[changeHandlerName](newValue, oldValue), viewModel.propertyChanged(name, newValue, oldValue);
                    } : function selfSubscriber(newValue, oldValue) {
                        return viewModel[changeHandlerName](newValue, oldValue);
                    } : "propertyChanged" in viewModel && (selfSubscriber = function selfSubscriber(newValue, oldValue) {
                        return viewModel.propertyChanged(name, newValue, oldValue);
                    }), observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber), 
                    Object.defineProperty(viewModel, name, {
                        configurable: !0,
                        enumerable: !0,
                        get: observer.getValue.bind(observer),
                        set: observer.setValue.bind(observer)
                    }), behaviorHandlesBind && (observer.selfSubscriber = null), "string" == typeof attribute ? (viewModel[name] = attribute, 
                    observer.call()) : attribute && (info = {
                        observer: observer,
                        binding: attribute.createBinding(viewModel)
                    }, boundProperties.push(info)), observer.publishing = !0, observer.selfSubscriber = selfSubscriber;
                }, BindableProperty;
            }(), lastProviderId = 0, HtmlBehaviorResource = exports.HtmlBehaviorResource = function() {
                function HtmlBehaviorResource() {
                    this.elementName = null, this.attributeName = null, this.attributeDefaultBindingMode = void 0, 
                    this.liftsContent = !1, this.targetShadowDOM = !1, this.shadowDOMOptions = null, 
                    this.processAttributes = doProcessAttributes, this.processContent = doProcessContent, 
                    this.usesShadowDOM = !1, this.childBindings = null, this.hasDynamicOptions = !1, 
                    this.containerless = !1, this.properties = [], this.attributes = {}, this.isInitialized = !1;
                }
                return HtmlBehaviorResource.convention = function convention(name, existing) {
                    var behavior = void 0;
                    return name.endsWith("CustomAttribute") && (behavior = existing || new HtmlBehaviorResource(), 
                    behavior.attributeName = _hyphenate(name.substring(0, name.length - 15))), name.endsWith("CustomElement") && (behavior = existing || new HtmlBehaviorResource(), 
                    behavior.elementName = _hyphenate(name.substring(0, name.length - 13))), behavior;
                }, HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
                    null === this.childBindings && (this.childBindings = []), this.childBindings.push(behavior);
                }, HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
                    var proto = target.prototype, properties = this.properties, attributeName = this.attributeName, attributeDefaultBindingMode = this.attributeDefaultBindingMode, i = void 0, ii = void 0, current = void 0;
                    if (!this.isInitialized) if (this.isInitialized = !0, target.__providerId__ = nextProviderId(), 
                    this.observerLocator = container.get(_aureliaBinding.ObserverLocator), this.taskQueue = container.get(_aureliaTaskQueue.TaskQueue), 
                    this.target = target, this.usesShadowDOM = this.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM, 
                    this.handlesCreated = "created" in proto, this.handlesBind = "bind" in proto, this.handlesUnbind = "unbind" in proto, 
                    this.handlesAttached = "attached" in proto, this.handlesDetached = "detached" in proto, 
                    this.htmlName = this.elementName || this.attributeName, null !== attributeName) if (0 === properties.length && new BindableProperty({
                        name: "value",
                        changeHandler: "valueChanged" in proto ? "valueChanged" : null,
                        attribute: attributeName,
                        defaultBindingMode: attributeDefaultBindingMode
                    }).registerWith(target, this), current = properties[0], 1 === properties.length && "value" === current.name) current.isDynamic = current.hasOptions = this.hasDynamicOptions, 
                    current.defineOn(target, this); else {
                        for (i = 0, ii = properties.length; i < ii; ++i) properties[i].defineOn(target, this);
                        current = new BindableProperty({
                            name: "value",
                            changeHandler: "valueChanged" in proto ? "valueChanged" : null,
                            attribute: attributeName,
                            defaultBindingMode: attributeDefaultBindingMode
                        }), current.hasOptions = !0, current.registerWith(target, this);
                    } else for (i = 0, ii = properties.length; i < ii; ++i) properties[i].defineOn(target, this);
                }, HtmlBehaviorResource.prototype.register = function register(registry, name) {
                    null !== this.attributeName && registry.registerAttribute(name || this.attributeName, this, this.attributeName), 
                    null !== this.elementName && registry.registerElement(name || this.elementName, this);
                }, HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
                    var _this13 = this, options = void 0;
                    return null !== this.elementName ? (viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target), 
                    options = new ViewCompileInstruction(this.targetShadowDOM, !0), viewStrategy.moduleId || (viewStrategy.moduleId = _aureliaMetadata.Origin.get(target).moduleId), 
                    viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext, target).then(function(viewFactory) {
                        return transientView && _this13.viewFactory || (_this13.viewFactory = viewFactory), 
                        viewFactory;
                    })) : Promise.resolve(this);
                }, HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
                    if (this.liftsContent) {
                        if (!instruction.viewFactory) {
                            var template = _aureliaPal.DOM.createElement("template"), fragment = _aureliaPal.DOM.createDocumentFragment(), cacheSize = node.getAttribute("view-cache"), part = node.getAttribute("part");
                            node.removeAttribute(instruction.originalAttrName), _aureliaPal.DOM.replaceNode(template, node, parentNode), 
                            fragment.appendChild(node), instruction.viewFactory = compiler.compile(fragment, resources), 
                            part && (instruction.viewFactory.part = part, node.removeAttribute("part")), cacheSize && (instruction.viewFactory.setCacheSize(cacheSize), 
                            node.removeAttribute("view-cache")), node = template;
                        }
                    } else if (null !== this.elementName) {
                        var _partReplacements2 = {};
                        if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
                            for (var currentChild = node.firstChild, contentElement = this.usesShadowDOM ? null : _aureliaPal.DOM.createElement("au-content"), nextSibling = void 0, toReplace = void 0; currentChild; ) nextSibling = currentChild.nextSibling, 
                            "TEMPLATE" === currentChild.tagName && (toReplace = currentChild.getAttribute("replace-part")) ? (_partReplacements2[toReplace] = compiler.compile(currentChild, resources), 
                            _aureliaPal.DOM.removeNode(currentChild, parentNode), instruction.partReplacements = _partReplacements2) : null !== contentElement && (3 === currentChild.nodeType && _isAllWhitespace(currentChild) ? _aureliaPal.DOM.removeNode(currentChild, parentNode) : contentElement.appendChild(currentChild)), 
                            currentChild = nextSibling;
                            null !== contentElement && contentElement.hasChildNodes() && node.appendChild(contentElement), 
                            instruction.skipContentProcessing = !1;
                        } else instruction.skipContentProcessing = !0;
                    }
                    return node;
                }, HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
                    var viewHost = void 0, au = null;
                    instruction = instruction || BehaviorInstruction.normal, element = element || null, 
                    bindings = bindings || null, null !== this.elementName && element && (this.usesShadowDOM ? (viewHost = element.attachShadow(this.shadowDOMOptions), 
                    container.registerInstance(_aureliaPal.DOM.boundary, viewHost)) : (viewHost = element, 
                    this.targetShadowDOM && container.registerInstance(_aureliaPal.DOM.boundary, viewHost))), 
                    null !== element && (element.au = au = element.au || {});
                    var viewModel = instruction.viewModel || container.get(this.target), controller = new Controller(this, instruction, viewModel, container), childBindings = this.childBindings, viewFactory = void 0;
                    if (this.liftsContent) au.controller = controller; else if (null !== this.elementName) {
                        if (viewFactory = instruction.viewFactory || this.viewFactory, container.viewModel = viewModel, 
                        viewFactory && (controller.view = viewFactory.create(container, instruction, element)), 
                        null !== element) {
                            if (au.controller = controller, controller.view) {
                                if (!this.usesShadowDOM && (1 === element.childNodes.length || element.contentElement)) {
                                    var contentElement = element.childNodes[0] || element.contentElement;
                                    controller.view.contentView = {
                                        fragment: contentElement
                                    }, contentElement.parentNode && _aureliaPal.DOM.removeNode(contentElement);
                                }
                                if (instruction.anchorIsContainer) {
                                    if (null !== childBindings) for (var i = 0, ii = childBindings.length; i < ii; ++i) controller.view.addBinding(childBindings[i].create(element, viewModel, controller));
                                    controller.view.appendNodesTo(viewHost);
                                } else controller.view.insertNodesBefore(viewHost);
                            } else if (null !== childBindings) for (var _i2 = 0, _ii2 = childBindings.length; _i2 < _ii2; ++_i2) bindings.push(childBindings[_i2].create(element, viewModel, controller));
                        } else if (controller.view) {
                            if (controller.view.controller = controller, null !== childBindings) for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) controller.view.addBinding(childBindings[_i3].create(instruction.host, viewModel, controller));
                        } else if (null !== childBindings) for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) bindings.push(childBindings[_i4].create(instruction.host, viewModel, controller));
                    } else if (null !== childBindings) for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) bindings.push(childBindings[_i5].create(element, viewModel, controller));
                    return null !== au && (au[this.htmlName] = controller), instruction.initiatedByBehavior && viewFactory && controller.view.created(), 
                    controller;
                }, HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
                    var properties = void 0, i = void 0, ii = void 0, observer = void 0;
                    if (!("__propertiesDefined__" in lookup)) for (lookup.__propertiesDefined__ = !0, 
                    properties = this.properties, i = 0, ii = properties.length; i < ii; ++i) observer = properties[i].createObserver(instance), 
                    void 0 !== observer && (lookup[observer.propertyName] = observer);
                }, HtmlBehaviorResource;
            }(), ChildObserver = function() {
                function ChildObserver(config) {
                    this.name = config.name, this.changeHandler = config.changeHandler || this.name + "Changed", 
                    this.selector = config.selector, this.all = config.all;
                }
                return ChildObserver.prototype.create = function create(viewHost, viewModel, controller) {
                    return new ChildObserverBinder(this.selector, viewHost, this.name, viewModel, controller, this.changeHandler, this.all);
                }, ChildObserver;
            }(), noMutations = [], ChildObserverBinder = function() {
                function ChildObserverBinder(selector, viewHost, property, viewModel, controller, changeHandler, all) {
                    this.selector = selector, this.viewHost = viewHost, this.property = property, this.viewModel = viewModel, 
                    this.controller = controller, this.changeHandler = changeHandler in viewModel ? changeHandler : null, 
                    this.usesShadowDOM = controller.behavior.usesShadowDOM, this.all = all, !this.usesShadowDOM && controller.view && controller.view.contentView ? this.contentView = controller.view.contentView : this.contentView = null;
                }
                return ChildObserverBinder.prototype.matches = function matches(element) {
                    if (element.matches(this.selector)) {
                        if (null === this.contentView) return !0;
                        var contentView = this.contentView, assignedSlot = element.auAssignedSlot;
                        if (assignedSlot && assignedSlot.projectFromAnchors) {
                            for (var anchors = assignedSlot.projectFromAnchors, i = 0, ii = anchors.length; i < ii; ++i) if (anchors[i].auOwnerView === contentView) return !0;
                            return !1;
                        }
                        return element.auOwnerView === contentView;
                    }
                    return !1;
                }, ChildObserverBinder.prototype.bind = function bind(source) {
                    var viewHost = this.viewHost, viewModel = this.viewModel, observer = viewHost.__childObserver__;
                    if (!observer) {
                        observer = viewHost.__childObserver__ = _aureliaPal.DOM.createMutationObserver(onChildChange);
                        var options = {
                            childList: !0,
                            subtree: !this.usesShadowDOM
                        };
                        observer.observe(viewHost, options), observer.binders = [];
                    }
                    if (observer.binders.push(this), this.usesShadowDOM) {
                        var current = viewHost.firstElementChild;
                        if (this.all) {
                            var items = viewModel[this.property];
                            for (items ? items.length = 0 : items = viewModel[this.property] = []; current; ) this.matches(current) && items.push(current.au && current.au.controller ? current.au.controller.viewModel : current), 
                            current = current.nextElementSibling;
                            null !== this.changeHandler && this.viewModel[this.changeHandler](noMutations);
                        } else for (;current; ) {
                            if (this.matches(current)) {
                                var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
                                this.viewModel[this.property] = value, null !== this.changeHandler && this.viewModel[this.changeHandler](value);
                                break;
                            }
                            current = current.nextElementSibling;
                        }
                    }
                }, ChildObserverBinder.prototype.onRemove = function onRemove(element) {
                    if (this.matches(element)) {
                        var value = element.au && element.au.controller ? element.au.controller.viewModel : element;
                        if (this.all) {
                            var items = this.viewModel[this.property] || (this.viewModel[this.property] = []), index = items.indexOf(value);
                            return index !== -1 && items.splice(index, 1), !0;
                        }
                        return !1;
                    }
                    return !1;
                }, ChildObserverBinder.prototype.onAdd = function onAdd(element) {
                    if (this.matches(element)) {
                        var value = element.au && element.au.controller ? element.au.controller.viewModel : element;
                        if (this.all) {
                            for (var items = this.viewModel[this.property] || (this.viewModel[this.property] = []), index = 0, prev = element.previousElementSibling; prev; ) this.matches(prev) && index++, 
                            prev = prev.previousElementSibling;
                            return items.splice(index, 0, value), !0;
                        }
                        this.viewModel[this.property] = value, null !== this.changeHandler && this.viewModel[this.changeHandler](value);
                    }
                    return !1;
                }, ChildObserverBinder.prototype.unbind = function unbind() {
                    this.viewHost.__childObserver__ && (this.viewHost.__childObserver__.disconnect(), 
                    this.viewHost.__childObserver__ = null);
                }, ChildObserverBinder;
            }(), CompositionEngine = exports.CompositionEngine = (_dec10 = (0, _aureliaDependencyInjection.inject)(ViewEngine, ViewLocator), 
            _dec10(_class22 = function() {
                function CompositionEngine(viewEngine, viewLocator) {
                    this.viewEngine = viewEngine, this.viewLocator = viewLocator;
                }
                return CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
                    function swap(controller) {
                        return Promise.resolve(context.viewSlot.removeAll(!0)).then(function() {
                            return context.currentController && context.currentController.unbind(), context.viewSlot.add(controller.view), 
                            context.compositionTransactionNotifier && context.compositionTransactionNotifier.done(), 
                            controller;
                        });
                    }
                    return this.createController(context).then(function(controller) {
                        return controller.automate(context.overrideContext, context.owningView), context.compositionTransactionOwnershipToken ? context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function() {
                            return swap(controller);
                        }) : swap(controller);
                    });
                }, CompositionEngine.prototype.createController = function createController(context) {
                    var _this14 = this, childContainer = void 0, viewModel = void 0, viewModelResource = void 0, m = void 0;
                    return this.ensureViewModel(context).then(tryActivateViewModel).then(function() {
                        childContainer = context.childContainer, viewModel = context.viewModel, viewModelResource = context.viewModelResource, 
                        m = viewModelResource.metadata;
                        var viewStrategy = _this14.viewLocator.getViewStrategy(context.view || viewModel);
                        return context.viewResources && viewStrategy.makeRelativeTo(context.viewResources.viewUrl), 
                        m.load(childContainer, viewModelResource.value, null, viewStrategy, !0);
                    }).then(function(viewFactory) {
                        return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
                    });
                }, CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
                    var childContainer = context.childContainer = context.childContainer || context.container.createChild();
                    if ("string" == typeof context.viewModel) return context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel, 
                    this.viewEngine.importViewModelResource(context.viewModel).then(function(viewModelResource) {
                        return childContainer.autoRegister(viewModelResource.value), context.host && childContainer.registerInstance(_aureliaPal.DOM.Element, context.host), 
                        context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value), 
                        context.viewModelResource = viewModelResource, context;
                    });
                    var m = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, context.viewModel.constructor);
                    return m.elementName = m.elementName || "dynamic-element", m.initialize(context.container || childContainer, context.viewModel.constructor), 
                    context.viewModelResource = {
                        metadata: m,
                        value: context.viewModel.constructor
                    }, childContainer.viewModel = context.viewModel, Promise.resolve(context);
                }, CompositionEngine.prototype.compose = function compose(context) {
                    context.childContainer = context.childContainer || context.container.createChild(), 
                    context.view = this.viewLocator.getViewStrategy(context.view);
                    var transaction = context.childContainer.get(CompositionTransaction), compositionTransactionOwnershipToken = transaction.tryCapture();
                    return compositionTransactionOwnershipToken ? context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken : context.compositionTransactionNotifier = transaction.enlist(), 
                    context.viewModel ? this._createControllerAndSwap(context) : context.view ? (context.viewResources && context.view.makeRelativeTo(context.viewResources.viewUrl), 
                    context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function(viewFactory) {
                        var result = viewFactory.create(context.childContainer);
                        result.bind(context.bindingContext, context.overrideContext);
                        var work = function work() {
                            return Promise.resolve(context.viewSlot.removeAll(!0)).then(function() {
                                return context.viewSlot.add(result), context.compositionTransactionNotifier && context.compositionTransactionNotifier.done(), 
                                result;
                            });
                        };
                        return context.compositionTransactionOwnershipToken ? context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(work) : work();
                    })) : context.viewSlot ? (context.viewSlot.removeAll(), context.compositionTransactionNotifier && context.compositionTransactionNotifier.done(), 
                    Promise.resolve(null)) : Promise.resolve(null);
                }, CompositionEngine;
            }()) || _class22), ElementConfigResource = exports.ElementConfigResource = function() {
                function ElementConfigResource() {}
                return ElementConfigResource.prototype.initialize = function initialize(container, target) {}, 
                ElementConfigResource.prototype.register = function register(registry, name) {}, 
                ElementConfigResource.prototype.load = function load(container, target) {
                    var config = new target(), eventManager = container.get(_aureliaBinding.EventManager);
                    eventManager.registerElementConfig(config);
                }, ElementConfigResource;
            }(), defaultShadowDOMOptions = {
                mode: "open"
            }, TemplatingEngine = exports.TemplatingEngine = (_dec11 = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.Container, ModuleAnalyzer, ViewCompiler, CompositionEngine), 
            _dec11(_class23 = function() {
                function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
                    this._container = container, this._moduleAnalyzer = moduleAnalyzer, this._viewCompiler = viewCompiler, 
                    this._compositionEngine = compositionEngine, container.registerInstance(Animator, Animator.instance = new Animator());
                }
                return TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
                    this._container.unregister(Animator), this._container.registerInstance(Animator, Animator.instance = animator);
                }, TemplatingEngine.prototype.compose = function compose(context) {
                    return this._compositionEngine.compose(context);
                }, TemplatingEngine.prototype.enhance = function enhance(instruction) {
                    instruction instanceof _aureliaPal.DOM.Element && (instruction = {
                        element: instruction
                    });
                    var compilerInstructions = {}, resources = instruction.resources || this._container.get(ViewResources);
                    this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, "root", !0);
                    var factory = new ViewFactory(instruction.element, compilerInstructions, resources), container = instruction.container || this._container.createChild(), view = factory.create(container, BehaviorInstruction.enhance());
                    return view.bind(instruction.bindingContext || {}, instruction.overrideContext), 
                    view;
                }, TemplatingEngine;
            }()) || _class23);
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    10: /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(setImmediate, clearImmediate) {
            function Timeout(id, clearFn) {
                this._id = id, this._clearFn = clearFn;
            }
            var nextTick = __webpack_require__(14).nextTick, apply = Function.prototype.apply, slice = Array.prototype.slice, immediateIds = {}, nextImmediateId = 0;
            // DOM APIs, for completeness
            exports.setTimeout = function() {
                return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
            }, exports.setInterval = function() {
                return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
            }, exports.clearTimeout = exports.clearInterval = function(timeout) {
                timeout.close();
            }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
                this._clearFn.call(window, this._id);
            }, // Does not start the time, just sets up the members needed.
            exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs;
            }, exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = -1;
            }, exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);
                var msecs = item._idleTimeout;
                msecs >= 0 && (item._idleTimeoutId = setTimeout(function onTimeout() {
                    item._onTimeout && item._onTimeout();
                }, msecs));
            }, // That's not how node.js implements it but the exposed api is the same.
            exports.setImmediate = "function" == typeof setImmediate ? setImmediate : function(fn) {
                var id = nextImmediateId++, args = !(arguments.length < 2) && slice.call(arguments, 1);
                return immediateIds[id] = !0, nextTick(function onNextTick() {
                    immediateIds[id] && (// fn.call() is faster so we optimize for the common use-case
                    // @see http://jsperf.com/call-apply-segu
                    args ? fn.apply(null, args) : fn.call(null), // Prevent ids from leaking
                    exports.clearImmediate(id));
                }), id;
            }, exports.clearImmediate = "function" == typeof clearImmediate ? clearImmediate : function(id) {
                delete immediateIds[id];
            };
        }).call(exports, __webpack_require__(10).setImmediate, __webpack_require__(10).clearImmediate);
    },
    /***/
    11: /***/
    function(module, exports) {
        var g;
        // This works in non-strict mode
        g = function() {
            return this;
        }();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            "object" == typeof window && (g = window);
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
        module.exports = g;
    },
    /***/
    12: /***/
    function(module, exports) {
        "use strict";
        function mi(name) {
            throw new Error("History must implement " + name + "().");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var History = exports.History = function() {
            function History() {}
            return History.prototype.activate = function activate(options) {
                mi("activate");
            }, History.prototype.deactivate = function deactivate() {
                mi("deactivate");
            }, History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
                mi("getAbsoluteRoot");
            }, History.prototype.navigate = function navigate(fragment, options) {
                mi("navigate");
            }, History.prototype.navigateBack = function navigateBack() {
                mi("navigateBack");
            }, History.prototype.setTitle = function setTitle(title) {
                mi("setTitle");
            }, History;
        }();
    },
    /***/
    13: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function injectAureliaHideStyleAtHead() {
            _aureliaPal.DOM.injectStyles(aureliaHideClass);
        }
        function injectAureliaHideStyleAtBoundary(domBoundary) {
            _aureliaPal.FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle && (domBoundary.hasAureliaHideStyle = !0, 
            _aureliaPal.DOM.injectStyles(aureliaHideClass, domBoundary));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.aureliaHideClassName = void 0, exports.injectAureliaHideStyleAtHead = injectAureliaHideStyleAtHead, 
        exports.injectAureliaHideStyleAtBoundary = injectAureliaHideStyleAtBoundary;
        var _aureliaPal = __webpack_require__(0), aureliaHideClassName = exports.aureliaHideClassName = "aurelia-hide", aureliaHideClass = "." + aureliaHideClassName + " { display:none !important; }";
    },
    /***/
    14: /***/
    function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
            return setTimeout(fun, 0);
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
            return clearTimeout(marker);
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
            clearTimeout(marker);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        // shim for using process in browser
        var process = module.exports = {}, cachedSetTimeout, cachedClearTimeout;
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var queue = [], draining = !1, currentQueue, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", // empty string to avoid regexp issues
        process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
        process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    },
    /***/
    15: /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var AbstractRepeater = exports.AbstractRepeater = function() {
            function AbstractRepeater(options) {
                Object.assign(this, {
                    local: "items",
                    viewsRequireLifecycle: !0
                }, options);
            }
            return AbstractRepeater.prototype.viewCount = function viewCount() {
                throw new Error("subclass must implement `viewCount`");
            }, AbstractRepeater.prototype.views = function views() {
                throw new Error("subclass must implement `views`");
            }, AbstractRepeater.prototype.view = function view(index) {
                throw new Error("subclass must implement `view`");
            }, AbstractRepeater.prototype.matcher = function matcher() {
                throw new Error("subclass must implement `matcher`");
            }, AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
                throw new Error("subclass must implement `addView`");
            }, AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
                throw new Error("subclass must implement `insertView`");
            }, AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
                throw new Error("subclass must implement `moveView`");
            }, AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
                throw new Error("subclass must implement `removeAllViews`");
            }, AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
                throw new Error("subclass must implement `removeView`");
            }, AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
                throw new Error("subclass must implement `removeView`");
            }, AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
                throw new Error("subclass must implement `updateBindings`");
            }, AbstractRepeater;
        }();
    },
    /***/
    16: /***/
    function(module, exports) {
        "use strict";
        function behaviorRequiresLifecycle(instruction) {
            var t = instruction.type, name = null !== t.elementName ? t.elementName : t.attributeName;
            return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
        }
        function targetRequiresLifecycle(instruction) {
            var behaviors = instruction.behaviorInstructions;
            if (behaviors) for (var i = behaviors.length; i--; ) if (behaviorRequiresLifecycle(behaviors[i])) return !0;
            return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
        }
        function viewsRequireLifecycle(viewFactory) {
            if ("_viewsRequireLifecycle" in viewFactory) return viewFactory._viewsRequireLifecycle;
            if (viewFactory._viewsRequireLifecycle = !1, viewFactory.viewFactory) return viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory), 
            viewFactory._viewsRequireLifecycle;
            if (viewFactory.template.querySelector(".au-animate")) return viewFactory._viewsRequireLifecycle = !0, 
            !0;
            for (var id in viewFactory.instructions) if (targetRequiresLifecycle(viewFactory.instructions[id])) return viewFactory._viewsRequireLifecycle = !0, 
            !0;
            return viewFactory._viewsRequireLifecycle = !1, !1;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.viewsRequireLifecycle = viewsRequireLifecycle;
        var lifecycleOptionalBehaviors = exports.lifecycleOptionalBehaviors = [ "focus", "if", "repeat", "show", "with" ];
    },
    /***/
    17: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ArrayRepeatStrategy = void 0;
            var _repeatUtilities = __webpack_require__(8), _aureliaBinding = __webpack_require__(2), ArrayRepeatStrategy = exports.ArrayRepeatStrategy = function() {
                function ArrayRepeatStrategy() {}
                return ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
                    return observerLocator.getArrayObserver(items);
                }, ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
                    var _this = this, itemsLength = items.length;
                    if (!items || 0 === itemsLength) return void repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                    var children = repeat.views(), viewsLength = children.length;
                    return 0 === viewsLength ? void this._standardProcessInstanceChanged(repeat, items) : void (repeat.viewsRequireLifecycle ? !function() {
                        for (var childrenSnapshot = children.slice(0), itemNameInBindingContext = repeat.local, matcher = repeat.matcher(), itemsPreviouslyInViews = [], viewsToRemove = [], index = 0; index < viewsLength; index++) {
                            var view = childrenSnapshot[index], oldItem = view.bindingContext[itemNameInBindingContext];
                            (0, _repeatUtilities.indexOf)(items, oldItem, matcher) === -1 ? viewsToRemove.push(view) : itemsPreviouslyInViews.push(oldItem);
                        }
                        var updateViews = void 0, removePromise = void 0;
                        itemsPreviouslyInViews.length > 0 ? (removePromise = repeat.removeViews(viewsToRemove, !0, !repeat.viewsRequireLifecycle), 
                        updateViews = function updateViews() {
                            for (var _index = 0; _index < itemsLength; _index++) {
                                var item = items[_index], indexOfView = (0, _repeatUtilities.indexOf)(itemsPreviouslyInViews, item, matcher, _index), _view = void 0;
                                if (indexOfView === -1) {
                                    var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_index], _index, itemsLength);
                                    repeat.insertView(_index, overrideContext.bindingContext, overrideContext), itemsPreviouslyInViews.splice(_index, 0, void 0);
                                } else indexOfView === _index ? (_view = children[indexOfView], itemsPreviouslyInViews[indexOfView] = void 0) : (_view = children[indexOfView], 
                                repeat.moveView(indexOfView, _index), itemsPreviouslyInViews.splice(indexOfView, 1), 
                                itemsPreviouslyInViews.splice(_index, 0, void 0));
                                _view && (0, _repeatUtilities.updateOverrideContext)(_view.overrideContext, _index, itemsLength);
                            }
                            _this._inPlaceProcessItems(repeat, items);
                        }) : (removePromise = repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle), 
                        updateViews = function updateViews() {
                            return _this._standardProcessInstanceChanged(repeat, items);
                        }), removePromise instanceof Promise ? removePromise.then(updateViews) : updateViews();
                    }() : this._inPlaceProcessItems(repeat, items));
                }, ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
                    for (var i = 0, ii = items.length; i < ii; i++) {
                        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[i], i, ii);
                        repeat.addView(overrideContext.bindingContext, overrideContext);
                    }
                }, ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
                    for (var itemsLength = items.length, viewsLength = repeat.viewCount(); viewsLength > itemsLength; ) viewsLength--, 
                    repeat.removeView(viewsLength, !0, !repeat.viewsRequireLifecycle);
                    for (var local = repeat.local, i = 0; i < viewsLength; i++) {
                        var view = repeat.view(i), last = i === itemsLength - 1, middle = 0 !== i && !last;
                        view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last || (view.bindingContext[local] = items[i], 
                        view.overrideContext.$middle = middle, view.overrideContext.$last = last, repeat.updateBindings(view));
                    }
                    for (var _i = viewsLength; _i < itemsLength; _i++) {
                        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_i], _i, itemsLength);
                        repeat.addView(overrideContext.bindingContext, overrideContext);
                    }
                }, ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
                    var _this2 = this;
                    if (repeat.__queuedSplices) {
                        for (var i = 0, ii = splices.length; i < ii; ++i) {
                            var _splices$i = splices[i], index = _splices$i.index, removed = _splices$i.removed, addedCount = _splices$i.addedCount;
                            (0, _aureliaBinding.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
                        }
                        return void (repeat.__array = array.slice(0));
                    }
                    var maybePromise = this._runSplices(repeat, array.slice(0), splices);
                    maybePromise instanceof Promise && !function() {
                        var queuedSplices = repeat.__queuedSplices = [], runQueuedSplices = function runQueuedSplices() {
                            if (!queuedSplices.length) return repeat.__queuedSplices = void 0, void (repeat.__array = void 0);
                            var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
                            queuedSplices = repeat.__queuedSplices = [], nextPromise.then(runQueuedSplices);
                        };
                        maybePromise.then(runQueuedSplices);
                    }();
                }, ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
                    for (var _this3 = this, removeDelta = 0, rmPromises = [], i = 0, ii = splices.length; i < ii; ++i) {
                        for (var splice = splices[i], removed = splice.removed, j = 0, jj = removed.length; j < jj; ++j) {
                            var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, !0);
                            viewOrPromise instanceof Promise && rmPromises.push(viewOrPromise);
                        }
                        removeDelta -= splice.addedCount;
                    }
                    if (rmPromises.length > 0) return Promise.all(rmPromises).then(function() {
                        var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
                        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
                    });
                    var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
                    (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
                }, ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
                    for (var spliceIndex = void 0, spliceIndexLow = void 0, arrayLength = array.length, i = 0, ii = splices.length; i < ii; ++i) {
                        var splice = splices[i], addIndex = spliceIndex = splice.index, end = splice.index + splice.addedCount;
                        for (("undefined" == typeof spliceIndexLow || null === spliceIndexLow || spliceIndexLow > splice.index) && (spliceIndexLow = spliceIndex); addIndex < end; ++addIndex) {
                            var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, array[addIndex], addIndex, arrayLength);
                            repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
                        }
                    }
                    return spliceIndexLow;
                }, ArrayRepeatStrategy;
            }();
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    18: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.BindingSignaler = void 0;
        var _aureliaBinding = __webpack_require__(2), BindingSignaler = exports.BindingSignaler = function() {
            function BindingSignaler() {
                this.signals = {};
            }
            return BindingSignaler.prototype.signal = function signal(name) {
                var bindings = this.signals[name];
                if (bindings) for (var i = bindings.length; i--; ) bindings[i].call(_aureliaBinding.sourceContext);
            }, BindingSignaler;
        }();
    },
    /***/
    19: /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, HTMLSanitizer = exports.HTMLSanitizer = function() {
            function HTMLSanitizer() {}
            return HTMLSanitizer.prototype.sanitize = function sanitize(input) {
                return input.replace(SCRIPT_REGEX, "");
            }, HTMLSanitizer;
        }();
    },
    /***/
    2: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj;
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function camelCase(name) {
            if (name in map) return map[name];
            var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function(_, x) {
                return x.toUpperCase();
            });
            return map[name] = result, result;
        }
        function createOverrideContext(bindingContext, parentOverrideContext) {
            return {
                bindingContext: bindingContext,
                parentOverrideContext: parentOverrideContext || null
            };
        }
        function getContextFor(name, scope, ancestor) {
            var oc = scope.overrideContext;
            if (ancestor) {
                for (;ancestor && oc; ) ancestor--, oc = oc.parentOverrideContext;
                if (ancestor || !oc) return;
                return name in oc ? oc : oc.bindingContext;
            }
            for (;oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext); ) oc = oc.parentOverrideContext;
            return oc ? name in oc ? oc : oc.bindingContext : scope.bindingContext || scope.overrideContext;
        }
        function createScopeForTest(bindingContext, parentBindingContext) {
            return parentBindingContext ? {
                bindingContext: bindingContext,
                overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
            } : {
                bindingContext: bindingContext,
                overrideContext: createOverrideContext(bindingContext)
            };
        }
        function addObserver(observer) {
            for (var observerSlots = void 0 === this._observerSlots ? 0 : this._observerSlots, i = observerSlots; i-- && this[slotNames[i]] !== observer; ) ;
            if (i === -1) {
                for (i = 0; this[slotNames[i]]; ) i++;
                this[slotNames[i]] = observer, observer.subscribe(sourceContext, this), i === observerSlots && (this._observerSlots = i + 1);
            }
            void 0 === this._version && (this._version = 0), this[versionSlotNames[i]] = this._version;
        }
        function observeProperty(obj, propertyName) {
            var observer = this.observerLocator.getObserver(obj, propertyName);
            addObserver.call(this, observer);
        }
        function observeArray(array) {
            var observer = this.observerLocator.getArrayObserver(array);
            addObserver.call(this, observer);
        }
        function unobserve(all) {
            for (var i = this._observerSlots; i--; ) if (all || this[versionSlotNames[i]] !== this._version) {
                var observer = this[slotNames[i]];
                this[slotNames[i]] = null, observer && observer.unsubscribe(sourceContext, this);
            }
        }
        function connectable() {
            return function(target) {
                target.prototype.observeProperty = observeProperty, target.prototype.observeArray = observeArray, 
                target.prototype.unobserve = unobserve, target.prototype.addObserver = addObserver;
            };
        }
        function flush(animationFrameStart) {
            for (var i = 0, keys = bindings.keys(), item = void 0; (item = keys.next()) && !item.done; ) {
                var binding = item.value;
                if (bindings.delete(binding), binding.connect(!0), i++, i % 100 === 0 && _aureliaPal.PLATFORM.performance.now() - animationFrameStart > frameBudget) break;
            }
            bindings.size ? _aureliaPal.PLATFORM.requestAnimationFrame(flush) : (isFlushRequested = !1, 
            immediate = 0);
        }
        function enqueueBindingConnect(binding) {
            immediate < minimumImmediate ? (immediate++, binding.connect(!1)) : bindings.set(binding), 
            isFlushRequested || (isFlushRequested = !0, _aureliaPal.PLATFORM.requestAnimationFrame(flush));
        }
        function addSubscriber(context, callable) {
            return !this.hasSubscriber(context, callable) && (this._context0 ? this._context1 ? this._context2 ? this._contextsRest ? (this._contextsRest.push(context), 
            this._callablesRest.push(callable), !0) : (this._contextsRest = [ context ], this._callablesRest = [ callable ], 
            !0) : (this._context2 = context, this._callable2 = callable, !0) : (this._context1 = context, 
            this._callable1 = callable, !0) : (this._context0 = context, this._callable0 = callable, 
            !0));
        }
        function removeSubscriber(context, callable) {
            if (this._context0 === context && this._callable0 === callable) return this._context0 = null, 
            this._callable0 = null, !0;
            if (this._context1 === context && this._callable1 === callable) return this._context1 = null, 
            this._callable1 = null, !0;
            if (this._context2 === context && this._callable2 === callable) return this._context2 = null, 
            this._callable2 = null, !0;
            var rest = this._contextsRest, index = void 0;
            return !(!rest || !rest.length || (index = rest.indexOf(context)) === -1 || this._callablesRest[index] !== callable) && (rest.splice(index, 1), 
            this._callablesRest.splice(index, 1), !0);
        }
        function callSubscribers(newValue, oldValue) {
            var context0 = this._context0, callable0 = this._callable0, context1 = this._context1, callable1 = this._callable1, context2 = this._context2, callable2 = this._callable2, length = this._contextsRest ? this._contextsRest.length : 0, contextsRest = void 0, callablesRest = void 0, poolIndex = void 0, i = void 0;
            if (length) {
                for (poolIndex = poolUtilization.length; poolIndex-- && poolUtilization[poolIndex]; ) ;
                for (poolIndex < 0 ? (poolIndex = poolUtilization.length, contextsRest = [], callablesRest = [], 
                poolUtilization.push(!0), arrayPool1.push(contextsRest), arrayPool2.push(callablesRest)) : (poolUtilization[poolIndex] = !0, 
                contextsRest = arrayPool1[poolIndex], callablesRest = arrayPool2[poolIndex]), i = length; i--; ) contextsRest[i] = this._contextsRest[i], 
                callablesRest[i] = this._callablesRest[i];
            }
            if (context0 && (callable0 ? callable0.call(context0, newValue, oldValue) : context0(newValue, oldValue)), 
            context1 && (callable1 ? callable1.call(context1, newValue, oldValue) : context1(newValue, oldValue)), 
            context2 && (callable2 ? callable2.call(context2, newValue, oldValue) : context2(newValue, oldValue)), 
            length) {
                for (i = 0; i < length; i++) {
                    var callable = callablesRest[i], context = contextsRest[i];
                    callable ? callable.call(context, newValue, oldValue) : context(newValue, oldValue), 
                    contextsRest[i] = null, callablesRest[i] = null;
                }
                poolUtilization[poolIndex] = !1;
            }
        }
        function hasSubscribers() {
            return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
        }
        function hasSubscriber(context, callable) {
            var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
            if (has) return !0;
            var index = void 0, contexts = this._contextsRest;
            if (!contexts || 0 === (index = contexts.length)) return !1;
            for (var callables = this._callablesRest; index--; ) if (contexts[index] === context && callables[index] === callable) return !0;
            return !1;
        }
        function subscriberCollection() {
            return function(target) {
                target.prototype.addSubscriber = addSubscriber, target.prototype.removeSubscriber = removeSubscriber, 
                target.prototype.callSubscribers = callSubscribers, target.prototype.hasSubscribers = hasSubscribers, 
                target.prototype.hasSubscriber = hasSubscriber;
            };
        }
        function isIndex(s) {
            return +s === s >>> 0;
        }
        function toNumber(s) {
            return +s;
        }
        function newSplice(index, removed, addedCount) {
            return {
                index: index,
                removed: removed,
                addedCount: addedCount
            };
        }
        function ArraySplice() {}
        function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
            return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
        }
        function intersect(start1, end1, start2, end2) {
            return end1 < start2 || end2 < start1 ? -1 : end1 === start2 || end2 === start1 ? 0 : start1 < start2 ? end1 < end2 ? end1 - start2 : end2 - start2 : end2 < end1 ? end2 - start1 : end1 - start1;
        }
        function mergeSplice(splices, index, removed, addedCount) {
            for (var splice = newSplice(index, removed, addedCount), inserted = !1, insertionOffset = 0, _i5 = 0; _i5 < splices.length; _i5++) {
                var current = splices[_i5];
                if (current.index += insertionOffset, !inserted) {
                    var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
                    if (intersectCount >= 0) {
                        splices.splice(_i5, 1), _i5--, insertionOffset -= current.addedCount - current.removed.length, 
                        splice.addedCount += current.addedCount - intersectCount;
                        var deleteCount = splice.removed.length + current.removed.length - intersectCount;
                        if (splice.addedCount || deleteCount) {
                            var currentRemoved = current.removed;
                            if (splice.index < current.index) {
                                var prepend = splice.removed.slice(0, current.index - splice.index);
                                Array.prototype.push.apply(prepend, currentRemoved), currentRemoved = prepend;
                            }
                            if (splice.index + splice.removed.length > current.index + current.addedCount) {
                                var append = splice.removed.slice(current.index + current.addedCount - splice.index);
                                Array.prototype.push.apply(currentRemoved, append);
                            }
                            splice.removed = currentRemoved, current.index < splice.index && (splice.index = current.index);
                        } else inserted = !0;
                    } else if (splice.index < current.index) {
                        inserted = !0, splices.splice(_i5, 0, splice), _i5++;
                        var offset = splice.addedCount - splice.removed.length;
                        current.index += offset, insertionOffset += offset;
                    }
                }
            }
            inserted || splices.push(splice);
        }
        function createInitialSplices(array, changeRecords) {
            for (var splices = [], _i6 = 0; _i6 < changeRecords.length; _i6++) {
                var record = changeRecords[_i6];
                switch (record.type) {
                  case "splice":
                    mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
                    break;

                  case "add":
                  case "update":
                  case "delete":
                    if (!isIndex(record.name)) continue;
                    var index = toNumber(record.name);
                    if (index < 0) continue;
                    mergeSplice(splices, index, [ record.oldValue ], "delete" === record.type ? 0 : 1);
                    break;

                  default:
                    console.error("Unexpected record type: " + JSON.stringify(record));
                }
            }
            return splices;
        }
        function projectArraySplices(array, changeRecords) {
            var splices = [];
            return createInitialSplices(array, changeRecords).forEach(function(splice) {
                return 1 === splice.addedCount && 1 === splice.removed.length ? void (splice.removed[0] !== array[splice.index] && splices.push(splice)) : void (splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length)));
            }), splices;
        }
        function newRecord(type, object, key, oldValue) {
            return {
                type: type,
                object: object,
                key: key,
                oldValue: oldValue
            };
        }
        function getChangeRecords(map) {
            for (var entries = new Array(map.size), keys = map.keys(), i = 0, item = void 0; (item = keys.next()) && !item.done; ) entries[i] = newRecord("added", map, item.value), 
            i++;
            return entries;
        }
        function _getArrayObserver(taskQueue, array) {
            return ModifyArrayObserver.for(taskQueue, array);
        }
        function evalList(scope, list, lookupFunctions) {
            for (var length = list.length, result = [], _i14 = 0; _i14 < length; _i14++) result[_i14] = list[_i14].evaluate(scope, lookupFunctions);
            return result;
        }
        function autoConvertAdd(a, b) {
            return null !== a && null !== b ? "string" == typeof a && "string" != typeof b ? a + b.toString() : "string" != typeof a && "string" == typeof b ? a.toString() + b : a + b : null !== a ? a : null !== b ? b : 0;
        }
        function getFunction(obj, name, mustExist) {
            var func = null === obj || void 0 === obj ? null : obj[name];
            if ("function" == typeof func) return func;
            if (!mustExist && (null === func || void 0 === func)) return null;
            throw new Error(name + " is not a function");
        }
        function getKeyed(obj, key) {
            if (Array.isArray(obj)) return obj[parseInt(key, 10)];
            if (obj) return obj[key];
            if (null !== obj && void 0 !== obj) return obj[key];
        }
        function setKeyed(obj, key, value) {
            if (Array.isArray(obj)) {
                var index = parseInt(key, 10);
                obj.length <= index && (obj.length = index + 1), obj[index] = value;
            } else obj[key] = value;
            return value;
        }
        function cloneExpression(expression) {
            var visitor = new ExpressionCloner();
            return expression.accept(visitor);
        }
        function isWhitespace(code) {
            return code >= $TAB && code <= $SPACE || code === $NBSP;
        }
        function isIdentifierStart(code) {
            return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
        }
        function isIdentifierPart(code) {
            return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
        }
        function isDigit(code) {
            return $0 <= code && code <= $9;
        }
        function isExponentStart(code) {
            return code === $e || code === $E;
        }
        function isExponentSign(code) {
            return code === $MINUS || code === $PLUS;
        }
        function unescape(code) {
            switch (code) {
              case $n:
                return $LF;

              case $f:
                return $FF;

              case $r:
                return $CR;

              case $t:
                return $TAB;

              case $v:
                return $VTAB;

              default:
                return code;
            }
        }
        function assert(condition, message) {
            if (!condition) throw message || "Assertion failed";
        }
        function _getMapObserver(taskQueue, map) {
            return ModifyMapObserver.for(taskQueue, map);
        }
        function findOriginalEventTarget(event) {
            return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
        }
        function interceptStopPropagation(event) {
            event.standardStopPropagation = event.stopPropagation, event.stopPropagation = function() {
                this.propagationStopped = !0, this.standardStopPropagation();
            };
        }
        function handleDelegatedEvent(event) {
            var interceptInstalled = !1;
            event.propagationStopped = !1;
            for (var target = findOriginalEventTarget(event); target && !event.propagationStopped; ) {
                if (target.delegatedCallbacks) {
                    var callback = target.delegatedCallbacks[event.type];
                    callback && (interceptInstalled || (interceptStopPropagation(event), interceptInstalled = !0), 
                    callback(event));
                }
                target = target.parentNode;
            }
        }
        function hasDeclaredDependencies(descriptor) {
            return !!(descriptor && descriptor.get && descriptor.get.dependencies);
        }
        function declarePropertyDependencies(ctor, propertyName, dependencies) {
            var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
            descriptor.get.dependencies = dependencies;
        }
        function computedFrom() {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) rest[_key] = arguments[_key];
            return function(target, key, descriptor) {
                return descriptor.get.dependencies = rest, descriptor;
            };
        }
        function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
            var dependencies = descriptor.get.dependencies;
            if (!(dependencies instanceof ComputedExpression)) {
                for (var _i24 = dependencies.length; _i24--; ) dependencies[_i24] = observerLocator.parser.parse(dependencies[_i24]);
                dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
            }
            var scope = {
                bindingContext: obj,
                overrideContext: createOverrideContext(obj)
            };
            return new ExpressionObserver(scope, dependencies, observerLocator);
        }
        function createElement(html) {
            var div = _aureliaPal.DOM.createElement("div");
            return div.innerHTML = html, div.firstChild;
        }
        function valueConverter(nameOrTarget) {
            return void 0 === nameOrTarget || "string" == typeof nameOrTarget ? function(target) {
                _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(nameOrTarget), target);
            } : void _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(), nameOrTarget);
        }
        function bindingBehavior(nameOrTarget) {
            return void 0 === nameOrTarget || "string" == typeof nameOrTarget ? function(target) {
                _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(nameOrTarget), target);
            } : void _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(), nameOrTarget);
        }
        function getAU(element) {
            var au = element.au;
            if (void 0 === au) throw new Error('No Aurelia APIs are defined for the element: "' + element.tagName + '".');
            return au;
        }
        function _getSetObserver(taskQueue, set) {
            return ModifySetObserver.for(taskQueue, set);
        }
        function observable(targetOrConfig, key, descriptor) {
            function deco(target, key, descriptor, config) {
                var isClassDecorator = void 0 === key;
                isClassDecorator && (target = target.prototype, key = "string" == typeof config ? config : config.name);
                var innerPropertyName = "_" + key, innerPropertyDescriptor = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }, callbackName = config && config.changeHandler || key + "Changed";
                return descriptor ? "function" == typeof descriptor.initializer && (innerPropertyDescriptor.value = descriptor.initializer()) : descriptor = {}, 
                "enumerable" in descriptor || (descriptor.enumerable = !0), delete descriptor.value, 
                delete descriptor.writable, delete descriptor.initializer, Reflect.defineProperty(target, innerPropertyName, innerPropertyDescriptor), 
                descriptor.get = function() {
                    return this[innerPropertyName];
                }, descriptor.set = function(newValue) {
                    var oldValue = this[innerPropertyName];
                    this[innerPropertyName] = newValue, Reflect.defineProperty(this, innerPropertyName, {
                        enumerable: !1
                    }), this[callbackName] && this[callbackName](newValue, oldValue, key);
                }, descriptor.get.dependencies = [ innerPropertyName ], isClassDecorator ? void Reflect.defineProperty(target, key, descriptor) : descriptor;
            }
            return void 0 === key ? function(t, k, d) {
                return deco(t, k, d, targetOrConfig);
            } : deco(targetOrConfig, key, descriptor);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getSetObserver = exports.BindingEngine = exports.NameExpression = exports.Listener = exports.ListenerExpression = exports.BindingBehaviorResource = exports.ValueConverterResource = exports.Call = exports.CallExpression = exports.Binding = exports.BindingExpression = exports.ObjectObservationAdapter = exports.ObserverLocator = exports.SVGAnalyzer = exports.presentationAttributes = exports.presentationElements = exports.elements = exports.ComputedExpression = exports.ClassObserver = exports.SelectValueObserver = exports.CheckedObserver = exports.ValueAttributeObserver = exports.StyleObserver = exports.DataAttributeObserver = exports.dataAttributeAccessor = exports.XLinkAttributeObserver = exports.SetterObserver = exports.PrimitiveObserver = exports.propertyAccessor = exports.DirtyCheckProperty = exports.DirtyChecker = exports.EventManager = exports.getMapObserver = exports.ParserImplementation = exports.Parser = exports.Scanner = exports.Lexer = exports.Token = exports.bindingMode = exports.ExpressionCloner = exports.Unparser = exports.LiteralObject = exports.LiteralArray = exports.LiteralString = exports.LiteralPrimitive = exports.PrefixNot = exports.Binary = exports.CallFunction = exports.CallMember = exports.CallScope = exports.AccessKeyed = exports.AccessMember = exports.AccessScope = exports.AccessThis = exports.Conditional = exports.Assign = exports.ValueConverter = exports.BindingBehavior = exports.Chain = exports.Expression = exports.getArrayObserver = exports.CollectionLengthObserver = exports.ModifyCollectionObserver = exports.ExpressionObserver = exports.sourceContext = void 0;
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
        }, _createClass = function() {
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
        }(), _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class11, _temp, _dec10, _class12, _class13, _temp2;
        exports.camelCase = camelCase, exports.createOverrideContext = createOverrideContext, 
        exports.getContextFor = getContextFor, exports.createScopeForTest = createScopeForTest, 
        exports.connectable = connectable, exports.enqueueBindingConnect = enqueueBindingConnect, 
        exports.subscriberCollection = subscriberCollection, exports.calcSplices = calcSplices, 
        exports.mergeSplice = mergeSplice, exports.projectArraySplices = projectArraySplices, 
        exports.getChangeRecords = getChangeRecords, exports.cloneExpression = cloneExpression, 
        exports.hasDeclaredDependencies = hasDeclaredDependencies, exports.declarePropertyDependencies = declarePropertyDependencies, 
        exports.computedFrom = computedFrom, exports.createComputedObserver = createComputedObserver, 
        exports.valueConverter = valueConverter, exports.bindingBehavior = bindingBehavior, 
        exports.observable = observable;
        for (var _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), _aureliaPal = __webpack_require__(0), _aureliaTaskQueue = __webpack_require__(7), _aureliaMetadata = __webpack_require__(4), map = Object.create(null), sourceContext = exports.sourceContext = "Binding:source", slotNames = [], versionSlotNames = [], i = 0; i < 100; i++) slotNames.push("_observer" + i), 
        versionSlotNames.push("_observerVersion" + i);
        var bindings = new Map(), minimumImmediate = 100, frameBudget = 15, isFlushRequested = !1, immediate = 0, arrayPool1 = [], arrayPool2 = [], poolUtilization = [], ExpressionObserver = exports.ExpressionObserver = (_dec = connectable(), 
        _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function() {
            function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
                this.scope = scope, this.expression = expression, this.observerLocator = observerLocator, 
                this.lookupFunctions = lookupFunctions;
            }
            return ExpressionObserver.prototype.getValue = function getValue() {
                return this.expression.evaluate(this.scope, this.lookupFunctions);
            }, ExpressionObserver.prototype.setValue = function setValue(newValue) {
                this.expression.assign(this.scope, newValue);
            }, ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
                var _this = this;
                if (this.hasSubscribers() || (this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions), 
                this.expression.connect(this, this.scope)), this.addSubscriber(context, callable), 
                1 === arguments.length && context instanceof Function) return {
                    dispose: function dispose() {
                        _this.unsubscribe(context, callable);
                    }
                };
            }, ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable) && !this.hasSubscribers() && (this.unobserve(!0), 
                this.oldValue = void 0);
            }, ExpressionObserver.prototype.call = function call() {
                var newValue = this.expression.evaluate(this.scope, this.lookupFunctions), oldValue = this.oldValue;
                newValue !== oldValue && (this.oldValue = newValue, this.callSubscribers(newValue, oldValue)), 
                this._version++, this.expression.connect(this, this.scope), this.unobserve(!1);
            }, ExpressionObserver;
        }()) || _class) || _class), EDIT_LEAVE = 0, EDIT_UPDATE = 1, EDIT_ADD = 2, EDIT_DELETE = 3;
        ArraySplice.prototype = {
            calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
                for (var rowCount = oldEnd - oldStart + 1, columnCount = currentEnd - currentStart + 1, distances = new Array(rowCount), north = void 0, west = void 0, _i = 0; _i < rowCount; ++_i) distances[_i] = new Array(columnCount), 
                distances[_i][0] = _i;
                for (var j = 0; j < columnCount; ++j) distances[0][j] = j;
                for (var _i2 = 1; _i2 < rowCount; ++_i2) for (var _j = 1; _j < columnCount; ++_j) this.equals(current[currentStart + _j - 1], old[oldStart + _i2 - 1]) ? distances[_i2][_j] = distances[_i2 - 1][_j - 1] : (north = distances[_i2 - 1][_j] + 1, 
                west = distances[_i2][_j - 1] + 1, distances[_i2][_j] = north < west ? north : west);
                return distances;
            },
            spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
                for (var i = distances.length - 1, j = distances[0].length - 1, current = distances[i][j], edits = []; i > 0 || j > 0; ) if (0 !== i) if (0 !== j) {
                    var northWest = distances[i - 1][j - 1], west = distances[i - 1][j], north = distances[i][j - 1], min = void 0;
                    min = west < north ? west < northWest ? west : northWest : north < northWest ? north : northWest, 
                    min === northWest ? (northWest === current ? edits.push(EDIT_LEAVE) : (edits.push(EDIT_UPDATE), 
                    current = northWest), i--, j--) : min === west ? (edits.push(EDIT_DELETE), i--, 
                    current = west) : (edits.push(EDIT_ADD), j--, current = north);
                } else edits.push(EDIT_DELETE), i--; else edits.push(EDIT_ADD), j--;
                return edits.reverse(), edits;
            },
            calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
                var prefixCount = 0, suffixCount = 0, minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
                if (0 === currentStart && 0 === oldStart && (prefixCount = this.sharedPrefix(current, old, minLength)), 
                currentEnd === current.length && oldEnd === old.length && (suffixCount = this.sharedSuffix(current, old, minLength - prefixCount)), 
                currentStart += prefixCount, oldStart += prefixCount, currentEnd -= suffixCount, 
                oldEnd -= suffixCount, currentEnd - currentStart === 0 && oldEnd - oldStart === 0) return [];
                if (currentStart === currentEnd) {
                    for (var _splice = newSplice(currentStart, [], 0); oldStart < oldEnd; ) _splice.removed.push(old[oldStart++]);
                    return [ _splice ];
                }
                if (oldStart === oldEnd) return [ newSplice(currentStart, [], currentEnd - currentStart) ];
                for (var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd)), splice = void 0, splices = [], index = currentStart, oldIndex = oldStart, _i3 = 0; _i3 < ops.length; ++_i3) switch (ops[_i3]) {
                  case EDIT_LEAVE:
                    splice && (splices.push(splice), splice = void 0), index++, oldIndex++;
                    break;

                  case EDIT_UPDATE:
                    splice || (splice = newSplice(index, [], 0)), splice.addedCount++, index++, splice.removed.push(old[oldIndex]), 
                    oldIndex++;
                    break;

                  case EDIT_ADD:
                    splice || (splice = newSplice(index, [], 0)), splice.addedCount++, index++;
                    break;

                  case EDIT_DELETE:
                    splice || (splice = newSplice(index, [], 0)), splice.removed.push(old[oldIndex]), 
                    oldIndex++;
                }
                return splice && splices.push(splice), splices;
            },
            sharedPrefix: function sharedPrefix(current, old, searchLength) {
                for (var _i4 = 0; _i4 < searchLength; ++_i4) if (!this.equals(current[_i4], old[_i4])) return _i4;
                return searchLength;
            },
            sharedSuffix: function sharedSuffix(current, old, searchLength) {
                for (var index1 = current.length, index2 = old.length, count = 0; count < searchLength && this.equals(current[--index1], old[--index2]); ) count++;
                return count;
            },
            calculateSplices: function calculateSplices(current, previous) {
                return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
            },
            equals: function equals(currentValue, previousValue) {
                return currentValue === previousValue;
            }
        };
        var arraySplice = new ArraySplice(), ModifyCollectionObserver = exports.ModifyCollectionObserver = (_dec3 = subscriberCollection(), 
        _dec3(_class2 = function() {
            function ModifyCollectionObserver(taskQueue, collection) {
                this.taskQueue = taskQueue, this.queued = !1, this.changeRecords = null, this.oldCollection = null, 
                this.collection = collection, this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? "size" : "length";
            }
            return ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
                this.addSubscriber(context, callable);
            }, ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable);
            }, ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
                if (this.hasSubscribers() || this.lengthObserver) {
                    if ("splice" === changeRecord.type) {
                        var index = changeRecord.index, arrayLength = changeRecord.object.length;
                        index > arrayLength ? index = arrayLength - changeRecord.addedCount : index < 0 && (index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount), 
                        index < 0 && (index = 0), changeRecord.index = index;
                    }
                    null === this.changeRecords ? this.changeRecords = [ changeRecord ] : this.changeRecords.push(changeRecord), 
                    this.queued || (this.queued = !0, this.taskQueue.queueMicroTask(this));
                }
            }, ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
                (this.changeRecords && this.changeRecords.length || this.oldCollection) && this.call();
            }, ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
                this.oldCollection = oldCollection, this.hasSubscribers() && !this.queued && (this.queued = !0, 
                this.taskQueue.queueMicroTask(this));
            }, ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
                return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
            }, ModifyCollectionObserver.prototype.call = function call() {
                var changeRecords = this.changeRecords, oldCollection = this.oldCollection, records = void 0;
                this.queued = !1, this.changeRecords = [], this.oldCollection = null, this.hasSubscribers() && (records = oldCollection ? this.collection instanceof Map || this.collection instanceof Set ? getChangeRecords(oldCollection) : calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length) : this.collection instanceof Map || this.collection instanceof Set ? changeRecords : projectArraySplices(this.collection, changeRecords), 
                this.callSubscribers(records)), this.lengthObserver && this.lengthObserver.call(this.collection[this.lengthPropertyName]);
            }, ModifyCollectionObserver;
        }()) || _class2), CollectionLengthObserver = exports.CollectionLengthObserver = (_dec4 = subscriberCollection(), 
        _dec4(_class3 = function() {
            function CollectionLengthObserver(collection) {
                this.collection = collection, this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? "size" : "length", 
                this.currentValue = collection[this.lengthPropertyName];
            }
            return CollectionLengthObserver.prototype.getValue = function getValue() {
                return this.collection[this.lengthPropertyName];
            }, CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
                this.collection[this.lengthPropertyName] = newValue;
            }, CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
                this.addSubscriber(context, callable);
            }, CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable);
            }, CollectionLengthObserver.prototype.call = function call(newValue) {
                var oldValue = this.currentValue;
                this.callSubscribers(newValue, oldValue), this.currentValue = newValue;
            }, CollectionLengthObserver;
        }()) || _class3), pop = Array.prototype.pop, push = Array.prototype.push, reverse = Array.prototype.reverse, shift = Array.prototype.shift, sort = Array.prototype.sort, splice = Array.prototype.splice, unshift = Array.prototype.unshift;
        Array.prototype.pop = function() {
            var notEmpty = this.length > 0, methodCallResult = pop.apply(this, arguments);
            return notEmpty && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "delete",
                object: this,
                name: this.length,
                oldValue: methodCallResult
            }), methodCallResult;
        }, Array.prototype.push = function() {
            var methodCallResult = push.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: this.length - arguments.length,
                removed: [],
                addedCount: arguments.length
            }), methodCallResult;
        }, Array.prototype.reverse = function() {
            var oldArray = void 0;
            void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), 
            oldArray = this.slice());
            var methodCallResult = reverse.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.reset(oldArray), 
            methodCallResult;
        }, Array.prototype.shift = function() {
            var notEmpty = this.length > 0, methodCallResult = shift.apply(this, arguments);
            return notEmpty && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "delete",
                object: this,
                name: 0,
                oldValue: methodCallResult
            }), methodCallResult;
        }, Array.prototype.sort = function() {
            var oldArray = void 0;
            void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), 
            oldArray = this.slice());
            var methodCallResult = sort.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.reset(oldArray), 
            methodCallResult;
        }, Array.prototype.splice = function() {
            var methodCallResult = splice.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: arguments[0],
                removed: methodCallResult,
                addedCount: arguments.length > 2 ? arguments.length - 2 : 0
            }), methodCallResult;
        }, Array.prototype.unshift = function() {
            var methodCallResult = unshift.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: 0,
                removed: [],
                addedCount: arguments.length
            }), methodCallResult;
        }, exports.getArrayObserver = _getArrayObserver;
        var ModifyArrayObserver = function(_ModifyCollectionObse) {
            function ModifyArrayObserver(taskQueue, array) {
                return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
            }
            return _inherits(ModifyArrayObserver, _ModifyCollectionObse), ModifyArrayObserver.for = function _for(taskQueue, array) {
                return "__array_observer__" in array || Reflect.defineProperty(array, "__array_observer__", {
                    value: ModifyArrayObserver.create(taskQueue, array),
                    enumerable: !1,
                    configurable: !1
                }), array.__array_observer__;
            }, ModifyArrayObserver.create = function create(taskQueue, array) {
                return new ModifyArrayObserver(taskQueue, array);
            }, ModifyArrayObserver;
        }(ModifyCollectionObserver), Expression = exports.Expression = function() {
            function Expression() {
                this.isChain = !1, this.isAssignable = !1;
            }
            return Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
                throw new Error('Binding expression "' + this + '" cannot be evaluated.');
            }, Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
                throw new Error('Binding expression "' + this + '" cannot be assigned to.');
            }, Expression.prototype.toString = function toString() {
                return Unparser.unparse(this);
            }, Expression;
        }(), Chain = exports.Chain = function(_Expression) {
            function Chain(expressions) {
                var _this3 = _possibleConstructorReturn(this, _Expression.call(this));
                return _this3.expressions = expressions, _this3.isChain = !0, _this3;
            }
            return _inherits(Chain, _Expression), Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                for (var result = void 0, expressions = this.expressions, last = void 0, _i7 = 0, length = expressions.length; _i7 < length; ++_i7) last = expressions[_i7].evaluate(scope, lookupFunctions), 
                null !== last && (result = last);
                return result;
            }, Chain.prototype.accept = function accept(visitor) {
                return visitor.visitChain(this);
            }, Chain;
        }(Expression), BindingBehavior = exports.BindingBehavior = function(_Expression2) {
            function BindingBehavior(expression, name, args) {
                var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));
                return _this4.expression = expression, _this4.name = name, _this4.args = args, _this4;
            }
            return _inherits(BindingBehavior, _Expression2), BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return this.expression.evaluate(scope, lookupFunctions);
            }, BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
                return this.expression.assign(scope, value, lookupFunctions);
            }, BindingBehavior.prototype.accept = function accept(visitor) {
                return visitor.visitBindingBehavior(this);
            }, BindingBehavior.prototype.connect = function connect(binding, scope) {
                this.expression.connect(binding, scope);
            }, BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
                this.expression.expression && this.expression.bind && this.expression.bind(binding, scope, lookupFunctions);
                var behavior = lookupFunctions.bindingBehaviors(this.name);
                if (!behavior) throw new Error('No BindingBehavior named "' + this.name + '" was found!');
                var behaviorKey = "behavior-" + this.name;
                if (binding[behaviorKey]) throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
                binding[behaviorKey] = behavior, behavior.bind.apply(behavior, [ binding, scope ].concat(evalList(scope, this.args, binding.lookupFunctions)));
            }, BindingBehavior.prototype.unbind = function unbind(binding, scope) {
                var behaviorKey = "behavior-" + this.name;
                binding[behaviorKey].unbind(binding, scope), binding[behaviorKey] = null, this.expression.expression && this.expression.unbind && this.expression.unbind(binding, scope);
            }, BindingBehavior;
        }(Expression), ValueConverter = exports.ValueConverter = function(_Expression3) {
            function ValueConverter(expression, name, args, allArgs) {
                var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));
                return _this5.expression = expression, _this5.name = name, _this5.args = args, _this5.allArgs = allArgs, 
                _this5;
            }
            return _inherits(ValueConverter, _Expression3), ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                var converter = lookupFunctions.valueConverters(this.name);
                if (!converter) throw new Error('No ValueConverter named "' + this.name + '" was found!');
                return "toView" in converter ? converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions)) : this.allArgs[0].evaluate(scope, lookupFunctions);
            }, ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
                var converter = lookupFunctions.valueConverters(this.name);
                if (!converter) throw new Error('No ValueConverter named "' + this.name + '" was found!');
                return "fromView" in converter && (value = converter.fromView.apply(converter, [ value ].concat(evalList(scope, this.args, lookupFunctions)))), 
                this.allArgs[0].assign(scope, value, lookupFunctions);
            }, ValueConverter.prototype.accept = function accept(visitor) {
                return visitor.visitValueConverter(this);
            }, ValueConverter.prototype.connect = function connect(binding, scope) {
                for (var expressions = this.allArgs, i = expressions.length; i--; ) expressions[i].connect(binding, scope);
            }, ValueConverter;
        }(Expression), Assign = exports.Assign = function(_Expression4) {
            function Assign(target, value) {
                var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));
                return _this6.target = target, _this6.value = value, _this6;
            }
            return _inherits(Assign, _Expression4), Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
            }, Assign.prototype.accept = function accept(vistor) {
                vistor.visitAssign(this);
            }, Assign.prototype.connect = function connect(binding, scope) {}, Assign;
        }(Expression), Conditional = exports.Conditional = function(_Expression5) {
            function Conditional(condition, yes, no) {
                var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));
                return _this7.condition = condition, _this7.yes = yes, _this7.no = no, _this7;
            }
            return _inherits(Conditional, _Expression5), Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
            }, Conditional.prototype.accept = function accept(visitor) {
                return visitor.visitConditional(this);
            }, Conditional.prototype.connect = function connect(binding, scope) {
                this.condition.connect(binding, scope), this.condition.evaluate(scope) ? this.yes.connect(binding, scope) : this.no.connect(binding, scope);
            }, Conditional;
        }(Expression), AccessThis = exports.AccessThis = function(_Expression6) {
            function AccessThis(ancestor) {
                var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));
                return _this8.ancestor = ancestor, _this8;
            }
            return _inherits(AccessThis, _Expression6), AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                for (var oc = scope.overrideContext, i = this.ancestor; i-- && oc; ) oc = oc.parentOverrideContext;
                return i < 1 && oc ? oc.bindingContext : void 0;
            }, AccessThis.prototype.accept = function accept(visitor) {
                return visitor.visitAccessThis(this);
            }, AccessThis.prototype.connect = function connect(binding, scope) {}, AccessThis;
        }(Expression), AccessScope = exports.AccessScope = function(_Expression7) {
            function AccessScope(name, ancestor) {
                var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));
                return _this9.name = name, _this9.ancestor = ancestor, _this9.isAssignable = !0, 
                _this9;
            }
            return _inherits(AccessScope, _Expression7), AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                var context = getContextFor(this.name, scope, this.ancestor);
                return context[this.name];
            }, AccessScope.prototype.assign = function assign(scope, value) {
                var context = getContextFor(this.name, scope, this.ancestor);
                return context ? context[this.name] = value : void 0;
            }, AccessScope.prototype.accept = function accept(visitor) {
                return visitor.visitAccessScope(this);
            }, AccessScope.prototype.connect = function connect(binding, scope) {
                var context = getContextFor(this.name, scope, this.ancestor);
                binding.observeProperty(context, this.name);
            }, AccessScope;
        }(Expression), AccessMember = exports.AccessMember = function(_Expression8) {
            function AccessMember(object, name) {
                var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));
                return _this10.object = object, _this10.name = name, _this10.isAssignable = !0, 
                _this10;
            }
            return _inherits(AccessMember, _Expression8), AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                var instance = this.object.evaluate(scope, lookupFunctions);
                return null === instance || void 0 === instance ? instance : instance[this.name];
            }, AccessMember.prototype.assign = function assign(scope, value) {
                var instance = this.object.evaluate(scope);
                return null !== instance && void 0 !== instance || (instance = {}, this.object.assign(scope, instance)), 
                instance[this.name] = value, value;
            }, AccessMember.prototype.accept = function accept(visitor) {
                return visitor.visitAccessMember(this);
            }, AccessMember.prototype.connect = function connect(binding, scope) {
                this.object.connect(binding, scope);
                var obj = this.object.evaluate(scope);
                obj && binding.observeProperty(obj, this.name);
            }, AccessMember;
        }(Expression), AccessKeyed = exports.AccessKeyed = function(_Expression9) {
            function AccessKeyed(object, key) {
                var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));
                return _this11.object = object, _this11.key = key, _this11.isAssignable = !0, _this11;
            }
            return _inherits(AccessKeyed, _Expression9), AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                var instance = this.object.evaluate(scope, lookupFunctions), lookup = this.key.evaluate(scope, lookupFunctions);
                return getKeyed(instance, lookup);
            }, AccessKeyed.prototype.assign = function assign(scope, value) {
                var instance = this.object.evaluate(scope), lookup = this.key.evaluate(scope);
                return setKeyed(instance, lookup, value);
            }, AccessKeyed.prototype.accept = function accept(visitor) {
                return visitor.visitAccessKeyed(this);
            }, AccessKeyed.prototype.connect = function connect(binding, scope) {
                this.object.connect(binding, scope);
                var obj = this.object.evaluate(scope);
                if (obj instanceof Object) {
                    this.key.connect(binding, scope);
                    var key = this.key.evaluate(scope);
                    null === key || void 0 === key || Array.isArray(obj) && "number" == typeof key || binding.observeProperty(obj, key);
                }
            }, AccessKeyed;
        }(Expression), CallScope = exports.CallScope = function(_Expression10) {
            function CallScope(name, args, ancestor) {
                var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));
                return _this12.name = name, _this12.args = args, _this12.ancestor = ancestor, _this12;
            }
            return _inherits(CallScope, _Expression10), CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
                var args = evalList(scope, this.args, lookupFunctions), context = getContextFor(this.name, scope, this.ancestor), func = getFunction(context, this.name, mustEvaluate);
                if (func) return func.apply(context, args);
            }, CallScope.prototype.accept = function accept(visitor) {
                return visitor.visitCallScope(this);
            }, CallScope.prototype.connect = function connect(binding, scope) {
                for (var args = this.args, i = args.length; i--; ) args[i].connect(binding, scope);
            }, CallScope;
        }(Expression), CallMember = exports.CallMember = function(_Expression11) {
            function CallMember(object, name, args) {
                var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));
                return _this13.object = object, _this13.name = name, _this13.args = args, _this13;
            }
            return _inherits(CallMember, _Expression11), CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
                var instance = this.object.evaluate(scope, lookupFunctions), args = evalList(scope, this.args, lookupFunctions), func = getFunction(instance, this.name, mustEvaluate);
                if (func) return func.apply(instance, args);
            }, CallMember.prototype.accept = function accept(visitor) {
                return visitor.visitCallMember(this);
            }, CallMember.prototype.connect = function connect(binding, scope) {
                this.object.connect(binding, scope);
                var obj = this.object.evaluate(scope);
                if (getFunction(obj, this.name, !1)) for (var args = this.args, _i8 = args.length; _i8--; ) args[_i8].connect(binding, scope);
            }, CallMember;
        }(Expression), CallFunction = exports.CallFunction = function(_Expression12) {
            function CallFunction(func, args) {
                var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));
                return _this14.func = func, _this14.args = args, _this14;
            }
            return _inherits(CallFunction, _Expression12), CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
                var func = this.func.evaluate(scope, lookupFunctions);
                if ("function" == typeof func) return func.apply(null, evalList(scope, this.args, lookupFunctions));
                if (mustEvaluate || null !== func && void 0 !== func) throw new Error(this.func + " is not a function");
            }, CallFunction.prototype.accept = function accept(visitor) {
                return visitor.visitCallFunction(this);
            }, CallFunction.prototype.connect = function connect(binding, scope) {
                this.func.connect(binding, scope);
                var func = this.func.evaluate(scope);
                if ("function" == typeof func) for (var args = this.args, _i9 = args.length; _i9--; ) args[_i9].connect(binding, scope);
            }, CallFunction;
        }(Expression), Binary = exports.Binary = function(_Expression13) {
            function Binary(operation, left, right) {
                var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));
                return _this15.operation = operation, _this15.left = left, _this15.right = right, 
                _this15;
            }
            return _inherits(Binary, _Expression13), Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                var left = this.left.evaluate(scope);
                switch (this.operation) {
                  case "&&":
                    return left && this.right.evaluate(scope);

                  case "||":
                    return left || this.right.evaluate(scope);
                }
                var right = this.right.evaluate(scope);
                switch (this.operation) {
                  case "==":
                    return left == right;

                  case "===":
                    return left === right;

                  case "!=":
                    return left != right;

                  case "!==":
                    return left !== right;
                }
                if (null === left || null === right || void 0 === left || void 0 === right) {
                    switch (this.operation) {
                      case "+":
                        return null !== left && void 0 !== left ? left : null !== right && void 0 !== right ? right : 0;

                      case "-":
                        return null !== left && void 0 !== left ? left : null !== right && void 0 !== right ? 0 - right : 0;
                    }
                    return null;
                }
                switch (this.operation) {
                  case "+":
                    return autoConvertAdd(left, right);

                  case "-":
                    return left - right;

                  case "*":
                    return left * right;

                  case "/":
                    return left / right;

                  case "%":
                    return left % right;

                  case "<":
                    return left < right;

                  case ">":
                    return left > right;

                  case "<=":
                    return left <= right;

                  case ">=":
                    return left >= right;

                  case "^":
                    return left ^ right;
                }
                throw new Error("Internal error [" + this.operation + "] not handled");
            }, Binary.prototype.accept = function accept(visitor) {
                return visitor.visitBinary(this);
            }, Binary.prototype.connect = function connect(binding, scope) {
                this.left.connect(binding, scope);
                var left = this.left.evaluate(scope);
                "&&" === this.operation && !left || "||" === this.operation && left || this.right.connect(binding, scope);
            }, Binary;
        }(Expression), PrefixNot = exports.PrefixNot = function(_Expression14) {
            function PrefixNot(operation, expression) {
                var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));
                return _this16.operation = operation, _this16.expression = expression, _this16;
            }
            return _inherits(PrefixNot, _Expression14), PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return !this.expression.evaluate(scope);
            }, PrefixNot.prototype.accept = function accept(visitor) {
                return visitor.visitPrefix(this);
            }, PrefixNot.prototype.connect = function connect(binding, scope) {
                this.expression.connect(binding, scope);
            }, PrefixNot;
        }(Expression), LiteralPrimitive = exports.LiteralPrimitive = function(_Expression15) {
            function LiteralPrimitive(value) {
                var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));
                return _this17.value = value, _this17;
            }
            return _inherits(LiteralPrimitive, _Expression15), LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return this.value;
            }, LiteralPrimitive.prototype.accept = function accept(visitor) {
                return visitor.visitLiteralPrimitive(this);
            }, LiteralPrimitive.prototype.connect = function connect(binding, scope) {}, LiteralPrimitive;
        }(Expression), LiteralString = exports.LiteralString = function(_Expression16) {
            function LiteralString(value) {
                var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));
                return _this18.value = value, _this18;
            }
            return _inherits(LiteralString, _Expression16), LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return this.value;
            }, LiteralString.prototype.accept = function accept(visitor) {
                return visitor.visitLiteralString(this);
            }, LiteralString.prototype.connect = function connect(binding, scope) {}, LiteralString;
        }(Expression), LiteralArray = exports.LiteralArray = function(_Expression17) {
            function LiteralArray(elements) {
                var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));
                return _this19.elements = elements, _this19;
            }
            return _inherits(LiteralArray, _Expression17), LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                for (var elements = this.elements, result = [], _i10 = 0, length = elements.length; _i10 < length; ++_i10) result[_i10] = elements[_i10].evaluate(scope, lookupFunctions);
                return result;
            }, LiteralArray.prototype.accept = function accept(visitor) {
                return visitor.visitLiteralArray(this);
            }, LiteralArray.prototype.connect = function connect(binding, scope) {
                for (var length = this.elements.length, _i11 = 0; _i11 < length; _i11++) this.elements[_i11].connect(binding, scope);
            }, LiteralArray;
        }(Expression), LiteralObject = exports.LiteralObject = function(_Expression18) {
            function LiteralObject(keys, values) {
                var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));
                return _this20.keys = keys, _this20.values = values, _this20;
            }
            return _inherits(LiteralObject, _Expression18), LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                for (var instance = {}, keys = this.keys, values = this.values, _i12 = 0, length = keys.length; _i12 < length; ++_i12) instance[keys[_i12]] = values[_i12].evaluate(scope, lookupFunctions);
                return instance;
            }, LiteralObject.prototype.accept = function accept(visitor) {
                return visitor.visitLiteralObject(this);
            }, LiteralObject.prototype.connect = function connect(binding, scope) {
                for (var length = this.keys.length, _i13 = 0; _i13 < length; _i13++) this.values[_i13].connect(binding, scope);
            }, LiteralObject;
        }(Expression), Unparser = exports.Unparser = function() {
            function Unparser(buffer) {
                this.buffer = buffer;
            }
            return Unparser.unparse = function unparse(expression) {
                var buffer = [], visitor = new Unparser(buffer);
                return expression.accept(visitor), buffer.join("");
            }, Unparser.prototype.write = function write(text) {
                this.buffer.push(text);
            }, Unparser.prototype.writeArgs = function writeArgs(args) {
                this.write("(");
                for (var _i15 = 0, length = args.length; _i15 < length; ++_i15) 0 !== _i15 && this.write(","), 
                args[_i15].accept(this);
                this.write(")");
            }, Unparser.prototype.visitChain = function visitChain(chain) {
                for (var expressions = chain.expressions, _i16 = 0, length = expression.length; _i16 < length; ++_i16) 0 !== _i16 && this.write(";"), 
                expressions[_i16].accept(this);
            }, Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
                var args = behavior.args;
                behavior.expression.accept(this), this.write("&" + behavior.name);
                for (var _i17 = 0, length = args.length; _i17 < length; ++_i17) this.write(":"), 
                args[_i17].accept(this);
            }, Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
                var args = converter.args;
                converter.expression.accept(this), this.write("|" + converter.name);
                for (var _i18 = 0, length = args.length; _i18 < length; ++_i18) this.write(":"), 
                args[_i18].accept(this);
            }, Unparser.prototype.visitAssign = function visitAssign(assign) {
                assign.target.accept(this), this.write("="), assign.value.accept(this);
            }, Unparser.prototype.visitConditional = function visitConditional(conditional) {
                conditional.condition.accept(this), this.write("?"), conditional.yes.accept(this), 
                this.write(":"), conditional.no.accept(this);
            }, Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
                if (0 === access.ancestor) return void this.write("$this");
                this.write("$parent");
                for (var i = access.ancestor - 1; i--; ) this.write(".$parent");
            }, Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
                for (var i = access.ancestor; i--; ) this.write("$parent.");
                this.write(access.name);
            }, Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
                access.object.accept(this), this.write("." + access.name);
            }, Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
                access.object.accept(this), this.write("["), access.key.accept(this), this.write("]");
            }, Unparser.prototype.visitCallScope = function visitCallScope(call) {
                for (var i = call.ancestor; i--; ) this.write("$parent.");
                this.write(call.name), this.writeArgs(call.args);
            }, Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
                call.func.accept(this), this.writeArgs(call.args);
            }, Unparser.prototype.visitCallMember = function visitCallMember(call) {
                call.object.accept(this), this.write("." + call.name), this.writeArgs(call.args);
            }, Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
                this.write("(" + prefix.operation), prefix.expression.accept(this), this.write(")");
            }, Unparser.prototype.visitBinary = function visitBinary(binary) {
                binary.left.accept(this), this.write(binary.operation), binary.right.accept(this);
            }, Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
                this.write("" + literal.value);
            }, Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
                var elements = literal.elements;
                this.write("[");
                for (var _i19 = 0, length = elements.length; _i19 < length; ++_i19) 0 !== _i19 && this.write(","), 
                elements[_i19].accept(this);
                this.write("]");
            }, Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
                var keys = literal.keys, values = literal.values;
                this.write("{");
                for (var _i20 = 0, length = keys.length; _i20 < length; ++_i20) 0 !== _i20 && this.write(","), 
                this.write("'" + keys[_i20] + "':"), values[_i20].accept(this);
                this.write("}");
            }, Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
                var escaped = literal.value.replace(/'/g, "'");
                this.write("'" + escaped + "'");
            }, Unparser;
        }(), ExpressionCloner = exports.ExpressionCloner = function() {
            function ExpressionCloner() {}
            return ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
                for (var clonedArray = [], i = array.length; i--; ) clonedArray[i] = array[i].accept(this);
                return clonedArray;
            }, ExpressionCloner.prototype.visitChain = function visitChain(chain) {
                return new Chain(this.cloneExpressionArray(chain.expressions));
            }, ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
                return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
            }, ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
                return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
            }, ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
                return new Assign(assign.target.accept(this), assign.value.accept(this));
            }, ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
                return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
            }, ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
                return new AccessThis(access.ancestor);
            }, ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
                return new AccessScope(access.name, access.ancestor);
            }, ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
                return new AccessMember(access.object.accept(this), access.name);
            }, ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
                return new AccessKeyed(access.object.accept(this), access.key.accept(this));
            }, ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
                return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
            }, ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
                return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
            }, ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
                return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
            }, ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
                return new PrefixNot(prefix.operation, prefix.expression.accept(this));
            }, ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
                return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
            }, ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
                return new LiteralPrimitive(literal);
            }, ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
                return new LiteralArray(this.cloneExpressionArray(literal.elements));
            }, ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
                return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
            }, ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
                return new LiteralString(literal.value);
            }, ExpressionCloner;
        }(), bindingMode = exports.bindingMode = {
            oneTime: 0,
            oneWay: 1,
            twoWay: 2
        }, Token = exports.Token = function() {
            function Token(index, text) {
                this.index = index, this.text = text;
            }
            return Token.prototype.withOp = function withOp(op) {
                return this.opKey = op, this;
            }, Token.prototype.withGetterSetter = function withGetterSetter(key) {
                return this.key = key, this;
            }, Token.prototype.withValue = function withValue(value) {
                return this.value = value, this;
            }, Token.prototype.toString = function toString() {
                return "Token(" + this.text + ")";
            }, Token;
        }(), Lexer = exports.Lexer = function() {
            function Lexer() {}
            return Lexer.prototype.lex = function lex(text) {
                for (var scanner = new Scanner(text), tokens = [], token = scanner.scanToken(); token; ) tokens.push(token), 
                token = scanner.scanToken();
                return tokens;
            }, Lexer;
        }(), Scanner = exports.Scanner = function() {
            function Scanner(input) {
                this.input = input, this.length = input.length, this.peek = 0, this.index = -1, 
                this.advance();
            }
            return Scanner.prototype.scanToken = function scanToken() {
                for (;this.peek <= $SPACE; ) {
                    if (++this.index >= this.length) return this.peek = $EOF, null;
                    this.peek = this.input.charCodeAt(this.index);
                }
                if (isIdentifierStart(this.peek)) return this.scanIdentifier();
                if (isDigit(this.peek)) return this.scanNumber(this.index);
                var start = this.index;
                switch (this.peek) {
                  case $PERIOD:
                    return this.advance(), isDigit(this.peek) ? this.scanNumber(start) : new Token(start, ".");

                  case $LPAREN:
                  case $RPAREN:
                  case $LBRACE:
                  case $RBRACE:
                  case $LBRACKET:
                  case $RBRACKET:
                  case $COMMA:
                  case $COLON:
                  case $SEMICOLON:
                    return this.scanCharacter(start, String.fromCharCode(this.peek));

                  case $SQ:
                  case $DQ:
                    return this.scanString();

                  case $PLUS:
                  case $MINUS:
                  case $STAR:
                  case $SLASH:
                  case $PERCENT:
                  case $CARET:
                  case $QUESTION:
                    return this.scanOperator(start, String.fromCharCode(this.peek));

                  case $LT:
                  case $GT:
                  case $BANG:
                  case $EQ:
                    return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), "=");

                  case $AMPERSAND:
                    return this.scanComplexOperator(start, $AMPERSAND, "&", "&");

                  case $BAR:
                    return this.scanComplexOperator(start, $BAR, "|", "|");

                  case $NBSP:
                    for (;isWhitespace(this.peek); ) this.advance();
                    return this.scanToken();
                }
                var character = String.fromCharCode(this.peek);
                return this.error("Unexpected character [" + character + "]"), null;
            }, Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
                return assert(this.peek === text.charCodeAt(0)), this.advance(), new Token(start, text);
            }, Scanner.prototype.scanOperator = function scanOperator(start, text) {
                return assert(this.peek === text.charCodeAt(0)), assert(OPERATORS.indexOf(text) !== -1), 
                this.advance(), new Token(start, text).withOp(text);
            }, Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
                assert(this.peek === one.charCodeAt(0)), this.advance();
                var text = one;
                return this.peek === code && (this.advance(), text += two), this.peek === code && (this.advance(), 
                text += two), assert(OPERATORS.indexOf(text) !== -1), new Token(start, text).withOp(text);
            }, Scanner.prototype.scanIdentifier = function scanIdentifier() {
                assert(isIdentifierStart(this.peek));
                var start = this.index;
                for (this.advance(); isIdentifierPart(this.peek); ) this.advance();
                var text = this.input.substring(start, this.index), result = new Token(start, text);
                return OPERATORS.indexOf(text) !== -1 ? result.withOp(text) : result.withGetterSetter(text), 
                result;
            }, Scanner.prototype.scanNumber = function scanNumber(start) {
                assert(isDigit(this.peek));
                var simple = this.index === start;
                for (this.advance(); ;) {
                    if (!isDigit(this.peek)) if (this.peek === $PERIOD) simple = !1; else {
                        if (!isExponentStart(this.peek)) break;
                        this.advance(), isExponentSign(this.peek) && this.advance(), isDigit(this.peek) || this.error("Invalid exponent", -1), 
                        simple = !1;
                    }
                    this.advance();
                }
                var text = this.input.substring(start, this.index), value = simple ? parseInt(text, 10) : parseFloat(text);
                return new Token(start, text).withValue(value);
            }, Scanner.prototype.scanString = function scanString() {
                assert(this.peek === $SQ || this.peek === $DQ);
                var start = this.index, quote = this.peek;
                this.advance();
                for (var buffer = void 0, marker = this.index; this.peek !== quote; ) if (this.peek === $BACKSLASH) {
                    buffer || (buffer = []), buffer.push(this.input.substring(marker, this.index)), 
                    this.advance();
                    var _unescaped = void 0;
                    if (this.peek === $u) {
                        var hex = this.input.substring(this.index + 1, this.index + 5);
                        /[A-Z0-9]{4}/.test(hex) || this.error("Invalid unicode escape [\\u" + hex + "]"), 
                        _unescaped = parseInt(hex, 16);
                        for (var _i21 = 0; _i21 < 5; ++_i21) this.advance();
                    } else _unescaped = unescape(this.peek), this.advance();
                    buffer.push(String.fromCharCode(_unescaped)), marker = this.index;
                } else this.peek === $EOF ? this.error("Unterminated quote") : this.advance();
                var last = this.input.substring(marker, this.index);
                this.advance();
                var text = this.input.substring(start, this.index), unescaped = last;
                return null !== buffer && void 0 !== buffer && (buffer.push(last), unescaped = buffer.join("")), 
                new Token(start, text).withValue(unescaped);
            }, Scanner.prototype.advance = function advance() {
                ++this.index >= this.length ? this.peek = $EOF : this.peek = this.input.charCodeAt(this.index);
            }, Scanner.prototype.error = function error(message) {
                var offset = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], position = this.index + offset;
                throw new Error("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
            }, Scanner;
        }(), OPERATORS = [ "undefined", "null", "true", "false", "+", "-", "*", "/", "%", "^", "=", "==", "===", "!=", "!==", "<", ">", "<=", ">=", "&&", "||", "&", "|", "!", "?" ], $EOF = 0, $TAB = 9, $LF = 10, $VTAB = 11, $FF = 12, $CR = 13, $SPACE = 32, $BANG = 33, $DQ = 34, $$ = 36, $PERCENT = 37, $AMPERSAND = 38, $SQ = 39, $LPAREN = 40, $RPAREN = 41, $STAR = 42, $PLUS = 43, $COMMA = 44, $MINUS = 45, $PERIOD = 46, $SLASH = 47, $COLON = 58, $SEMICOLON = 59, $LT = 60, $EQ = 61, $GT = 62, $QUESTION = 63, $0 = 48, $9 = 57, $A = 65, $E = 69, $Z = 90, $LBRACKET = 91, $BACKSLASH = 92, $RBRACKET = 93, $CARET = 94, $_ = 95, $a = 97, $e = 101, $f = 102, $n = 110, $r = 114, $t = 116, $u = 117, $v = 118, $z = 122, $LBRACE = 123, $BAR = 124, $RBRACE = 125, $NBSP = 160, EOF = new Token(-1, null), Parser = exports.Parser = function() {
            function Parser() {
                this.cache = {}, this.lexer = new Lexer();
            }
            return Parser.prototype.parse = function parse(input) {
                return input = input || "", this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
            }, Parser;
        }(), ParserImplementation = exports.ParserImplementation = function() {
            function ParserImplementation(lexer, input) {
                this.index = 0, this.input = input, this.tokens = lexer.lex(input);
            }
            return ParserImplementation.prototype.parseChain = function parseChain() {
                for (var isChain = !1, expressions = []; this.optional(";"); ) isChain = !0;
                for (;this.index < this.tokens.length; ) {
                    ")" !== this.peek.text && "}" !== this.peek.text && "]" !== this.peek.text || this.error("Unconsumed token " + this.peek.text);
                    var expr = this.parseBindingBehavior();
                    for (expressions.push(expr); this.optional(";"); ) isChain = !0;
                    isChain && this.error("Multiple expressions are not allowed.");
                }
                return 1 === expressions.length ? expressions[0] : new Chain(expressions);
            }, ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
                for (var result = this.parseValueConverter(); this.optional("&"); ) {
                    var name = this.peek.text, args = [];
                    for (this.advance(); this.optional(":"); ) args.push(this.parseExpression());
                    result = new BindingBehavior(result, name, args);
                }
                return result;
            }, ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
                for (var result = this.parseExpression(); this.optional("|"); ) {
                    var name = this.peek.text, args = [];
                    for (this.advance(); this.optional(":"); ) args.push(this.parseExpression());
                    result = new ValueConverter(result, name, args, [ result ].concat(args));
                }
                return result;
            }, ParserImplementation.prototype.parseExpression = function parseExpression() {
                for (var start = this.peek.index, result = this.parseConditional(); "=" === this.peek.text; ) {
                    if (!result.isAssignable) {
                        var end = this.index < this.tokens.length ? this.peek.index : this.input.length, _expression = this.input.substring(start, end);
                        this.error("Expression " + _expression + " is not assignable");
                    }
                    this.expect("="), result = new Assign(result, this.parseConditional());
                }
                return result;
            }, ParserImplementation.prototype.parseConditional = function parseConditional() {
                var start = this.peek.index, result = this.parseLogicalOr();
                if (this.optional("?")) {
                    var yes = this.parseExpression();
                    if (!this.optional(":")) {
                        var end = this.index < this.tokens.length ? this.peek.index : this.input.length, _expression2 = this.input.substring(start, end);
                        this.error("Conditional expression " + _expression2 + " requires all 3 expressions");
                    }
                    var no = this.parseExpression();
                    result = new Conditional(result, yes, no);
                }
                return result;
            }, ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
                for (var result = this.parseLogicalAnd(); this.optional("||"); ) result = new Binary("||", result, this.parseLogicalAnd());
                return result;
            }, ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
                for (var result = this.parseEquality(); this.optional("&&"); ) result = new Binary("&&", result, this.parseEquality());
                return result;
            }, ParserImplementation.prototype.parseEquality = function parseEquality() {
                for (var result = this.parseRelational(); ;) if (this.optional("==")) result = new Binary("==", result, this.parseRelational()); else if (this.optional("!=")) result = new Binary("!=", result, this.parseRelational()); else if (this.optional("===")) result = new Binary("===", result, this.parseRelational()); else {
                    if (!this.optional("!==")) return result;
                    result = new Binary("!==", result, this.parseRelational());
                }
            }, ParserImplementation.prototype.parseRelational = function parseRelational() {
                for (var result = this.parseAdditive(); ;) if (this.optional("<")) result = new Binary("<", result, this.parseAdditive()); else if (this.optional(">")) result = new Binary(">", result, this.parseAdditive()); else if (this.optional("<=")) result = new Binary("<=", result, this.parseAdditive()); else {
                    if (!this.optional(">=")) return result;
                    result = new Binary(">=", result, this.parseAdditive());
                }
            }, ParserImplementation.prototype.parseAdditive = function parseAdditive() {
                for (var result = this.parseMultiplicative(); ;) if (this.optional("+")) result = new Binary("+", result, this.parseMultiplicative()); else {
                    if (!this.optional("-")) return result;
                    result = new Binary("-", result, this.parseMultiplicative());
                }
            }, ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
                for (var result = this.parsePrefix(); ;) if (this.optional("*")) result = new Binary("*", result, this.parsePrefix()); else if (this.optional("%")) result = new Binary("%", result, this.parsePrefix()); else {
                    if (!this.optional("/")) return result;
                    result = new Binary("/", result, this.parsePrefix());
                }
            }, ParserImplementation.prototype.parsePrefix = function parsePrefix() {
                return this.optional("+") ? this.parsePrefix() : this.optional("-") ? new Binary("-", new LiteralPrimitive(0), this.parsePrefix()) : this.optional("!") ? new PrefixNot("!", this.parsePrefix()) : this.parseAccessOrCallMember();
            }, ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
                for (var result = this.parsePrimary(); ;) if (this.optional(".")) {
                    var name = this.peek.text;
                    if (this.advance(), this.optional("(")) {
                        var args = this.parseExpressionList(")");
                        this.expect(")"), result = result instanceof AccessThis ? new CallScope(name, args, result.ancestor) : new CallMember(result, name, args);
                    } else result = result instanceof AccessThis ? new AccessScope(name, result.ancestor) : new AccessMember(result, name);
                } else if (this.optional("[")) {
                    var key = this.parseExpression();
                    this.expect("]"), result = new AccessKeyed(result, key);
                } else {
                    if (!this.optional("(")) return result;
                    var _args = this.parseExpressionList(")");
                    this.expect(")"), result = new CallFunction(result, _args);
                }
            }, ParserImplementation.prototype.parsePrimary = function parsePrimary() {
                if (this.optional("(")) {
                    var result = this.parseExpression();
                    return this.expect(")"), result;
                }
                if (this.optional("null")) return new LiteralPrimitive(null);
                if (this.optional("undefined")) return new LiteralPrimitive(void 0);
                if (this.optional("true")) return new LiteralPrimitive(!0);
                if (this.optional("false")) return new LiteralPrimitive(!1);
                if (this.optional("[")) {
                    var elements = this.parseExpressionList("]");
                    return this.expect("]"), new LiteralArray(elements);
                }
                if ("{" === this.peek.text) return this.parseObject();
                if (null !== this.peek.key && void 0 !== this.peek.key) return this.parseAccessOrCallScope();
                if (null !== this.peek.value && void 0 !== this.peek.value) {
                    var value = this.peek.value;
                    return this.advance(), value instanceof String || "string" == typeof value ? new LiteralString(value) : new LiteralPrimitive(value);
                }
                if (this.index >= this.tokens.length) throw new Error("Unexpected end of expression: " + this.input);
                this.error("Unexpected token " + this.peek.text);
            }, ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
                var name = this.peek.key;
                if (this.advance(), "$this" === name) return new AccessThis(0);
                for (var ancestor = 0; "$parent" === name; ) if (ancestor++, this.optional(".")) name = this.peek.key, 
                this.advance(); else {
                    if (this.peek === EOF || "(" === this.peek.text || "[" === this.peek.text || "}" === this.peek.text || "," === this.peek.text) return new AccessThis(ancestor);
                    this.error("Unexpected token " + this.peek.text);
                }
                if (this.optional("(")) {
                    var args = this.parseExpressionList(")");
                    return this.expect(")"), new CallScope(name, args, ancestor);
                }
                return new AccessScope(name, ancestor);
            }, ParserImplementation.prototype.parseObject = function parseObject() {
                var keys = [], values = [];
                if (this.expect("{"), "}" !== this.peek.text) do {
                    var peek = this.peek, value = peek.value;
                    keys.push("string" == typeof value ? value : peek.text), this.advance(), !peek.key || "," !== this.peek.text && "}" !== this.peek.text ? (this.expect(":"), 
                    values.push(this.parseExpression())) : (--this.index, values.push(this.parseAccessOrCallScope()));
                } while (this.optional(","));
                return this.expect("}"), new LiteralObject(keys, values);
            }, ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
                var result = [];
                if (this.peek.text !== terminator) do result.push(this.parseExpression()); while (this.optional(","));
                return result;
            }, ParserImplementation.prototype.optional = function optional(text) {
                return this.peek.text === text && (this.advance(), !0);
            }, ParserImplementation.prototype.expect = function expect(text) {
                this.peek.text === text ? this.advance() : this.error("Missing expected " + text);
            }, ParserImplementation.prototype.advance = function advance() {
                this.index++;
            }, ParserImplementation.prototype.error = function error(message) {
                var location = this.index < this.tokens.length ? "at column " + (this.tokens[this.index].index + 1) + " in" : "at the end of the expression";
                throw new Error("Parser Error: " + message + " " + location + " [" + this.input + "]");
            }, _createClass(ParserImplementation, [ {
                key: "peek",
                get: function get() {
                    return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
                }
            } ]), ParserImplementation;
        }(), mapProto = Map.prototype;
        exports.getMapObserver = _getMapObserver;
        var ModifyMapObserver = function(_ModifyCollectionObse2) {
            function ModifyMapObserver(taskQueue, map) {
                return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
            }
            return _inherits(ModifyMapObserver, _ModifyCollectionObse2), ModifyMapObserver.for = function _for(taskQueue, map) {
                return "__map_observer__" in map || Reflect.defineProperty(map, "__map_observer__", {
                    value: ModifyMapObserver.create(taskQueue, map),
                    enumerable: !1,
                    configurable: !1
                }), map.__map_observer__;
            }, ModifyMapObserver.create = function create(taskQueue, map) {
                var observer = new ModifyMapObserver(taskQueue, map), proto = mapProto;
                return proto.add === map.add && proto.delete === map.delete && proto.clear === map.clear || (proto = {
                    add: map.add,
                    delete: map.delete,
                    clear: map.clear
                }), map.set = function() {
                    var hasValue = map.has(arguments[0]), type = hasValue ? "update" : "add", oldValue = map.get(arguments[0]), methodCallResult = proto.set.apply(map, arguments);
                    return hasValue && oldValue === map.get(arguments[0]) || observer.addChangeRecord({
                        type: type,
                        object: map,
                        key: arguments[0],
                        oldValue: oldValue
                    }), methodCallResult;
                }, map.delete = function() {
                    var hasValue = map.has(arguments[0]), oldValue = map.get(arguments[0]), methodCallResult = proto.delete.apply(map, arguments);
                    return hasValue && observer.addChangeRecord({
                        type: "delete",
                        object: map,
                        key: arguments[0],
                        oldValue: oldValue
                    }), methodCallResult;
                }, map.clear = function() {
                    var methodCallResult = proto.clear.apply(map, arguments);
                    return observer.addChangeRecord({
                        type: "clear",
                        object: map
                    }), methodCallResult;
                }, observer;
            }, ModifyMapObserver;
        }(ModifyCollectionObserver), DelegateHandlerEntry = function() {
            function DelegateHandlerEntry(eventName) {
                this.eventName = eventName, this.count = 0;
            }
            return DelegateHandlerEntry.prototype.increment = function increment() {
                this.count++, 1 === this.count && _aureliaPal.DOM.addEventListener(this.eventName, handleDelegatedEvent, !1);
            }, DelegateHandlerEntry.prototype.decrement = function decrement() {
                this.count--, 0 === this.count && _aureliaPal.DOM.removeEventListener(this.eventName, handleDelegatedEvent);
            }, DelegateHandlerEntry;
        }(), DefaultEventStrategy = function() {
            function DefaultEventStrategy() {
                this.delegatedHandlers = {};
            }
            return DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, delegate) {
                var _this22 = this;
                if (delegate) {
                    var _ret = function() {
                        var delegatedHandlers = _this22.delegatedHandlers, handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent)), delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});
                        return handlerEntry.increment(), delegatedCallbacks[targetEvent] = callback, {
                            v: function v() {
                                handlerEntry.decrement(), delegatedCallbacks[targetEvent] = null;
                            }
                        };
                    }();
                    if ("object" === ("undefined" == typeof _ret ? "undefined" : _typeof(_ret))) return _ret.v;
                }
                return target.addEventListener(targetEvent, callback, !1), function() {
                    target.removeEventListener(targetEvent, callback);
                };
            }, DefaultEventStrategy;
        }(), EventManager = exports.EventManager = function() {
            function EventManager() {
                this.elementHandlerLookup = {}, this.eventStrategyLookup = {}, this.registerElementConfig({
                    tagName: "input",
                    properties: {
                        value: [ "change", "input" ],
                        checked: [ "change", "input" ],
                        files: [ "change", "input" ]
                    }
                }), this.registerElementConfig({
                    tagName: "textarea",
                    properties: {
                        value: [ "change", "input" ]
                    }
                }), this.registerElementConfig({
                    tagName: "select",
                    properties: {
                        value: [ "change" ]
                    }
                }), this.registerElementConfig({
                    tagName: "content editable",
                    properties: {
                        value: [ "change", "input", "blur", "keyup", "paste" ]
                    }
                }), this.registerElementConfig({
                    tagName: "scrollable element",
                    properties: {
                        scrollTop: [ "scroll" ],
                        scrollLeft: [ "scroll" ]
                    }
                }), this.defaultEventStrategy = new DefaultEventStrategy();
            }
            return EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
                var tagName = config.tagName.toLowerCase(), properties = config.properties, propertyName = void 0;
                this.elementHandlerLookup[tagName] = {};
                for (propertyName in properties) properties.hasOwnProperty(propertyName) && this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
            }, EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
                this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
            }, EventManager.prototype.createElementHandler = function createElementHandler(events) {
                return {
                    subscribe: function subscribe(target, callback) {
                        return events.forEach(function(changeEvent) {
                            target.addEventListener(changeEvent, callback, !1);
                        }), function() {
                            events.forEach(function(changeEvent) {
                                target.removeEventListener(changeEvent, callback);
                            });
                        };
                    }
                };
            }, EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
                this.elementHandlerLookup[tagName.toLowerCase()] = handler;
            }, EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
                this.eventStrategyLookup[eventName] = strategy;
            }, EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
                var tagName = void 0, lookup = this.elementHandlerLookup;
                if (target.tagName) {
                    if (tagName = target.tagName.toLowerCase(), lookup[tagName] && lookup[tagName][propertyName]) return lookup[tagName][propertyName];
                    if ("textContent" === propertyName || "innerHTML" === propertyName) return lookup["content editable"].value;
                    if ("scrollTop" === propertyName || "scrollLeft" === propertyName) return lookup["scrollable element"][propertyName];
                }
                return null;
            }, EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
                return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
            }, EventManager;
        }(), DirtyChecker = exports.DirtyChecker = function() {
            function DirtyChecker() {
                this.tracked = [], this.checkDelay = 120;
            }
            return DirtyChecker.prototype.addProperty = function addProperty(property) {
                var tracked = this.tracked;
                tracked.push(property), 1 === tracked.length && this.scheduleDirtyCheck();
            }, DirtyChecker.prototype.removeProperty = function removeProperty(property) {
                var tracked = this.tracked;
                tracked.splice(tracked.indexOf(property), 1);
            }, DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
                var _this23 = this;
                setTimeout(function() {
                    return _this23.check();
                }, this.checkDelay);
            }, DirtyChecker.prototype.check = function check() {
                for (var tracked = this.tracked, i = tracked.length; i--; ) {
                    var current = tracked[i];
                    current.isDirty() && current.call();
                }
                tracked.length && this.scheduleDirtyCheck();
            }, DirtyChecker;
        }(), DirtyCheckProperty = exports.DirtyCheckProperty = (_dec5 = subscriberCollection(), 
        _dec5(_class5 = function() {
            function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
                this.dirtyChecker = dirtyChecker, this.obj = obj, this.propertyName = propertyName;
            }
            return DirtyCheckProperty.prototype.getValue = function getValue() {
                return this.obj[this.propertyName];
            }, DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
                this.obj[this.propertyName] = newValue;
            }, DirtyCheckProperty.prototype.call = function call() {
                var oldValue = this.oldValue, newValue = this.getValue();
                this.callSubscribers(newValue, oldValue), this.oldValue = newValue;
            }, DirtyCheckProperty.prototype.isDirty = function isDirty() {
                return this.oldValue !== this.obj[this.propertyName];
            }, DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
                this.hasSubscribers() || (this.oldValue = this.getValue(), this.dirtyChecker.addProperty(this)), 
                this.addSubscriber(context, callable);
            }, DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable) && !this.hasSubscribers() && this.dirtyChecker.removeProperty(this);
            }, DirtyCheckProperty;
        }()) || _class5), logger = LogManager.getLogger("property-observation"), propertyAccessor = exports.propertyAccessor = {
            getValue: function getValue(obj, propertyName) {
                return obj[propertyName];
            },
            setValue: function setValue(value, obj, propertyName) {
                obj[propertyName] = value;
            }
        }, PrimitiveObserver = exports.PrimitiveObserver = function() {
            function PrimitiveObserver(primitive, propertyName) {
                this.doNotCache = !0, this.primitive = primitive, this.propertyName = propertyName;
            }
            return PrimitiveObserver.prototype.getValue = function getValue() {
                return this.primitive[this.propertyName];
            }, PrimitiveObserver.prototype.setValue = function setValue() {
                var type = _typeof(this.primitive);
                throw new Error("The " + this.propertyName + " property of a " + type + " (" + this.primitive + ") cannot be assigned.");
            }, PrimitiveObserver.prototype.subscribe = function subscribe() {}, PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {}, 
            PrimitiveObserver;
        }(), SetterObserver = exports.SetterObserver = (_dec6 = subscriberCollection(), 
        _dec6(_class7 = function() {
            function SetterObserver(taskQueue, obj, propertyName) {
                this.taskQueue = taskQueue, this.obj = obj, this.propertyName = propertyName, this.queued = !1, 
                this.observing = !1;
            }
            return SetterObserver.prototype.getValue = function getValue() {
                return this.obj[this.propertyName];
            }, SetterObserver.prototype.setValue = function setValue(newValue) {
                this.obj[this.propertyName] = newValue;
            }, SetterObserver.prototype.getterValue = function getterValue() {
                return this.currentValue;
            }, SetterObserver.prototype.setterValue = function setterValue(newValue) {
                var oldValue = this.currentValue;
                oldValue !== newValue && (this.queued || (this.oldValue = oldValue, this.queued = !0, 
                this.taskQueue.queueMicroTask(this)), this.currentValue = newValue);
            }, SetterObserver.prototype.call = function call() {
                var oldValue = this.oldValue, newValue = this.currentValue;
                this.queued = !1, this.callSubscribers(newValue, oldValue);
            }, SetterObserver.prototype.subscribe = function subscribe(context, callable) {
                this.observing || this.convertProperty(), this.addSubscriber(context, callable);
            }, SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable);
            }, SetterObserver.prototype.convertProperty = function convertProperty() {
                this.observing = !0, this.currentValue = this.obj[this.propertyName], this.setValue = this.setterValue, 
                this.getValue = this.getterValue, Reflect.defineProperty(this.obj, this.propertyName, {
                    configurable: !0,
                    enumerable: !(this.propertyName in this.obj) || this.obj.propertyIsEnumerable(this.propertyName),
                    get: this.getValue.bind(this),
                    set: this.setValue.bind(this)
                }) || logger.warn("Cannot observe property '" + this.propertyName + "' of object", this.obj);
            }, SetterObserver;
        }()) || _class7), XLinkAttributeObserver = exports.XLinkAttributeObserver = function() {
            function XLinkAttributeObserver(element, propertyName, attributeName) {
                this.element = element, this.propertyName = propertyName, this.attributeName = attributeName;
            }
            return XLinkAttributeObserver.prototype.getValue = function getValue() {
                return this.element.getAttributeNS("http://www.w3.org/1999/xlink", this.attributeName);
            }, XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
                return this.element.setAttributeNS("http://www.w3.org/1999/xlink", this.attributeName, newValue);
            }, XLinkAttributeObserver.prototype.subscribe = function subscribe() {
                throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
            }, XLinkAttributeObserver;
        }(), dataAttributeAccessor = exports.dataAttributeAccessor = {
            getValue: function getValue(obj, propertyName) {
                return obj.getAttribute(propertyName);
            },
            setValue: function setValue(value, obj, propertyName) {
                return obj.setAttribute(propertyName, value);
            }
        }, DataAttributeObserver = exports.DataAttributeObserver = function() {
            function DataAttributeObserver(element, propertyName) {
                this.element = element, this.propertyName = propertyName;
            }
            return DataAttributeObserver.prototype.getValue = function getValue() {
                return this.element.getAttribute(this.propertyName);
            }, DataAttributeObserver.prototype.setValue = function setValue(newValue) {
                return this.element.setAttribute(this.propertyName, newValue);
            }, DataAttributeObserver.prototype.subscribe = function subscribe() {
                throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
            }, DataAttributeObserver;
        }(), StyleObserver = exports.StyleObserver = function() {
            function StyleObserver(element, propertyName) {
                this.element = element, this.propertyName = propertyName, this.styles = null, this.version = 0;
            }
            return StyleObserver.prototype.getValue = function getValue() {
                return this.element.style.cssText;
            }, StyleObserver.prototype._setProperty = function _setProperty(style, value) {
                var priority = "";
                null !== value && void 0 !== value && "function" == typeof value.indexOf && value.indexOf("!important") !== -1 && (priority = "important", 
                value = value.replace("!important", "")), this.element.style.setProperty(style, value, priority);
            }, StyleObserver.prototype.setValue = function setValue(newValue) {
                var styles = this.styles || {}, style = void 0, version = this.version;
                if (null !== newValue && void 0 !== newValue) if (newValue instanceof Object) for (style in newValue) newValue.hasOwnProperty(style) && (styles[style] = version, 
                this._setProperty(style, newValue[style])); else if (newValue.length) for (var rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g, pair = void 0; null !== (pair = rx.exec(newValue)); ) style = pair[1], 
                style && (styles[style] = version, this._setProperty(style, pair[2]));
                if (this.styles = styles, this.version += 1, 0 !== version) {
                    version -= 1;
                    for (style in styles) styles.hasOwnProperty(style) && styles[style] === version && this.element.style.removeProperty(style);
                }
            }, StyleObserver.prototype.subscribe = function subscribe() {
                throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
            }, StyleObserver;
        }(), ValueAttributeObserver = exports.ValueAttributeObserver = (_dec7 = subscriberCollection(), 
        _dec7(_class8 = function() {
            function ValueAttributeObserver(element, propertyName, handler) {
                this.element = element, this.propertyName = propertyName, this.handler = handler, 
                "files" === propertyName && (this.setValue = function() {});
            }
            return ValueAttributeObserver.prototype.getValue = function getValue() {
                return this.element[this.propertyName];
            }, ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
                newValue = void 0 === newValue || null === newValue ? "" : newValue, this.element[this.propertyName] !== newValue && (this.element[this.propertyName] = newValue, 
                this.notify());
            }, ValueAttributeObserver.prototype.notify = function notify() {
                var oldValue = this.oldValue, newValue = this.getValue();
                this.callSubscribers(newValue, oldValue), this.oldValue = newValue;
            }, ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
                this.hasSubscribers() || (this.oldValue = this.getValue(), this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this))), 
                this.addSubscriber(context, callable);
            }, ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable) && !this.hasSubscribers() && (this.disposeHandler(), 
                this.disposeHandler = null);
            }, ValueAttributeObserver;
        }()) || _class8), checkedArrayContext = "CheckedObserver:array", checkedValueContext = "CheckedObserver:value", CheckedObserver = exports.CheckedObserver = (_dec8 = subscriberCollection(), 
        _dec8(_class9 = function() {
            function CheckedObserver(element, handler, observerLocator) {
                this.element = element, this.handler = handler, this.observerLocator = observerLocator;
            }
            return CheckedObserver.prototype.getValue = function getValue() {
                return this.value;
            }, CheckedObserver.prototype.setValue = function setValue(newValue) {
                this.value !== newValue && (this.arrayObserver && (this.arrayObserver.unsubscribe(checkedArrayContext, this), 
                this.arrayObserver = null), "checkbox" === this.element.type && Array.isArray(newValue) && (this.arrayObserver = this.observerLocator.getArrayObserver(newValue), 
                this.arrayObserver.subscribe(checkedArrayContext, this)), this.oldValue = this.value, 
                this.value = newValue, this.synchronizeElement(), this.notify(), this.initialSync || (this.initialSync = !0, 
                this.observerLocator.taskQueue.queueMicroTask(this)));
            }, CheckedObserver.prototype.call = function call(context, splices) {
                this.synchronizeElement(), this.valueObserver || (this.valueObserver = this.element.__observers__.model || this.element.__observers__.value, 
                this.valueObserver && this.valueObserver.subscribe(checkedValueContext, this));
            }, CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
                var value = this.value, element = this.element, elementValue = element.hasOwnProperty("model") ? element.model : element.value, isRadio = "radio" === element.type, matcher = element.matcher || function(a, b) {
                    return a === b;
                };
                element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === !0 || !isRadio && Array.isArray(value) && value.findIndex(function(item) {
                    return !!matcher(item, elementValue);
                }) !== -1;
            }, CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
                var value = this.value, element = this.element, elementValue = element.hasOwnProperty("model") ? element.model : element.value, index = void 0, matcher = element.matcher || function(a, b) {
                    return a === b;
                };
                if ("checkbox" === element.type) {
                    if (Array.isArray(value)) return index = value.findIndex(function(item) {
                        return !!matcher(item, elementValue);
                    }), void (element.checked && index === -1 ? value.push(elementValue) : element.checked || index === -1 || value.splice(index, 1));
                    value = element.checked;
                } else {
                    if (!element.checked) return;
                    value = elementValue;
                }
                this.oldValue = this.value, this.value = value, this.notify();
            }, CheckedObserver.prototype.notify = function notify() {
                var oldValue = this.oldValue, newValue = this.value;
                this.callSubscribers(newValue, oldValue);
            }, CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
                this.hasSubscribers() || (this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, !1))), 
                this.addSubscriber(context, callable);
            }, CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable) && !this.hasSubscribers() && (this.disposeHandler(), 
                this.disposeHandler = null);
            }, CheckedObserver.prototype.unbind = function unbind() {
                this.arrayObserver && (this.arrayObserver.unsubscribe(checkedArrayContext, this), 
                this.arrayObserver = null), this.valueObserver && this.valueObserver.unsubscribe(checkedValueContext, this);
            }, CheckedObserver;
        }()) || _class9), selectArrayContext = "SelectValueObserver:array", SelectValueObserver = exports.SelectValueObserver = (_dec9 = subscriberCollection(), 
        _dec9(_class10 = function() {
            function SelectValueObserver(element, handler, observerLocator) {
                this.element = element, this.handler = handler, this.observerLocator = observerLocator;
            }
            return SelectValueObserver.prototype.getValue = function getValue() {
                return this.value;
            }, SelectValueObserver.prototype.setValue = function setValue(newValue) {
                if (null !== newValue && void 0 !== newValue && this.element.multiple && !Array.isArray(newValue)) throw new Error("Only null or Array instances can be bound to a multi-select.");
                this.value !== newValue && (this.arrayObserver && (this.arrayObserver.unsubscribe(selectArrayContext, this), 
                this.arrayObserver = null), Array.isArray(newValue) && (this.arrayObserver = this.observerLocator.getArrayObserver(newValue), 
                this.arrayObserver.subscribe(selectArrayContext, this)), this.oldValue = this.value, 
                this.value = newValue, this.synchronizeOptions(), this.notify(), this.initialSync || (this.initialSync = !0, 
                this.observerLocator.taskQueue.queueMicroTask(this)));
            }, SelectValueObserver.prototype.call = function call(context, splices) {
                this.synchronizeOptions();
            }, SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
                var value = this.value, clear = void 0, isArray = void 0;
                null === value || void 0 === value ? clear = !0 : Array.isArray(value) && (isArray = !0);
                for (var options = this.element.options, i = options.length, matcher = this.element.matcher || function(a, b) {
                    return a === b;
                }, _loop = function _loop() {
                    var option = options.item(i);
                    if (clear) return option.selected = !1, "continue";
                    var optionValue = option.hasOwnProperty("model") ? option.model : option.value;
                    return isArray ? (option.selected = value.findIndex(function(item) {
                        return !!matcher(optionValue, item);
                    }) !== -1, "continue") : void (option.selected = !!matcher(optionValue, value));
                }; i--; ) {
                    var _ret2 = _loop();
                }
            }, SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
                for (var _this24 = this, options = this.element.options, count = 0, value = [], _i22 = 0, ii = options.length; _i22 < ii; _i22++) {
                    var _option = options.item(_i22);
                    _option.selected && (value.push(_option.hasOwnProperty("model") ? _option.model : _option.value), 
                    count++);
                }
                if (this.element.multiple) {
                    if (Array.isArray(this.value)) {
                        var _ret3 = function() {
                            for (var matcher = _this24.element.matcher || function(a, b) {
                                return a === b;
                            }, i = 0, _loop2 = function _loop2() {
                                var a = _this24.value[i];
                                value.findIndex(function(b) {
                                    return matcher(a, b);
                                }) === -1 ? _this24.value.splice(i, 1) : i++;
                            }; i < _this24.value.length; ) _loop2();
                            i = 0;
                            for (var _loop3 = function _loop3() {
                                var a = value[i];
                                _this24.value.findIndex(function(b) {
                                    return matcher(a, b);
                                }) === -1 && _this24.value.push(a), i++;
                            }; i < value.length; ) _loop3();
                            return {
                                v: void 0
                            };
                        }();
                        if ("object" === ("undefined" == typeof _ret3 ? "undefined" : _typeof(_ret3))) return _ret3.v;
                    }
                } else value = 0 === count ? null : value[0];
                value !== this.value && (this.oldValue = this.value, this.value = value, this.notify());
            }, SelectValueObserver.prototype.notify = function notify() {
                var oldValue = this.oldValue, newValue = this.value;
                this.callSubscribers(newValue, oldValue);
            }, SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
                this.hasSubscribers() || (this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, !1))), 
                this.addSubscriber(context, callable);
            }, SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
                this.removeSubscriber(context, callable) && !this.hasSubscribers() && (this.disposeHandler(), 
                this.disposeHandler = null);
            }, SelectValueObserver.prototype.bind = function bind() {
                var _this25 = this;
                this.domObserver = _aureliaPal.DOM.createMutationObserver(function() {
                    _this25.synchronizeOptions(), _this25.synchronizeValue();
                }), this.domObserver.observe(this.element, {
                    childList: !0,
                    subtree: !0
                });
            }, SelectValueObserver.prototype.unbind = function unbind() {
                this.domObserver.disconnect(), this.domObserver = null, this.arrayObserver && (this.arrayObserver.unsubscribe(selectArrayContext, this), 
                this.arrayObserver = null);
            }, SelectValueObserver;
        }()) || _class10), ClassObserver = exports.ClassObserver = function() {
            function ClassObserver(element) {
                this.element = element, this.doNotCache = !0, this.value = "", this.version = 0;
            }
            return ClassObserver.prototype.getValue = function getValue() {
                return this.value;
            }, ClassObserver.prototype.setValue = function setValue(newValue) {
                var nameIndex = this.nameIndex || {}, version = this.version, names = void 0, name = void 0;
                if (null !== newValue && void 0 !== newValue && newValue.length) {
                    names = newValue.split(/\s+/);
                    for (var _i23 = 0, length = names.length; _i23 < length; _i23++) name = names[_i23], 
                    "" !== name && (nameIndex[name] = version, this.element.classList.add(name));
                }
                if (this.value = newValue, this.nameIndex = nameIndex, this.version += 1, 0 !== version) {
                    version -= 1;
                    for (name in nameIndex) nameIndex.hasOwnProperty(name) && nameIndex[name] === version && this.element.classList.remove(name);
                }
            }, ClassObserver.prototype.subscribe = function subscribe() {
                throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
            }, ClassObserver;
        }(), ComputedExpression = exports.ComputedExpression = function(_Expression19) {
            function ComputedExpression(name, dependencies) {
                var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));
                return _this26.name = name, _this26.dependencies = dependencies, _this26.isAssignable = !0, 
                _this26;
            }
            return _inherits(ComputedExpression, _Expression19), ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
                return scope.bindingContext[this.name];
            }, ComputedExpression.prototype.assign = function assign(scope, value) {
                scope.bindingContext[this.name] = value;
            }, ComputedExpression.prototype.accept = function accept(visitor) {
                throw new Error("not implemented");
            }, ComputedExpression.prototype.connect = function connect(binding, scope) {
                for (var dependencies = this.dependencies, i = dependencies.length; i--; ) dependencies[i].connect(binding, scope);
            }, ComputedExpression;
        }(Expression), elements = exports.elements = {
            a: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "target", "transform", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            altGlyph: [ "class", "dx", "dy", "externalResourcesRequired", "format", "glyphRef", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            altGlyphDef: [ "id", "xml:base", "xml:lang", "xml:space" ],
            altGlyphItem: [ "id", "xml:base", "xml:lang", "xml:space" ],
            animate: [ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            animateColor: [ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            animateMotion: [ "accumulate", "additive", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keyPoints", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "origin", "path", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "rotate", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            animateTransform: [ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "type", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            circle: [ "class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "r", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            clipPath: [ "class", "clipPathUnits", "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            "color-profile": [ "id", "local", "name", "rendering-intent", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            cursor: [ "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            defs: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            desc: [ "class", "id", "style", "xml:base", "xml:lang", "xml:space" ],
            ellipse: [ "class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            feBlend: [ "class", "height", "id", "in", "in2", "mode", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feColorMatrix: [ "class", "height", "id", "in", "result", "style", "type", "values", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feComponentTransfer: [ "class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feComposite: [ "class", "height", "id", "in", "in2", "k1", "k2", "k3", "k4", "operator", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feConvolveMatrix: [ "bias", "class", "divisor", "edgeMode", "height", "id", "in", "kernelMatrix", "kernelUnitLength", "order", "preserveAlpha", "result", "style", "targetX", "targetY", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feDiffuseLighting: [ "class", "diffuseConstant", "height", "id", "in", "kernelUnitLength", "result", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feDisplacementMap: [ "class", "height", "id", "in", "in2", "result", "scale", "style", "width", "x", "xChannelSelector", "xml:base", "xml:lang", "xml:space", "y", "yChannelSelector" ],
            feDistantLight: [ "azimuth", "elevation", "id", "xml:base", "xml:lang", "xml:space" ],
            feFlood: [ "class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feFuncA: [ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ],
            feFuncB: [ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ],
            feFuncG: [ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ],
            feFuncR: [ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ],
            feGaussianBlur: [ "class", "height", "id", "in", "result", "stdDeviation", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feImage: [ "class", "externalResourcesRequired", "height", "id", "preserveAspectRatio", "result", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            feMerge: [ "class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feMergeNode: [ "id", "xml:base", "xml:lang", "xml:space" ],
            feMorphology: [ "class", "height", "id", "in", "operator", "radius", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feOffset: [ "class", "dx", "dy", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            fePointLight: [ "id", "x", "xml:base", "xml:lang", "xml:space", "y", "z" ],
            feSpecularLighting: [ "class", "height", "id", "in", "kernelUnitLength", "result", "specularConstant", "specularExponent", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feSpotLight: [ "id", "limitingConeAngle", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "x", "xml:base", "xml:lang", "xml:space", "y", "z" ],
            feTile: [ "class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            feTurbulence: [ "baseFrequency", "class", "height", "id", "numOctaves", "result", "seed", "stitchTiles", "style", "type", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            filter: [ "class", "externalResourcesRequired", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            font: [ "class", "externalResourcesRequired", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ],
            "font-face": [ "accent-height", "alphabetic", "ascent", "bbox", "cap-height", "descent", "font-family", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "hanging", "id", "ideographic", "mathematical", "overline-position", "overline-thickness", "panose-1", "slope", "stemh", "stemv", "strikethrough-position", "strikethrough-thickness", "underline-position", "underline-thickness", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "widths", "x-height", "xml:base", "xml:lang", "xml:space" ],
            "font-face-format": [ "id", "string", "xml:base", "xml:lang", "xml:space" ],
            "font-face-name": [ "id", "name", "xml:base", "xml:lang", "xml:space" ],
            "font-face-src": [ "id", "xml:base", "xml:lang", "xml:space" ],
            "font-face-uri": [ "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            foreignObject: [ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            g: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            glyph: [ "arabic-form", "class", "d", "glyph-name", "horiz-adv-x", "id", "lang", "orientation", "style", "unicode", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ],
            glyphRef: [ "class", "dx", "dy", "format", "glyphRef", "id", "style", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            hkern: [ "g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space" ],
            image: [ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            line: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "x1", "x2", "xml:base", "xml:lang", "xml:space", "y1", "y2" ],
            linearGradient: [ "class", "externalResourcesRequired", "gradientTransform", "gradientUnits", "id", "spreadMethod", "style", "x1", "x2", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y1", "y2" ],
            marker: [ "class", "externalResourcesRequired", "id", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "style", "viewBox", "xml:base", "xml:lang", "xml:space" ],
            mask: [ "class", "externalResourcesRequired", "height", "id", "maskContentUnits", "maskUnits", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            metadata: [ "id", "xml:base", "xml:lang", "xml:space" ],
            "missing-glyph": [ "class", "d", "horiz-adv-x", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ],
            mpath: [ "externalResourcesRequired", "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            path: [ "class", "d", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "pathLength", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            pattern: [ "class", "externalResourcesRequired", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            polygon: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            polyline: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            radialGradient: [ "class", "cx", "cy", "externalResourcesRequired", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "spreadMethod", "style", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            rect: [ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            script: [ "externalResourcesRequired", "id", "type", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            set: [ "attributeName", "attributeType", "begin", "dur", "end", "externalResourcesRequired", "fill", "id", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            stop: [ "class", "id", "offset", "style", "xml:base", "xml:lang", "xml:space" ],
            style: [ "id", "media", "title", "type", "xml:base", "xml:lang", "xml:space" ],
            svg: [ "baseProfile", "class", "contentScriptType", "contentStyleType", "externalResourcesRequired", "height", "id", "onabort", "onactivate", "onclick", "onerror", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onresize", "onscroll", "onunload", "onzoom", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "version", "viewBox", "width", "x", "xml:base", "xml:lang", "xml:space", "y", "zoomAndPan" ],
            switch: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ],
            symbol: [ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "style", "viewBox", "xml:base", "xml:lang", "xml:space" ],
            text: [ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "transform", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            textPath: [ "class", "externalResourcesRequired", "id", "lengthAdjust", "method", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "textLength", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ],
            title: [ "class", "id", "style", "xml:base", "xml:lang", "xml:space" ],
            tref: [ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            tspan: [ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xml:base", "xml:lang", "xml:space", "y" ],
            use: [ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ],
            view: [ "externalResourcesRequired", "id", "preserveAspectRatio", "viewBox", "viewTarget", "xml:base", "xml:lang", "xml:space", "zoomAndPan" ],
            vkern: [ "g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space" ]
        }, presentationElements = exports.presentationElements = {
            a: !0,
            altGlyph: !0,
            animate: !0,
            animateColor: !0,
            circle: !0,
            clipPath: !0,
            defs: !0,
            ellipse: !0,
            feBlend: !0,
            feColorMatrix: !0,
            feComponentTransfer: !0,
            feComposite: !0,
            feConvolveMatrix: !0,
            feDiffuseLighting: !0,
            feDisplacementMap: !0,
            feFlood: !0,
            feGaussianBlur: !0,
            feImage: !0,
            feMerge: !0,
            feMorphology: !0,
            feOffset: !0,
            feSpecularLighting: !0,
            feTile: !0,
            feTurbulence: !0,
            filter: !0,
            font: !0,
            foreignObject: !0,
            g: !0,
            glyph: !0,
            glyphRef: !0,
            image: !0,
            line: !0,
            linearGradient: !0,
            marker: !0,
            mask: !0,
            "missing-glyph": !0,
            path: !0,
            pattern: !0,
            polygon: !0,
            polyline: !0,
            radialGradient: !0,
            rect: !0,
            stop: !0,
            svg: !0,
            switch: !0,
            symbol: !0,
            text: !0,
            textPath: !0,
            tref: !0,
            tspan: !0,
            use: !0
        }, presentationAttributes = exports.presentationAttributes = {
            "alignment-baseline": !0,
            "baseline-shift": !0,
            "clip-path": !0,
            "clip-rule": !0,
            clip: !0,
            "color-interpolation-filters": !0,
            "color-interpolation": !0,
            "color-profile": !0,
            "color-rendering": !0,
            color: !0,
            cursor: !0,
            direction: !0,
            display: !0,
            "dominant-baseline": !0,
            "enable-background": !0,
            "fill-opacity": !0,
            "fill-rule": !0,
            fill: !0,
            filter: !0,
            "flood-color": !0,
            "flood-opacity": !0,
            "font-family": !0,
            "font-size-adjust": !0,
            "font-size": !0,
            "font-stretch": !0,
            "font-style": !0,
            "font-variant": !0,
            "font-weight": !0,
            "glyph-orientation-horizontal": !0,
            "glyph-orientation-vertical": !0,
            "image-rendering": !0,
            kerning: !0,
            "letter-spacing": !0,
            "lighting-color": !0,
            "marker-end": !0,
            "marker-mid": !0,
            "marker-start": !0,
            mask: !0,
            opacity: !0,
            overflow: !0,
            "pointer-events": !0,
            "shape-rendering": !0,
            "stop-color": !0,
            "stop-opacity": !0,
            "stroke-dasharray": !0,
            "stroke-dashoffset": !0,
            "stroke-linecap": !0,
            "stroke-linejoin": !0,
            "stroke-miterlimit": !0,
            "stroke-opacity": !0,
            "stroke-width": !0,
            stroke: !0,
            "text-anchor": !0,
            "text-decoration": !0,
            "text-rendering": !0,
            "unicode-bidi": !0,
            visibility: !0,
            "word-spacing": !0,
            "writing-mode": !0
        }, SVGAnalyzer = exports.SVGAnalyzer = function() {
            function SVGAnalyzer() {
                "altglyph" === createElement("<svg><altGlyph /></svg>").firstElementChild.nodeName && elements.altGlyph && (elements.altglyph = elements.altGlyph, 
                delete elements.altGlyph, elements.altglyphdef = elements.altGlyphDef, delete elements.altGlyphDef, 
                elements.altglyphitem = elements.altGlyphItem, delete elements.altGlyphItem, elements.glyphref = elements.glyphRef, 
                delete elements.glyphRef);
            }
            return SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
                return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
            }, SVGAnalyzer;
        }(), ObserverLocator = exports.ObserverLocator = (_temp = _class11 = function() {
            function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
                this.taskQueue = taskQueue, this.eventManager = eventManager, this.dirtyChecker = dirtyChecker, 
                this.svgAnalyzer = svgAnalyzer, this.parser = parser, this.adapters = [], this.logger = LogManager.getLogger("observer-locator");
            }
            return ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
                var observersLookup = obj.__observers__, observer = void 0;
                return observersLookup && propertyName in observersLookup ? observersLookup[propertyName] : (observer = this.createPropertyObserver(obj, propertyName), 
                observer.doNotCache || (void 0 === observersLookup && (observersLookup = this.getOrCreateObserversLookup(obj)), 
                observersLookup[propertyName] = observer), observer);
            }, ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
                return obj.__observers__ || this.createObserversLookup(obj);
            }, ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
                var value = {};
                return Reflect.defineProperty(obj, "__observers__", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: value
                }) || this.logger.warn("Cannot add observers to object", obj), value;
            }, ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
                this.adapters.push(adapter);
            }, ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
                for (var _i25 = 0, ii = this.adapters.length; _i25 < ii; _i25++) {
                    var adapter = this.adapters[_i25], observer = adapter.getObserver(obj, propertyName, descriptor);
                    if (observer) return observer;
                }
                return null;
            }, ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
                var descriptor = void 0, handler = void 0, xlinkResult = void 0;
                if (!(obj instanceof Object)) return new PrimitiveObserver(obj, propertyName);
                if (obj instanceof _aureliaPal.DOM.Element) {
                    if ("class" === propertyName) return new ClassObserver(obj);
                    if ("style" === propertyName || "css" === propertyName) return new StyleObserver(obj, propertyName);
                    if (handler = this.eventManager.getElementHandler(obj, propertyName), "value" === propertyName && "select" === obj.tagName.toLowerCase()) return new SelectValueObserver(obj, handler, this);
                    if ("checked" === propertyName && "input" === obj.tagName.toLowerCase()) return new CheckedObserver(obj, handler, this);
                    if (handler) return new ValueAttributeObserver(obj, propertyName, handler);
                    if (xlinkResult = /^xlink:(.+)$/.exec(propertyName)) return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
                    if ("role" === propertyName && (obj instanceof _aureliaPal.DOM.Element || obj instanceof _aureliaPal.DOM.SVGElement) || /^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) return new DataAttributeObserver(obj, propertyName);
                }
                if (descriptor = Object.getPropertyDescriptor(obj, propertyName), hasDeclaredDependencies(descriptor)) return createComputedObserver(obj, propertyName, descriptor, this);
                if (descriptor) {
                    var existingGetterOrSetter = descriptor.get || descriptor.set;
                    if (existingGetterOrSetter) {
                        if (existingGetterOrSetter.getObserver) return existingGetterOrSetter.getObserver(obj);
                        var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
                        return adapterObserver ? adapterObserver : new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
                    }
                }
                return obj instanceof Array ? "length" === propertyName ? this.getArrayObserver(obj).getLengthObserver() : new DirtyCheckProperty(this.dirtyChecker, obj, propertyName) : obj instanceof Map ? "size" === propertyName ? this.getMapObserver(obj).getLengthObserver() : new DirtyCheckProperty(this.dirtyChecker, obj, propertyName) : obj instanceof Set ? "size" === propertyName ? this.getSetObserver(obj).getLengthObserver() : new DirtyCheckProperty(this.dirtyChecker, obj, propertyName) : new SetterObserver(this.taskQueue, obj, propertyName);
            }, ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
                if (obj instanceof _aureliaPal.DOM.Element) {
                    if ("class" === propertyName || "style" === propertyName || "css" === propertyName || "value" === propertyName && ("input" === obj.tagName.toLowerCase() || "select" === obj.tagName.toLowerCase()) || "checked" === propertyName && "input" === obj.tagName.toLowerCase() || "model" === propertyName && "input" === obj.tagName.toLowerCase() || /^xlink:.+$/.exec(propertyName)) return this.getObserver(obj, propertyName);
                    if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) return dataAttributeAccessor;
                }
                return propertyAccessor;
            }, ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
                return _getArrayObserver(this.taskQueue, array);
            }, ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
                return _getMapObserver(this.taskQueue, map);
            }, ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
                return _getSetObserver(this.taskQueue, set);
            }, ObserverLocator;
        }(), _class11.inject = [ _aureliaTaskQueue.TaskQueue, EventManager, DirtyChecker, SVGAnalyzer, Parser ], 
        _temp), ObjectObservationAdapter = exports.ObjectObservationAdapter = function() {
            function ObjectObservationAdapter() {}
            return ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
                throw new Error("BindingAdapters must implement getObserver(object, propertyName).");
            }, ObjectObservationAdapter;
        }(), BindingExpression = exports.BindingExpression = function() {
            function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
                this.observerLocator = observerLocator, this.targetProperty = targetProperty, this.sourceExpression = sourceExpression, 
                this.mode = mode, this.lookupFunctions = lookupFunctions, this.attribute = attribute, 
                this.discrete = !1;
            }
            return BindingExpression.prototype.createBinding = function createBinding(target) {
                return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
            }, BindingExpression;
        }(), targetContext = "Binding:target", Binding = exports.Binding = (_dec10 = connectable(), 
        _dec10(_class12 = function() {
            function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
                this.observerLocator = observerLocator, this.sourceExpression = sourceExpression, 
                this.target = target, this.targetProperty = targetProperty, this.mode = mode, this.lookupFunctions = lookupFunctions;
            }
            return Binding.prototype.updateTarget = function updateTarget(value) {
                this.targetObserver.setValue(value, this.target, this.targetProperty);
            }, Binding.prototype.updateSource = function updateSource(value) {
                this.sourceExpression.assign(this.source, value, this.lookupFunctions);
            }, Binding.prototype.call = function call(context, newValue, oldValue) {
                if (this.isBound) {
                    if (context === sourceContext) return oldValue = this.targetObserver.getValue(this.target, this.targetProperty), 
                    newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), newValue !== oldValue && this.updateTarget(newValue), 
                    void (this.mode !== bindingMode.oneTime && (this._version++, this.sourceExpression.connect(this, this.source), 
                    this.unobserve(!1)));
                    if (context === targetContext) return void (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions) && this.updateSource(newValue));
                    throw new Error("Unexpected call context " + context);
                }
            }, Binding.prototype.bind = function bind(source) {
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.isBound = !0, this.source = source, this.sourceExpression.bind && this.sourceExpression.bind(this, source, this.lookupFunctions);
                var mode = this.mode;
                if (!this.targetObserver) {
                    var method = mode === bindingMode.twoWay ? "getObserver" : "getAccessor";
                    this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
                }
                "bind" in this.targetObserver && this.targetObserver.bind();
                var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
                this.updateTarget(value), mode === bindingMode.oneWay ? enqueueBindingConnect(this) : mode === bindingMode.twoWay && (this.sourceExpression.connect(this, source), 
                this.targetObserver.subscribe(targetContext, this));
            }, Binding.prototype.unbind = function unbind() {
                this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), 
                this.source = null, "unbind" in this.targetObserver && this.targetObserver.unbind(), 
                this.targetObserver.unsubscribe && this.targetObserver.unsubscribe(targetContext, this), 
                this.unobserve(!0));
            }, Binding.prototype.connect = function connect(evaluate) {
                if (this.isBound) {
                    if (evaluate) {
                        var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
                        this.updateTarget(value);
                    }
                    this.sourceExpression.connect(this, this.source);
                }
            }, Binding;
        }()) || _class12), CallExpression = exports.CallExpression = function() {
            function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
                this.observerLocator = observerLocator, this.targetProperty = targetProperty, this.sourceExpression = sourceExpression, 
                this.lookupFunctions = lookupFunctions;
            }
            return CallExpression.prototype.createBinding = function createBinding(target) {
                return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
            }, CallExpression;
        }(), Call = exports.Call = function() {
            function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
                this.sourceExpression = sourceExpression, this.target = target, this.targetProperty = observerLocator.getObserver(target, targetProperty), 
                this.lookupFunctions = lookupFunctions;
            }
            return Call.prototype.callSource = function callSource($event) {
                var overrideContext = this.source.overrideContext;
                Object.assign(overrideContext, $event), overrideContext.$event = $event;
                var mustEvaluate = !0, result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
                delete overrideContext.$event;
                for (var prop in $event) delete overrideContext[prop];
                return result;
            }, Call.prototype.bind = function bind(source) {
                var _this27 = this;
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.isBound = !0, this.source = source, this.sourceExpression.bind && this.sourceExpression.bind(this, source, this.lookupFunctions), 
                this.targetProperty.setValue(function($event) {
                    return _this27.callSource($event);
                });
            }, Call.prototype.unbind = function unbind() {
                this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), 
                this.source = null, this.targetProperty.setValue(null));
            }, Call;
        }(), ValueConverterResource = exports.ValueConverterResource = function() {
            function ValueConverterResource(name) {
                this.name = name;
            }
            return ValueConverterResource.convention = function convention(name) {
                if (name.endsWith("ValueConverter")) return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
            }, ValueConverterResource.prototype.initialize = function initialize(container, target) {
                this.instance = container.get(target);
            }, ValueConverterResource.prototype.register = function register(registry, name) {
                registry.registerValueConverter(name || this.name, this.instance);
            }, ValueConverterResource.prototype.load = function load(container, target) {}, 
            ValueConverterResource;
        }(), BindingBehaviorResource = exports.BindingBehaviorResource = function() {
            function BindingBehaviorResource(name) {
                this.name = name;
            }
            return BindingBehaviorResource.convention = function convention(name) {
                if (name.endsWith("BindingBehavior")) return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
            }, BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
                this.instance = container.get(target);
            }, BindingBehaviorResource.prototype.register = function register(registry, name) {
                registry.registerBindingBehavior(name || this.name, this.instance);
            }, BindingBehaviorResource.prototype.load = function load(container, target) {}, 
            BindingBehaviorResource;
        }(), ListenerExpression = exports.ListenerExpression = function() {
            function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault, lookupFunctions) {
                this.eventManager = eventManager, this.targetEvent = targetEvent, this.sourceExpression = sourceExpression, 
                this.delegate = delegate, this.discrete = !0, this.preventDefault = preventDefault, 
                this.lookupFunctions = lookupFunctions;
            }
            return ListenerExpression.prototype.createBinding = function createBinding(target) {
                return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
            }, ListenerExpression;
        }(), Listener = exports.Listener = function() {
            function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault, lookupFunctions) {
                this.eventManager = eventManager, this.targetEvent = targetEvent, this.delegate = delegate, 
                this.sourceExpression = sourceExpression, this.target = target, this.preventDefault = preventDefault, 
                this.lookupFunctions = lookupFunctions;
            }
            return Listener.prototype.callSource = function callSource(event) {
                var overrideContext = this.source.overrideContext;
                overrideContext.$event = event;
                var mustEvaluate = !0, result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
                return delete overrideContext.$event, result !== !0 && this.preventDefault && event.preventDefault(), 
                result;
            }, Listener.prototype.bind = function bind(source) {
                var _this28 = this;
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.isBound = !0, this.source = source, this.sourceExpression.bind && this.sourceExpression.bind(this, source, this.lookupFunctions), 
                this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function(event) {
                    return _this28.callSource(event);
                }, this.delegate);
            }, Listener.prototype.unbind = function unbind() {
                this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), 
                this.source = null, this._disposeListener(), this._disposeListener = null);
            }, Listener;
        }(), NameExpression = exports.NameExpression = function() {
            function NameExpression(sourceExpression, apiName, lookupFunctions) {
                this.sourceExpression = sourceExpression, this.apiName = apiName, this.lookupFunctions = lookupFunctions, 
                this.discrete = !0;
            }
            return NameExpression.prototype.createBinding = function createBinding(target) {
                return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
            }, NameExpression.locateAPI = function locateAPI(element, apiName) {
                switch (apiName) {
                  case "element":
                    return element;

                  case "controller":
                    return getAU(element).controller;

                  case "view-model":
                    return getAU(element).controller.viewModel;

                  case "view":
                    return getAU(element).controller.view;

                  default:
                    var target = getAU(element)[apiName];
                    if (void 0 === target) throw new Error('Attempted to reference "' + apiName + "\", but it was not found amongst the target's API.");
                    return target.viewModel;
                }
            }, NameExpression;
        }(), NameBinder = function() {
            function NameBinder(sourceExpression, target, lookupFunctions) {
                this.sourceExpression = sourceExpression, this.target = target, this.lookupFunctions = lookupFunctions;
            }
            return NameBinder.prototype.bind = function bind(source) {
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.isBound = !0, this.source = source, this.sourceExpression.bind && this.sourceExpression.bind(this, source, this.lookupFunctions), 
                this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
            }, NameBinder.prototype.unbind = function unbind() {
                this.isBound && (this.isBound = !1, this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target && this.sourceExpression.assign(this.source, null, this.lookupFunctions), 
                this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), 
                this.source = null);
            }, NameBinder;
        }(), LookupFunctions = {
            bindingBehaviors: function bindingBehaviors(name) {
                return null;
            },
            valueConverters: function valueConverters(name) {
                return null;
            }
        }, BindingEngine = exports.BindingEngine = (_temp2 = _class13 = function() {
            function BindingEngine(observerLocator, parser) {
                this.observerLocator = observerLocator, this.parser = parser;
            }
            return BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
                var mode = arguments.length <= 2 || void 0 === arguments[2] ? bindingMode.oneWay : arguments[2], lookupFunctions = arguments.length <= 3 || void 0 === arguments[3] ? LookupFunctions : arguments[3];
                return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
            }, BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
                var _this29 = this;
                return {
                    subscribe: function subscribe(callback) {
                        var observer = _this29.observerLocator.getObserver(obj, propertyName);
                        return observer.subscribe(callback), {
                            dispose: function dispose() {
                                return observer.unsubscribe(callback);
                            }
                        };
                    }
                };
            }, BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
                var _this30 = this;
                return {
                    subscribe: function subscribe(callback) {
                        var observer = void 0;
                        if (collection instanceof Array) observer = _this30.observerLocator.getArrayObserver(collection); else if (collection instanceof Map) observer = _this30.observerLocator.getMapObserver(collection); else {
                            if (!(collection instanceof Set)) throw new Error("collection must be an instance of Array, Map or Set.");
                            observer = _this30.observerLocator.getSetObserver(collection);
                        }
                        return observer.subscribe(callback), {
                            dispose: function dispose() {
                                return observer.unsubscribe(callback);
                            }
                        };
                    }
                };
            }, BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
                var scope = {
                    bindingContext: bindingContext,
                    overrideContext: createOverrideContext(bindingContext)
                };
                return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
            }, BindingEngine.prototype.parseExpression = function parseExpression(expression) {
                return this.parser.parse(expression);
            }, BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
                this.observerLocator.addAdapter(adapter);
            }, BindingEngine;
        }(), _class13.inject = [ ObserverLocator, Parser ], _temp2), setProto = Set.prototype;
        exports.getSetObserver = _getSetObserver;
        var ModifySetObserver = function(_ModifyCollectionObse3) {
            function ModifySetObserver(taskQueue, set) {
                return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
            }
            return _inherits(ModifySetObserver, _ModifyCollectionObse3), ModifySetObserver.for = function _for(taskQueue, set) {
                return "__set_observer__" in set || Reflect.defineProperty(set, "__set_observer__", {
                    value: ModifySetObserver.create(taskQueue, set),
                    enumerable: !1,
                    configurable: !1
                }), set.__set_observer__;
            }, ModifySetObserver.create = function create(taskQueue, set) {
                var observer = new ModifySetObserver(taskQueue, set), proto = setProto;
                return proto.add === set.add && proto.delete === set.delete && proto.clear === set.clear || (proto = {
                    add: set.add,
                    delete: set.delete,
                    clear: set.clear
                }), set.add = function() {
                    var type = "add", oldSize = set.size, methodCallResult = proto.add.apply(set, arguments), hasValue = set.size === oldSize;
                    return hasValue || observer.addChangeRecord({
                        type: type,
                        object: set,
                        value: Array.from(set).pop()
                    }), methodCallResult;
                }, set.delete = function() {
                    var hasValue = set.has(arguments[0]), methodCallResult = proto.delete.apply(set, arguments);
                    return hasValue && observer.addChangeRecord({
                        type: "delete",
                        object: set,
                        value: arguments[0]
                    }), methodCallResult;
                }, set.clear = function() {
                    var methodCallResult = proto.clear.apply(set, arguments);
                    return observer.addChangeRecord({
                        type: "clear",
                        object: set
                    }), methodCallResult;
                }, observer;
            }, ModifySetObserver;
        }(ModifyCollectionObserver);
    },
    /***/
    20: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.MapRepeatStrategy = void 0;
            var _repeatUtilities = __webpack_require__(8), MapRepeatStrategy = exports.MapRepeatStrategy = function() {
                function MapRepeatStrategy() {}
                return MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
                    return observerLocator.getMapObserver(items);
                }, MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
                    var _this = this, removePromise = repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                    return removePromise instanceof Promise ? void removePromise.then(function() {
                        return _this._standardProcessItems(repeat, items);
                    }) : void this._standardProcessItems(repeat, items);
                }, MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
                    var index = 0, overrideContext = void 0;
                    items.forEach(function(value, key) {
                        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size, key), 
                        repeat.addView(overrideContext.bindingContext, overrideContext), ++index;
                    });
                }, MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
                    var key = void 0, i = void 0, ii = void 0, overrideContext = void 0, removeIndex = void 0, record = void 0, rmPromises = [], viewOrPromise = void 0;
                    for (i = 0, ii = records.length; i < ii; ++i) switch (record = records[i], key = record.key, 
                    record.type) {
                      case "update":
                        removeIndex = this._getViewIndexByKey(repeat, key), viewOrPromise = repeat.removeView(removeIndex, !0, !repeat.viewsRequireLifecycle), 
                        viewOrPromise instanceof Promise && rmPromises.push(viewOrPromise), overrideContext = (0, 
                        _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), removeIndex, map.size, key), 
                        repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
                        break;

                      case "add":
                        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), map.size - 1, map.size, key), 
                        repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
                        break;

                      case "delete":
                        if (void 0 === record.oldValue) return;
                        removeIndex = this._getViewIndexByKey(repeat, key), viewOrPromise = repeat.removeView(removeIndex, !0, !repeat.viewsRequireLifecycle), 
                        viewOrPromise instanceof Promise && rmPromises.push(viewOrPromise);
                        break;

                      case "clear":
                        repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                        break;

                      default:
                        continue;
                    }
                    rmPromises.length > 0 ? Promise.all(rmPromises).then(function() {
                        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
                    }) : (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
                }, MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
                    var i = void 0, ii = void 0, child = void 0;
                    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) if (child = repeat.view(i), child.bindingContext[repeat.key] === key) return i;
                }, MapRepeatStrategy;
            }();
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    21: /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var NullRepeatStrategy = exports.NullRepeatStrategy = function() {
            function NullRepeatStrategy() {}
            return NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
                repeat.removeAllViews(!0);
            }, NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {}, 
            NullRepeatStrategy;
        }();
    },
    /***/
    22: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.NumberRepeatStrategy = void 0;
            var _repeatUtilities = __webpack_require__(8), NumberRepeatStrategy = exports.NumberRepeatStrategy = function() {
                function NumberRepeatStrategy() {}
                return NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
                    return null;
                }, NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
                    var _this = this, removePromise = repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                    return removePromise instanceof Promise ? void removePromise.then(function() {
                        return _this._standardProcessItems(repeat, value);
                    }) : void this._standardProcessItems(repeat, value);
                }, NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
                    var childrenLength = repeat.viewCount(), i = void 0, ii = void 0, overrideContext = void 0, viewsToRemove = void 0;
                    if (value = Math.floor(value), viewsToRemove = childrenLength - value, viewsToRemove > 0) for (viewsToRemove > childrenLength && (viewsToRemove = childrenLength), 
                    i = 0, ii = viewsToRemove; i < ii; ++i) repeat.removeView(childrenLength - (i + 1), !0, !repeat.viewsRequireLifecycle); else {
                        for (i = childrenLength, ii = value; i < ii; ++i) overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, i, i, ii), 
                        repeat.addView(overrideContext.bindingContext, overrideContext);
                        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
                    }
                }, NumberRepeatStrategy;
            }();
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    23: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.RepeatStrategyLocator = void 0;
        var _nullRepeatStrategy = __webpack_require__(21), _arrayRepeatStrategy = __webpack_require__(17), _mapRepeatStrategy = __webpack_require__(20), _setRepeatStrategy = __webpack_require__(24), _numberRepeatStrategy = __webpack_require__(22), RepeatStrategyLocator = exports.RepeatStrategyLocator = function() {
            function RepeatStrategyLocator() {
                this.matchers = [], this.strategies = [], this.addStrategy(function(items) {
                    return null === items || void 0 === items;
                }, new _nullRepeatStrategy.NullRepeatStrategy()), this.addStrategy(function(items) {
                    return items instanceof Array;
                }, new _arrayRepeatStrategy.ArrayRepeatStrategy()), this.addStrategy(function(items) {
                    return items instanceof Map;
                }, new _mapRepeatStrategy.MapRepeatStrategy()), this.addStrategy(function(items) {
                    return items instanceof Set;
                }, new _setRepeatStrategy.SetRepeatStrategy()), this.addStrategy(function(items) {
                    return "number" == typeof items;
                }, new _numberRepeatStrategy.NumberRepeatStrategy());
            }
            return RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
                this.matchers.push(matcher), this.strategies.push(strategy);
            }, RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
                for (var matchers = this.matchers, i = 0, ii = matchers.length; i < ii; ++i) if (matchers[i](items)) return this.strategies[i];
                return null;
            }, RepeatStrategyLocator;
        }();
    },
    /***/
    24: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.SetRepeatStrategy = void 0;
            var _repeatUtilities = __webpack_require__(8), SetRepeatStrategy = exports.SetRepeatStrategy = function() {
                function SetRepeatStrategy() {}
                return SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
                    return observerLocator.getSetObserver(items);
                }, SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
                    var _this = this, removePromise = repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                    return removePromise instanceof Promise ? void removePromise.then(function() {
                        return _this._standardProcessItems(repeat, items);
                    }) : void this._standardProcessItems(repeat, items);
                }, SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
                    var index = 0, overrideContext = void 0;
                    items.forEach(function(value) {
                        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size), 
                        repeat.addView(overrideContext.bindingContext, overrideContext), ++index;
                    });
                }, SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
                    var value = void 0, i = void 0, ii = void 0, overrideContext = void 0, removeIndex = void 0, record = void 0, rmPromises = [], viewOrPromise = void 0;
                    for (i = 0, ii = records.length; i < ii; ++i) switch (record = records[i], value = record.value, 
                    record.type) {
                      case "add":
                        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, set.size - 1, set.size), 
                        repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
                        break;

                      case "delete":
                        removeIndex = this._getViewIndexByValue(repeat, value), viewOrPromise = repeat.removeView(removeIndex, !0, !repeat.viewsRequireLifecycle), 
                        viewOrPromise instanceof Promise && rmPromises.push(viewOrPromise);
                        break;

                      case "clear":
                        repeat.removeAllViews(!0, !repeat.viewsRequireLifecycle);
                        break;

                      default:
                        continue;
                    }
                    rmPromises.length > 0 ? Promise.all(rmPromises).then(function() {
                        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
                    }) : (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
                }, SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
                    var i = void 0, ii = void 0, child = void 0;
                    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) if (child = repeat.view(i), child.bindingContext[repeat.local] === value) return i;
                }, SetRepeatStrategy;
            }();
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    28: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function fixupCSSUrls(address, css) {
            if ("string" != typeof css) throw new Error("Failed loading required CSS file: " + address);
            return css.replace(cssUrlMatcher, function(match, p1) {
                var quote = p1.charAt(0);
                return "'" !== quote && '"' !== quote || (p1 = p1.substr(1, p1.length - 2)), "url('" + (0, 
                _aureliaPath.relativeToFile)(p1, address) + "')";
            });
        }
        function _createCSSResource(address) {
            var _dec, _class, ViewCSS = (_dec = (0, _aureliaTemplating.resource)(new CSSResource(address)), 
            _dec(_class = function(_CSSViewEngineHooks) {
                function ViewCSS() {
                    return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
                }
                return _inherits(ViewCSS, _CSSViewEngineHooks), ViewCSS;
            }(CSSViewEngineHooks)) || _class);
            return ViewCSS;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports._createCSSResource = _createCSSResource;
        var _aureliaTemplating = __webpack_require__(1), _aureliaLoader = __webpack_require__(9), _aureliaDependencyInjection = __webpack_require__(3), _aureliaPath = __webpack_require__(6), _aureliaPal = __webpack_require__(0), cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi, CSSResource = function() {
            function CSSResource(address) {
                this.address = address, this._scoped = null, this._global = !1, this._alreadyGloballyInjected = !1;
            }
            return CSSResource.prototype.initialize = function initialize(container, target) {
                this._scoped = new target(this);
            }, CSSResource.prototype.register = function register(registry, name) {
                "scoped" === name ? registry.registerViewEngineHooks(this._scoped) : this._global = !0;
            }, CSSResource.prototype.load = function load(container) {
                var _this = this;
                return container.get(_aureliaLoader.Loader).loadText(this.address).catch(function(err) {
                    return null;
                }).then(function(text) {
                    text = fixupCSSUrls(_this.address, text), _this._scoped.css = text, _this._global && (_this._alreadyGloballyInjected = !0, 
                    _aureliaPal.DOM.injectStyles(text));
                });
            }, CSSResource;
        }(), CSSViewEngineHooks = function() {
            function CSSViewEngineHooks(owner) {
                this.owner = owner, this.css = null;
            }
            return CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
                if (instruction.targetShadowDOM) _aureliaPal.DOM.injectStyles(this.css, content, !0); else if (_aureliaPal.FEATURE.scopedCSS) {
                    var styleNode = _aureliaPal.DOM.injectStyles(this.css, content, !0);
                    styleNode.setAttribute("scoped", "scoped");
                } else this.owner._alreadyGloballyInjected || (_aureliaPal.DOM.injectStyles(this.css), 
                this.owner._alreadyGloballyInjected = !0);
            }, CSSViewEngineHooks;
        }();
    },
    /***/
    29: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _createDynamicElement(name, viewUrl, bindableNames) {
            for (var _dec, _dec2, _class, DynamicElement = (_dec = (0, _aureliaTemplating.customElement)(name), 
            _dec2 = (0, _aureliaTemplating.useView)(viewUrl), _dec(_class = _dec2(_class = function() {
                function DynamicElement() {}
                return DynamicElement.prototype.bind = function bind(bindingContext) {
                    this.$parent = bindingContext;
                }, DynamicElement;
            }()) || _class) || _class), i = 0, ii = bindableNames.length; i < ii; ++i) (0, _aureliaTemplating.bindable)(bindableNames[i])(DynamicElement);
            return DynamicElement;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports._createDynamicElement = _createDynamicElement;
        var _aureliaTemplating = __webpack_require__(1);
    },
    /***/
    3: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function getDecoratorDependencies(target, name) {
            var dependencies = target.inject;
            if ("function" == typeof dependencies) throw new Error("Decorator " + name + ' cannot be used with "inject()".  Please use an array instead.');
            return dependencies || (dependencies = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target).slice(), 
            target.inject = dependencies), dependencies;
        }
        function lazy(keyValue) {
            return function(target, key, index) {
                var params = getDecoratorDependencies(target, "lazy");
                params[index] = Lazy.of(keyValue);
            };
        }
        function all(keyValue) {
            return function(target, key, index) {
                var params = getDecoratorDependencies(target, "all");
                params[index] = All.of(keyValue);
            };
        }
        function optional() {
            var checkParentOrTarget = arguments.length <= 0 || void 0 === arguments[0] || arguments[0], deco = function deco(checkParent) {
                return function(target, key, index) {
                    var params = getDecoratorDependencies(target, "optional");
                    params[index] = Optional.of(params[index], checkParent);
                };
            };
            return deco("boolean" == typeof checkParentOrTarget ? checkParentOrTarget : !0);
        }
        function parent(target, key, index) {
            var params = getDecoratorDependencies(target, "parent");
            params[index] = Parent.of(params[index]);
        }
        function factory(keyValue, asValue) {
            return function(target, key, index) {
                var params = getDecoratorDependencies(target, "factory"), factory = Factory.of(keyValue);
                params[index] = asValue ? factory.as(asValue) : factory;
            };
        }
        function newInstance(asKeyOrTarget) {
            for (var _len4 = arguments.length, dynamicDependencies = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) dynamicDependencies[_key4 - 1] = arguments[_key4];
            var deco = function deco(asKey) {
                return function(target, key, index) {
                    var params = getDecoratorDependencies(target, "newInstance");
                    params[index] = NewInstance.of.apply(NewInstance, [ params[index] ].concat(dynamicDependencies)), 
                    asKey && params[index].as(asKey);
                };
            };
            return arguments.length >= 1 ? deco(asKeyOrTarget) : deco();
        }
        function invoker(value) {
            return function(target) {
                _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, value, target);
            };
        }
        function invokeAsFactory(potentialTarget) {
            var deco = function deco(target) {
                _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, FactoryInvoker.instance, target);
            };
            return potentialTarget ? deco(potentialTarget) : deco;
        }
        function registration(value) {
            return function(target) {
                _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.registration, value, target);
            };
        }
        function transient(key) {
            return registration(new TransientRegistration(key));
        }
        function singleton(keyOrRegisterInChild) {
            var registerInChild = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
            return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
        }
        function validateKey(key) {
            if (null === key || void 0 === key) throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
        }
        function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
            for (var i = staticDependencies.length, args = new Array(i); i--; ) args[i] = container.get(staticDependencies[i]);
            return void 0 !== dynamicDependencies && (args = args.concat(dynamicDependencies)), 
            Reflect.construct(fn, args);
        }
        function getDependencies(f) {
            return f.hasOwnProperty("inject") ? "function" == typeof f.inject ? f.inject() : f.inject : [];
        }
        function autoinject(potentialTarget) {
            var deco = function deco(target) {
                var previousInject = target.inject, autoInject = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target) || _emptyParameters;
                if (previousInject) for (var i = 0; i < autoInject.length; i++) if (previousInject[i] && previousInject[i] !== autoInject[i]) {
                    var prevIndex = previousInject.indexOf(autoInject[i]);
                    prevIndex > -1 && previousInject.splice(prevIndex, 1), previousInject.splice(prevIndex > -1 && prevIndex < i ? i - 1 : i, 0, autoInject[i]);
                } else previousInject[i] || (previousInject[i] = autoInject[i]); else target.inject = autoInject;
            };
            return potentialTarget ? deco(potentialTarget) : deco;
        }
        function inject() {
            for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) rest[_key5] = arguments[_key5];
            return function(target, key, descriptor) {
                if ("number" == typeof descriptor && 1 === rest.length) {
                    var params = target.inject;
                    if ("function" == typeof params) throw new Error('Decorator inject cannot be used with "inject()".  Please use an array instead.');
                    return params || (params = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target).slice(), 
                    target.inject = params), void (params[descriptor] = rest[0]);
                }
                if (descriptor) {
                    var _fn = descriptor.value;
                    _fn.inject = rest;
                } else target.inject = rest;
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Container = exports.InvocationHandler = exports._emptyParameters = exports.SingletonRegistration = exports.TransientRegistration = exports.FactoryInvoker = exports.NewInstance = exports.Factory = exports.StrategyResolver = exports.Parent = exports.Optional = exports.All = exports.Lazy = exports.resolver = void 0;
        var _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _class7, _dec5, _class9, _dec6, _class11, _dec7, _class13, _classInvokers;
        exports.getDecoratorDependencies = getDecoratorDependencies, exports.lazy = lazy, 
        exports.all = all, exports.optional = optional, exports.parent = parent, exports.factory = factory, 
        exports.newInstance = newInstance, exports.invoker = invoker, exports.invokeAsFactory = invokeAsFactory, 
        exports.registration = registration, exports.transient = transient, exports.singleton = singleton, 
        exports.autoinject = autoinject, exports.inject = inject;
        var _aureliaMetadata = __webpack_require__(4), _aureliaPal = __webpack_require__(0), resolver = exports.resolver = _aureliaMetadata.protocol.create("aurelia:resolver", function(target) {
            return "function" == typeof target.get || "Resolvers must implement: get(container: Container, key: any): any";
        }), Lazy = exports.Lazy = (_dec = resolver(), _dec(_class = function() {
            function Lazy(key) {
                this._key = key;
            }
            return Lazy.prototype.get = function get(container) {
                var _this = this;
                return function() {
                    return container.get(_this._key);
                };
            }, Lazy.of = function of(key) {
                return new Lazy(key);
            }, Lazy;
        }()) || _class), All = exports.All = (_dec2 = resolver(), _dec2(_class3 = function() {
            function All(key) {
                this._key = key;
            }
            return All.prototype.get = function get(container) {
                return container.getAll(this._key);
            }, All.of = function of(key) {
                return new All(key);
            }, All;
        }()) || _class3), Optional = exports.Optional = (_dec3 = resolver(), _dec3(_class5 = function() {
            function Optional(key) {
                var checkParent = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                this._key = key, this._checkParent = checkParent;
            }
            return Optional.prototype.get = function get(container) {
                return container.hasResolver(this._key, this._checkParent) ? container.get(this._key) : null;
            }, Optional.of = function of(key) {
                var checkParent = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                return new Optional(key, checkParent);
            }, Optional;
        }()) || _class5), Parent = exports.Parent = (_dec4 = resolver(), _dec4(_class7 = function() {
            function Parent(key) {
                this._key = key;
            }
            return Parent.prototype.get = function get(container) {
                return container.parent ? container.parent.get(this._key) : null;
            }, Parent.of = function of(key) {
                return new Parent(key);
            }, Parent;
        }()) || _class7), StrategyResolver = exports.StrategyResolver = (_dec5 = resolver(), 
        _dec5(_class9 = function() {
            function StrategyResolver(strategy, state) {
                this.strategy = strategy, this.state = state;
            }
            return StrategyResolver.prototype.get = function get(container, key) {
                switch (this.strategy) {
                  case 0:
                    return this.state;

                  case 1:
                    var singleton = container.invoke(this.state);
                    return this.state = singleton, this.strategy = 0, singleton;

                  case 2:
                    return container.invoke(this.state);

                  case 3:
                    return this.state(container, key, this);

                  case 4:
                    return this.state[0].get(container, key);

                  case 5:
                    return container.get(this.state);

                  default:
                    throw new Error("Invalid strategy: " + this.strategy);
                }
            }, StrategyResolver;
        }()) || _class9), Factory = exports.Factory = (_dec6 = resolver(), _dec6(_class11 = function() {
            function Factory(key) {
                this._key = key;
            }
            return Factory.prototype.get = function get(container) {
                var _this2 = this;
                return function() {
                    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) rest[_key] = arguments[_key];
                    return container.invoke(_this2._key, rest);
                };
            }, Factory.of = function of(key) {
                return new Factory(key);
            }, Factory;
        }()) || _class11), NewInstance = exports.NewInstance = (_dec7 = resolver(), _dec7(_class13 = function() {
            function NewInstance(key) {
                this.key = key, this.asKey = key;
                for (var _len2 = arguments.length, dynamicDependencies = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) dynamicDependencies[_key2 - 1] = arguments[_key2];
                this.dynamicDependencies = dynamicDependencies;
            }
            return NewInstance.prototype.get = function get(container) {
                var dynamicDependencies = this.dynamicDependencies.length > 0 ? this.dynamicDependencies.map(function(dependency) {
                    return dependency["protocol:aurelia:resolver"] ? dependency.get(container) : container.get(dependency);
                }) : void 0, instance = container.invoke(this.key, dynamicDependencies);
                return container.registerInstance(this.asKey, instance), instance;
            }, NewInstance.prototype.as = function as(key) {
                return this.asKey = key, this;
            }, NewInstance.of = function of(key) {
                for (var _len3 = arguments.length, dynamicDependencies = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) dynamicDependencies[_key3 - 1] = arguments[_key3];
                return new (Function.prototype.bind.apply(NewInstance, [ null ].concat([ key ], dynamicDependencies)))();
            }, NewInstance;
        }()) || _class13), FactoryInvoker = exports.FactoryInvoker = function() {
            function FactoryInvoker() {}
            return FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
                for (var i = dependencies.length, args = new Array(i); i--; ) args[i] = container.get(dependencies[i]);
                return fn.apply(void 0, args);
            }, FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
                for (var i = staticDependencies.length, args = new Array(i); i--; ) args[i] = container.get(staticDependencies[i]);
                return void 0 !== dynamicDependencies && (args = args.concat(dynamicDependencies)), 
                fn.apply(void 0, args);
            }, FactoryInvoker;
        }();
        FactoryInvoker.instance = new FactoryInvoker();
        var TransientRegistration = exports.TransientRegistration = function() {
            function TransientRegistration(key) {
                this._key = key;
            }
            return TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
                return container.registerTransient(this._key || key, fn);
            }, TransientRegistration;
        }(), SingletonRegistration = exports.SingletonRegistration = function() {
            function SingletonRegistration(keyOrRegisterInChild) {
                var registerInChild = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                "boolean" == typeof keyOrRegisterInChild ? this._registerInChild = keyOrRegisterInChild : (this._key = keyOrRegisterInChild, 
                this._registerInChild = registerInChild);
            }
            return SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
                return this._registerInChild ? container.registerSingleton(this._key || key, fn) : container.root.registerSingleton(this._key || key, fn);
            }, SingletonRegistration;
        }(), _emptyParameters = exports._emptyParameters = Object.freeze([]);
        _aureliaMetadata.metadata.registration = "aurelia:registration", _aureliaMetadata.metadata.invoker = "aurelia:invoker";
        var resolverDecorates = resolver.decorates, InvocationHandler = exports.InvocationHandler = function() {
            function InvocationHandler(fn, invoker, dependencies) {
                this.fn = fn, this.invoker = invoker, this.dependencies = dependencies;
            }
            return InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
                return void 0 !== dynamicDependencies ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
            }, InvocationHandler;
        }(), classInvokers = (_classInvokers = {}, _classInvokers[0] = {
            invoke: function invoke(container, Type) {
                return new Type();
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers[1] = {
            invoke: function invoke(container, Type, deps) {
                return new Type(container.get(deps[0]));
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers[2] = {
            invoke: function invoke(container, Type, deps) {
                return new Type(container.get(deps[0]), container.get(deps[1]));
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers[3] = {
            invoke: function invoke(container, Type, deps) {
                return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers[4] = {
            invoke: function invoke(container, Type, deps) {
                return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers[5] = {
            invoke: function invoke(container, Type, deps) {
                return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
            },
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers.fallback = {
            invoke: invokeWithDynamicDependencies,
            invokeWithDynamicDependencies: invokeWithDynamicDependencies
        }, _classInvokers), Container = exports.Container = function() {
            function Container(configuration) {
                void 0 === configuration && (configuration = {}), this._configuration = configuration, 
                this._onHandlerCreated = configuration.onHandlerCreated, this._handlers = configuration.handlers || (configuration.handlers = new Map()), 
                this._resolvers = new Map(), this.root = this, this.parent = null;
            }
            return Container.prototype.makeGlobal = function makeGlobal() {
                return Container.instance = this, this;
            }, Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
                this._onHandlerCreated = onHandlerCreated, this._configuration.onHandlerCreated = onHandlerCreated;
            }, Container.prototype.registerInstance = function registerInstance(key, instance) {
                return this.registerResolver(key, new StrategyResolver(0, void 0 === instance ? key : instance));
            }, Container.prototype.registerSingleton = function registerSingleton(key, fn) {
                return this.registerResolver(key, new StrategyResolver(1, void 0 === fn ? key : fn));
            }, Container.prototype.registerTransient = function registerTransient(key, fn) {
                return this.registerResolver(key, new StrategyResolver(2, void 0 === fn ? key : fn));
            }, Container.prototype.registerHandler = function registerHandler(key, handler) {
                return this.registerResolver(key, new StrategyResolver(3, handler));
            }, Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
                return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
            }, Container.prototype.registerResolver = function registerResolver(key, resolver) {
                validateKey(key);
                var allResolvers = this._resolvers, result = allResolvers.get(key);
                return void 0 === result ? allResolvers.set(key, resolver) : 4 === result.strategy ? result.state.push(resolver) : allResolvers.set(key, new StrategyResolver(4, [ result, resolver ])), 
                resolver;
            }, Container.prototype.autoRegister = function autoRegister(key, fn) {
                if (fn = void 0 === fn ? key : fn, "function" == typeof fn) {
                    var _registration = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.registration, fn);
                    return void 0 === _registration ? this.registerResolver(key, new StrategyResolver(1, fn)) : _registration.registerResolver(this, key, fn);
                }
                return this.registerResolver(key, new StrategyResolver(0, fn));
            }, Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
                for (var i = fns.length; i--; ) this.autoRegister(fns[i]);
            }, Container.prototype.unregister = function unregister(key) {
                this._resolvers.delete(key);
            }, Container.prototype.hasResolver = function hasResolver(key) {
                var checkParent = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                return validateKey(key), this._resolvers.has(key) || checkParent && null !== this.parent && this.parent.hasResolver(key, checkParent);
            }, Container.prototype.get = function get(key) {
                if (validateKey(key), key === Container) return this;
                if (resolverDecorates(key)) return key.get(this, key);
                var resolver = this._resolvers.get(key);
                return void 0 === resolver ? null === this.parent ? this.autoRegister(key).get(this, key) : this.parent._get(key) : resolver.get(this, key);
            }, Container.prototype._get = function _get(key) {
                var resolver = this._resolvers.get(key);
                return void 0 === resolver ? null === this.parent ? this.autoRegister(key).get(this, key) : this.parent._get(key) : resolver.get(this, key);
            }, Container.prototype.getAll = function getAll(key) {
                validateKey(key);
                var resolver = this._resolvers.get(key);
                if (void 0 === resolver) return null === this.parent ? _emptyParameters : this.parent.getAll(key);
                if (4 === resolver.strategy) {
                    for (var state = resolver.state, i = state.length, results = new Array(i); i--; ) results[i] = state[i].get(this, key);
                    return results;
                }
                return [ resolver.get(this, key) ];
            }, Container.prototype.createChild = function createChild() {
                var child = new Container(this._configuration);
                return child.root = this.root, child.parent = this, child;
            }, Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
                try {
                    var _handler = this._handlers.get(fn);
                    return void 0 === _handler && (_handler = this._createInvocationHandler(fn), this._handlers.set(fn, _handler)), 
                    _handler.invoke(this, dynamicDependencies);
                } catch (e) {
                    throw new _aureliaPal.AggregateError("Error invoking " + fn.name + ". Check the inner error for details.", e, !0);
                }
            }, Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
                var dependencies = void 0;
                if (void 0 === fn.inject) dependencies = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, fn) || _emptyParameters; else {
                    dependencies = [];
                    for (var ctor = fn; "function" == typeof ctor; ) {
                        var _dependencies;
                        (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor)), 
                        ctor = Object.getPrototypeOf(ctor);
                    }
                }
                var invoker = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback, handler = new InvocationHandler(fn, invoker, dependencies);
                return void 0 !== this._onHandlerCreated ? this._onHandlerCreated(handler) : handler;
            }, Container;
        }();
    },
    /***/
    30: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function getElementName(address) {
            return /([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase();
        }
        function configure(config) {
            var viewEngine = config.container.get(_aureliaTemplating.ViewEngine), loader = config.aurelia.loader;
            viewEngine.addResourcePlugin(".html", {
                fetch: function fetch(address) {
                    return loader.loadTemplate(address).then(function(registryEntry) {
                        var _ref, bindable = registryEntry.template.getAttribute("bindable"), elementName = getElementName(address);
                        return bindable ? (bindable = bindable.split(",").map(function(x) {
                            return x.trim();
                        }), registryEntry.template.removeAttribute("bindable")) : bindable = [], _ref = {}, 
                        _ref[elementName] = (0, _dynamicElement._createDynamicElement)(elementName, address, bindable), 
                        _ref;
                    });
                }
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getElementName = getElementName, exports.configure = configure;
        var _aureliaTemplating = __webpack_require__(1), _dynamicElement = __webpack_require__(29);
    },
    /***/
    31: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.TemplatingRouteLoader = void 0;
        var _dec, _class, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTemplating = __webpack_require__(1), _aureliaRouter = __webpack_require__("aurelia-router"), _aureliaPath = __webpack_require__(6), _aureliaMetadata = __webpack_require__(4), TemplatingRouteLoader = exports.TemplatingRouteLoader = (_dec = (0, 
        _aureliaDependencyInjection.inject)(_aureliaTemplating.CompositionEngine), _dec(_class = function(_RouteLoader) {
            function TemplatingRouteLoader(compositionEngine) {
                var _this = _possibleConstructorReturn(this, _RouteLoader.call(this));
                return _this.compositionEngine = compositionEngine, _this;
            }
            return _inherits(TemplatingRouteLoader, _RouteLoader), TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
                var childContainer = router.container.createChild(), instruction = {
                    viewModel: (0, _aureliaPath.relativeToFile)(config.moduleId, _aureliaMetadata.Origin.get(router.container.viewModel.constructor).moduleId),
                    childContainer: childContainer,
                    view: config.view || config.viewStrategy,
                    router: router
                };
                return childContainer.getChildRouter = function() {
                    var childRouter = void 0;
                    return childContainer.registerHandler(_aureliaRouter.Router, function(c) {
                        return childRouter || (childRouter = router.createChild(childContainer));
                    }), childContainer.get(_aureliaRouter.Router);
                }, this.compositionEngine.ensureViewModel(instruction);
            }, TemplatingRouteLoader;
        }(_aureliaRouter.RouteLoader)) || _class);
    },
    /***/
    4: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function decorators() {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) rest[_key] = arguments[_key];
            var applicator = function applicator(target, key, descriptor) {
                var i = rest.length;
                if (key) {
                    for (descriptor = descriptor || {
                        value: target[key],
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    }; i--; ) descriptor = rest[i](target, key, descriptor) || descriptor;
                    Object.defineProperty(target, key, descriptor);
                } else for (;i--; ) target = rest[i](target) || target;
                return target;
            };
            return applicator.on = applicator, applicator;
        }
        function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
            function decorator(target, key, descriptor) {
                var methodSignature = target.constructor.name + "#" + key, options = maybeKey ? {} : optionsOrTarget || {}, message = "DEPRECATION - " + methodSignature;
                if ("function" != typeof descriptor.value) throw new SyntaxError("Only methods can be marked as deprecated.");
                return options.message && (message += " - " + options.message), _extends({}, descriptor, {
                    value: function deprecationWrapper() {
                        if (options.error) throw new Error(message);
                        return console.warn(message), descriptor.value.apply(this, arguments);
                    }
                });
            }
            return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
        }
        function mixin(behavior) {
            function _mixin(possible) {
                var decorator = function decorator(target) {
                    for (var resolvedTarget = "function" == typeof target ? target.prototype : target, i = instanceKeys.length; i--; ) {
                        var property = instanceKeys[i];
                        Object.defineProperty(resolvedTarget, property, {
                            value: behavior[property],
                            writable: !0
                        });
                    }
                };
                return possible ? decorator(possible) : decorator;
            }
            var instanceKeys = Object.keys(behavior);
            return _mixin;
        }
        function alwaysValid() {
            return !0;
        }
        function noCompose() {}
        function ensureProtocolOptions(options) {
            return void 0 === options ? options = {} : "function" == typeof options && (options = {
                validate: options
            }), options.validate || (options.validate = alwaysValid), options.compose || (options.compose = noCompose), 
            options;
        }
        function createProtocolValidator(validate) {
            return function(target) {
                var result = validate(target);
                return result === !0;
            };
        }
        function createProtocolAsserter(name, validate) {
            return function(target) {
                var result = validate(target);
                if (result !== !0) throw new Error(result || name + " was not correctly implemented.");
            };
        }
        function protocol(name, options) {
            options = ensureProtocolOptions(options);
            var result = function result(target) {
                var resolvedTarget = "function" == typeof target ? target.prototype : target;
                options.compose(resolvedTarget), result.assert(resolvedTarget), Object.defineProperty(resolvedTarget, "protocol:" + name, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: !0
                });
            };
            return result.validate = createProtocolValidator(options.validate), result.assert = createProtocolAsserter(name, options.validate), 
            result;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Origin = exports.metadata = void 0;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.decorators = decorators, exports.deprecated = deprecated, exports.mixin = mixin, 
        exports.protocol = protocol;
        var _aureliaPal = __webpack_require__(0), metadata = exports.metadata = {
            resource: "aurelia:resource",
            paramTypes: "design:paramtypes",
            propertyType: "design:type",
            properties: "design:properties",
            get: function get(metadataKey, target, targetKey) {
                if (target) {
                    var result = metadata.getOwn(metadataKey, target, targetKey);
                    return void 0 === result ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
                }
            },
            getOwn: function getOwn(metadataKey, target, targetKey) {
                if (target) return Reflect.getOwnMetadata(metadataKey, target, targetKey);
            },
            define: function define(metadataKey, metadataValue, target, targetKey) {
                Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
            },
            getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
                var result = metadata.getOwn(metadataKey, target, targetKey);
                return void 0 === result && (result = new Type(), Reflect.defineMetadata(metadataKey, result, target, targetKey)), 
                result;
            }
        }, originStorage = new Map(), unknownOrigin = Object.freeze({
            moduleId: void 0,
            moduleMember: void 0
        }), Origin = exports.Origin = function() {
            function Origin(moduleId, moduleMember) {
                this.moduleId = moduleId, this.moduleMember = moduleMember;
            }
            return Origin.get = function get(fn) {
                var origin = originStorage.get(fn);
                return void 0 === origin && _aureliaPal.PLATFORM.eachModule(function(key, value) {
                    if ("object" === ("undefined" == typeof value ? "undefined" : _typeof(value))) for (var name in value) {
                        var exp = value[name];
                        if (exp === fn) return originStorage.set(fn, origin = new Origin(key, name)), !0;
                    }
                    return value === fn && (originStorage.set(fn, origin = new Origin(key, "default")), 
                    !0);
                }), origin || unknownOrigin;
            }, Origin.set = function set(fn, origin) {
                originStorage.set(fn, origin);
            }, Origin;
        }();
        protocol.create = function(name, options) {
            options = ensureProtocolOptions(options);
            var hidden = "protocol:" + name, result = function result(target) {
                var decorator = protocol(name, options);
                return target ? decorator(target) : decorator;
            };
            return result.decorates = function(obj) {
                return obj[hidden] === !0;
            }, result.validate = createProtocolValidator(options.validate), result.assert = createProtocolAsserter(name, options.validate), 
            result;
        };
    },
    /***/
    40: /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__("aurelia-bootstrapper-webpack"), __webpack_require__(2), __webpack_require__(3), 
        __webpack_require__("aurelia-event-aggregator"), __webpack_require__("aurelia-framework"), 
        __webpack_require__(12), __webpack_require__("aurelia-history-browser"), __webpack_require__(9), 
        __webpack_require__("aurelia-loader-webpack"), __webpack_require__(5), __webpack_require__("aurelia-logging-console"), 
        __webpack_require__(4), __webpack_require__(0), __webpack_require__("aurelia-pal-browser"), 
        __webpack_require__(6), __webpack_require__("aurelia-polyfills"), __webpack_require__("aurelia-route-recognizer"), 
        __webpack_require__("aurelia-router"), __webpack_require__(7), __webpack_require__(1), 
        __webpack_require__("aurelia-templating-binding"), __webpack_require__("aurelia-templating-router"), 
        module.exports = __webpack_require__("aurelia-templating-resources");
    },
    /***/
    5: /***/
    function(module, exports) {
        "use strict";
        function log(logger, level, args) {
            var i = appenders.length, current = void 0;
            for (args = slice.call(args), args.unshift(logger); i--; ) current = appenders[i], 
            current[level].apply(current, args);
        }
        function debug() {
            this.level < 4 || log(this, "debug", arguments);
        }
        function info() {
            this.level < 3 || log(this, "info", arguments);
        }
        function warn() {
            this.level < 2 || log(this, "warn", arguments);
        }
        function error() {
            this.level < 1 || log(this, "error", arguments);
        }
        function connectLogger(logger) {
            logger.debug = debug, logger.info = info, logger.warn = warn, logger.error = error;
        }
        function createLogger(id) {
            var logger = new Logger(id, loggerConstructionKey);
            return logger.setLevel(globalDefaultLevel), appenders.length && connectLogger(logger), 
            logger;
        }
        function getLogger(id) {
            return loggers[id] || (loggers[id] = createLogger(id));
        }
        function addAppender(appender) {
            if (appenders.push(appender), 1 === appenders.length) for (var key in loggers) connectLogger(loggers[key]);
        }
        function setLevel(level) {
            globalDefaultLevel = level;
            for (var key in loggers) loggers[key].setLevel(level);
        }
        function getLevel() {
            return globalDefaultLevel;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getLogger = getLogger, exports.addAppender = addAppender, exports.setLevel = setLevel, 
        exports.getLevel = getLevel;
        var logLevel = exports.logLevel = {
            none: 0,
            error: 1,
            warn: 2,
            info: 3,
            debug: 4
        }, loggers = {}, appenders = [], slice = Array.prototype.slice, loggerConstructionKey = {}, globalDefaultLevel = logLevel.none, Logger = exports.Logger = function() {
            function Logger(id, key) {
                if (this.level = logLevel.none, key !== loggerConstructionKey) throw new Error('Cannot instantiate "Logger". Use "getLogger" instead.');
                this.id = id;
            }
            return Logger.prototype.debug = function debug(message) {}, Logger.prototype.info = function info(message) {}, 
            Logger.prototype.warn = function warn(message) {}, Logger.prototype.error = function error(message) {}, 
            Logger.prototype.setLevel = function setLevel(level) {
                this.level = level;
            }, Logger;
        }();
    },
    /***/
    6: /***/
    function(module, exports) {
        "use strict";
        function trimDots(ary) {
            for (var i = 0; i < ary.length; ++i) {
                var part = ary[i];
                if ("." === part) ary.splice(i, 1), i -= 1; else if (".." === part) {
                    if (0 === i || 1 === i && ".." === ary[2] || ".." === ary[i - 1]) continue;
                    i > 0 && (ary.splice(i - 1, 2), i -= 2);
                }
            }
        }
        function relativeToFile(name, file) {
            var fileParts = file && file.split("/"), nameParts = name.trim().split("/");
            if ("." === nameParts[0].charAt(0) && fileParts) {
                var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
                nameParts.unshift.apply(nameParts, normalizedBaseParts);
            }
            return trimDots(nameParts), nameParts.join("/");
        }
        function join(path1, path2) {
            if (!path1) return path2;
            if (!path2) return path1;
            var schemeMatch = path1.match(/^([^\/]*?:)\//), scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : "";
            path1 = path1.substr(scheme.length);
            var urlPrefix = void 0;
            urlPrefix = 0 === path1.indexOf("///") && "file:" === scheme ? "///" : 0 === path1.indexOf("//") ? "//" : 0 === path1.indexOf("/") ? "/" : "";
            for (var trailingSlash = "/" === path2.slice(-1) ? "/" : "", url1 = path1.split("/"), url2 = path2.split("/"), url3 = [], i = 0, ii = url1.length; i < ii; ++i) if (".." === url1[i]) url3.pop(); else {
                if ("." === url1[i] || "" === url1[i]) continue;
                url3.push(url1[i]);
            }
            for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) if (".." === url2[_i]) url3.pop(); else {
                if ("." === url2[_i] || "" === url2[_i]) continue;
                url3.push(url2[_i]);
            }
            return scheme + urlPrefix + url3.join("/") + trailingSlash;
        }
        function buildParam(key, value, traditional) {
            var result = [];
            if (null === value || void 0 === value) return result;
            if (Array.isArray(value)) for (var i = 0, l = value.length; i < l; i++) if (traditional) result.push(encodeKey(key) + "=" + encode(value[i])); else {
                var arrayKey = key + "[" + ("object" === _typeof(value[i]) && null !== value[i] ? i : "") + "]";
                result = result.concat(buildParam(arrayKey, value[i]));
            } else if ("object" !== ("undefined" == typeof value ? "undefined" : _typeof(value)) || traditional) result.push(encodeKey(key) + "=" + encode(value)); else for (var propertyName in value) result = result.concat(buildParam(key + "[" + propertyName + "]", value[propertyName]));
            return result;
        }
        function buildQueryString(params, traditional) {
            for (var pairs = [], keys = Object.keys(params || {}).sort(), i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                pairs = pairs.concat(buildParam(key, params[key], traditional));
            }
            return 0 === pairs.length ? "" : pairs.join("&");
        }
        function processScalarParam(existedParam, value) {
            return Array.isArray(existedParam) ? (existedParam.push(value), existedParam) : void 0 !== existedParam ? [ existedParam, value ] : value;
        }
        function parseComplexParam(queryParams, keys, value) {
            for (var currentParams = queryParams, keysLastIndex = keys.length - 1, j = 0; j <= keysLastIndex; j++) {
                var key = "" === keys[j] ? currentParams.length : keys[j];
                if (j < keysLastIndex) {
                    var prevValue = currentParams[key] && "object" !== _typeof(currentParams[key]) ? [ currentParams[key] ] : currentParams[key];
                    currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
                } else currentParams = currentParams[key] = value;
            }
        }
        function parseQueryString(queryString) {
            var queryParams = {};
            if (!queryString || "string" != typeof queryString) return queryParams;
            var query = queryString;
            "?" === query.charAt(0) && (query = query.substr(1));
            for (var pairs = query.replace(/\+/g, " ").split("&"), i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split("="), key = decodeURIComponent(pair[0]);
                if (key) {
                    var keys = key.split("]["), keysLastIndex = keys.length - 1;
                    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex]) ? (keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, ""), 
                    keys = keys.shift().split("[").concat(keys), keysLastIndex = keys.length - 1) : keysLastIndex = 0, 
                    pair.length >= 2) {
                        var value = pair[1] ? decodeURIComponent(pair[1]) : "";
                        keysLastIndex ? parseComplexParam(queryParams, keys, value) : queryParams[key] = processScalarParam(queryParams[key], value);
                    } else queryParams[key] = !0;
                }
            }
            return queryParams;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.relativeToFile = relativeToFile, exports.join = join, exports.buildQueryString = buildQueryString, 
        exports.parseQueryString = parseQueryString;
        var encode = encodeURIComponent, encodeKey = function encodeKey(k) {
            return encode(k).replace("%24", "$");
        };
    },
    /***/
    7: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(setImmediate) {
            function makeRequestFlushFromMutationObserver(flush) {
                var toggle = 1, observer = _aureliaPal.DOM.createMutationObserver(flush), node = _aureliaPal.DOM.createTextNode("");
                return observer.observe(node, {
                    characterData: !0
                }), function requestFlush() {
                    toggle = -toggle, node.data = toggle;
                };
            }
            function makeRequestFlushFromTimer(flush) {
                return function requestFlush() {
                    function handleFlushTimer() {
                        clearTimeout(timeoutHandle), clearInterval(intervalHandle), flush();
                    }
                    var timeoutHandle = setTimeout(handleFlushTimer, 0), intervalHandle = setInterval(handleFlushTimer, 50);
                };
            }
            function onError(error, task) {
                "onError" in task ? task.onError(error) : hasSetImmediate ? setImmediate(function() {
                    throw error;
                }) : setTimeout(function() {
                    throw error;
                }, 0);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.TaskQueue = void 0;
            var _aureliaPal = __webpack_require__(0), hasSetImmediate = "function" == typeof setImmediate, TaskQueue = exports.TaskQueue = function() {
                function TaskQueue() {
                    var _this = this;
                    this.flushing = !1, this.microTaskQueue = [], this.microTaskQueueCapacity = 1024, 
                    this.taskQueue = [], _aureliaPal.FEATURE.mutationObserver ? this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function() {
                        return _this.flushMicroTaskQueue();
                    }) : this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function() {
                        return _this.flushMicroTaskQueue();
                    }), this.requestFlushTaskQueue = makeRequestFlushFromTimer(function() {
                        return _this.flushTaskQueue();
                    });
                }
                return TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
                    this.microTaskQueue.length < 1 && this.requestFlushMicroTaskQueue(), this.microTaskQueue.push(task);
                }, TaskQueue.prototype.queueTask = function queueTask(task) {
                    this.taskQueue.length < 1 && this.requestFlushTaskQueue(), this.taskQueue.push(task);
                }, TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
                    var queue = this.taskQueue, index = 0, task = void 0;
                    this.taskQueue = [];
                    try {
                        for (this.flushing = !0; index < queue.length; ) task = queue[index], task.call(), 
                        index++;
                    } catch (error) {
                        onError(error, task);
                    } finally {
                        this.flushing = !1;
                    }
                }, TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
                    var queue = this.microTaskQueue, capacity = this.microTaskQueueCapacity, index = 0, task = void 0;
                    try {
                        for (this.flushing = !0; index < queue.length; ) if (task = queue[index], task.call(), 
                        index++, index > capacity) {
                            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) queue[scan] = queue[scan + index];
                            queue.length -= index, index = 0;
                        }
                    } catch (error) {
                        onError(error, task);
                    } finally {
                        this.flushing = !1;
                    }
                    queue.length = 0;
                }, TaskQueue;
            }();
        }).call(exports, __webpack_require__(10).setImmediate);
    },
    /***/
    8: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function updateOverrideContexts(views, startIndex) {
            var length = views.length;
            for (startIndex > 0 && (startIndex -= 1); startIndex < length; ++startIndex) updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
        }
        function createFullOverrideContext(repeat, data, index, length, key) {
            var bindingContext = {}, overrideContext = (0, _aureliaBinding.createOverrideContext)(bindingContext, repeat.scope.overrideContext);
            return "undefined" != typeof key ? (bindingContext[repeat.key] = key, bindingContext[repeat.value] = data) : bindingContext[repeat.local] = data, 
            updateOverrideContext(overrideContext, index, length), overrideContext;
        }
        function updateOverrideContext(overrideContext, index, length) {
            var first = 0 === index, last = index === length - 1, even = index % 2 === 0;
            overrideContext.$index = index, overrideContext.$first = first, overrideContext.$last = last, 
            overrideContext.$middle = !(first || last), overrideContext.$odd = !even, overrideContext.$even = even;
        }
        function getItemsSourceExpression(instruction, attrName) {
            return instruction.behaviorInstructions.filter(function(bi) {
                return bi.originalAttrName === attrName;
            })[0].attributes.items.sourceExpression;
        }
        function unwrapExpression(expression) {
            for (var unwrapped = !1; expression instanceof _aureliaBinding.BindingBehavior; ) expression = expression.expression;
            for (;expression instanceof _aureliaBinding.ValueConverter; ) expression = expression.expression, 
            unwrapped = !0;
            return unwrapped ? expression : null;
        }
        function isOneTime(expression) {
            for (;expression instanceof _aureliaBinding.BindingBehavior; ) {
                if ("oneTime" === expression.name) return !0;
                expression = expression.expression;
            }
            return !1;
        }
        function updateOneTimeBinding(binding) {
            binding.call && binding.mode === oneTime ? binding.call(_aureliaBinding.sourceContext) : binding.updateOneTimeBindings && binding.updateOneTimeBindings();
        }
        function indexOf(array, item, matcher, startIndex) {
            if (!matcher) return array.indexOf(item);
            for (var length = array.length, index = startIndex || 0; index < length; index++) if (matcher(array[index], item)) return index;
            return -1;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.updateOverrideContexts = updateOverrideContexts, exports.createFullOverrideContext = createFullOverrideContext, 
        exports.updateOverrideContext = updateOverrideContext, exports.getItemsSourceExpression = getItemsSourceExpression, 
        exports.unwrapExpression = unwrapExpression, exports.isOneTime = isOneTime, exports.updateOneTimeBinding = updateOneTimeBinding, 
        exports.indexOf = indexOf;
        var _aureliaBinding = __webpack_require__(2), oneTime = _aureliaBinding.bindingMode.oneTime;
    },
    /***/
    9: /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Loader = exports.TemplateRegistryEntry = exports.TemplateDependency = void 0;
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
        }(), _aureliaPath = __webpack_require__(6), _aureliaMetadata = __webpack_require__(4), TemplateDependency = exports.TemplateDependency = function TemplateDependency(src, name) {
            this.src = src, this.name = name;
        }, TemplateRegistryEntry = exports.TemplateRegistryEntry = function() {
            function TemplateRegistryEntry(address) {
                this.templateIsLoaded = !1, this.factoryIsReady = !1, this.resources = null, this.dependencies = null, 
                this.address = address, this.onReady = null, this._template = null, this._factory = null;
            }
            return TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
                var finalSrc = "string" == typeof src ? (0, _aureliaPath.relativeToFile)(src, this.address) : _aureliaMetadata.Origin.get(src).moduleId;
                this.dependencies.push(new TemplateDependency(finalSrc, name));
            }, _createClass(TemplateRegistryEntry, [ {
                key: "template",
                get: function get() {
                    return this._template;
                },
                set: function set(value) {
                    var address = this.address, requires = void 0, current = void 0, src = void 0, dependencies = void 0;
                    this._template = value, this.templateIsLoaded = !0, requires = value.content.querySelectorAll("require"), 
                    dependencies = this.dependencies = new Array(requires.length);
                    for (var i = 0, ii = requires.length; i < ii; ++i) {
                        if (current = requires[i], src = current.getAttribute("from"), !src) throw new Error("<require> element in " + address + ' has no "from" attribute.');
                        dependencies[i] = new TemplateDependency((0, _aureliaPath.relativeToFile)(src, address), current.getAttribute("as")), 
                        current.parentNode && current.parentNode.removeChild(current);
                    }
                }
            }, {
                key: "factory",
                get: function get() {
                    return this._factory;
                },
                set: function set(value) {
                    this._factory = value, this.factoryIsReady = !0;
                }
            } ]), TemplateRegistryEntry;
        }(), Loader = exports.Loader = function() {
            function Loader() {
                this.templateRegistry = {};
            }
            return Loader.prototype.map = function map(id, source) {
                throw new Error("Loaders must implement map(id, source).");
            }, Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
                throw new Error("Loaders must implement normalizeSync(moduleId, relativeTo).");
            }, Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
                throw new Error("Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.");
            }, Loader.prototype.loadModule = function loadModule(id) {
                throw new Error("Loaders must implement loadModule(id).");
            }, Loader.prototype.loadAllModules = function loadAllModules(ids) {
                throw new Error("Loader must implement loadAllModules(ids).");
            }, Loader.prototype.loadTemplate = function loadTemplate(url) {
                throw new Error("Loader must implement loadTemplate(url).");
            }, Loader.prototype.loadText = function loadText(url) {
                throw new Error("Loader must implement loadText(url).");
            }, Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
                throw new Error("Loader must implement applyPluginToUrl(url, pluginName).");
            }, Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
                throw new Error("Loader must implement addPlugin(pluginName, implementation).");
            }, Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
                return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
            }, Loader;
        }();
    },
    /***/
    "aurelia-bootstrapper-webpack": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function onBootstrap(callback) {
                return new Promise(function(resolve, reject) {
                    sharedLoader ? resolve(callback(sharedLoader)) : bootstrapQueue.push(function() {
                        try {
                            resolve(callback(sharedLoader));
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
            function ready(global) {
                return new Promise(function(resolve, reject) {
                    function completed() {
                        global.document.removeEventListener("DOMContentLoaded", completed), global.removeEventListener("load", completed), 
                        resolve(global.document);
                    }
                    "complete" === global.document.readyState ? resolve(global.document) : (global.document.addEventListener("DOMContentLoaded", completed), 
                    global.addEventListener("load", completed));
                });
            }
            function handleApp(loader, appHost) {
                return config(loader, appHost, appHost.getAttribute("aurelia-app"));
            }
            function config(loader, appHost, configModuleId) {
                var aurelia = new Aurelia(loader);
                return aurelia.host = appHost, aurelia.configModuleId = configModuleId || null, 
                configModuleId ? loader.loadModule(configModuleId).then(function(customConfig) {
                    return customConfig.configure(aurelia);
                }) : (aurelia.use.standardConfiguration().developmentLogging(), aurelia.start().then(function() {
                    return aurelia.setRoot();
                }));
            }
            function run() {
                return ready(window).then(function(doc) {
                    var appHost = doc.querySelectorAll("[aurelia-app]"), loader = new _aureliaLoaderWebpack.WebpackLoader();
                    loader.loadModule("aurelia-framework").then(function(m) {
                        Aurelia = m.Aurelia;
                        for (var i = 0, ii = appHost.length; i < ii; ++i) handleApp(loader, appHost[i]).catch(console.error.bind(console));
                        sharedLoader = loader;
                        for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) bootstrapQueue[_i]();
                        bootstrapQueue = null;
                    });
                });
            }
            function bootstrap(configure) {
                return onBootstrap(function(loader) {
                    var aurelia = new Aurelia(loader);
                    return configure(aurelia);
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.bootstrap = bootstrap, __webpack_require__("aurelia-polyfills");
            var _aureliaPalBrowser = __webpack_require__("aurelia-pal-browser"), _aureliaLoaderWebpack = __webpack_require__("aurelia-loader-webpack");
            (0, _aureliaPalBrowser.initialize)();
            var bootstrapQueue = [], sharedLoader = null, Aurelia = null;
            run();
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "aurelia-event-aggregator": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj;
        }
        function invokeCallback(callback, data, event) {
            try {
                callback(data, event);
            } catch (e) {
                logger.error(e);
            }
        }
        function invokeHandler(handler, data) {
            try {
                handler.handle(data);
            } catch (e) {
                logger.error(e);
            }
        }
        function includeEventsIn(obj) {
            var ea = new EventAggregator();
            return obj.subscribeOnce = function(event, callback) {
                return ea.subscribeOnce(event, callback);
            }, obj.subscribe = function(event, callback) {
                return ea.subscribe(event, callback);
            }, obj.publish = function(event, data) {
                ea.publish(event, data);
            }, ea;
        }
        function configure(config) {
            config.instance(EventAggregator, includeEventsIn(config.aurelia));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.EventAggregator = void 0, exports.includeEventsIn = includeEventsIn, 
        exports.configure = configure;
        var _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), logger = LogManager.getLogger("event-aggregator"), Handler = function() {
            function Handler(messageType, callback) {
                this.messageType = messageType, this.callback = callback;
            }
            return Handler.prototype.handle = function handle(message) {
                message instanceof this.messageType && this.callback.call(null, message);
            }, Handler;
        }(), EventAggregator = exports.EventAggregator = function() {
            function EventAggregator() {
                this.eventLookup = {}, this.messageHandlers = [];
            }
            return EventAggregator.prototype.publish = function publish(event, data) {
                var subscribers = void 0, i = void 0;
                if (!event) throw new Error("Event was invalid.");
                if ("string" == typeof event) {
                    if (subscribers = this.eventLookup[event]) for (subscribers = subscribers.slice(), 
                    i = subscribers.length; i--; ) invokeCallback(subscribers[i], data, event);
                } else for (subscribers = this.messageHandlers.slice(), i = subscribers.length; i--; ) invokeHandler(subscribers[i], event);
            }, EventAggregator.prototype.subscribe = function subscribe(event, callback) {
                var handler = void 0, subscribers = void 0;
                if (!event) throw new Error("Event channel/type was invalid.");
                return "string" == typeof event ? (handler = callback, subscribers = this.eventLookup[event] || (this.eventLookup[event] = [])) : (handler = new Handler(event, callback), 
                subscribers = this.messageHandlers), subscribers.push(handler), {
                    dispose: function dispose() {
                        var idx = subscribers.indexOf(handler);
                        idx !== -1 && subscribers.splice(idx, 1);
                    }
                };
            }, EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
                var sub = this.subscribe(event, function(a, b) {
                    return sub.dispose(), callback(a, b);
                });
                return sub;
            }, EventAggregator;
        }();
    },
    /***/
    "aurelia-framework": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function preventActionlessFormSubmit() {
                _aureliaPal.DOM.addEventListener("submit", function(evt) {
                    var target = evt.target, action = target.action;
                    "form" !== target.tagName.toLowerCase() || action || evt.preventDefault();
                });
            }
            function runTasks(config, tasks) {
                var current = void 0, next = function next() {
                    return current = tasks.shift(), current ? Promise.resolve(current(config)).then(next) : Promise.resolve();
                };
                return next();
            }
            function loadPlugin(config, loader, info) {
                function _loadPlugin(moduleId) {
                    return loader.loadModule(moduleId).then(function(m) {
                        return "configure" in m ? Promise.resolve(m.configure(config, info.config || {})).then(function() {
                            config.resourcesRelativeTo = null, logger.debug("Configured plugin " + info.moduleId + ".");
                        }) : (config.resourcesRelativeTo = null, void logger.debug("Loaded plugin " + info.moduleId + "."));
                    });
                }
                logger.debug("Loading plugin " + info.moduleId + "."), config.resourcesRelativeTo = info.resourcesRelativeTo;
                var id = info.moduleId;
                return info.resourcesRelativeTo.length > 1 ? loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function(normalizedId) {
                    return _loadPlugin(normalizedId);
                }) : _loadPlugin(id);
            }
            function loadResources(aurelia, resourcesToLoad, appResources) {
                function _normalize(load) {
                    var moduleId = load.moduleId, ext = getExt(moduleId);
                    return isOtherResource(moduleId) && (moduleId = removeExt(moduleId)), aurelia.loader.normalize(moduleId, load.relativeTo).then(function(normalized) {
                        return {
                            name: load.moduleId,
                            importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
                        };
                    });
                }
                function isOtherResource(name) {
                    var ext = getExt(name);
                    return !!ext && ("" !== ext && (".js" !== ext && ".ts" !== ext));
                }
                function removeExt(name) {
                    return name.replace(extPattern, "");
                }
                function addOriginalExt(normalized, ext) {
                    return removeExt(normalized) + "." + ext;
                }
                var viewEngine = aurelia.container.get(_aureliaTemplating.ViewEngine);
                return Promise.all(Object.keys(resourcesToLoad).map(function(n) {
                    return _normalize(resourcesToLoad[n]);
                })).then(function(loads) {
                    var names = [], importIds = [];
                    return loads.forEach(function(l) {
                        names.push(void 0), importIds.push(l.importId);
                    }), viewEngine.importViewResources(importIds, names, appResources);
                });
            }
            function getExt(name) {
                var match = name.match(extPattern);
                if (match && match.length > 0) return match[0].split(".")[1];
            }
            function assertProcessed(plugins) {
                if (plugins.processed) throw new Error("This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.");
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.LogManager = exports.FrameworkConfiguration = exports.Aurelia = void 0;
            var _aureliaDependencyInjection = __webpack_require__(3);
            Object.keys(_aureliaDependencyInjection).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaDependencyInjection[key];
                    }
                });
            });
            var _aureliaBinding = __webpack_require__(2);
            Object.keys(_aureliaBinding).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaBinding[key];
                    }
                });
            });
            var _aureliaMetadata = __webpack_require__(4);
            Object.keys(_aureliaMetadata).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaMetadata[key];
                    }
                });
            });
            var _aureliaTemplating = __webpack_require__(1);
            Object.keys(_aureliaTemplating).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaTemplating[key];
                    }
                });
            });
            var _aureliaLoader = __webpack_require__(9);
            Object.keys(_aureliaLoader).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaLoader[key];
                    }
                });
            });
            var _aureliaTaskQueue = __webpack_require__(7);
            Object.keys(_aureliaTaskQueue).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaTaskQueue[key];
                    }
                });
            });
            var _aureliaPath = __webpack_require__(6);
            Object.keys(_aureliaPath).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaPath[key];
                    }
                });
            });
            var _aureliaPal = __webpack_require__(0);
            Object.keys(_aureliaPal).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function get() {
                        return _aureliaPal[key];
                    }
                });
            });
            var _aureliaLogging = __webpack_require__(5), TheLogManager = _interopRequireWildcard(_aureliaLogging), Aurelia = exports.Aurelia = function() {
                function Aurelia(loader, container, resources) {
                    this.loader = loader || new _aureliaPal.PLATFORM.Loader(), this.container = container || new _aureliaDependencyInjection.Container().makeGlobal(), 
                    this.resources = resources || new _aureliaTemplating.ViewResources(), this.use = new FrameworkConfiguration(this), 
                    this.logger = TheLogManager.getLogger("aurelia"), this.hostConfigured = !1, this.host = null, 
                    this.use.instance(Aurelia, this), this.use.instance(_aureliaLoader.Loader, this.loader), 
                    this.use.instance(_aureliaTemplating.ViewResources, this.resources);
                }
                return Aurelia.prototype.start = function start() {
                    var _this = this;
                    return this.started ? Promise.resolve(this) : (this.started = !0, this.logger.info("Aurelia Starting"), 
                    this.use.apply().then(function() {
                        if (preventActionlessFormSubmit(), !_this.container.hasResolver(_aureliaTemplating.BindingLanguage)) {
                            var message = "You must configure Aurelia with a BindingLanguage implementation.";
                            throw _this.logger.error(message), new Error(message);
                        }
                        _this.logger.info("Aurelia Started");
                        var evt = _aureliaPal.DOM.createCustomEvent("aurelia-started", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        return _aureliaPal.DOM.dispatchEvent(evt), _this;
                    }));
                }, Aurelia.prototype.enhance = function enhance() {
                    var _this2 = this, bindingContext = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], applicationHost = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    return this._configureHost(applicationHost || _aureliaPal.DOM.querySelectorAll("body")[0]), 
                    new Promise(function(resolve) {
                        var engine = _this2.container.get(_aureliaTemplating.TemplatingEngine);
                        _this2.root = engine.enhance({
                            container: _this2.container,
                            element: _this2.host,
                            resources: _this2.resources,
                            bindingContext: bindingContext
                        }), _this2.root.attached(), _this2._onAureliaComposed(), resolve(_this2);
                    });
                }, Aurelia.prototype.setRoot = function setRoot() {
                    var _this3 = this, root = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], applicationHost = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], instruction = {};
                    this.root && this.root.viewModel && this.root.viewModel.router && (this.root.viewModel.router.deactivate(), 
                    this.root.viewModel.router.reset()), this._configureHost(applicationHost);
                    var engine = this.container.get(_aureliaTemplating.TemplatingEngine), transaction = this.container.get(_aureliaTemplating.CompositionTransaction);
                    return delete transaction.initialComposition, root || (root = this.configModuleId ? (0, 
                    _aureliaPath.relativeToFile)("./app", this.configModuleId) : "app"), instruction.viewModel = root, 
                    instruction.container = instruction.childContainer = this.container, instruction.viewSlot = this.hostSlot, 
                    instruction.host = this.host, engine.compose(instruction).then(function(r) {
                        return _this3.root = r, instruction.viewSlot.attached(), _this3._onAureliaComposed(), 
                        _this3;
                    });
                }, Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
                    if (!this.hostConfigured) {
                        if (applicationHost = applicationHost || this.host, applicationHost && "string" != typeof applicationHost ? this.host = applicationHost : this.host = _aureliaPal.DOM.getElementById(applicationHost || "applicationHost"), 
                        !this.host) throw new Error("No applicationHost was specified.");
                        this.hostConfigured = !0, this.host.aurelia = this, this.hostSlot = new _aureliaTemplating.ViewSlot(this.host, !0), 
                        this.hostSlot.transformChildNodesIntoView(), this.container.registerInstance(_aureliaPal.DOM.boundary, this.host);
                    }
                }, Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
                    var evt = _aureliaPal.DOM.createCustomEvent("aurelia-composed", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    setTimeout(function() {
                        return _aureliaPal.DOM.dispatchEvent(evt);
                    }, 1);
                }, Aurelia;
            }(), logger = TheLogManager.getLogger("aurelia"), extPattern = /\.[^\/.]+$/, FrameworkConfiguration = function() {
                function FrameworkConfiguration(aurelia) {
                    var _this4 = this;
                    this.aurelia = aurelia, this.container = aurelia.container, this.info = [], this.processed = !1, 
                    this.preTasks = [], this.postTasks = [], this.resourcesToLoad = {}, this.preTask(function() {
                        return aurelia.loader.normalize("aurelia-bootstrapper").then(function(name) {
                            return _this4.bootstrapperName = name;
                        });
                    }), this.postTask(function() {
                        return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
                    });
                }
                return FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
                    return this.container.registerInstance(type, _instance), this;
                }, FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
                    return this.container.registerSingleton(type, implementation), this;
                }, FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
                    return this.container.registerTransient(type, implementation), this;
                }, FrameworkConfiguration.prototype.preTask = function preTask(task) {
                    return assertProcessed(this), this.preTasks.push(task), this;
                }, FrameworkConfiguration.prototype.postTask = function postTask(task) {
                    return assertProcessed(this), this.postTasks.push(task), this;
                }, FrameworkConfiguration.prototype.feature = function feature(plugin, config) {
                    return getExt(plugin) ? this.plugin({
                        moduleId: plugin,
                        resourcesRelativeTo: [ plugin, "" ],
                        config: config || {}
                    }) : this.plugin({
                        moduleId: plugin + "/index",
                        resourcesRelativeTo: [ plugin, "" ],
                        config: config || {}
                    });
                }, FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
                    assertProcessed(this);
                    for (var toAdd = Array.isArray(resources) ? resources : arguments, resource = void 0, resourcesRelativeTo = this.resourcesRelativeTo || [ "", "" ], i = 0, ii = toAdd.length; i < ii; ++i) {
                        if (resource = toAdd[i], "string" != typeof resource) throw new Error("Invalid resource path [" + resource + "]. Resources must be specified as relative module IDs.");
                        var parent = resourcesRelativeTo[0], grandParent = resourcesRelativeTo[1], name = resource;
                        (resource.startsWith("./") || resource.startsWith("../")) && "" !== parent && (name = (0, 
                        _aureliaPath.join)(parent, resource)), this.resourcesToLoad[name] = {
                            moduleId: name,
                            relativeTo: grandParent
                        };
                    }
                    return this;
                }, FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
                    return assertProcessed(this), this.resourcesToLoad[resourcePath] = {
                        moduleId: newName,
                        relativeTo: ""
                    }, this;
                }, FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
                    return assertProcessed(this), "string" == typeof _plugin ? this.plugin({
                        moduleId: _plugin,
                        resourcesRelativeTo: [ _plugin, "" ],
                        config: config || {}
                    }) : (this.info.push(_plugin), this);
                }, FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
                    var _this5 = this, plugin = {
                        moduleId: name,
                        resourcesRelativeTo: [ name, "" ],
                        config: config || {}
                    };
                    return this.plugin(plugin), this.preTask(function() {
                        var relativeTo = [ name, _this5.bootstrapperName ];
                        return plugin.moduleId = name, plugin.resourcesRelativeTo = relativeTo, Promise.resolve();
                    }), this;
                }, FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
                    return this._addNormalizedPlugin("aurelia-templating-binding");
                }, FrameworkConfiguration.prototype.router = function router() {
                    return this._addNormalizedPlugin("aurelia-templating-router");
                }, FrameworkConfiguration.prototype.history = function history() {
                    return this._addNormalizedPlugin("aurelia-history-browser");
                }, FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
                    return this._addNormalizedPlugin("aurelia-templating-resources");
                }, FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
                    return this._addNormalizedPlugin("aurelia-event-aggregator");
                }, FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
                    return this.defaultBindingLanguage().defaultResources().eventAggregator();
                }, FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
                    return this.basicConfiguration().history().router();
                }, FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
                    var _this6 = this;
                    return this.preTask(function() {
                        return _this6.aurelia.loader.normalize("aurelia-logging-console", _this6.bootstrapperName).then(function(name) {
                            return _this6.aurelia.loader.loadModule(name).then(function(m) {
                                TheLogManager.addAppender(new m.ConsoleAppender()), TheLogManager.setLevel(TheLogManager.logLevel.debug);
                            });
                        });
                    }), this;
                }, FrameworkConfiguration.prototype.apply = function apply() {
                    var _this7 = this;
                    return this.processed ? Promise.resolve() : runTasks(this, this.preTasks).then(function() {
                        var loader = _this7.aurelia.loader, info = _this7.info, current = void 0, next = function next() {
                            return (current = info.shift()) ? loadPlugin(_this7, loader, current).then(next) : (_this7.processed = !0, 
                            Promise.resolve());
                        };
                        return next().then(function() {
                            return runTasks(_this7, _this7.postTasks);
                        });
                    });
                }, FrameworkConfiguration;
            }();
            exports.FrameworkConfiguration = FrameworkConfiguration;
            var LogManager = exports.LogManager = TheLogManager;
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "aurelia-history-browser": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function configure(config) {
            config.singleton(_aureliaHistory.History, BrowserHistory), config.transient(LinkHandler, DefaultLinkHandler);
        }
        function updateHash(location, fragment, replace) {
            if (replace) {
                var _href = location.href.replace(/(javascript:|#).*$/, "");
                location.replace(_href + "#" + fragment);
            } else location.hash = "#" + fragment;
        }
        function createOrigin(protocol, hostname, port) {
            return protocol + "//" + hostname + (port ? ":" + port : "");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.BrowserHistory = exports.DefaultLinkHandler = exports.LinkHandler = void 0;
        var _class, _temp;
        exports.configure = configure;
        var _aureliaPal = __webpack_require__(0), _aureliaHistory = __webpack_require__(12), LinkHandler = exports.LinkHandler = function() {
            function LinkHandler() {}
            return LinkHandler.prototype.activate = function activate(history) {}, LinkHandler.prototype.deactivate = function deactivate() {}, 
            LinkHandler;
        }(), DefaultLinkHandler = exports.DefaultLinkHandler = function(_LinkHandler) {
            function DefaultLinkHandler() {
                var _this = _possibleConstructorReturn(this, _LinkHandler.call(this));
                return _this.handler = function(e) {
                    var _DefaultLinkHandler$g = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _DefaultLinkHandler$g.shouldHandleEvent, href = _DefaultLinkHandler$g.href;
                    shouldHandleEvent && (e.preventDefault(), _this.history.navigate(href));
                }, _this;
            }
            return _inherits(DefaultLinkHandler, _LinkHandler), DefaultLinkHandler.prototype.activate = function activate(history) {
                history._hasPushState && (this.history = history, _aureliaPal.DOM.addEventListener("click", this.handler, !0));
            }, DefaultLinkHandler.prototype.deactivate = function deactivate() {
                _aureliaPal.DOM.removeEventListener("click", this.handler);
            }, DefaultLinkHandler.getEventInfo = function getEventInfo(event) {
                var info = {
                    shouldHandleEvent: !1,
                    href: null,
                    anchor: null
                }, target = DefaultLinkHandler.findClosestAnchor(event.target);
                if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) return info;
                if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return info;
                var href = target.getAttribute("href");
                info.anchor = target, info.href = href;
                var leftButtonClicked = 1 === event.which, isRelative = href && !("#" === href.charAt(0) || /^[a-z]+:/i.test(href));
                return info.shouldHandleEvent = leftButtonClicked && isRelative, info;
            }, DefaultLinkHandler.findClosestAnchor = function findClosestAnchor(el) {
                for (;el; ) {
                    if ("A" === el.tagName) return el;
                    el = el.parentNode;
                }
            }, DefaultLinkHandler.targetIsThisWindow = function targetIsThisWindow(target) {
                var targetWindow = target.getAttribute("target"), win = _aureliaPal.PLATFORM.global;
                return !targetWindow || targetWindow === win.name || "_self" === targetWindow || "top" === targetWindow && win === win.top;
            }, DefaultLinkHandler;
        }(LinkHandler), BrowserHistory = exports.BrowserHistory = (_temp = _class = function(_History) {
            function BrowserHistory(linkHandler) {
                var _this2 = _possibleConstructorReturn(this, _History.call(this));
                return _this2._isActive = !1, _this2._checkUrlCallback = _this2._checkUrl.bind(_this2), 
                _this2.location = _aureliaPal.PLATFORM.location, _this2.history = _aureliaPal.PLATFORM.history, 
                _this2.linkHandler = linkHandler, _this2;
            }
            return _inherits(BrowserHistory, _History), BrowserHistory.prototype.activate = function activate(options) {
                if (this._isActive) throw new Error("History has already been activated.");
                var wantsPushState = !!options.pushState;
                this._isActive = !0, this.options = Object.assign({}, {
                    root: "/"
                }, this.options, options), this.root = ("/" + this.options.root + "/").replace(rootStripper, "/"), 
                this._wantsHashChange = this.options.hashChange !== !1, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var eventName = void 0;
                if (this._hasPushState ? eventName = "popstate" : this._wantsHashChange && (eventName = "hashchange"), 
                _aureliaPal.PLATFORM.addEventListener(eventName, this._checkUrlCallback), this._wantsHashChange && wantsPushState) {
                    var loc = this.location, atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (!this._hasPushState && !atRoot) return this.fragment = this._getFragment(null, !0), 
                    this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._hasPushState && atRoot && loc.hash && (this.fragment = this._getHash().replace(routeStripper, ""), 
                    this.history.replaceState({}, _aureliaPal.DOM.title, this.root + this.fragment + loc.search));
                }
                if (this.fragment || (this.fragment = this._getFragment()), this.linkHandler.activate(this), 
                !this.options.silent) return this._loadUrl();
            }, BrowserHistory.prototype.deactivate = function deactivate() {
                _aureliaPal.PLATFORM.removeEventListener("popstate", this._checkUrlCallback), _aureliaPal.PLATFORM.removeEventListener("hashchange", this._checkUrlCallback), 
                this._isActive = !1, this.linkHandler.deactivate();
            }, BrowserHistory.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
                var origin = createOrigin(this.location.protocol, this.location.hostname, this.location.port);
                return "" + origin + this.root;
            }, BrowserHistory.prototype.navigate = function navigate(fragment) {
                var _ref = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], _ref$trigger = _ref.trigger, trigger = void 0 === _ref$trigger || _ref$trigger, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace;
                if (fragment && absoluteUrl.test(fragment)) return this.location.href = fragment, 
                !0;
                if (!this._isActive) return !1;
                if (fragment = this._getFragment(fragment || ""), this.fragment === fragment && !replace) return !1;
                this.fragment = fragment;
                var url = this.root + fragment;
                if ("" === fragment && "/" !== url && (url = url.slice(0, -1)), this._hasPushState) url = url.replace("//", "/"), 
                this.history[replace ? "replaceState" : "pushState"]({}, _aureliaPal.DOM.title, url); else {
                    if (!this._wantsHashChange) return this.location.assign(url);
                    updateHash(this.location, fragment, replace);
                }
                return trigger ? this._loadUrl(fragment) : void 0;
            }, BrowserHistory.prototype.navigateBack = function navigateBack() {
                this.history.back();
            }, BrowserHistory.prototype.setTitle = function setTitle(title) {
                _aureliaPal.DOM.title = title;
            }, BrowserHistory.prototype._getHash = function _getHash() {
                return this.location.hash.substr(1);
            }, BrowserHistory.prototype._getFragment = function _getFragment(fragment, forcePushState) {
                var root = void 0;
                return fragment || (this._hasPushState || !this._wantsHashChange || forcePushState ? (fragment = this.location.pathname + this.location.search, 
                root = this.root.replace(trailingSlash, ""), fragment.indexOf(root) || (fragment = fragment.substr(root.length))) : fragment = this._getHash()), 
                "/" + fragment.replace(routeStripper, "");
            }, BrowserHistory.prototype._checkUrl = function _checkUrl() {
                var current = this._getFragment();
                current !== this.fragment && this._loadUrl();
            }, BrowserHistory.prototype._loadUrl = function _loadUrl(fragmentOverride) {
                var fragment = this.fragment = this._getFragment(fragmentOverride);
                return !!this.options.routeHandler && this.options.routeHandler(fragment);
            }, BrowserHistory;
        }(_aureliaHistory.History), _class.inject = [ LinkHandler ], _temp), routeStripper = /^#?\/*|\s+$/g, rootStripper = /^\/+|\/+$/g, trailingSlash = /\/$/, absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
    },
    /***/
    "aurelia-loader-webpack": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            function ensureOriginOnExports(executed, moduleId) {
                var target = executed, key = void 0, exportedValue = void 0;
                if (target.__useDefault && (target = target.default), _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(moduleId, "default")), 
                "object" === ("undefined" == typeof target ? "undefined" : _typeof(target))) for (key in target) exportedValue = target[key], 
                "function" == typeof exportedValue && _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(moduleId, key));
                return executed;
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.WebpackLoader = exports.TextTemplateLoader = void 0;
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
            };
            exports.ensureOriginOnExports = ensureOriginOnExports;
            var _aureliaMetadata = __webpack_require__(4), _aureliaLoader = __webpack_require__(9), _aureliaPal = __webpack_require__(0), TextTemplateLoader = exports.TextTemplateLoader = function() {
                function TextTemplateLoader() {}
                return TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
                    return loader.loadText(entry.address).then(function(text) {
                        entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
                    });
                }, TextTemplateLoader;
            }(), WebpackLoader = exports.WebpackLoader = function(_Loader) {
                function WebpackLoader() {
                    var _this = _possibleConstructorReturn(this, _Loader.call(this));
                    _this.moduleRegistry = Object.create(null), _this.loaderPlugins = Object.create(null), 
                    _this.useTemplateLoader(new TextTemplateLoader()), _this.modulesBeingLoaded = Object.create(null);
                    var that = _this;
                    return _this.addPlugin("template-registry-entry", {
                        fetch: function fetch(address) {
                            var entry = that.getOrCreateTemplateRegistryEntry(address);
                            return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function(x) {
                                return entry;
                            });
                        }
                    }), _aureliaPal.PLATFORM.eachModule = function(callback) {
                        var registry = __webpack_require__.c;
                        for (var moduleId in registry) if ("string" == typeof moduleId) {
                            var moduleExports = registry[moduleId].exports;
                            if ("object" === ("undefined" == typeof moduleExports ? "undefined" : _typeof(moduleExports))) try {
                                if (callback(moduleId, moduleExports)) return;
                            } catch (e) {}
                        }
                    }, _this;
                }
                return _inherits(WebpackLoader, _Loader), WebpackLoader.prototype._getActualResult = function _getActualResult(result, resolve, reject) {
                    try {
                        var isAsync = "function" == typeof result && /cb\(__webpack_require__/.test(result.toString());
                        return isAsync ? result(function(actual) {
                            return resolve(actual);
                        }) : resolve(result);
                    } catch (e) {
                        reject(e);
                    }
                }, WebpackLoader.prototype._import = function _import(moduleId) {
                    var _this2 = this;
                    if (this.modulesBeingLoaded[moduleId]) return this.modulesBeingLoaded[moduleId];
                    var moduleIdParts = moduleId.split("!"), path = moduleIdParts.splice(moduleIdParts.length - 1, 1)[0], loaderPlugin = 1 === moduleIdParts.length ? moduleIdParts[0] : null, action = new Promise(function(resolve, reject) {
                        if (loaderPlugin) try {
                            return resolve(_this2.loaderPlugins[loaderPlugin].fetch(path));
                        } catch (e) {
                            return reject(e);
                        } else {
                            try {
                                var result = __webpack_require__(path);
                                return _this2._getActualResult(result, resolve, reject);
                            } catch (_) {
                                delete __webpack_require__.c[path];
                            }
                            __webpack_require__.e(0).then(function(require) {
                                var result = __webpack_require__(38)("./" + path);
                                return _this2._getActualResult(result, resolve, reject);
                            }.bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        }
                    }).then(function(result) {
                        return _this2.modulesBeingLoaded[moduleId] = void 0, result;
                    });
                    return this.modulesBeingLoaded[moduleId] = action, action;
                }, WebpackLoader.prototype.map = function map(id, source) {}, WebpackLoader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
                    return moduleId;
                }, WebpackLoader.prototype.normalize = function normalize(moduleId, relativeTo) {
                    return Promise.resolve(moduleId);
                }, WebpackLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
                    this.templateLoader = templateLoader;
                }, WebpackLoader.prototype.loadAllModules = function loadAllModules(ids) {
                    for (var loads = [], i = 0, ii = ids.length; i < ii; ++i) loads.push(this.loadModule(ids[i]));
                    return Promise.all(loads);
                }, WebpackLoader.prototype.loadModule = function loadModule(id) {
                    var _this3 = this, existing = this.moduleRegistry[id];
                    return existing ? Promise.resolve(existing) : this._import(id).then(function(m) {
                        return _this3.moduleRegistry[id] = ensureOriginOnExports(m, id);
                    });
                }, WebpackLoader.prototype.loadTemplate = function loadTemplate(url) {
                    return this._import(this.applyPluginToUrl(url, "template-registry-entry"));
                }, WebpackLoader.prototype.loadText = function loadText(url) {
                    return this._import(url).then(function(result) {
                        return result instanceof Array && result[0] instanceof Array && result.hasOwnProperty("toString") ? result.toString() : result;
                    });
                }, WebpackLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
                    return pluginName + "!" + url;
                }, WebpackLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
                    this.loaderPlugins[pluginName] = implementation;
                }, WebpackLoader;
            }(_aureliaLoader.Loader);
            _aureliaPal.PLATFORM.Loader = WebpackLoader;
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "aurelia-logging-console": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ConsoleAppender = void 0;
        var _aureliaLogging = __webpack_require__(5), ConsoleAppender = exports.ConsoleAppender = function() {
            function ConsoleAppender() {}
            return ConsoleAppender.prototype.debug = function debug(logger) {
                for (var _console, _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
                (_console = console).debug.apply(_console, [ "DEBUG [" + logger.id + "]" ].concat(rest));
            }, ConsoleAppender.prototype.info = function info(logger) {
                for (var _console2, _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) rest[_key2 - 1] = arguments[_key2];
                (_console2 = console).info.apply(_console2, [ "INFO [" + logger.id + "]" ].concat(rest));
            }, ConsoleAppender.prototype.warn = function warn(logger) {
                for (var _console3, _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) rest[_key3 - 1] = arguments[_key3];
                (_console3 = console).warn.apply(_console3, [ "WARN [" + logger.id + "]" ].concat(rest));
            }, ConsoleAppender.prototype.error = function error(logger) {
                for (var _console4, _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) rest[_key4 - 1] = arguments[_key4];
                (_console4 = console).error.apply(_console4, [ "ERROR [" + logger.id + "]" ].concat(rest));
            }, ConsoleAppender;
        }();
    },
    /***/
    "aurelia-pal-browser": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _ensureFunctionName() {
            function test() {}
            test.name || Object.defineProperty(Function.prototype, "name", {
                get: function get() {
                    var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
                    return Object.defineProperty(this, "name", {
                        value: name
                    }), name;
                }
            });
        }
        function _ensureClassList() {
            if ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
                var testElement = document.createElement("_");
                if (testElement.classList.add("c1", "c2"), !testElement.classList.contains("c2")) {
                    var createMethod = function createMethod(method) {
                        var original = DOMTokenList.prototype[method];
                        DOMTokenList.prototype[method] = function(token) {
                            for (var i = 0, ii = arguments.length; i < ii; ++i) token = arguments[i], original.call(this, token);
                        };
                    };
                    createMethod("add"), createMethod("remove");
                }
                testElement.classList.toggle("c3", !1), testElement.classList.contains("c3") && !function() {
                    var _toggle = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(token, force) {
                        return 1 in arguments && !this.contains(token) == !force ? force : _toggle.call(this, token);
                    };
                }(), testElement = null;
            } else !function() {
                var protoProp = "prototype", strTrim = String.prototype.trim, arrIndexOf = Array.prototype.indexOf, emptyArray = [], DOMEx = function DOMEx(type, message) {
                    this.name = type, this.code = DOMException[type], this.message = message;
                }, checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
                    if ("" === token) throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(token)) throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return arrIndexOf.call(classList, token);
                }, ClassList = function ClassList(elem) {
                    for (var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray, i = 0, ii = classes.length; i < ii; ++i) this.push(classes[i]);
                    this._updateClassName = function() {
                        elem.setAttribute("class", this.toString());
                    };
                }, classListProto = ClassList[protoProp] = [];
                DOMEx[protoProp] = Error[protoProp], classListProto.item = function(i) {
                    return this[i] || null;
                }, classListProto.contains = function(token) {
                    return token += "", checkTokenAndGetIndex(this, token) !== -1;
                }, classListProto.add = function() {
                    var tokens = arguments, i = 0, ii = tokens.length, token = void 0, updated = !1;
                    do token = tokens[i] + "", checkTokenAndGetIndex(this, token) === -1 && (this.push(token), 
                    updated = !0); while (++i < ii);
                    updated && this._updateClassName();
                }, classListProto.remove = function() {
                    var tokens = arguments, i = 0, ii = tokens.length, token = void 0, updated = !1, index = void 0;
                    do for (token = tokens[i] + "", index = checkTokenAndGetIndex(this, token); index !== -1; ) this.splice(index, 1), 
                    updated = !0, index = checkTokenAndGetIndex(this, token); while (++i < ii);
                    updated && this._updateClassName();
                }, classListProto.toggle = function(token, force) {
                    token += "";
                    var result = this.contains(token), method = result ? force !== !0 && "remove" : force !== !1 && "add";
                    return method && this[method](token), force === !0 || force === !1 ? force : !result;
                }, classListProto.toString = function() {
                    return this.join(" ");
                }, Object.defineProperty(Element.prototype, "classList", {
                    get: function get() {
                        return new ClassList(this);
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }();
        }
        function _ensurePerformance() {
            // @license http://opensource.org/licenses/MIT
            "performance" in window == !1 && (window.performance = {}), "now" in window.performance == !1 && !function() {
                var nowOffset = Date.now();
                performance.timing && performance.timing.navigationStart && (nowOffset = performance.timing.navigationStart), 
                window.performance.now = function now() {
                    return Date.now() - nowOffset;
                };
            }(), _PLATFORM.performance = window.performance;
        }
        function _ensureCustomEvent() {
            if (!window.CustomEvent || "function" != typeof window.CustomEvent) {
                var _CustomEvent = function _CustomEvent(event, params) {
                    params = params || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var evt = document.createEvent("CustomEvent");
                    return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
                    evt;
                };
                _CustomEvent.prototype = window.Event.prototype, window.CustomEvent = _CustomEvent;
            }
        }
        function _ensureElementMatches() {
            if (Element && !Element.prototype.matches) {
                var proto = Element.prototype;
                proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
            }
        }
        function _ensureHTMLTemplateElement() {
            function isSVGTemplate(el) {
                return "template" === el.tagName && "http://www.w3.org/2000/svg" === el.namespaceURI;
            }
            function fixSVGTemplateElement(el) {
                var template = el.ownerDocument.createElement("template"), attrs = el.attributes, length = attrs.length, attr = void 0;
                for (el.parentNode.insertBefore(template, el); length-- > 0; ) attr = attrs[length], 
                template.setAttribute(attr.name, attr.value), el.removeAttribute(attr.name);
                return el.parentNode.removeChild(el), fixHTMLTemplateElement(template);
            }
            function fixHTMLTemplateElement(template) {
                for (var content = template.content = document.createDocumentFragment(), child = void 0; child = template.firstChild; ) content.appendChild(child);
                return template;
            }
            function fixHTMLTemplateElementRoot(template) {
                for (var content = fixHTMLTemplateElement(template).content, childTemplates = content.querySelectorAll("template"), i = 0, ii = childTemplates.length; i < ii; ++i) {
                    var child = childTemplates[i];
                    isSVGTemplate(child) ? fixSVGTemplateElement(child) : fixHTMLTemplateElement(child);
                }
                return template;
            }
            _FEATURE.htmlTemplateElement ? _FEATURE.ensureHTMLTemplateElement = function(template) {
                return template;
            } : _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
        }
        function initialize() {
            isInitialized || (isInitialized = !0, _ensureCustomEvent(), _ensureFunctionName(), 
            _ensureHTMLTemplateElement(), _ensureElementMatches(), _ensureClassList(), _ensurePerformance(), 
            (0, _aureliaPal.initializePAL)(function(platform, feature, dom) {
                Object.assign(platform, _PLATFORM), Object.assign(feature, _FEATURE), Object.assign(dom, _DOM), 
                function(global) {
                    global.console = global.console || {};
                    for (var con = global.console, prop = void 0, method = void 0, empty = {}, dummy = function dummy() {}, properties = "memory".split(","), methods = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); prop = properties.pop(); ) con[prop] || (con[prop] = empty);
                    for (;method = methods.pop(); ) con[method] || (con[method] = dummy);
                }(platform.global), platform.global.console && "object" === _typeof(console.log) && [ "log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd" ].forEach(function(method) {
                    console[method] = this.bind(console[method], console);
                }, Function.prototype.call), Object.defineProperty(dom, "title", {
                    get: function get() {
                        return document.title;
                    },
                    set: function set(value) {
                        document.title = value;
                    }
                }), Object.defineProperty(dom, "activeElement", {
                    get: function get() {
                        return document.activeElement;
                    }
                }), Object.defineProperty(platform, "XMLHttpRequest", {
                    get: function get() {
                        return platform.global.XMLHttpRequest;
                    }
                });
            }));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports._DOM = exports._FEATURE = exports._PLATFORM = void 0;
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports._ensureFunctionName = _ensureFunctionName, exports._ensureClassList = _ensureClassList, 
        exports._ensurePerformance = _ensurePerformance, exports._ensureCustomEvent = _ensureCustomEvent, 
        exports._ensureElementMatches = _ensureElementMatches, exports._ensureHTMLTemplateElement = _ensureHTMLTemplateElement, 
        exports.initialize = initialize;
        var _aureliaPal = __webpack_require__(0), _PLATFORM = exports._PLATFORM = {
            location: window.location,
            history: window.history,
            addEventListener: function addEventListener(eventName, callback, capture) {
                this.global.addEventListener(eventName, callback, capture);
            },
            removeEventListener: function removeEventListener(eventName, callback, capture) {
                this.global.removeEventListener(eventName, callback, capture);
            },
            performance: window.performance,
            requestAnimationFrame: function requestAnimationFrame(callback) {
                return this.global.requestAnimationFrame(callback);
            }
        }, _FEATURE = exports._FEATURE = {};
        _FEATURE.shadowDOM = function() {
            return !!HTMLElement.prototype.attachShadow;
        }(), _FEATURE.scopedCSS = function() {
            return "scoped" in document.createElement("style");
        }(), _FEATURE.htmlTemplateElement = function() {
            return "content" in document.createElement("template");
        }(), _FEATURE.mutationObserver = function() {
            return !(!window.MutationObserver && !window.WebKitMutationObserver);
        }();
        var shadowPoly = window.ShadowDOMPolyfill || null, _DOM = exports._DOM = {
            Element: Element,
            SVGElement: SVGElement,
            boundary: "aurelia-dom-boundary",
            addEventListener: function addEventListener(eventName, callback, capture) {
                document.addEventListener(eventName, callback, capture);
            },
            removeEventListener: function removeEventListener(eventName, callback, capture) {
                document.removeEventListener(eventName, callback, capture);
            },
            adoptNode: function adoptNode(node) {
                return document.adoptNode(node, !0);
            },
            createElement: function createElement(tagName) {
                return document.createElement(tagName);
            },
            createTextNode: function createTextNode(text) {
                return document.createTextNode(text);
            },
            createComment: function createComment(text) {
                return document.createComment(text);
            },
            createDocumentFragment: function createDocumentFragment() {
                return document.createDocumentFragment();
            },
            createMutationObserver: function createMutationObserver(callback) {
                return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
            },
            createCustomEvent: function createCustomEvent(eventType, options) {
                return new window.CustomEvent(eventType, options);
            },
            dispatchEvent: function dispatchEvent(evt) {
                document.dispatchEvent(evt);
            },
            getComputedStyle: function getComputedStyle(element) {
                return window.getComputedStyle(element);
            },
            getElementById: function getElementById(id) {
                return document.getElementById(id);
            },
            querySelectorAll: function querySelectorAll(query) {
                return document.querySelectorAll(query);
            },
            nextElementSibling: function nextElementSibling(element) {
                if (element.nextElementSibling) return element.nextElementSibling;
                do element = element.nextSibling; while (element && 1 !== element.nodeType);
                return element;
            },
            createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
                var parser = document.createElement("div");
                parser.innerHTML = markup;
                var temp = parser.firstElementChild;
                if (!temp || "TEMPLATE" !== temp.nodeName) throw new Error("Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>");
                return _FEATURE.ensureHTMLTemplateElement(temp);
            },
            appendNode: function appendNode(newNode, parentNode) {
                (parentNode || document.body).appendChild(newNode);
            },
            replaceNode: function replaceNode(newNode, node, parentNode) {
                node.parentNode ? node.parentNode.replaceChild(newNode, node) : null !== shadowPoly ? shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node)) : parentNode.replaceChild(newNode, node);
            },
            removeNode: function removeNode(node, parentNode) {
                node.parentNode ? node.parentNode.removeChild(node) : parentNode && (null !== shadowPoly ? shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node)) : parentNode.removeChild(node));
            },
            injectStyles: function injectStyles(styles, destination, prepend) {
                var node = document.createElement("style");
                return node.innerHTML = styles, node.type = "text/css", destination = destination || document.head, 
                prepend && destination.childNodes.length > 0 ? destination.insertBefore(node, destination.childNodes[0]) : destination.appendChild(node), 
                node;
            }
        }, isInitialized = !1;
    },
    /***/
    "aurelia-polyfills": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
        }, _aureliaPal = __webpack_require__(0);
        !function(Object, GOPS) {
            if (!(GOPS in Object)) {
                var setDescriptor, G = _aureliaPal.PLATFORM.global, id = 0, random = "" + Math.random(), prefix = "__symbol:", prefixLength = prefix.length, internalSymbol = "__symbol@@" + random, DP = "defineProperty", DPies = "defineProperties", GOPN = "getOwnPropertyNames", GOPD = "getOwnPropertyDescriptor", PIE = "propertyIsEnumerable", gOPN = Object[GOPN], gOPD = Object[GOPD], create = Object.create, keys = Object.keys, defineProperty = Object[DP], $defineProperties = Object[DPies], descriptor = gOPD(Object, GOPN), ObjectProto = Object.prototype, hOP = ObjectProto.hasOwnProperty, pIE = ObjectProto[PIE], toString = ObjectProto.toString, indexOf = Array.prototype.indexOf || function(v) {
                    for (var i = this.length; i-- && this[i] !== v; ) ;
                    return i;
                }, addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
                    hOP.call(o, internalSymbol) || defineProperty(o, internalSymbol, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: {}
                    }), o[internalSymbol]["@@" + uid] = enumerable;
                }, createWithSymbols = function createWithSymbols(proto, descriptors) {
                    var self = create(proto);
                    return gOPN(descriptors).forEach(function(key) {
                        propertyIsEnumerable.call(descriptors, key) && $defineProperty(self, key, descriptors[key]);
                    }), self;
                }, copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
                    var newDescriptor = create(descriptor);
                    return newDescriptor.enumerable = !1, newDescriptor;
                }, get = function get() {}, onlyNonSymbols = function onlyNonSymbols(name) {
                    return name != internalSymbol && !hOP.call(source, name);
                }, onlySymbols = function onlySymbols(name) {
                    return name != internalSymbol && hOP.call(source, name);
                }, propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var uid = "" + key;
                    return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]["@@" + uid] : pIE.call(this, key);
                }, setAndGetSymbol = function setAndGetSymbol(uid) {
                    var descriptor = {
                        enumerable: !1,
                        configurable: !0,
                        get: get,
                        set: function set(value) {
                            setDescriptor(this, uid, {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: value
                            }), addInternalIfNeeded(this, uid, !0);
                        }
                    };
                    return defineProperty(ObjectProto, uid, descriptor), source[uid] = defineProperty(Object(uid), "constructor", sourceConstructor);
                }, _Symbol = function _Symbol2(description) {
                    if (this && this !== G) throw new TypeError("Symbol is not a constructor");
                    return setAndGetSymbol(prefix.concat(description || "", random, ++id));
                }, source = create(null), sourceConstructor = {
                    value: _Symbol
                }, sourceMap = function sourceMap(uid) {
                    return source[uid];
                }, $defineProperty = function defineProp(o, key, descriptor) {
                    var uid = "" + key;
                    return onlySymbols(uid) ? (setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor), 
                    addInternalIfNeeded(o, uid, !!descriptor.enumerable)) : defineProperty(o, key, descriptor), 
                    o;
                }, $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
                    var cof = toString.call(o);
                    return o = "[object String]" === cof ? o.split("") : Object(o), gOPN(o).filter(onlySymbols).map(sourceMap);
                };
                descriptor.value = $defineProperty, defineProperty(Object, DP, descriptor), descriptor.value = $getOwnPropertySymbols, 
                defineProperty(Object, GOPS, descriptor), descriptor.value = function getOwnPropertyNames(o) {
                    return gOPN(o).filter(onlyNonSymbols);
                }, defineProperty(Object, GOPN, descriptor), descriptor.value = function defineProperties(o, descriptors) {
                    var symbols = $getOwnPropertySymbols(descriptors);
                    return symbols.length ? keys(descriptors).concat(symbols).forEach(function(uid) {
                        propertyIsEnumerable.call(descriptors, uid) && $defineProperty(o, uid, descriptors[uid]);
                    }) : $defineProperties(o, descriptors), o;
                }, defineProperty(Object, DPies, descriptor), descriptor.value = propertyIsEnumerable, 
                defineProperty(ObjectProto, PIE, descriptor), descriptor.value = _Symbol, defineProperty(G, "Symbol", descriptor), 
                descriptor.value = function(key) {
                    var uid = prefix.concat(prefix, key, random);
                    return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
                }, defineProperty(_Symbol, "for", descriptor), descriptor.value = function(symbol) {
                    return hOP.call(source, symbol) ? symbol.slice(2 * prefixLength, -random.length) : void 0;
                }, defineProperty(_Symbol, "keyFor", descriptor), descriptor.value = function getOwnPropertyDescriptor(o, key) {
                    var descriptor = gOPD(o, key);
                    return descriptor && onlySymbols(key) && (descriptor.enumerable = propertyIsEnumerable.call(o, key)), 
                    descriptor;
                }, defineProperty(Object, GOPD, descriptor), descriptor.value = function(proto, descriptors) {
                    return 1 === arguments.length ? create(proto) : createWithSymbols(proto, descriptors);
                }, defineProperty(Object, "create", descriptor), descriptor.value = function() {
                    var str = toString.call(this);
                    return "[object String]" === str && onlySymbols(this) ? "[object Symbol]" : str;
                }, defineProperty(ObjectProto, "toString", descriptor);
                try {
                    setDescriptor = create(defineProperty({}, prefix, {
                        get: function get() {
                            return defineProperty(this, prefix, {
                                value: !1
                            })[prefix];
                        }
                    }))[prefix] || defineProperty;
                } catch (o_O) {
                    setDescriptor = function setDescriptor(o, key, descriptor) {
                        var protoDescriptor = gOPD(ObjectProto, key);
                        delete ObjectProto[key], defineProperty(o, key, descriptor), defineProperty(ObjectProto, key, protoDescriptor);
                    };
                }
            }
        }(Object, "getOwnPropertySymbols"), function(O, S) {
            var dP = O.defineProperty, ObjectProto = O.prototype, toString = ObjectProto.toString, toStringTag = "toStringTag", descriptor;
            [ "iterator", "match", "replace", "search", "split", "hasInstance", "isConcatSpreadable", "unscopables", "species", "toPrimitive", toStringTag ].forEach(function(name) {
                if (!(name in Symbol)) switch (dP(Symbol, name, {
                    value: Symbol(name)
                }), name) {
                  case toStringTag:
                    descriptor = O.getOwnPropertyDescriptor(ObjectProto, "toString"), descriptor.value = function() {
                        var str = toString.call(this), tst = "undefined" == typeof this || null === this ? void 0 : this[Symbol.toStringTag];
                        return "undefined" == typeof tst ? str : "[object " + tst + "]";
                    }, dP(ObjectProto, "toString", descriptor);
                }
            });
        }(Object, Symbol), function(Si, AP, SP) {
            function returnThis() {
                return this;
            }
            AP[Si] || (AP[Si] = function() {
                var i = 0, self = this, iterator = {
                    next: function next() {
                        var done = self.length <= i;
                        return done ? {
                            done: done
                        } : {
                            done: done,
                            value: self[i++]
                        };
                    }
                };
                return iterator[Si] = returnThis, iterator;
            }), SP[Si] || (SP[Si] = function() {
                var fromCodePoint = String.fromCodePoint, self = this, i = 0, length = self.length, iterator = {
                    next: function next() {
                        var done = length <= i, c = done ? "" : fromCodePoint(self.codePointAt(i));
                        return i += c.length, done ? {
                            done: done
                        } : {
                            done: done,
                            value: c
                        };
                    }
                };
                return iterator[Si] = returnThis, iterator;
            });
        }(Symbol.iterator, Array.prototype, String.prototype), Number.isNaN = Number.isNaN || function(value) {
            return value !== value;
        }, Number.isFinite = Number.isFinite || function(value) {
            return "number" == typeof value && isFinite(value);
        }, String.prototype.endsWith && !function() {
            try {
                return !"ab".endsWith("a", 1);
            } catch (e) {
                return !0;
            }
        }() || (String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            ("number" != typeof position || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) && (position = subjectString.length), 
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        }), String.prototype.startsWith && !function() {
            try {
                return !"ab".startsWith("b", 1);
            } catch (e) {
                return !0;
            }
        }() || (String.prototype.startsWith = function(searchString, position) {
            return position = position || 0, this.substr(position, searchString.length) === searchString;
        }), Array.from || (Array.from = function() {
            var toInteger = function toInteger(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
            }, toLength = function toLength(it) {
                return it > 0 ? Math.min(toInteger(it), 9007199254740991) : 0;
            }, iterCall = function iterCall(iter, fn, val, index) {
                try {
                    return fn(val, index);
                } catch (E) {
                    throw "function" == typeof iter.return && iter.return(), E;
                }
            };
            return function from(arrayLike) {
                var O = Object(arrayLike), C = "function" == typeof this ? this : Array, aLen = arguments.length, mapfn = aLen > 1 ? arguments[1] : void 0, mapping = void 0 !== mapfn, index = 0, iterFn = O[Symbol.iterator], length, result, step, iterator;
                if (mapping && (mapfn = mapfn.bind(aLen > 2 ? arguments[2] : void 0)), void 0 == iterFn || Array.isArray(arrayLike)) for (length = toLength(O.length), 
                result = new C(length); length > index; index++) result[index] = mapping ? mapfn(O[index], index) : O[index]; else for (iterator = iterFn.call(O), 
                result = new C(); !(step = iterator.next()).done; index++) result[index] = mapping ? iterCall(iterator, mapfn, step.value, index) : step.value;
                return result.length = index, result;
            };
        }()), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function value(predicate) {
                if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof predicate) throw new TypeError("predicate must be a function");
                for (var list = Object(this), length = list.length >>> 0, thisArg = arguments[1], value, i = 0; i < length; i++) if (value = list[i], 
                predicate.call(thisArg, value, i, list)) return value;
            }
        }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function value(predicate) {
                if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                if ("function" != typeof predicate) throw new TypeError("predicate must be a function");
                for (var list = Object(this), length = list.length >>> 0, thisArg = arguments[1], value, i = 0; i < length; i++) if (value = list[i], 
                predicate.call(thisArg, value, i, list)) return i;
                return -1;
            }
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function value(searchElement) {
                var O = Object(this), len = parseInt(O.length) || 0;
                if (0 === len) return !1;
                var n = parseInt(arguments[1]) || 0, k;
                n >= 0 ? k = n : (k = len + n, k < 0 && (k = 0));
                for (var currentElement; k < len; ) {
                    if (currentElement = O[k], searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) return !0;
                    k++;
                }
                return !1;
            }
        }), function() {
            var needsFix = !1;
            try {
                var s = Object.keys("a");
                needsFix = 1 !== s.length || "0" !== s[0];
            } catch (e) {
                needsFix = !0;
            }
            needsFix && (Object.keys = function() {
                var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{
                    toString: null
                }.propertyIsEnumerable("toString"), dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], dontEnumsLength = dontEnums.length;
                return function(obj) {
                    if (void 0 === obj || null === obj) throw TypeError("Cannot convert undefined or null to object");
                    obj = Object(obj);
                    var result = [], prop, i;
                    for (prop in obj) hasOwnProperty.call(obj, prop) && result.push(prop);
                    if (hasDontEnumBug) for (i = 0; i < dontEnumsLength; i++) hasOwnProperty.call(obj, dontEnums[i]) && result.push(dontEnums[i]);
                    return result;
                };
            }());
        }(), function(O) {
            "assign" in O || O.defineProperty(O, "assign", {
                configurable: !0,
                writable: !0,
                value: function() {
                    var gOPS = O.getOwnPropertySymbols, pIE = O.propertyIsEnumerable, filterOS = gOPS ? function(self) {
                        return gOPS(self).filter(pIE, self);
                    } : function() {
                        return Array.prototype;
                    };
                    return function assign(where) {
                        function set(keyOrSymbol) {
                            where[keyOrSymbol] = arg[keyOrSymbol];
                        }
                        !gOPS || where instanceof O || console.warn("problematic Symbols", where);
                        for (var i = 1, ii = arguments.length; i < ii; ++i) {
                            var arg = arguments[i];
                            null !== arg && void 0 !== arg && O.keys(arg).concat(filterOS(arg)).forEach(set);
                        }
                        return where;
                    };
                }()
            });
        }(Object), function(global) {
            function createCollection(proto, objectOnly) {
                function Collection(a) {
                    return this && this.constructor === Collection ? (this._keys = [], this._values = [], 
                    this._itp = [], this.objectOnly = objectOnly, void (a && init.call(this, a))) : new Collection(a);
                }
                return objectOnly || defineProperty(proto, "size", {
                    get: sharedSize
                }), proto.constructor = Collection, Collection.prototype = proto, Collection;
            }
            function init(a) {
                var i;
                this.add ? a.forEach(this.add, this) : a.forEach(function(a) {
                    this.set(a[0], a[1]);
                }, this);
            }
            function sharedDelete(key) {
                return this.has(key) && (this._keys.splice(i, 1), this._values.splice(i, 1), this._itp.forEach(function(p) {
                    i < p[0] && p[0]--;
                })), -1 < i;
            }
            function sharedGet(key) {
                return this.has(key) ? this._values[i] : void 0;
            }
            function has(list, key) {
                if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");
                if (key != key || 0 === key) for (i = list.length; i-- && !is(list[i], key); ) ; else i = list.indexOf(key);
                return -1 < i;
            }
            function setHas(value) {
                return has.call(this, this._values, value);
            }
            function mapHas(value) {
                return has.call(this, this._keys, value);
            }
            function sharedSet(key, value) {
                return this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value, 
                this;
            }
            function sharedAdd(value) {
                return this.has(value) || this._values.push(value), this;
            }
            function sharedClear() {
                (this._keys || 0).length = this._values.length = 0;
            }
            function sharedKeys() {
                return sharedIterator(this._itp, this._keys);
            }
            function sharedValues() {
                return sharedIterator(this._itp, this._values);
            }
            function mapEntries() {
                return sharedIterator(this._itp, this._keys, this._values);
            }
            function setEntries() {
                return sharedIterator(this._itp, this._values, this._values);
            }
            function sharedIterator(itp, array, array2) {
                var _ref, p = [ 0 ], done = !1;
                return itp.push(p), _ref = {}, _ref[Symbol.iterator] = function() {
                    return this;
                }, _ref.next = function next() {
                    var v, k = p[0];
                    return !done && k < array.length ? (v = array2 ? [ array[k], array2[k] ] : array[k], 
                    p[0]++) : (done = !0, itp.splice(itp.indexOf(p), 1)), {
                        done: done,
                        value: v
                    };
                }, _ref;
            }
            function sharedSize() {
                return this._values.length;
            }
            function sharedForEach(callback, context) {
                for (var it = this.entries(); ;) {
                    var r = it.next();
                    if (r.done) break;
                    callback.call(context, r.value[1], r.value[0], this);
                }
            }
            var i, defineProperty = Object.defineProperty, is = function is(a, b) {
                return a === b || a !== a && b !== b;
            };
            if ("undefined" == typeof WeakMap && (global.WeakMap = createCollection({
                delete: sharedDelete,
                clear: sharedClear,
                get: sharedGet,
                has: mapHas,
                set: sharedSet
            }, !0)), "undefined" == typeof Map || "function" != typeof new Map().values || !new Map().values().next) {
                var _createCollection;
                global.Map = createCollection((_createCollection = {
                    delete: sharedDelete,
                    has: mapHas,
                    get: sharedGet,
                    set: sharedSet,
                    keys: sharedKeys,
                    values: sharedValues,
                    entries: mapEntries,
                    forEach: sharedForEach,
                    clear: sharedClear
                }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
            }
            if ("undefined" == typeof Set || "function" != typeof new Set().values || !new Set().values().next) {
                var _createCollection2;
                global.Set = createCollection((_createCollection2 = {
                    has: setHas,
                    add: sharedAdd,
                    delete: sharedDelete,
                    clear: sharedClear,
                    keys: sharedValues,
                    values: sharedValues,
                    entries: setEntries,
                    forEach: sharedForEach
                }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
            }
            "undefined" == typeof WeakSet && (global.WeakSet = createCollection({
                delete: sharedDelete,
                add: sharedAdd,
                clear: sharedClear,
                has: setHas
            }, !0));
        }(_aureliaPal.PLATFORM.global);
        var emptyMetadata = Object.freeze({}), metadataContainerKey = "__metadata__", bind = Function.prototype.bind;
        "undefined" == typeof _aureliaPal.PLATFORM.global.Reflect && (_aureliaPal.PLATFORM.global.Reflect = {}), 
        "function" != typeof Reflect.getOwnMetadata && (Reflect.getOwnMetadata = function(metadataKey, target, targetKey) {
            if (target.hasOwnProperty(metadataContainerKey)) return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
        }), "function" != typeof Reflect.defineMetadata && (Reflect.defineMetadata = function(metadataKey, metadataValue, target, targetKey) {
            var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {}, targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
            targetContainer[metadataKey] = metadataValue;
        }), "function" != typeof Reflect.metadata && (Reflect.metadata = function(metadataKey, metadataValue) {
            return function(target, targetKey) {
                Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
            };
        }), "function" != typeof Reflect.defineProperty && (Reflect.defineProperty = function(target, propertyKey, descriptor) {
            if ("object" === ("undefined" == typeof target ? "undefined" : _typeof(target)) ? null === target : "function" != typeof target) throw new TypeError("Reflect.defineProperty called on non-object");
            try {
                return Object.defineProperty(target, propertyKey, descriptor), !0;
            } catch (e) {
                return !1;
            }
        }), "function" != typeof Reflect.construct && (Reflect.construct = function(Target, args) {
            if (args) switch (args.length) {
              case 0:
                return new Target();

              case 1:
                return new Target(args[0]);

              case 2:
                return new Target(args[0], args[1]);

              case 3:
                return new Target(args[0], args[1], args[2]);

              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            }
            var a = [ null ];
            return a.push.apply(a, args), new (bind.apply(Target, a))();
        }), "function" != typeof Reflect.ownKeys && (Reflect.ownKeys = function(o) {
            return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
        });
    },
    /***/
    "aurelia-route-recognizer": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function parse(route, names, types, caseSensitive) {
            var normalizedRoute = route;
            "/" === route.charAt(0) && (normalizedRoute = route.substr(1));
            for (var results = [], splitRoute = normalizedRoute.split("/"), i = 0, ii = splitRoute.length; i < ii; ++i) {
                var segment = splitRoute[i], match = segment.match(/^:([^?]+)(\?)?$/);
                if (match) {
                    var _match = match, _name = _match[1], optional = _match[2];
                    if (_name.indexOf("=") !== -1) throw new Error("Parameter " + _name + " in route " + route + " has a default value, which is not supported.");
                    results.push(new DynamicSegment(_name, !!optional)), names.push(_name), types.dynamics++;
                } else match = segment.match(/^\*(.+)$/), match ? (results.push(new StarSegment(match[1])), 
                names.push(match[1]), types.stars++) : "" === segment ? results.push(new EpsilonSegment()) : (results.push(new StaticSegment(segment, caseSensitive)), 
                types.statics++);
            }
            return results;
        }
        function sortSolutions(states) {
            return states.sort(function(a, b) {
                if (a.types.stars !== b.types.stars) return a.types.stars - b.types.stars;
                if (a.types.stars) {
                    if (a.types.statics !== b.types.statics) return b.types.statics - a.types.statics;
                    if (a.types.dynamics !== b.types.dynamics) return b.types.dynamics - a.types.dynamics;
                }
                return a.types.dynamics !== b.types.dynamics ? a.types.dynamics - b.types.dynamics : a.types.statics !== b.types.statics ? b.types.statics - a.types.statics : 0;
            });
        }
        function recognizeChar(states, ch) {
            for (var nextStates = [], i = 0, l = states.length; i < l; i++) {
                var state = states[i];
                nextStates.push.apply(nextStates, state.match(ch));
            }
            for (var skippableStates = nextStates.filter(function(s) {
                return s.epsilon;
            }), _loop = function _loop() {
                var newStates = [];
                skippableStates.forEach(function(s) {
                    nextStates.push.apply(nextStates, s.epsilon), newStates.push.apply(newStates, s.epsilon);
                }), skippableStates = newStates.filter(function(s) {
                    return s.epsilon;
                });
            }; skippableStates.length > 0; ) _loop();
            return nextStates;
        }
        function findHandler(state, path, queryParams) {
            for (var handlers = state.handlers, regex = state.regex, captures = path.match(regex), currentCapture = 1, result = new RecognizeResults(queryParams), i = 0, l = handlers.length; i < l; i++) {
                for (var _handler = handlers[i], _names = _handler.names, _params = {}, j = 0, m = _names.length; j < m; j++) _params[_names[j]] = captures[currentCapture++];
                result.push({
                    handler: _handler.handler,
                    params: _params,
                    isDynamic: !!_names.length
                });
            }
            return result;
        }
        function addSegment(currentState, segment) {
            var state = currentState.put({
                validChars: "/"
            });
            return segment.eachChar(function(ch) {
                state = state.put(ch);
            }), segment.optional && (currentState.epsilon = currentState.epsilon || [], currentState.epsilon.push(state)), 
            state;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.RouteRecognizer = exports.EpsilonSegment = exports.StarSegment = exports.DynamicSegment = exports.StaticSegment = exports.State = void 0;
        var _aureliaPath = __webpack_require__(6), State = exports.State = function() {
            function State(charSpec) {
                this.charSpec = charSpec, this.nextStates = [];
            }
            return State.prototype.get = function get(charSpec) {
                for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        if (_i = _iterator.next(), _i.done) break;
                        _ref = _i.value;
                    }
                    var child = _ref, isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;
                    if (isEqual) return child;
                }
            }, State.prototype.put = function put(charSpec) {
                var state = this.get(charSpec);
                return state ? state : (state = new State(charSpec), this.nextStates.push(state), 
                charSpec.repeat && state.nextStates.push(state), state);
            }, State.prototype.match = function match(ch) {
                for (var nextStates = this.nextStates, results = [], i = 0, l = nextStates.length; i < l; i++) {
                    var child = nextStates[i], charSpec = child.charSpec;
                    void 0 !== charSpec.validChars ? charSpec.validChars.indexOf(ch) !== -1 && results.push(child) : void 0 !== charSpec.invalidChars && charSpec.invalidChars.indexOf(ch) === -1 && results.push(child);
                }
                return results;
            }, State;
        }(), specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\" ], escapeRegex = new RegExp("(\\" + specials.join("|\\") + ")", "g"), StaticSegment = exports.StaticSegment = function() {
            function StaticSegment(string, caseSensitive) {
                this.string = string, this.caseSensitive = caseSensitive;
            }
            return StaticSegment.prototype.eachChar = function eachChar(callback) {
                for (var s = this.string, i = 0, ii = s.length; i < ii; ++i) {
                    var ch = s[i];
                    callback({
                        validChars: this.caseSensitive ? ch : ch.toUpperCase() + ch.toLowerCase()
                    });
                }
            }, StaticSegment.prototype.regex = function regex() {
                return this.string.replace(escapeRegex, "\\$1");
            }, StaticSegment.prototype.generate = function generate() {
                return this.string;
            }, StaticSegment;
        }(), DynamicSegment = exports.DynamicSegment = function() {
            function DynamicSegment(name, optional) {
                this.name = name, this.optional = optional;
            }
            return DynamicSegment.prototype.eachChar = function eachChar(callback) {
                callback({
                    invalidChars: "/",
                    repeat: !0
                });
            }, DynamicSegment.prototype.regex = function regex() {
                return this.optional ? "([^/]+)?" : "([^/]+)";
            }, DynamicSegment.prototype.generate = function generate(params, consumed) {
                return consumed[this.name] = !0, params[this.name];
            }, DynamicSegment;
        }(), StarSegment = exports.StarSegment = function() {
            function StarSegment(name) {
                this.name = name;
            }
            return StarSegment.prototype.eachChar = function eachChar(callback) {
                callback({
                    invalidChars: "",
                    repeat: !0
                });
            }, StarSegment.prototype.regex = function regex() {
                return "(.+)";
            }, StarSegment.prototype.generate = function generate(params, consumed) {
                return consumed[this.name] = !0, params[this.name];
            }, StarSegment;
        }(), EpsilonSegment = exports.EpsilonSegment = function() {
            function EpsilonSegment() {}
            return EpsilonSegment.prototype.eachChar = function eachChar() {}, EpsilonSegment.prototype.regex = function regex() {
                return "";
            }, EpsilonSegment.prototype.generate = function generate() {
                return "";
            }, EpsilonSegment;
        }(), RouteRecognizer = exports.RouteRecognizer = function() {
            function RouteRecognizer() {
                this.rootState = new State(), this.names = {};
            }
            return RouteRecognizer.prototype.add = function add(route) {
                var _this = this;
                if (Array.isArray(route)) return void route.forEach(function(r) {
                    return _this.add(r);
                });
                for (var currentState = this.rootState, regex = "^", types = {
                    statics: 0,
                    dynamics: 0,
                    stars: 0
                }, names = [], routeName = route.handler.name, isEmpty = !0, isAllOptional = !0, segments = parse(route.path, names, types, route.caseSensitive), i = 0, ii = segments.length; i < ii; i++) {
                    var segment = segments[i];
                    segment instanceof EpsilonSegment || (isEmpty = !1, isAllOptional = isAllOptional && segment.optional, 
                    currentState = addSegment(currentState, segment), regex += segment.optional ? "/?" : "/", 
                    regex += segment.regex());
                }
                if (isAllOptional) if (isEmpty) currentState = currentState.put({
                    validChars: "/"
                }), regex += "/"; else {
                    var finalState = this.rootState.put({
                        validChars: "/"
                    });
                    currentState.epsilon = [ finalState ], currentState = finalState;
                }
                var handlers = [ {
                    handler: route.handler,
                    names: names
                } ];
                if (routeName) for (var routeNames = Array.isArray(routeName) ? routeName : [ routeName ], _i2 = 0; _i2 < routeNames.length; _i2++) this.names[routeNames[_i2]] = {
                    segments: segments,
                    handlers: handlers
                };
                return currentState.handlers = handlers, currentState.regex = new RegExp(regex + "$", route.caseSensitive ? "" : "i"), 
                currentState.types = types, currentState;
            }, RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
                var route = this.names[name];
                if (!route) throw new Error("There is no route named " + name);
                return [].concat(route.handlers);
            }, RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
                return !!this.names[name];
            }, RouteRecognizer.prototype.generate = function generate(name, params) {
                var route = this.names[name];
                if (!route) throw new Error("There is no route named " + name);
                var handler = route.handlers[0].handler;
                if (handler.generationUsesHref) return handler.href;
                for (var routeParams = Object.assign({}, params), segments = route.segments, consumed = {}, output = "", i = 0, l = segments.length; i < l; i++) {
                    var segment = segments[i];
                    if (!(segment instanceof EpsilonSegment)) {
                        var segmentValue = segment.generate(routeParams, consumed);
                        if (null === segmentValue || void 0 === segmentValue) {
                            if (!segment.optional) throw new Error("A value is required for route parameter '" + segment.name + "' in route '" + name + "'.");
                        } else output += "/", output += segmentValue;
                    }
                }
                "/" !== output.charAt(0) && (output = "/" + output);
                for (var param in consumed) delete routeParams[param];
                var queryString = (0, _aureliaPath.buildQueryString)(routeParams);
                return output += queryString ? "?" + queryString : "";
            }, RouteRecognizer.prototype.recognize = function recognize(path) {
                var states = [ this.rootState ], queryParams = {}, isSlashDropped = !1, normalizedPath = path, queryStart = normalizedPath.indexOf("?");
                if (queryStart !== -1) {
                    var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
                    normalizedPath = normalizedPath.substr(0, queryStart), queryParams = (0, _aureliaPath.parseQueryString)(queryString);
                }
                normalizedPath = decodeURI(normalizedPath), "/" !== normalizedPath.charAt(0) && (normalizedPath = "/" + normalizedPath);
                var pathLen = normalizedPath.length;
                pathLen > 1 && "/" === normalizedPath.charAt(pathLen - 1) && (normalizedPath = normalizedPath.substr(0, pathLen - 1), 
                isSlashDropped = !0);
                for (var i = 0, l = normalizedPath.length; i < l && (states = recognizeChar(states, normalizedPath.charAt(i)), 
                states.length); i++) ;
                for (var solutions = [], _i3 = 0, _l = states.length; _i3 < _l; _i3++) states[_i3].handlers && solutions.push(states[_i3]);
                states = sortSolutions(solutions);
                var state = solutions[0];
                if (state && state.handlers) return isSlashDropped && "(.+)$" === state.regex.source.slice(-5) && (normalizedPath += "/"), 
                findHandler(state, normalizedPath, queryParams);
            }, RouteRecognizer;
        }(), RecognizeResults = function RecognizeResults(queryParams) {
            this.splice = Array.prototype.splice, this.slice = Array.prototype.slice, this.push = Array.prototype.push, 
            this.length = 0, this.queryParams = queryParams || {};
        };
    },
    /***/
    "aurelia-router": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            function _normalizeAbsolutePath(path, hasPushState) {
                var absolute = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                return hasPushState || "#" === path[0] || (path = "#" + path), hasPushState && absolute && (path = path.substring(1, path.length)), 
                path;
            }
            function _createRootedPath(fragment, baseUrl, hasPushState, absolute) {
                if (isAbsoluteUrl.test(fragment)) return fragment;
                var path = "";
                return baseUrl.length && "/" !== baseUrl[0] && (path += "/"), path += baseUrl, path.length && "/" === path[path.length - 1] || "/" === fragment[0] || (path += "/"), 
                path.length && "/" === path[path.length - 1] && "/" === fragment[0] && (path = path.substring(0, path.length - 1)), 
                _normalizeAbsolutePath(path + fragment, hasPushState, absolute);
            }
            function _resolveUrl(fragment, baseUrl, hasPushState) {
                return isRootedPath.test(fragment) ? _normalizeAbsolutePath(fragment, hasPushState) : _createRootedPath(fragment, baseUrl, hasPushState);
            }
            function createCompletionHandler(next, status) {
                return function(output) {
                    return Promise.resolve({
                        status: status,
                        output: output,
                        completed: status === pipelineStatus.completed
                    });
                };
            }
            function prune(instruction) {
                instruction.previousInstruction = null, instruction.plan = null;
            }
            function isNavigationCommand(obj) {
                return obj && "function" == typeof obj.navigate;
            }
            function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
                var prev = instruction.previousInstruction, config = instruction.config, plan = {};
                if ("redirect" in config) {
                    var redirectLocation = _resolveUrl(config.redirect, getInstructionBaseUrl(instruction));
                    return instruction.queryString && (redirectLocation += "?" + instruction.queryString), 
                    Promise.reject(new Redirect(redirectLocation));
                }
                if (prev) {
                    var newParams = hasDifferentParameterValues(prev, instruction), pending = [], _loop2 = function _loop2(viewPortName) {
                        var prevViewPortInstruction = prev.viewPortInstructions[viewPortName], nextViewPortConfig = config.viewPorts[viewPortName];
                        if (!nextViewPortConfig) throw new Error('Invalid Route Config: Configuration for viewPort "' + viewPortName + '" was not found for route: "' + instruction.config.route + '."');
                        var viewPortPlan = plan[viewPortName] = {
                            name: viewPortName,
                            config: nextViewPortConfig,
                            prevComponent: prevViewPortInstruction.component,
                            prevModuleId: prevViewPortInstruction.moduleId
                        };
                        if (prevViewPortInstruction.moduleId !== nextViewPortConfig.moduleId) viewPortPlan.strategy = activationStrategy.replace; else if ("determineActivationStrategy" in prevViewPortInstruction.component.viewModel) {
                            var _prevViewPortInstruct;
                            viewPortPlan.strategy = (_prevViewPortInstruct = prevViewPortInstruction.component.viewModel).determineActivationStrategy.apply(_prevViewPortInstruct, instruction.lifecycleArgs);
                        } else config.activationStrategy ? viewPortPlan.strategy = config.activationStrategy : newParams || forceLifecycleMinimum ? viewPortPlan.strategy = activationStrategy.invokeLifecycle : viewPortPlan.strategy = activationStrategy.noChange;
                        if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
                            var path = instruction.getWildcardPath(), task = prevViewPortInstruction.childRouter._createNavigationInstruction(path, instruction).then(function(childInstruction) {
                                return viewPortPlan.childNavigationInstruction = childInstruction, _buildNavigationPlan(childInstruction, viewPortPlan.strategy === activationStrategy.invokeLifecycle).then(function(childPlan) {
                                    childInstruction.plan = childPlan;
                                });
                            });
                            pending.push(task);
                        }
                    };
                    for (var viewPortName in prev.viewPortInstructions) _loop2(viewPortName);
                    return Promise.all(pending).then(function() {
                        return plan;
                    });
                }
                for (var _viewPortName in config.viewPorts) plan[_viewPortName] = {
                    name: _viewPortName,
                    strategy: activationStrategy.replace,
                    config: instruction.config.viewPorts[_viewPortName]
                };
                return Promise.resolve(plan);
            }
            function hasDifferentParameterValues(prev, next) {
                var prevParams = prev.params, nextParams = next.params, nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;
                for (var key in nextParams) if (key !== nextWildCardName && prevParams[key] !== nextParams[key]) return !0;
                for (var _key in prevParams) if (_key !== nextWildCardName && prevParams[_key] !== nextParams[_key]) return !0;
                if (!next.options.compareQueryParams) return !1;
                var prevQueryParams = prev.queryParams, nextQueryParams = next.queryParams;
                for (var _key2 in nextQueryParams) if (prevQueryParams[_key2] !== nextQueryParams[_key2]) return !0;
                for (var _key3 in prevQueryParams) if (prevQueryParams[_key3] !== nextQueryParams[_key3]) return !0;
                return !1;
            }
            function getInstructionBaseUrl(instruction) {
                var instructionBaseUrlParts = [];
                for (instruction = instruction.parentInstruction; instruction; ) instructionBaseUrlParts.unshift(instruction.getBaseUrl()), 
                instruction = instruction.parentInstruction;
                return instructionBaseUrlParts.unshift("/"), instructionBaseUrlParts.join("");
            }
            function validateRouteConfig(config, routes) {
                if ("object" !== ("undefined" == typeof config ? "undefined" : _typeof(config))) throw new Error("Invalid Route Config");
                if ("string" != typeof config.route) {
                    var _name2 = config.name || "(no name)";
                    throw new Error('Invalid Route Config for "' + _name2 + '": You must specify a "route:" pattern.');
                }
                if (!("redirect" in config || config.moduleId || config.navigationStrategy || config.viewPorts)) throw new Error('Invalid Route Config for "' + config.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".');
            }
            function evaluateNavigationStrategy(instruction, evaluator, context) {
                return Promise.resolve(evaluator.call(context, instruction)).then(function() {
                    return "viewPorts" in instruction.config || (instruction.config.viewPorts = {
                        default: {
                            moduleId: instruction.config.moduleId
                        }
                    }), instruction;
                });
            }
            function processDeactivatable(plan, callbackName, next, ignoreResult) {
                function inspect(val) {
                    return ignoreResult || shouldContinue(val) ? iterate() : next.cancel(val);
                }
                function iterate() {
                    if (i--) try {
                        var viewModel = infos[i], _result = viewModel[callbackName]();
                        return processPotential(_result, inspect, next.cancel);
                    } catch (error) {
                        return next.cancel(error);
                    }
                    return next();
                }
                var infos = findDeactivatable(plan, callbackName), i = infos.length;
                return iterate();
            }
            function findDeactivatable(plan, callbackName) {
                var list = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
                for (var viewPortName in plan) {
                    var _viewPortPlan = plan[viewPortName], prevComponent = _viewPortPlan.prevComponent;
                    if ((_viewPortPlan.strategy === activationStrategy.invokeLifecycle || _viewPortPlan.strategy === activationStrategy.replace) && prevComponent) {
                        var viewModel = prevComponent.viewModel;
                        callbackName in viewModel && list.push(viewModel);
                    }
                    _viewPortPlan.childNavigationInstruction ? findDeactivatable(_viewPortPlan.childNavigationInstruction.plan, callbackName, list) : prevComponent && addPreviousDeactivatable(prevComponent, callbackName, list);
                }
                return list;
            }
            function addPreviousDeactivatable(component, callbackName, list) {
                var childRouter = component.childRouter;
                if (childRouter && childRouter.currentInstruction) {
                    var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;
                    for (var viewPortName in viewPortInstructions) {
                        var _viewPortInstruction2 = viewPortInstructions[viewPortName], prevComponent = _viewPortInstruction2.component, prevViewModel = prevComponent.viewModel;
                        callbackName in prevViewModel && list.push(prevViewModel), addPreviousDeactivatable(prevComponent, callbackName, list);
                    }
                }
            }
            function processActivatable(navigationInstruction, callbackName, next, ignoreResult) {
                function inspect(val, router) {
                    return ignoreResult || shouldContinue(val, router) ? iterate() : next.cancel(val);
                }
                function iterate() {
                    if (i++, i < length) try {
                        var _ret3 = function() {
                            var _current$viewModel, current = infos[i], result = (_current$viewModel = current.viewModel)[callbackName].apply(_current$viewModel, current.lifecycleArgs);
                            return {
                                v: processPotential(result, function(val) {
                                    return inspect(val, current.router);
                                }, next.cancel)
                            };
                        }();
                        if ("object" === ("undefined" == typeof _ret3 ? "undefined" : _typeof(_ret3))) return _ret3.v;
                    } catch (error) {
                        return next.cancel(error);
                    }
                    return next();
                }
                var infos = findActivatable(navigationInstruction, callbackName), length = infos.length, i = -1;
                return iterate();
            }
            function findActivatable(navigationInstruction, callbackName) {
                var list = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2], router = arguments[3], plan = navigationInstruction.plan;
                return Object.keys(plan).filter(function(viewPortName) {
                    var viewPortPlan = plan[viewPortName], viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName], viewModel = viewPortInstruction.component.viewModel;
                    (viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in viewModel && list.push({
                        viewModel: viewModel,
                        lifecycleArgs: viewPortInstruction.lifecycleArgs,
                        router: router
                    }), viewPortPlan.childNavigationInstruction && findActivatable(viewPortPlan.childNavigationInstruction, callbackName, list, viewPortInstruction.component.childRouter || router);
                }), list;
            }
            function shouldContinue(output, router) {
                return !(output instanceof Error) && (isNavigationCommand(output) ? ("function" == typeof output.setRouter && output.setRouter(router), 
                !!output.shouldContinueProcessing) : void 0 === output || output);
            }
            function processPotential(obj, resolve, reject) {
                if (obj && "function" == typeof obj.then) return Promise.resolve(obj).then(resolve).catch(reject);
                if (obj && "function" == typeof obj.subscribe) {
                    var _ret4 = function() {
                        var obs = obj;
                        return {
                            v: new SafeSubscription(function(sub) {
                                return obs.subscribe({
                                    next: function next() {
                                        sub.subscribed && (sub.unsubscribe(), resolve(obj));
                                    },
                                    error: function error(_error) {
                                        sub.subscribed && (sub.unsubscribe(), reject(_error));
                                    },
                                    complete: function complete() {
                                        sub.subscribed && (sub.unsubscribe(), resolve(obj));
                                    }
                                });
                            })
                        };
                    }();
                    if ("object" === ("undefined" == typeof _ret4 ? "undefined" : _typeof(_ret4))) return _ret4.v;
                }
                try {
                    return resolve(obj);
                } catch (error) {
                    return reject(error);
                }
            }
            function loadNewRoute(routeLoader, navigationInstruction) {
                var toLoad = determineWhatToLoad(navigationInstruction), loadPromises = toLoad.map(function(current) {
                    return loadRoute(routeLoader, current.navigationInstruction, current.viewPortPlan);
                });
                return Promise.all(loadPromises);
            }
            function determineWhatToLoad(navigationInstruction) {
                var toLoad = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1], plan = navigationInstruction.plan;
                for (var viewPortName in plan) {
                    var _viewPortPlan2 = plan[viewPortName];
                    if (_viewPortPlan2.strategy === activationStrategy.replace) toLoad.push({
                        viewPortPlan: _viewPortPlan2,
                        navigationInstruction: navigationInstruction
                    }), _viewPortPlan2.childNavigationInstruction && determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad); else {
                        var _viewPortInstruction3 = navigationInstruction.addViewPortInstruction(viewPortName, _viewPortPlan2.strategy, _viewPortPlan2.prevModuleId, _viewPortPlan2.prevComponent);
                        _viewPortPlan2.childNavigationInstruction && (_viewPortInstruction3.childNavigationInstruction = _viewPortPlan2.childNavigationInstruction, 
                        determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad));
                    }
                }
                return toLoad;
            }
            function loadRoute(routeLoader, navigationInstruction, viewPortPlan) {
                var moduleId = viewPortPlan.config.moduleId;
                return loadComponent(routeLoader, navigationInstruction, viewPortPlan.config).then(function(component) {
                    var viewPortInstruction = navigationInstruction.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component), childRouter = component.childRouter;
                    if (childRouter) {
                        var path = navigationInstruction.getWildcardPath();
                        return childRouter._createNavigationInstruction(path, navigationInstruction).then(function(childInstruction) {
                            return viewPortPlan.childNavigationInstruction = childInstruction, _buildNavigationPlan(childInstruction).then(function(childPlan) {
                                return childInstruction.plan = childPlan, viewPortInstruction.childNavigationInstruction = childInstruction, 
                                loadNewRoute(routeLoader, childInstruction);
                            });
                        });
                    }
                });
            }
            function loadComponent(routeLoader, navigationInstruction, config) {
                var router = navigationInstruction.router, lifecycleArgs = navigationInstruction.lifecycleArgs;
                return routeLoader.loadRoute(router, config, navigationInstruction).then(function(component) {
                    var viewModel = component.viewModel, childContainer = component.childContainer;
                    if (component.router = router, component.config = config, "configureRouter" in viewModel) {
                        var _ret5 = function() {
                            var childRouter = childContainer.getChildRouter();
                            return component.childRouter = childRouter, {
                                v: childRouter.configure(function(c) {
                                    return viewModel.configureRouter.apply(viewModel, [ c, childRouter ].concat(lifecycleArgs));
                                }).then(function() {
                                    return component;
                                })
                            };
                        }();
                        if ("object" === ("undefined" == typeof _ret5 ? "undefined" : _typeof(_ret5))) return _ret5.v;
                    }
                    return component;
                });
            }
            function processResult(instruction, result, instructionCount, router) {
                result && "completed" in result && "output" in result || (result = result || {}, 
                result.output = new Error("Expected router pipeline to return a navigation result, but got [" + JSON.stringify(result) + "] instead."));
                var finalResult = null;
                return isNavigationCommand(result.output) ? result.output.navigate(router) : (finalResult = result, 
                result.completed || (result.output instanceof Error && logger.error(result.output), 
                restorePreviousLocation(router))), router._dequeueInstruction(instructionCount + 1).then(function(innerResult) {
                    return finalResult || innerResult || result;
                });
            }
            function resolveInstruction(instruction, result, isInnerInstruction, router) {
                if (instruction.resolve(result), !isInnerInstruction) {
                    router.isNavigating = !1;
                    var eventArgs = {
                        instruction: instruction,
                        result: result
                    }, eventName = void 0;
                    if (result.output instanceof Error) eventName = "error"; else if (result.completed) {
                        var _queryString = instruction.queryString ? "?" + instruction.queryString : "";
                        router.history.previousLocation = instruction.fragment + _queryString, eventName = "success";
                    } else eventName = "canceled";
                    router.events.publish("router:navigation:" + eventName, eventArgs), router.events.publish("router:navigation:complete", eventArgs);
                }
                return result;
            }
            function restorePreviousLocation(router) {
                var previousLocation = router.history.previousLocation;
                previousLocation ? router.navigate(router.history.previousLocation, {
                    trigger: !1,
                    replace: !0
                }) : router.fallbackRoute ? router.navigate(router.fallbackRoute, {
                    trigger: !0,
                    replace: !0
                }) : logger.error("Router navigation failed, and no previous location or fallbackRoute could be restored.");
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.AppRouter = exports.PipelineProvider = exports.LoadRouteStep = exports.RouteLoader = exports.ActivateNextStep = exports.DeactivatePreviousStep = exports.CanActivateNextStep = exports.CanDeactivatePreviousStep = exports.Router = exports.BuildNavigationPlanStep = exports.activationStrategy = exports.RouterConfiguration = exports.RedirectToRoute = exports.Redirect = exports.NavModel = exports.NavigationInstruction = exports.CommitChangesStep = exports.Pipeline = exports.pipelineStatus = void 0;
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
            }, _createClass = function() {
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
            }();
            exports._normalizeAbsolutePath = _normalizeAbsolutePath, exports._createRootedPath = _createRootedPath, 
            exports._resolveUrl = _resolveUrl, exports.isNavigationCommand = isNavigationCommand, 
            exports._buildNavigationPlan = _buildNavigationPlan;
            var _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), _aureliaRouteRecognizer = __webpack_require__("aurelia-route-recognizer"), _aureliaDependencyInjection = __webpack_require__(3), _aureliaHistory = __webpack_require__(12), _aureliaEventAggregator = __webpack_require__("aurelia-event-aggregator"), isRootedPath = /^#?\//, isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i, pipelineStatus = exports.pipelineStatus = {
                completed: "completed",
                canceled: "canceled",
                rejected: "rejected",
                running: "running"
            }, Pipeline = exports.Pipeline = function() {
                function Pipeline() {
                    this.steps = [];
                }
                return Pipeline.prototype.addStep = function addStep(step) {
                    var run = void 0;
                    if ("function" == typeof step) run = step; else {
                        if ("function" == typeof step.getSteps) {
                            for (var steps = step.getSteps(), i = 0, l = steps.length; i < l; i++) this.addStep(steps[i]);
                            return this;
                        }
                        run = step.run.bind(step);
                    }
                    return this.steps.push(run), this;
                }, Pipeline.prototype.run = function run(instruction) {
                    function next() {
                        if (index++, !(index < steps.length)) return next.complete();
                        var currentStep = steps[index];
                        try {
                            return currentStep(instruction, next);
                        } catch (e) {
                            return next.reject(e);
                        }
                    }
                    var index = -1, steps = this.steps;
                    return next.complete = createCompletionHandler(next, pipelineStatus.completed), 
                    next.cancel = createCompletionHandler(next, pipelineStatus.canceled), next.reject = createCompletionHandler(next, pipelineStatus.rejected), 
                    next();
                }, Pipeline;
            }(), CommitChangesStep = exports.CommitChangesStep = function() {
                function CommitChangesStep() {}
                return CommitChangesStep.prototype.run = function run(navigationInstruction, next) {
                    return navigationInstruction._commitChanges(!0).then(function() {
                        return navigationInstruction._updateTitle(), next();
                    });
                }, CommitChangesStep;
            }(), NavigationInstruction = exports.NavigationInstruction = function() {
                function NavigationInstruction(init) {
                    this.plan = null, this.options = {}, Object.assign(this, init), this.params = this.params || {}, 
                    this.viewPortInstructions = {};
                    var ancestorParams = [], current = this;
                    do {
                        var currentParams = Object.assign({}, current.params);
                        current.config && current.config.hasChildRouter && delete currentParams[current.getWildCardName()], 
                        ancestorParams.unshift(currentParams), current = current.parentInstruction;
                    } while (current);
                    var allParams = Object.assign.apply(Object, [ {}, this.queryParams ].concat(ancestorParams));
                    this.lifecycleArgs = [ allParams, this.config, this ];
                }
                return NavigationInstruction.prototype.getAllInstructions = function getAllInstructions() {
                    var instructions = [ this ];
                    for (var key in this.viewPortInstructions) {
                        var childInstruction = this.viewPortInstructions[key].childNavigationInstruction;
                        childInstruction && instructions.push.apply(instructions, childInstruction.getAllInstructions());
                    }
                    return instructions;
                }, NavigationInstruction.prototype.getAllPreviousInstructions = function getAllPreviousInstructions() {
                    return this.getAllInstructions().map(function(c) {
                        return c.previousInstruction;
                    }).filter(function(c) {
                        return c;
                    });
                }, NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
                    var viewportInstruction = this.viewPortInstructions[viewPortName] = {
                        name: viewPortName,
                        strategy: strategy,
                        moduleId: moduleId,
                        component: component,
                        childRouter: component.childRouter,
                        lifecycleArgs: this.lifecycleArgs.slice()
                    };
                    return viewportInstruction;
                }, NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
                    var wildcardIndex = this.config.route.lastIndexOf("*");
                    return this.config.route.substr(wildcardIndex + 1);
                }, NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
                    var wildcardName = this.getWildCardName(), path = this.params[wildcardName] || "";
                    return this.queryString && (path += "?" + this.queryString), path;
                }, NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
                    if (!this.params) return this.fragment;
                    var wildcardName = this.getWildCardName(), path = this.params[wildcardName] || "";
                    return path ? (path = encodeURI(path), this.fragment.substr(0, this.fragment.lastIndexOf(path))) : this.fragment;
                }, NavigationInstruction.prototype._commitChanges = function _commitChanges(waitToSwap) {
                    var _this = this, router = this.router;
                    router.currentInstruction = this, this.previousInstruction && (this.previousInstruction.config.navModel.isActive = !1), 
                    this.config.navModel.isActive = !0, router._refreshBaseUrl(), router.refreshNavigation();
                    var loads = [], delaySwaps = [], _loop = function _loop(viewPortName) {
                        var viewPortInstruction = _this.viewPortInstructions[viewPortName], viewPort = router.viewPorts[viewPortName];
                        if (!viewPort) throw new Error("There was no router-view found in the view for " + viewPortInstruction.moduleId + ".");
                        viewPortInstruction.strategy === activationStrategy.replace ? (waitToSwap && delaySwaps.push({
                            viewPort: viewPort,
                            viewPortInstruction: viewPortInstruction
                        }), loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function(x) {
                            if (viewPortInstruction.childNavigationInstruction) return viewPortInstruction.childNavigationInstruction._commitChanges();
                        }))) : viewPortInstruction.childNavigationInstruction && loads.push(viewPortInstruction.childNavigationInstruction._commitChanges(waitToSwap));
                    };
                    for (var viewPortName in this.viewPortInstructions) _loop(viewPortName);
                    return Promise.all(loads).then(function() {
                        return delaySwaps.forEach(function(x) {
                            return x.viewPort.swap(x.viewPortInstruction);
                        }), null;
                    }).then(function() {
                        return prune(_this);
                    });
                }, NavigationInstruction.prototype._updateTitle = function _updateTitle() {
                    var title = this._buildTitle();
                    title && this.router.history.setTitle(title);
                }, NavigationInstruction.prototype._buildTitle = function _buildTitle() {
                    var separator = arguments.length <= 0 || void 0 === arguments[0] ? " | " : arguments[0], title = "", childTitles = [];
                    this.config.navModel.title && (title = this.router.transformTitle(this.config.navModel.title));
                    for (var viewPortName in this.viewPortInstructions) {
                        var _viewPortInstruction = this.viewPortInstructions[viewPortName];
                        if (_viewPortInstruction.childNavigationInstruction) {
                            var childTitle = _viewPortInstruction.childNavigationInstruction._buildTitle(separator);
                            childTitle && childTitles.push(childTitle);
                        }
                    }
                    return childTitles.length && (title = childTitles.join(separator) + (title ? separator : "") + title), 
                    this.router.title && (title += (title ? separator : "") + this.router.transformTitle(this.router.title)), 
                    title;
                }, NavigationInstruction;
            }(), NavModel = exports.NavModel = function() {
                function NavModel(router, relativeHref) {
                    this.isActive = !1, this.title = null, this.href = null, this.relativeHref = null, 
                    this.settings = {}, this.config = null, this.router = router, this.relativeHref = relativeHref;
                }
                return NavModel.prototype.setTitle = function setTitle(title) {
                    this.title = title, this.isActive && this.router.updateTitle();
                }, NavModel;
            }(), Redirect = exports.Redirect = function() {
                function Redirect(url) {
                    var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    this.url = url, this.options = Object.assign({
                        trigger: !0,
                        replace: !0
                    }, options), this.shouldContinueProcessing = !1;
                }
                return Redirect.prototype.setRouter = function setRouter(router) {
                    this.router = router;
                }, Redirect.prototype.navigate = function navigate(appRouter) {
                    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
                    navigatingRouter.navigate(this.url, this.options);
                }, Redirect;
            }(), RedirectToRoute = exports.RedirectToRoute = function() {
                function RedirectToRoute(route) {
                    var params = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], options = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    this.route = route, this.params = params, this.options = Object.assign({
                        trigger: !0,
                        replace: !0
                    }, options), this.shouldContinueProcessing = !1;
                }
                return RedirectToRoute.prototype.setRouter = function setRouter(router) {
                    this.router = router;
                }, RedirectToRoute.prototype.navigate = function navigate(appRouter) {
                    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
                    navigatingRouter.navigateToRoute(this.route, this.params, this.options);
                }, RedirectToRoute;
            }(), RouterConfiguration = exports.RouterConfiguration = function() {
                function RouterConfiguration() {
                    this.instructions = [], this.options = {}, this.pipelineSteps = [];
                }
                return RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
                    return this.pipelineSteps.push({
                        name: name,
                        step: step
                    }), this;
                }, RouterConfiguration.prototype.addAuthorizeStep = function addAuthorizeStep(step) {
                    return this.addPipelineStep("authorize", step);
                }, RouterConfiguration.prototype.addPreActivateStep = function addPreActivateStep(step) {
                    return this.addPipelineStep("preActivate", step);
                }, RouterConfiguration.prototype.addPreRenderStep = function addPreRenderStep(step) {
                    return this.addPipelineStep("preRender", step);
                }, RouterConfiguration.prototype.addPostRenderStep = function addPostRenderStep(step) {
                    return this.addPipelineStep("postRender", step);
                }, RouterConfiguration.prototype.fallbackRoute = function fallbackRoute(fragment) {
                    return this._fallbackRoute = fragment, this;
                }, RouterConfiguration.prototype.map = function map(route) {
                    return Array.isArray(route) ? (route.forEach(this.map.bind(this)), this) : this.mapRoute(route);
                }, RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
                    return this.instructions.push(function(router) {
                        var routeConfigs = [];
                        if (Array.isArray(config.route)) for (var i = 0, ii = config.route.length; i < ii; ++i) {
                            var current = Object.assign({}, config);
                            current.route = config.route[i], routeConfigs.push(current);
                        } else routeConfigs.push(Object.assign({}, config));
                        for (var navModel = void 0, _i = 0, _ii = routeConfigs.length; _i < _ii; ++_i) {
                            var _routeConfig = routeConfigs[_i];
                            _routeConfig.settings = _routeConfig.settings || {}, navModel || (navModel = router.createNavModel(_routeConfig)), 
                            router.addRoute(_routeConfig, navModel);
                        }
                    }), this;
                }, RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
                    return this.unknownRouteConfig = config, this;
                }, RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
                    for (var instructions = this.instructions, i = 0, ii = instructions.length; i < ii; ++i) instructions[i](router);
                    this.title && (router.title = this.title), this.unknownRouteConfig && router.handleUnknownRoutes(this.unknownRouteConfig), 
                    this._fallbackRoute && (router.fallbackRoute = this._fallbackRoute), router.options = this.options;
                    var pipelineSteps = this.pipelineSteps;
                    if (pipelineSteps.length) {
                        if (!router.isRoot) throw new Error("Pipeline steps can only be added to the root router");
                        for (var pipelineProvider = router.pipelineProvider, _i2 = 0, _ii2 = pipelineSteps.length; _i2 < _ii2; ++_i2) {
                            var _pipelineSteps$_i = pipelineSteps[_i2], _name = _pipelineSteps$_i.name, step = _pipelineSteps$_i.step;
                            pipelineProvider.addStep(_name, step);
                        }
                    }
                }, RouterConfiguration;
            }(), activationStrategy = exports.activationStrategy = {
                noChange: "no-change",
                invokeLifecycle: "invoke-lifecycle",
                replace: "replace"
            }, BuildNavigationPlanStep = exports.BuildNavigationPlanStep = function() {
                function BuildNavigationPlanStep() {}
                return BuildNavigationPlanStep.prototype.run = function run(navigationInstruction, next) {
                    return _buildNavigationPlan(navigationInstruction).then(function(plan) {
                        return navigationInstruction.plan = plan, next();
                    }).catch(next.cancel);
                }, BuildNavigationPlanStep;
            }(), Router = exports.Router = function() {
                function Router(container, history) {
                    var _this2 = this;
                    this.parent = null, this.options = {}, this.transformTitle = function(title) {
                        return _this2.parent ? _this2.parent.transformTitle(title) : title;
                    }, this.container = container, this.history = history, this.reset();
                }
                return Router.prototype.reset = function reset() {
                    var _this3 = this;
                    this.viewPorts = {}, this.routes = [], this.baseUrl = "", this.isConfigured = !1, 
                    this.isNavigating = !1, this.navigation = [], this.currentInstruction = null, this._fallbackOrder = 100, 
                    this._recognizer = new _aureliaRouteRecognizer.RouteRecognizer(), this._childRecognizer = new _aureliaRouteRecognizer.RouteRecognizer(), 
                    this._configuredPromise = new Promise(function(resolve) {
                        _this3._resolveConfiguredPromise = resolve;
                    });
                }, Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
                    name = name || "default", this.viewPorts[name] = viewPort;
                }, Router.prototype.ensureConfigured = function ensureConfigured() {
                    return this._configuredPromise;
                }, Router.prototype.configure = function configure(callbackOrConfig) {
                    var _this4 = this;
                    this.isConfigured = !0;
                    var result = callbackOrConfig, config = void 0;
                    return "function" == typeof callbackOrConfig && (config = new RouterConfiguration(), 
                    result = callbackOrConfig(config)), Promise.resolve(result).then(function(c) {
                        c && c.exportToRouter && (config = c), config.exportToRouter(_this4), _this4.isConfigured = !0, 
                        _this4._resolveConfiguredPromise();
                    });
                }, Router.prototype.navigate = function navigate(fragment, options) {
                    return !this.isConfigured && this.parent ? this.parent.navigate(fragment, options) : this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
                }, Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
                    var path = this.generate(route, params);
                    return this.navigate(path, options);
                }, Router.prototype.navigateBack = function navigateBack() {
                    this.history.navigateBack();
                }, Router.prototype.createChild = function createChild(container) {
                    var childRouter = new Router(container || this.container.createChild(), this.history);
                    return childRouter.parent = this, childRouter;
                }, Router.prototype.generate = function generate(name, params) {
                    var options = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], hasRoute = this._recognizer.hasRoute(name);
                    if ((!this.isConfigured || !hasRoute) && this.parent) return this.parent.generate(name, params);
                    if (!hasRoute) throw new Error("A route with name '" + name + "' could not be found. Check that `name: '" + name + "'` was specified in the route's config.");
                    var path = this._recognizer.generate(name, params), rootedPath = _createRootedPath(path, this.baseUrl, this.history._hasPushState, options.absolute);
                    return options.absolute ? "" + this.history.getAbsoluteRoot() + rootedPath : rootedPath;
                }, Router.prototype.createNavModel = function createNavModel(config) {
                    var navModel = new NavModel(this, "href" in config ? config.href : config.route);
                    return navModel.title = config.title, navModel.order = config.nav, navModel.href = config.href, 
                    navModel.settings = config.settings, navModel.config = config, navModel;
                }, Router.prototype.addRoute = function addRoute(config, navModel) {
                    validateRouteConfig(config, this.routes), "viewPorts" in config || config.navigationStrategy || (config.viewPorts = {
                        default: {
                            moduleId: config.moduleId,
                            view: config.view
                        }
                    }), navModel || (navModel = this.createNavModel(config)), this.routes.push(config);
                    var path = config.route;
                    "/" === path.charAt(0) && (path = path.substr(1));
                    var caseSensitive = config.caseSensitive === !0, state = this._recognizer.add({
                        path: path,
                        handler: config,
                        caseSensitive: caseSensitive
                    });
                    if (path) {
                        var _settings = config.settings;
                        delete config.settings;
                        var withChild = JSON.parse(JSON.stringify(config));
                        config.settings = _settings, withChild.route = path + "/*childRoute", withChild.hasChildRouter = !0, 
                        this._childRecognizer.add({
                            path: withChild.route,
                            handler: withChild,
                            caseSensitive: caseSensitive
                        }), withChild.navModel = navModel, withChild.settings = config.settings, withChild.navigationStrategy = config.navigationStrategy;
                    }
                    if (config.navModel = navModel, (navModel.order || 0 === navModel.order) && this.navigation.indexOf(navModel) === -1) {
                        if (!navModel.href && "" !== navModel.href && (state.types.dynamics || state.types.stars)) throw new Error('Invalid route config for "' + config.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
                        "number" != typeof navModel.order && (navModel.order = ++this._fallbackOrder), this.navigation.push(navModel), 
                        this.navigation = this.navigation.sort(function(a, b) {
                            return a.order - b.order;
                        });
                    }
                }, Router.prototype.hasRoute = function hasRoute(name) {
                    return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
                }, Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
                    return this._recognizer.hasRoute(name);
                }, Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
                    var _this5 = this;
                    if (!config) throw new Error("Invalid unknown route handler");
                    this.catchAllHandler = function(instruction) {
                        return _this5._createRouteConfig(config, instruction).then(function(c) {
                            return instruction.config = c, instruction;
                        });
                    };
                }, Router.prototype.updateTitle = function updateTitle() {
                    return this.parent ? this.parent.updateTitle() : void this.currentInstruction._updateTitle();
                }, Router.prototype.refreshNavigation = function refreshNavigation() {
                    for (var nav = this.navigation, i = 0, length = nav.length; i < length; i++) {
                        var current = nav[i];
                        current.config.href ? current.href = _normalizeAbsolutePath(current.config.href, this.history._hasPushState) : current.href = _createRootedPath(current.relativeHref, this.baseUrl, this.history._hasPushState);
                    }
                }, Router.prototype._refreshBaseUrl = function _refreshBaseUrl() {
                    if (this.parent) {
                        var baseUrl = this.parent.currentInstruction.getBaseUrl();
                        this.baseUrl = this.parent.baseUrl + baseUrl;
                    }
                }, Router.prototype._createNavigationInstruction = function _createNavigationInstruction() {
                    var url = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], parentInstruction = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], fragment = url, queryString = "", queryIndex = url.indexOf("?");
                    queryIndex !== -1 && (fragment = url.substr(0, queryIndex), queryString = url.substr(queryIndex + 1));
                    var results = this._recognizer.recognize(url);
                    results && results.length || (results = this._childRecognizer.recognize(url));
                    var instructionInit = {
                        fragment: fragment,
                        queryString: queryString,
                        config: null,
                        parentInstruction: parentInstruction,
                        previousInstruction: this.currentInstruction,
                        router: this,
                        options: {
                            compareQueryParams: this.options.compareQueryParams
                        }
                    };
                    if (results && results.length) {
                        var first = results[0], _instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
                            params: first.params,
                            queryParams: first.queryParams || results.queryParams,
                            config: first.config || first.handler
                        }));
                        return "function" == typeof first.handler ? evaluateNavigationStrategy(_instruction, first.handler, first) : first.handler && "function" == typeof first.handler.navigationStrategy ? evaluateNavigationStrategy(_instruction, first.handler.navigationStrategy, first.handler) : Promise.resolve(_instruction);
                    }
                    if (this.catchAllHandler) {
                        var _instruction2 = new NavigationInstruction(Object.assign({}, instructionInit, {
                            params: {
                                path: fragment
                            },
                            queryParams: results && results.queryParams,
                            config: null
                        }));
                        return evaluateNavigationStrategy(_instruction2, this.catchAllHandler);
                    }
                    return Promise.reject(new Error("Route not found: " + url));
                }, Router.prototype._createRouteConfig = function _createRouteConfig(config, instruction) {
                    var _this6 = this;
                    return Promise.resolve(config).then(function(c) {
                        return "string" == typeof c ? {
                            moduleId: c
                        } : "function" == typeof c ? c(instruction) : c;
                    }).then(function(c) {
                        return "string" == typeof c ? {
                            moduleId: c
                        } : c;
                    }).then(function(c) {
                        return c.route = instruction.params.path, validateRouteConfig(c, _this6.routes), 
                        c.navModel || (c.navModel = _this6.createNavModel(c)), c;
                    });
                }, _createClass(Router, [ {
                    key: "isRoot",
                    get: function get() {
                        return !this.parent;
                    }
                } ]), Router;
            }(), CanDeactivatePreviousStep = exports.CanDeactivatePreviousStep = function() {
                function CanDeactivatePreviousStep() {}
                return CanDeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
                    return processDeactivatable(navigationInstruction.plan, "canDeactivate", next);
                }, CanDeactivatePreviousStep;
            }(), CanActivateNextStep = exports.CanActivateNextStep = function() {
                function CanActivateNextStep() {}
                return CanActivateNextStep.prototype.run = function run(navigationInstruction, next) {
                    return processActivatable(navigationInstruction, "canActivate", next);
                }, CanActivateNextStep;
            }(), DeactivatePreviousStep = exports.DeactivatePreviousStep = function() {
                function DeactivatePreviousStep() {}
                return DeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
                    return processDeactivatable(navigationInstruction.plan, "deactivate", next, !0);
                }, DeactivatePreviousStep;
            }(), ActivateNextStep = exports.ActivateNextStep = function() {
                function ActivateNextStep() {}
                return ActivateNextStep.prototype.run = function run(navigationInstruction, next) {
                    return processActivatable(navigationInstruction, "activate", next, !0);
                }, ActivateNextStep;
            }(), SafeSubscription = function() {
                function SafeSubscription(subscriptionFunc) {
                    this._subscribed = !0, this._subscription = subscriptionFunc(this), this._subscribed || this.unsubscribe();
                }
                return SafeSubscription.prototype.unsubscribe = function unsubscribe() {
                    this._subscribed && this._subscription && this._subscription.unsubscribe(), this._subscribed = !1;
                }, _createClass(SafeSubscription, [ {
                    key: "subscribed",
                    get: function get() {
                        return this._subscribed;
                    }
                } ]), SafeSubscription;
            }(), RouteLoader = exports.RouteLoader = function() {
                function RouteLoader() {}
                return RouteLoader.prototype.loadRoute = function loadRoute(router, config, navigationInstruction) {
                    throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
                }, RouteLoader;
            }(), LoadRouteStep = exports.LoadRouteStep = function() {
                function LoadRouteStep(routeLoader) {
                    this.routeLoader = routeLoader;
                }
                return LoadRouteStep.inject = function inject() {
                    return [ RouteLoader ];
                }, LoadRouteStep.prototype.run = function run(navigationInstruction, next) {
                    return loadNewRoute(this.routeLoader, navigationInstruction).then(next).catch(next.cancel);
                }, LoadRouteStep;
            }(), PipelineSlot = function() {
                function PipelineSlot(container, name, alias) {
                    this.steps = [], this.container = container, this.slotName = name, this.slotAlias = alias;
                }
                return PipelineSlot.prototype.getSteps = function getSteps() {
                    var _this7 = this;
                    return this.steps.map(function(x) {
                        return _this7.container.get(x);
                    });
                }, PipelineSlot;
            }(), PipelineProvider = exports.PipelineProvider = function() {
                function PipelineProvider(container) {
                    this.container = container, this.steps = [ BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, this._createPipelineSlot("authorize"), CanActivateNextStep, this._createPipelineSlot("preActivate", "modelbind"), DeactivatePreviousStep, ActivateNextStep, this._createPipelineSlot("preRender", "precommit"), CommitChangesStep, this._createPipelineSlot("postRender", "postcomplete") ];
                }
                return PipelineProvider.inject = function inject() {
                    return [ _aureliaDependencyInjection.Container ];
                }, PipelineProvider.prototype.createPipeline = function createPipeline() {
                    var _this8 = this, pipeline = new Pipeline();
                    return this.steps.forEach(function(step) {
                        return pipeline.addStep(_this8.container.get(step));
                    }), pipeline;
                }, PipelineProvider.prototype._findStep = function _findStep(name) {
                    return this.steps.find(function(x) {
                        return x.slotName === name || x.slotAlias === name;
                    });
                }, PipelineProvider.prototype.addStep = function addStep(name, step) {
                    var found = this._findStep(name);
                    if (!found) throw new Error("Invalid pipeline slot name: " + name + ".");
                    found.steps.includes(step) || found.steps.push(step);
                }, PipelineProvider.prototype.removeStep = function removeStep(name, step) {
                    var slot = this._findStep(name);
                    slot && slot.steps.splice(slot.steps.indexOf(step), 1);
                }, PipelineProvider.prototype._clearSteps = function _clearSteps() {
                    var name = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], slot = this._findStep(name);
                    slot && (slot.steps = []);
                }, PipelineProvider.prototype.reset = function reset() {
                    this._clearSteps("authorize"), this._clearSteps("preActivate"), this._clearSteps("preRender"), 
                    this._clearSteps("postRender");
                }, PipelineProvider.prototype._createPipelineSlot = function _createPipelineSlot(name, alias) {
                    return new PipelineSlot(this.container, name, alias);
                }, PipelineProvider;
            }(), logger = LogManager.getLogger("app-router"), AppRouter = exports.AppRouter = function(_Router) {
                function AppRouter(container, history, pipelineProvider, events) {
                    var _this9 = _possibleConstructorReturn(this, _Router.call(this, container, history));
                    return _this9.pipelineProvider = pipelineProvider, _this9.events = events, _this9;
                }
                return _inherits(AppRouter, _Router), AppRouter.inject = function inject() {
                    return [ _aureliaDependencyInjection.Container, _aureliaHistory.History, PipelineProvider, _aureliaEventAggregator.EventAggregator ];
                }, AppRouter.prototype.reset = function reset() {
                    _Router.prototype.reset.call(this), this.maxInstructionCount = 10, this._queue ? this._queue.length = 0 : this._queue = [];
                }, AppRouter.prototype.loadUrl = function loadUrl(url) {
                    var _this10 = this;
                    return this._createNavigationInstruction(url).then(function(instruction) {
                        return _this10._queueInstruction(instruction);
                    }).catch(function(error) {
                        logger.error(error), restorePreviousLocation(_this10);
                    });
                }, AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
                    var _this11 = this;
                    if (_Router.prototype.registerViewPort.call(this, viewPort, name), this.isActive) this._dequeueInstruction(); else {
                        var _ret6 = function() {
                            var viewModel = _this11._findViewModel(viewPort);
                            if ("configureRouter" in viewModel) {
                                if (!_this11.isConfigured) {
                                    var _ret7 = function() {
                                        var resolveConfiguredPromise = _this11._resolveConfiguredPromise;
                                        return _this11._resolveConfiguredPromise = function() {}, {
                                            v: {
                                                v: _this11.configure(function(config) {
                                                    return viewModel.configureRouter(config, _this11);
                                                }).then(function() {
                                                    _this11.activate(), resolveConfiguredPromise();
                                                })
                                            }
                                        };
                                    }();
                                    if ("object" === ("undefined" == typeof _ret7 ? "undefined" : _typeof(_ret7))) return _ret7.v;
                                }
                            } else _this11.activate();
                        }();
                        if ("object" === ("undefined" == typeof _ret6 ? "undefined" : _typeof(_ret6))) return _ret6.v;
                    }
                    return Promise.resolve();
                }, AppRouter.prototype.activate = function activate(options) {
                    this.isActive || (this.isActive = !0, this.options = Object.assign({
                        routeHandler: this.loadUrl.bind(this)
                    }, this.options, options), this.history.activate(this.options), this._dequeueInstruction());
                }, AppRouter.prototype.deactivate = function deactivate() {
                    this.isActive = !1, this.history.deactivate();
                }, AppRouter.prototype._queueInstruction = function _queueInstruction(instruction) {
                    var _this12 = this;
                    return new Promise(function(resolve) {
                        instruction.resolve = resolve, _this12._queue.unshift(instruction), _this12._dequeueInstruction();
                    });
                }, AppRouter.prototype._dequeueInstruction = function _dequeueInstruction() {
                    var _this13 = this, instructionCount = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    return Promise.resolve().then(function() {
                        if (!_this13.isNavigating || instructionCount) {
                            var instruction = _this13._queue.shift();
                            if (_this13._queue.length = 0, instruction) {
                                if (_this13.isNavigating = !0, instruction.previousInstruction = _this13.currentInstruction, 
                                instructionCount) {
                                    if (instructionCount === _this13.maxInstructionCount - 1) return logger.error(instructionCount + 1 + " navigation instructions have been attempted without success. Restoring last known good location."), 
                                    restorePreviousLocation(_this13), _this13._dequeueInstruction(instructionCount + 1);
                                    if (instructionCount > _this13.maxInstructionCount) throw new Error("Maximum navigation attempts exceeded. Giving up.");
                                } else _this13.events.publish("router:navigation:processing", {
                                    instruction: instruction
                                });
                                var pipeline = _this13.pipelineProvider.createPipeline();
                                return pipeline.run(instruction).then(function(result) {
                                    return processResult(instruction, result, instructionCount, _this13);
                                }).catch(function(error) {
                                    return {
                                        output: error instanceof Error ? error : new Error(error)
                                    };
                                }).then(function(result) {
                                    return resolveInstruction(instruction, result, !!instructionCount, _this13);
                                });
                            }
                        }
                    });
                }, AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
                    if (this.container.viewModel) return this.container.viewModel;
                    if (viewPort.container) for (var container = viewPort.container; container; ) {
                        if (container.viewModel) return this.container.viewModel = container.viewModel, 
                        container.viewModel;
                        container = container.parent;
                    }
                }, AppRouter;
            }(Router);
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "aurelia-templating-binding": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj;
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function validateTarget(target, propertyName) {
            if ("style" === propertyName) LogManager.getLogger("templating-binding").info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.'); else if (target.parentElement && "TEXTAREA" === target.parentElement.nodeName && "textContent" === propertyName) throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
        }
        function configure(config) {
            config.container.registerSingleton(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage), 
            config.container.registerAlias(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.TemplatingBindingLanguage = exports.SyntaxInterpreter = exports.ChildInterpolationBinding = exports.InterpolationBinding = exports.InterpolationBindingExpression = exports.AttributeMap = void 0;
        var _class, _temp, _dec, _class2, _class3, _temp2, _class4, _temp3;
        exports.configure = configure;
        var _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), _aureliaBinding = __webpack_require__(2), _aureliaTemplating = __webpack_require__(1), AttributeMap = exports.AttributeMap = (_temp = _class = function() {
            function AttributeMap(svg) {
                this.elements = Object.create(null), this.allElements = Object.create(null), this.svg = svg, 
                this.registerUniversal("accesskey", "accessKey"), this.registerUniversal("contenteditable", "contentEditable"), 
                this.registerUniversal("tabindex", "tabIndex"), this.registerUniversal("textcontent", "textContent"), 
                this.registerUniversal("innerhtml", "innerHTML"), this.registerUniversal("scrolltop", "scrollTop"), 
                this.registerUniversal("scrollleft", "scrollLeft"), this.registerUniversal("readonly", "readOnly"), 
                this.register("label", "for", "htmlFor"), this.register("input", "maxlength", "maxLength"), 
                this.register("input", "minlength", "minLength"), this.register("input", "formaction", "formAction"), 
                this.register("input", "formenctype", "formEncType"), this.register("input", "formmethod", "formMethod"), 
                this.register("input", "formnovalidate", "formNoValidate"), this.register("input", "formtarget", "formTarget"), 
                this.register("textarea", "maxlength", "maxLength"), this.register("td", "rowspan", "rowSpan"), 
                this.register("td", "colspan", "colSpan"), this.register("th", "rowspan", "rowSpan"), 
                this.register("th", "colspan", "colSpan");
            }
            return AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
                elementName = elementName.toLowerCase(), attributeName = attributeName.toLowerCase();
                var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
                element[attributeName] = propertyName;
            }, AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
                attributeName = attributeName.toLowerCase(), this.allElements[attributeName] = propertyName;
            }, AttributeMap.prototype.map = function map(elementName, attributeName) {
                if (this.svg.isStandardSvgAttribute(elementName, attributeName)) return attributeName;
                elementName = elementName.toLowerCase(), attributeName = attributeName.toLowerCase();
                var element = this.elements[elementName];
                return void 0 !== element && attributeName in element ? element[attributeName] : attributeName in this.allElements ? this.allElements[attributeName] : /(^data-)|(^aria-)|:/.test(attributeName) ? attributeName : (0, 
                _aureliaBinding.camelCase)(attributeName);
            }, AttributeMap;
        }(), _class.inject = [ _aureliaBinding.SVGAnalyzer ], _temp), InterpolationBindingExpression = exports.InterpolationBindingExpression = function() {
            function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
                this.observerLocator = observerLocator, this.targetProperty = targetProperty, this.parts = parts, 
                this.mode = mode, this.lookupFunctions = lookupFunctions, this.attribute = this.attrToRemove = attribute, 
                this.discrete = !1;
            }
            return InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
                return 3 === this.parts.length ? new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]) : new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
            }, InterpolationBindingExpression;
        }(), InterpolationBinding = exports.InterpolationBinding = function() {
            function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
                validateTarget(target, targetProperty), this.observerLocator = observerLocator, 
                this.parts = parts, this.target = target, this.targetProperty = targetProperty, 
                this.targetAccessor = observerLocator.getAccessor(target, targetProperty), this.mode = mode, 
                this.lookupFunctions = lookupFunctions;
            }
            return InterpolationBinding.prototype.interpolate = function interpolate() {
                if (this.isBound) {
                    for (var value = "", parts = this.parts, i = 0, ii = parts.length; i < ii; i++) value += i % 2 === 0 ? parts[i] : this["childBinding" + i].value;
                    this.targetAccessor.setValue(value, this.target, this.targetProperty);
                }
            }, InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
                for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
                    var child = this["childBinding" + i];
                    child.mode === _aureliaBinding.bindingMode.oneTime && child.call();
                }
            }, InterpolationBinding.prototype.bind = function bind(source) {
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.source = source;
                for (var parts = this.parts, i = 1, ii = parts.length; i < ii; i += 2) {
                    var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
                    binding.bind(source), this["childBinding" + i] = binding;
                }
                this.isBound = !0, this.interpolate();
            }, InterpolationBinding.prototype.unbind = function unbind() {
                if (this.isBound) {
                    this.isBound = !1, this.source = null;
                    for (var parts = this.parts, i = 1, ii = parts.length; i < ii; i += 2) {
                        var name = "childBinding" + i;
                        this[name].unbind();
                    }
                }
            }, InterpolationBinding;
        }(), ChildInterpolationBinding = exports.ChildInterpolationBinding = (_dec = (0, 
        _aureliaBinding.connectable)(), _dec(_class2 = function() {
            function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
                target instanceof InterpolationBinding ? this.parent = target : (validateTarget(target, targetProperty), 
                this.target = target, this.targetProperty = targetProperty, this.targetAccessor = observerLocator.getAccessor(target, targetProperty)), 
                this.observerLocator = observerLocator, this.sourceExpression = sourceExpression, 
                this.mode = mode, this.lookupFunctions = lookupFunctions, this.left = left, this.right = right;
            }
            return ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
                value = null === value || void 0 === value ? "" : value.toString(), value !== this.value && (this.value = value, 
                this.parent ? this.parent.interpolate() : this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty));
            }, ChildInterpolationBinding.prototype.call = function call() {
                this.isBound && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), 
                this.updateTarget(this.rawValue), this.mode !== _aureliaBinding.bindingMode.oneTime && (this._version++, 
                this.sourceExpression.connect(this, this.source), this.rawValue instanceof Array && this.observeArray(this.rawValue), 
                this.unobserve(!1)));
            }, ChildInterpolationBinding.prototype.bind = function bind(source) {
                if (this.isBound) {
                    if (this.source === source) return;
                    this.unbind();
                }
                this.isBound = !0, this.source = source;
                var sourceExpression = this.sourceExpression;
                sourceExpression.bind && sourceExpression.bind(this, source, this.lookupFunctions), 
                this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions), this.updateTarget(this.rawValue), 
                this.mode === _aureliaBinding.bindingMode.oneWay && (0, _aureliaBinding.enqueueBindingConnect)(this);
            }, ChildInterpolationBinding.prototype.unbind = function unbind() {
                if (this.isBound) {
                    this.isBound = !1;
                    var sourceExpression = this.sourceExpression;
                    sourceExpression.unbind && sourceExpression.unbind(this, this.source), this.source = null, 
                    this.value = null, this.rawValue = null, this.unobserve(!0);
                }
            }, ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
                this.isBound && (evaluate && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), 
                this.updateTarget(this.rawValue)), this.sourceExpression.connect(this, this.source), 
                this.rawValue instanceof Array && this.observeArray(this.rawValue));
            }, ChildInterpolationBinding;
        }()) || _class2), SyntaxInterpreter = exports.SyntaxInterpreter = (_temp2 = _class3 = function() {
            function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {
                this.parser = parser, this.observerLocator = observerLocator, this.eventManager = eventManager, 
                this.attributeMap = attributeMap;
            }
            return SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
                return info.command in this ? this[info.command](resources, element, info, existingInstruction, context) : this.handleUnknownCommand(resources, element, info, existingInstruction, context);
            }, SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
                return LogManager.getLogger("templating-binding").warn("Unknown binding command.", info), 
                existingInstruction;
            }, SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
                var tagName = element.tagName.toLowerCase();
                return "input" === tagName && ("value" === attrName || "files" === attrName) && "checkbox" !== element.type && "radio" !== element.type || "input" === tagName && "checked" === attrName && ("checkbox" === element.type || "radio" === element.type) || ("textarea" === tagName || "select" === tagName) && "value" === attrName || ("textcontent" === attrName || "innerhtml" === attrName) && "true" === element.contentEditable || "scrolltop" === attrName || "scrollleft" === attrName ? _aureliaBinding.bindingMode.twoWay : context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= _aureliaBinding.bindingMode.oneTime ? context.attributes[attrName].defaultBindingMode : _aureliaBinding.bindingMode.oneWay;
            }, SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
                return instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName, context), resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
                return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), !1, !0, resources.lookupFunctions);
            }, SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
                return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), !0, !0, resources.lookupFunctions);
            }, SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
                return instruction.attributes[info.attrName] = new _aureliaBinding.CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName), attrValue = info.attrValue, language = this.language, name = null, target = "", current = void 0, i = void 0, ii = void 0, inString = !1, inEscape = !1;
                for (i = 0, ii = attrValue.length; i < ii; ++i) {
                    if (current = attrValue[i], ";" !== current || inString) if (":" === current && null === name) name = target.trim(), 
                    target = ""; else {
                        if ("\\" === current) {
                            target += current, inEscape = !0;
                            continue;
                        }
                        target += current, null !== name && inEscape === !1 && "'" === current && (inString = !inString);
                    } else info = language.inspectAttribute(resources, "?", name, target.trim()), language.createAttributeInstruction(resources, element, info, instruction, context), 
                    instruction.attributes[info.attrName] || (instruction.attributes[info.attrName] = info.attrValue), 
                    target = "", name = null;
                    inEscape = !1;
                }
                return null !== name && (info = language.inspectAttribute(resources, "?", name, target.trim()), 
                language.createAttributeInstruction(resources, element, info, instruction, context), 
                instruction.attributes[info.attrName] || (instruction.attributes[info.attrName] = info.attrValue)), 
                instruction;
            }, SyntaxInterpreter.prototype.for = function _for(resources, element, info, existingInstruction) {
                var parts = void 0, keyValue = void 0, instruction = void 0, attrValue = void 0, isDestructuring = void 0;
                if (attrValue = info.attrValue, isDestructuring = attrValue.match(/^ *[[].+[\]]/), 
                parts = isDestructuring ? attrValue.split("of ") : attrValue.split(" of "), 2 !== parts.length) throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
                return instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName), 
                isDestructuring ? (keyValue = parts[0].replace(/[[\]]/g, "").replace(/,/g, " ").replace(/\s+/g, " ").trim().split(" "), 
                instruction.attributes.key = keyValue[0], instruction.attributes.value = keyValue[1]) : instruction.attributes.local = parts[0], 
                instruction.attributes.items = new _aureliaBinding.BindingExpression(this.observerLocator, "items", this.parser.parse(parts[1]), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter.prototype["two-way"] = function twoWay(resources, element, info, existingInstruction) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
                return instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.twoWay, resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter.prototype["one-way"] = function oneWay(resources, element, info, existingInstruction) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
                return instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter.prototype["one-time"] = function oneTime(resources, element, info, existingInstruction) {
                var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
                return instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneTime, resources.lookupFunctions), 
                instruction;
            }, SyntaxInterpreter;
        }(), _class3.inject = [ _aureliaBinding.Parser, _aureliaBinding.ObserverLocator, _aureliaBinding.EventManager, AttributeMap ], 
        _temp2), info = {}, TemplatingBindingLanguage = exports.TemplatingBindingLanguage = (_temp3 = _class4 = function(_BindingLanguage) {
            function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {
                var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));
                return _this.parser = parser, _this.observerLocator = observerLocator, _this.syntaxInterpreter = syntaxInterpreter, 
                _this.emptyStringExpression = _this.parser.parse("''"), syntaxInterpreter.language = _this, 
                _this.attributeMap = attributeMap, _this;
            }
            return _inherits(TemplatingBindingLanguage, _BindingLanguage), TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
                var parts = attrName.split(".");
                if (info.defaultBindingMode = null, 2 === parts.length) info.attrName = parts[0].trim(), 
                info.attrValue = attrValue, info.command = parts[1].trim(), "ref" === info.command ? (info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), info.attrName, resources.lookupFunctions), 
                info.command = null, info.attrName = "ref") : info.expression = null; else if ("ref" === attrName) info.attrName = attrName, 
                info.attrValue = attrValue, info.command = null, info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), "element", resources.lookupFunctions); else {
                    info.attrName = attrName, info.attrValue = attrValue, info.command = null;
                    var interpolationParts = this.parseInterpolation(resources, attrValue);
                    null === interpolationParts ? info.expression = null : info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions, attrName);
                }
                return info;
            }, TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
                var instruction = void 0;
                if (theInfo.expression) {
                    if ("ref" === theInfo.attrName) return theInfo.expression;
                    instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(theInfo.attrName), 
                    instruction.attributes[theInfo.attrName] = theInfo.expression;
                } else theInfo.command && (instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context));
                return instruction;
            }, TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
                var parts = this.parseInterpolation(resources, value);
                return null === parts ? null : new InterpolationBindingExpression(this.observerLocator, "textContent", parts, _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions, "textContent");
            }, TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
                for (var i = value.indexOf("${", 0), ii = value.length, char = void 0, pos = 0, open = 0, quote = null, interpolationStart = void 0, parts = void 0, partIndex = 0; i >= 0 && i < ii - 2; ) {
                    open = 1, interpolationStart = i, i += 2;
                    do char = value[i], i++, "'" !== char && '"' !== char ? "\\" !== char ? null === quote && ("{" === char ? open++ : "}" === char && open--) : i++ : null === quote ? quote = char : quote === char && (quote = null); while (open > 0 && i < ii);
                    if (0 !== open) break;
                    parts = parts || [], "\\" === value[interpolationStart - 1] && "\\" !== value[interpolationStart - 2] ? (parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i), 
                    partIndex++, parts[partIndex] = this.emptyStringExpression, partIndex++) : (parts[partIndex] = value.substring(pos, interpolationStart), 
                    partIndex++, parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1)), 
                    partIndex++), pos = i, i = value.indexOf("${", i);
                }
                return 0 === partIndex ? null : (parts[partIndex] = value.substr(pos), parts);
            }, TemplatingBindingLanguage;
        }(_aureliaTemplating.BindingLanguage), _class4.inject = [ _aureliaBinding.Parser, _aureliaBinding.ObserverLocator, SyntaxInterpreter, AttributeMap ], 
        _temp3);
    },
    /***/
    "aurelia-templating-resources": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function configure(config) {
            (0, _aureliaHideStyle.injectAureliaHideStyleAtHead)(), config.globalResources("./compose", "./if", "./with", "./repeat", "./show", "./hide", "./replaceable", "./sanitize-html", "./focus", "./binding-mode-behaviors", "./throttle-binding-behavior", "./debounce-binding-behavior", "./signal-binding-behavior", "./update-trigger-binding-behavior", "./attr-binding-behavior"), 
            (0, _htmlResourcePlugin.configure)(config);
            var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
            viewEngine.addResourcePlugin(".css", {
                fetch: function fetch(address) {
                    var _ref;
                    return _ref = {}, _ref[address] = (0, _cssResource._createCSSResource)(address), 
                    _ref;
                }
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.viewsRequireLifecycle = exports.unwrapExpression = exports.updateOneTimeBinding = exports.isOneTime = exports.getItemsSourceExpression = exports.updateOverrideContext = exports.createFullOverrideContext = exports.NumberRepeatStrategy = exports.SetRepeatStrategy = exports.MapRepeatStrategy = exports.ArrayRepeatStrategy = exports.NullRepeatStrategy = exports.RepeatStrategyLocator = exports.AbstractRepeater = exports.UpdateTriggerBindingBehavior = exports.BindingSignaler = exports.SignalBindingBehavior = exports.DebounceBindingBehavior = exports.ThrottleBindingBehavior = exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = exports.AttrBindingBehavior = exports.configure = exports.Focus = exports.Replaceable = exports.SanitizeHTMLValueConverter = exports.HTMLSanitizer = exports.Hide = exports.Show = exports.Repeat = exports.With = exports.If = exports.Compose = void 0;
        var _compose = __webpack_require__("aurelia-templating-resources/compose.js"), _if = __webpack_require__("aurelia-templating-resources/if.js"), _with = __webpack_require__("aurelia-templating-resources/with.js"), _repeat = __webpack_require__("aurelia-templating-resources/repeat.js"), _show = __webpack_require__("aurelia-templating-resources/show.js"), _hide = __webpack_require__("aurelia-templating-resources/hide.js"), _sanitizeHtml = __webpack_require__("aurelia-templating-resources/sanitize-html.js"), _replaceable = __webpack_require__("aurelia-templating-resources/replaceable.js"), _focus = __webpack_require__("aurelia-templating-resources/focus.js"), _aureliaTemplating = __webpack_require__(1), _cssResource = __webpack_require__(28), _htmlSanitizer = __webpack_require__(19), _attrBindingBehavior = __webpack_require__("aurelia-templating-resources/attr-binding-behavior.js"), _bindingModeBehaviors = __webpack_require__("aurelia-templating-resources/binding-mode-behaviors.js"), _throttleBindingBehavior = __webpack_require__("aurelia-templating-resources/throttle-binding-behavior.js"), _debounceBindingBehavior = __webpack_require__("aurelia-templating-resources/debounce-binding-behavior.js"), _signalBindingBehavior = __webpack_require__("aurelia-templating-resources/signal-binding-behavior.js"), _bindingSignaler = __webpack_require__(18), _updateTriggerBindingBehavior = __webpack_require__("aurelia-templating-resources/update-trigger-binding-behavior.js"), _abstractRepeater = __webpack_require__(15), _repeatStrategyLocator = __webpack_require__(23), _htmlResourcePlugin = __webpack_require__(30), _nullRepeatStrategy = __webpack_require__(21), _arrayRepeatStrategy = __webpack_require__(17), _mapRepeatStrategy = __webpack_require__(20), _setRepeatStrategy = __webpack_require__(24), _numberRepeatStrategy = __webpack_require__(22), _repeatUtilities = __webpack_require__(8), _analyzeViewFactory = __webpack_require__(16), _aureliaHideStyle = __webpack_require__(13);
        exports.Compose = _compose.Compose, exports.If = _if.If, exports.With = _with.With, 
        exports.Repeat = _repeat.Repeat, exports.Show = _show.Show, exports.Hide = _hide.Hide, 
        exports.HTMLSanitizer = _htmlSanitizer.HTMLSanitizer, exports.SanitizeHTMLValueConverter = _sanitizeHtml.SanitizeHTMLValueConverter, 
        exports.Replaceable = _replaceable.Replaceable, exports.Focus = _focus.Focus, exports.configure = configure, 
        exports.AttrBindingBehavior = _attrBindingBehavior.AttrBindingBehavior, exports.OneTimeBindingBehavior = _bindingModeBehaviors.OneTimeBindingBehavior, 
        exports.OneWayBindingBehavior = _bindingModeBehaviors.OneWayBindingBehavior, exports.TwoWayBindingBehavior = _bindingModeBehaviors.TwoWayBindingBehavior, 
        exports.ThrottleBindingBehavior = _throttleBindingBehavior.ThrottleBindingBehavior, 
        exports.DebounceBindingBehavior = _debounceBindingBehavior.DebounceBindingBehavior, 
        exports.SignalBindingBehavior = _signalBindingBehavior.SignalBindingBehavior, exports.BindingSignaler = _bindingSignaler.BindingSignaler, 
        exports.UpdateTriggerBindingBehavior = _updateTriggerBindingBehavior.UpdateTriggerBindingBehavior, 
        exports.AbstractRepeater = _abstractRepeater.AbstractRepeater, exports.RepeatStrategyLocator = _repeatStrategyLocator.RepeatStrategyLocator, 
        exports.NullRepeatStrategy = _nullRepeatStrategy.NullRepeatStrategy, exports.ArrayRepeatStrategy = _arrayRepeatStrategy.ArrayRepeatStrategy, 
        exports.MapRepeatStrategy = _mapRepeatStrategy.MapRepeatStrategy, exports.SetRepeatStrategy = _setRepeatStrategy.SetRepeatStrategy, 
        exports.NumberRepeatStrategy = _numberRepeatStrategy.NumberRepeatStrategy, exports.createFullOverrideContext = _repeatUtilities.createFullOverrideContext, 
        exports.updateOverrideContext = _repeatUtilities.updateOverrideContext, exports.getItemsSourceExpression = _repeatUtilities.getItemsSourceExpression, 
        exports.isOneTime = _repeatUtilities.isOneTime, exports.updateOneTimeBinding = _repeatUtilities.updateOneTimeBinding, 
        exports.unwrapExpression = _repeatUtilities.unwrapExpression, exports.viewsRequireLifecycle = _analyzeViewFactory.viewsRequireLifecycle;
    },
    /***/
    "aurelia-templating-resources/attr-binding-behavior.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.AttrBindingBehavior = void 0;
        var _aureliaBinding = __webpack_require__(2), AttrBindingBehavior = exports.AttrBindingBehavior = function() {
            function AttrBindingBehavior() {}
            return AttrBindingBehavior.prototype.bind = function bind(binding, source) {
                binding.targetObserver = new _aureliaBinding.DataAttributeObserver(binding.target, binding.targetProperty);
            }, AttrBindingBehavior.prototype.unbind = function unbind(binding, source) {}, AttrBindingBehavior;
        }();
    },
    /***/
    "aurelia-templating-resources/binding-mode-behaviors.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = void 0;
        var _dec, _class, _dec2, _class2, _dec3, _class3, _aureliaBinding = __webpack_require__(2), _aureliaMetadata = __webpack_require__(4), modeBindingBehavior = {
            bind: function bind(binding, source, lookupFunctions) {
                binding.originalMode = binding.mode, binding.mode = this.mode;
            },
            unbind: function unbind(binding, source) {
                binding.mode = binding.originalMode, binding.originalMode = null;
            }
        }, OneTimeBindingBehavior = exports.OneTimeBindingBehavior = (_dec = (0, _aureliaMetadata.mixin)(modeBindingBehavior), 
        _dec(_class = function OneTimeBindingBehavior() {
            this.mode = _aureliaBinding.bindingMode.oneTime;
        }) || _class), OneWayBindingBehavior = exports.OneWayBindingBehavior = (_dec2 = (0, 
        _aureliaMetadata.mixin)(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
            this.mode = _aureliaBinding.bindingMode.oneWay;
        }) || _class2), TwoWayBindingBehavior = exports.TwoWayBindingBehavior = (_dec3 = (0, 
        _aureliaMetadata.mixin)(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
            this.mode = _aureliaBinding.bindingMode.twoWay;
        }) || _class3);
    },
    /***/
    "aurelia-templating-resources/compose.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _initDefineProp(target, property, descriptor, context) {
            descriptor && Object.defineProperty(target, property, {
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable,
                writable: descriptor.writable,
                value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
            });
        }
        function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
            var desc = {};
            return Object.keys(descriptor).forEach(function(key) {
                desc[key] = descriptor[key];
            }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, 
            ("value" in desc || desc.initializer) && (desc.writable = !0), desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, 
            desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, property, desc), 
            desc = null), desc;
        }
        function _initializerWarningHelper(descriptor, context) {
            throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
        }
        function createInstruction(composer, instruction) {
            return Object.assign(instruction, {
                bindingContext: composer.bindingContext,
                overrideContext: composer.overrideContext,
                owningView: composer.owningView,
                container: composer.container,
                viewSlot: composer.viewSlot,
                viewResources: composer.viewResources,
                currentController: composer.currentController,
                host: composer.element
            });
        }
        function processInstruction(composer, instruction) {
            composer.currentInstruction = null, composer.compositionEngine.compose(instruction).then(function(controller) {
                composer.currentController = controller, composer.currentViewModel = controller ? controller.viewModel : null;
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Compose = void 0;
        var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTaskQueue = __webpack_require__(7), _aureliaTemplating = __webpack_require__(1), _aureliaPal = __webpack_require__(0), Compose = exports.Compose = (_dec = (0, 
        _aureliaTemplating.customElement)("compose"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue), 
        _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2((_class2 = function() {
            function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
                _initDefineProp(this, "model", _descriptor, this), _initDefineProp(this, "view", _descriptor2, this), 
                _initDefineProp(this, "viewModel", _descriptor3, this), this.element = element, 
                this.container = container, this.compositionEngine = compositionEngine, this.viewSlot = viewSlot, 
                this.viewResources = viewResources, this.taskQueue = taskQueue, this.currentController = null, 
                this.currentViewModel = null;
            }
            return Compose.prototype.created = function created(owningView) {
                this.owningView = owningView;
            }, Compose.prototype.bind = function bind(bindingContext, overrideContext) {
                this.bindingContext = bindingContext, this.overrideContext = overrideContext, processInstruction(this, createInstruction(this, {
                    view: this.view,
                    viewModel: this.viewModel,
                    model: this.model
                }));
            }, Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
                this.bindingContext = null, this.overrideContext = null;
                var returnToCache = !0, skipAnimation = !0;
                this.viewSlot.removeAll(returnToCache, skipAnimation);
            }, Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
                var _this = this;
                return this.currentInstruction ? void (this.currentInstruction.model = newValue) : void this.taskQueue.queueMicroTask(function() {
                    if (_this.currentInstruction) return void (_this.currentInstruction.model = newValue);
                    var vm = _this.currentViewModel;
                    vm && "function" == typeof vm.activate && vm.activate(newValue);
                });
            }, Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
                var _this2 = this, instruction = createInstruction(this, {
                    view: newValue,
                    viewModel: this.currentViewModel || this.viewModel,
                    model: this.model
                });
                return this.currentInstruction ? void (this.currentInstruction = instruction) : (this.currentInstruction = instruction, 
                void this.taskQueue.queueMicroTask(function() {
                    return processInstruction(_this2, _this2.currentInstruction);
                }));
            }, Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
                var _this3 = this, instruction = createInstruction(this, {
                    viewModel: newValue,
                    view: this.view,
                    model: this.model
                });
                return this.currentInstruction ? void (this.currentInstruction = instruction) : (this.currentInstruction = instruction, 
                void this.taskQueue.queueMicroTask(function() {
                    return processInstruction(_this3, _this3.currentInstruction);
                }));
            }, Compose;
        }(), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "view", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "viewModel", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _class = _class2)) || _class) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/debounce-binding-behavior.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function debounce(newValue) {
            var _this = this, state = this.debounceState;
            return state.immediate ? (state.immediate = !1, void this.debouncedMethod(newValue)) : (clearTimeout(state.timeoutId), 
            void (state.timeoutId = setTimeout(function() {
                return _this.debouncedMethod(newValue);
            }, state.delay)));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DebounceBindingBehavior = void 0;
        var _aureliaBinding = __webpack_require__(2), DebounceBindingBehavior = exports.DebounceBindingBehavior = function() {
            function DebounceBindingBehavior() {}
            return DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
                var delay = arguments.length <= 2 || void 0 === arguments[2] ? 200 : arguments[2], methodToDebounce = "updateTarget";
                binding.callSource ? methodToDebounce = "callSource" : binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay && (methodToDebounce = "updateSource"), 
                binding.debouncedMethod = binding[methodToDebounce], binding.debouncedMethod.originalName = methodToDebounce, 
                binding[methodToDebounce] = debounce, binding.debounceState = {
                    delay: delay,
                    timeoutId: null,
                    immediate: "updateTarget" === methodToDebounce
                };
            }, DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
                var methodToRestore = binding.debouncedMethod.originalName;
                binding[methodToRestore] = binding.debouncedMethod, binding.debouncedMethod = null, 
                clearTimeout(binding.debounceState.timeoutId), binding.debounceState = null;
            }, DebounceBindingBehavior;
        }();
    },
    /***/
    "aurelia-templating-resources/focus.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Focus = void 0;
        var _dec, _dec2, _class, _aureliaTemplating = __webpack_require__(1), _aureliaBinding = __webpack_require__(2), _aureliaDependencyInjection = __webpack_require__(3), _aureliaTaskQueue = __webpack_require__(7), _aureliaPal = __webpack_require__(0), Focus = exports.Focus = (_dec = (0, 
        _aureliaTemplating.customAttribute)("focus", _aureliaBinding.bindingMode.twoWay), 
        _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTaskQueue.TaskQueue), 
        _dec(_class = _dec2(_class = function() {
            function Focus(element, taskQueue) {
                var _this = this;
                this.element = element, this.taskQueue = taskQueue, this.isAttached = !1, this.needsApply = !1, 
                this.focusListener = function(e) {
                    _this.value = !0;
                }, this.blurListener = function(e) {
                    _aureliaPal.DOM.activeElement !== _this.element && (_this.value = !1);
                };
            }
            return Focus.prototype.valueChanged = function valueChanged(newValue) {
                this.isAttached ? this._apply() : this.needsApply = !0;
            }, Focus.prototype._apply = function _apply() {
                var _this2 = this;
                this.value ? this.taskQueue.queueMicroTask(function() {
                    _this2.value && _this2.element.focus();
                }) : this.element.blur();
            }, Focus.prototype.attached = function attached() {
                this.isAttached = !0, this.needsApply && (this.needsApply = !1, this._apply()), 
                this.element.addEventListener("focus", this.focusListener), this.element.addEventListener("blur", this.blurListener);
            }, Focus.prototype.detached = function detached() {
                this.isAttached = !1, this.element.removeEventListener("focus", this.focusListener), 
                this.element.removeEventListener("blur", this.blurListener);
            }, Focus;
        }()) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/hide.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Hide = void 0;
        var _dec, _dec2, _class, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTemplating = __webpack_require__(1), _aureliaPal = __webpack_require__(0), _aureliaHideStyle = __webpack_require__(13), Hide = exports.Hide = (_dec = (0, 
        _aureliaTemplating.customAttribute)("hide"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, !0)), 
        _dec(_class = _dec2(_class = function() {
            function Hide(element, animator, domBoundary) {
                this.element = element, this.animator = animator, this.domBoundary = domBoundary;
            }
            return Hide.prototype.created = function created() {
                (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
            }, Hide.prototype.valueChanged = function valueChanged(newValue) {
                newValue ? this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName) : this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
            }, Hide.prototype.bind = function bind(bindingContext) {
                this.valueChanged(this.value);
            }, Hide;
        }()) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/if.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.If = void 0;
            var _dec, _dec2, _class, _aureliaTemplating = __webpack_require__(1), _aureliaDependencyInjection = __webpack_require__(3), If = exports.If = (_dec = (0, 
            _aureliaTemplating.customAttribute)("if"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), 
            _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function() {
                function If(viewFactory, viewSlot) {
                    this.viewFactory = viewFactory, this.viewSlot = viewSlot, this.showing = !1, this.view = null, 
                    this.bindingContext = null, this.overrideContext = null;
                }
                return If.prototype.bind = function bind(bindingContext, overrideContext) {
                    this.bindingContext = bindingContext, this.overrideContext = overrideContext, this.valueChanged(this.value);
                }, If.prototype.valueChanged = function valueChanged(newValue) {
                    var _this = this;
                    if (this.__queuedChanges) return void this.__queuedChanges.push(newValue);
                    var maybePromise = this._runValueChanged(newValue);
                    maybePromise instanceof Promise && !function() {
                        var queuedChanges = _this.__queuedChanges = [], runQueuedChanges = function runQueuedChanges() {
                            if (!queuedChanges.length) return void (_this.__queuedChanges = void 0);
                            var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
                            nextPromise.then(runQueuedChanges);
                        };
                        maybePromise.then(runQueuedChanges);
                    }();
                }, If.prototype._runValueChanged = function _runValueChanged(newValue) {
                    var _this2 = this;
                    if (!newValue) {
                        var viewOrPromise = void 0;
                        return null !== this.view && this.showing && (viewOrPromise = this.viewSlot.remove(this.view), 
                        viewOrPromise instanceof Promise ? viewOrPromise.then(function() {
                            return _this2.view.unbind();
                        }) : this.view.unbind()), this.showing = !1, viewOrPromise;
                    }
                    if (null === this.view && (this.view = this.viewFactory.create()), this.view.isBound || this.view.bind(this.bindingContext, this.overrideContext), 
                    !this.showing) return this.showing = !0, this.viewSlot.add(this.view);
                }, If.prototype.unbind = function unbind() {
                    null !== this.view && (this.view.unbind(), this.viewFactory.isCaching && (this.showing && (this.showing = !1, 
                    this.viewSlot.remove(this.view, !0, !0)), this.view.returnToCache(), this.view = null));
                }, If;
            }()) || _class) || _class) || _class);
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    "aurelia-templating-resources/repeat.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _initDefineProp(target, property, descriptor, context) {
            descriptor && Object.defineProperty(target, property, {
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable,
                writable: descriptor.writable,
                value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
            });
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
            var desc = {};
            return Object.keys(descriptor).forEach(function(key) {
                desc[key] = descriptor[key];
            }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, 
            ("value" in desc || desc.initializer) && (desc.writable = !0), desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, 
            desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, property, desc), 
            desc = null), desc;
        }
        function _initializerWarningHelper(descriptor, context) {
            throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Repeat = void 0;
        var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _aureliaDependencyInjection = __webpack_require__(3), _aureliaBinding = __webpack_require__(2), _aureliaTemplating = __webpack_require__(1), _repeatStrategyLocator = __webpack_require__(23), _repeatUtilities = __webpack_require__(8), _analyzeViewFactory = __webpack_require__(16), _abstractRepeater = __webpack_require__(15), Repeat = exports.Repeat = (_dec = (0, 
        _aureliaTemplating.customAttribute)("repeat"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaBinding.ObserverLocator, _repeatStrategyLocator.RepeatStrategyLocator), 
        _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2((_class2 = function(_AbstractRepeater) {
            function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
                var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
                    local: "item",
                    viewsRequireLifecycle: (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory)
                }));
                return _initDefineProp(_this, "items", _descriptor, _this), _initDefineProp(_this, "local", _descriptor2, _this), 
                _initDefineProp(_this, "key", _descriptor3, _this), _initDefineProp(_this, "value", _descriptor4, _this), 
                _this.viewFactory = viewFactory, _this.instruction = instruction, _this.viewSlot = viewSlot, 
                _this.lookupFunctions = viewResources.lookupFunctions, _this.observerLocator = observerLocator, 
                _this.key = "key", _this.value = "value", _this.strategyLocator = strategyLocator, 
                _this.ignoreMutation = !1, _this.sourceExpression = (0, _repeatUtilities.getItemsSourceExpression)(_this.instruction, "repeat.for"), 
                _this.isOneTime = (0, _repeatUtilities.isOneTime)(_this.sourceExpression), _this.viewsRequireLifecycle = (0, 
                _analyzeViewFactory.viewsRequireLifecycle)(viewFactory), _this;
            }
            return _inherits(Repeat, _AbstractRepeater), Repeat.prototype.call = function call(context, changes) {
                this[context](this.items, changes);
            }, Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
                this.scope = {
                    bindingContext: bindingContext,
                    overrideContext: overrideContext
                }, this.matcherBinding = this._captureAndRemoveMatcherBinding(), this.itemsChanged();
            }, Repeat.prototype.unbind = function unbind() {
                this.scope = null, this.items = null, this.matcherBinding = null, this.viewSlot.removeAll(!0), 
                this._unsubscribeCollection();
            }, Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
                this.collectionObserver && (this.collectionObserver.unsubscribe(this.callContext, this), 
                this.collectionObserver = null, this.callContext = null);
            }, Repeat.prototype.itemsChanged = function itemsChanged() {
                if (this._unsubscribeCollection(), this.scope) {
                    var items = this.items;
                    if (this.strategy = this.strategyLocator.getStrategy(items), !this.strategy) throw new Error("Value for '" + this.sourceExpression + "' is non-repeatable");
                    this.isOneTime || this._observeInnerCollection() || this._observeCollection(), this.strategy.instanceChanged(this, items);
                }
            }, Repeat.prototype._getInnerCollection = function _getInnerCollection() {
                var expression = (0, _repeatUtilities.unwrapExpression)(this.sourceExpression);
                return expression ? expression.evaluate(this.scope, null) : null;
            }, Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
                this.collectionObserver && this.strategy.instanceMutated(this, collection, changes);
            }, Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
                var _this2 = this;
                if (this.collectionObserver && !this.ignoreMutation) {
                    this.ignoreMutation = !0;
                    var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
                    this.observerLocator.taskQueue.queueMicroTask(function() {
                        return _this2.ignoreMutation = !1;
                    }), newItems === this.items ? this.itemsChanged() : this.items = newItems;
                }
            }, Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
                var items = this._getInnerCollection(), strategy = this.strategyLocator.getStrategy(items);
                return !!strategy && (this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items), 
                !!this.collectionObserver && (this.callContext = "handleInnerCollectionMutated", 
                this.collectionObserver.subscribe(this.callContext, this), !0));
            }, Repeat.prototype._observeCollection = function _observeCollection() {
                var items = this.items;
                this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items), 
                this.collectionObserver && (this.callContext = "handleCollectionMutated", this.collectionObserver.subscribe(this.callContext, this));
            }, Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
                if (this.viewFactory.viewFactory) for (var instructions = this.viewFactory.viewFactory.instructions, instructionIds = Object.keys(instructions), i = 0; i < instructionIds.length; i++) {
                    var expressions = instructions[instructionIds[i]].expressions;
                    if (expressions) for (var ii = 0; i < expressions.length; i++) if ("matcher" === expressions[ii].targetProperty) {
                        var matcherBinding = expressions[ii];
                        return expressions.splice(ii, 1), matcherBinding;
                    }
                }
            }, Repeat.prototype.viewCount = function viewCount() {
                return this.viewSlot.children.length;
            }, Repeat.prototype.views = function views() {
                return this.viewSlot.children;
            }, Repeat.prototype.view = function view(index) {
                return this.viewSlot.children[index];
            }, Repeat.prototype.matcher = function matcher() {
                return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
            }, Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
                var view = this.viewFactory.create();
                view.bind(bindingContext, overrideContext), this.viewSlot.add(view);
            }, Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
                var view = this.viewFactory.create();
                view.bind(bindingContext, overrideContext), this.viewSlot.insert(index, view);
            }, Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
                this.viewSlot.move(sourceIndex, targetIndex);
            }, Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
                return this.viewSlot.removeAll(returnToCache, skipAnimation);
            }, Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
                return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
            }, Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
                return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
            }, Repeat.prototype.updateBindings = function updateBindings(view) {
                for (var j = view.bindings.length; j--; ) (0, _repeatUtilities.updateOneTimeBinding)(view.bindings[j]);
                for (j = view.controllers.length; j--; ) for (var k = view.controllers[j].boundProperties.length; k--; ) {
                    var binding = view.controllers[j].boundProperties[k].binding;
                    (0, _repeatUtilities.updateOneTimeBinding)(binding);
                }
            }, Repeat;
        }(_abstractRepeater.AbstractRepeater), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "items", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "local", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "key", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "value", [ _aureliaTemplating.bindable ], {
            enumerable: !0,
            initializer: null
        }), _class = _class2)) || _class) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/replaceable.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Replaceable = void 0;
        var _dec, _dec2, _class, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTemplating = __webpack_require__(1), Replaceable = exports.Replaceable = (_dec = (0, 
        _aureliaTemplating.customAttribute)("replaceable"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), 
        _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function() {
            function Replaceable(viewFactory, viewSlot) {
                this.viewFactory = viewFactory, this.viewSlot = viewSlot, this.view = null;
            }
            return Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
                null === this.view && (this.view = this.viewFactory.create(), this.viewSlot.add(this.view)), 
                this.view.bind(bindingContext, overrideContext);
            }, Replaceable.prototype.unbind = function unbind() {
                this.view.unbind();
            }, Replaceable;
        }()) || _class) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/sanitize-html.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SanitizeHTMLValueConverter = void 0;
        var _dec, _dec2, _class, _aureliaBinding = __webpack_require__(2), _aureliaDependencyInjection = __webpack_require__(3), _htmlSanitizer = __webpack_require__(19), SanitizeHTMLValueConverter = exports.SanitizeHTMLValueConverter = (_dec = (0, 
        _aureliaBinding.valueConverter)("sanitizeHTML"), _dec2 = (0, _aureliaDependencyInjection.inject)(_htmlSanitizer.HTMLSanitizer), 
        _dec(_class = _dec2(_class = function() {
            function SanitizeHTMLValueConverter(sanitizer) {
                this.sanitizer = sanitizer;
            }
            return SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
                return null === untrustedMarkup || void 0 === untrustedMarkup ? null : this.sanitizer.sanitize(untrustedMarkup);
            }, SanitizeHTMLValueConverter;
        }()) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/show.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Show = void 0;
        var _dec, _dec2, _class, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTemplating = __webpack_require__(1), _aureliaPal = __webpack_require__(0), _aureliaHideStyle = __webpack_require__(13), Show = exports.Show = (_dec = (0, 
        _aureliaTemplating.customAttribute)("show"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, !0)), 
        _dec(_class = _dec2(_class = function() {
            function Show(element, animator, domBoundary) {
                this.element = element, this.animator = animator, this.domBoundary = domBoundary;
            }
            return Show.prototype.created = function created() {
                (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
            }, Show.prototype.valueChanged = function valueChanged(newValue) {
                newValue ? this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName) : this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
            }, Show.prototype.bind = function bind(bindingContext) {
                this.valueChanged(this.value);
            }, Show;
        }()) || _class) || _class);
    },
    /***/
    "aurelia-templating-resources/signal-binding-behavior.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SignalBindingBehavior = void 0;
        var _bindingSignaler = __webpack_require__(18), SignalBindingBehavior = exports.SignalBindingBehavior = function() {
            function SignalBindingBehavior(bindingSignaler) {
                this.signals = bindingSignaler.signals;
            }
            return SignalBindingBehavior.inject = function inject() {
                return [ _bindingSignaler.BindingSignaler ];
            }, SignalBindingBehavior.prototype.bind = function bind(binding, source) {
                if (!binding.updateTarget) throw new Error("Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.");
                if (3 === arguments.length) {
                    var name = arguments[2], bindings = this.signals[name] || (this.signals[name] = []);
                    bindings.push(binding), binding.signalName = name;
                } else {
                    if (!(arguments.length > 3)) throw new Error("Signal name is required.");
                    for (var names = Array.prototype.slice.call(arguments, 2), i = names.length; i--; ) {
                        var _name = names[i], _bindings = this.signals[_name] || (this.signals[_name] = []);
                        _bindings.push(binding);
                    }
                    binding.signalName = names;
                }
            }, SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
                var name = binding.signalName;
                if (binding.signalName = null, Array.isArray(name)) for (var names = name, i = names.length; i--; ) {
                    var n = names[i], bindings = this.signals[n];
                    bindings.splice(bindings.indexOf(binding), 1);
                } else {
                    var _bindings2 = this.signals[name];
                    _bindings2.splice(_bindings2.indexOf(binding), 1);
                }
            }, SignalBindingBehavior;
        }();
    },
    /***/
    "aurelia-templating-resources/throttle-binding-behavior.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function throttle(newValue) {
            var _this = this, state = this.throttleState, elapsed = +new Date() - state.last;
            return elapsed >= state.delay ? (clearTimeout(state.timeoutId), state.timeoutId = null, 
            state.last = +new Date(), void this.throttledMethod(newValue)) : (state.newValue = newValue, 
            void (null === state.timeoutId && (state.timeoutId = setTimeout(function() {
                state.timeoutId = null, state.last = +new Date(), _this.throttledMethod(state.newValue);
            }, state.delay - elapsed))));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ThrottleBindingBehavior = void 0;
        var _aureliaBinding = __webpack_require__(2), ThrottleBindingBehavior = exports.ThrottleBindingBehavior = function() {
            function ThrottleBindingBehavior() {}
            return ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
                var delay = arguments.length <= 2 || void 0 === arguments[2] ? 200 : arguments[2], methodToThrottle = "updateTarget";
                binding.callSource ? methodToThrottle = "callSource" : binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay && (methodToThrottle = "updateSource"), 
                binding.throttledMethod = binding[methodToThrottle], binding.throttledMethod.originalName = methodToThrottle, 
                binding[methodToThrottle] = throttle, binding.throttleState = {
                    delay: delay,
                    last: 0,
                    timeoutId: null
                };
            }, ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
                var methodToRestore = binding.throttledMethod.originalName;
                binding[methodToRestore] = binding.throttledMethod, binding.throttledMethod = null, 
                clearTimeout(binding.throttleState.timeoutId), binding.throttleState = null;
            }, ThrottleBindingBehavior;
        }();
    },
    /***/
    "aurelia-templating-resources/update-trigger-binding-behavior.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.UpdateTriggerBindingBehavior = void 0;
        var _class, _temp, _aureliaBinding = __webpack_require__(2), eventNamesRequired = "The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind=\"firstName & updateTrigger:'blur'\">", notApplicableMessage = "The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.", UpdateTriggerBindingBehavior = exports.UpdateTriggerBindingBehavior = (_temp = _class = function() {
            function UpdateTriggerBindingBehavior(eventManager) {
                this.eventManager = eventManager;
            }
            return UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
                for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) events[_key - 2] = arguments[_key];
                if (0 === events.length) throw new Error(eventNamesRequired);
                if (binding.mode !== _aureliaBinding.bindingMode.twoWay) throw new Error(notApplicableMessage);
                var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
                if (!targetObserver.handler) throw new Error(notApplicableMessage);
                binding.targetObserver = targetObserver, targetObserver.originalHandler = binding.targetObserver.handler;
                var handler = this.eventManager.createElementHandler(events);
                targetObserver.handler = handler;
            }, UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
                binding.targetObserver.handler = binding.targetObserver.originalHandler, binding.targetObserver.originalHandler = null;
            }, UpdateTriggerBindingBehavior;
        }(), _class.inject = [ _aureliaBinding.EventManager ], _temp);
    },
    /***/
    "aurelia-templating-resources/with.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.With = void 0;
        var _dec, _dec2, _class, _aureliaDependencyInjection = __webpack_require__(3), _aureliaTemplating = __webpack_require__(1), _aureliaBinding = __webpack_require__(2), With = exports.With = (_dec = (0, 
        _aureliaTemplating.customAttribute)("with"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), 
        _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function() {
            function With(viewFactory, viewSlot) {
                this.viewFactory = viewFactory, this.viewSlot = viewSlot, this.parentOverrideContext = null, 
                this.view = null;
            }
            return With.prototype.bind = function bind(bindingContext, overrideContext) {
                this.parentOverrideContext = overrideContext, this.valueChanged(this.value);
            }, With.prototype.valueChanged = function valueChanged(newValue) {
                var overrideContext = (0, _aureliaBinding.createOverrideContext)(newValue, this.parentOverrideContext);
                this.view ? this.view.bind(newValue, overrideContext) : (this.view = this.viewFactory.create(), 
                this.view.bind(newValue, overrideContext), this.viewSlot.add(this.view));
            }, With.prototype.unbind = function unbind() {
                this.parentOverrideContext = null, this.view && this.view.unbind();
            }, With;
        }()) || _class) || _class) || _class);
    },
    /***/
    "aurelia-templating-router": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function configure(config) {
            config.singleton(_aureliaRouter.RouteLoader, _routeLoader.TemplatingRouteLoader).singleton(_aureliaRouter.Router, _aureliaRouter.AppRouter).globalResources("./router-view", "./route-href"), 
            config.container.registerAlias(_aureliaRouter.Router, _aureliaRouter.AppRouter);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.configure = exports.RouteHref = exports.RouterView = exports.TemplatingRouteLoader = void 0;
        var _aureliaRouter = __webpack_require__("aurelia-router"), _routeLoader = __webpack_require__(31), _routerView = __webpack_require__("aurelia-templating-router/router-view.js"), _routeHref = __webpack_require__("aurelia-templating-router/route-href.js");
        exports.TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader, exports.RouterView = _routerView.RouterView, 
        exports.RouteHref = _routeHref.RouteHref, exports.configure = configure;
    },
    /***/
    "aurelia-templating-router/route-href.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.RouteHref = void 0;
        var _dec, _dec2, _dec3, _dec4, _dec5, _class, _aureliaTemplating = __webpack_require__(1), _aureliaDependencyInjection = __webpack_require__(3), _aureliaRouter = __webpack_require__("aurelia-router"), _aureliaPal = __webpack_require__(0), _aureliaLogging = __webpack_require__(5), LogManager = _interopRequireWildcard(_aureliaLogging), logger = LogManager.getLogger("route-href"), RouteHref = exports.RouteHref = (_dec = (0, 
        _aureliaTemplating.customAttribute)("route-href"), _dec2 = (0, _aureliaTemplating.bindable)({
            name: "route",
            changeHandler: "processChange"
        }), _dec3 = (0, _aureliaTemplating.bindable)({
            name: "params",
            changeHandler: "processChange"
        }), _dec4 = (0, _aureliaTemplating.bindable)({
            name: "attribute",
            defaultValue: "href"
        }), _dec5 = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router, _aureliaPal.DOM.Element), 
        _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function() {
            function RouteHref(router, element) {
                this.router = router, this.element = element;
            }
            return RouteHref.prototype.bind = function bind() {
                this.isActive = !0, this.processChange();
            }, RouteHref.prototype.unbind = function unbind() {
                this.isActive = !1;
            }, RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
                previous && this.element.removeAttribute(previous), this.processChange();
            }, RouteHref.prototype.processChange = function processChange() {
                var _this = this;
                return this.router.ensureConfigured().then(function() {
                    if (!_this.isActive) return null;
                    var href = _this.router.generate(_this.route, _this.params);
                    return _this.element.au.controller ? _this.element.au.controller.viewModel[_this.attribute] = href : _this.element.setAttribute(_this.attribute, href), 
                    null;
                }).catch(function(reason) {
                    logger.error(reason);
                });
            }, RouteHref;
        }()) || _class) || _class) || _class) || _class) || _class);
    },
    /***/
    "aurelia-templating-router/router-view.js": /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(Promise) {
            function _initDefineProp(target, property, descriptor, context) {
                descriptor && Object.defineProperty(target, property, {
                    enumerable: descriptor.enumerable,
                    configurable: descriptor.configurable,
                    writable: descriptor.writable,
                    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
                });
            }
            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                return Object.keys(descriptor).forEach(function(key) {
                    desc[key] = descriptor[key];
                }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, 
                ("value" in desc || desc.initializer) && (desc.writable = !0), desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, 
                desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, property, desc), 
                desc = null), desc;
            }
            function _initializerWarningHelper(descriptor, context) {
                throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.");
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.RouterView = void 0;
            var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _aureliaDependencyInjection = __webpack_require__(3), _aureliaBinding = __webpack_require__(2), _aureliaTemplating = __webpack_require__(1), _aureliaRouter = __webpack_require__("aurelia-router"), _aureliaMetadata = __webpack_require__(4), _aureliaPal = __webpack_require__(0), SwapStrategies = function() {
                function SwapStrategies() {}
                return SwapStrategies.prototype.before = function before(viewSlot, previousView, callback) {
                    var promise = Promise.resolve(callback());
                    return void 0 !== previousView ? promise.then(function() {
                        return viewSlot.remove(previousView, !0);
                    }) : promise;
                }, SwapStrategies.prototype.with = function _with(viewSlot, previousView, callback) {
                    var promise = Promise.resolve(callback());
                    return void 0 !== previousView ? Promise.all([ viewSlot.remove(previousView, !0), promise ]) : promise;
                }, SwapStrategies.prototype.after = function after(viewSlot, previousView, callback) {
                    return Promise.resolve(viewSlot.removeAll(!0)).then(callback);
                }, SwapStrategies;
            }(), swapStrategies = new SwapStrategies(), RouterView = exports.RouterView = (_dec = (0, 
            _aureliaTemplating.customElement)("router-view"), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router, _aureliaTemplating.ViewLocator, _aureliaTemplating.CompositionTransaction, _aureliaTemplating.CompositionEngine), 
            _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2((_class2 = function() {
                function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {
                    _initDefineProp(this, "swapOrder", _descriptor, this), _initDefineProp(this, "layoutView", _descriptor2, this), 
                    _initDefineProp(this, "layoutViewModel", _descriptor3, this), _initDefineProp(this, "layoutModel", _descriptor4, this), 
                    this.element = element, this.container = container, this.viewSlot = viewSlot, this.router = router, 
                    this.viewLocator = viewLocator, this.compositionTransaction = compositionTransaction, 
                    this.compositionEngine = compositionEngine, this.router.registerViewPort(this, this.element.getAttribute("name")), 
                    "initialComposition" in compositionTransaction || (compositionTransaction.initialComposition = !0, 
                    this.compositionTransactionNotifier = compositionTransaction.enlist());
                }
                return RouterView.prototype.created = function created(owningView) {
                    this.owningView = owningView;
                }, RouterView.prototype.bind = function bind(bindingContext, overrideContext) {
                    this.container.viewModel = bindingContext, this.overrideContext = overrideContext;
                }, RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
                    var _this = this, component = viewPortInstruction.component, childContainer = component.childContainer, viewModel = component.viewModel, viewModelResource = component.viewModelResource, metadata = viewModelResource.metadata, config = component.router.currentInstruction.config, viewPort = config.viewPorts ? config.viewPorts[viewPortInstruction.name] : {}, layoutInstruction = {
                        viewModel: viewPort.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
                        view: viewPort.layoutView || config.layoutView || this.layoutView,
                        model: viewPort.layoutModel || config.layoutModel || this.layoutModel,
                        router: viewPortInstruction.component.router,
                        childContainer: childContainer,
                        viewSlot: this.viewSlot
                    }, viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
                    return viewStrategy && component.view && viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId), 
                    metadata.load(childContainer, viewModelResource.value, null, viewStrategy, !0).then(function(viewFactory) {
                        _this.compositionTransactionNotifier || (_this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture()), 
                        (layoutInstruction.viewModel || layoutInstruction.view) && (viewPortInstruction.layoutInstruction = layoutInstruction), 
                        viewPortInstruction.controller = metadata.create(childContainer, _aureliaTemplating.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory)), 
                        waitToSwap || _this.swap(viewPortInstruction);
                    });
                }, RouterView.prototype.swap = function swap(viewPortInstruction) {
                    var _this2 = this, layoutInstruction = viewPortInstruction.layoutInstruction, work = function work() {
                        var previousView = _this2.view, swapStrategy = void 0, viewSlot = _this2.viewSlot;
                        (swapStrategy = _this2.swapOrder in swapStrategies ? swapStrategies[_this2.swapOrder] : swapStrategies.after)(viewSlot, previousView, function() {
                            return Promise.resolve().then(function() {
                                return viewSlot.add(_this2.view);
                            }).then(function() {
                                _this2._notify();
                            });
                        });
                    }, ready = function ready(owningView) {
                        return viewPortInstruction.controller.automate(_this2.overrideContext, owningView), 
                        _this2.compositionTransactionOwnershipToken ? _this2.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function() {
                            return _this2.compositionTransactionOwnershipToken = null, work();
                        }) : work();
                    };
                    return layoutInstruction ? (layoutInstruction.viewModel || (layoutInstruction.viewModel = {}), 
                    this.compositionEngine.createController(layoutInstruction).then(function(controller) {
                        return _aureliaTemplating.ShadowDOM.distributeView(viewPortInstruction.controller.view, controller.slots || controller.view.slots), 
                        controller.automate((0, _aureliaBinding.createOverrideContext)(layoutInstruction.viewModel), _this2.owningView), 
                        controller.view.children.push(viewPortInstruction.controller.view), controller.view || controller;
                    }).then(function(newView) {
                        return _this2.view = newView, ready(newView);
                    })) : (this.view = viewPortInstruction.controller.view, ready(this.owningView));
                }, RouterView.prototype._notify = function _notify() {
                    this.compositionTransactionNotifier && (this.compositionTransactionNotifier.done(), 
                    this.compositionTransactionNotifier = null);
                }, RouterView;
            }(), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "swapOrder", [ _aureliaTemplating.bindable ], {
                enumerable: !0,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutView", [ _aureliaTemplating.bindable ], {
                enumerable: !0,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutViewModel", [ _aureliaTemplating.bindable ], {
                enumerable: !0,
                initializer: null
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutModel", [ _aureliaTemplating.bindable ], {
                enumerable: !0,
                initializer: null
            }), _class = _class2)) || _class) || _class) || _class);
        }).call(exports, __webpack_require__("bluebird"));
    },
    /***/
    bluebird: /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process, Promise, global, setImmediate) {
            /* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2015 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
            /**
 * bluebird build version 3.4.6
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
            !function(e) {
                if (0) if ("function" == typeof define && define.amd) define([], e); else {
                    var f;
                    "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), 
                    f.Promise = e();
                } else module.exports = e();
            }(function() {
                var define, module, exports;
                return function e(t, n, r) {
                    function s(o, u) {
                        if (!n[o]) {
                            if (!t[o]) {
                                var a = "function" == typeof _dereq_ && _dereq_;
                                if (!u && a) return a(o, !0);
                                if (i) return i(o, !0);
                                var f = new Error("Cannot find module '" + o + "'");
                                throw f.code = "MODULE_NOT_FOUND", f;
                            }
                            var l = n[o] = {
                                exports: {}
                            };
                            t[o][0].call(l.exports, function(e) {
                                var n = t[o][1][e];
                                return s(n ? n : e);
                            }, l, l.exports, e, t, n, r);
                        }
                        return n[o].exports;
                    }
                    for (var i = "function" == typeof _dereq_ && _dereq_, o = 0; o < r.length; o++) s(r[o]);
                    return s;
                }({
                    1: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise) {
                            function any(promises) {
                                var ret = new SomePromiseArray(promises), promise = ret.promise();
                                return ret.setHowMany(1), ret.setUnwrap(), ret.init(), promise;
                            }
                            var SomePromiseArray = Promise._SomePromiseArray;
                            Promise.any = function(promises) {
                                return any(promises);
                            }, Promise.prototype.any = function() {
                                return any(this);
                            };
                        };
                    }, {} ],
                    2: [ function(_dereq_, module, exports) {
                        "use strict";
                        function Async() {
                            this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new Queue(16), 
                            this._normalQueue = new Queue(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                            var self = this;
                            this.drainQueues = function() {
                                self._drainQueues();
                            }, this._schedule = schedule;
                        }
                        function AsyncInvokeLater(fn, receiver, arg) {
                            this._lateQueue.push(fn, receiver, arg), this._queueTick();
                        }
                        function AsyncInvoke(fn, receiver, arg) {
                            this._normalQueue.push(fn, receiver, arg), this._queueTick();
                        }
                        function AsyncSettlePromises(promise) {
                            this._normalQueue._pushOne(promise), this._queueTick();
                        }
                        var firstLineError;
                        try {
                            throw new Error();
                        } catch (e) {
                            firstLineError = e;
                        }
                        var schedule = _dereq_("./schedule"), Queue = _dereq_("./queue"), util = _dereq_("./util");
                        Async.prototype.setScheduler = function(fn) {
                            var prev = this._schedule;
                            return this._schedule = fn, this._customScheduler = !0, prev;
                        }, Async.prototype.hasCustomScheduler = function() {
                            return this._customScheduler;
                        }, Async.prototype.enableTrampoline = function() {
                            this._trampolineEnabled = !0;
                        }, Async.prototype.disableTrampolineIfNecessary = function() {
                            util.hasDevTools && (this._trampolineEnabled = !1);
                        }, Async.prototype.haveItemsQueued = function() {
                            return this._isTickUsed || this._haveDrainedQueues;
                        }, Async.prototype.fatalError = function(e, isNode) {
                            isNode ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), 
                            process.exit(2)) : this.throwLater(e);
                        }, Async.prototype.throwLater = function(fn, arg) {
                            if (1 === arguments.length && (arg = fn, fn = function() {
                                throw arg;
                            }), "undefined" != typeof setTimeout) setTimeout(function() {
                                fn(arg);
                            }, 0); else try {
                                this._schedule(function() {
                                    fn(arg);
                                });
                            } catch (e) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                            }
                        }, util.hasDevTools ? (Async.prototype.invokeLater = function(fn, receiver, arg) {
                            this._trampolineEnabled ? AsyncInvokeLater.call(this, fn, receiver, arg) : this._schedule(function() {
                                setTimeout(function() {
                                    fn.call(receiver, arg);
                                }, 100);
                            });
                        }, Async.prototype.invoke = function(fn, receiver, arg) {
                            this._trampolineEnabled ? AsyncInvoke.call(this, fn, receiver, arg) : this._schedule(function() {
                                fn.call(receiver, arg);
                            });
                        }, Async.prototype.settlePromises = function(promise) {
                            this._trampolineEnabled ? AsyncSettlePromises.call(this, promise) : this._schedule(function() {
                                promise._settlePromises();
                            });
                        }) : (Async.prototype.invokeLater = AsyncInvokeLater, Async.prototype.invoke = AsyncInvoke, 
                        Async.prototype.settlePromises = AsyncSettlePromises), Async.prototype.invokeFirst = function(fn, receiver, arg) {
                            this._normalQueue.unshift(fn, receiver, arg), this._queueTick();
                        }, Async.prototype._drainQueue = function(queue) {
                            for (;queue.length() > 0; ) {
                                var fn = queue.shift();
                                if ("function" == typeof fn) {
                                    var receiver = queue.shift(), arg = queue.shift();
                                    fn.call(receiver, arg);
                                } else fn._settlePromises();
                            }
                        }, Async.prototype._drainQueues = function() {
                            this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, 
                            this._drainQueue(this._lateQueue);
                        }, Async.prototype._queueTick = function() {
                            this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
                        }, Async.prototype._reset = function() {
                            this._isTickUsed = !1;
                        }, module.exports = Async, module.exports.firstLineError = firstLineError;
                    }, {
                        "./queue": 26,
                        "./schedule": 29,
                        "./util": 36
                    } ],
                    3: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
                            var calledBind = !1, rejectThis = function(_, e) {
                                this._reject(e);
                            }, targetRejected = function(e, context) {
                                context.promiseRejectionQueued = !0, context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                            }, bindingResolved = function(thisArg, context) {
                                0 === (50397184 & this._bitField) && this._resolveCallback(context.target);
                            }, bindingRejected = function(e, context) {
                                context.promiseRejectionQueued || this._reject(e);
                            };
                            Promise.prototype.bind = function(thisArg) {
                                calledBind || (calledBind = !0, Promise.prototype._propagateFrom = debug.propagateFromFunction(), 
                                Promise.prototype._boundValue = debug.boundValueFunction());
                                var maybePromise = tryConvertToPromise(thisArg), ret = new Promise(INTERNAL);
                                ret._propagateFrom(this, 1);
                                var target = this._target();
                                if (ret._setBoundTo(maybePromise), maybePromise instanceof Promise) {
                                    var context = {
                                        promiseRejectionQueued: !1,
                                        promise: ret,
                                        target: target,
                                        bindingPromise: maybePromise
                                    };
                                    target._then(INTERNAL, targetRejected, void 0, ret, context), maybePromise._then(bindingResolved, bindingRejected, void 0, ret, context), 
                                    ret._setOnCancel(maybePromise);
                                } else ret._resolveCallback(target);
                                return ret;
                            }, Promise.prototype._setBoundTo = function(obj) {
                                void 0 !== obj ? (this._bitField = 2097152 | this._bitField, this._boundTo = obj) : this._bitField = this._bitField & -2097153;
                            }, Promise.prototype._isBound = function() {
                                return 2097152 === (2097152 & this._bitField);
                            }, Promise.bind = function(thisArg, value) {
                                return Promise.resolve(value).bind(thisArg);
                            };
                        };
                    }, {} ],
                    4: [ function(_dereq_, module, exports) {
                        "use strict";
                        function noConflict() {
                            try {
                                Promise === bluebird && (Promise = old);
                            } catch (e) {}
                            return bluebird;
                        }
                        var old;
                        "undefined" != typeof Promise && (old = Promise);
                        var bluebird = _dereq_("./promise")();
                        bluebird.noConflict = noConflict, module.exports = bluebird;
                    }, {
                        "./promise": 22
                    } ],
                    5: [ function(_dereq_, module, exports) {
                        "use strict";
                        var cr = Object.create;
                        if (cr) {
                            var callerCache = cr(null), getterCache = cr(null);
                            callerCache[" size"] = getterCache[" size"] = 0;
                        }
                        module.exports = function(Promise) {
                            function ensureMethod(obj, methodName) {
                                var fn;
                                if (null != obj && (fn = obj[methodName]), "function" != typeof fn) {
                                    var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                                    throw new Promise.TypeError(message);
                                }
                                return fn;
                            }
                            function caller(obj) {
                                var methodName = this.pop(), fn = ensureMethod(obj, methodName);
                                return fn.apply(obj, this);
                            }
                            function namedGetter(obj) {
                                return obj[this];
                            }
                            function indexedGetter(obj) {
                                var index = +this;
                                return index < 0 && (index = Math.max(0, index + obj.length)), obj[index];
                            }
                            var util = _dereq_("./util"), canEvaluate = util.canEvaluate, isIdentifier = util.isIdentifier, getMethodCaller, getGetter;
                            if (!1) {
                                var makeMethodCaller = function(methodName) {
                                    return new Function("ensureMethod", "                                    \n        return function(obj) {                                               \n            'use strict'                                                     \n            var len = this.length;                                           \n            ensureMethod(obj, 'methodName');                                 \n            switch(len) {                                                    \n                case 1: return obj.methodName(this[0]);                      \n                case 2: return obj.methodName(this[0], this[1]);             \n                case 3: return obj.methodName(this[0], this[1], this[2]);    \n                case 0: return obj.methodName();                             \n                default:                                                     \n                    return obj.methodName.apply(obj, this);                  \n            }                                                                \n        };                                                                   \n        ".replace(/methodName/g, methodName))(ensureMethod);
                                }, makeGetter = function(propertyName) {
                                    return new Function("obj", "                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName", propertyName));
                                }, getCompiled = function(name, compiler, cache) {
                                    var ret = cache[name];
                                    if ("function" != typeof ret) {
                                        if (!isIdentifier(name)) return null;
                                        if (ret = compiler(name), cache[name] = ret, cache[" size"]++, cache[" size"] > 512) {
                                            for (var keys = Object.keys(cache), i = 0; i < 256; ++i) delete cache[keys[i]];
                                            cache[" size"] = keys.length - 256;
                                        }
                                    }
                                    return ret;
                                };
                                getMethodCaller = function(name) {
                                    return getCompiled(name, makeMethodCaller, callerCache);
                                }, getGetter = function(name) {
                                    return getCompiled(name, makeGetter, getterCache);
                                };
                            }
                            Promise.prototype.call = function(methodName) {
                                var args = [].slice.call(arguments, 1);
                                if (!1) {
                                    var maybeCaller = getMethodCaller(methodName);
                                    if (null !== maybeCaller) return this._then(maybeCaller, void 0, void 0, args, void 0);
                                }
                                return args.push(methodName), this._then(caller, void 0, void 0, args, void 0);
                            }, Promise.prototype.get = function(propertyName) {
                                var isIndex = "number" == typeof propertyName, getter;
                                if (isIndex) getter = indexedGetter; else if (canEvaluate) {
                                    var maybeGetter = getGetter(propertyName);
                                    getter = null !== maybeGetter ? maybeGetter : namedGetter;
                                } else getter = namedGetter;
                                return this._then(getter, void 0, void 0, propertyName, void 0);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    6: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, apiRejection, debug) {
                            var util = _dereq_("./util"), tryCatch = util.tryCatch, errorObj = util.errorObj, async = Promise._async;
                            Promise.prototype.break = Promise.prototype.cancel = function() {
                                if (!debug.cancellation()) return this._warn("cancellation is disabled");
                                for (var promise = this, child = promise; promise._isCancellable(); ) {
                                    if (!promise._cancelBy(child)) {
                                        child._isFollowing() ? child._followee().cancel() : child._cancelBranched();
                                        break;
                                    }
                                    var parent = promise._cancellationParent;
                                    if (null == parent || !parent._isCancellable()) {
                                        promise._isFollowing() ? promise._followee().cancel() : promise._cancelBranched();
                                        break;
                                    }
                                    promise._isFollowing() && promise._followee().cancel(), promise._setWillBeCancelled(), 
                                    child = promise, promise = parent;
                                }
                            }, Promise.prototype._branchHasCancelled = function() {
                                this._branchesRemainingToCancel--;
                            }, Promise.prototype._enoughBranchesHaveCancelled = function() {
                                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
                            }, Promise.prototype._cancelBy = function(canceller) {
                                return canceller === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), 
                                !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), 
                                !0));
                            }, Promise.prototype._cancelBranched = function() {
                                this._enoughBranchesHaveCancelled() && this._cancel();
                            }, Promise.prototype._cancel = function() {
                                this._isCancellable() && (this._setCancelled(), async.invoke(this._cancelPromises, this, void 0));
                            }, Promise.prototype._cancelPromises = function() {
                                this._length() > 0 && this._settlePromises();
                            }, Promise.prototype._unsetOnCancel = function() {
                                this._onCancelField = void 0;
                            }, Promise.prototype._isCancellable = function() {
                                return this.isPending() && !this._isCancelled();
                            }, Promise.prototype.isCancellable = function() {
                                return this.isPending() && !this.isCancelled();
                            }, Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
                                if (util.isArray(onCancelCallback)) for (var i = 0; i < onCancelCallback.length; ++i) this._doInvokeOnCancel(onCancelCallback[i], internalOnly); else if (void 0 !== onCancelCallback) if ("function" == typeof onCancelCallback) {
                                    if (!internalOnly) {
                                        var e = tryCatch(onCancelCallback).call(this._boundValue());
                                        e === errorObj && (this._attachExtraTrace(e.e), async.throwLater(e.e));
                                    }
                                } else onCancelCallback._resultCancelled(this);
                            }, Promise.prototype._invokeOnCancel = function() {
                                var onCancelCallback = this._onCancel();
                                this._unsetOnCancel(), async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                            }, Promise.prototype._invokeInternalOnCancel = function() {
                                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
                            }, Promise.prototype._resultCancelled = function() {
                                this.cancel();
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    7: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(NEXT_FILTER) {
                            function catchFilter(instances, cb, promise) {
                                return function(e) {
                                    var boundTo = promise._boundValue();
                                    predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                        var item = instances[i];
                                        if (item === Error || null != item && item.prototype instanceof Error) {
                                            if (e instanceof item) return tryCatch(cb).call(boundTo, e);
                                        } else if ("function" == typeof item) {
                                            var matchesPredicate = tryCatch(item).call(boundTo, e);
                                            if (matchesPredicate === errorObj) return matchesPredicate;
                                            if (matchesPredicate) return tryCatch(cb).call(boundTo, e);
                                        } else if (util.isObject(e)) {
                                            for (var keys = getKeys(item), j = 0; j < keys.length; ++j) {
                                                var key = keys[j];
                                                if (item[key] != e[key]) continue predicateLoop;
                                            }
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    }
                                    return NEXT_FILTER;
                                };
                            }
                            var util = _dereq_("./util"), getKeys = _dereq_("./es5").keys, tryCatch = util.tryCatch, errorObj = util.errorObj;
                            return catchFilter;
                        };
                    }, {
                        "./es5": 13,
                        "./util": 36
                    } ],
                    8: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise) {
                            function Context() {
                                this._trace = new Context.CapturedTrace(peekContext());
                            }
                            function createContext() {
                                if (longStackTraces) return new Context();
                            }
                            function peekContext() {
                                var lastIndex = contextStack.length - 1;
                                if (lastIndex >= 0) return contextStack[lastIndex];
                            }
                            var longStackTraces = !1, contextStack = [];
                            return Promise.prototype._promiseCreated = function() {}, Promise.prototype._pushContext = function() {}, 
                            Promise.prototype._popContext = function() {
                                return null;
                            }, Promise._peekContext = Promise.prototype._peekContext = function() {}, Context.prototype._pushContext = function() {
                                void 0 !== this._trace && (this._trace._promiseCreated = null, contextStack.push(this._trace));
                            }, Context.prototype._popContext = function() {
                                if (void 0 !== this._trace) {
                                    var trace = contextStack.pop(), ret = trace._promiseCreated;
                                    return trace._promiseCreated = null, ret;
                                }
                                return null;
                            }, Context.CapturedTrace = null, Context.create = createContext, Context.deactivateLongStackTraces = function() {}, 
                            Context.activateLongStackTraces = function() {
                                var Promise_pushContext = Promise.prototype._pushContext, Promise_popContext = Promise.prototype._popContext, Promise_PeekContext = Promise._peekContext, Promise_peekContext = Promise.prototype._peekContext, Promise_promiseCreated = Promise.prototype._promiseCreated;
                                Context.deactivateLongStackTraces = function() {
                                    Promise.prototype._pushContext = Promise_pushContext, Promise.prototype._popContext = Promise_popContext, 
                                    Promise._peekContext = Promise_PeekContext, Promise.prototype._peekContext = Promise_peekContext, 
                                    Promise.prototype._promiseCreated = Promise_promiseCreated, longStackTraces = !1;
                                }, longStackTraces = !0, Promise.prototype._pushContext = Context.prototype._pushContext, 
                                Promise.prototype._popContext = Context.prototype._popContext, Promise._peekContext = Promise.prototype._peekContext = peekContext, 
                                Promise.prototype._promiseCreated = function() {
                                    var ctx = this._peekContext();
                                    ctx && null == ctx._promiseCreated && (ctx._promiseCreated = this);
                                };
                            }, Context;
                        };
                    }, {} ],
                    9: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, Context) {
                            function generatePromiseLifecycleEventObject(name, promise) {
                                return {
                                    promise: promise
                                };
                            }
                            function defaultFireEvent() {
                                return !1;
                            }
                            function cancellationExecute(executor, resolve, reject) {
                                var promise = this;
                                try {
                                    executor(resolve, reject, function(onCancel) {
                                        if ("function" != typeof onCancel) throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                                        promise._attachCancellationCallback(onCancel);
                                    });
                                } catch (e) {
                                    return e;
                                }
                            }
                            function cancellationAttachCancellationCallback(onCancel) {
                                if (!this._isCancellable()) return this;
                                var previousOnCancel = this._onCancel();
                                void 0 !== previousOnCancel ? util.isArray(previousOnCancel) ? previousOnCancel.push(onCancel) : this._setOnCancel([ previousOnCancel, onCancel ]) : this._setOnCancel(onCancel);
                            }
                            function cancellationOnCancel() {
                                return this._onCancelField;
                            }
                            function cancellationSetOnCancel(onCancel) {
                                this._onCancelField = onCancel;
                            }
                            function cancellationClearCancellationData() {
                                this._cancellationParent = void 0, this._onCancelField = void 0;
                            }
                            function cancellationPropagateFrom(parent, flags) {
                                if (0 !== (1 & flags)) {
                                    this._cancellationParent = parent;
                                    var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                    void 0 === branchesRemainingToCancel && (branchesRemainingToCancel = 0), parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                                }
                                0 !== (2 & flags) && parent._isBound() && this._setBoundTo(parent._boundTo);
                            }
                            function bindingPropagateFrom(parent, flags) {
                                0 !== (2 & flags) && parent._isBound() && this._setBoundTo(parent._boundTo);
                            }
                            function boundValueFunction() {
                                var ret = this._boundTo;
                                return void 0 !== ret && ret instanceof Promise ? ret.isFulfilled() ? ret.value() : void 0 : ret;
                            }
                            function longStackTracesCaptureStackTrace() {
                                this._trace = new CapturedTrace(this._peekContext());
                            }
                            function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                                if (canAttachTrace(error)) {
                                    var trace = this._trace;
                                    if (void 0 !== trace && ignoreSelf && (trace = trace._parent), void 0 !== trace) trace.attachExtraTrace(error); else if (!error.__stackCleaned__) {
                                        var parsed = parseStackAndMessage(error);
                                        util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n")), 
                                        util.notEnumerableProp(error, "__stackCleaned__", !0);
                                    }
                                }
                            }
                            function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                                if (void 0 === returnValue && null !== promiseCreated && wForgottenReturn) {
                                    if (void 0 !== parent && parent._returnedNonUndefined()) return;
                                    if (0 === (65535 & promise._bitField)) return;
                                    name && (name += " ");
                                    var handlerLine = "", creatorLine = "";
                                    if (promiseCreated._trace) {
                                        for (var traceLines = promiseCreated._trace.stack.split("\n"), stack = cleanStack(traceLines), i = stack.length - 1; i >= 0; --i) {
                                            var line = stack[i];
                                            if (!nodeFramePattern.test(line)) {
                                                var lineMatches = line.match(parseLinePattern);
                                                lineMatches && (handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ");
                                                break;
                                            }
                                        }
                                        if (stack.length > 0) for (var firstUserLine = stack[0], i = 0; i < traceLines.length; ++i) if (traceLines[i] === firstUserLine) {
                                            i > 0 && (creatorLine = "\n" + traceLines[i - 1]);
                                            break;
                                        }
                                    }
                                    var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, see http://goo.gl/rRqMUw" + creatorLine;
                                    promise._warn(msg, !0, promiseCreated);
                                }
                            }
                            function deprecated(name, replacement) {
                                var message = name + " is deprecated and will be removed in a future version.";
                                return replacement && (message += " Use " + replacement + " instead."), warn(message);
                            }
                            function warn(message, shouldUseOwnTrace, promise) {
                                if (config.warnings) {
                                    var warning = new Warning(message), ctx;
                                    if (shouldUseOwnTrace) promise._attachExtraTrace(warning); else if (config.longStackTraces && (ctx = Promise._peekContext())) ctx.attachExtraTrace(warning); else {
                                        var parsed = parseStackAndMessage(warning);
                                        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                                    }
                                    activeFireEvent("warning", warning) || formatAndLogError(warning, "", !0);
                                }
                            }
                            function reconstructStack(message, stacks) {
                                for (var i = 0; i < stacks.length - 1; ++i) stacks[i].push("From previous event:"), 
                                stacks[i] = stacks[i].join("\n");
                                return i < stacks.length && (stacks[i] = stacks[i].join("\n")), message + "\n" + stacks.join("\n");
                            }
                            function removeDuplicateOrEmptyJumps(stacks) {
                                for (var i = 0; i < stacks.length; ++i) (0 === stacks[i].length || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) && (stacks.splice(i, 1), 
                                i--);
                            }
                            function removeCommonRoots(stacks) {
                                for (var current = stacks[0], i = 1; i < stacks.length; ++i) {
                                    for (var prev = stacks[i], currentLastIndex = current.length - 1, currentLastLine = current[currentLastIndex], commonRootMeetPoint = -1, j = prev.length - 1; j >= 0; --j) if (prev[j] === currentLastLine) {
                                        commonRootMeetPoint = j;
                                        break;
                                    }
                                    for (var j = commonRootMeetPoint; j >= 0; --j) {
                                        var line = prev[j];
                                        if (current[currentLastIndex] !== line) break;
                                        current.pop(), currentLastIndex--;
                                    }
                                    current = prev;
                                }
                            }
                            function cleanStack(stack) {
                                for (var ret = [], i = 0; i < stack.length; ++i) {
                                    var line = stack[i], isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line), isInternalFrame = isTraceLine && shouldIgnore(line);
                                    isTraceLine && !isInternalFrame && (indentStackFrames && " " !== line.charAt(0) && (line = "    " + line), 
                                    ret.push(line));
                                }
                                return ret;
                            }
                            function stackFramesAsArray(error) {
                                for (var stack = error.stack.replace(/\s+$/g, "").split("\n"), i = 0; i < stack.length; ++i) {
                                    var line = stack[i];
                                    if ("    (No stack trace)" === line || stackFramePattern.test(line)) break;
                                }
                                return i > 0 && (stack = stack.slice(i)), stack;
                            }
                            function parseStackAndMessage(error) {
                                var stack = error.stack, message = error.toString();
                                return stack = "string" == typeof stack && stack.length > 0 ? stackFramesAsArray(error) : [ "    (No stack trace)" ], 
                                {
                                    message: message,
                                    stack: cleanStack(stack)
                                };
                            }
                            function formatAndLogError(error, title, isSoft) {
                                if ("undefined" != typeof console) {
                                    var message;
                                    if (util.isObject(error)) {
                                        var stack = error.stack;
                                        message = title + formatStack(stack, error);
                                    } else message = title + String(error);
                                    "function" == typeof printWarning ? printWarning(message, isSoft) : "function" != typeof console.log && "object" != typeof console.log || console.log(message);
                                }
                            }
                            function fireRejectionEvent(name, localHandler, reason, promise) {
                                var localEventFired = !1;
                                try {
                                    "function" == typeof localHandler && (localEventFired = !0, "rejectionHandled" === name ? localHandler(promise) : localHandler(reason, promise));
                                } catch (e) {
                                    async.throwLater(e);
                                }
                                "unhandledRejection" === name ? activeFireEvent(name, reason, promise) || localEventFired || formatAndLogError(reason, "Unhandled rejection ") : activeFireEvent(name, promise);
                            }
                            function formatNonError(obj) {
                                var str;
                                if ("function" == typeof obj) str = "[function " + (obj.name || "anonymous") + "]"; else {
                                    str = obj && "function" == typeof obj.toString ? obj.toString() : util.toString(obj);
                                    var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                    if (ruselessToString.test(str)) try {
                                        var newStr = JSON.stringify(obj);
                                        str = newStr;
                                    } catch (e) {}
                                    0 === str.length && (str = "(empty array)");
                                }
                                return "(<" + snip(str) + ">, no stack trace)";
                            }
                            function snip(str) {
                                var maxChars = 41;
                                return str.length < maxChars ? str : str.substr(0, maxChars - 3) + "...";
                            }
                            function longStackTracesIsSupported() {
                                return "function" == typeof captureStackTrace;
                            }
                            function parseLineInfo(line) {
                                var matches = line.match(parseLineInfoRegex);
                                if (matches) return {
                                    fileName: matches[1],
                                    line: parseInt(matches[2], 10)
                                };
                            }
                            function setBounds(firstLineError, lastLineError) {
                                if (longStackTracesIsSupported()) {
                                    for (var firstStackLines = firstLineError.stack.split("\n"), lastStackLines = lastLineError.stack.split("\n"), firstIndex = -1, lastIndex = -1, firstFileName, lastFileName, i = 0; i < firstStackLines.length; ++i) {
                                        var result = parseLineInfo(firstStackLines[i]);
                                        if (result) {
                                            firstFileName = result.fileName, firstIndex = result.line;
                                            break;
                                        }
                                    }
                                    for (var i = 0; i < lastStackLines.length; ++i) {
                                        var result = parseLineInfo(lastStackLines[i]);
                                        if (result) {
                                            lastFileName = result.fileName, lastIndex = result.line;
                                            break;
                                        }
                                    }
                                    firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex || (shouldIgnore = function(line) {
                                        if (bluebirdFramePattern.test(line)) return !0;
                                        var info = parseLineInfo(line);
                                        return !!(info && info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex);
                                    });
                                }
                            }
                            function CapturedTrace(parent) {
                                this._parent = parent, this._promisesCreated = 0;
                                var length = this._length = 1 + (void 0 === parent ? 0 : parent._length);
                                captureStackTrace(this, CapturedTrace), length > 32 && this.uncycle();
                            }
                            var getDomain = Promise._getDomain, async = Promise._async, Warning = _dereq_("./errors").Warning, util = _dereq_("./util"), canAttachTrace = util.canAttachTrace, unhandledRejectionHandled, possiblyUnhandledRejection, bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/, parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, stackFramePattern = null, formatStack = null, indentStackFrames = !1, printWarning, debugging = !(0 == util.env("BLUEBIRD_DEBUG")), warnings = !(0 == util.env("BLUEBIRD_WARNINGS") || !debugging && !util.env("BLUEBIRD_WARNINGS")), longStackTraces = !(0 == util.env("BLUEBIRD_LONG_STACK_TRACES") || !debugging && !util.env("BLUEBIRD_LONG_STACK_TRACES")), wForgottenReturn = 0 != util.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                            Promise.prototype.suppressUnhandledRejections = function() {
                                var target = this._target();
                                target._bitField = target._bitField & -1048577 | 524288;
                            }, Promise.prototype._ensurePossibleRejectionHandled = function() {
                                0 === (524288 & this._bitField) && (this._setRejectionIsUnhandled(), async.invokeLater(this._notifyUnhandledRejection, this, void 0));
                            }, Promise.prototype._notifyUnhandledRejectionIsHandled = function() {
                                fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, void 0, this);
                            }, Promise.prototype._setReturnedNonUndefined = function() {
                                this._bitField = 268435456 | this._bitField;
                            }, Promise.prototype._returnedNonUndefined = function() {
                                return 0 !== (268435456 & this._bitField);
                            }, Promise.prototype._notifyUnhandledRejection = function() {
                                if (this._isRejectionUnhandled()) {
                                    var reason = this._settledValue();
                                    this._setUnhandledRejectionIsNotified(), fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                                }
                            }, Promise.prototype._setUnhandledRejectionIsNotified = function() {
                                this._bitField = 262144 | this._bitField;
                            }, Promise.prototype._unsetUnhandledRejectionIsNotified = function() {
                                this._bitField = this._bitField & -262145;
                            }, Promise.prototype._isUnhandledRejectionNotified = function() {
                                return (262144 & this._bitField) > 0;
                            }, Promise.prototype._setRejectionIsUnhandled = function() {
                                this._bitField = 1048576 | this._bitField;
                            }, Promise.prototype._unsetRejectionIsUnhandled = function() {
                                this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), 
                                this._notifyUnhandledRejectionIsHandled());
                            }, Promise.prototype._isRejectionUnhandled = function() {
                                return (1048576 & this._bitField) > 0;
                            }, Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
                                return warn(message, shouldUseOwnTrace, promise || this);
                            }, Promise.onPossiblyUnhandledRejection = function(fn) {
                                var domain = getDomain();
                                possiblyUnhandledRejection = "function" == typeof fn ? null === domain ? fn : util.domainBind(domain, fn) : void 0;
                            }, Promise.onUnhandledRejectionHandled = function(fn) {
                                var domain = getDomain();
                                unhandledRejectionHandled = "function" == typeof fn ? null === domain ? fn : util.domainBind(domain, fn) : void 0;
                            };
                            var disableLongStackTraces = function() {};
                            Promise.longStackTraces = function() {
                                if (async.haveItemsQueued() && !config.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                if (!config.longStackTraces && longStackTracesIsSupported()) {
                                    var Promise_captureStackTrace = Promise.prototype._captureStackTrace, Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                    config.longStackTraces = !0, disableLongStackTraces = function() {
                                        if (async.haveItemsQueued() && !config.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                        Promise.prototype._captureStackTrace = Promise_captureStackTrace, Promise.prototype._attachExtraTrace = Promise_attachExtraTrace, 
                                        Context.deactivateLongStackTraces(), async.enableTrampoline(), config.longStackTraces = !1;
                                    }, Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace, Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace, 
                                    Context.activateLongStackTraces(), async.disableTrampolineIfNecessary();
                                }
                            }, Promise.hasLongStackTraces = function() {
                                return config.longStackTraces && longStackTracesIsSupported();
                            };
                            var fireDomEvent = function() {
                                try {
                                    if ("function" == typeof CustomEvent) {
                                        var event = new CustomEvent("CustomEvent");
                                        return util.global.dispatchEvent(event), function(name, event) {
                                            var domEvent = new CustomEvent(name.toLowerCase(), {
                                                detail: event,
                                                cancelable: !0
                                            });
                                            return !util.global.dispatchEvent(domEvent);
                                        };
                                    }
                                    if ("function" == typeof Event) {
                                        var event = new Event("CustomEvent");
                                        return util.global.dispatchEvent(event), function(name, event) {
                                            var domEvent = new Event(name.toLowerCase(), {
                                                cancelable: !0
                                            });
                                            return domEvent.detail = event, !util.global.dispatchEvent(domEvent);
                                        };
                                    }
                                    var event = document.createEvent("CustomEvent");
                                    return event.initCustomEvent("testingtheevent", !1, !0, {}), util.global.dispatchEvent(event), 
                                    function(name, event) {
                                        var domEvent = document.createEvent("CustomEvent");
                                        return domEvent.initCustomEvent(name.toLowerCase(), !1, !0, event), !util.global.dispatchEvent(domEvent);
                                    };
                                } catch (e) {}
                                return function() {
                                    return !1;
                                };
                            }(), fireGlobalEvent = function() {
                                return util.isNode ? function() {
                                    return process.emit.apply(process, arguments);
                                } : util.global ? function(name) {
                                    var methodName = "on" + name.toLowerCase(), method = util.global[methodName];
                                    return !!method && (method.apply(util.global, [].slice.call(arguments, 1)), !0);
                                } : function() {
                                    return !1;
                                };
                            }(), eventToObjectGenerator = {
                                promiseCreated: generatePromiseLifecycleEventObject,
                                promiseFulfilled: generatePromiseLifecycleEventObject,
                                promiseRejected: generatePromiseLifecycleEventObject,
                                promiseResolved: generatePromiseLifecycleEventObject,
                                promiseCancelled: generatePromiseLifecycleEventObject,
                                promiseChained: function(name, promise, child) {
                                    return {
                                        promise: promise,
                                        child: child
                                    };
                                },
                                warning: function(name, warning) {
                                    return {
                                        warning: warning
                                    };
                                },
                                unhandledRejection: function(name, reason, promise) {
                                    return {
                                        reason: reason,
                                        promise: promise
                                    };
                                },
                                rejectionHandled: generatePromiseLifecycleEventObject
                            }, activeFireEvent = function(name) {
                                var globalEventFired = !1;
                                try {
                                    globalEventFired = fireGlobalEvent.apply(null, arguments);
                                } catch (e) {
                                    async.throwLater(e), globalEventFired = !0;
                                }
                                var domEventFired = !1;
                                try {
                                    domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                                } catch (e) {
                                    async.throwLater(e), domEventFired = !0;
                                }
                                return domEventFired || globalEventFired;
                            };
                            Promise.config = function(opts) {
                                if (opts = Object(opts), "longStackTraces" in opts && (opts.longStackTraces ? Promise.longStackTraces() : !opts.longStackTraces && Promise.hasLongStackTraces() && disableLongStackTraces()), 
                                "warnings" in opts) {
                                    var warningsOption = opts.warnings;
                                    config.warnings = !!warningsOption, wForgottenReturn = config.warnings, util.isObject(warningsOption) && "wForgottenReturn" in warningsOption && (wForgottenReturn = !!warningsOption.wForgottenReturn);
                                }
                                if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                    if (async.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                                    Promise.prototype._clearCancellationData = cancellationClearCancellationData, Promise.prototype._propagateFrom = cancellationPropagateFrom, 
                                    Promise.prototype._onCancel = cancellationOnCancel, Promise.prototype._setOnCancel = cancellationSetOnCancel, 
                                    Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback, 
                                    Promise.prototype._execute = cancellationExecute, propagateFromFunction = cancellationPropagateFrom, 
                                    config.cancellation = !0;
                                }
                                "monitoring" in opts && (opts.monitoring && !config.monitoring ? (config.monitoring = !0, 
                                Promise.prototype._fireEvent = activeFireEvent) : !opts.monitoring && config.monitoring && (config.monitoring = !1, 
                                Promise.prototype._fireEvent = defaultFireEvent));
                            }, Promise.prototype._fireEvent = defaultFireEvent, Promise.prototype._execute = function(executor, resolve, reject) {
                                try {
                                    executor(resolve, reject);
                                } catch (e) {
                                    return e;
                                }
                            }, Promise.prototype._onCancel = function() {}, Promise.prototype._setOnCancel = function(handler) {}, 
                            Promise.prototype._attachCancellationCallback = function(onCancel) {}, Promise.prototype._captureStackTrace = function() {}, 
                            Promise.prototype._attachExtraTrace = function() {}, Promise.prototype._clearCancellationData = function() {}, 
                            Promise.prototype._propagateFrom = function(parent, flags) {};
                            var propagateFromFunction = bindingPropagateFrom, shouldIgnore = function() {
                                return !1;
                            }, parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                            util.inherits(CapturedTrace, Error), Context.CapturedTrace = CapturedTrace, CapturedTrace.prototype.uncycle = function() {
                                var length = this._length;
                                if (!(length < 2)) {
                                    for (var nodes = [], stackToIndex = {}, i = 0, node = this; void 0 !== node; ++i) nodes.push(node), 
                                    node = node._parent;
                                    length = this._length = i;
                                    for (var i = length - 1; i >= 0; --i) {
                                        var stack = nodes[i].stack;
                                        void 0 === stackToIndex[stack] && (stackToIndex[stack] = i);
                                    }
                                    for (var i = 0; i < length; ++i) {
                                        var currentStack = nodes[i].stack, index = stackToIndex[currentStack];
                                        if (void 0 !== index && index !== i) {
                                            index > 0 && (nodes[index - 1]._parent = void 0, nodes[index - 1]._length = 1), 
                                            nodes[i]._parent = void 0, nodes[i]._length = 1;
                                            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
                                            index < length - 1 ? (cycleEdgeNode._parent = nodes[index + 1], cycleEdgeNode._parent.uncycle(), 
                                            cycleEdgeNode._length = cycleEdgeNode._parent._length + 1) : (cycleEdgeNode._parent = void 0, 
                                            cycleEdgeNode._length = 1);
                                            for (var currentChildLength = cycleEdgeNode._length + 1, j = i - 2; j >= 0; --j) nodes[j]._length = currentChildLength, 
                                            currentChildLength++;
                                            return;
                                        }
                                    }
                                }
                            }, CapturedTrace.prototype.attachExtraTrace = function(error) {
                                if (!error.__stackCleaned__) {
                                    this.uncycle();
                                    for (var parsed = parseStackAndMessage(error), message = parsed.message, stacks = [ parsed.stack ], trace = this; void 0 !== trace; ) stacks.push(cleanStack(trace.stack.split("\n"))), 
                                    trace = trace._parent;
                                    removeCommonRoots(stacks), removeDuplicateOrEmptyJumps(stacks), util.notEnumerableProp(error, "stack", reconstructStack(message, stacks)), 
                                    util.notEnumerableProp(error, "__stackCleaned__", !0);
                                }
                            };
                            var captureStackTrace = function stackDetection() {
                                var v8stackFramePattern = /^\s*at\s*/, v8stackFormatter = function(stack, error) {
                                    return "string" == typeof stack ? stack : void 0 !== error.name && void 0 !== error.message ? error.toString() : formatNonError(error);
                                };
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit += 6, stackFramePattern = v8stackFramePattern, formatStack = v8stackFormatter;
                                    var captureStackTrace = Error.captureStackTrace;
                                    return shouldIgnore = function(line) {
                                        return bluebirdFramePattern.test(line);
                                    }, function(receiver, ignoreUntil) {
                                        Error.stackTraceLimit += 6, captureStackTrace(receiver, ignoreUntil), Error.stackTraceLimit -= 6;
                                    };
                                }
                                var err = new Error();
                                if ("string" == typeof err.stack && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return stackFramePattern = /@/, 
                                formatStack = v8stackFormatter, indentStackFrames = !0, function captureStackTrace(o) {
                                    o.stack = new Error().stack;
                                };
                                var hasStackAfterThrow;
                                try {
                                    throw new Error();
                                } catch (e) {
                                    hasStackAfterThrow = "stack" in e;
                                }
                                return "stack" in err || !hasStackAfterThrow || "number" != typeof Error.stackTraceLimit ? (formatStack = function(stack, error) {
                                    return "string" == typeof stack ? stack : "object" != typeof error && "function" != typeof error || void 0 === error.name || void 0 === error.message ? formatNonError(error) : error.toString();
                                }, null) : (stackFramePattern = v8stackFramePattern, formatStack = v8stackFormatter, 
                                function captureStackTrace(o) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        o.stack = e.stack;
                                    }
                                    Error.stackTraceLimit -= 6;
                                });
                            }([]);
                            "undefined" != typeof console && "undefined" != typeof console.warn && (printWarning = function(message) {
                                console.warn(message);
                            }, util.isNode && process.stderr.isTTY ? printWarning = function(message, isSoft) {
                                var color = isSoft ? "[33m" : "[31m";
                                console.warn(color + message + "[0m\n");
                            } : util.isNode || "string" != typeof new Error().stack || (printWarning = function(message, isSoft) {
                                console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                            }));
                            var config = {
                                warnings: warnings,
                                longStackTraces: !1,
                                cancellation: !1,
                                monitoring: !1
                            };
                            return longStackTraces && Promise.longStackTraces(), {
                                longStackTraces: function() {
                                    return config.longStackTraces;
                                },
                                warnings: function() {
                                    return config.warnings;
                                },
                                cancellation: function() {
                                    return config.cancellation;
                                },
                                monitoring: function() {
                                    return config.monitoring;
                                },
                                propagateFromFunction: function() {
                                    return propagateFromFunction;
                                },
                                boundValueFunction: function() {
                                    return boundValueFunction;
                                },
                                checkForgottenReturns: checkForgottenReturns,
                                setBounds: setBounds,
                                warn: warn,
                                deprecated: deprecated,
                                CapturedTrace: CapturedTrace,
                                fireDomEvent: fireDomEvent,
                                fireGlobalEvent: fireGlobalEvent
                            };
                        };
                    }, {
                        "./errors": 12,
                        "./util": 36
                    } ],
                    10: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise) {
                            function returner() {
                                return this.value;
                            }
                            function thrower() {
                                throw this.reason;
                            }
                            Promise.prototype.return = Promise.prototype.thenReturn = function(value) {
                                return value instanceof Promise && value.suppressUnhandledRejections(), this._then(returner, void 0, void 0, {
                                    value: value
                                }, void 0);
                            }, Promise.prototype.throw = Promise.prototype.thenThrow = function(reason) {
                                return this._then(thrower, void 0, void 0, {
                                    reason: reason
                                }, void 0);
                            }, Promise.prototype.catchThrow = function(reason) {
                                if (arguments.length <= 1) return this._then(void 0, thrower, void 0, {
                                    reason: reason
                                }, void 0);
                                var _reason = arguments[1], handler = function() {
                                    throw _reason;
                                };
                                return this.caught(reason, handler);
                            }, Promise.prototype.catchReturn = function(value) {
                                if (arguments.length <= 1) return value instanceof Promise && value.suppressUnhandledRejections(), 
                                this._then(void 0, returner, void 0, {
                                    value: value
                                }, void 0);
                                var _value = arguments[1];
                                _value instanceof Promise && _value.suppressUnhandledRejections();
                                var handler = function() {
                                    return _value;
                                };
                                return this.caught(value, handler);
                            };
                        };
                    }, {} ],
                    11: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL) {
                            function promiseAllThis() {
                                return PromiseAll(this);
                            }
                            function PromiseMapSeries(promises, fn) {
                                return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                            }
                            var PromiseReduce = Promise.reduce, PromiseAll = Promise.all;
                            Promise.prototype.each = function(fn) {
                                return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, void 0, void 0, this, void 0);
                            }, Promise.prototype.mapSeries = function(fn) {
                                return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                            }, Promise.each = function(promises, fn) {
                                return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, void 0, void 0, promises, void 0);
                            }, Promise.mapSeries = PromiseMapSeries;
                        };
                    }, {} ],
                    12: [ function(_dereq_, module, exports) {
                        "use strict";
                        function subError(nameProperty, defaultMessage) {
                            function SubError(message) {
                                return this instanceof SubError ? (notEnumerableProp(this, "message", "string" == typeof message ? message : defaultMessage), 
                                notEnumerableProp(this, "name", nameProperty), void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new SubError(message);
                            }
                            return inherits(SubError, Error), SubError;
                        }
                        function OperationalError(message) {
                            return this instanceof OperationalError ? (notEnumerableProp(this, "name", "OperationalError"), 
                            notEnumerableProp(this, "message", message), this.cause = message, this.isOperational = !0, 
                            void (message instanceof Error ? (notEnumerableProp(this, "message", message.message), 
                            notEnumerableProp(this, "stack", message.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new OperationalError(message);
                        }
                        var es5 = _dereq_("./es5"), Objectfreeze = es5.freeze, util = _dereq_("./util"), inherits = util.inherits, notEnumerableProp = util.notEnumerableProp, _TypeError, _RangeError, Warning = subError("Warning", "warning"), CancellationError = subError("CancellationError", "cancellation error"), TimeoutError = subError("TimeoutError", "timeout error"), AggregateError = subError("AggregateError", "aggregate error");
                        try {
                            _TypeError = TypeError, _RangeError = RangeError;
                        } catch (e) {
                            _TypeError = subError("TypeError", "type error"), _RangeError = subError("RangeError", "range error");
                        }
                        for (var methods = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), i = 0; i < methods.length; ++i) "function" == typeof Array.prototype[methods[i]] && (AggregateError.prototype[methods[i]] = Array.prototype[methods[i]]);
                        es5.defineProperty(AggregateError.prototype, "length", {
                            value: 0,
                            configurable: !1,
                            writable: !0,
                            enumerable: !0
                        }), AggregateError.prototype.isOperational = !0;
                        var level = 0;
                        AggregateError.prototype.toString = function() {
                            var indent = Array(4 * level + 1).join(" "), ret = "\n" + indent + "AggregateError of:\n";
                            level++, indent = Array(4 * level + 1).join(" ");
                            for (var i = 0; i < this.length; ++i) {
                                for (var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "", lines = str.split("\n"), j = 0; j < lines.length; ++j) lines[j] = indent + lines[j];
                                str = lines.join("\n"), ret += str + "\n";
                            }
                            return level--, ret;
                        }, inherits(OperationalError, Error);
                        var errorTypes = Error.__BluebirdErrorTypes__;
                        errorTypes || (errorTypes = Objectfreeze({
                            CancellationError: CancellationError,
                            TimeoutError: TimeoutError,
                            OperationalError: OperationalError,
                            RejectionError: OperationalError,
                            AggregateError: AggregateError
                        }), es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: errorTypes,
                            writable: !1,
                            enumerable: !1,
                            configurable: !1
                        })), module.exports = {
                            Error: Error,
                            TypeError: _TypeError,
                            RangeError: _RangeError,
                            CancellationError: errorTypes.CancellationError,
                            OperationalError: errorTypes.OperationalError,
                            TimeoutError: errorTypes.TimeoutError,
                            AggregateError: errorTypes.AggregateError,
                            Warning: Warning
                        };
                    }, {
                        "./es5": 13,
                        "./util": 36
                    } ],
                    13: [ function(_dereq_, module, exports) {
                        var isES5 = function() {
                            "use strict";
                            return void 0 === this;
                        }();
                        if (isES5) module.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: isES5,
                            propertyIsWritable: function(obj, prop) {
                                var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                return !(descriptor && !descriptor.writable && !descriptor.set);
                            }
                        }; else {
                            var has = {}.hasOwnProperty, str = {}.toString, proto = {}.constructor.prototype, ObjectKeys = function(o) {
                                var ret = [];
                                for (var key in o) has.call(o, key) && ret.push(key);
                                return ret;
                            }, ObjectGetDescriptor = function(o, key) {
                                return {
                                    value: o[key]
                                };
                            }, ObjectDefineProperty = function(o, key, desc) {
                                return o[key] = desc.value, o;
                            }, ObjectFreeze = function(obj) {
                                return obj;
                            }, ObjectGetPrototypeOf = function(obj) {
                                try {
                                    return Object(obj).constructor.prototype;
                                } catch (e) {
                                    return proto;
                                }
                            }, ArrayIsArray = function(obj) {
                                try {
                                    return "[object Array]" === str.call(obj);
                                } catch (e) {
                                    return !1;
                                }
                            };
                            module.exports = {
                                isArray: ArrayIsArray,
                                keys: ObjectKeys,
                                names: ObjectKeys,
                                defineProperty: ObjectDefineProperty,
                                getDescriptor: ObjectGetDescriptor,
                                freeze: ObjectFreeze,
                                getPrototypeOf: ObjectGetPrototypeOf,
                                isES5: isES5,
                                propertyIsWritable: function() {
                                    return !0;
                                }
                            };
                        }
                    }, {} ],
                    14: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL) {
                            var PromiseMap = Promise.map;
                            Promise.prototype.filter = function(fn, options) {
                                return PromiseMap(this, fn, options, INTERNAL);
                            }, Promise.filter = function(promises, fn, options) {
                                return PromiseMap(promises, fn, options, INTERNAL);
                            };
                        };
                    }, {} ],
                    15: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, tryConvertToPromise) {
                            function PassThroughHandlerContext(promise, type, handler) {
                                this.promise = promise, this.type = type, this.handler = handler, this.called = !1, 
                                this.cancelPromise = null;
                            }
                            function FinallyHandlerCancelReaction(finallyHandler) {
                                this.finallyHandler = finallyHandler;
                            }
                            function checkCancel(ctx, reason) {
                                return null != ctx.cancelPromise && (arguments.length > 1 ? ctx.cancelPromise._reject(reason) : ctx.cancelPromise._cancel(), 
                                ctx.cancelPromise = null, !0);
                            }
                            function succeed() {
                                return finallyHandler.call(this, this.promise._target()._settledValue());
                            }
                            function fail(reason) {
                                if (!checkCancel(this, reason)) return errorObj.e = reason, errorObj;
                            }
                            function finallyHandler(reasonOrValue) {
                                var promise = this.promise, handler = this.handler;
                                if (!this.called) {
                                    this.called = !0;
                                    var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                                    if (void 0 !== ret) {
                                        promise._setReturnedNonUndefined();
                                        var maybePromise = tryConvertToPromise(ret, promise);
                                        if (maybePromise instanceof Promise) {
                                            if (null != this.cancelPromise) {
                                                if (maybePromise._isCancelled()) {
                                                    var reason = new CancellationError("late cancellation observer");
                                                    return promise._attachExtraTrace(reason), errorObj.e = reason, errorObj;
                                                }
                                                maybePromise.isPending() && maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                            }
                                            return maybePromise._then(succeed, fail, void 0, this, void 0);
                                        }
                                    }
                                }
                                return promise.isRejected() ? (checkCancel(this), errorObj.e = reasonOrValue, errorObj) : (checkCancel(this), 
                                reasonOrValue);
                            }
                            var util = _dereq_("./util"), CancellationError = Promise.CancellationError, errorObj = util.errorObj;
                            return PassThroughHandlerContext.prototype.isFinallyHandler = function() {
                                return 0 === this.type;
                            }, FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
                                checkCancel(this.finallyHandler);
                            }, Promise.prototype._passThrough = function(handler, type, success, fail) {
                                return "function" != typeof handler ? this.then() : this._then(success, fail, void 0, new PassThroughHandlerContext(this, type, handler), void 0);
                            }, Promise.prototype.lastly = Promise.prototype.finally = function(handler) {
                                return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                            }, Promise.prototype.tap = function(handler) {
                                return this._passThrough(handler, 1, finallyHandler);
                            }, PassThroughHandlerContext;
                        };
                    }, {
                        "./util": 36
                    } ],
                    16: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                            function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                                for (var i = 0; i < yieldHandlers.length; ++i) {
                                    traceParent._pushContext();
                                    var result = tryCatch(yieldHandlers[i])(value);
                                    if (traceParent._popContext(), result === errorObj) {
                                        traceParent._pushContext();
                                        var ret = Promise.reject(errorObj.e);
                                        return traceParent._popContext(), ret;
                                    }
                                    var maybePromise = tryConvertToPromise(result, traceParent);
                                    if (maybePromise instanceof Promise) return maybePromise;
                                }
                                return null;
                            }
                            function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                                if (debug.cancellation()) {
                                    var internal = new Promise(INTERNAL), _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                    this._promise = internal.lastly(function() {
                                        return _finallyPromise;
                                    }), internal._captureStackTrace(), internal._setOnCancel(this);
                                } else {
                                    var promise = this._promise = new Promise(INTERNAL);
                                    promise._captureStackTrace();
                                }
                                this._stack = stack, this._generatorFunction = generatorFunction, this._receiver = receiver, 
                                this._generator = void 0, this._yieldHandlers = "function" == typeof yieldHandler ? [ yieldHandler ].concat(yieldHandlers) : yieldHandlers, 
                                this._yieldedPromise = null, this._cancellationPhase = !1;
                            }
                            var errors = _dereq_("./errors"), TypeError = errors.TypeError, util = _dereq_("./util"), errorObj = util.errorObj, tryCatch = util.tryCatch, yieldHandlers = [];
                            util.inherits(PromiseSpawn, Proxyable), PromiseSpawn.prototype._isResolved = function() {
                                return null === this._promise;
                            }, PromiseSpawn.prototype._cleanup = function() {
                                this._promise = this._generator = null, debug.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), 
                                this._finallyPromise = null);
                            }, PromiseSpawn.prototype._promiseCancelled = function() {
                                if (!this._isResolved()) {
                                    var implementsReturn = "undefined" != typeof this._generator.return, result;
                                    if (implementsReturn) this._promise._pushContext(), result = tryCatch(this._generator.return).call(this._generator, void 0), 
                                    this._promise._popContext(); else {
                                        var reason = new Promise.CancellationError("generator .return() sentinel");
                                        Promise.coroutine.returnSentinel = reason, this._promise._attachExtraTrace(reason), 
                                        this._promise._pushContext(), result = tryCatch(this._generator.throw).call(this._generator, reason), 
                                        this._promise._popContext();
                                    }
                                    this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(result);
                                }
                            }, PromiseSpawn.prototype._promiseFulfilled = function(value) {
                                this._yieldedPromise = null, this._promise._pushContext();
                                var result = tryCatch(this._generator.next).call(this._generator, value);
                                this._promise._popContext(), this._continue(result);
                            }, PromiseSpawn.prototype._promiseRejected = function(reason) {
                                this._yieldedPromise = null, this._promise._attachExtraTrace(reason), this._promise._pushContext();
                                var result = tryCatch(this._generator.throw).call(this._generator, reason);
                                this._promise._popContext(), this._continue(result);
                            }, PromiseSpawn.prototype._resultCancelled = function() {
                                if (this._yieldedPromise instanceof Promise) {
                                    var promise = this._yieldedPromise;
                                    this._yieldedPromise = null, promise.cancel();
                                }
                            }, PromiseSpawn.prototype.promise = function() {
                                return this._promise;
                            }, PromiseSpawn.prototype._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, 
                                this._promiseFulfilled(void 0);
                            }, PromiseSpawn.prototype._continue = function(result) {
                                var promise = this._promise;
                                if (result === errorObj) return this._cleanup(), this._cancellationPhase ? promise.cancel() : promise._rejectCallback(result.e, !1);
                                var value = result.value;
                                if (result.done === !0) return this._cleanup(), this._cancellationPhase ? promise.cancel() : promise._resolveCallback(value);
                                var maybePromise = tryConvertToPromise(value, this._promise);
                                if (!(maybePromise instanceof Promise) && (maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise), 
                                null === maybePromise)) return void this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", value) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                maybePromise = maybePromise._target();
                                var bitField = maybePromise._bitField;
                                0 === (50397184 & bitField) ? (this._yieldedPromise = maybePromise, maybePromise._proxy(this, null)) : 0 !== (33554432 & bitField) ? Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value()) : 0 !== (16777216 & bitField) ? Promise._async.invoke(this._promiseRejected, this, maybePromise._reason()) : this._promiseCancelled();
                            }, Promise.coroutine = function(generatorFunction, options) {
                                if ("function" != typeof generatorFunction) throw new TypeError("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var yieldHandler = Object(options).yieldHandler, PromiseSpawn$ = PromiseSpawn, stack = new Error().stack;
                                return function() {
                                    var generator = generatorFunction.apply(this, arguments), spawn = new PromiseSpawn$(void 0, void 0, yieldHandler, stack), ret = spawn.promise();
                                    return spawn._generator = generator, spawn._promiseFulfilled(void 0), ret;
                                };
                            }, Promise.coroutine.addYieldHandler = function(fn) {
                                if ("function" != typeof fn) throw new TypeError("expecting a function but got " + util.classString(fn));
                                yieldHandlers.push(fn);
                            }, Promise.spawn = function(generatorFunction) {
                                if (debug.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof generatorFunction) return apiRejection("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var spawn = new PromiseSpawn(generatorFunction, this), ret = spawn.promise();
                                return spawn._run(Promise.spawn), ret;
                            };
                        };
                    }, {
                        "./errors": 12,
                        "./util": 36
                    } ],
                    17: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
                            var util = _dereq_("./util"), canEvaluate = util.canEvaluate, tryCatch = util.tryCatch, errorObj = util.errorObj, reject;
                            if (!1) {
                                for (var thenCallback = function(i) {
                                    return new Function("value", "holder", "                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g, i));
                                }, promiseSetter = function(i) {
                                    return new Function("promise", "holder", "                           \n            'use strict';                                                    \n            holder.pIndex = promise;                                         \n            ".replace(/Index/g, i));
                                }, generateHolderClass = function(total) {
                                    for (var props = new Array(total), i = 0; i < props.length; ++i) props[i] = "this.p" + (i + 1);
                                    var assignment = props.join(" = ") + " = null;", cancellationCode = "var promise;\n" + props.map(function(prop) {
                                        return "                                                         \n                promise = " + prop + ";                                      \n                if (promise instanceof Promise) {                            \n                    promise.cancel();                                        \n                }                                                            \n            ";
                                    }).join("\n"), passedArguments = props.join(", "), name = "Holder$" + total, code = "return function(tryCatch, errorObj, Promise, async) {    \n            'use strict';                                                    \n            function [TheName](fn) {                                         \n                [TheProperties]                                              \n                this.fn = fn;                                                \n                this.asyncNeeded = true;                                     \n                this.now = 0;                                                \n            }                                                                \n                                                                             \n            [TheName].prototype._callFunction = function(promise) {          \n                promise._pushContext();                                      \n                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n                promise._popContext();                                       \n                if (ret === errorObj) {                                      \n                    promise._rejectCallback(ret.e, false);                   \n                } else {                                                     \n                    promise._resolveCallback(ret);                           \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype.checkFulfillment = function(promise) {       \n                var now = ++this.now;                                        \n                if (now === [TheTotal]) {                                    \n                    if (this.asyncNeeded) {                                  \n                        async.invoke(this._callFunction, this, promise);     \n                    } else {                                                 \n                        this._callFunction(promise);                         \n                    }                                                        \n                                                                             \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype._resultCancelled = function() {              \n                [CancellationCode]                                           \n            };                                                               \n                                                                             \n            return [TheName];                                                \n        }(tryCatch, errorObj, Promise, async);                               \n        ";
                                    return code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode), 
                                    new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                }, holderClasses = [], thenCallbacks = [], promiseSetters = [], i = 0; i < 8; ++i) holderClasses.push(generateHolderClass(i + 1)), 
                                thenCallbacks.push(thenCallback(i + 1)), promiseSetters.push(promiseSetter(i + 1));
                                reject = function(reason) {
                                    this._reject(reason);
                                };
                            }
                            Promise.join = function() {
                                var last = arguments.length - 1, fn;
                                if (last > 0 && "function" == typeof arguments[last] && (fn = arguments[last], !1)) {
                                    var ret = new Promise(INTERNAL);
                                    ret._captureStackTrace();
                                    for (var HolderClass = holderClasses[last - 1], holder = new HolderClass(fn), callbacks = thenCallbacks, i = 0; i < last; ++i) {
                                        var maybePromise = tryConvertToPromise(arguments[i], ret);
                                        if (maybePromise instanceof Promise) {
                                            maybePromise = maybePromise._target();
                                            var bitField = maybePromise._bitField;
                                            0 === (50397184 & bitField) ? (maybePromise._then(callbacks[i], reject, void 0, ret, holder), 
                                            promiseSetters[i](maybePromise, holder), holder.asyncNeeded = !1) : 0 !== (33554432 & bitField) ? callbacks[i].call(ret, maybePromise._value(), holder) : 0 !== (16777216 & bitField) ? ret._reject(maybePromise._reason()) : ret._cancel();
                                        } else callbacks[i].call(ret, maybePromise, holder);
                                    }
                                    if (!ret._isFateSealed()) {
                                        if (holder.asyncNeeded) {
                                            var domain = getDomain();
                                            null !== domain && (holder.fn = util.domainBind(domain, holder.fn));
                                        }
                                        ret._setAsyncGuaranteed(), ret._setOnCancel(holder);
                                    }
                                    return ret;
                                }
                                var args = [].slice.call(arguments);
                                fn && args.pop();
                                var ret = new PromiseArray(args).promise();
                                return void 0 !== fn ? ret.spread(fn) : ret;
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    18: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                            function MappingPromiseArray(promises, fn, limit, _filter) {
                                this.constructor$(promises), this._promise._captureStackTrace();
                                var domain = getDomain();
                                this._callback = null === domain ? fn : util.domainBind(domain, fn), this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null, 
                                this._limit = limit, this._inFlight = 0, this._queue = [], async.invoke(this._asyncInit, this, void 0);
                            }
                            function map(promises, fn, options, _filter) {
                                if ("function" != typeof fn) return apiRejection("expecting a function but got " + util.classString(fn));
                                var limit = 0;
                                if (void 0 !== options) {
                                    if ("object" != typeof options || null === options) return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                                    if ("number" != typeof options.concurrency) return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                                    limit = options.concurrency;
                                }
                                return limit = "number" == typeof limit && isFinite(limit) && limit >= 1 ? limit : 0, 
                                new MappingPromiseArray(promises, fn, limit, _filter).promise();
                            }
                            var getDomain = Promise._getDomain, util = _dereq_("./util"), tryCatch = util.tryCatch, errorObj = util.errorObj, async = Promise._async;
                            util.inherits(MappingPromiseArray, PromiseArray), MappingPromiseArray.prototype._asyncInit = function() {
                                this._init$(void 0, -2);
                            }, MappingPromiseArray.prototype._init = function() {}, MappingPromiseArray.prototype._promiseFulfilled = function(value, index) {
                                var values = this._values, length = this.length(), preservedValues = this._preservedValues, limit = this._limit;
                                if (index < 0) {
                                    if (index = index * -1 - 1, values[index] = value, limit >= 1 && (this._inFlight--, 
                                    this._drainQueue(), this._isResolved())) return !0;
                                } else {
                                    if (limit >= 1 && this._inFlight >= limit) return values[index] = value, this._queue.push(index), 
                                    !1;
                                    null !== preservedValues && (preservedValues[index] = value);
                                    var promise = this._promise, callback = this._callback, receiver = promise._boundValue();
                                    promise._pushContext();
                                    var ret = tryCatch(callback).call(receiver, value, index, length), promiseCreated = promise._popContext();
                                    if (debug.checkForgottenReturns(ret, promiseCreated, null !== preservedValues ? "Promise.filter" : "Promise.map", promise), 
                                    ret === errorObj) return this._reject(ret.e), !0;
                                    var maybePromise = tryConvertToPromise(ret, this._promise);
                                    if (maybePromise instanceof Promise) {
                                        maybePromise = maybePromise._target();
                                        var bitField = maybePromise._bitField;
                                        if (0 === (50397184 & bitField)) return limit >= 1 && this._inFlight++, values[index] = maybePromise, 
                                        maybePromise._proxy(this, (index + 1) * -1), !1;
                                        if (0 === (33554432 & bitField)) return 0 !== (16777216 & bitField) ? (this._reject(maybePromise._reason()), 
                                        !0) : (this._cancel(), !0);
                                        ret = maybePromise._value();
                                    }
                                    values[index] = ret;
                                }
                                var totalResolved = ++this._totalResolved;
                                return totalResolved >= length && (null !== preservedValues ? this._filter(values, preservedValues) : this._resolve(values), 
                                !0);
                            }, MappingPromiseArray.prototype._drainQueue = function() {
                                for (var queue = this._queue, limit = this._limit, values = this._values; queue.length > 0 && this._inFlight < limit; ) {
                                    if (this._isResolved()) return;
                                    var index = queue.pop();
                                    this._promiseFulfilled(values[index], index);
                                }
                            }, MappingPromiseArray.prototype._filter = function(booleans, values) {
                                for (var len = values.length, ret = new Array(len), j = 0, i = 0; i < len; ++i) booleans[i] && (ret[j++] = values[i]);
                                ret.length = j, this._resolve(ret);
                            }, MappingPromiseArray.prototype.preservedValues = function() {
                                return this._preservedValues;
                            }, Promise.prototype.map = function(fn, options) {
                                return map(this, fn, options, null);
                            }, Promise.map = function(promises, fn, options, _filter) {
                                return map(promises, fn, options, _filter);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    19: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                            var util = _dereq_("./util"), tryCatch = util.tryCatch;
                            Promise.method = function(fn) {
                                if ("function" != typeof fn) throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                                return function() {
                                    var ret = new Promise(INTERNAL);
                                    ret._captureStackTrace(), ret._pushContext();
                                    var value = tryCatch(fn).apply(this, arguments), promiseCreated = ret._popContext();
                                    return debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret), 
                                    ret._resolveFromSyncValue(value), ret;
                                };
                            }, Promise.attempt = Promise.try = function(fn) {
                                if ("function" != typeof fn) return apiRejection("expecting a function but got " + util.classString(fn));
                                var ret = new Promise(INTERNAL);
                                ret._captureStackTrace(), ret._pushContext();
                                var value;
                                if (arguments.length > 1) {
                                    debug.deprecated("calling Promise.try with more than 1 argument");
                                    var arg = arguments[1], ctx = arguments[2];
                                    value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
                                } else value = tryCatch(fn)();
                                var promiseCreated = ret._popContext();
                                return debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret), ret._resolveFromSyncValue(value), 
                                ret;
                            }, Promise.prototype._resolveFromSyncValue = function(value) {
                                value === util.errorObj ? this._rejectCallback(value.e, !1) : this._resolveCallback(value, !0);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    20: [ function(_dereq_, module, exports) {
                        "use strict";
                        function isUntypedError(obj) {
                            return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
                        }
                        function wrapAsOperationalError(obj) {
                            var ret;
                            if (isUntypedError(obj)) {
                                ret = new OperationalError(obj), ret.name = obj.name, ret.message = obj.message, 
                                ret.stack = obj.stack;
                                for (var keys = es5.keys(obj), i = 0; i < keys.length; ++i) {
                                    var key = keys[i];
                                    rErrorKey.test(key) || (ret[key] = obj[key]);
                                }
                                return ret;
                            }
                            return util.markAsOriginatingFromRejection(obj), obj;
                        }
                        function nodebackForPromise(promise, multiArgs) {
                            return function(err, value) {
                                if (null !== promise) {
                                    if (err) {
                                        var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                        promise._attachExtraTrace(wrapped), promise._reject(wrapped);
                                    } else if (multiArgs) {
                                        var args = [].slice.call(arguments, 1);
                                        promise._fulfill(args);
                                    } else promise._fulfill(value);
                                    promise = null;
                                }
                            };
                        }
                        var util = _dereq_("./util"), maybeWrapAsError = util.maybeWrapAsError, errors = _dereq_("./errors"), OperationalError = errors.OperationalError, es5 = _dereq_("./es5"), rErrorKey = /^(?:name|message|stack|cause)$/;
                        module.exports = nodebackForPromise;
                    }, {
                        "./errors": 12,
                        "./es5": 13,
                        "./util": 36
                    } ],
                    21: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise) {
                            function spreadAdapter(val, nodeback) {
                                var promise = this;
                                if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
                                var ret = tryCatch(nodeback).apply(promise._boundValue(), [ null ].concat(val));
                                ret === errorObj && async.throwLater(ret.e);
                            }
                            function successAdapter(val, nodeback) {
                                var promise = this, receiver = promise._boundValue(), ret = void 0 === val ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
                                ret === errorObj && async.throwLater(ret.e);
                            }
                            function errorAdapter(reason, nodeback) {
                                var promise = this;
                                if (!reason) {
                                    var newReason = new Error(reason + "");
                                    newReason.cause = reason, reason = newReason;
                                }
                                var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                                ret === errorObj && async.throwLater(ret.e);
                            }
                            var util = _dereq_("./util"), async = Promise._async, tryCatch = util.tryCatch, errorObj = util.errorObj;
                            Promise.prototype.asCallback = Promise.prototype.nodeify = function(nodeback, options) {
                                if ("function" == typeof nodeback) {
                                    var adapter = successAdapter;
                                    void 0 !== options && Object(options).spread && (adapter = spreadAdapter), this._then(adapter, errorAdapter, void 0, this, nodeback);
                                }
                                return this;
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    22: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function() {
                            function Proxyable() {}
                            function check(self, executor) {
                                if ("function" != typeof executor) throw new TypeError("expecting a function but got " + util.classString(executor));
                                if (self.constructor !== Promise) throw new TypeError("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                            }
                            function Promise(executor) {
                                this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
                                this._promise0 = void 0, this._receiver0 = void 0, executor !== INTERNAL && (check(this, executor), 
                                this._resolveFromExecutor(executor)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
                            }
                            function deferResolve(v) {
                                this.promise._resolveCallback(v);
                            }
                            function deferReject(v) {
                                this.promise._rejectCallback(v, !1);
                            }
                            function fillTypes(value) {
                                var p = new Promise(INTERNAL);
                                p._fulfillmentHandler0 = value, p._rejectionHandler0 = value, p._promise0 = value, 
                                p._receiver0 = value;
                            }
                            var makeSelfResolutionError = function() {
                                return new TypeError("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
                            }, reflectHandler = function() {
                                return new Promise.PromiseInspection(this._target());
                            }, apiRejection = function(msg) {
                                return Promise.reject(new TypeError(msg));
                            }, UNDEFINED_BINDING = {}, util = _dereq_("./util"), getDomain;
                            getDomain = util.isNode ? function() {
                                var ret = process.domain;
                                return void 0 === ret && (ret = null), ret;
                            } : function() {
                                return null;
                            }, util.notEnumerableProp(Promise, "_getDomain", getDomain);
                            var es5 = _dereq_("./es5"), Async = _dereq_("./async"), async = new Async();
                            es5.defineProperty(Promise, "_async", {
                                value: async
                            });
                            var errors = _dereq_("./errors"), TypeError = Promise.TypeError = errors.TypeError;
                            Promise.RangeError = errors.RangeError;
                            var CancellationError = Promise.CancellationError = errors.CancellationError;
                            Promise.TimeoutError = errors.TimeoutError, Promise.OperationalError = errors.OperationalError, 
                            Promise.RejectionError = errors.OperationalError, Promise.AggregateError = errors.AggregateError;
                            var INTERNAL = function() {}, APPLY = {}, NEXT_FILTER = {}, tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL), PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable), Context = _dereq_("./context")(Promise), createContext = Context.create, debug = _dereq_("./debuggability")(Promise, Context), CapturedTrace = debug.CapturedTrace, PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise), catchFilter = _dereq_("./catch_filter")(NEXT_FILTER), nodebackForPromise = _dereq_("./nodeback"), errorObj = util.errorObj, tryCatch = util.tryCatch;
                            // Complete slack tracking, opt out of field-type tracking and           
                            // stabilize map                                                         
                            return Promise.prototype.toString = function() {
                                return "[object Promise]";
                            }, Promise.prototype.caught = Promise.prototype.catch = function(fn) {
                                var len = arguments.length;
                                if (len > 1) {
                                    var catchInstances = new Array(len - 1), j = 0, i;
                                    for (i = 0; i < len - 1; ++i) {
                                        var item = arguments[i];
                                        if (!util.isObject(item)) return apiRejection("expecting an object but got A catch statement predicate " + util.classString(item));
                                        catchInstances[j++] = item;
                                    }
                                    return catchInstances.length = j, fn = arguments[i], this.then(void 0, catchFilter(catchInstances, fn, this));
                                }
                                return this.then(void 0, fn);
                            }, Promise.prototype.reflect = function() {
                                return this._then(reflectHandler, reflectHandler, void 0, this, void 0);
                            }, Promise.prototype.then = function(didFulfill, didReject) {
                                if (debug.warnings() && arguments.length > 0 && "function" != typeof didFulfill && "function" != typeof didReject) {
                                    var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                                    arguments.length > 1 && (msg += ", " + util.classString(didReject)), this._warn(msg);
                                }
                                return this._then(didFulfill, didReject, void 0, void 0, void 0);
                            }, Promise.prototype.done = function(didFulfill, didReject) {
                                var promise = this._then(didFulfill, didReject, void 0, void 0, void 0);
                                promise._setIsFinal();
                            }, Promise.prototype.spread = function(fn) {
                                return "function" != typeof fn ? apiRejection("expecting a function but got " + util.classString(fn)) : this.all()._then(fn, void 0, void 0, APPLY, void 0);
                            }, Promise.prototype.toJSON = function() {
                                var ret = {
                                    isFulfilled: !1,
                                    isRejected: !1,
                                    fulfillmentValue: void 0,
                                    rejectionReason: void 0
                                };
                                return this.isFulfilled() ? (ret.fulfillmentValue = this.value(), ret.isFulfilled = !0) : this.isRejected() && (ret.rejectionReason = this.reason(), 
                                ret.isRejected = !0), ret;
                            }, Promise.prototype.all = function() {
                                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), 
                                new PromiseArray(this).promise();
                            }, Promise.prototype.error = function(fn) {
                                return this.caught(util.originatesFromRejection, fn);
                            }, Promise.getNewLibraryCopy = module.exports, Promise.is = function(val) {
                                return val instanceof Promise;
                            }, Promise.fromNode = Promise.fromCallback = function(fn) {
                                var ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                var multiArgs = arguments.length > 1 && !!Object(arguments[1]).multiArgs, result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                                return result === errorObj && ret._rejectCallback(result.e, !0), ret._isFateSealed() || ret._setAsyncGuaranteed(), 
                                ret;
                            }, Promise.all = function(promises) {
                                return new PromiseArray(promises).promise();
                            }, Promise.cast = function(obj) {
                                var ret = tryConvertToPromise(obj);
                                return ret instanceof Promise || (ret = new Promise(INTERNAL), ret._captureStackTrace(), 
                                ret._setFulfilled(), ret._rejectionHandler0 = obj), ret;
                            }, Promise.resolve = Promise.fulfilled = Promise.cast, Promise.reject = Promise.rejected = function(reason) {
                                var ret = new Promise(INTERNAL);
                                return ret._captureStackTrace(), ret._rejectCallback(reason, !0), ret;
                            }, Promise.setScheduler = function(fn) {
                                if ("function" != typeof fn) throw new TypeError("expecting a function but got " + util.classString(fn));
                                return async.setScheduler(fn);
                            }, Promise.prototype._then = function(didFulfill, didReject, _, receiver, internalData) {
                                var haveInternalData = void 0 !== internalData, promise = haveInternalData ? internalData : new Promise(INTERNAL), target = this._target(), bitField = target._bitField;
                                haveInternalData || (promise._propagateFrom(this, 3), promise._captureStackTrace(), 
                                void 0 === receiver && 0 !== (2097152 & this._bitField) && (receiver = 0 !== (50397184 & bitField) ? this._boundValue() : target === this ? void 0 : this._boundTo), 
                                this._fireEvent("promiseChained", this, promise));
                                var domain = getDomain();
                                if (0 !== (50397184 & bitField)) {
                                    var handler, value, settler = target._settlePromiseCtx;
                                    0 !== (33554432 & bitField) ? (value = target._rejectionHandler0, handler = didFulfill) : 0 !== (16777216 & bitField) ? (value = target._fulfillmentHandler0, 
                                    handler = didReject, target._unsetRejectionIsUnhandled()) : (settler = target._settlePromiseLateCancellationObserver, 
                                    value = new CancellationError("late cancellation observer"), target._attachExtraTrace(value), 
                                    handler = didReject), async.invoke(settler, target, {
                                        handler: null === domain ? handler : "function" == typeof handler && util.domainBind(domain, handler),
                                        promise: promise,
                                        receiver: receiver,
                                        value: value
                                    });
                                } else target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
                                return promise;
                            }, Promise.prototype._length = function() {
                                return 65535 & this._bitField;
                            }, Promise.prototype._isFateSealed = function() {
                                return 0 !== (117506048 & this._bitField);
                            }, Promise.prototype._isFollowing = function() {
                                return 67108864 === (67108864 & this._bitField);
                            }, Promise.prototype._setLength = function(len) {
                                this._bitField = this._bitField & -65536 | 65535 & len;
                            }, Promise.prototype._setFulfilled = function() {
                                this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
                            }, Promise.prototype._setRejected = function() {
                                this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
                            }, Promise.prototype._setFollowing = function() {
                                this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
                            }, Promise.prototype._setIsFinal = function() {
                                this._bitField = 4194304 | this._bitField;
                            }, Promise.prototype._isFinal = function() {
                                return (4194304 & this._bitField) > 0;
                            }, Promise.prototype._unsetCancelled = function() {
                                this._bitField = this._bitField & -65537;
                            }, Promise.prototype._setCancelled = function() {
                                this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
                            }, Promise.prototype._setWillBeCancelled = function() {
                                this._bitField = 8388608 | this._bitField;
                            }, Promise.prototype._setAsyncGuaranteed = function() {
                                async.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
                            }, Promise.prototype._receiverAt = function(index) {
                                var ret = 0 === index ? this._receiver0 : this[4 * index - 4 + 3];
                                if (ret !== UNDEFINED_BINDING) return void 0 === ret && this._isBound() ? this._boundValue() : ret;
                            }, Promise.prototype._promiseAt = function(index) {
                                return this[4 * index - 4 + 2];
                            }, Promise.prototype._fulfillmentHandlerAt = function(index) {
                                return this[4 * index - 4 + 0];
                            }, Promise.prototype._rejectionHandlerAt = function(index) {
                                return this[4 * index - 4 + 1];
                            }, Promise.prototype._boundValue = function() {}, Promise.prototype._migrateCallback0 = function(follower) {
                                var bitField = follower._bitField, fulfill = follower._fulfillmentHandler0, reject = follower._rejectionHandler0, promise = follower._promise0, receiver = follower._receiverAt(0);
                                void 0 === receiver && (receiver = UNDEFINED_BINDING), this._addCallbacks(fulfill, reject, promise, receiver, null);
                            }, Promise.prototype._migrateCallbackAt = function(follower, index) {
                                var fulfill = follower._fulfillmentHandlerAt(index), reject = follower._rejectionHandlerAt(index), promise = follower._promiseAt(index), receiver = follower._receiverAt(index);
                                void 0 === receiver && (receiver = UNDEFINED_BINDING), this._addCallbacks(fulfill, reject, promise, receiver, null);
                            }, Promise.prototype._addCallbacks = function(fulfill, reject, promise, receiver, domain) {
                                var index = this._length();
                                if (index >= 65531 && (index = 0, this._setLength(0)), 0 === index) this._promise0 = promise, 
                                this._receiver0 = receiver, "function" == typeof fulfill && (this._fulfillmentHandler0 = null === domain ? fulfill : util.domainBind(domain, fulfill)), 
                                "function" == typeof reject && (this._rejectionHandler0 = null === domain ? reject : util.domainBind(domain, reject)); else {
                                    var base = 4 * index - 4;
                                    this[base + 2] = promise, this[base + 3] = receiver, "function" == typeof fulfill && (this[base + 0] = null === domain ? fulfill : util.domainBind(domain, fulfill)), 
                                    "function" == typeof reject && (this[base + 1] = null === domain ? reject : util.domainBind(domain, reject));
                                }
                                return this._setLength(index + 1), index;
                            }, Promise.prototype._proxy = function(proxyable, arg) {
                                this._addCallbacks(void 0, void 0, arg, proxyable, null);
                            }, Promise.prototype._resolveCallback = function(value, shouldBind) {
                                if (0 === (117506048 & this._bitField)) {
                                    if (value === this) return this._rejectCallback(makeSelfResolutionError(), !1);
                                    var maybePromise = tryConvertToPromise(value, this);
                                    if (!(maybePromise instanceof Promise)) return this._fulfill(value);
                                    shouldBind && this._propagateFrom(maybePromise, 2);
                                    var promise = maybePromise._target();
                                    if (promise === this) return void this._reject(makeSelfResolutionError());
                                    var bitField = promise._bitField;
                                    if (0 === (50397184 & bitField)) {
                                        var len = this._length();
                                        len > 0 && promise._migrateCallback0(this);
                                        for (var i = 1; i < len; ++i) promise._migrateCallbackAt(this, i);
                                        this._setFollowing(), this._setLength(0), this._setFollowee(promise);
                                    } else if (0 !== (33554432 & bitField)) this._fulfill(promise._value()); else if (0 !== (16777216 & bitField)) this._reject(promise._reason()); else {
                                        var reason = new CancellationError("late cancellation observer");
                                        promise._attachExtraTrace(reason), this._reject(reason);
                                    }
                                }
                            }, Promise.prototype._rejectCallback = function(reason, synchronous, ignoreNonErrorWarnings) {
                                var trace = util.ensureErrorObject(reason), hasStack = trace === reason;
                                if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                    var message = "a promise was rejected with a non-error: " + util.classString(reason);
                                    this._warn(message, !0);
                                }
                                this._attachExtraTrace(trace, !!synchronous && hasStack), this._reject(reason);
                            }, Promise.prototype._resolveFromExecutor = function(executor) {
                                var promise = this;
                                this._captureStackTrace(), this._pushContext();
                                var synchronous = !0, r = this._execute(executor, function(value) {
                                    promise._resolveCallback(value);
                                }, function(reason) {
                                    promise._rejectCallback(reason, synchronous);
                                });
                                synchronous = !1, this._popContext(), void 0 !== r && promise._rejectCallback(r, !0);
                            }, Promise.prototype._settlePromiseFromHandler = function(handler, receiver, value, promise) {
                                var bitField = promise._bitField;
                                if (0 === (65536 & bitField)) {
                                    promise._pushContext();
                                    var x;
                                    receiver === APPLY ? value && "number" == typeof value.length ? x = tryCatch(handler).apply(this._boundValue(), value) : (x = errorObj, 
                                    x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value))) : x = tryCatch(handler).call(receiver, value);
                                    var promiseCreated = promise._popContext();
                                    bitField = promise._bitField, 0 === (65536 & bitField) && (x === NEXT_FILTER ? promise._reject(value) : x === errorObj ? promise._rejectCallback(x.e, !1) : (debug.checkForgottenReturns(x, promiseCreated, "", promise, this), 
                                    promise._resolveCallback(x)));
                                }
                            }, Promise.prototype._target = function() {
                                for (var ret = this; ret._isFollowing(); ) ret = ret._followee();
                                return ret;
                            }, Promise.prototype._followee = function() {
                                return this._rejectionHandler0;
                            }, Promise.prototype._setFollowee = function(promise) {
                                this._rejectionHandler0 = promise;
                            }, Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
                                var isPromise = promise instanceof Promise, bitField = this._bitField, asyncGuaranteed = 0 !== (134217728 & bitField);
                                0 !== (65536 & bitField) ? (isPromise && promise._invokeInternalOnCancel(), receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler() ? (receiver.cancelPromise = promise, 
                                tryCatch(handler).call(receiver, value) === errorObj && promise._reject(errorObj.e)) : handler === reflectHandler ? promise._fulfill(reflectHandler.call(receiver)) : receiver instanceof Proxyable ? receiver._promiseCancelled(promise) : isPromise || promise instanceof PromiseArray ? promise._cancel() : receiver.cancel()) : "function" == typeof handler ? isPromise ? (asyncGuaranteed && promise._setAsyncGuaranteed(), 
                                this._settlePromiseFromHandler(handler, receiver, value, promise)) : handler.call(receiver, value, promise) : receiver instanceof Proxyable ? receiver._isResolved() || (0 !== (33554432 & bitField) ? receiver._promiseFulfilled(value, promise) : receiver._promiseRejected(value, promise)) : isPromise && (asyncGuaranteed && promise._setAsyncGuaranteed(), 
                                0 !== (33554432 & bitField) ? promise._fulfill(value) : promise._reject(value));
                            }, Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
                                var handler = ctx.handler, promise = ctx.promise, receiver = ctx.receiver, value = ctx.value;
                                "function" == typeof handler ? promise instanceof Promise ? this._settlePromiseFromHandler(handler, receiver, value, promise) : handler.call(receiver, value, promise) : promise instanceof Promise && promise._reject(value);
                            }, Promise.prototype._settlePromiseCtx = function(ctx) {
                                this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                            }, Promise.prototype._settlePromise0 = function(handler, value, bitField) {
                                var promise = this._promise0, receiver = this._receiverAt(0);
                                this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(promise, handler, receiver, value);
                            }, Promise.prototype._clearCallbackDataAtIndex = function(index) {
                                var base = 4 * index - 4;
                                this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = void 0;
                            }, Promise.prototype._fulfill = function(value) {
                                var bitField = this._bitField;
                                if (!((117506048 & bitField) >>> 16)) {
                                    if (value === this) {
                                        var err = makeSelfResolutionError();
                                        return this._attachExtraTrace(err), this._reject(err);
                                    }
                                    this._setFulfilled(), this._rejectionHandler0 = value, (65535 & bitField) > 0 && (0 !== (134217728 & bitField) ? this._settlePromises() : async.settlePromises(this));
                                }
                            }, Promise.prototype._reject = function(reason) {
                                var bitField = this._bitField;
                                if (!((117506048 & bitField) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = reason, 
                                this._isFinal() ? async.fatalError(reason, util.isNode) : void ((65535 & bitField) > 0 ? async.settlePromises(this) : this._ensurePossibleRejectionHandled());
                            }, Promise.prototype._fulfillPromises = function(len, value) {
                                for (var i = 1; i < len; i++) {
                                    var handler = this._fulfillmentHandlerAt(i), promise = this._promiseAt(i), receiver = this._receiverAt(i);
                                    this._clearCallbackDataAtIndex(i), this._settlePromise(promise, handler, receiver, value);
                                }
                            }, Promise.prototype._rejectPromises = function(len, reason) {
                                for (var i = 1; i < len; i++) {
                                    var handler = this._rejectionHandlerAt(i), promise = this._promiseAt(i), receiver = this._receiverAt(i);
                                    this._clearCallbackDataAtIndex(i), this._settlePromise(promise, handler, receiver, reason);
                                }
                            }, Promise.prototype._settlePromises = function() {
                                var bitField = this._bitField, len = 65535 & bitField;
                                if (len > 0) {
                                    if (0 !== (16842752 & bitField)) {
                                        var reason = this._fulfillmentHandler0;
                                        this._settlePromise0(this._rejectionHandler0, reason, bitField), this._rejectPromises(len, reason);
                                    } else {
                                        var value = this._rejectionHandler0;
                                        this._settlePromise0(this._fulfillmentHandler0, value, bitField), this._fulfillPromises(len, value);
                                    }
                                    this._setLength(0);
                                }
                                this._clearCancellationData();
                            }, Promise.prototype._settledValue = function() {
                                var bitField = this._bitField;
                                return 0 !== (33554432 & bitField) ? this._rejectionHandler0 : 0 !== (16777216 & bitField) ? this._fulfillmentHandler0 : void 0;
                            }, Promise.defer = Promise.pending = function() {
                                debug.deprecated("Promise.defer", "new Promise");
                                var promise = new Promise(INTERNAL);
                                return {
                                    promise: promise,
                                    resolve: deferResolve,
                                    reject: deferReject
                                };
                            }, util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError), 
                            _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug), 
                            _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug), _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug), 
                            _dereq_("./direct_resolve")(Promise), _dereq_("./synchronous_inspection")(Promise), 
                            _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain), 
                            Promise.Promise = Promise, Promise.version = "3.4.6", _dereq_("./map.js")(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug), 
                            _dereq_("./call_get.js")(Promise), _dereq_("./using.js")(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug), 
                            _dereq_("./timers.js")(Promise, INTERNAL, debug), _dereq_("./generators.js")(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug), 
                            _dereq_("./nodeify.js")(Promise), _dereq_("./promisify.js")(Promise, INTERNAL), 
                            _dereq_("./props.js")(Promise, PromiseArray, tryConvertToPromise, apiRejection), 
                            _dereq_("./race.js")(Promise, INTERNAL, tryConvertToPromise, apiRejection), _dereq_("./reduce.js")(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug), 
                            _dereq_("./settle.js")(Promise, PromiseArray, debug), _dereq_("./some.js")(Promise, PromiseArray, apiRejection), 
                            _dereq_("./filter.js")(Promise, INTERNAL), _dereq_("./each.js")(Promise, INTERNAL), 
                            _dereq_("./any.js")(Promise), util.toFastProperties(Promise), util.toFastProperties(Promise.prototype), 
                            fillTypes({
                                a: 1
                            }), fillTypes({
                                b: 2
                            }), fillTypes({
                                c: 3
                            }), fillTypes(1), fillTypes(function() {}), fillTypes(void 0), fillTypes(!1), fillTypes(new Promise(INTERNAL)), 
                            debug.setBounds(Async.firstLineError, util.lastLineError), Promise;
                        };
                    }, {
                        "./any.js": 1,
                        "./async": 2,
                        "./bind": 3,
                        "./call_get.js": 5,
                        "./cancel": 6,
                        "./catch_filter": 7,
                        "./context": 8,
                        "./debuggability": 9,
                        "./direct_resolve": 10,
                        "./each.js": 11,
                        "./errors": 12,
                        "./es5": 13,
                        "./filter.js": 14,
                        "./finally": 15,
                        "./generators.js": 16,
                        "./join": 17,
                        "./map.js": 18,
                        "./method": 19,
                        "./nodeback": 20,
                        "./nodeify.js": 21,
                        "./promise_array": 23,
                        "./promisify.js": 24,
                        "./props.js": 25,
                        "./race.js": 27,
                        "./reduce.js": 28,
                        "./settle.js": 30,
                        "./some.js": 31,
                        "./synchronous_inspection": 32,
                        "./thenables": 33,
                        "./timers.js": 34,
                        "./using.js": 35,
                        "./util": 36
                    } ],
                    23: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                            function toResolutionValue(val) {
                                switch (val) {
                                  case -2:
                                    return [];

                                  case -3:
                                    return {};
                                }
                            }
                            function PromiseArray(values) {
                                var promise = this._promise = new Promise(INTERNAL);
                                values instanceof Promise && promise._propagateFrom(values, 3), promise._setOnCancel(this), 
                                this._values = values, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
                            }
                            var util = _dereq_("./util"), isArray = util.isArray;
                            return util.inherits(PromiseArray, Proxyable), PromiseArray.prototype.length = function() {
                                return this._length;
                            }, PromiseArray.prototype.promise = function() {
                                return this._promise;
                            }, PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                                var values = tryConvertToPromise(this._values, this._promise);
                                if (values instanceof Promise) {
                                    values = values._target();
                                    var bitField = values._bitField;
                                    if (this._values = values, 0 === (50397184 & bitField)) return this._promise._setAsyncGuaranteed(), 
                                    values._then(init, this._reject, void 0, this, resolveValueIfEmpty);
                                    if (0 === (33554432 & bitField)) return 0 !== (16777216 & bitField) ? this._reject(values._reason()) : this._cancel();
                                    values = values._value();
                                }
                                if (values = util.asArray(values), null === values) {
                                    var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                    return void this._promise._rejectCallback(err, !1);
                                }
                                return 0 === values.length ? void (resolveValueIfEmpty === -5 ? this._resolveEmptyArray() : this._resolve(toResolutionValue(resolveValueIfEmpty))) : void this._iterate(values);
                            }, PromiseArray.prototype._iterate = function(values) {
                                var len = this.getActualLength(values.length);
                                this._length = len, this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                                for (var result = this._promise, isResolved = !1, bitField = null, i = 0; i < len; ++i) {
                                    var maybePromise = tryConvertToPromise(values[i], result);
                                    maybePromise instanceof Promise ? (maybePromise = maybePromise._target(), bitField = maybePromise._bitField) : bitField = null, 
                                    isResolved ? null !== bitField && maybePromise.suppressUnhandledRejections() : null !== bitField ? 0 === (50397184 & bitField) ? (maybePromise._proxy(this, i), 
                                    this._values[i] = maybePromise) : isResolved = 0 !== (33554432 & bitField) ? this._promiseFulfilled(maybePromise._value(), i) : 0 !== (16777216 & bitField) ? this._promiseRejected(maybePromise._reason(), i) : this._promiseCancelled(i) : isResolved = this._promiseFulfilled(maybePromise, i);
                                }
                                isResolved || result._setAsyncGuaranteed();
                            }, PromiseArray.prototype._isResolved = function() {
                                return null === this._values;
                            }, PromiseArray.prototype._resolve = function(value) {
                                this._values = null, this._promise._fulfill(value);
                            }, PromiseArray.prototype._cancel = function() {
                                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
                            }, PromiseArray.prototype._reject = function(reason) {
                                this._values = null, this._promise._rejectCallback(reason, !1);
                            }, PromiseArray.prototype._promiseFulfilled = function(value, index) {
                                this._values[index] = value;
                                var totalResolved = ++this._totalResolved;
                                return totalResolved >= this._length && (this._resolve(this._values), !0);
                            }, PromiseArray.prototype._promiseCancelled = function() {
                                return this._cancel(), !0;
                            }, PromiseArray.prototype._promiseRejected = function(reason) {
                                return this._totalResolved++, this._reject(reason), !0;
                            }, PromiseArray.prototype._resultCancelled = function() {
                                if (!this._isResolved()) {
                                    var values = this._values;
                                    if (this._cancel(), values instanceof Promise) values.cancel(); else for (var i = 0; i < values.length; ++i) values[i] instanceof Promise && values[i].cancel();
                                }
                            }, PromiseArray.prototype.shouldCopyValues = function() {
                                return !0;
                            }, PromiseArray.prototype.getActualLength = function(len) {
                                return len;
                            }, PromiseArray;
                        };
                    }, {
                        "./util": 36
                    } ],
                    24: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL) {
                            function propsFilter(key) {
                                return !noCopyPropsPattern.test(key);
                            }
                            function isPromisified(fn) {
                                try {
                                    return fn.__isPromisified__ === !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function hasPromisified(obj, key, suffix) {
                                var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                                return !!val && isPromisified(val);
                            }
                            function checkValid(ret, suffix, suffixRegexp) {
                                for (var i = 0; i < ret.length; i += 2) {
                                    var key = ret[i];
                                    if (suffixRegexp.test(key)) for (var keyWithoutAsyncSuffix = key.replace(suffixRegexp, ""), j = 0; j < ret.length; j += 2) if (ret[j] === keyWithoutAsyncSuffix) throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", suffix));
                                }
                            }
                            function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                                for (var keys = util.inheritedDataKeys(obj), ret = [], i = 0; i < keys.length; ++i) {
                                    var key = keys[i], value = obj[key], passesDefaultFilter = filter === defaultFilter || defaultFilter(key, value, obj);
                                    "function" != typeof value || isPromisified(value) || hasPromisified(obj, key, suffix) || !filter(key, value, obj, passesDefaultFilter) || ret.push(key, value);
                                }
                                return checkValid(ret, suffix, suffixRegexp), ret;
                            }
                            function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                                function promisified() {
                                    var _receiver = receiver;
                                    receiver === THIS && (_receiver = this);
                                    var promise = new Promise(INTERNAL);
                                    promise._captureStackTrace();
                                    var cb = "string" == typeof method && this !== defaultThis ? this[method] : callback, fn = nodebackForPromise(promise, multiArgs);
                                    try {
                                        cb.apply(_receiver, withAppended(arguments, fn));
                                    } catch (e) {
                                        promise._rejectCallback(maybeWrapAsError(e), !0, !0);
                                    }
                                    return promise._isFateSealed() || promise._setAsyncGuaranteed(), promise;
                                }
                                var defaultThis = function() {
                                    return this;
                                }(), method = callback;
                                return "string" == typeof method && (callback = fn), util.notEnumerableProp(promisified, "__isPromisified__", !0), 
                                promisified;
                            }
                            function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                                for (var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$"), methods = promisifiableMethods(obj, suffix, suffixRegexp, filter), i = 0, len = methods.length; i < len; i += 2) {
                                    var key = methods[i], fn = methods[i + 1], promisifiedKey = key + suffix;
                                    if (promisifier === makeNodePromisified) obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs); else {
                                        var promisified = promisifier(fn, function() {
                                            return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                        });
                                        util.notEnumerableProp(promisified, "__isPromisified__", !0), obj[promisifiedKey] = promisified;
                                    }
                                }
                                return util.toFastProperties(obj), obj;
                            }
                            function promisify(callback, receiver, multiArgs) {
                                return makeNodePromisified(callback, receiver, void 0, callback, null, multiArgs);
                            }
                            var THIS = {}, util = _dereq_("./util"), nodebackForPromise = _dereq_("./nodeback"), withAppended = util.withAppended, maybeWrapAsError = util.maybeWrapAsError, canEvaluate = util.canEvaluate, TypeError = _dereq_("./errors").TypeError, defaultSuffix = "Async", defaultPromisified = {
                                __isPromisified__: !0
                            }, noCopyProps = [ "arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__" ], noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$"), defaultFilter = function(name) {
                                return util.isIdentifier(name) && "_" !== name.charAt(0) && "constructor" !== name;
                            }, escapeIdentRegex = function(str) {
                                return str.replace(/([$])/, "\\$");
                            }, makeNodePromisifiedEval;
                            if (!1) {
                                var switchCaseArgumentOrder = function(likelyArgumentCount) {
                                    for (var ret = [ likelyArgumentCount ], min = Math.max(0, likelyArgumentCount - 1 - 3), i = likelyArgumentCount - 1; i >= min; --i) ret.push(i);
                                    for (var i = likelyArgumentCount + 1; i <= 3; ++i) ret.push(i);
                                    return ret;
                                }, argumentSequence = function(argumentCount) {
                                    return util.filledRange(argumentCount, "_arg", "");
                                }, parameterDeclaration = function(parameterCount) {
                                    return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                                }, parameterCount = function(fn) {
                                    return "number" == typeof fn.length ? Math.max(Math.min(fn.length, 1024), 0) : 0;
                                };
                                makeNodePromisifiedEval = function(callback, receiver, originalName, fn, _, multiArgs) {
                                    function generateCallForArgumentCount(count) {
                                        var args = argumentSequence(count).join(", "), comma = count > 0 ? ", " : "", ret;
                                        return ret = shouldProxyThis ? "ret = callback.call(this, {{args}}, nodeback); break;\n" : void 0 === receiver ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n", 
                                        ret.replace("{{args}}", args).replace(", ", comma);
                                    }
                                    function generateArgumentSwitchCase() {
                                        for (var ret = "", i = 0; i < argumentOrder.length; ++i) ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
                                        return ret += "                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = nodeback;                                              \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
                                    }
                                    var newParameterCount = Math.max(0, parameterCount(fn) - 1), argumentOrder = switchCaseArgumentOrder(newParameterCount), shouldProxyThis = "string" == typeof callback || receiver === THIS, getFunctionCode = "string" == typeof callback ? "this != null ? this['" + callback + "'] : fn" : "fn", body = "'use strict';                                                \n        var ret = function (Parameters) {                                    \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._captureStackTrace();                                    \n            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n            var ret;                                                         \n            var callback = tryCatch([GetFunctionCode]);                      \n            switch(len) {                                                    \n                [CodeForSwitchCase]                                          \n            }                                                                \n            if (ret === errorObj) {                                          \n                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n            }                                                                \n            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n            return promise;                                                  \n        };                                                                   \n        notEnumerableProp(ret, '__isPromisified__', true);                   \n        return ret;                                                          \n    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
                                    return body = body.replace("Parameters", parameterDeclaration(newParameterCount)), 
                                    new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                                };
                            }
                            var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;
                            Promise.promisify = function(fn, options) {
                                if ("function" != typeof fn) throw new TypeError("expecting a function but got " + util.classString(fn));
                                if (isPromisified(fn)) return fn;
                                options = Object(options);
                                var receiver = void 0 === options.context ? THIS : options.context, multiArgs = !!options.multiArgs, ret = promisify(fn, receiver, multiArgs);
                                return util.copyDescriptors(fn, ret, propsFilter), ret;
                            }, Promise.promisifyAll = function(target, options) {
                                if ("function" != typeof target && "object" != typeof target) throw new TypeError("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                                options = Object(options);
                                var multiArgs = !!options.multiArgs, suffix = options.suffix;
                                "string" != typeof suffix && (suffix = defaultSuffix);
                                var filter = options.filter;
                                "function" != typeof filter && (filter = defaultFilter);
                                var promisifier = options.promisifier;
                                if ("function" != typeof promisifier && (promisifier = makeNodePromisified), !util.isIdentifier(suffix)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                                for (var keys = util.inheritedDataKeys(target), i = 0; i < keys.length; ++i) {
                                    var value = target[keys[i]];
                                    "constructor" !== keys[i] && util.isClass(value) && (promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs), 
                                    promisifyAll(value, suffix, filter, promisifier, multiArgs));
                                }
                                return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                            };
                        };
                    }, {
                        "./errors": 12,
                        "./nodeback": 20,
                        "./util": 36
                    } ],
                    25: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                            function PropertiesPromiseArray(obj) {
                                var isMap = !1, entries;
                                if (void 0 !== Es6Map && obj instanceof Es6Map) entries = mapToEntries(obj), isMap = !0; else {
                                    var keys = es5.keys(obj), len = keys.length;
                                    entries = new Array(2 * len);
                                    for (var i = 0; i < len; ++i) {
                                        var key = keys[i];
                                        entries[i] = obj[key], entries[i + len] = key;
                                    }
                                }
                                this.constructor$(entries), this._isMap = isMap, this._init$(void 0, -3);
                            }
                            function props(promises) {
                                var ret, castValue = tryConvertToPromise(promises);
                                return isObject(castValue) ? (ret = castValue instanceof Promise ? castValue._then(Promise.props, void 0, void 0, void 0, void 0) : new PropertiesPromiseArray(castValue).promise(), 
                                castValue instanceof Promise && ret._propagateFrom(castValue, 2), ret) : apiRejection("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
                            }
                            var util = _dereq_("./util"), isObject = util.isObject, es5 = _dereq_("./es5"), Es6Map;
                            "function" == typeof Map && (Es6Map = Map);
                            var mapToEntries = function() {
                                function extractEntry(value, key) {
                                    this[index] = value, this[index + size] = key, index++;
                                }
                                var index = 0, size = 0;
                                return function mapToEntries(map) {
                                    size = map.size, index = 0;
                                    var ret = new Array(2 * map.size);
                                    return map.forEach(extractEntry, ret), ret;
                                };
                            }(), entriesToMap = function(entries) {
                                for (var ret = new Es6Map(), length = entries.length / 2 | 0, i = 0; i < length; ++i) {
                                    var key = entries[length + i], value = entries[i];
                                    ret.set(key, value);
                                }
                                return ret;
                            };
                            util.inherits(PropertiesPromiseArray, PromiseArray), PropertiesPromiseArray.prototype._init = function() {}, 
                            PropertiesPromiseArray.prototype._promiseFulfilled = function(value, index) {
                                this._values[index] = value;
                                var totalResolved = ++this._totalResolved;
                                if (totalResolved >= this._length) {
                                    var val;
                                    if (this._isMap) val = entriesToMap(this._values); else {
                                        val = {};
                                        for (var keyOffset = this.length(), i = 0, len = this.length(); i < len; ++i) val[this._values[i + keyOffset]] = this._values[i];
                                    }
                                    return this._resolve(val), !0;
                                }
                                return !1;
                            }, PropertiesPromiseArray.prototype.shouldCopyValues = function() {
                                return !1;
                            }, PropertiesPromiseArray.prototype.getActualLength = function(len) {
                                return len >> 1;
                            }, Promise.prototype.props = function() {
                                return props(this);
                            }, Promise.props = function(promises) {
                                return props(promises);
                            };
                        };
                    }, {
                        "./es5": 13,
                        "./util": 36
                    } ],
                    26: [ function(_dereq_, module, exports) {
                        "use strict";
                        function arrayMove(src, srcIndex, dst, dstIndex, len) {
                            for (var j = 0; j < len; ++j) dst[j + dstIndex] = src[j + srcIndex], src[j + srcIndex] = void 0;
                        }
                        function Queue(capacity) {
                            this._capacity = capacity, this._length = 0, this._front = 0;
                        }
                        Queue.prototype._willBeOverCapacity = function(size) {
                            return this._capacity < size;
                        }, Queue.prototype._pushOne = function(arg) {
                            var length = this.length();
                            this._checkCapacity(length + 1);
                            var i = this._front + length & this._capacity - 1;
                            this[i] = arg, this._length = length + 1;
                        }, Queue.prototype._unshiftOne = function(value) {
                            var capacity = this._capacity;
                            this._checkCapacity(this.length() + 1);
                            var front = this._front, i = (front - 1 & capacity - 1 ^ capacity) - capacity;
                            this[i] = value, this._front = i, this._length = this.length() + 1;
                        }, Queue.prototype.unshift = function(fn, receiver, arg) {
                            this._unshiftOne(arg), this._unshiftOne(receiver), this._unshiftOne(fn);
                        }, Queue.prototype.push = function(fn, receiver, arg) {
                            var length = this.length() + 3;
                            if (this._willBeOverCapacity(length)) return this._pushOne(fn), this._pushOne(receiver), 
                            void this._pushOne(arg);
                            var j = this._front + length - 3;
                            this._checkCapacity(length);
                            var wrapMask = this._capacity - 1;
                            this[j + 0 & wrapMask] = fn, this[j + 1 & wrapMask] = receiver, this[j + 2 & wrapMask] = arg, 
                            this._length = length;
                        }, Queue.prototype.shift = function() {
                            var front = this._front, ret = this[front];
                            return this[front] = void 0, this._front = front + 1 & this._capacity - 1, this._length--, 
                            ret;
                        }, Queue.prototype.length = function() {
                            return this._length;
                        }, Queue.prototype._checkCapacity = function(size) {
                            this._capacity < size && this._resizeTo(this._capacity << 1);
                        }, Queue.prototype._resizeTo = function(capacity) {
                            var oldCapacity = this._capacity;
                            this._capacity = capacity;
                            var front = this._front, length = this._length, moveItemsCount = front + length & oldCapacity - 1;
                            arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                        }, module.exports = Queue;
                    }, {} ],
                    27: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                            function race(promises, parent) {
                                var maybePromise = tryConvertToPromise(promises);
                                if (maybePromise instanceof Promise) return raceLater(maybePromise);
                                if (promises = util.asArray(promises), null === promises) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                                var ret = new Promise(INTERNAL);
                                void 0 !== parent && ret._propagateFrom(parent, 3);
                                for (var fulfill = ret._fulfill, reject = ret._reject, i = 0, len = promises.length; i < len; ++i) {
                                    var val = promises[i];
                                    (void 0 !== val || i in promises) && Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
                                }
                                return ret;
                            }
                            var util = _dereq_("./util"), raceLater = function(promise) {
                                return promise.then(function(array) {
                                    return race(array, promise);
                                });
                            };
                            Promise.race = function(promises) {
                                return race(promises, void 0);
                            }, Promise.prototype.race = function() {
                                return race(this, void 0);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    28: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                            function ReductionPromiseArray(promises, fn, initialValue, _each) {
                                this.constructor$(promises);
                                var domain = getDomain();
                                this._fn = null === domain ? fn : util.domainBind(domain, fn), void 0 !== initialValue && (initialValue = Promise.resolve(initialValue), 
                                initialValue._attachCancellationCallback(this)), this._initialValue = initialValue, 
                                this._currentCancellable = null, _each === INTERNAL ? this._eachValues = Array(this._length) : 0 === _each ? this._eachValues = null : this._eachValues = void 0, 
                                this._promise._captureStackTrace(), this._init$(void 0, -5);
                            }
                            function completed(valueOrReason, array) {
                                this.isFulfilled() ? array._resolve(valueOrReason) : array._reject(valueOrReason);
                            }
                            function reduce(promises, fn, initialValue, _each) {
                                if ("function" != typeof fn) return apiRejection("expecting a function but got " + util.classString(fn));
                                var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                                return array.promise();
                            }
                            function gotAccum(accum) {
                                this.accum = accum, this.array._gotAccum(accum);
                                var value = tryConvertToPromise(this.value, this.array._promise);
                                return value instanceof Promise ? (this.array._currentCancellable = value, value._then(gotValue, void 0, void 0, this, void 0)) : gotValue.call(this, value);
                            }
                            function gotValue(value) {
                                var array = this.array, promise = array._promise, fn = tryCatch(array._fn);
                                promise._pushContext();
                                var ret;
                                ret = void 0 !== array._eachValues ? fn.call(promise._boundValue(), value, this.index, this.length) : fn.call(promise._boundValue(), this.accum, value, this.index, this.length), 
                                ret instanceof Promise && (array._currentCancellable = ret);
                                var promiseCreated = promise._popContext();
                                return debug.checkForgottenReturns(ret, promiseCreated, void 0 !== array._eachValues ? "Promise.each" : "Promise.reduce", promise), 
                                ret;
                            }
                            var getDomain = Promise._getDomain, util = _dereq_("./util"), tryCatch = util.tryCatch;
                            util.inherits(ReductionPromiseArray, PromiseArray), ReductionPromiseArray.prototype._gotAccum = function(accum) {
                                void 0 !== this._eachValues && null !== this._eachValues && accum !== INTERNAL && this._eachValues.push(accum);
                            }, ReductionPromiseArray.prototype._eachComplete = function(value) {
                                return null !== this._eachValues && this._eachValues.push(value), this._eachValues;
                            }, ReductionPromiseArray.prototype._init = function() {}, ReductionPromiseArray.prototype._resolveEmptyArray = function() {
                                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
                            }, ReductionPromiseArray.prototype.shouldCopyValues = function() {
                                return !1;
                            }, ReductionPromiseArray.prototype._resolve = function(value) {
                                this._promise._resolveCallback(value), this._values = null;
                            }, ReductionPromiseArray.prototype._resultCancelled = function(sender) {
                                return sender === this._initialValue ? this._cancel() : void (this._isResolved() || (this._resultCancelled$(), 
                                this._currentCancellable instanceof Promise && this._currentCancellable.cancel(), 
                                this._initialValue instanceof Promise && this._initialValue.cancel()));
                            }, ReductionPromiseArray.prototype._iterate = function(values) {
                                this._values = values;
                                var value, i, length = values.length;
                                if (void 0 !== this._initialValue ? (value = this._initialValue, i = 0) : (value = Promise.resolve(values[0]), 
                                i = 1), this._currentCancellable = value, !value.isRejected()) for (;i < length; ++i) {
                                    var ctx = {
                                        accum: null,
                                        value: values[i],
                                        index: i,
                                        length: length,
                                        array: this
                                    };
                                    value = value._then(gotAccum, void 0, void 0, ctx, void 0);
                                }
                                void 0 !== this._eachValues && (value = value._then(this._eachComplete, void 0, void 0, this, void 0)), 
                                value._then(completed, completed, void 0, value, this);
                            }, Promise.prototype.reduce = function(fn, initialValue) {
                                return reduce(this, fn, initialValue, null);
                            }, Promise.reduce = function(promises, fn, initialValue, _each) {
                                return reduce(promises, fn, initialValue, _each);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    29: [ function(_dereq_, module, exports) {
                        "use strict";
                        var util = _dereq_("./util"), schedule, noAsyncScheduler = function() {
                            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                        }, NativePromise = util.getNativePromise();
                        if (util.isNode && "undefined" == typeof MutationObserver) {
                            var GlobalSetImmediate = global.setImmediate, ProcessNextTick = process.nextTick;
                            schedule = util.isRecentNode ? function(fn) {
                                GlobalSetImmediate.call(global, fn);
                            } : function(fn) {
                                ProcessNextTick.call(process, fn);
                            };
                        } else if ("function" == typeof NativePromise && "function" == typeof NativePromise.resolve) {
                            var nativePromise = NativePromise.resolve();
                            schedule = function(fn) {
                                nativePromise.then(fn);
                            };
                        } else schedule = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function(fn) {
                            setImmediate(fn);
                        } : "undefined" != typeof setTimeout ? function(fn) {
                            setTimeout(fn, 0);
                        } : noAsyncScheduler : function() {
                            var div = document.createElement("div"), opts = {
                                attributes: !0
                            }, toggleScheduled = !1, div2 = document.createElement("div"), o2 = new MutationObserver(function() {
                                div.classList.toggle("foo"), toggleScheduled = !1;
                            });
                            o2.observe(div2, opts);
                            var scheduleToggle = function() {
                                toggleScheduled || (toggleScheduled = !0, div2.classList.toggle("foo"));
                            };
                            return function schedule(fn) {
                                var o = new MutationObserver(function() {
                                    o.disconnect(), fn();
                                });
                                o.observe(div, opts), scheduleToggle();
                            };
                        }();
                        module.exports = schedule;
                    }, {
                        "./util": 36
                    } ],
                    30: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, debug) {
                            function SettledPromiseArray(values) {
                                this.constructor$(values);
                            }
                            var PromiseInspection = Promise.PromiseInspection, util = _dereq_("./util");
                            util.inherits(SettledPromiseArray, PromiseArray), SettledPromiseArray.prototype._promiseResolved = function(index, inspection) {
                                this._values[index] = inspection;
                                var totalResolved = ++this._totalResolved;
                                return totalResolved >= this._length && (this._resolve(this._values), !0);
                            }, SettledPromiseArray.prototype._promiseFulfilled = function(value, index) {
                                var ret = new PromiseInspection();
                                return ret._bitField = 33554432, ret._settledValueField = value, this._promiseResolved(index, ret);
                            }, SettledPromiseArray.prototype._promiseRejected = function(reason, index) {
                                var ret = new PromiseInspection();
                                return ret._bitField = 16777216, ret._settledValueField = reason, this._promiseResolved(index, ret);
                            }, Promise.settle = function(promises) {
                                return debug.deprecated(".settle()", ".reflect()"), new SettledPromiseArray(promises).promise();
                            }, Promise.prototype.settle = function() {
                                return Promise.settle(this);
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    31: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, PromiseArray, apiRejection) {
                            function SomePromiseArray(values) {
                                this.constructor$(values), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
                            }
                            function some(promises, howMany) {
                                if ((0 | howMany) !== howMany || howMany < 0) return apiRejection("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                                var ret = new SomePromiseArray(promises), promise = ret.promise();
                                return ret.setHowMany(howMany), ret.init(), promise;
                            }
                            var util = _dereq_("./util"), RangeError = _dereq_("./errors").RangeError, AggregateError = _dereq_("./errors").AggregateError, isArray = util.isArray, CANCELLATION = {};
                            util.inherits(SomePromiseArray, PromiseArray), SomePromiseArray.prototype._init = function() {
                                if (this._initialized) {
                                    if (0 === this._howMany) return void this._resolve([]);
                                    this._init$(void 0, -5);
                                    var isArrayResolved = isArray(this._values);
                                    !this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
                                }
                            }, SomePromiseArray.prototype.init = function() {
                                this._initialized = !0, this._init();
                            }, SomePromiseArray.prototype.setUnwrap = function() {
                                this._unwrap = !0;
                            }, SomePromiseArray.prototype.howMany = function() {
                                return this._howMany;
                            }, SomePromiseArray.prototype.setHowMany = function(count) {
                                this._howMany = count;
                            }, SomePromiseArray.prototype._promiseFulfilled = function(value) {
                                return this._addFulfilled(value), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 
                                1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), 
                                !0);
                            }, SomePromiseArray.prototype._promiseRejected = function(reason) {
                                return this._addRejected(reason), this._checkOutcome();
                            }, SomePromiseArray.prototype._promiseCancelled = function() {
                                return this._values instanceof Promise || null == this._values ? this._cancel() : (this._addRejected(CANCELLATION), 
                                this._checkOutcome());
                            }, SomePromiseArray.prototype._checkOutcome = function() {
                                if (this.howMany() > this._canPossiblyFulfill()) {
                                    for (var e = new AggregateError(), i = this.length(); i < this._values.length; ++i) this._values[i] !== CANCELLATION && e.push(this._values[i]);
                                    return e.length > 0 ? this._reject(e) : this._cancel(), !0;
                                }
                                return !1;
                            }, SomePromiseArray.prototype._fulfilled = function() {
                                return this._totalResolved;
                            }, SomePromiseArray.prototype._rejected = function() {
                                return this._values.length - this.length();
                            }, SomePromiseArray.prototype._addRejected = function(reason) {
                                this._values.push(reason);
                            }, SomePromiseArray.prototype._addFulfilled = function(value) {
                                this._values[this._totalResolved++] = value;
                            }, SomePromiseArray.prototype._canPossiblyFulfill = function() {
                                return this.length() - this._rejected();
                            }, SomePromiseArray.prototype._getRangeError = function(count) {
                                var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
                                return new RangeError(message);
                            }, SomePromiseArray.prototype._resolveEmptyArray = function() {
                                this._reject(this._getRangeError(0));
                            }, Promise.some = function(promises, howMany) {
                                return some(promises, howMany);
                            }, Promise.prototype.some = function(howMany) {
                                return some(this, howMany);
                            }, Promise._SomePromiseArray = SomePromiseArray;
                        };
                    }, {
                        "./errors": 12,
                        "./util": 36
                    } ],
                    32: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise) {
                            function PromiseInspection(promise) {
                                void 0 !== promise ? (promise = promise._target(), this._bitField = promise._bitField, 
                                this._settledValueField = promise._isFateSealed() ? promise._settledValue() : void 0) : (this._bitField = 0, 
                                this._settledValueField = void 0);
                            }
                            PromiseInspection.prototype._settledValue = function() {
                                return this._settledValueField;
                            };
                            var value = PromiseInspection.prototype.value = function() {
                                if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                                return this._settledValue();
                            }, reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function() {
                                if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                                return this._settledValue();
                            }, isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
                                return 0 !== (33554432 & this._bitField);
                            }, isRejected = PromiseInspection.prototype.isRejected = function() {
                                return 0 !== (16777216 & this._bitField);
                            }, isPending = PromiseInspection.prototype.isPending = function() {
                                return 0 === (50397184 & this._bitField);
                            }, isResolved = PromiseInspection.prototype.isResolved = function() {
                                return 0 !== (50331648 & this._bitField);
                            };
                            PromiseInspection.prototype.isCancelled = function() {
                                return 0 !== (8454144 & this._bitField);
                            }, Promise.prototype.__isCancelled = function() {
                                return 65536 === (65536 & this._bitField);
                            }, Promise.prototype._isCancelled = function() {
                                return this._target().__isCancelled();
                            }, Promise.prototype.isCancelled = function() {
                                return 0 !== (8454144 & this._target()._bitField);
                            }, Promise.prototype.isPending = function() {
                                return isPending.call(this._target());
                            }, Promise.prototype.isRejected = function() {
                                return isRejected.call(this._target());
                            }, Promise.prototype.isFulfilled = function() {
                                return isFulfilled.call(this._target());
                            }, Promise.prototype.isResolved = function() {
                                return isResolved.call(this._target());
                            }, Promise.prototype.value = function() {
                                return value.call(this._target());
                            }, Promise.prototype.reason = function() {
                                var target = this._target();
                                return target._unsetRejectionIsUnhandled(), reason.call(target);
                            }, Promise.prototype._value = function() {
                                return this._settledValue();
                            }, Promise.prototype._reason = function() {
                                return this._unsetRejectionIsUnhandled(), this._settledValue();
                            }, Promise.PromiseInspection = PromiseInspection;
                        };
                    }, {} ],
                    33: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL) {
                            function tryConvertToPromise(obj, context) {
                                if (isObject(obj)) {
                                    if (obj instanceof Promise) return obj;
                                    var then = getThen(obj);
                                    if (then === errorObj) {
                                        context && context._pushContext();
                                        var ret = Promise.reject(then.e);
                                        return context && context._popContext(), ret;
                                    }
                                    if ("function" == typeof then) {
                                        if (isAnyBluebirdPromise(obj)) {
                                            var ret = new Promise(INTERNAL);
                                            return obj._then(ret._fulfill, ret._reject, void 0, ret, null), ret;
                                        }
                                        return doThenable(obj, then, context);
                                    }
                                }
                                return obj;
                            }
                            function doGetThen(obj) {
                                return obj.then;
                            }
                            function getThen(obj) {
                                try {
                                    return doGetThen(obj);
                                } catch (e) {
                                    return errorObj.e = e, errorObj;
                                }
                            }
                            function isAnyBluebirdPromise(obj) {
                                try {
                                    return hasProp.call(obj, "_promise0");
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function doThenable(x, then, context) {
                                function resolve(value) {
                                    promise && (promise._resolveCallback(value), promise = null);
                                }
                                function reject(reason) {
                                    promise && (promise._rejectCallback(reason, synchronous, !0), promise = null);
                                }
                                var promise = new Promise(INTERNAL), ret = promise;
                                context && context._pushContext(), promise._captureStackTrace(), context && context._popContext();
                                var synchronous = !0, result = util.tryCatch(then).call(x, resolve, reject);
                                return synchronous = !1, promise && result === errorObj && (promise._rejectCallback(result.e, !0, !0), 
                                promise = null), ret;
                            }
                            var util = _dereq_("./util"), errorObj = util.errorObj, isObject = util.isObject, hasProp = {}.hasOwnProperty;
                            return tryConvertToPromise;
                        };
                    }, {
                        "./util": 36
                    } ],
                    34: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, INTERNAL, debug) {
                            function HandleWrapper(handle) {
                                this.handle = handle;
                            }
                            function successClear(value) {
                                return clearTimeout(this.handle), value;
                            }
                            function failureClear(reason) {
                                throw clearTimeout(this.handle), reason;
                            }
                            var util = _dereq_("./util"), TimeoutError = Promise.TimeoutError;
                            HandleWrapper.prototype._resultCancelled = function() {
                                clearTimeout(this.handle);
                            };
                            var afterValue = function(value) {
                                return delay(+this).thenReturn(value);
                            }, delay = Promise.delay = function(ms, value) {
                                var ret, handle;
                                return void 0 !== value ? (ret = Promise.resolve(value)._then(afterValue, null, null, ms, void 0), 
                                debug.cancellation() && value instanceof Promise && ret._setOnCancel(value)) : (ret = new Promise(INTERNAL), 
                                handle = setTimeout(function() {
                                    ret._fulfill();
                                }, +ms), debug.cancellation() && ret._setOnCancel(new HandleWrapper(handle)), ret._captureStackTrace()), 
                                ret._setAsyncGuaranteed(), ret;
                            };
                            Promise.prototype.delay = function(ms) {
                                return delay(ms, this);
                            };
                            var afterTimeout = function(promise, message, parent) {
                                var err;
                                err = "string" != typeof message ? message instanceof Error ? message : new TimeoutError("operation timed out") : new TimeoutError(message), 
                                util.markAsOriginatingFromRejection(err), promise._attachExtraTrace(err), promise._reject(err), 
                                null != parent && parent.cancel();
                            };
                            Promise.prototype.timeout = function(ms, message) {
                                ms = +ms;
                                var ret, parent, handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                    ret.isPending() && afterTimeout(ret, message, parent);
                                }, ms));
                                return debug.cancellation() ? (parent = this.then(), ret = parent._then(successClear, failureClear, void 0, handleWrapper, void 0), 
                                ret._setOnCancel(handleWrapper)) : ret = this._then(successClear, failureClear, void 0, handleWrapper, void 0), 
                                ret;
                            };
                        };
                    }, {
                        "./util": 36
                    } ],
                    35: [ function(_dereq_, module, exports) {
                        "use strict";
                        module.exports = function(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                            function thrower(e) {
                                setTimeout(function() {
                                    throw e;
                                }, 0);
                            }
                            function castPreservingDisposable(thenable) {
                                var maybePromise = tryConvertToPromise(thenable);
                                return maybePromise !== thenable && "function" == typeof thenable._isDisposable && "function" == typeof thenable._getDisposer && thenable._isDisposable() && maybePromise._setDisposable(thenable._getDisposer()), 
                                maybePromise;
                            }
                            function dispose(resources, inspection) {
                                function iterator() {
                                    if (i >= len) return ret._fulfill();
                                    var maybePromise = castPreservingDisposable(resources[i++]);
                                    if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                                        try {
                                            maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                        } catch (e) {
                                            return thrower(e);
                                        }
                                        if (maybePromise instanceof Promise) return maybePromise._then(iterator, thrower, null, null, null);
                                    }
                                    iterator();
                                }
                                var i = 0, len = resources.length, ret = new Promise(INTERNAL);
                                return iterator(), ret;
                            }
                            function Disposer(data, promise, context) {
                                this._data = data, this._promise = promise, this._context = context;
                            }
                            function FunctionDisposer(fn, promise, context) {
                                this.constructor$(fn, promise, context);
                            }
                            function maybeUnwrapDisposer(value) {
                                return Disposer.isDisposer(value) ? (this.resources[this.index]._setDisposable(value), 
                                value.promise()) : value;
                            }
                            function ResourceList(length) {
                                this.length = length, this.promise = null, this[length - 1] = null;
                            }
                            var util = _dereq_("./util"), TypeError = _dereq_("./errors").TypeError, inherits = _dereq_("./util").inherits, errorObj = util.errorObj, tryCatch = util.tryCatch, NULL = {};
                            Disposer.prototype.data = function() {
                                return this._data;
                            }, Disposer.prototype.promise = function() {
                                return this._promise;
                            }, Disposer.prototype.resource = function() {
                                return this.promise().isFulfilled() ? this.promise().value() : NULL;
                            }, Disposer.prototype.tryDispose = function(inspection) {
                                var resource = this.resource(), context = this._context;
                                void 0 !== context && context._pushContext();
                                var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
                                return void 0 !== context && context._popContext(), this._promise._unsetDisposable(), 
                                this._data = null, ret;
                            }, Disposer.isDisposer = function(d) {
                                return null != d && "function" == typeof d.resource && "function" == typeof d.tryDispose;
                            }, inherits(FunctionDisposer, Disposer), FunctionDisposer.prototype.doDispose = function(resource, inspection) {
                                var fn = this.data();
                                return fn.call(resource, resource, inspection);
                            }, ResourceList.prototype._resultCancelled = function() {
                                for (var len = this.length, i = 0; i < len; ++i) {
                                    var item = this[i];
                                    item instanceof Promise && item.cancel();
                                }
                            }, Promise.using = function() {
                                var len = arguments.length;
                                if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
                                var fn = arguments[len - 1];
                                if ("function" != typeof fn) return apiRejection("expecting a function but got " + util.classString(fn));
                                var input, spreadArgs = !0;
                                2 === len && Array.isArray(arguments[0]) ? (input = arguments[0], len = input.length, 
                                spreadArgs = !1) : (input = arguments, len--);
                                for (var resources = new ResourceList(len), i = 0; i < len; ++i) {
                                    var resource = input[i];
                                    if (Disposer.isDisposer(resource)) {
                                        var disposer = resource;
                                        resource = resource.promise(), resource._setDisposable(disposer);
                                    } else {
                                        var maybePromise = tryConvertToPromise(resource);
                                        maybePromise instanceof Promise && (resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                                            resources: resources,
                                            index: i
                                        }, void 0));
                                    }
                                    resources[i] = resource;
                                }
                                for (var reflectedResources = new Array(resources.length), i = 0; i < reflectedResources.length; ++i) reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                                var resultPromise = Promise.all(reflectedResources).then(function(inspections) {
                                    for (var i = 0; i < inspections.length; ++i) {
                                        var inspection = inspections[i];
                                        if (inspection.isRejected()) return errorObj.e = inspection.error(), errorObj;
                                        if (!inspection.isFulfilled()) return void resultPromise.cancel();
                                        inspections[i] = inspection.value();
                                    }
                                    promise._pushContext(), fn = tryCatch(fn);
                                    var ret = spreadArgs ? fn.apply(void 0, inspections) : fn(inspections), promiseCreated = promise._popContext();
                                    return debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise), 
                                    ret;
                                }), promise = resultPromise.lastly(function() {
                                    var inspection = new Promise.PromiseInspection(resultPromise);
                                    return dispose(resources, inspection);
                                });
                                return resources.promise = promise, promise._setOnCancel(resources), promise;
                            }, Promise.prototype._setDisposable = function(disposer) {
                                this._bitField = 131072 | this._bitField, this._disposer = disposer;
                            }, Promise.prototype._isDisposable = function() {
                                return (131072 & this._bitField) > 0;
                            }, Promise.prototype._getDisposer = function() {
                                return this._disposer;
                            }, Promise.prototype._unsetDisposable = function() {
                                this._bitField = this._bitField & -131073, this._disposer = void 0;
                            }, Promise.prototype.disposer = function(fn) {
                                if ("function" == typeof fn) return new FunctionDisposer(fn, this, createContext());
                                throw new TypeError();
                            };
                        };
                    }, {
                        "./errors": 12,
                        "./util": 36
                    } ],
                    36: [ function(_dereq_, module, exports) {
                        "use strict";
                        function tryCatcher() {
                            try {
                                var target = tryCatchTarget;
                                return tryCatchTarget = null, target.apply(this, arguments);
                            } catch (e) {
                                return errorObj.e = e, errorObj;
                            }
                        }
                        function tryCatch(fn) {
                            return tryCatchTarget = fn, tryCatcher;
                        }
                        function isPrimitive(val) {
                            return null == val || val === !0 || val === !1 || "string" == typeof val || "number" == typeof val;
                        }
                        function isObject(value) {
                            return "function" == typeof value || "object" == typeof value && null !== value;
                        }
                        function maybeWrapAsError(maybeError) {
                            return isPrimitive(maybeError) ? new Error(safeToString(maybeError)) : maybeError;
                        }
                        function withAppended(target, appendee) {
                            var len = target.length, ret = new Array(len + 1), i;
                            for (i = 0; i < len; ++i) ret[i] = target[i];
                            return ret[i] = appendee, ret;
                        }
                        function getDataPropertyOrDefault(obj, key, defaultValue) {
                            if (!es5.isES5) return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
                            var desc = Object.getOwnPropertyDescriptor(obj, key);
                            return null != desc ? null == desc.get && null == desc.set ? desc.value : defaultValue : void 0;
                        }
                        function notEnumerableProp(obj, name, value) {
                            if (isPrimitive(obj)) return obj;
                            var descriptor = {
                                value: value,
                                configurable: !0,
                                enumerable: !1,
                                writable: !0
                            };
                            return es5.defineProperty(obj, name, descriptor), obj;
                        }
                        function thrower(r) {
                            throw r;
                        }
                        function isClass(fn) {
                            try {
                                if ("function" == typeof fn) {
                                    var keys = es5.names(fn.prototype), hasMethods = es5.isES5 && keys.length > 1, hasMethodsOtherThanConstructor = keys.length > 0 && !(1 === keys.length && "constructor" === keys[0]), hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
                                    if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) return !0;
                                }
                                return !1;
                            } catch (e) {
                                return !1;
                            }
                        }
                        function toFastProperties(obj) {
                            /*jshint -W027,-W055,-W031*/
                            function FakeConstructor() {}
                            FakeConstructor.prototype = obj;
                            for (var l = 8; l--; ) new FakeConstructor();
                            return obj;
                            eval(obj);
                        }
                        function isIdentifier(str) {
                            return rident.test(str);
                        }
                        function filledRange(count, prefix, suffix) {
                            for (var ret = new Array(count), i = 0; i < count; ++i) ret[i] = prefix + i + suffix;
                            return ret;
                        }
                        function safeToString(obj) {
                            try {
                                return obj + "";
                            } catch (e) {
                                return "[no string representation]";
                            }
                        }
                        function isError(obj) {
                            return null !== obj && "object" == typeof obj && "string" == typeof obj.message && "string" == typeof obj.name;
                        }
                        function markAsOriginatingFromRejection(e) {
                            try {
                                notEnumerableProp(e, "isOperational", !0);
                            } catch (ignore) {}
                        }
                        function originatesFromRejection(e) {
                            return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || e.isOperational === !0);
                        }
                        function canAttachTrace(obj) {
                            return isError(obj) && es5.propertyIsWritable(obj, "stack");
                        }
                        function classString(obj) {
                            return {}.toString.call(obj);
                        }
                        function copyDescriptors(from, to, filter) {
                            for (var keys = es5.names(from), i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                if (filter(key)) try {
                                    es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                } catch (ignore) {}
                            }
                        }
                        function env(key, def) {
                            return isNode ? process.env[key] : def;
                        }
                        function getNativePromise() {
                            if ("function" == typeof Promise) try {
                                var promise = new Promise(function() {});
                                if ("[object Promise]" === {}.toString.call(promise)) return Promise;
                            } catch (e) {}
                        }
                        function domainBind(self, cb) {
                            return self.bind(cb);
                        }
                        var es5 = _dereq_("./es5"), canEvaluate = "undefined" == typeof navigator, errorObj = {
                            e: {}
                        }, tryCatchTarget, globalObject = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null, inherits = function(Child, Parent) {
                            function T() {
                                this.constructor = Child, this.constructor$ = Parent;
                                for (var propertyName in Parent.prototype) hasProp.call(Parent.prototype, propertyName) && "$" !== propertyName.charAt(propertyName.length - 1) && (this[propertyName + "$"] = Parent.prototype[propertyName]);
                            }
                            var hasProp = {}.hasOwnProperty;
                            return T.prototype = Parent.prototype, Child.prototype = new T(), Child.prototype;
                        }, inheritedDataKeys = function() {
                            var excludedPrototypes = [ Array.prototype, Object.prototype, Function.prototype ], isExcludedProto = function(val) {
                                for (var i = 0; i < excludedPrototypes.length; ++i) if (excludedPrototypes[i] === val) return !0;
                                return !1;
                            };
                            if (es5.isES5) {
                                var getKeys = Object.getOwnPropertyNames;
                                return function(obj) {
                                    for (var ret = [], visitedKeys = Object.create(null); null != obj && !isExcludedProto(obj); ) {
                                        var keys;
                                        try {
                                            keys = getKeys(obj);
                                        } catch (e) {
                                            return ret;
                                        }
                                        for (var i = 0; i < keys.length; ++i) {
                                            var key = keys[i];
                                            if (!visitedKeys[key]) {
                                                visitedKeys[key] = !0;
                                                var desc = Object.getOwnPropertyDescriptor(obj, key);
                                                null != desc && null == desc.get && null == desc.set && ret.push(key);
                                            }
                                        }
                                        obj = es5.getPrototypeOf(obj);
                                    }
                                    return ret;
                                };
                            }
                            var hasProp = {}.hasOwnProperty;
                            return function(obj) {
                                if (isExcludedProto(obj)) return [];
                                var ret = [];
                                /*jshint forin:false */
                                enumeration: for (var key in obj) if (hasProp.call(obj, key)) ret.push(key); else {
                                    for (var i = 0; i < excludedPrototypes.length; ++i) if (hasProp.call(excludedPrototypes[i], key)) continue enumeration;
                                    ret.push(key);
                                }
                                return ret;
                            };
                        }(), thisAssignmentPattern = /this\s*\.\s*\S+\s*=/, rident = /^[a-z$_][a-z$_0-9]*$/i, ensureErrorObject = function() {
                            return "stack" in new Error() ? function(value) {
                                return canAttachTrace(value) ? value : new Error(safeToString(value));
                            } : function(value) {
                                if (canAttachTrace(value)) return value;
                                try {
                                    throw new Error(safeToString(value));
                                } catch (err) {
                                    return err;
                                }
                            };
                        }(), asArray = function(v) {
                            return es5.isArray(v) ? v : null;
                        };
                        if ("undefined" != typeof Symbol && Symbol.iterator) {
                            var ArrayFrom = "function" == typeof Array.from ? function(v) {
                                return Array.from(v);
                            } : function(v) {
                                for (var ret = [], it = v[Symbol.iterator](), itResult; !(itResult = it.next()).done; ) ret.push(itResult.value);
                                return ret;
                            };
                            asArray = function(v) {
                                return es5.isArray(v) ? v : null != v && "function" == typeof v[Symbol.iterator] ? ArrayFrom(v) : null;
                            };
                        }
                        var isNode = "undefined" != typeof process && "[object process]" === classString(process).toLowerCase(), ret = {
                            isClass: isClass,
                            isIdentifier: isIdentifier,
                            inheritedDataKeys: inheritedDataKeys,
                            getDataPropertyOrDefault: getDataPropertyOrDefault,
                            thrower: thrower,
                            isArray: es5.isArray,
                            asArray: asArray,
                            notEnumerableProp: notEnumerableProp,
                            isPrimitive: isPrimitive,
                            isObject: isObject,
                            isError: isError,
                            canEvaluate: canEvaluate,
                            errorObj: errorObj,
                            tryCatch: tryCatch,
                            inherits: inherits,
                            withAppended: withAppended,
                            maybeWrapAsError: maybeWrapAsError,
                            toFastProperties: toFastProperties,
                            filledRange: filledRange,
                            toString: safeToString,
                            canAttachTrace: canAttachTrace,
                            ensureErrorObject: ensureErrorObject,
                            originatesFromRejection: originatesFromRejection,
                            markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                            classString: classString,
                            copyDescriptors: copyDescriptors,
                            hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                            isNode: isNode,
                            env: env,
                            global: globalObject,
                            getNativePromise: getNativePromise,
                            domainBind: domainBind
                        };
                        ret.isRecentNode = ret.isNode && function() {
                            var version = process.versions.node.split(".").map(Number);
                            return 0 === version[0] && version[1] > 10 || version[0] > 0;
                        }(), ret.isNode && ret.toFastProperties(process);
                        try {
                            throw new Error();
                        } catch (e) {
                            ret.lastLineError = e;
                        }
                        module.exports = ret;
                    }, {
                        "./es5": 13
                    } ]
                }, {}, [ 4 ])(4);
            }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
        }).call(exports, __webpack_require__(14), __webpack_require__("bluebird"), __webpack_require__(11), __webpack_require__(10).setImmediate);
    }
});