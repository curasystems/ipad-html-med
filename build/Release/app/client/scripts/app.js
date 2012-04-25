// Copyright 2012
// curasystems GmbH
function $JSCompiler_alias_THROW$$(a) {
    throw a;
}

function $JSCompiler_get$$(a) {
    return function() {
        return this[a];
    };
}

function $JSCompiler_returnArg$$(a) {
    return function() {
        return a;
    };
}

function $goog$exportPath_$$(a, b) {
    var c = a.split("."), d = $goog$global$$;
    !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift()); ) !c.length && b !== $JSCompiler_alias_VOID$$ ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
}

function $goog$getObjectByName$$(a) {
    for (var a = a.split("."), b = $goog$global$$, c; c = a.shift(); ) {
        if (b[c] == $JSCompiler_alias_NULL$$) return $JSCompiler_alias_NULL$$;
        b = b[c];
    }
    return b;
}

function $goog$nullFunction$$() {}

function $goog$addSingletonGetter$$(a) {
    a.$getInstance$ = function() {
        return a.$instance_$ || (a.$instance_$ = new a);
    };
}

function $goog$typeOf$$(a) {
    var b = typeof a;
    if ("object" == b) {
        if (!a) return "null";
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
}

function $goog$isArray$$(a) {
    return "array" == $goog$typeOf$$(a);
}

function $goog$isArrayLike$$(a) {
    var b = $goog$typeOf$$(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
}

function $goog$isString$$(a) {
    return "string" == typeof a;
}

function $goog$isFunction$$(a) {
    return "function" == $goog$typeOf$$(a);
}

function $goog$isObject$$(a) {
    var b = typeof a;
    return "object" == b && a != $JSCompiler_alias_NULL$$ || "function" == b;
}

function $goog$getUid$$(a) {
    return a[$goog$UID_PROPERTY_$$] || (a[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
}

function $goog$bindNative_$$(a, b, c) {
    return a.call.apply(a.bind, arguments);
}

function $goog$bindJs_$$(a, b, c) {
    a || $JSCompiler_alias_THROW$$(Error());
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(c, d), a.apply(b, c);
        };
    }
    return function() {
        return a.apply(b, arguments);
    };
}

function $goog$bind$$(a, b, c) {
    return $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$, $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments);
}

function $goog$partial$$(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        return b.unshift.apply(b, c), a.apply(this, b);
    };
}

function $goog$getMsg$$(a) {
    var b = {}, c;
    for (c in b) var d = ("" + b[c]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), d);
    return a;
}

function $goog$inherits$$(a, b) {
    function c() {}
    c.prototype = b.prototype, a.$superClass_$ = b.prototype, a.prototype = new c, a.prototype.constructor = a;
}

function $goog$json$parse$$($o_s$$4$$) {
    $o_s$$4$$ = "" + $o_s$$4$$;
    if (/^\s*$/.test($o_s$$4$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o_s$$4$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + $o_s$$4$$ + ")");
    } catch ($ex$$1$$) {}
    $JSCompiler_alias_THROW$$(Error("Invalid JSON string: " + $o_s$$4$$));
}

function $goog$net$HttpStatus$isSuccess$$(a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 304:
      case 1223:
        return $JSCompiler_alias_TRUE$$;
      default:
        return $JSCompiler_alias_FALSE$$;
    }
}

function $goog$Disposable$$() {}

function $goog$dispose$$(a) {
    a && "function" == typeof a.$dispose$ && a.$dispose$();
}

function $goog$disposeAll$$(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        $goog$isArrayLike$$(d) ? $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, d) : $goog$dispose$$(d);
    }
}

function $goog$string$urlEncode$$(a) {
    return a = "" + a, $goog$string$encodeUriRegExp_$$.test(a) ? a : encodeURIComponent(a);
}

function $goog$string$htmlEscape$$(a) {
    return $goog$string$allRe_$$.test(a) ? (-1 != a.indexOf("&") && (a = a.replace($goog$string$amperRe_$$, "&amp;")), -1 != a.indexOf("<") && (a = a.replace($goog$string$ltRe_$$, "&lt;")), -1 != a.indexOf(">") && (a = a.replace($goog$string$gtRe_$$, "&gt;")), -1 != a.indexOf('"') && (a = a.replace($goog$string$quotRe_$$, "&quot;")), a) : a;
}

function $goog$string$unescapeEntitiesUsingDom_$$(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, c = document.createElement("div");
    return a.replace($goog$string$HTML_ENTITY_PATTERN_$$, function(a, d) {
        var e = b[a];
        if (e) return e;
        if ("#" == d.charAt(0)) {
            var f = Number("0" + d.substr(1));
            isNaN(f) || (e = String.fromCharCode(f));
        }
        return e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1)), b[a] = e;
    });
}

function $goog$string$unescapePureXmlEntities_$$(a) {
    return a.replace(/&([^;]+);/g, function(a, b) {
        switch (b) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            if ("#" == b.charAt(0)) {
                var c = Number("0" + b.substr(1));
                if (!isNaN(c)) return String.fromCharCode(c);
            }
            return a;
        }
    });
}

function $goog$string$buildString$$(a) {
    return Array.prototype.join.call(arguments, "");
}

function $goog$string$toCamelCase$$(a) {
    return $goog$string$toCamelCaseCache_$$[a] || ($goog$string$toCamelCaseCache_$$[a] = ("" + a).replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase();
    }));
}

function $goog$array$contains$$(a, b) {
    return 0 <= $goog$array$indexOf$$(a, b);
}

function $goog$array$remove$$(a, b) {
    var c = $goog$array$indexOf$$(a, b);
    0 <= c && $goog$array$ARRAY_PROTOTYPE_$$.splice.call(a, c, 1);
}

function $goog$array$concat$$(a) {
    return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments);
}

function $goog$array$clone$$(a) {
    if ($goog$isArray$$(a)) return $goog$array$concat$$(a);
    for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
    return b;
}

function $goog$array$extend$$(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if ($goog$isArray$$(d) || (e = $goog$isArrayLike$$(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d); else if (e) for (var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h]; else a.push(d);
    }
}

function $goog$array$splice$$(a, b, c, d) {
    $goog$array$ARRAY_PROTOTYPE_$$.splice.apply(a, $goog$array$slice$$(arguments, 1));
}

function $goog$array$slice$$(a, b, c) {
    return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call(a, b) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call(a, b, c);
}

function $goog$userAgent$getUserAgentString$$() {
    return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$;
}

function $goog$userAgent$getNavigator$$() {
    return $goog$global$$.navigator;
}

function $goog$userAgent$isVersion$$(a) {
    var b;
    if (!(b = $goog$userAgent$isVersionCache_$$[a])) {
        b = 0;
        for (var c = ("" + $goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", h = d[f] || "", i = RegExp("(\\d*)(\\D*)", "g"), j = RegExp("(\\d*)(\\D*)", "g");
            do {
                var k = i.exec(g) || [ "", "", "" ], l = j.exec(h) || [ "", "", "" ];
                if (0 == k[0].length && 0 == l[0].length) break;
                b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1], 10)) > (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == l[2].length) ? -1 : (0 == k[2].length) > (0 == l[2].length) ? 1 : 0) || (k[2] < l[2] ? -1 : k[2] > l[2] ? 1 : 0);
            } while (0 == b);
        }
        b = $goog$userAgent$isVersionCache_$$[a] = 0 <= b;
    }
    return b;
}

function $goog$userAgent$isDocumentMode$$() {
    return $goog$userAgent$isDocumentModeCache_$$[9] || ($goog$userAgent$isDocumentModeCache_$$[9] = $goog$userAgent$IE$$ && !!document.documentMode && 9 <= document.documentMode);
}

function $goog$events$Event$$(a, b) {
    this.type = a, this.currentTarget = this.target = b;
}

function $goog$events$Event$preventDefault$$(a) {
    a.preventDefault();
}

function $goog$reflect$sinkValue$$(a) {
    return $goog$reflect$sinkValue$$[" "](a), a;
}

function $goog$events$BrowserEvent$$(a, b) {
    a && this.$init$(a, b);
}

function $JSCompiler_StaticMethods_isMouseActionButton$$(a) {
    return ($goog$events$BrowserFeature$HAS_W3C_BUTTON$$ ? 0 == a.$event_$.button : "click" == a.type ? $JSCompiler_alias_TRUE$$ : !!(a.$event_$.button & $goog$events$BrowserEvent$IEButtonMap$$[0])) && !($goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && a.ctrlKey);
}

function $goog$events$Listener$$() {}

function $goog$object$forEach$$(a, b) {
    for (var c in a) b.call($JSCompiler_alias_VOID$$, a[c], c, a);
}

function $goog$object$getValues$$(a) {
    var b = [], c = 0, d;
    for (d in a) b[c++] = a[d];
    return b;
}

function $goog$object$getKeys$$(a) {
    var b = [], c = 0, d;
    for (d in a) b[c++] = d;
    return b;
}

function $goog$object$add$$(a, b, c) {
    b in a && $JSCompiler_alias_THROW$$(Error('The object already contains the key "' + b + '"')), a[b] = c;
}

function $goog$object$extend$$(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < $goog$object$PROTOTYPE_FIELDS_$$.length; f++) c = $goog$object$PROTOTYPE_FIELDS_$$[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
}

function $goog$events$listen$$(a, b, c, d, e) {
    if (b) {
        if ($goog$isArray$$(b)) {
            for (var f = 0; f < b.length; f++) $goog$events$listen$$(a, b[f], c, d, e);
            return $JSCompiler_alias_NULL$$;
        }
        var d = !!d, g = $goog$events$listenerTree_$$;
        b in g || (g[b] = {
            $count_$: 0,
            $remaining_$: 0
        }), g = g[b], d in g || (g[d] = {
            $count_$: 0,
            $remaining_$: 0
        }, g.$count_$++);
        var g = g[d], h = $goog$getUid$$(a), i;
        g.$remaining_$++;
        if (g[h]) {
            i = g[h];
            for (f = 0; f < i.length; f++) if (g = i[f], g.$listener$ == c && g.$handler$ == e) {
                if (g.$removed$) break;
                return i[f].key;
            }
        } else i = g[h] = [], g.$count_$++;
        return f = $goog$events$getProxy$$(), f.src = a, g = new $goog$events$Listener$$, g.$init$(c, f, a, b, d, e), c = g.key, f.key = c, i.push(g), $goog$events$listeners_$$[c] = g, $goog$events$sources_$$[h] || ($goog$events$sources_$$[h] = []), $goog$events$sources_$$[h].push(g), a.addEventListener ? (a == $goog$global$$ || !a.$customEvent_$) && a.addEventListener(b, f, d) : a.attachEvent(b in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[b] : $goog$events$onStringMap_$$[b] = "on" + b, f), c;
    }
    $JSCompiler_alias_THROW$$(Error("Invalid event type"));
}

function $goog$events$getProxy$$() {
    var a = $goog$events$handleBrowserEvent_$$, b = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function(c) {
        return a.call(b.src, b.key, c);
    } : function(c) {
        c = a.call(b.src, b.key, c);
        if (!c) return c;
    };
    return b;
}

function $goog$events$listenOnce$$(a, b, c, d, e) {
    if ($goog$isArray$$(b)) for (var f = 0; f < b.length; f++) $goog$events$listenOnce$$(a, b[f], c, d, e); else a = $goog$events$listen$$(a, b, c, d, e), $goog$events$listeners_$$[a].$callOnce$ = $JSCompiler_alias_TRUE$$;
}

function $goog$events$unlisten$$(a, b, c, d, e) {
    if ($goog$isArray$$(b)) for (var f = 0; f < b.length; f++) $goog$events$unlisten$$(a, b[f], c, d, e); else if (d = !!d, a = $goog$events$getListeners_$$(a, b, d)) for (f = 0; f < a.length; f++) if (a[f].$listener$ == c && a[f].capture == d && a[f].$handler$ == e) {
        $goog$events$unlistenByKey$$(a[f].key);
        break;
    }
}

function $goog$events$unlistenByKey$$(a) {
    if (!$goog$events$listeners_$$[a]) return $JSCompiler_alias_FALSE$$;
    var b = $goog$events$listeners_$$[a];
    if (b.$removed$) return $JSCompiler_alias_FALSE$$;
    var c = b.src, d = b.type, e = b.$proxy$, f = b.capture;
    c.removeEventListener ? (c == $goog$global$$ || !c.$customEvent_$) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[d] : $goog$events$onStringMap_$$[d] = "on" + d, e), c = $goog$getUid$$(c), e = $goog$events$listenerTree_$$[d][f][c];
    if ($goog$events$sources_$$[c]) {
        var g = $goog$events$sources_$$[c];
        $goog$array$remove$$(g, b), 0 == g.length && delete $goog$events$sources_$$[c];
    }
    return b.$removed$ = $JSCompiler_alias_TRUE$$, e.$needsCleanup_$ = $JSCompiler_alias_TRUE$$, $goog$events$cleanUp_$$(d, f, c, e), delete $goog$events$listeners_$$[a], $JSCompiler_alias_TRUE$$;
}

function $goog$events$cleanUp_$$(a, b, c, d) {
    if (!d.$locked_$ && d.$needsCleanup_$) {
        for (var e = 0, f = 0; e < d.length; e++) d[e].$removed$ ? d[e].$proxy$.src = $JSCompiler_alias_NULL$$ : (e != f && (d[f] = d[e]), f++);
        d.length = f, d.$needsCleanup_$ = $JSCompiler_alias_FALSE$$, 0 == f && (delete $goog$events$listenerTree_$$[a][b][c], $goog$events$listenerTree_$$[a][b].$count_$--, 0 == $goog$events$listenerTree_$$[a][b].$count_$ && (delete $goog$events$listenerTree_$$[a][b], $goog$events$listenerTree_$$[a].$count_$--), 0 == $goog$events$listenerTree_$$[a].$count_$ && delete $goog$events$listenerTree_$$[a]);
    }
}

function $goog$events$removeAll$$(a) {
    var b, c = 0, d = b == $JSCompiler_alias_NULL$$;
    b = !!b;
    if (a == $JSCompiler_alias_NULL$$) $goog$object$forEach$$($goog$events$sources_$$, function(a) {
        for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) $goog$events$unlistenByKey$$(f.key), c++;
        }
    }); else if (a = $goog$getUid$$(a), $goog$events$sources_$$[a]) for (var a = $goog$events$sources_$$[a], e = a.length - 1; 0 <= e; e--) {
        var f = a[e];
        if (d || b == f.capture) $goog$events$unlistenByKey$$(f.key), c++;
    }
}

function $goog$events$getListeners_$$(a, b, c) {
    var d = $goog$events$listenerTree_$$;
    return b in d && (d = d[b], c in d && (d = d[c], a = $goog$getUid$$(a), d[a])) ? d[a] : $JSCompiler_alias_NULL$$;
}

function $goog$events$fireListeners_$$(a, b, c, d, e) {
    var f = 1, b = $goog$getUid$$(b);
    if (a[b]) {
        a.$remaining_$--, a = a[b], a.$locked_$ ? a.$locked_$++ : a.$locked_$ = 1;
        try {
            for (var g = a.length, h = 0; h < g; h++) {
                var i = a[h];
                i && !i.$removed$ && (f &= $goog$events$fireListener$$(i, e) !== $JSCompiler_alias_FALSE$$);
            }
        } finally {
            a.$locked_$--, $goog$events$cleanUp_$$(c, d, b, a);
        }
    }
    return Boolean(f);
}

function $goog$events$fireListener$$(a, b) {
    var c = a.handleEvent(b);
    return a.$callOnce$ && $goog$events$unlistenByKey$$(a.key), c;
}

function $goog$events$handleBrowserEvent_$$(a, b) {
    if (!$goog$events$listeners_$$[a]) return $JSCompiler_alias_TRUE$$;
    var c = $goog$events$listeners_$$[a], d = c.type, e = $goog$events$listenerTree_$$;
    if (d in e) {
        var e = e[d], f, g;
        if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
            f = b || $goog$getObjectByName$$("window.event");
            var h = $JSCompiler_alias_TRUE$$ in e, i = $JSCompiler_alias_FALSE$$ in e;
            if (h) {
                if (0 > f.keyCode || f.returnValue != $JSCompiler_alias_VOID$$) return $JSCompiler_alias_TRUE$$;
                a : {
                    var j = $JSCompiler_alias_FALSE$$;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a;
                    } catch (k) {
                        j = $JSCompiler_alias_TRUE$$;
                    }
                    if (j || f.returnValue == $JSCompiler_alias_VOID$$) f.returnValue = $JSCompiler_alias_TRUE$$;
                }
            }
            j = new $goog$events$BrowserEvent$$, j.$init$(f, this), f = $JSCompiler_alias_TRUE$$;
            try {
                if (h) {
                    for (var l = [], m = j.currentTarget; m; m = m.parentNode) l.push(m);
                    g = e[$JSCompiler_alias_TRUE$$], g.$remaining_$ = g.$count_$;
                    for (var n = l.length - 1; !j.$propagationStopped_$ && 0 <= n && g.$remaining_$; n--) j.currentTarget = l[n], f &= $goog$events$fireListeners_$$(g, l[n], d, $JSCompiler_alias_TRUE$$, j);
                    if (i) {
                        g = e[$JSCompiler_alias_FALSE$$], g.$remaining_$ = g.$count_$;
                        for (n = 0; !j.$propagationStopped_$ && n < l.length && g.$remaining_$; n++) j.currentTarget = l[n], f &= $goog$events$fireListeners_$$(g, l[n], d, $JSCompiler_alias_FALSE$$, j);
                    }
                } else f = $goog$events$fireListener$$(c, j);
            } finally {
                l && (l.length = 0), j.$dispose$();
            }
            return f;
        }
        d = new $goog$events$BrowserEvent$$(b, this);
        try {
            f = $goog$events$fireListener$$(c, d);
        } finally {
            d.$dispose$();
        }
        return f;
    }
    return $JSCompiler_alias_TRUE$$;
}

function $goog$events$EventTarget$$() {}

function $goog$Timer$callOnce$$(a, b, c) {
    $goog$isFunction$$(a) ? c && (a = $goog$bind$$(a, c)) : a && "function" == typeof a.handleEvent ? a = $goog$bind$$(a.handleEvent, a) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument")), 2147483647 < b || $goog$Timer$defaultTimerObject$$.setTimeout(a, b || 0);
}

function $goog$structs$getValues$$(a) {
    if ("function" == typeof a.$getValues$) return a.$getValues$();
    if ($goog$isString$$(a)) return a.split("");
    if ($goog$isArrayLike$$(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
    }
    return $goog$object$getValues$$(a);
}

function $goog$structs$getKeys$$(a) {
    if ("function" == typeof a.$getKeys$) return a.$getKeys$();
    if ("function" != typeof a.$getValues$) {
        if ($goog$isArrayLike$$(a) || $goog$isString$$(a)) {
            for (var b = [], a = a.length, c = 0; c < a; c++) b.push(c);
            return b;
        }
        return $goog$object$getKeys$$(a);
    }
}

function $goog$structs$forEach$$(a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c); else if ($goog$isArrayLike$$(a) || $goog$isString$$(a)) $goog$array$forEach$$(a, b, c); else for (var d = $goog$structs$getKeys$$(a), e = $goog$structs$getValues$$(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
}

function $goog$structs$Map$$(a, b) {
    this.$map_$ = {}, this.$keys_$ = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) {
        a instanceof $goog$structs$Map$$ ? (c = a.$getKeys$(), d = a.$getValues$()) : (c = $goog$object$getKeys$$(a), d = $goog$object$getValues$$(a));
        for (var e = 0; e < c.length; e++) this.set(c[e], d[e]);
    }
}

function $JSCompiler_StaticMethods_cleanupKeysArray_$$(a) {
    if (a.$count_$ != a.$keys_$.length) {
        for (var b = 0, c = 0; b < a.$keys_$.length; ) {
            var d = a.$keys_$[b];
            $goog$structs$Map$hasKey_$$(a.$map_$, d) && (a.$keys_$[c++] = d), b++;
        }
        a.$keys_$.length = c;
    }
    if (a.$count_$ != a.$keys_$.length) {
        for (var e = {}, c = b = 0; b < a.$keys_$.length; ) d = a.$keys_$[b], $goog$structs$Map$hasKey_$$(e, d) || (a.$keys_$[c++] = d, e[d] = 1), b++;
        a.$keys_$.length = c;
    }
}

function $goog$structs$Map$hasKey_$$(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function $goog$debug$getStacktrace$$(a) {
    return $goog$debug$getStacktraceHelper_$$(a || arguments.callee.caller, []);
}

function $goog$debug$getStacktraceHelper_$$(a, b) {
    var c = [];
    if ($goog$array$contains$$(b, a)) c.push("[...circular reference...]"); else if (a && 50 > b.length) {
        c.push($goog$debug$getFunctionName$$(a) + "(");
        for (var d = a.arguments, e = 0; e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
              case "object":
                f = f ? "object" : "null";
                break;
              case "string":
                break;
              case "number":
                f = "" + f;
                break;
              case "boolean":
                f = f ? "true" : "false";
                break;
              case "function":
                f = (f = $goog$debug$getFunctionName$$(f)) ? f : "[fn]";
                break;
              default:
                f = typeof f;
            }
            40 < f.length && (f = f.substr(0, 40) + "..."), c.push(f);
        }
        b.push(a), c.push(")\n");
        try {
            c.push($goog$debug$getStacktraceHelper_$$(a.caller, b));
        } catch (g) {
            c.push("[exception trying to get caller]\n");
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("");
}

function $goog$debug$getFunctionName$$(a) {
    if ($goog$debug$fnNameCache_$$[a]) return $goog$debug$fnNameCache_$$[a];
    a = "" + a;
    if (!$goog$debug$fnNameCache_$$[a]) {
        var b = /function ([^\(]+)/.exec(a);
        $goog$debug$fnNameCache_$$[a] = b ? b[1] : "[Anonymous]";
    }
    return $goog$debug$fnNameCache_$$[a];
}

function $goog$debug$LogRecord$$(a, b, c, d, e) {
    this.reset(a, b, c, d, e);
}

function $goog$debug$Logger$$(a) {
    this.$name_$ = a;
}

function $goog$debug$Logger$Level$$(a, b) {
    this.name = a, this.value = b;
}

function $JSCompiler_StaticMethods_getEffectiveLevel$$(a) {
    return a.$level_$ ? a.$level_$ : a.$parent_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$$(a.$parent_$) : $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_fine$$(a, b) {
    a.log($goog$debug$Logger$Level$FINE$$, b, $JSCompiler_alias_VOID$$);
}

function $goog$debug$LogManager$getLogger$$(a) {
    $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
    var b;
    if (!(b = $goog$debug$LogManager$loggers_$$[a])) {
        b = new $goog$debug$Logger$$(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = $goog$debug$LogManager$getLogger$$(a.substr(0, c));
        c.$getChildren$()[d] = b, b.$parent_$ = c, $goog$debug$LogManager$loggers_$$[a] = b;
    }
    return b;
}

function $goog$net$XmlHttpFactory$$() {}

function $goog$net$DefaultXmlHttpFactory$$() {}

function $JSCompiler_StaticMethods_createInstance$$(a) {
    return (a = $JSCompiler_StaticMethods_getProgId_$$(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}

function $JSCompiler_StaticMethods_internalGetOptions$$(a) {
    var b = {};
    return $JSCompiler_StaticMethods_getProgId_$$(a) && (b[0] = $JSCompiler_alias_TRUE$$, b[1] = $JSCompiler_alias_TRUE$$), b;
}

function $JSCompiler_StaticMethods_getProgId_$$(a) {
    if (!a.$ieProgId_$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.$ieProgId_$ = d;
            } catch (e) {}
        }
        $JSCompiler_alias_THROW$$(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"));
    }
    return a.$ieProgId_$;
}

function $goog$net$XhrIo$$(a) {
    this.headers = new $goog$structs$Map$$, this.$xmlHttpFactory_$ = a || $JSCompiler_alias_NULL$$;
}

function $goog$net$XhrIo$send$$(a, b, c, d, e) {
    var f = new $goog$net$XhrIo$$;
    $goog$net$XhrIo$sendInstances_$$.push(f), b && $goog$events$listen$$(f, "complete", b), $goog$events$listen$$(f, "ready", $goog$partial$$($goog$net$XhrIo$cleanupSend_$$, f)), f.send(a, c, d, e);
}

function $goog$net$XhrIo$cleanupSend_$$(a) {
    a.$dispose$(), $goog$array$remove$$($goog$net$XhrIo$sendInstances_$$, a);
}

function $JSCompiler_StaticMethods_error_$$(a, b) {
    a.$active_$ = $JSCompiler_alias_FALSE$$, a.$xhr_$ && (a.$inAbort_$ = $JSCompiler_alias_TRUE$$, a.$xhr_$.abort(), a.$inAbort_$ = $JSCompiler_alias_FALSE$$), a.$lastError_$ = b, $JSCompiler_StaticMethods_dispatchErrors_$$(a), $JSCompiler_StaticMethods_cleanUpXhr_$$(a);
}

function $JSCompiler_StaticMethods_dispatchErrors_$$(a) {
    a.$errorDispatched_$ || (a.$errorDispatched_$ = $JSCompiler_alias_TRUE$$, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}

function $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(a) {
    if (a.$active_$ && "undefined" != typeof $goog$$) if (a.$xhrOptions_$[1] && 4 == $JSCompiler_StaticMethods_getReadyState$$(a) && 2 == $JSCompiler_StaticMethods_getStatus$$(a)) $JSCompiler_StaticMethods_fine$$(a.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(a, "Local request error detected and ignored")); else if (a.$inSend_$ && 4 == $JSCompiler_StaticMethods_getReadyState$$(a)) $goog$Timer$defaultTimerObject$$.setTimeout($goog$bind$$(a.$onReadyStateChange_$, a), 0); else if (a.dispatchEvent("readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$(a)) {
        $JSCompiler_StaticMethods_fine$$(a.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(a, "Request complete")), a.$active_$ = $JSCompiler_alias_FALSE$$;
        var b = $JSCompiler_StaticMethods_getStatus$$(a), c;
        if (!(c = $goog$net$HttpStatus$isSuccess$$(b))) {
            if (b = 0 === b) b = ("" + a.$lastUri_$).match($goog$uri$utils$splitRe_$$)[1] || $JSCompiler_alias_NULL$$, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test(b ? b.toLowerCase() : "");
            c = b;
        }
        if (c) a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
            var d;
            try {
                d = 2 < $JSCompiler_StaticMethods_getReadyState$$(a) ? a.$xhr_$.statusText : "";
            } catch (e) {
                $JSCompiler_StaticMethods_fine$$(a.$logger_$, "Can not get status: " + e.message), d = "";
            }
            a.$lastError_$ = d + " [" + $JSCompiler_StaticMethods_getStatus$$(a) + "]", $JSCompiler_StaticMethods_dispatchErrors_$$(a);
        }
        $JSCompiler_StaticMethods_cleanUpXhr_$$(a);
    }
}

function $JSCompiler_StaticMethods_cleanUpXhr_$$(a, b) {
    if (a.$xhr_$) {
        var c = a.$xhr_$, d = a.$xhrOptions_$[0] ? $goog$nullFunction$$ : $JSCompiler_alias_NULL$$;
        a.$xhr_$ = $JSCompiler_alias_NULL$$, a.$xhrOptions_$ = $JSCompiler_alias_NULL$$, a.$timeoutId_$ && ($goog$Timer$defaultTimerObject$$.clearTimeout(a.$timeoutId_$), a.$timeoutId_$ = $JSCompiler_alias_NULL$$), b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d;
        } catch (e) {
            a.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "Problem encountered resetting onreadystatechange: " + e.message, $JSCompiler_alias_VOID$$);
        }
    }
}

function $JSCompiler_StaticMethods_getReadyState$$(a) {
    return a.$xhr_$ ? a.$xhr_$.readyState : 0;
}

function $JSCompiler_StaticMethods_getStatus$$(a) {
    try {
        return 2 < $JSCompiler_StaticMethods_getReadyState$$(a) ? a.$xhr_$.status : -1;
    } catch (b) {
        return a.$logger_$.log($goog$debug$Logger$Level$WARNING$$, "Can not get status: " + b.message, $JSCompiler_alias_VOID$$), -1;
    }
}

function $JSCompiler_StaticMethods_formatMsg_$$(a, b) {
    return b + " [" + a.$lastMethod_$ + " " + a.$lastUri_$ + " " + $JSCompiler_StaticMethods_getStatus$$(a) + "]";
}

function $Server$$(a) {
    this.$serverUrl$ = a;
}

function $ContinuousServer$$(a) {
    this.$server_$ = new $Server$$(a);
}

function $JSCompiler_StaticMethods_onResult$$(a, b, c, d, e, f) {
    return e != $JSCompiler_alias_NULL$$ ? c(e) : (console.log("Error reading from " + b + " => " + f), setTimeout(function() {
        var e;
        e = $JSCompiler_alias_TRUE$$, d != $JSCompiler_alias_NULL$$ && (e = d(f)), e && a.get(b, c, d);
    }, 1e3));
}

function $app$Settings$$() {}

function $app$Settings$SERVER_URL$$() {
    return $app$Settings$$.serverUrl;
}

function $app$Settings$init$$(a) {
    $app$Settings$loadFromRelativePath$$(a);
}

function $app$Settings$loadFromRelativePath$$(a) {
    (new $Server$$("./")).get("settings.json", function(b, c) {
        var d;
        if (b) {
            var e, f;
            f = [];
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], console.log("mapping " + d + " = " + e), f.push($app$Settings$$[d] = e));
            console.log("serverUrl: " + $app$Settings$SERVER_URL$$()), d = a($JSCompiler_alias_NULL$$, $app$Settings$$);
        } else console.log("Could not load settings: " + c), d = a(c, $app$Settings$$);
        return d;
    });
}

function $goog$dom$classes$get$$(a) {
    return (a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : [];
}

function $goog$dom$classes$add$$(a, b) {
    var c = $goog$dom$classes$get$$(a), d = $goog$array$slice$$(arguments, 1), e;
    e = c;
    for (var f = 0, g = 0; g < d.length; g++) $goog$array$contains$$(e, d[g]) || (e.push(d[g]), f++);
    return e = f == d.length, a.className = c.join(" "), e;
}

function $goog$dom$classes$remove$$(a, b) {
    var c = $goog$dom$classes$get$$(a), d = $goog$array$slice$$(arguments, 1), e;
    e = c;
    for (var f = 0, g = 0; g < e.length; g++) $goog$array$contains$$(d, e[g]) && ($goog$array$splice$$(e, g--, 1), f++);
    return e = f == d.length, a.className = c.join(" "), e;
}

function $goog$math$Coordinate$$(a, b) {
    this.x = a !== $JSCompiler_alias_VOID$$ ? a : 0, this.y = b !== $JSCompiler_alias_VOID$$ ? b : 0;
}

function $goog$math$Size$$(a, b) {
    this.width = a, this.height = b;
}

function $goog$dom$getDomHelper$$(a) {
    return a ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$(a)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$);
}

function $goog$dom$getElement$$(a) {
    return $goog$isString$$(a) ? document.getElementById(a) : a;
}

function $goog$dom$canUseQuerySelector_$$(a) {
    return a.querySelectorAll && a.querySelector && (!$goog$userAgent$WEBKIT$$ || "CSS1Compat" == document.compatMode || $goog$userAgent$isVersion$$("528"));
}

function $goog$dom$getElementsByTagNameAndClass_$$(a, b, c) {
    c = c || document, a = a && "*" != a ? a.toUpperCase() : "";
    if ($goog$dom$canUseQuerySelector_$$(c) && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
            return d.length = e, d;
        }
        return c;
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && $goog$array$contains$$(a.split(/\s+/), b) && (d[e++] = g);
        return d.length = e, d;
    }
    return c;
}

function $goog$dom$setProperties$$(a, b) {
    $goog$object$forEach$$(b, function(b, c) {
        "style" == c ? a.style.cssText = b : "class" == c ? a.className = b : "for" == c ? a.htmlFor = b : c in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? a.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[c], b) : 0 == c.lastIndexOf("aria-", 0) ? a.setAttribute(c, b) : a[c] = b;
    });
}

function $goog$dom$getViewportSize_$$(a) {
    var b = a.document;
    if ($goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("500") && !$goog$userAgent$MOBILE$$) {
        "undefined" == typeof a.innerHeight && (a = window);
        var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
        return a == a.top && c < b && (b -= 15), new $goog$math$Size$$(a.innerWidth, b);
    }
    return a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body, new $goog$math$Size$$(a.clientWidth, a.clientHeight);
}

function $goog$dom$getWindow_$$(a) {
    return a.parentWindow || a.defaultView;
}

function $goog$dom$append_$$(a, b, c, d) {
    function e(c) {
        c && b.appendChild($goog$isString$$(c) ? a.createTextNode(c) : c);
    }
    for (; d < c.length; d++) {
        var f = c[d];
        $goog$isArrayLike$$(f) && !($goog$isObject$$(f) && 0 < f.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$(f) ? $goog$array$clone$$(f) : f, e) : e(f);
    }
}

function $goog$dom$append$$(a, b) {
    $goog$dom$append_$$($goog$dom$getOwnerDocument$$(a), a, arguments, 1);
}

function $goog$dom$removeChildren$$(a) {
    for (var b; b = a.firstChild; ) a.removeChild(b);
}

function $goog$dom$removeNode$$(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : $JSCompiler_alias_NULL$$;
}

function $goog$dom$contains$$(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
}

function $goog$dom$getOwnerDocument$$(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}

function $goog$dom$setTextContent$$(a, b) {
    if ("textContent" in a) a.textContent = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = b;
    } else $goog$dom$removeChildren$$(a), a.appendChild($goog$dom$getOwnerDocument$$(a).createTextNode(b));
}

function $goog$dom$isFocusableTabIndex$$(a) {
    var b = a.getAttributeNode("tabindex");
    return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : $JSCompiler_alias_FALSE$$;
}

function $goog$dom$setFocusableTabIndex$$(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}

function $goog$dom$getTextContent$$(a) {
    if ($goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
        var b = [];
        $goog$dom$getTextContent_$$(a, b, $JSCompiler_alias_TRUE$$), a = b.join("");
    }
    return a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), a = a.replace(/\u200B/g, ""), $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ || (a = a.replace(/ +/g, " ")), " " != a && (a = a.replace(/^\s*/, "")), a;
}

function $goog$dom$getTextContent_$$(a, b, c) {
    if (!(a.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) if (3 == a.nodeType) c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) b.push($goog$dom$PREDEFINED_TAG_VALUES_$$[a.nodeName]); else for (a = a.firstChild; a; ) $goog$dom$getTextContent_$$(a, b, c), a = a.nextSibling;
}

function $goog$dom$isNodeList$$(a) {
    if (a && "number" == typeof a.length) {
        if ($goog$isObject$$(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if ($goog$isFunction$$(a)) return "function" == typeof a.item;
    }
    return $JSCompiler_alias_FALSE$$;
}

function $goog$dom$DomHelper$$(a) {
    this.$document_$ = a || $goog$global$$.document || document;
}

function $JSCompiler_StaticMethods_getDocument$$(a) {
    return a.$document_$;
}

function $JSCompiler_StaticMethods_getDocumentScroll$$(a) {
    var b = a.$document_$, a = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == b.compatMode ? b.documentElement : b.body, b = $goog$dom$getWindow_$$(b);
    return new $goog$math$Coordinate$$(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
}

function $goog$string$StringBuffer$$(a, b) {
    this.$buffer_$ = $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ ? [] : "", a != $JSCompiler_alias_NULL$$ && this.append.apply(this, arguments);
}

function $soy$$0$0escapeHtml$$(a) {
    return "object" == typeof a && a && 0 === a.$contentKind$ ? a.content : ("" + a).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$);
}

function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$(a) {
    return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[a];
}

function $entities$Series$$(a, b, c) {
    this.id = a, this.$thumbUrl$ = b, this.$thumbDataUri$ = c;
}

function $entities$Study$$(a, b, c, d, e) {
    this.id = a, this.$modality$ = b, this.description = c, this.$series$ = e, this.$performedAt$ = new Date(d);
}

function $JSCompiler_StaticMethods_hasBeenPerformedToday$$(a) {
    var b;
    try {
        return b = new Date, a.$performedAt$.getDate() === b.getDate() && a.$performedAt$.getMonth() === b.getMonth() && a.$performedAt$.getYear() === b.getYear();
    } catch (c) {
        return $JSCompiler_alias_FALSE$$;
    }
}

function $entities$Studies$$(a) {
    try {
        var b = a.studies, c, d, e, f;
        f = [];
        for (d = 0, e = b.length; d < e; d++) c = b[d], f.push(this.$studies$.push($JSCompiler_StaticMethods_buildStudy$$(this, c)));
    } catch (g) {
        console.log(g);
    }
}

function $JSCompiler_StaticMethods_buildStudy$$(a, b) {
    var c;
    return new $entities$Study$$(b.id, b.modality, b.description, b["performed-at"], function() {
        var a, d, e, f;
        e = b.series, f = [];
        for (a = 0, d = e.length; a < d; a++) c = e[a], f.push(new $entities$Series$$(c.id, c.thumbUrl, c.thumbDataUri));
        return f;
    }.call(a));
}

function $JSCompiler_StaticMethods_getRecent$$(a, b) {
    (new $ContinuousServer$$($app$Settings$SERVER_URL$$())).get("/studies/recent", function(b) {
        return a(new $entities$Studies$$(b));
    }, b);
}

function $JSCompiler_StaticMethods_getPatientStudies$$(a, b, c) {
    (new $ContinuousServer$$($app$Settings$SERVER_URL$$())).get("/studies/_search?" + a, function(a) {
        return b(new $entities$Studies$$(a));
    }, c);
}

function $templates$formEditor$select$$(a) {
    for (var b = '<select name="' + $soy$$0$0escapeHtml$$(a.name) + '" id="' + $soy$$0$0escapeHtml$$(a.name) + '" size="' + $soy$$0$0escapeHtml$$(a.size) + '" title="' + $soy$$0$0escapeHtml$$(a.title) + '" ' + $soy$$0$0escapeHtml$$(a.style) + " >", a = a.options, c = a.length, d = 0; d < c; d++) var e = a[d], b = b + ('<option value="' + $soy$$0$0escapeHtml$$(e.value || e.key) + '">' + $soy$$0$0escapeHtml$$(e.key) + "</option>");
    return b + "</select>";
}

function $Common$$() {
    $g_form_fields$$ = [], this.$current_sum_field$ = "", this.$blocks_count$ = 0, this.$readOnlyFields$ = [];
}

function $JSCompiler_StaticMethods_readCombosDefinitions$$(a) {
    return a = a.replace(/\n(\[[\w-]+\]:([ ]"([^"]+)"[ ]*)?\s*\n{1,2}([ ]+(\d+)?[ ]*("[^\"(.+?)]+"|(.+?))\n)+)/gm, function(a, b, c, d) {
        var a = a.split("\n"), e, f = [];
        a[1].replace(/\[(\w+)\]:/g, function(a, b) {
            return e = b;
        });
        for (b = "" === a[2] ? 3 : 2; b < a.length; b++) "" !== a[b] && a[b].replace(/[ ]+(\d+)?[ ]*("[\S ]*"[ ]*|[\S ]*)/g, function(a, b, c) {
            f.push({
                key: c.replace(/"/g, ""),
                value: b
            });
        });
        return $g_form_fields$$[e] = {
            type: "select",
            name: e,
            size: 1,
            title: d || "",
            options: f
        }, "\n\n";
    });
}

function $JSCompiler_StaticMethods_readNumberInputFields$$(a) {
    return a = a.replace(/\[(\w+)\]:\s(\d+)-(\d+)\s*\n/gm, function(a, b, c, d) {
        return $g_form_fields$$[b] = {
            type: "number",
            name: b,
            min: c,
            max: d,
            value: c
        }, "\n";
    });
}

function $JSCompiler_StaticMethods_readDateInputFields$$(a) {
    return a = a.replace(/(?:\n)\[(\w+)\]:\sDatum\s*\n\n/gm, function(a, b) {
        return $g_form_fields$$[b] = {
            type: "date",
            name: b
        }, "\n";
    });
}

function $JSCompiler_StaticMethods_readDefinitions$$(a) {
    return a = a.replace(/\[(\w+)\]:[ ]*(\[(\w+)\])?([ ]*"([^"]+)")?\s*\n/gm, function(a, b, c, d, e, f) {
        return $g_form_fields$$[d] ? ($g_form_fields$$[b] = JSON.parse(JSON.stringify($g_form_fields$$[d])), c && ($g_form_fields$$[b].name = b), $g_form_fields$$[b].title = f || "") : $g_form_fields$$[b] = {
            name: b,
            title: f
        }, "\n";
    });
}

function $JSCompiler_StaticMethods_generateHtmlElements$$(a, b, c) {
    var d, e, f, b = $g_form_fields$$[b];
    f = '<label for="' + b.name + '">' + b.label + "</label>", b.style = 'style = "margin-left: 5px;width: 175px;"';
    switch (b.type) {
      case "select":
        b.$inline$ && (f = ""), f += $templates$formEditor$select$$(b), f += b.$inline$ ? "" : "</p>";
        break;
      case "number":
        b.$inline$ && (f = ""), f += '<input type="number" name="' + b.name + '" id="' + b.name + '" min="' + b.min + '" max="' + b.max + '"  pattern="[0-9]{3}" title="' + b.title + '" size="30" ' + b.style + "/>", f += b.$inline$ ? "" : "</p>", f += "\n";
        break;
      case "text":
        b.$inline$ && (f = ""), f += '<input type="text" name="' + b.name + '" id="' + b.name + '" title="' + b.title + '" size="30" maxlength="30"' + (c || "") + " " + b.style + "/>", f += b.$inline$ ? "" : "</p>", f += "\n";
        break;
      case "summary":
        f = '<input type="text" name="' + $soy$$0$0escapeHtml$$(b.name) + '" id="' + $soy$$0$0escapeHtml$$(b.name) + '" title="' + $soy$$0$0escapeHtml$$(b.title) + '" value="0" readonly="readonly" ' + $soy$$0$0escapeHtml$$(b.style) + "/>";
        break;
      case "textarea":
        f = "<p>" + $soy$$0$0escapeHtml$$(b.label) + '<br/><textarea name="' + $soy$$0$0escapeHtml$$(b.name) + '" id="' + $soy$$0$0escapeHtml$$(b.name) + '" title="' + $soy$$0$0escapeHtml$$(b.title) + '" rows=5 style="width:99%;"></textarea></p>';
        break;
      case "block":
        f = ' style="display:' + (b.hidden === $JSCompiler_alias_TRUE$$ ? "none" : "block") + '" ', f = '\n<div id="' + b.id + '"' + f + ">", f += b.title ? "\n" + b.title + "\n" : "";
        if ("Horizontal" === b.$layout$) {
            for (d in b.$items$) b.$items$.hasOwnProperty(d) && (e = b.$items$[d], c = $JSCompiler_StaticMethods_setOnkeyupProperty$$(e), f += '<div class="hfloat">' + e.label + "<br/>", "select" === e.type ? (e.style = b.style, f += $templates$formEditor$select$$(e)) : f += '<input type="' + e.type + '" name="' + e.name + '" ' + c + ' id="' + e.name + '"  />', f += "</div>\n");
            f += '<div style="clear:both"></div></div>\n';
        } else {
            for (d in b.$items$) b.$items$.hasOwnProperty(d) && (e = b.$items$[d], c = $JSCompiler_StaticMethods_setOnkeyupProperty$$(e), f += $JSCompiler_StaticMethods_generateHtmlElements$$(a, e.name, c));
            f += "</div>\n";
        }
        break;
      case "date":
        f += '<input type="date" name="' + b.name + '" id="' + b.name + '" min="' + b.min + '" max="' + b.max + '" title="' + b.title + '" size="30" ' + b.style + " /></p>\n";
        break;
      default:
        console.error("unknown el.type");
    }
    return f;
}

function $JSCompiler_StaticMethods_setOnkeyupProperty$$(a) {
    var b, c, d = "";
    for (b in $g_form_fields$$) if ($g_form_fields$$.hasOwnProperty(b) && "summary" === $g_form_fields$$[b].type) for (c in $g_form_fields$$[b].$fields$) $g_form_fields$$[b].$fields$.hasOwnProperty(c) && $g_form_fields$$[b].$fields$[c] === a.name && (d = "onkeyup=\"Common.sum('" + b + "');\"");
    return d;
}

function $JSCompiler_StaticMethods_readInlineTextInputFields$$(a, b) {
    return b = b.replace(/(\*?\s?\[((?:\[[^\]]*\]|[^\[\]])*)\](?:\n[ ]*)?\[(.*?)\])/gm, function(b, c, d, e) {
        return $g_form_fields$$[e] ? ($g_form_fields$$[e].label = d, $g_form_fields$$[e].$inline$ = $JSCompiler_alias_TRUE$$) : $g_form_fields$$[e] = {
            type: "text",
            name: e,
            label: d,
            title: d,
            $inline$: $JSCompiler_alias_TRUE$$
        }, $JSCompiler_StaticMethods_generateHtmlElements$$(a, e);
    });
}

function $JSCompiler_StaticMethods_readTextInputFields$$(a, b) {
    return b = b.replace(/\n[\s]*(\*?\s?\[((?:\[[^\]]*\]|[^\[\]])*)\](?:\n[ ]*)?\[(.*?)\])/gm, function(b, c, d, e) {
        return $g_form_fields$$[e] ? $g_form_fields$$[e].label = d : $g_form_fields$$[e] = {
            type: "text",
            name: e,
            label: d,
            title: ""
        }, $JSCompiler_StaticMethods_generateHtmlElements$$(a, e);
    });
}

function $JSCompiler_StaticMethods_readSummaryFields$$(a, b) {
    return b = b.replace(/\n(\*?\s?\[[\w -]*\]\[\w+\][ ]*\n)+\n[\w\s\+\(\):# ]+[ ]*\[sum\((.*)\)\]\[(\w+)\]/gm, function(b, c, d, e) {
        var f, g, h;
        $g_form_fields$$[e] = {
            $fields$: [],
            type: "summary",
            name: e
        }, d = d.replace(" ", ""), g = d.split(","), c = b.match(/[^)]\]\[(\w+)\]/gm);
        for (f in c) c.hasOwnProperty(f) && (h = c[f].substring(3, c[f].length - 1), (0 === d.length || -1 !== g.indexOf(h)) && $g_form_fields$$[e].$fields$.push(h));
        return a.$current_sum_field$ = e, a.$readOnlyFields$.push(e), a.$current_sum_field$ = "", b;
    });
}

function $JSCompiler_StaticMethods_readFieldsBlocks$$(a, b) {
    var c = a.$current_sum_field$;
    return b = b.replace(/([^\n]+\n[-]+)?\n\s*(\n\([\w\s\"=]+\))?(\n\{(Horizontal|Vertikal)\}\n)?\s*\n(\n?[ ]*\*?[ ]*\[[\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\?\(\u02dc)-]+\]\[[\w]+\][ ]*){2,}/gm, function(b, d, e, f, g) {
        var h, f = "block" + a.$blocks_count$;
        return a.$blocks_count$ += 1, h = {
            id: f,
            type: "block",
            title: d,
            $layout$: g,
            $items$: []
        }, e && (e = e.replace(/\(([\w]*)\s=\s([\w]*|\"[\w]*\")\)/gm, function(a, b, c) {
            return h.hidden = $JSCompiler_alias_TRUE$$, h.$dependsOn$ = {
                field: b,
                value: c.replace(/\"/g, "")
            }, a;
        })), b = b.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\][ ]*)/gm, function(a, b, c, d) {
            return $g_form_fields$$[d] ? (b = JSON.parse(JSON.stringify($g_form_fields$$[d])), b.label = c, b.name = d, $g_form_fields$$[d] = b) : $g_form_fields$$[d] = {
                type: "text",
                name: d,
                label: c,
                title: ""
            }, h.$items$.push($g_form_fields$$[d]), a;
        }), $g_form_fields$$[f] = h, $JSCompiler_StaticMethods_generateHtmlElements$$(a, f, c);
    });
}

function $JSCompiler_StaticMethods_readTextAreas$$(a) {
    var b, c;
    return a = a.replace(/\n\n([ ]*\*?[ ]*\[[\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\,\?\(\)-]+\]\[[\w]+\][ ]*\n\n)+/gm, function(a) {
        c = a.split("\n\n");
        for (b in c) c.hasOwnProperty(b) && "" !== c[b] && c[b].replace(/\[([\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\,\?\(\)-]+)\]\[([\w]+)\]/g, function(a, b, c) {
            $g_form_fields$$[c] ? $g_form_fields$$[c].type || ($g_form_fields$$[c].type = "textarea") : $g_form_fields$$[c] = {
                type: "textarea",
                name: c,
                label: b,
                title: ""
            };
        });
        return a;
    });
}

function $JSCompiler_StaticMethods_setDependencies$$(a) {
    var b, c, d, e, f;
    for (b in $g_form_fields$$) if ($g_form_fields$$.hasOwnProperty(b) && (d = $g_form_fields$$[b], "block" === d.type && d.hidden === $JSCompiler_alias_TRUE$$)) if ("select" === $g_form_fields$$[d.$dependsOn$.field].type) {
        e = $g_form_fields$$[d.$dependsOn$.field].options;
        for (c in e) e.hasOwnProperty(c) && e[c].key === d.$dependsOn$.value && (f = e[c].value);
        a = a.replace(RegExp('name="' + d.$dependsOn$.field + '"', "gm"), function(a) {
            return a + " onchange=\"Common.toggleElement(this, '" + f + "', '" + d.id + "') \" ";
        });
    } else a = a.replace(RegExp('name="' + d.$dependsOn$.field + '"', "gm"), function(a) {
        return a + " onkeyup=\"Common.toggleElement(this, '" + d.$dependsOn$.value + "', '" + d.id + "') \" ";
    });
    return a;
}

function $JSCompiler_StaticMethods_setHeaderId$$(a) {
    return a.replace(/[^\w]/g, "").toLowerCase();
}

function $JSCompiler_StaticMethods_doHeaders$$(a) {
    return a = a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(a, b) {
        return '<h1 id="' + $JSCompiler_StaticMethods_setHeaderId$$(b) + '">' + b + "</h1>\n\n";
    }), a = a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(a, b) {
        return '<h2 id="' + $JSCompiler_StaticMethods_setHeaderId$$(b) + '">' + b + "</h2>\n\n";
    }), a = a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(a, b, c) {
        return a = b.length, "<h" + a + ' id="' + $JSCompiler_StaticMethods_setHeaderId$$(c) + '">' + c + "</h" + a + ">\n\n";
    });
}

function $goog$events$KeyCodes$firesKeyPressEvent$$(a, b, c, d, e) {
    if (!$goog$userAgent$IE$$ && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$isVersion$$("525"))) return $JSCompiler_alias_TRUE$$;
    if ($goog$userAgent$detectedMac_$$ && e) return $goog$events$KeyCodes$isCharacterKey$$(a);
    if (e && !d || !c && (17 == b || 18 == b) || $goog$userAgent$IE$$ && d && b == a) return $JSCompiler_alias_FALSE$$;
    switch (a) {
      case 13:
        return !$goog$userAgent$IE$$ || !$goog$userAgent$isDocumentMode$$();
      case 27:
        return !$goog$userAgent$WEBKIT$$;
    }
    return $goog$events$KeyCodes$isCharacterKey$$(a);
}

function $goog$events$KeyCodes$isCharacterKey$$(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || $goog$userAgent$WEBKIT$$ && 0 == a) return $JSCompiler_alias_TRUE$$;
    switch (a) {
      case 32:
      case 63:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return $JSCompiler_alias_TRUE$$;
      default:
        return $JSCompiler_alias_FALSE$$;
    }
}

function $goog$math$Box$$(a, b, c, d) {
    this.top = a, this.right = b, this.bottom = c, this.left = d;
}

function $goog$math$Rect$$(a, b, c, d) {
    this.left = a, this.top = b, this.width = c, this.height = d;
}

function $goog$style$setStyle$$(a, b) {
    $goog$isString$$(b) ? $goog$style$setStyle_$$(a, $JSCompiler_alias_VOID$$, b) : $goog$object$forEach$$(b, $goog$partial$$($goog$style$setStyle_$$, a));
}

function $goog$style$setStyle_$$(a, b, c) {
    a.style[$goog$string$toCamelCase$$(c)] = b;
}

function $goog$style$getComputedStyle$$(a, b) {
    var c = $goog$dom$getOwnerDocument$$(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, $JSCompiler_alias_NULL$$)) ? c[b] || c.getPropertyValue(b) : "";
}

function $goog$style$getCascadedStyle$$(a, b) {
    return a.currentStyle ? a.currentStyle[b] : $JSCompiler_alias_NULL$$;
}

function $goog$style$getStyle_$$(a, b) {
    return $goog$style$getComputedStyle$$(a, b) || $goog$style$getCascadedStyle$$(a, b) || a.style && a.style[b];
}

function $goog$style$getComputedPosition$$(a) {
    return $goog$style$getStyle_$$(a, "position");
}

function $goog$style$setPosition$$(a, b, c) {
    var d, e = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
    b instanceof $goog$math$Coordinate$$ ? (d = b.x, b = b.y) : (d = b, b = c), a.style.left = $goog$style$getPixelStyleValue_$$(d, e), a.style.top = $goog$style$getPixelStyleValue_$$(b, e);
}

function $goog$style$setSize$$(a, b, c) {
    b instanceof $goog$math$Size$$ ? (c = b.height, b = b.width) : c == $JSCompiler_alias_VOID$$ && $JSCompiler_alias_THROW$$(Error("missing height argument")), a.style.width = $goog$style$getPixelStyleValue_$$(b, $JSCompiler_alias_TRUE$$), a.style.height = $goog$style$getPixelStyleValue_$$(c, $JSCompiler_alias_TRUE$$);
}

function $goog$style$getPixelStyleValue_$$(a, b) {
    return "number" == typeof a && (a = (b ? Math.round(a) : a) + "px"), a;
}

function $goog$style$getSize$$(a) {
    if ("none" != $goog$style$getStyle_$$(a, "display")) return $goog$style$getSizeWithDisplay_$$(a);
    var b = a.style, c = b.display, d = b.visibility, e = b.position;
    return b.visibility = "hidden", b.position = "absolute", b.display = "inline", a = $goog$style$getSizeWithDisplay_$$(a), b.display = c, b.position = e, b.visibility = d, a;
}

function $goog$style$getSizeWithDisplay_$$(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = $goog$userAgent$WEBKIT$$ && !b && !c;
    return (b === $JSCompiler_alias_VOID$$ || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), $goog$userAgent$IE$$ && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new $goog$math$Size$$(b.right - b.left, b.bottom - b.top)) : new $goog$math$Size$$(b, c);
}

function $goog$style$setOpacity$$(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")");
}

function $goog$style$showElement$$(a, b) {
    a.style.display = b ? "" : "none";
}

function $goog$style$getIePixelValue_$$(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left, a.style.left = b;
    var e = a.style.pixelLeft;
    return a.style.left = c, a.runtimeStyle.left = d, e;
}

function $goog$style$getIePixelBorder_$$(a, b) {
    if ("none" == $goog$style$getCascadedStyle$$(a, b + "Style")) return 0;
    var c = $goog$style$getCascadedStyle$$(a, b + "Width");
    return c in $goog$style$ieBorderWidthKeywords_$$ ? $goog$style$ieBorderWidthKeywords_$$[c] : $goog$style$getIePixelValue_$$(a, c);
}

function $goog$style$getBorderBox$$(a) {
    if ($goog$userAgent$IE$$) {
        var b = $goog$style$getIePixelBorder_$$(a, "borderLeft"), c = $goog$style$getIePixelBorder_$$(a, "borderRight"), d = $goog$style$getIePixelBorder_$$(a, "borderTop"), a = $goog$style$getIePixelBorder_$$(a, "borderBottom");
        return new $goog$math$Box$$(d, c, a, b);
    }
    return b = $goog$style$getComputedStyle$$(a, "borderLeftWidth"), c = $goog$style$getComputedStyle$$(a, "borderRightWidth"), d = $goog$style$getComputedStyle$$(a, "borderTopWidth"), a = $goog$style$getComputedStyle$$(a, "borderBottomWidth"), new $goog$math$Box$$(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
}

function $goog$events$KeyHandler$$(a, b) {
    a && $JSCompiler_StaticMethods_attach$$(this, a, b);
}

function $JSCompiler_StaticMethods_attach$$(a, b, c) {
    a.$keyUpKey_$ && a.detach(), a.$element_$ = b, a.$keyPressKey_$ = $goog$events$listen$$(a.$element_$, "keypress", a, c), a.$keyDownKey_$ = $goog$events$listen$$(a.$element_$, "keydown", a.$handleKeyDown_$, c, a), a.$keyUpKey_$ = $goog$events$listen$$(a.$element_$, "keyup", a.$handleKeyup_$, c, a);
}

function $goog$events$KeyEvent$$(a, b, c, d) {
    d && this.$init$(d, $JSCompiler_alias_VOID$$), this.type = "key", this.keyCode = a, this.charCode = b, this.repeat = c;
}

function $goog$events$EventHandler$$(a) {
    this.$handler_$ = a, this.$keys_$ = [];
}

function $JSCompiler_StaticMethods_listen$$(a, b, c, d, e) {
    $goog$isArray$$(c) || ($goog$events$EventHandler$typeArray_$$[0] = c, c = $goog$events$EventHandler$typeArray_$$);
    for (var f = 0; f < c.length; f++) a.$keys_$.push($goog$events$listen$$(b, c[f], d || a, e || $JSCompiler_alias_FALSE$$, a.$handler_$ || a));
    return a;
}

function $JSCompiler_StaticMethods_unlisten$$(a, b, c, d, e, f) {
    if ($goog$isArray$$(c)) for (var g = 0; g < c.length; g++) $JSCompiler_StaticMethods_unlisten$$(a, b, c[g], d, e, f); else {
        a : {
            d = d || a, f = f || a.$handler_$ || a, e = !!e;
            if (b = $goog$events$getListeners_$$(b, c, e)) for (c = 0; c < b.length; c++) if (!b[c].$removed$ && b[c].$listener$ == d && b[c].capture == e && b[c].$handler$ == f) {
                b = b[c];
                break a;
            }
            b = $JSCompiler_alias_NULL$$;
        }
        b && (b = b.key, $goog$events$unlistenByKey$$(b), $goog$array$remove$$(a.$keys_$, b));
    }
    return a;
}

function $JSCompiler_StaticMethods_removeAll$$(a) {
    $goog$array$forEach$$(a.$keys_$, $goog$events$unlistenByKey$$), a.$keys_$.length = 0;
}

function $goog$ui$IdGenerator$$() {}

function $goog$ui$Component$$(a) {
    this.$dom_$ = a || $goog$dom$getDomHelper$$(), this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$;
}

function $goog$ui$Component$getStateTransitionEvent$$(a, b) {
    switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close";
    }
    $JSCompiler_alias_THROW$$(Error("Invalid component state"));
}

function $JSCompiler_StaticMethods_getId$$(a) {
    return a.$id_$ || (a.$id_$ = ":" + (a.$idGenerator_$.$nextId_$++).toString(36));
}

function $JSCompiler_StaticMethods_setId$$(a, b) {
    if (a.$parent_$ && a.$parent_$.$childIndex_$) {
        var c = a.$parent_$.$childIndex_$, d = a.$id_$;
        d in c && delete c[d], $goog$object$add$$(a.$parent_$.$childIndex_$, b, a);
    }
    a.$id_$ = b;
}

function $JSCompiler_StaticMethods_setParent$$(a, b) {
    a == b && $JSCompiler_alias_THROW$$(Error("Unable to set parent component")), b && a.$parent_$ && a.$id_$ && a.$parent_$.$childIndex_$ && a.$id_$ && a.$id_$ in a.$parent_$.$childIndex_$ && a.$parent_$.$childIndex_$[a.$id_$] && a.$parent_$ != b && $JSCompiler_alias_THROW$$(Error("Unable to set parent component")), a.$parent_$ = b, $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(a, b);
}

function $JSCompiler_StaticMethods_render_$$(a, b, c) {
    a.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered")), a.$element_$ || a.$createDom$(), b ? b.insertBefore(a.$element_$, c || $JSCompiler_alias_NULL$$) : a.$dom_$.$document_$.body.appendChild(a.$element_$), (!a.$parent_$ || a.$parent_$.$inDocument_$) && a.$enterDocument$();
}

function $JSCompiler_StaticMethods_isRightToLeft$$(a) {
    return a.$rightToLeft_$ == $JSCompiler_alias_NULL$$ && (a.$rightToLeft_$ = "rtl" == $goog$style$getStyle_$$(a.$inDocument_$ ? a.$element_$ : a.$dom_$.$document_$.body, "direction")), a.$rightToLeft_$;
}

function $JSCompiler_StaticMethods_hasChildren$$(a) {
    return !!a.$children_$ && 0 != a.$children_$.length;
}

function $JSCompiler_StaticMethods_getChildCount$$(a) {
    return a.$children_$ ? a.$children_$.length : 0;
}

function $JSCompiler_StaticMethods_getChildAt$$(a, b) {
    return a.$children_$ ? a.$children_$[b] || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_forEachChild$$(a, b) {
    a.$children_$ && $goog$array$forEach$$(a.$children_$, b, $JSCompiler_alias_VOID$$);
}

function $goog$dom$a11y$setRole$$(a, b) {
    a.setAttribute("role", b), a.$roleName$ = b;
}

function $goog$dom$a11y$setState$$(a, b, c) {
    a.setAttribute("aria-" + b, c);
}

function $goog$ui$ControlRenderer$$() {}

function $JSCompiler_StaticMethods_setAriaStates$$(a, b, c) {
    b.isEnabled() || a.$updateAriaState$(c, 1, $JSCompiler_alias_TRUE$$), b.$isSelected$() && a.$updateAriaState$(c, 8, $JSCompiler_alias_TRUE$$), b.$supportedStates_$ & 16 && a.$updateAriaState$(c, 16, !!(b.$state_$ & 16)), b.$supportedStates_$ & 64 && a.$updateAriaState$(c, 64, !!(b.$state_$ & 64));
}

function $JSCompiler_StaticMethods_getClassNames$$(a, b) {
    var c = a.$getCssClass$(), d = [ c ], e = a.$getCssClass$();
    e != c && d.push(e), c = b.$state_$;
    for (e = []; c; ) {
        var f = c & -c;
        e.push($JSCompiler_StaticMethods_getClassForState$$(a, f)), c &= ~f;
    }
    return d.push.apply(d, e), (c = b.$extraClassNames_$) && d.push.apply(d, c), $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7") && d.push.apply(d, $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$(d)), d;
}

function $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$(a, b) {
    var c = [];
    return b && (a = a.concat([ b ])), $goog$array$forEach$$([], function(d) {
        $goog$array$every$$(d, $goog$partial$$($goog$array$contains$$, a)) && (!b || $goog$array$contains$$(d, b)) && c.push(d.join("_"));
    }), c;
}

function $JSCompiler_StaticMethods_getClassForState$$(a, b) {
    return a.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$(a), a.$classByState_$[b];
}

function $JSCompiler_StaticMethods_createClassByStateMap_$$(a) {
    var b = a.$getCssClass$();
    a.$classByState_$ = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    };
}

function $goog$ui$Control$$(a, b, c) {
    $goog$ui$Component$$.call(this, c);
    if (!b) {
        for (var b = this.constructor, d; b; ) {
            d = $goog$getUid$$(b);
            if (d = $goog$ui$registry$defaultRenderers_$$[d]) break;
            b = b.$superClass_$ ? b.$superClass_$.constructor : $JSCompiler_alias_NULL$$;
        }
        b = d ? $goog$isFunction$$(d.$getInstance$) ? d.$getInstance$() : new d : $JSCompiler_alias_NULL$$;
    }
    this.$renderer_$ = b, this.$content_$ = a;
}

function $JSCompiler_StaticMethods_setHandleMouseEvents$$(a) {
    a.$inDocument_$ && $JSCompiler_alias_FALSE$$ != a.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(a, $JSCompiler_alias_FALSE$$), a.$handleMouseEvents_$ = $JSCompiler_alias_FALSE$$;
}

function $JSCompiler_StaticMethods_enableMouseEventHandling_$$(a, b) {
    var c = a.$getHandler$(), d = a.$getElement$();
    b ? ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(c, d, "mouseover", a.$handleMouseOver$), d, "mousedown", a.$handleMouseDown$), d, "mouseup", a.$handleMouseUp$), d, "mouseout", a.$handleMouseOut$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_listen$$(c, d, "dblclick", a.$handleDblClick$)) : ($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$(c, d, "mouseover", a.$handleMouseOver$), d, "mousedown", a.$handleMouseDown$), d, "mouseup", a.$handleMouseUp$), d, "mouseout", a.$handleMouseOut$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_unlisten$$(c, d, "dblclick", a.$handleDblClick$));
}

function $JSCompiler_StaticMethods_setContentInternal$$(a, b) {
    a.$content_$ = b;
}

function $JSCompiler_StaticMethods_setHighlighted$$(a, b) {
    $JSCompiler_StaticMethods_isTransitionAllowed$$(a, 2, b) && a.$setState$(2, b);
}

function $JSCompiler_StaticMethods_isAutoState$$(a, b) {
    return !!(a.$autoStates_$ & b) && !!(a.$supportedStates_$ & b);
}

function $JSCompiler_StaticMethods_isTransitionAllowed$$(a, b, c) {
    return !!(a.$supportedStates_$ & b) && !!(a.$state_$ & b) != c && (!(a.$statesWithTransitionEvents_$ & b) || a.dispatchEvent($goog$ui$Component$getStateTransitionEvent$$(b, c))) && !a.$disposed_$;
}

function $goog$ui$Control$isMouseEventWithinElement_$$(a, b) {
    return !!a.relatedTarget && $goog$dom$contains$$(b, a.relatedTarget);
}

function $JSCompiler_StaticMethods_performActionInternal$$(a, b) {
    if ($JSCompiler_StaticMethods_isAutoState$$(a, 16)) {
        var c = !(a.$state_$ & 16);
        $JSCompiler_StaticMethods_isTransitionAllowed$$(a, 16, c) && a.$setState$(16, c);
    }
    return $JSCompiler_StaticMethods_isAutoState$$(a, 8) && $JSCompiler_StaticMethods_isTransitionAllowed$$(a, 8, $JSCompiler_alias_TRUE$$) && a.$setState$(8, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_isAutoState$$(a, 64) && (c = !(a.$state_$ & 64), $JSCompiler_StaticMethods_isTransitionAllowed$$(a, 64, c) && a.$setState$(64, c)), c = new $goog$events$Event$$("action", a), b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.$platformModifierKey$ = b.$platformModifierKey$), a.dispatchEvent(c);
}

function $decoratorFn$$inline_336$$() {
    return new $goog$ui$Control$$($JSCompiler_alias_NULL$$);
}

function $goog$ui$TextareaRenderer$$() {}

function $goog$ui$Textarea$$(a, b, c) {
    $goog$ui$Control$$.call(this, a, b || $goog$ui$TextareaRenderer$$.$getInstance$(), c), $JSCompiler_StaticMethods_setHandleMouseEvents$$(this), this.$setAllowTextSelection$($JSCompiler_alias_TRUE$$), a || (this.$content_$ = "");
}

function $JSCompiler_StaticMethods_getPaddingBorderBoxHeight_$$(a) {
    return a.$paddingBox_$.top + a.$paddingBox_$.bottom + a.$borderBox_$.top + a.$borderBox_$.bottom;
}

function $JSCompiler_StaticMethods_getMinHeight_$$(a) {
    var b = a.$minHeight_$, c = a.$getElement$();
    return b && c && a.$needsPaddingBorderFix_$ && (b -= $JSCompiler_StaticMethods_getPaddingBorderBoxHeight_$$(a)), b;
}

function $JSCompiler_StaticMethods_getMaxHeight_$$(a) {
    var b = a.$maxHeight_$, c = a.$getElement$();
    return b && c && a.$needsPaddingBorderFix_$ && (b -= $JSCompiler_StaticMethods_getPaddingBorderBoxHeight_$$(a)), b;
}

function $JSCompiler_StaticMethods_resize$$(a) {
    a.$getElement$() && a.$grow_$();
}

function $JSCompiler_StaticMethods_getHeight_$$(a) {
    if (!a.$hasDiscoveredTextareaCharacteristics_$) {
        var b = a.$getElement$().cloneNode($JSCompiler_alias_FALSE$$);
        $goog$style$setStyle$$(b, {
            position: "absolute",
            height: "auto",
            top: "-9999px",
            margin: "0",
            padding: "1px",
            border: "1px solid #000",
            overflow: "hidden"
        }), $JSCompiler_StaticMethods_getDocument$$(a.$getDomHelper$()).body.appendChild(b);
        var c = b.scrollHeight;
        b.style.padding = "10px";
        var d = b.scrollHeight;
        a.$scrollHeightIncludesPadding_$ = d > c, b.style.borderWidth = "10px", a.$scrollHeightIncludesBorder_$ = b.scrollHeight > d, b.style.height = "100px", 100 != b.offsetHeight && (a.$needsPaddingBorderFix_$ = $JSCompiler_alias_TRUE$$), $goog$dom$removeNode$$(b), a.$hasDiscoveredTextareaCharacteristics_$ = $JSCompiler_alias_TRUE$$;
    }
    var b = a.$getElement$(), c = a.$getElement$().scrollHeight, e = a.$getElement$(), d = e.offsetHeight - e.clientHeight;
    if (!a.$scrollHeightIncludesPadding_$) var f = a.$paddingBox_$, d = d - (f.top + f.bottom);
    return a.$scrollHeightIncludesBorder_$ || (e = $goog$style$getBorderBox$$(e), d -= e.top + e.bottom), c += 0 < d ? d : 0, a.$needsPaddingBorderFix_$ ? c -= $JSCompiler_StaticMethods_getPaddingBorderBoxHeight_$$(a) : (a.$scrollHeightIncludesPadding_$ || (d = a.$paddingBox_$, c += d.top + d.bottom), a.$scrollHeightIncludesBorder_$ || (a = $goog$style$getBorderBox$$(b), c += a.top + a.bottom)), c;
}

function $JSCompiler_StaticMethods_setHeight_$$(a, b) {
    a.$height_$ != b && (a.$height_$ = b, a.$getElement$().style.height = b + "px");
}

function $JSCompiler_StaticMethods_setHeightToEstimate_$$(a) {
    a = a.$getElement$(), a.style.height = "auto";
    var b = a.value.match(/\n/g) || [];
    a.rows = b.length + 1;
}

function $curaapp$Textarea$$(a, b) {
    this.$inputPaneId$ = a, this.$outputPaneId$ = b, $goog$ui$Textarea$$.call(this, ""), this.$decorate$($goog$dom$getElement$$(this.$inputPaneId$)), this.converter = new Showdown.converter, this.$resetHeight$(), this.$initEvents$(), this.$convertText$();
}

function $JSCompiler_StaticMethods_getWindowHeight$$() {
    if (window.innerHeight) return window.innerHeight;
    if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
    if (document.body) return document.body.clientHeight;
}

function $JSCompiler_StaticMethods_saveFormResponseHandler_$$() {
    return function() {
        return noty({
            text: "form saved successfully",
            type: "success",
            timeout: 500
        });
    };
}

function $goog$fx$Dragger$$(a, b, c) {
    this.target = a, this.handle = b || a, this.$limits$ = c || new $goog$math$Rect$$(NaN, NaN, NaN, NaN), this.$document_$ = $goog$dom$getOwnerDocument$$(a), this.$eventHandler_$ = new $goog$events$EventHandler$$(this), $goog$events$listen$$(this.handle, [ "touchstart", "mousedown" ], this.$startDrag$, $JSCompiler_alias_FALSE$$, this);
}

function $JSCompiler_StaticMethods_initializeDrag_$$(a, b) {
    a.dispatchEvent(new $goog$fx$DragEvent$$("start", a, b.clientX, b.clientY)) !== $JSCompiler_alias_FALSE$$ && (a.$dragging_$ = $JSCompiler_alias_TRUE$$);
}

function $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? a.$init$(a.$event_$.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.$init$(a.$event_$.changedTouches[0], a.currentTarget);
}

function $JSCompiler_StaticMethods_calculatePosition_$$(a, b, c) {
    var d = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$(a.$document_$)), b = b + (d.x - a.$pageScroll$.x), c = c + (d.y - a.$pageScroll$.y);
    return a.$pageScroll$ = d, a.$deltaX$ += b, a.$deltaY$ += c, b = $JSCompiler_StaticMethods_limitX$$(a, a.$deltaX$), a = $JSCompiler_StaticMethods_limitY$$(a, a.$deltaY$), new $goog$math$Coordinate$$(b, a);
}

function $JSCompiler_StaticMethods_doDrag$$(a, b, c, d) {
    a.target.style.left = c + "px", a.target.style.top = d + "px", a.dispatchEvent(new $goog$fx$DragEvent$$("drag", a, b.clientX, b.clientY, 0, c, d));
}

function $JSCompiler_StaticMethods_limitX$$(a, b) {
    var c = a.$limits$, d = isNaN(c.left) ? $JSCompiler_alias_NULL$$ : c.left, c = isNaN(c.width) ? 0 : c.width;
    return Math.min(d != $JSCompiler_alias_NULL$$ ? d + c : Infinity, Math.max(d != $JSCompiler_alias_NULL$$ ? d : -Infinity, b));
}

function $JSCompiler_StaticMethods_limitY$$(a, b) {
    var c = a.$limits$, d = isNaN(c.top) ? $JSCompiler_alias_NULL$$ : c.top, c = isNaN(c.height) ? 0 : c.height;
    return Math.min(d != $JSCompiler_alias_NULL$$ ? d + c : Infinity, Math.max(d != $JSCompiler_alias_NULL$$ ? d : -Infinity, b));
}

function $goog$fx$DragEvent$$(a, b, c, d, e, f, g) {
    $goog$events$Event$$.call(this, a), this.clientX = c, this.clientY = d, this.left = f !== $JSCompiler_alias_VOID$$ ? f : b.$deltaX$, this.top = g !== $JSCompiler_alias_VOID$$ ? g : b.$deltaY$;
}

function $goog$events$FocusHandler$$(a) {
    this.$element_$ = a, a = $goog$userAgent$IE$$ ? "focusout" : "blur", this.$listenKeyIn_$ = $goog$events$listen$$(this.$element_$, $goog$userAgent$IE$$ ? "focusin" : "focus", this, !$goog$userAgent$IE$$), this.$listenKeyOut_$ = $goog$events$listen$$(this.$element_$, a, this, !$goog$userAgent$IE$$);
}

function $goog$ui$ModalPopup$$(a, b) {
    $goog$ui$Component$$.call(this, b), this.$useIframeMask_$ = !!a;
}

function $JSCompiler_StaticMethods_manageBackgroundDom_$$(a) {
    if (a.$useIframeMask_$ && !a.$bgIframeEl_$) {
        var b;
        b = a.$getDomHelper$().$createDom$("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;",
            src: 'javascript:""'
        }), a.$bgIframeEl_$ = b, a.$bgIframeEl_$.className = a.$getCssClass$() + "-bg", $goog$style$showElement$$(a.$bgIframeEl_$, $JSCompiler_alias_FALSE$$), $goog$style$setOpacity$$(a.$bgIframeEl_$, 0);
    }
    a.$bgEl_$ || (a.$bgEl_$ = a.$getDomHelper$().$createDom$("div", a.$getCssClass$() + "-bg"), $goog$style$showElement$$(a.$bgEl_$, $JSCompiler_alias_FALSE$$));
}

function $JSCompiler_StaticMethods_createTabCatcher_$$(a) {
    a.$tabCatcherElement_$ || (a.$tabCatcherElement_$ = a.$getDomHelper$().createElement("span"), $goog$style$showElement$$(a.$tabCatcherElement_$, $JSCompiler_alias_FALSE$$), $goog$dom$setFocusableTabIndex$$(a.$tabCatcherElement_$, $JSCompiler_alias_TRUE$$), a.$tabCatcherElement_$.style.position = "absolute");
}

function $JSCompiler_StaticMethods_showPopupElement_$$(a, b) {
    a.$bgIframeEl_$ && $goog$style$showElement$$(a.$bgIframeEl_$, b), a.$bgEl_$ && $goog$style$showElement$$(a.$bgEl_$, b), $goog$style$showElement$$(a.$getElement$(), b), $goog$style$showElement$$(a.$tabCatcherElement_$, b);
}

function $goog$ui$Dialog$$(a, b, c) {
    $goog$ui$ModalPopup$$.call(this, b, c), this.$class_$ = a || "modal-dialog", this.$buttons_$ = $goog$ui$Dialog$ButtonSet$createOkCancel$$();
}

function $JSCompiler_StaticMethods_setBackgroundElementOpacity$$(a, b) {
    a.$backgroundElementOpacity_$ = b;
    if (a.$getElement$()) {
        var c = a.$getBackgroundElement$();
        c && $goog$style$setOpacity$$(c, a.$backgroundElementOpacity_$);
    }
}

function $JSCompiler_StaticMethods_setDraggingEnabled_$$(a, b) {
    if (a.$getElement$()) {
        var c = a.$titleEl_$, d = a.$class_$ + "-title-draggable";
        b ? $goog$dom$classes$add$$(c, d) : $goog$dom$classes$remove$$(c, d);
    }
    b && !a.$dragger_$ ? (a.$dragger_$ = new $goog$fx$Dragger$$(a.$getElement$(), a.$titleEl_$), $goog$dom$classes$add$$(a.$titleEl_$, a.$class_$ + "-title-draggable"), $goog$events$listen$$(a.$dragger_$, "start", a.$setDraggerLimits_$, $JSCompiler_alias_FALSE$$, a)) : !b && a.$dragger_$ && (a.$dragger_$.$dispose$(), a.$dragger_$ = $JSCompiler_alias_NULL$$);
}

function $JSCompiler_StaticMethods_setButtonSet$$(a, b) {
    a.$buttons_$ = b;
    if (a.$buttonEl_$) {
        if (a.$buttons_$) {
            var c = a.$buttons_$;
            c.$element_$ = a.$buttonEl_$, c.$render$();
        } else a.$buttonEl_$.innerHTML = "";
        $goog$style$showElement$$(a.$buttonEl_$, !!a.$buttons_$);
    }
}

function $goog$ui$Dialog$Event$$(a, b) {
    this.type = $goog$ui$Dialog$EventType$SELECT$$, this.key = a, this.caption = b;
}

function $goog$ui$Dialog$ButtonSet$$(a) {
    this.$dom_$ = a || $goog$dom$getDomHelper$$(), $goog$structs$Map$$.call(this);
}

function $JSCompiler_StaticMethods_addButton$$(a, b, c, d) {
    return a.set(b.key, b.caption, c, d);
}

function $JSCompiler_StaticMethods_getButton$$(a, b) {
    for (var c = a.$element_$.getElementsByTagName("BUTTON"), d = 0, e; e = c[d]; d++) if (e.name == b || e.id == b) return e;
    return $JSCompiler_alias_NULL$$;
}

function $goog$ui$Dialog$ButtonSet$createOkCancel$$() {
    return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
}

function $goog$ui$Dialog$ButtonSet$createYesNo$$() {
    return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
}

function $goog$ui$Prompt$$(a, b, c, d, e, f, g) {
    $goog$ui$Dialog$$.call(this, e, f, g), this.$inputElementId_$ = $JSCompiler_StaticMethods_getId$$(this) + ".ie", this.$title_$ = a, this.$titleTextEl_$ && $goog$dom$setTextContent$$(this.$titleTextEl_$, a), this.$setContent$('<label for="' + this.$inputElementId_$ + '">' + b + "</label><br><br>"), this.$callback_$ = c, this.$defaultValue_$ = d !== $JSCompiler_alias_VOID$$ ? d : "", a = $goog$getMsg$$("OK"), b = $goog$getMsg$$("Cancel"), g = new $goog$ui$Dialog$ButtonSet$$(g), g.set("ok", a, $JSCompiler_alias_TRUE$$), g.set($goog$ui$Dialog$DefaultButtonKeys$CANCEL$$, b, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setButtonSet$$(this, g);
}

function $goog$ui$tree$BaseNode$$(a, b, c) {
    $goog$ui$Component$$.call(this, c), this.$config_$ = b || $goog$ui$tree$TreeControl$defaultConfig$$, this.$html_$ = a;
}

function $JSCompiler_StaticMethods_setDepth_$$(a, b) {
    if (b != a.$depth_$) {
        a.$depth_$ = b;
        var c = $JSCompiler_StaticMethods_getRowElement$$(a);
        if (c) {
            var d = Math.max(0, (a.$getDepth$() - 1) * a.$config_$.$indentWidth$) + "px";
            $JSCompiler_StaticMethods_isRightToLeft$$(a) ? c.style.paddingRight = d : c.style.paddingLeft = d;
        }
        $JSCompiler_StaticMethods_forEachChild$$(a, function(a) {
            $JSCompiler_StaticMethods_setDepth_$$(a, b + 1);
        });
    }
}

function $JSCompiler_StaticMethods_setSelectedInternal$$(a, b) {
    if (a.$selected_$ != b) {
        a.$selected_$ = b, $JSCompiler_StaticMethods_updateRow$$(a);
        var c = a.$getElement$();
        c && ($goog$dom$a11y$setState$$(c, "selected", b), b && $goog$dom$a11y$setState$$(a.$getTree$().$getElement$(), "activedescendant", $JSCompiler_StaticMethods_getId$$(a)));
    }
}

function $JSCompiler_StaticMethods_toHtml$$(a, b) {
    var c = a.$getTree$(), c = !c.$showLines_$ || c == a.getParent() && !c.$showRootLines_$ ? a.$config_$.$cssChildrenNoLines$ : a.$config_$.$cssChildren$, d = a.$getExpanded$() && $JSCompiler_StaticMethods_hasChildren$$(a);
    b.append('<div class="', a.$config_$.$cssItem$, '" id="', $JSCompiler_StaticMethods_getId$$(a), '">', $JSCompiler_StaticMethods_getRowHtml$$(a), '<div class="', c, '" style="', $goog$string$buildString$$("background-position:", $JSCompiler_StaticMethods_getLineStyle2$$(a), ";"), d ? "" : "display:none;", '">'), d && $JSCompiler_StaticMethods_forEachChild$$(a, function(a) {
        $JSCompiler_StaticMethods_toHtml$$(a, b);
    }), b.append("</div></div>");
}

function $JSCompiler_StaticMethods_getRowHtml$$(a) {
    var b = new $goog$string$StringBuffer$$;
    return b.append('<div class="', a.$getRowClassName$(), '" style="padding-', $JSCompiler_StaticMethods_isRightToLeft$$(a) ? "right:" : "left:", Math.max(0, (a.$getDepth$() - 1) * a.$config_$.$indentWidth$), 'px">', a.$getExpandIconHtml$(), $JSCompiler_StaticMethods_getIconHtml$$(a), $JSCompiler_StaticMethods_getLabelHtml$$(a), "</div>"), b.toString();
}

function $JSCompiler_StaticMethods_getLabelHtml$$(a) {
    var b = a.$toolTip_$, c = new $goog$string$StringBuffer$$;
    return c.append('<span class="', a.$config_$.$cssItemLabel$, '"', b ? ' title="' + $goog$string$htmlEscape$$(b) + '"' : "", ">", a.$html_$, "</span>", "<span>", a.$afterLabelHtml_$, "</span>"), c.toString();
}

function $JSCompiler_StaticMethods_getIconHtml$$(a) {
    var b = a.$getCalculatedIconClass$();
    return b ? $goog$string$buildString$$('<img class="', b, '" src="', a.$config_$.$cleardotPath$, '">') : $goog$string$buildString$$('<img style="display:none"', '" src="', a.$config_$.$cleardotPath$, '">');
}

function $JSCompiler_StaticMethods_getExpandIconClass$$(a) {
    var b = a.$getTree$(), c = !b.$showLines_$ || b == a.getParent() && !b.$showRootLines_$, d = a.$config_$, e = new $goog$string$StringBuffer$$;
    e.append(d.$cssTreeIcon$, " ", d.$cssExpandTreeIcon$, " ");
    if ($JSCompiler_StaticMethods_hasChildren$$(a)) {
        var f = 0;
        b.$showExpandIcons_$ && a.$isUserCollapsible_$ && (f = a.$getExpanded$() ? 2 : 1), c || (f = a.$nextSibling_$ ? f + 8 : f + 4);
        switch (f) {
          case 1:
            e.append(d.$cssExpandTreeIconPlus$);
            break;
          case 2:
            e.append(d.$cssExpandTreeIconMinus$);
            break;
          case 4:
            e.append(d.$cssExpandTreeIconL$);
            break;
          case 5:
            e.append(d.$cssExpandTreeIconLPlus$);
            break;
          case 6:
            e.append(d.$cssExpandTreeIconLMinus$);
            break;
          case 8:
            e.append(d.$cssExpandTreeIconT$);
            break;
          case 9:
            e.append(d.$cssExpandTreeIconTPlus$);
            break;
          case 10:
            e.append(d.$cssExpandTreeIconTMinus$);
            break;
          default:
            e.append(d.$cssExpandTreeIconBlank$);
        }
    } else c ? e.append(d.$cssExpandTreeIconBlank$) : a.$nextSibling_$ ? e.append(d.$cssExpandTreeIconT$) : e.append(d.$cssExpandTreeIconL$);
    return e.toString();
}

function $JSCompiler_StaticMethods_getLineStyle2$$(a) {
    return (a.$nextSibling_$ ? (a.$getDepth$() - 1) * a.$config_$.$indentWidth$ : "-100") + "px 0";
}

function $JSCompiler_StaticMethods_getRowElement$$(a) {
    return (a = a.$getElement$()) ? a.firstChild : $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_getLabelElement$$(a) {
    return (a = $JSCompiler_StaticMethods_getRowElement$$(a)) && a.lastChild ? a.lastChild.previousSibling : $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_getChildrenElement$$(a) {
    return (a = a.$getElement$()) ? a.lastChild : $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_getText$$(a) {
    return -1 != a.$html_$.indexOf("&") ? "document" in $goog$global$$ ? $goog$string$unescapeEntitiesUsingDom_$$(a.$html_$) : $goog$string$unescapePureXmlEntities_$$(a.$html_$) : a.$html_$;
}

function $JSCompiler_StaticMethods_updateRow$$(a) {
    var b = $JSCompiler_StaticMethods_getRowElement$$(a);
    b && (b.className = a.$getRowClassName$());
}

function $JSCompiler_StaticMethods_updateIcon_$$(a) {
    a.$getIconElement$().className = a.$getCalculatedIconClass$();
}

function $JSCompiler_StaticMethods_getLastShownDescendant$$(a) {
    return !a.$getExpanded$() || !$JSCompiler_StaticMethods_hasChildren$$(a) ? a : $JSCompiler_StaticMethods_getLastShownDescendant$$($JSCompiler_StaticMethods_getChildAt$$(a, $JSCompiler_StaticMethods_getChildCount$$(a) - 1));
}

function $JSCompiler_StaticMethods_setTreeInternal$$(a, b) {
    a.$tree_$ != b && (a.$tree_$ = b, $JSCompiler_StaticMethods_setNodeInMap$$(b.$typeAhead_$, a), $JSCompiler_StaticMethods_forEachChild$$(a, function(a) {
        $JSCompiler_StaticMethods_setTreeInternal$$(a, b);
    }));
}

function $goog$ui$tree$TreeNode$$(a, b, c) {
    $goog$ui$tree$BaseNode$$.call(this, a, b, c);
}

function $goog$structs$Trie$$(a) {
    this.$childNodes_$ = {};
    if (a) for (var b = $goog$structs$getKeys$$(a), a = $goog$structs$getValues$$(a), c = 0; c < b.length; c++) this.set(b[c], a[c]);
}

function $JSCompiler_StaticMethods_setOrAdd_$$(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.$childNodes_$[f] || (a.$childNodes_$[f] = new $goog$structs$Trie$$), a = a.$childNodes_$[f];
    }
    d && a.$value_$ !== $JSCompiler_alias_VOID$$ && $JSCompiler_alias_THROW$$(Error('The collection already contains the key "' + b + '"')), a.$value_$ = c;
}

function $JSCompiler_StaticMethods_getValuesInternal_$$(a, b) {
    a.$value_$ !== $JSCompiler_alias_VOID$$ && b.push(a.$value_$);
    for (var c in a.$childNodes_$) $JSCompiler_StaticMethods_getValuesInternal_$$(a.$childNodes_$[c], b);
}

function $JSCompiler_StaticMethods_getKeysInternal_$$(a, b, c) {
    a.$value_$ !== $JSCompiler_alias_VOID$$ && c.push(b);
    for (var d in a.$childNodes_$) $JSCompiler_StaticMethods_getKeysInternal_$$(a.$childNodes_$[d], b + d, c);
}

function $goog$ui$tree$TypeAhead$$() {
    this.$nodeMap_$ = new $goog$structs$Trie$$;
}

function $JSCompiler_StaticMethods_setNodeInMap$$(a, b) {
    var c = $JSCompiler_StaticMethods_getText$$(b);
    if (c && !/^[\s\xa0]*$/.test(c == $JSCompiler_alias_NULL$$ ? "" : "" + c)) {
        var c = c.toLowerCase(), d = a.$nodeMap_$.get(c);
        d ? d.push(b) : a.$nodeMap_$.set(c, [ b ]);
    }
}

function $JSCompiler_StaticMethods_jumpToLabel_$$(a, b) {
    var c = $JSCompiler_alias_FALSE$$, d = a.$nodeMap_$.$getKeys$(b);
    return d && d.length && (a.$matchingNodeIndex_$ = 0, a.$matchingLabelIndex_$ = 0, c = $JSCompiler_StaticMethods_selectMatchingNode_$$(a, a.$nodeMap_$.get(d[0]))) && (a.$matchingLabels_$ = d), c;
}

function $JSCompiler_StaticMethods_selectMatchingNode_$$(a, b) {
    var c;
    return b && (a.$matchingNodeIndex_$ < b.length && (c = b[a.$matchingNodeIndex_$], a.$matchingNodes_$ = b), c && (c.$reveal$(), c.select())), !!c;
}

function $goog$ui$tree$TreeControl$$(a, b, c) {
    $goog$ui$tree$BaseNode$$.call(this, a, b, c), this.$expanded_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setSelectedInternal$$(this, $JSCompiler_alias_TRUE$$), this.$selectedItem_$ = this, this.$typeAhead_$ = new $goog$ui$tree$TypeAhead$$;
    if ($goog$userAgent$IE$$) try {
        document.execCommand("BackgroundImageCache", $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
    } catch (d) {
        this.$logger_$.log($goog$debug$Logger$Level$WARNING$$, "Failed to enable background image cache", $JSCompiler_alias_VOID$$);
    }
}

function $JSCompiler_StaticMethods_getNodeFromEvent_$$(a, b) {
    for (var c = $JSCompiler_alias_NULL$$, d = b.target; d != $JSCompiler_alias_NULL$$; ) {
        if (c = $goog$ui$tree$BaseNode$allNodes$$[d.id]) return c;
        if (d == a.$getElement$()) break;
        d = d.parentNode;
    }
    return $JSCompiler_alias_NULL$$;
}

function $curaapp$TreeControl$$(a) {
    this.$divId$ = a, a = $goog$ui$tree$TreeControl$defaultConfig$$, a.$cleardotPath$ = "images/tree/cleardot.gif", $goog$ui$tree$TreeControl$$.call(this, "/", a), $JSCompiler_StaticMethods_getAllForms$$(this), this.$createDom$(), $goog$dom$getElement$$(this.$divId$).appendChild(this.$getElement$()), this.$enterDocument$(), this.$initEvents$();
}

function $JSCompiler_StaticMethods_getAllForms$$(a) {
    var b;
    b = new $Server$$("" + $app$Settings$SERVER_URL$$()), a.$removeChildren$(), b.get("/forms", $JSCompiler_StaticMethods_getAllFormsResponseHandler_$$(a));
}

function $JSCompiler_StaticMethods_getAllFormsResponseHandler_$$(a) {
    return a.attributes = {
        uri: "/"
    }, function(b) {
        $curaapp$TreeControl$createTreeFromJSON$$(a, b);
        if (a.$currentPath$) return $JSCompiler_StaticMethods_forEachChild$$(a, $curaapp$TreeControl$selectNodeByUri$$(a.$currentPath$)), $JSCompiler_StaticMethods_getForm$$(a, a.$currentPath$);
    };
}

function $curaapp$TreeControl$selectNodeByUri$$(a) {
    return function(b) {
        if ($JSCompiler_StaticMethods_hasChildren$$(b)) return $JSCompiler_StaticMethods_forEachChild$$(b, $curaapp$TreeControl$selectNodeByUri$$(a));
        if (b.attributes.uri === a) return b.$reveal$(), b.select();
    };
}

function $curaapp$TreeControl$createTreeFromJSON$$(a, b) {
    var c, d, e, f;
    f = [];
    for (d = 0, e = b.length; d < e; d++) c = b[d], f.push($curaapp$TreeControl$addChildToTree$$(a, c));
    return f;
}

function $curaapp$TreeControl$addChildToTree$$(a, b) {
    var c;
    c = a.$getTree$().createNode(b.name), c.attributes = b, a.add(c);
    if (b.children) return a.$iconClass_$ = "goog-tree-icon goog-tree-collapsed-folder-icon", a.$inDocument_$ && $JSCompiler_StaticMethods_updateIcon_$$(a), $curaapp$TreeControl$createTreeFromJSON$$(c, b.children);
}

function $JSCompiler_StaticMethods_getForm$$(a, b) {
    return (new $Server$$("" + $app$Settings$SERVER_URL$$())).get("/forms" + b, $JSCompiler_StaticMethods_getFormResponseHandler_$$(a));
}

function $JSCompiler_StaticMethods_getFormResponseHandler_$$(a) {
    return function(b) {
        var c;
        if (b) return c = $goog$dom$getElement$$("inputPane"), c.value = b.definition.content, a.$selectedItem_$.attributes.version = b.version, a.$selectedItem_$.attributes.$parentUri$ = b.$parentUri$, a.dispatchEvent("FORM_SELECTED");
    };
}

function $JSCompiler_StaticMethods_createFormResponseHandler_$$(a) {
    return function() {
        return $JSCompiler_StaticMethods_getAllForms$$(a), noty({
            text: "form created successfully",
            type: "success",
            timeout: 500
        });
    };
}

function $JSCompiler_StaticMethods_deleteFormResponseHandler_$$(a) {
    return function() {
        return a.$currentPath$ = $JSCompiler_StaticMethods_getChildAt$$(a, 0).attributes.uri, $JSCompiler_StaticMethods_getAllForms$$(a), noty({
            text: "form deleted successfully",
            type: "success",
            timeout: 500
        });
    };
}

function $goog$Uri$$(a, b) {
    var c;
    a instanceof $goog$Uri$$ ? (this.$setIgnoreCase$(b == $JSCompiler_alias_NULL$$ ? a.$ignoreCase_$ : b), $JSCompiler_StaticMethods_setScheme$$(this, a.$scheme_$), $JSCompiler_StaticMethods_setUserInfo$$(this, a.$userInfo_$), $JSCompiler_StaticMethods_setDomain$$(this, a.$domain_$), $JSCompiler_StaticMethods_setPort$$(this, a.$port_$), $JSCompiler_StaticMethods_setPath$$(this, a.$path_$), $JSCompiler_StaticMethods_setQueryData$$(this, a.$queryData_$.$clone$()), $JSCompiler_StaticMethods_setFragment$$(this, a.$fragment_$)) : a && (c = ("" + a).match($goog$uri$utils$splitRe_$$)) ? (this.$setIgnoreCase$(!!b), $JSCompiler_StaticMethods_setScheme$$(this, c[1] || "", $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setUserInfo$$(this, c[2] || "", $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setDomain$$(this, c[3] || "", $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setPort$$(this, c[4]), $JSCompiler_StaticMethods_setPath$$(this, c[5] || "", $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setQueryData$$(this, c[6] || "", $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setFragment$$(this, c[7] || "", $JSCompiler_alias_TRUE$$)) : (this.$setIgnoreCase$(!!b), this.$queryData_$ = new $goog$Uri$QueryData$$($JSCompiler_alias_NULL$$, this, this.$ignoreCase_$));
}

function $JSCompiler_StaticMethods_setScheme$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, a.$scheme_$ = c ? b ? decodeURIComponent(b) : "" : b, a.$scheme_$ && (a.$scheme_$ = a.$scheme_$.replace(/:$/, ""));
}

function $JSCompiler_StaticMethods_setUserInfo$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, a.$userInfo_$ = c ? b ? decodeURIComponent(b) : "" : b;
}

function $JSCompiler_StaticMethods_setDomain$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, a.$domain_$ = c ? b ? decodeURIComponent(b) : "" : b;
}

function $JSCompiler_StaticMethods_setPort$$(a, b) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, b ? (b = Number(b), (isNaN(b) || 0 > b) && $JSCompiler_alias_THROW$$(Error("Bad port number " + b)), a.$port_$ = b) : a.$port_$ = $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_setPath$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, a.$path_$ = c ? b ? decodeURIComponent(b) : "" : b;
}

function $JSCompiler_StaticMethods_setQueryData$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, b instanceof $goog$Uri$QueryData$$ ? (a.$queryData_$ = b, a.$queryData_$.$uri_$ = a, a.$queryData_$.$setIgnoreCase$(a.$ignoreCase_$)) : (c || (b = $goog$Uri$encodeSpecialChars_$$(b, $goog$Uri$reDisallowedInQuery_$$)), a.$queryData_$ = new $goog$Uri$QueryData$$(b, a, a.$ignoreCase_$));
}

function $JSCompiler_StaticMethods_setFragment$$(a, b, c) {
    $JSCompiler_StaticMethods_enforceReadOnly$$(a), delete a.$cachedToString_$, a.$fragment_$ = c ? b ? decodeURIComponent(b) : "" : b;
}

function $JSCompiler_StaticMethods_enforceReadOnly$$(a) {
    a.$isReadOnly_$ && $JSCompiler_alias_THROW$$(Error("Tried to modify a read-only Uri"));
}

function $goog$Uri$encodeSpecialChars_$$(a, b) {
    var c = $JSCompiler_alias_NULL$$;
    return $goog$isString$$(a) && (c = a, $goog$Uri$encodeSpecialRegExp_$$.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, $goog$Uri$encodeChar_$$))), c;
}

function $goog$Uri$encodeChar_$$(a) {
    return a = a.charCodeAt(0), "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}

function $goog$Uri$QueryData$$(a, b, c) {
    this.$encodedQuery_$ = a || $JSCompiler_alias_NULL$$, this.$uri_$ = b || $JSCompiler_alias_NULL$$, this.$ignoreCase_$ = !!c;
}

function $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(a) {
    if (!a.$keyMap_$ && (a.$keyMap_$ = new $goog$structs$Map$$, a.$count_$ = 0, a.$encodedQuery_$)) for (var b = a.$encodedQuery_$.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="), e = $JSCompiler_alias_NULL$$, f = $JSCompiler_alias_NULL$$;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c], e = decodeURIComponent(e.replace(/\+/g, " ")), e = $JSCompiler_StaticMethods_getKeyName_$$(a, e), a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
}

function $JSCompiler_StaticMethods_invalidateCache_$$(a) {
    delete a.$decodedQuery_$, delete a.$encodedQuery_$, a.$uri_$ && delete a.$uri_$.$cachedToString_$;
}

function $JSCompiler_StaticMethods_getKeyName_$$(a, b) {
    var c = "" + b;
    return a.$ignoreCase_$ && (c = c.toLowerCase()), c;
}

function $readModels$Viewer$$() {}

function $pages$Viewer$$() {
    this.$PhotoSwipe$ = window.Code.PhotoSwipe, this.$titleBarCaption_$ = this.$titleBar_$ = $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_insertTitleBar_$$(a) {
    var b;
    a : if (b = $goog$dom$getDomHelper$$().createElement("DIV"), b.innerHTML = "<div class='dicom-viewer-titleBar' style='position:absolute; top:0px; width:100%; height:48px; display:block; z-index:5000' ><span class='dicom-viewer-titleBar-caption' style='color:white; display:block; text-align:center'>Viewer</span></div>", 1 == b.childNodes.length) {
        var c = b.firstChild;
        if (1 == c.nodeType) {
            b = c;
            break a;
        }
    }
    a.$titleBar_$ = b, document.body.appendChild(a.$titleBar_$), c = (b = a.$titleBar_$) || document, $goog$dom$canUseQuerySelector_$$(c) ? b = c.querySelector(".dicom-viewer-titleBar-caption") : (c = b || document, b = ($goog$dom$canUseQuerySelector_$$(c) ? c.querySelectorAll(".dicom-viewer-titleBar-caption") : c.getElementsByClassName ? c.getElementsByClassName("dicom-viewer-titleBar-caption") : $goog$dom$getElementsByTagNameAndClass_$$("*", "dicom-viewer-titleBar-caption", b))[0]), a.$titleBarCaption_$ = b || $JSCompiler_alias_NULL$$;
}

function $JSCompiler_StaticMethods_renderFullscreen$$(a) {
    return $JSCompiler_StaticMethods_insertTitleBar_$$(a), function(b, c) {
        var d;
        return d = a.$PhotoSwipe$.attach(c, {
            $preventHide$: $JSCompiler_alias_FALSE$$,
            $minUserZoom$: .9,
            margin: 50,
            $jQueryMobile$: $JSCompiler_alias_FALSE$$,
            $captionAndToolbarShowEmptyCaptions$: $JSCompiler_alias_FALSE$$,
            $getImageSource$: function(a) {
                return a.$imageUrl$;
            },
            $getImageCaption$: $JSCompiler_returnArg$$(""),
            $getImageMetaData$: function(a) {
                return a;
            }
        }), d.addEventHandler(a.$PhotoSwipe$.EventTypes.onHide, function() {
            return $goog$dom$removeNode$$(a.$titleBar_$);
        }), d.addEventHandler(a.$PhotoSwipe$.EventTypes.onDisplayImage, function() {
            var b;
            return b = d.getCurrentImage(), $goog$dom$setTextContent$$(a.$titleBarCaption_$, b.metaData.title);
        }), d.show(0);
    }($JSCompiler_alias_NULL$$, [ {
        $imageUrl$: "/src/ui/pages/dummy.jpg",
        title: "1"
    }, {
        $imageUrl$: "/src/ui/pages/dummy.jpg",
        title: "2"
    } ]);
}

function $templates$dicom$studies$list$$(a) {
    for (var b = "<ul class='dicom_studies'>", a = a.$studies$, c = a.length, d = 0; d < c; d++) {
        var e = a[d], b = b + ("<li id='" + $soy$$0$0escapeHtml$$(e.id) + "' class='dicom_studies_list_item' >" + ("<div class='dicom_studies_list_item_header'>" + ("time" == e.type ? "<img title='" + $soy$$0$0escapeHtml$$(e.$performed$) + " Uhr' class='time_icon' src='/images/icon_time.png' />" : "<img title='" + $soy$$0$0escapeHtml$$(e.$performed$) + "' class='dicom_studies_list_date_icon' src='/images/icon_calendar_grid.png'/>") + "<span>" + $soy$$0$0escapeHtml$$(e.$performed$) + "</span><span class='dicom_studies_list_item_modality'><strong>" + $soy$$0$0escapeHtml$$(e.$modality$) + "</strong></span><span>" + $soy$$0$0escapeHtml$$(e.description) + "</span><div>") + "<div class='dicom_studies_list_item_series'>"), e = e.$series$, f = e.length;
        if (0 < f) for (var g = 0; g < f; g++) b += 0 < e[g].$thumbDataUri$.length ? "<img width='64' src='" + $soy$$0$0escapeHtml$$(e[g].$thumbDataUri$) + "' />" : "<img width='64' src='" + $soy$$0$0escapeHtml$$(e[g].$thumbUrl$) + "' />";
        b += "</div></li>";
    }
    return b + "</ul>";
}

function $ipad$StudyApplication$$(a) {
    this.$query$ = a;
}

function $JSCompiler_StaticMethods_displayIn$$(a, b) {
    var c, d;
    a.$containerElement$ = $goog$dom$getElement$$(b), d = function(c) {
        c = {
            $groupedStudies$: $JSCompiler_StaticMethods_groupStudiesIntoTodayAndOlder$$(a, c.$studies$)
        }, a.$containerElement$.innerHTML = "<div class='dicom_grouped_list'><h3>Dicom Studien</h3>" + (0 < (c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$today$.$studies$.length ? "<div id='vertical' class='divider'><h4>" + $soy$$0$0escapeHtml$$((c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$today$.title) + "</h4>" + $templates$dicom$studies$list$$((c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$today$) + "</div>" : "") + (0 < (c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$older$.$studies$.length ? "<div id='vertical' style='margin-top:50px'><h4>" + $soy$$0$0escapeHtml$$((c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$older$.title) + "</h4>" + $templates$dicom$studies$list$$((c || $goog$soy$defaultTemplateData_$$).$groupedStudies$.$older$) + "</div>" : "") + "</div>";
        var d, e, f, g;
        f = $goog$dom$getElementsByTagNameAndClass_$$("li", "dicom_studies_list_item", a.$containerElement$), g = [];
        for (d = 0, e = f.length; d < e; d++) c = f[d], g.push($goog$events$listen$$(c, "click", a.$onOpenStudy$, $JSCompiler_alias_FALSE$$, {
            $study$: c.id,
            $containerElement$: a.$containerElement$
        }));
        return g;
    }, c = function(c) {
        return $goog$dom$setTextContent$$(a.$containerElement$, "Momentan keine Daten verf�gbar " + c), $JSCompiler_alias_TRUE$$;
    }, a.$query$ ? $JSCompiler_StaticMethods_getPatientStudies$$(a.$query$, d, c) : $JSCompiler_StaticMethods_getRecent$$(d, c);
}

function $JSCompiler_StaticMethods_groupStudiesIntoTodayAndOlder$$(a, b) {
    var c;
    return {
        $today$: {
            title: "Heute",
            $studies$: function() {
                var a, d, e;
                e = [];
                for (a = 0, d = b.length; a < d; a++) c = b[a], $JSCompiler_StaticMethods_hasBeenPerformedToday$$(c) && e.push($JSCompiler_StaticMethods_adornStudy$$(c));
                return e;
            }.call(a)
        },
        $older$: {
            title: "Fr�here Untersuchungen",
            $studies$: function() {
                var a, d, e;
                e = [];
                for (a = 0, d = b.length; a < d; a++) c = b[a], $JSCompiler_StaticMethods_hasBeenPerformedToday$$(c) || e.push($JSCompiler_StaticMethods_adornStudy$$(c));
                return e;
            }.call(a)
        }
    };
}

function $JSCompiler_StaticMethods_adornStudy$$(a) {
    return $JSCompiler_StaticMethods_hasBeenPerformedToday$$(a) ? (a.type = "time", a.$performed$ = a.$performedAt$.toString("hh:mm:ss")) : (a.type = "date", a.$performed$ = a.$performedAt$.toString("dd.MM.yy")), a;
}

var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1, $JSCompiler_prototypeAlias$$, $goog$$ = $goog$$ || {}, $goog$global$$ = this, $goog$UID_PROPERTY_$$ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), $goog$uidCounter_$$ = 0, $goog$now$$ = Date.now || function() {
    return +(new Date);
};

$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$, $goog$Disposable$$.prototype.$dispose$ = function() {
    this.$disposed_$ || (this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$());
}, $goog$Disposable$$.prototype.$disposeInternal$ = function() {
    this.$dependentDisposables_$ && $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, this.$dependentDisposables_$);
};

var $goog$string$encodeUriRegExp_$$ = /^[a-zA-Z0-9\-_.!~*'()]*$/, $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/, $goog$string$HTML_ENTITY_PATTERN_$$ = /&([^;\s<&]+);?/g, $goog$string$toCamelCaseCache_$$ = {}, $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function(a, b, c) {
    return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call(a, b, c);
} : function(a, b, c) {
    c = c == $JSCompiler_alias_NULL$$ ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if ($goog$isString$$(a)) return !$goog$isString$$(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function(a, b, c) {
    $goog$array$ARRAY_PROTOTYPE_$$.forEach.call(a, b, c);
} : function(a, b, c) {
    for (var d = a.length, e = $goog$isString$$(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function(a, b, c) {
    return $goog$array$ARRAY_PROTOTYPE_$$.every.call(a, b, c);
} : function(a, b, c) {
    for (var d = a.length, e = $goog$isString$$(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && !b.call(c, e[f], f, a)) return $JSCompiler_alias_FALSE$$;
    return $JSCompiler_alias_TRUE$$;
}, $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedMobile_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$;

$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedMobile_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;

var $ua$$inline_49$$;

if ($ua$$inline_49$$ = $goog$userAgent$getUserAgentString$$()) {
    var $navigator$$inline_50$$ = $goog$userAgent$getNavigator$$();
    $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_49$$.indexOf("Opera"), $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_49$$.indexOf("MSIE"), $goog$userAgent$detectedMobile_$$ = ($goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_49$$.indexOf("WebKit")) && -1 != $ua$$inline_49$$.indexOf("Mobile"), $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_50$$.product;
}

var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$MOBILE$$ = $goog$userAgent$detectedMobile_$$, $navigator$$inline_52$$ = $goog$userAgent$getNavigator$$();

$goog$userAgent$detectedMac_$$ = -1 != ($navigator$$inline_52$$ && $navigator$$inline_52$$.platform || "").indexOf("Mac");

var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11"), $goog$userAgent$VERSION$$;

a : {
    var $version$$inline_55$$ = "", $re$$inline_56$$;
    if ($goog$userAgent$OPERA$$ && $goog$global$$.opera) var $operaVersion$$inline_57$$ = $goog$global$$.opera.version, $version$$inline_55$$ = "function" == typeof $operaVersion$$inline_57$$ ? $operaVersion$$inline_57$$() : $operaVersion$$inline_57$$; else if ($goog$userAgent$GECKO$$ ? $re$$inline_56$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_56$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_56$$ = /WebKit\/(\S+)/), $re$$inline_56$$) var $arr$$inline_58$$ = $re$$inline_56$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_55$$ = $arr$$inline_58$$ ? $arr$$inline_58$$[1] : "";
    if ($goog$userAgent$IE$$) {
        var $docMode$$inline_59$$, $doc$$inline_598$$ = $goog$global$$.document;
        $docMode$$inline_59$$ = $doc$$inline_598$$ ? $doc$$inline_598$$.documentMode : $JSCompiler_alias_VOID$$;
        if ($docMode$$inline_59$$ > parseFloat($version$$inline_55$$)) {
            $goog$userAgent$VERSION$$ = "" + $docMode$$inline_59$$;
            break a;
        }
    }
    $goog$userAgent$VERSION$$ = $version$$inline_55$$;
}

var $goog$userAgent$isVersionCache_$$ = {}, $goog$userAgent$isDocumentModeCache_$$ = {}, $goog$events$BrowserFeature$HAS_W3C_BUTTON$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(), $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("8");

!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528"), $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528"), !$goog$userAgent$GECKO$$ || $goog$userAgent$isVersion$$("8"), $goog$inherits$$($goog$events$Event$$, $goog$Disposable$$), $JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    delete this.type, delete this.target, delete this.currentTarget;
}, $JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.stopPropagation = function() {
    this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$;
}, $JSCompiler_prototypeAlias$$.preventDefault = function() {
    this.$returnValue_$ = $JSCompiler_alias_FALSE$$;
}, $goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$, $goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);

var $goog$events$BrowserEvent$IEButtonMap$$ = [ 1, 4, 2 ];

$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype, $JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.offsetX = 0, $JSCompiler_prototypeAlias$$.offsetY = 0, $JSCompiler_prototypeAlias$$.clientX = 0, $JSCompiler_prototypeAlias$$.clientY = 0, $JSCompiler_prototypeAlias$$.screenX = 0, $JSCompiler_prototypeAlias$$.screenY = 0, $JSCompiler_prototypeAlias$$.button = 0, $JSCompiler_prototypeAlias$$.keyCode = 0, $JSCompiler_prototypeAlias$$.charCode = 0, $JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$init$ = function(b, c) {
    var d = this.type = b.type;
    $goog$events$Event$$.call(this, d), this.target = b.target || b.srcElement, this.currentTarget = c;
    var e = b.relatedTarget;
    if (e) {
        if ($goog$userAgent$GECKO$$) {
            var f;
            a : {
                try {
                    $goog$reflect$sinkValue$$(e.nodeName), f = $JSCompiler_alias_TRUE$$;
                    break a;
                } catch (g) {}
                f = $JSCompiler_alias_FALSE$$;
            }
            f || (e = $JSCompiler_alias_NULL$$);
        }
    } else "mouseover" == d ? e = b.fromElement : "mouseout" == d && (e = b.toElement);
    this.relatedTarget = e, this.offsetX = $goog$userAgent$WEBKIT$$ || b.offsetX !== $JSCompiler_alias_VOID$$ ? b.offsetX : b.layerX, this.offsetY = $goog$userAgent$WEBKIT$$ || b.offsetY !== $JSCompiler_alias_VOID$$ ? b.offsetY : b.layerY, this.clientX = b.clientX !== $JSCompiler_alias_VOID$$ ? b.clientX : b.pageX, this.clientY = b.clientY !== $JSCompiler_alias_VOID$$ ? b.clientY : b.pageY, this.screenX = b.screenX || 0, this.screenY = b.screenY || 0, this.button = b.button, this.keyCode = b.keyCode || 0, this.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0), this.ctrlKey = b.ctrlKey, this.altKey = b.altKey, this.shiftKey = b.shiftKey, this.metaKey = b.metaKey, this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? b.metaKey : b.ctrlKey, this.state = b.state, this.$event_$ = b, delete this.$returnValue_$, delete this.$propagationStopped_$;
}, $JSCompiler_prototypeAlias$$.stopPropagation = function() {
    $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this), this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$;
}, $JSCompiler_prototypeAlias$$.preventDefault = function() {
    $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
    var b = this.$event_$;
    if (b.preventDefault) b.preventDefault(); else if (b.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) try {
        if (b.ctrlKey || 112 <= b.keyCode && 123 >= b.keyCode) b.keyCode = -1;
    } catch (c) {}
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$events$BrowserEvent$$.$superClass_$.$disposeInternal$.call(this), this.relatedTarget = this.currentTarget = this.target = this.$event_$ = $JSCompiler_alias_NULL$$;
};

var $goog$events$Listener$counter_$$ = 0;

$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype, $JSCompiler_prototypeAlias$$.key = 0, $JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$init$ = function(b, c, d, e, f, g) {
    $goog$isFunction$$(b) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : b && b.handleEvent && $goog$isFunction$$(b.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument")), this.$listener$ = b, this.$proxy$ = c, this.src = d, this.type = e, this.capture = !!f, this.$handler$ = g, this.$callOnce$ = $JSCompiler_alias_FALSE$$, this.key = ++$goog$events$Listener$counter_$$, this.$removed$ = $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.handleEvent = function(b) {
    return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, b) : this.$listener$.handleEvent.call(this.$listener$, b);
};

var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};

$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$), $JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype, $JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function(b) {
    this.$parentEventTarget_$ = b;
}, $JSCompiler_prototypeAlias$$.addEventListener = function(b, c, d, e) {
    $goog$events$listen$$(this, b, c, d, e);
}, $JSCompiler_prototypeAlias$$.removeEventListener = function(b, c, d, e) {
    $goog$events$unlisten$$(this, b, c, d, e);
}, $JSCompiler_prototypeAlias$$.dispatchEvent = function(b) {
    var c = b.type || b, d = $goog$events$listenerTree_$$;
    if (c in d) {
        if ($goog$isString$$(b)) b = new $goog$events$Event$$(b, this); else if (b instanceof $goog$events$Event$$) b.target = b.target || this; else {
            var e = b, b = new $goog$events$Event$$(c, this);
            $goog$object$extend$$(b, e);
        }
        var e = 1, f, d = d[c], c = $JSCompiler_alias_TRUE$$ in d, g;
        if (c) {
            f = [];
            for (g = this; g; g = g.$parentEventTarget_$) f.push(g);
            g = d[$JSCompiler_alias_TRUE$$], g.$remaining_$ = g.$count_$;
            for (var h = f.length - 1; !b.$propagationStopped_$ && 0 <= h && g.$remaining_$; h--) b.currentTarget = f[h], e &= $goog$events$fireListeners_$$(g, f[h], b.type, $JSCompiler_alias_TRUE$$, b) && b.$returnValue_$ != $JSCompiler_alias_FALSE$$;
        }
        if ($JSCompiler_alias_FALSE$$ in d) if (g = d[$JSCompiler_alias_FALSE$$], g.$remaining_$ = g.$count_$, c) for (h = 0; !b.$propagationStopped_$ && h < f.length && g.$remaining_$; h++) b.currentTarget = f[h], e &= $goog$events$fireListeners_$$(g, f[h], b.type, $JSCompiler_alias_FALSE$$, b) && b.$returnValue_$ != $JSCompiler_alias_FALSE$$; else for (f = this; !b.$propagationStopped_$ && f && g.$remaining_$; f = f.$parentEventTarget_$) b.currentTarget = f, e &= $goog$events$fireListeners_$$(g, f, b.type, $JSCompiler_alias_FALSE$$, b) && b.$returnValue_$ != $JSCompiler_alias_FALSE$$;
        b = Boolean(e);
    } else b = $JSCompiler_alias_TRUE$$;
    return b;
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this), $goog$events$removeAll$$(this), this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
};

var $goog$Timer$defaultTimerObject$$ = $goog$global$$.window;

$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype, $JSCompiler_prototypeAlias$$.$count_$ = 0, $JSCompiler_prototypeAlias$$.$getValues$ = function() {
    $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
    for (var b = [], c = 0; c < this.$keys_$.length; c++) b.push(this.$map_$[this.$keys_$[c]]);
    return b;
}, $JSCompiler_prototypeAlias$$.$getKeys$ = function() {
    return $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), this.$keys_$.concat();
}, $JSCompiler_prototypeAlias$$.$containsKey$ = function(b) {
    return $goog$structs$Map$hasKey_$$(this.$map_$, b);
}, $JSCompiler_prototypeAlias$$.clear = function() {
    this.$map_$ = {}, this.$count_$ = this.$keys_$.length = 0;
}, $JSCompiler_prototypeAlias$$.remove = function(b) {
    return $goog$structs$Map$hasKey_$$(this.$map_$, b) ? (delete this.$map_$[b], this.$count_$--, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.get = function(b, c) {
    return $goog$structs$Map$hasKey_$$(this.$map_$, b) ? this.$map_$[b] : c;
}, $JSCompiler_prototypeAlias$$.set = function(b, c) {
    $goog$structs$Map$hasKey_$$(this.$map_$, b) || (this.$count_$++, this.$keys_$.push(b)), this.$map_$[b] = c;
}, $JSCompiler_prototypeAlias$$.$clone$ = function() {
    return new $goog$structs$Map$$(this);
};

var $goog$debug$fnNameCache_$$ = {};

$goog$debug$LogRecord$$.prototype.$exception_$ = $JSCompiler_alias_NULL$$, $goog$debug$LogRecord$$.prototype.$exceptionText_$ = $JSCompiler_alias_NULL$$;

var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;

$goog$debug$LogRecord$$.prototype.reset = function(b, c, d, e, f) {
    "number" == typeof f || $goog$debug$LogRecord$nextSequenceNumber_$$++, e || $goog$now$$(), this.$level_$ = b, this.$msg_$ = c, delete this.$exception_$, delete this.$exceptionText_$;
}, $goog$debug$LogRecord$$.prototype.$setLevel$ = function(b) {
    this.$level_$ = b;
}, $goog$debug$Logger$$.prototype.$parent_$ = $JSCompiler_alias_NULL$$, $goog$debug$Logger$$.prototype.$level_$ = $JSCompiler_alias_NULL$$, $goog$debug$Logger$$.prototype.$children_$ = $JSCompiler_alias_NULL$$, $goog$debug$Logger$$.prototype.$handlers_$ = $JSCompiler_alias_NULL$$, $goog$debug$Logger$Level$$.prototype.toString = $JSCompiler_get$$("name");

var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1e3), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500);

$JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype, $JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$"), $JSCompiler_prototypeAlias$$.$getChildren$ = function() {
    return this.$children_$ || (this.$children_$ = {}), this.$children_$;
}, $JSCompiler_prototypeAlias$$.$setLevel$ = function(b) {
    this.$level_$ = b;
}, $JSCompiler_prototypeAlias$$.log = function(b, c, d) {
    if (b.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
        b = this.$getLogRecord$(b, c, d), c = "log:" + b.$msg_$, $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp(c) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline(c)), $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark(c);
        for (c = this; c; ) {
            var d = c, e = b;
            if (d.$handlers_$) for (var f = 0, g = $JSCompiler_alias_VOID$$; g = d.$handlers_$[f]; f++) g(e);
            c = c.getParent();
        }
    }
}, $JSCompiler_prototypeAlias$$.$getLogRecord$ = function(b, c, d) {
    var e = new $goog$debug$LogRecord$$(b, "" + c, this.$name_$);
    if (d) {
        e.$exception_$ = d;
        var f, g = arguments.callee.caller;
        try {
            var h, i = $goog$getObjectByName$$("window.location.href");
            if ($goog$isString$$(d)) h = {
                message: d,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: i,
                stack: "Not available"
            }; else {
                var j, k, l = $JSCompiler_alias_FALSE$$;
                try {
                    j = d.lineNumber || d.$line$ || "Not available";
                } catch (m) {
                    j = "Not available", l = $JSCompiler_alias_TRUE$$;
                }
                try {
                    k = d.fileName || d.filename || d.sourceURL || i;
                } catch (n) {
                    k = "Not available", l = $JSCompiler_alias_TRUE$$;
                }
                h = l || !d.lineNumber || !d.fileName || !d.stack ? {
                    message: d.message,
                    name: d.name,
                    lineNumber: j,
                    fileName: k,
                    stack: d.stack || "Not available"
                } : d;
            }
            f = "Message: " + $goog$string$htmlEscape$$(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$(g) + "-> ");
        } catch (o) {
            f = "Exception trying to expose exception! You win, we lose. " + o;
        }
        e.$exceptionText_$ = f;
    }
    return e;
};

var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = $JSCompiler_alias_NULL$$;

$goog$net$XmlHttpFactory$$.prototype.$cachedOptions_$ = $JSCompiler_alias_NULL$$;

var $goog$net$XmlHttp$factory_$$;

$goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$), $goog$net$DefaultXmlHttpFactory$$.prototype.$ieProgId_$ = $JSCompiler_alias_NULL$$, $goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$;

var $goog$uri$utils$splitRe_$$ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

$goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$), $goog$net$XhrIo$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.net.XhrIo");

var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$sendInstances_$$ = [];

$JSCompiler_prototypeAlias$$ = $goog$net$XhrIo$$.prototype, $JSCompiler_prototypeAlias$$.$active_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$xhr_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$xhrOptions_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$lastUri_$ = "", $JSCompiler_prototypeAlias$$.$lastMethod_$ = "", $JSCompiler_prototypeAlias$$.$lastError_$ = "", $JSCompiler_prototypeAlias$$.$errorDispatched_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$inSend_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$inOpen_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$inAbort_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$timeoutInterval_$ = 0, $JSCompiler_prototypeAlias$$.$timeoutId_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$responseType_$ = "", $JSCompiler_prototypeAlias$$.$withCredentials_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.send = function(b, c, d, e) {
    this.$xhr_$ && $JSCompiler_alias_THROW$$(Error("[goog.net.XhrIo] Object is active with another request")), c = c ? c.toUpperCase() : "GET", this.$lastUri_$ = b, this.$lastError_$ = "", this.$lastMethod_$ = c, this.$errorDispatched_$ = $JSCompiler_alias_FALSE$$, this.$active_$ = $JSCompiler_alias_TRUE$$, this.$xhr_$ = this.$xmlHttpFactory_$ ? $JSCompiler_StaticMethods_createInstance$$(this.$xmlHttpFactory_$) : $JSCompiler_StaticMethods_createInstance$$($goog$net$XmlHttp$factory_$$), this.$xhrOptions_$ = this.$xmlHttpFactory_$ ? this.$xmlHttpFactory_$.$cachedOptions_$ || (this.$xmlHttpFactory_$.$cachedOptions_$ = $JSCompiler_StaticMethods_internalGetOptions$$(this.$xmlHttpFactory_$)) : $goog$net$XmlHttp$factory_$$.$cachedOptions_$ || ($goog$net$XmlHttp$factory_$$.$cachedOptions_$ = $JSCompiler_StaticMethods_internalGetOptions$$($goog$net$XmlHttp$factory_$$)), this.$xhr_$.onreadystatechange = $goog$bind$$(this.$onReadyStateChange_$, this);
    try {
        $JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Opening Xhr")), this.$inOpen_$ = $JSCompiler_alias_TRUE$$, this.$xhr_$.open(c, b, $JSCompiler_alias_TRUE$$), this.$inOpen_$ = $JSCompiler_alias_FALSE$$;
    } catch (f) {
        $JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Error opening Xhr: " + f.message)), $JSCompiler_StaticMethods_error_$$(this, f);
        return;
    }
    var b = d || "", g = this.headers.$clone$();
    e && $goog$structs$forEach$$(e, function(a, b) {
        g.set(b, a);
    }), "POST" == c && !g.$containsKey$("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), $goog$structs$forEach$$(g, function(a, b) {
        this.$xhr_$.setRequestHeader(b, a);
    }, this), this.$responseType_$ && (this.$xhr_$.responseType = this.$responseType_$), "withCredentials" in this.$xhr_$ && (this.$xhr_$.withCredentials = this.$withCredentials_$);
    try {
        this.$timeoutId_$ && ($goog$Timer$defaultTimerObject$$.clearTimeout(this.$timeoutId_$), this.$timeoutId_$ = $JSCompiler_alias_NULL$$), 0 < this.$timeoutInterval_$ && ($JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Will abort after " + this.$timeoutInterval_$ + "ms if incomplete")), this.$timeoutId_$ = $goog$Timer$defaultTimerObject$$.setTimeout($goog$bind$$(this.$timeout_$, this), this.$timeoutInterval_$)), $JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Sending request")), this.$inSend_$ = $JSCompiler_alias_TRUE$$, this.$xhr_$.send(b), this.$inSend_$ = $JSCompiler_alias_FALSE$$;
    } catch (h) {
        $JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Send error: " + h.message)), $JSCompiler_StaticMethods_error_$$(this, h);
    }
}, $JSCompiler_prototypeAlias$$.$timeout_$ = function() {
    "undefined" != typeof $goog$$ && this.$xhr_$ && (this.$lastError_$ = "Timed out after " + this.$timeoutInterval_$ + "ms, aborting", $JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, this.$lastError_$)), this.dispatchEvent("timeout"), this.abort(8));
}, $JSCompiler_prototypeAlias$$.abort = function() {
    this.$xhr_$ && this.$active_$ && ($JSCompiler_StaticMethods_fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Aborting")), this.$active_$ = $JSCompiler_alias_FALSE$$, this.$inAbort_$ = $JSCompiler_alias_TRUE$$, this.$xhr_$.abort(), this.$inAbort_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this));
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    this.$xhr_$ && (this.$active_$ && (this.$active_$ = $JSCompiler_alias_FALSE$$, this.$inAbort_$ = $JSCompiler_alias_TRUE$$, this.$xhr_$.abort(), this.$inAbort_$ = $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, $JSCompiler_alias_TRUE$$)), $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
}, $JSCompiler_prototypeAlias$$.$onReadyStateChange_$ = function() {
    !this.$inOpen_$ && !this.$inSend_$ && !this.$inAbort_$ ? this.$onReadyStateChangeEntryPoint_$() : $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
}, $JSCompiler_prototypeAlias$$.$onReadyStateChangeEntryPoint_$ = function() {
    $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
}, $JSCompiler_prototypeAlias$$.$isActive$ = function() {
    return !!this.$xhr_$;
}, $Server$$.prototype.get = function(b, c) {
    var d;
    d = "" + this.$serverUrl$ + b;
    try {
        return $goog$net$XhrIo$send$$(d, this.$callback_$(c));
    } catch (e) {
        return console.log(e);
    }
}, $Server$$.prototype.put = function(b, c, d) {
    return $goog$net$XhrIo$send$$("" + this.$serverUrl$ + b, this.$callback_$(c), "PUT", d, {
        "Content-Type": "application/json"
    });
}, $Server$$.prototype["delete"] = function(b, c) {
    return $goog$net$XhrIo$send$$("" + this.$serverUrl$ + b, this.$callback_$(c), "DELETE");
}, $Server$$.prototype.$callback_$ = function(b) {
    return function(a) {
        var c;
        c = a.target;
        var a = $JSCompiler_StaticMethods_getStatus$$(c), d;
        if (d = $goog$net$HttpStatus$isSuccess$$(a)) try {
            d = c.$xhr_$ ? c.$xhr_$.responseText : "";
        } catch (e) {
            $JSCompiler_StaticMethods_fine$$(c.$logger_$, "Can not get responseText: " + e.message), d = "";
        }
        return d ? (c = c.$xhr_$ ? $goog$json$parse$$(c.$xhr_$.responseText) : $JSCompiler_alias_VOID$$, b(c, a)) : (console.log("error getting result:" + a), b($JSCompiler_alias_NULL$$, a));
    };
}, $ContinuousServer$$.prototype.get = function(b, c, d) {
    var e;
    return e = this, this.$server_$.get(b, function(a, f) {
        return $JSCompiler_StaticMethods_onResult$$(e, b, c, d, a, f);
    });
};

var $goog$dom$defaultDomHelper_$$, $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();

!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$() || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");

var $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");

$goog$math$Coordinate$$.prototype.$clone$ = function() {
    return new $goog$math$Coordinate$$(this.x, this.y);
}, $goog$math$Size$$.prototype.$clone$ = function() {
    return new $goog$math$Size$$(this.width, this.height);
}, $goog$math$Size$$.prototype.floor = function() {
    return this.width = Math.floor(this.width), this.height = Math.floor(this.height), this;
}, $goog$math$Size$$.prototype.round = function() {
    return this.width = Math.round(this.width), this.height = Math.round(this.height), this;
};

var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
    maxlength: "maxLength",
    type: "type"
}, $goog$dom$TAGS_TO_IGNORE_$$ = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {
    IMG: " ",
    BR: "\n"
};

$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype, $JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$, $JSCompiler_prototypeAlias$$.$getElement$ = function(b) {
    return $goog$isString$$(b) ? this.$document_$.getElementById(b) : b;
}, $JSCompiler_prototypeAlias$$.$createDom$ = function(b, c, d) {
    var e = this.$document_$, f = arguments, g = f[0], h = f[1];
    if (!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && h && (h.name || h.type)) {
        g = [ "<", g ], h.name && g.push(' name="', $goog$string$htmlEscape$$(h.name), '"');
        if (h.type) {
            g.push(' type="', $goog$string$htmlEscape$$(h.type), '"');
            var i = {};
            $goog$object$extend$$(i, h), h = i, delete h.type;
        }
        g.push(">"), g = g.join("");
    }
    return g = e.createElement(g), h && ($goog$isString$$(h) ? g.className = h : $goog$isArray$$(h) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [ g ].concat(h)) : $goog$dom$setProperties$$(g, h)), 2 < f.length && $goog$dom$append_$$(e, g, f, 2), g;
}, $JSCompiler_prototypeAlias$$.createElement = function(b) {
    return this.$document_$.createElement(b);
}, $JSCompiler_prototypeAlias$$.createTextNode = function(b) {
    return this.$document_$.createTextNode(b);
}, $JSCompiler_prototypeAlias$$.appendChild = function(b, c) {
    b.appendChild(c);
}, $JSCompiler_prototypeAlias$$.append = $goog$dom$append$$, $JSCompiler_prototypeAlias$$.$removeChildren$ = $goog$dom$removeChildren$$, $JSCompiler_prototypeAlias$$.removeNode = $goog$dom$removeNode$$, $JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$, $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);

var $goog$soy$defaultTemplateData_$$ = {}, $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$;

($goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ = "ScriptEngine" in $goog$global$$ && "JScript" == $goog$global$$.ScriptEngine()) && ($goog$global$$.ScriptEngineMajorVersion(), $goog$global$$.ScriptEngineMinorVersion(), $goog$global$$.ScriptEngineBuildVersion()), $goog$string$StringBuffer$$.prototype.set = function(b) {
    this.clear(), this.append(b);
}, $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ ? ($goog$string$StringBuffer$$.prototype.$bufferLength_$ = 0, $goog$string$StringBuffer$$.prototype.append = function(b, c, d) {
    return c == $JSCompiler_alias_NULL$$ ? this.$buffer_$[this.$bufferLength_$++] = b : (this.$buffer_$.push.apply(this.$buffer_$, arguments), this.$bufferLength_$ = this.$buffer_$.length), this;
}) : $goog$string$StringBuffer$$.prototype.append = function(b, c, d) {
    this.$buffer_$ += b;
    if (c != $JSCompiler_alias_NULL$$) for (var e = 1; e < arguments.length; e++) this.$buffer_$ += arguments[e];
    return this;
}, $goog$string$StringBuffer$$.prototype.clear = function() {
    $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ ? this.$bufferLength_$ = this.$buffer_$.length = 0 : this.$buffer_$ = "";
}, $goog$string$StringBuffer$$.prototype.toString = function() {
    if ($goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$) {
        var b = this.$buffer_$.join("");
        return this.clear(), b && this.append(b), b;
    }
    return this.$buffer_$;
};

var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {
    "\0": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "	": "&#9;",
    "\n": "&#10;",
    "": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "?": "&#133;",
    "�": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
}, $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;

$entities$Studies$$.prototype.$studies$ = [];

var $g_form_fields$$;

$goog$math$Box$$.prototype.$clone$ = function() {
    return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left);
}, $goog$math$Box$$.prototype.contains = function(b) {
    return !this || !b ? $JSCompiler_alias_FALSE$$ : b instanceof $goog$math$Box$$ ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom;
}, $goog$math$Rect$$.prototype.$clone$ = function() {
    return new $goog$math$Rect$$(this.left, this.top, this.width, this.height);
}, $goog$math$Rect$$.prototype.contains = function(b) {
    return b instanceof $goog$math$Rect$$ ? this.left <= b.left && this.left + this.width >= b.left + b.width && this.top <= b.top && this.top + this.height >= b.top + b.height : b.x >= this.left && b.x <= this.left + this.width && b.y >= this.top && b.y <= this.top + this.height;
};

var $goog$style$unselectableStyle_$$ = $goog$userAgent$GECKO$$ ? "MozUserSelect" : $goog$userAgent$WEBKIT$$ ? "WebkitUserSelect" : $JSCompiler_alias_NULL$$, $goog$style$ieBorderWidthKeywords_$$ = {
    thin: 2,
    medium: 4,
    thick: 6
};

$goog$inherits$$($goog$events$KeyHandler$$, $goog$events$EventTarget$$), $JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype, $JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$keyPressKey_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$keyDownKey_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$keyUpKey_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$lastKey_$ = -1, $JSCompiler_prototypeAlias$$.$keyCode_$ = -1;

var $goog$events$KeyHandler$safariKey_$$ = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, $goog$events$KeyHandler$keyIdentifier_$$ = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}, $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$ = {
    61: 187,
    59: 186
}, $goog$events$KeyHandler$USES_KEYDOWN_$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525");

$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype, $JSCompiler_prototypeAlias$$.$handleKeyDown_$ = function(b) {
    $goog$userAgent$WEBKIT$$ && (17 == this.$lastKey_$ && !b.ctrlKey || 18 == this.$lastKey_$ && !b.altKey) && (this.$keyCode_$ = this.$lastKey_$ = -1), $goog$events$KeyHandler$USES_KEYDOWN_$$ && !$goog$events$KeyCodes$firesKeyPressEvent$$(b.keyCode, this.$lastKey_$, b.shiftKey, b.ctrlKey, b.altKey) ? this.handleEvent(b) : this.$keyCode_$ = $goog$userAgent$GECKO$$ && b.keyCode in $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$ ? $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$[b.keyCode] : b.keyCode;
}, $JSCompiler_prototypeAlias$$.$handleKeyup_$ = function() {
    this.$keyCode_$ = this.$lastKey_$ = -1;
}, $JSCompiler_prototypeAlias$$.handleEvent = function(b) {
    var c = b.$event_$, d, e;
    $goog$userAgent$IE$$ && "keypress" == b.type ? (d = this.$keyCode_$, e = 13 != d && 27 != d ? c.keyCode : 0) : $goog$userAgent$WEBKIT$$ && "keypress" == b.type ? (d = this.$keyCode_$, e = 0 <= c.charCode && 63232 > c.charCode && $goog$events$KeyCodes$isCharacterKey$$(d) ? c.charCode : 0) : $goog$userAgent$OPERA$$ ? (d = this.$keyCode_$, e = $goog$events$KeyCodes$isCharacterKey$$(d) ? c.keyCode : 0) : (d = c.keyCode || this.$keyCode_$, e = c.charCode || 0, $goog$userAgent$detectedMac_$$ && 63 == e && !d && (d = 191));
    var f = d, g = c.keyIdentifier;
    d ? 63232 <= d && d in $goog$events$KeyHandler$safariKey_$$ ? f = $goog$events$KeyHandler$safariKey_$$[d] : 25 == d && b.shiftKey && (f = 9) : g && g in $goog$events$KeyHandler$keyIdentifier_$$ && (f = $goog$events$KeyHandler$keyIdentifier_$$[g]), b = f == this.$lastKey_$, this.$lastKey_$ = f, c = new $goog$events$KeyEvent$$(f, e, b, c);
    try {
        this.dispatchEvent(c);
    } finally {
        c.$dispose$();
    }
}, $JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$"), $JSCompiler_prototypeAlias$$.detach = function() {
    this.$keyPressKey_$ && ($goog$events$unlistenByKey$$(this.$keyPressKey_$), $goog$events$unlistenByKey$$(this.$keyDownKey_$), $goog$events$unlistenByKey$$(this.$keyUpKey_$), this.$keyUpKey_$ = this.$keyDownKey_$ = this.$keyPressKey_$ = $JSCompiler_alias_NULL$$), this.$element_$ = $JSCompiler_alias_NULL$$, this.$keyCode_$ = this.$lastKey_$ = -1;
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$events$KeyHandler$$.$superClass_$.$disposeInternal$.call(this), this.detach();
}, $goog$inherits$$($goog$events$KeyEvent$$, $goog$events$BrowserEvent$$), $goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);

var $goog$events$EventHandler$typeArray_$$ = [];

$goog$events$EventHandler$$.prototype.$disposeInternal$ = function() {
    $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this), $JSCompiler_StaticMethods_removeAll$$(this);
}, $goog$events$EventHandler$$.prototype.handleEvent = function() {
    $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"));
}, $goog$addSingletonGetter$$($goog$ui$IdGenerator$$), $goog$ui$IdGenerator$$.prototype.$nextId_$ = 0, $goog$ui$IdGenerator$$.$getInstance$(), $goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$), $goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();

var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;

$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype, $JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$rightToLeft_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$"), $JSCompiler_prototypeAlias$$.$getHandler$ = function() {
    return this.$googUiComponentHandler_$ || (this.$googUiComponentHandler_$ = new $goog$events$EventHandler$$(this));
}, $JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$"), $JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function(b) {
    this.$parent_$ && this.$parent_$ != b && $JSCompiler_alias_THROW$$(Error("Method not supported")), $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, b);
}, $JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$"), $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    this.$element_$ = this.$dom_$.createElement("div");
}, $JSCompiler_prototypeAlias$$.$render$ = function(b) {
    $JSCompiler_StaticMethods_render_$$(this, b);
}, $JSCompiler_prototypeAlias$$.$decorate$ = function(b) {
    this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
    if (b && this.$canDecorate$(b)) {
        this.$wasDecorated_$ = $JSCompiler_alias_TRUE$$;
        if (!this.$dom_$ || this.$dom_$.$document_$ != $goog$dom$getOwnerDocument$$(b)) this.$dom_$ = $goog$dom$getDomHelper$$(b);
        this.$decorateInternal$(b), this.$enterDocument$();
    } else $JSCompiler_alias_THROW$$(Error("Invalid element to decorate"));
}, $JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$), $JSCompiler_prototypeAlias$$.$decorateInternal$ = function(b) {
    this.$element_$ = b;
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    this.$inDocument_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
        !a.$inDocument_$ && a.$getElement$() && a.$enterDocument$();
    });
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
        a.$inDocument_$ && a.$exitDocument$();
    }), this.$googUiComponentHandler_$ && $JSCompiler_StaticMethods_removeAll$$(this.$googUiComponentHandler_$), this.$inDocument_$ = $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this), this.$inDocument_$ && this.$exitDocument$(), this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$), $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
        a.$dispose$();
    }), !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$), this.$parent_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$addChildAt$ = function(b, c, d) {
    b.$inDocument_$ && (d || !this.$inDocument_$) && $JSCompiler_alias_THROW$$(Error("Component already rendered")), (0 > c || c > $JSCompiler_StaticMethods_getChildCount$$(this)) && $JSCompiler_alias_THROW$$(Error("Child component index out of bounds"));
    if (!this.$childIndex_$ || !this.$children_$) this.$childIndex_$ = {}, this.$children_$ = [];
    b.getParent() == this ? (this.$childIndex_$[$JSCompiler_StaticMethods_getId$$(b)] = b, $goog$array$remove$$(this.$children_$, b)) : $goog$object$add$$(this.$childIndex_$, $JSCompiler_StaticMethods_getId$$(b), b), $JSCompiler_StaticMethods_setParent$$(b, this), $goog$array$splice$$(this.$children_$, c, 0, b), b.$inDocument_$ && this.$inDocument_$ && b.getParent() == this ? (d = this.$getContentElement$(), d.insertBefore(b.$getElement$(), d.childNodes[c] || $JSCompiler_alias_NULL$$)) : d ? (this.$element_$ || this.$createDom$(), c = $JSCompiler_StaticMethods_getChildAt$$(this, c + 1), $JSCompiler_StaticMethods_render_$$(b, this.$getContentElement$(), c ? c.$element_$ : $JSCompiler_alias_NULL$$)) : this.$inDocument_$ && !b.$inDocument_$ && b.$element_$ && b.$enterDocument$();
}, $JSCompiler_prototypeAlias$$.$getContentElement$ = $JSCompiler_get$$("$element_$"), $JSCompiler_prototypeAlias$$.$setRightToLeft$ = function(b) {
    this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered")), this.$rightToLeft_$ = b;
}, $JSCompiler_prototypeAlias$$.removeChild = function(b, c) {
    if (b) {
        var d = $goog$isString$$(b) ? b : $JSCompiler_StaticMethods_getId$$(b), b = this.$childIndex_$ && d ? (d in this.$childIndex_$ ? this.$childIndex_$[d] : $JSCompiler_alias_VOID$$) || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
        if (d && b) {
            var e = this.$childIndex_$;
            d in e && delete e[d], $goog$array$remove$$(this.$children_$, b), c && (b.$exitDocument$(), b.$element_$ && $goog$dom$removeNode$$(b.$element_$)), $JSCompiler_StaticMethods_setParent$$(b, $JSCompiler_alias_NULL$$);
        }
    }
    return b || $JSCompiler_alias_THROW$$(Error("Child is not in parent component")), b;
}, $JSCompiler_prototypeAlias$$.$removeChildren$ = function(b) {
    for (; $JSCompiler_StaticMethods_hasChildren$$(this); ) this.removeChild($JSCompiler_StaticMethods_getChildAt$$(this, 0), b);
};

var $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$;

$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$), $JSCompiler_prototypeAlias$$ = $goog$ui$ControlRenderer$$.prototype, $JSCompiler_prototypeAlias$$.$createDom$ = function(b) {
    var c = b.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_getClassNames$$(this, b).join(" "), b.$content_$);
    return $JSCompiler_StaticMethods_setAriaStates$$(this, b, c), c;
}, $JSCompiler_prototypeAlias$$.$getContentElement$ = function(b) {
    return b;
}, $JSCompiler_prototypeAlias$$.$enableClassName$ = function(b, c, d) {
    if (b = b.$getElement$ ? b.$getElement$() : b) if ($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
        var e = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($goog$dom$classes$get$$(b), c);
        e.push(c), $goog$partial$$(d ? $goog$dom$classes$add$$ : $goog$dom$classes$remove$$, b).apply($JSCompiler_alias_NULL$$, e);
    } else d ? $goog$dom$classes$add$$(b, c) : $goog$dom$classes$remove$$(b, c);
}, $JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$), $JSCompiler_prototypeAlias$$.$decorate$ = function(b, c) {
    c.id && $JSCompiler_StaticMethods_setId$$(b, c.id);
    var d = this.$getContentElement$(c);
    d && d.firstChild ? $JSCompiler_StaticMethods_setContentInternal$$(b, d.firstChild.nextSibling ? $goog$array$clone$$(d.childNodes) : d.firstChild) : b.$content_$ = $JSCompiler_alias_NULL$$;
    var e = 0, f = this.$getCssClass$(), g = this.$getCssClass$(), h = $JSCompiler_alias_FALSE$$, i = $JSCompiler_alias_FALSE$$, d = $JSCompiler_alias_FALSE$$, j = $goog$dom$classes$get$$(c);
    $goog$array$forEach$$(j, function(a) {
        if (!h && a == f) h = $JSCompiler_alias_TRUE$$, g == f && (i = $JSCompiler_alias_TRUE$$); else if (!i && a == g) i = $JSCompiler_alias_TRUE$$; else {
            var b = e;
            if (!this.$stateByClass_$) {
                this.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$(this);
                var c = this.$classByState_$, d = {}, j;
                for (j in c) d[c[j]] = j;
                this.$stateByClass_$ = d;
            }
            a = parseInt(this.$stateByClass_$[a], 10), e = b | (isNaN(a) ? 0 : a);
        }
    }, this), b.$state_$ = e, h || (j.push(f), g == f && (i = $JSCompiler_alias_TRUE$$)), i || j.push(g);
    var k = b.$extraClassNames_$;
    k && j.push.apply(j, k);
    if ($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
        var l = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$(j);
        0 < l.length && (j.push.apply(j, l), d = $JSCompiler_alias_TRUE$$);
    }
    if (!h || !i || k || d) c.className = j.join(" ");
    return $JSCompiler_StaticMethods_setAriaStates$$(this, b, c), c;
}, $JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function(b, c) {
    var d = !c, e = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ ? b.getElementsByTagName("*") : $JSCompiler_alias_NULL$$;
    if ($goog$style$unselectableStyle_$$) {
        if (d = d ? "none" : "", b.style[$goog$style$unselectableStyle_$$] = d, e) for (var f = 0, g; g = e[f]; f++) g.style[$goog$style$unselectableStyle_$$] = d;
    } else if ($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) if (d = d ? "on" : "", b.setAttribute("unselectable", d), e) for (f = 0; g = e[f]; f++) g.setAttribute("unselectable", d);
}, $JSCompiler_prototypeAlias$$.$setRightToLeft$ = function(b, c) {
    this.$enableClassName$(b, this.$getCssClass$() + "-rtl", c);
}, $JSCompiler_prototypeAlias$$.$isFocusable$ = function(b) {
    var c;
    return b.$supportedStates_$ & 32 && (c = b.$getKeyEventTarget$()) ? $goog$dom$isFocusableTabIndex$$(c) : $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.$setFocusable$ = function(b, c) {
    var d;
    if (b.$supportedStates_$ & 32 && (d = b.$getKeyEventTarget$())) {
        if (!c && b.$state_$ & 32) {
            try {
                d.blur();
            } catch (e) {}
            b.$state_$ & 32 && b.$handleBlur$();
        }
        $goog$dom$isFocusableTabIndex$$(d) != c && $goog$dom$setFocusableTabIndex$$(d, c);
    }
}, $JSCompiler_prototypeAlias$$.$setVisible$ = function(b, c) {
    $goog$style$showElement$$(b, c);
}, $JSCompiler_prototypeAlias$$.$setState$ = function(b, c, d) {
    var e = b.$getElement$();
    if (e) {
        var f = $JSCompiler_StaticMethods_getClassForState$$(this, c);
        f && this.$enableClassName$(b, f, d), this.$updateAriaState$(e, c, d);
    }
}, $JSCompiler_prototypeAlias$$.$updateAriaState$ = function(b, c, d) {
    $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ || ($goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    }), (c = $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$[c]) && $goog$dom$a11y$setState$$(b, c, d);
}, $JSCompiler_prototypeAlias$$.$setContent$ = function(b, c) {
    var d = this.$getContentElement$(b);
    if (d && ($goog$dom$removeChildren$$(d), c)) if ($goog$isString$$(c)) $goog$dom$setTextContent$$(d, c); else {
        var e = function(b) {
            if (b) {
                var c = $goog$dom$getOwnerDocument$$(d);
                d.appendChild($goog$isString$$(b) ? c.createTextNode(b) : b);
            }
        };
        $goog$isArray$$(c) ? $goog$array$forEach$$(c, e) : !$goog$isArrayLike$$(c) || "nodeType" in c ? e(c) : $goog$array$forEach$$($goog$array$clone$$(c), e);
    }
}, $JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function(b) {
    return b.$getElement$();
}, $JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-control");

var $goog$ui$registry$defaultRenderers_$$ = {};

$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$), $JSCompiler_prototypeAlias$$ = $goog$ui$Control$$.prototype, $JSCompiler_prototypeAlias$$.$content_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$state_$ = 0, $JSCompiler_prototypeAlias$$.$supportedStates_$ = 39, $JSCompiler_prototypeAlias$$.$autoStates_$ = 255, $JSCompiler_prototypeAlias$$.$statesWithTransitionEvents_$ = 0, $JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$extraClassNames_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$handleMouseEvents_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$allowTextSelection_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function() {
    return this.$renderer_$.$getKeyEventTarget$(this);
}, $JSCompiler_prototypeAlias$$.$enableClassName$ = function(b, c) {
    c ? b && (this.$extraClassNames_$ ? $goog$array$contains$$(this.$extraClassNames_$, b) || this.$extraClassNames_$.push(b) : this.$extraClassNames_$ = [ b ], this.$renderer_$.$enableClassName$(this, b, $JSCompiler_alias_TRUE$$)) : b && this.$extraClassNames_$ && ($goog$array$remove$$(this.$extraClassNames_$, b), 0 == this.$extraClassNames_$.length && (this.$extraClassNames_$ = $JSCompiler_alias_NULL$$), this.$renderer_$.$enableClassName$(this, b, $JSCompiler_alias_FALSE$$));
}, $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    var b = this.$renderer_$.$createDom$(this);
    this.$element_$ = b;
    var c = this.$preferredAriaRole_$ || $JSCompiler_alias_VOID$$;
    c && $goog$dom$a11y$setRole$$(b, c), this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$(b, $JSCompiler_alias_FALSE$$), this.$visible_$ || this.$renderer_$.$setVisible$(b, $JSCompiler_alias_FALSE$$);
}, $JSCompiler_prototypeAlias$$.$getContentElement$ = function() {
    return this.$renderer_$.$getContentElement$(this.$getElement$());
}, $JSCompiler_prototypeAlias$$.$canDecorate$ = function(b) {
    return this.$renderer_$.$canDecorate$(b);
}, $JSCompiler_prototypeAlias$$.$decorateInternal$ = function(b) {
    this.$element_$ = b = this.$renderer_$.$decorate$(this, b);
    var c = this.$preferredAriaRole_$ || $JSCompiler_alias_VOID$$;
    c && $goog$dom$a11y$setRole$$(b, c), this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$(b, $JSCompiler_alias_FALSE$$), this.$visible_$ = "none" != b.style.display;
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    $goog$ui$Control$$.$superClass_$.$enterDocument$.call(this);
    var b = this.$renderer_$;
    $JSCompiler_StaticMethods_isRightToLeft$$(this) && b.$setRightToLeft$(this.$getElement$(), $JSCompiler_alias_TRUE$$), this.isEnabled() && b.$setFocusable$(this, this.$visible_$);
    if (this.$supportedStates_$ & -2 && (this.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(this, $JSCompiler_alias_TRUE$$), this.$supportedStates_$ & 32 && (b = this.$getKeyEventTarget$()))) {
        var c = this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$);
        $JSCompiler_StaticMethods_attach$$(c, b), $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), c, "key", this.$handleKeyEvent$), b, "focus", this.$handleFocus$), b, "blur", this.$handleBlur$);
    }
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    $goog$ui$Control$$.$superClass_$.$exitDocument$.call(this), this.$keyHandler_$ && this.$keyHandler_$.detach(), this.$visible_$ && this.isEnabled() && this.$renderer_$.$setFocusable$(this, $JSCompiler_alias_FALSE$$);
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$ui$Control$$.$superClass_$.$disposeInternal$.call(this), this.$keyHandler_$ && (this.$keyHandler_$.$dispose$(), delete this.$keyHandler_$), delete this.$renderer_$, this.$extraClassNames_$ = this.$content_$ = $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$setContent$ = function(b) {
    this.$renderer_$.$setContent$(this.$getElement$(), b), this.$content_$ = b;
}, $JSCompiler_prototypeAlias$$.$setRightToLeft$ = function(b) {
    $goog$ui$Control$$.$superClass_$.$setRightToLeft$.call(this, b);
    var c = this.$getElement$();
    c && this.$renderer_$.$setRightToLeft$(c, b);
}, $JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function(b) {
    this.$allowTextSelection_$ = b;
    var c = this.$getElement$();
    c && this.$renderer_$.$setAllowTextSelection$(c, b);
}, $JSCompiler_prototypeAlias$$.$setVisible$ = function(b, c) {
    if (c || this.$visible_$ != b && this.dispatchEvent(b ? "show" : "hide")) {
        var d = this.$getElement$();
        return d && this.$renderer_$.$setVisible$(d, b), this.isEnabled() && this.$renderer_$.$setFocusable$(this, b), this.$visible_$ = b, $JSCompiler_alias_TRUE$$;
    }
    return $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.isEnabled = function() {
    return !(this.$state_$ & 1);
}, $JSCompiler_prototypeAlias$$.$isActive$ = function() {
    return !!(this.$state_$ & 4);
}, $JSCompiler_prototypeAlias$$.setActive = function(b) {
    $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 4, b) && this.$setState$(4, b);
}, $JSCompiler_prototypeAlias$$.$isSelected$ = function() {
    return !!(this.$state_$ & 8);
}, $JSCompiler_prototypeAlias$$.$setState$ = function(b, c) {
    this.$supportedStates_$ & b && c != !!(this.$state_$ & b) && (this.$renderer_$.$setState$(this, b, c), this.$state_$ = c ? this.$state_$ | b : this.$state_$ & ~b);
}, $JSCompiler_prototypeAlias$$.$handleMouseOver$ = function(b) {
    !$goog$ui$Control$isMouseEventWithinElement_$$(b, this.$getElement$()) && this.dispatchEvent("enter") && this.isEnabled() && $JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$);
}, $JSCompiler_prototypeAlias$$.$handleMouseOut$ = function(b) {
    !$goog$ui$Control$isMouseEventWithinElement_$$(b, this.$getElement$()) && this.dispatchEvent("leave") && ($JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$));
}, $JSCompiler_prototypeAlias$$.$handleMouseDown$ = function(b) {
    this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_isMouseActionButton$$(b) && ($JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_TRUE$$), this.$renderer_$.$isFocusable$(this) && this.$getKeyEventTarget$().focus())), !this.$allowTextSelection_$ && $JSCompiler_StaticMethods_isMouseActionButton$$(b) && b.preventDefault();
}, $JSCompiler_prototypeAlias$$.$handleMouseUp$ = function(b) {
    this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), this.$isActive$() && $JSCompiler_StaticMethods_performActionInternal$$(this, b) && $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$));
}, $JSCompiler_prototypeAlias$$.$handleDblClick$ = function(b) {
    this.isEnabled() && $JSCompiler_StaticMethods_performActionInternal$$(this, b);
}, $JSCompiler_prototypeAlias$$.$handleFocus$ = function() {
    $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_TRUE$$) && this.$setState$(32, $JSCompiler_alias_TRUE$$);
}, $JSCompiler_prototypeAlias$$.$handleBlur$ = function() {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_FALSE$$) && this.$setState$(32, $JSCompiler_alias_FALSE$$);
}, $JSCompiler_prototypeAlias$$.$handleKeyEvent$ = function(b) {
    return this.$visible_$ && this.isEnabled() && 13 == b.keyCode && $JSCompiler_StaticMethods_performActionInternal$$(this, b) ? (b.preventDefault(), b.stopPropagation(), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$;
}, $goog$isFunction$$($goog$ui$Control$$) || $JSCompiler_alias_THROW$$(Error("Invalid component class " + $goog$ui$Control$$)), $goog$isFunction$$($goog$ui$ControlRenderer$$) || $JSCompiler_alias_THROW$$(Error("Invalid renderer class " + $goog$ui$ControlRenderer$$));

var $key$$inline_334$$ = $goog$getUid$$($goog$ui$Control$$);

$goog$ui$registry$defaultRenderers_$$[$key$$inline_334$$] = $goog$ui$ControlRenderer$$, $goog$isFunction$$($decoratorFn$$inline_336$$) || $JSCompiler_alias_THROW$$(Error("Invalid decorator function " + $decoratorFn$$inline_336$$)), $goog$inherits$$($goog$ui$TextareaRenderer$$, $goog$ui$ControlRenderer$$), $goog$addSingletonGetter$$($goog$ui$TextareaRenderer$$), $JSCompiler_prototypeAlias$$ = $goog$ui$TextareaRenderer$$.prototype, $JSCompiler_prototypeAlias$$.$decorate$ = function(b, c) {
    return $goog$ui$TextareaRenderer$$.$superClass_$.$decorate$.call(this, b, c), b.$setContent$(c.value), c;
}, $JSCompiler_prototypeAlias$$.$createDom$ = function(b) {
    return $JSCompiler_StaticMethods_setHandleMouseEvents$$(b), b.$autoStates_$ &= -256, b.$inDocument_$ && b.$state_$ & 32 && $JSCompiler_alias_THROW$$(Error("Component already rendered")), b.$state_$ & 32 && b.$setState$(32, $JSCompiler_alias_FALSE$$), b.$supportedStates_$ &= -33, b.$getDomHelper$().$createDom$("textarea", {
        "class": $JSCompiler_StaticMethods_getClassNames$$(this, b).join(" "),
        disabled: !b.isEnabled()
    }, b.$content_$ || "");
}, $JSCompiler_prototypeAlias$$.$canDecorate$ = function(b) {
    return "TEXTAREA" == b.tagName;
}, $JSCompiler_prototypeAlias$$.$setRightToLeft$ = $goog$nullFunction$$, $JSCompiler_prototypeAlias$$.$isFocusable$ = function(b) {
    return b.isEnabled();
}, $JSCompiler_prototypeAlias$$.$setFocusable$ = $goog$nullFunction$$, $JSCompiler_prototypeAlias$$.$setState$ = function(b, c, d) {
    $goog$ui$TextareaRenderer$$.$superClass_$.$setState$.call(this, b, c, d), (b = b.$getElement$()) && 1 == c && (b.disabled = d);
}, $JSCompiler_prototypeAlias$$.$updateAriaState$ = $goog$nullFunction$$, $JSCompiler_prototypeAlias$$.$setContent$ = function(b, c) {
    b && (b.value = c);
}, $JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-textarea"), $goog$inherits$$($goog$ui$Textarea$$, $goog$ui$Control$$);

var $goog$ui$Textarea$NEEDS_HELP_SHRINKING_$$ = $goog$userAgent$GECKO$$ || $goog$userAgent$WEBKIT$$;

$JSCompiler_prototypeAlias$$ = $goog$ui$Textarea$$.prototype, $JSCompiler_prototypeAlias$$.$isResizing_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$height_$ = 0, $JSCompiler_prototypeAlias$$.$maxHeight_$ = 0, $JSCompiler_prototypeAlias$$.$minHeight_$ = 0, $JSCompiler_prototypeAlias$$.$hasDiscoveredTextareaCharacteristics_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$needsPaddingBorderFix_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$scrollHeightIncludesPadding_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$scrollHeightIncludesBorder_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$setContent$ = function(b) {
    $goog$ui$Textarea$$.$superClass_$.$setContent$.call(this, b), $JSCompiler_StaticMethods_resize$$(this);
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    var b = this.$getElement$();
    $goog$style$setStyle$$(b, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box"
    });
    var c;
    if ($goog$userAgent$IE$$) {
        c = $goog$style$getIePixelValue_$$(b, $goog$style$getCascadedStyle$$(b, "paddingLeft"));
        var d = $goog$style$getIePixelValue_$$(b, $goog$style$getCascadedStyle$$(b, "paddingRight")), e = $goog$style$getIePixelValue_$$(b, $goog$style$getCascadedStyle$$(b, "paddingTop")), f = $goog$style$getIePixelValue_$$(b, $goog$style$getCascadedStyle$$(b, "paddingBottom"));
        c = new $goog$math$Box$$(e, d, f, c);
    } else c = $goog$style$getComputedStyle$$(b, "paddingLeft"), d = $goog$style$getComputedStyle$$(b, "paddingRight"), e = $goog$style$getComputedStyle$$(b, "paddingTop"), f = $goog$style$getComputedStyle$$(b, "paddingBottom"), c = new $goog$math$Box$$(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c));
    this.$paddingBox_$ = c, this.$borderBox_$ = $goog$style$getBorderBox$$(b), $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), b, "scroll", this.$grow_$), b, "focus", this.$grow_$), b, "keyup", this.$grow_$), b, "mouseup", this.$mouseUpListener_$), $JSCompiler_StaticMethods_resize$$(this);
}, $JSCompiler_prototypeAlias$$.$grow_$ = function() {
    if (!this.$isResizing_$) {
        var b = $JSCompiler_alias_FALSE$$;
        this.$isResizing_$ = $JSCompiler_alias_TRUE$$;
        var c = this.$getElement$();
        if (c.scrollHeight) {
            var d = $JSCompiler_alias_FALSE$$, e = $JSCompiler_alias_FALSE$$, f = $JSCompiler_StaticMethods_getHeight_$$(this), g = c.offsetHeight, h = $JSCompiler_StaticMethods_getMinHeight_$$(this), i = $JSCompiler_StaticMethods_getMaxHeight_$$(this);
            h && f < h ? ($JSCompiler_StaticMethods_setHeight_$$(this, h), d = $JSCompiler_alias_TRUE$$) : i && f > i ? ($JSCompiler_StaticMethods_setHeight_$$(this, i), c.style.overflowY = "", e = $JSCompiler_alias_TRUE$$) : g != f ? $JSCompiler_StaticMethods_setHeight_$$(this, f) : this.$height_$ || (this.$height_$ = f), !d && !e && $goog$ui$Textarea$NEEDS_HELP_SHRINKING_$$ && (b = $JSCompiler_alias_TRUE$$);
        } else $JSCompiler_StaticMethods_setHeightToEstimate_$$(this);
        this.$isResizing_$ = $JSCompiler_alias_FALSE$$, b && (b = this.$getElement$(), this.$isResizing_$ || (this.$isResizing_$ = $JSCompiler_alias_TRUE$$, c = $JSCompiler_alias_FALSE$$, b.value || (b.value = " ", c = $JSCompiler_alias_TRUE$$), (e = b.scrollHeight) ? (f = $JSCompiler_StaticMethods_getHeight_$$(this), d = $JSCompiler_StaticMethods_getMinHeight_$$(this), g = $JSCompiler_StaticMethods_getMaxHeight_$$(this), !(d && f <= d) && !(g && f >= g) && (g = this.$paddingBox_$, b.style.paddingBottom = g.bottom + 1 + "px", $JSCompiler_StaticMethods_getHeight_$$(this) == f && (b.style.paddingBottom = g.bottom + e + "px", b.scrollTop = 0, e = $JSCompiler_StaticMethods_getHeight_$$(this) - e, e >= d ? $JSCompiler_StaticMethods_setHeight_$$(this, e) : $JSCompiler_StaticMethods_setHeight_$$(this, d)), b.style.paddingBottom = g.bottom + "px")) : $JSCompiler_StaticMethods_setHeightToEstimate_$$(this), c && (b.value = ""), this.$isResizing_$ = $JSCompiler_alias_FALSE$$));
    }
}, $JSCompiler_prototypeAlias$$.$mouseUpListener_$ = function() {
    var b = this.$getElement$(), c = b.offsetHeight;
    b.filters && b.filters.length && (b = b.filters.item("DXImageTransform.Microsoft.DropShadow")) && (c -= b.offX), c != this.$height_$ && (this.$height_$ = this.$minHeight_$ = c);
}, $goog$inherits$$($curaapp$Textarea$$, $goog$ui$Textarea$$), $JSCompiler_prototypeAlias$$ = $curaapp$Textarea$$.prototype, $JSCompiler_prototypeAlias$$.$initEvents$ = function() {
    return $goog$events$listen$$(this.$getElement$(), "input", this.$convertText$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$(window, "resize", this.$resetHeight$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("getJsonBtn"), "click", this.$parseValuesAsJson$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("loadJsonBtn"), "click", this.$loadTestData$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("toggleEditableBtn"), "click", this.$toggleEditableFields$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("saveFormBtn"), "click", this.$saveForm$, $JSCompiler_alias_TRUE$$, this);
}, $JSCompiler_prototypeAlias$$.$convertText$ = function() {
    var b;
    b = this.$getElement$().value;
    var c = this.$common$ = new $Common$$;
    return b = b.replace(/^\/\/[^\n]*/gm, "\n"), b = b.replace(/&/gm, "&amp;"), b = b.replace(/</gm, "&lt;"), b = b.replace(/>/gm, "&gt;"), b = b.replace(/~/g, "~T"), b = b.replace(/\$/g, "~D"), b = b.replace(/\r\n/g, "\n"), b = b.replace(/\r/g, "\n"), b = b.replace(/\n{3,}/g, "\n\n"), b = ("\n\n" + b + "\n\n").replace(/^[ \t]+$/mg, ""), b = $JSCompiler_StaticMethods_readNumberInputFields$$(b), b = $JSCompiler_StaticMethods_readDateInputFields$$(b), b = $JSCompiler_StaticMethods_readCombosDefinitions$$(b), b = $JSCompiler_StaticMethods_readDefinitions$$(b), b = $JSCompiler_StaticMethods_readTextAreas$$(b), b = $JSCompiler_StaticMethods_readSummaryFields$$(c, b), b = $JSCompiler_StaticMethods_readFieldsBlocks$$(c, b), b = $JSCompiler_StaticMethods_doHeaders$$(b), b = $JSCompiler_StaticMethods_readTextInputFields$$(c, b), b = $JSCompiler_StaticMethods_readInlineTextInputFields$$(c, b), b = $JSCompiler_StaticMethods_setDependencies$$(b), b = this.converter.makeHtml(b), $goog$dom$getElement$$(this.$outputPaneId$).innerHTML = '<form id="output-form">\n' + b + "</form>\n";
}, $JSCompiler_prototypeAlias$$.$loadFormDescription$ = function(b) {
    return this.$convertText$(), this.$currentForm$ = b.currentTarget.$selectedItem_$.attributes;
}, $JSCompiler_prototypeAlias$$.$resetHeight$ = function() {
    var b;
    this.$minHeight_$ = b = $JSCompiler_StaticMethods_getWindowHeight$$() - 130, $JSCompiler_StaticMethods_resize$$(this), this.$maxHeight_$ = b, $JSCompiler_StaticMethods_resize$$(this), $goog$dom$getElement$$(this.$outputPaneId$).style.height = $goog$style$getPixelStyleValue_$$(b, $JSCompiler_alias_TRUE$$);
}, $JSCompiler_prototypeAlias$$.$parseValuesAsJson$ = function() {
    var b, c, d, e, f, g, h, i;
    c = $goog$dom$getElement$$("output-form"), d = c.getElementsByTagName("input"), f = c.getElementsByTagName("select"), g = c.getElementsByTagName("textarea"), e = {};
    for (h = 0, i = f.length; h < i; h++) c = f[h], b = isNaN(c.value) ? c.value : Number(c.value), c.name && (e[c.name] = b);
    for (b = 0, f = g.length; b < f; b++) c = g[b], c.name && (e[c.name] = c.value);
    for (g = 0, f = d.length; g < f; g++) if (c = d[g], c.name && (b = isNaN(c.value) ? c.value : Number(c.value), "checkbox" !== c.type && "radio" !== c.type || c.checked)) e[c.name] = b;
    return alert(JSON.stringify(e, $JSCompiler_alias_NULL$$, "	"));
}, $JSCompiler_prototypeAlias$$.$toggleEditableFields$ = function() {
    var b, c, d, e, f, g;
    b = $goog$dom$getElement$$("output-form"), c = b.getElementsByTagName("input"), d = b.getElementsByTagName("select"), e = b.getElementsByTagName("textarea");
    for (f = 0, g = c.length; f < g; f++) b = c[f], b.name && this.$setReadOnly$(b);
    for (c = 0, f = d.length; c < f; c++) b = d[c], b.name && this.$setReadOnly$(b);
    f = [];
    for (d = 0, c = e.length; d < c; d++) b = e[d], b.name && f.push(this.$setReadOnly$(b));
    return f;
}, $JSCompiler_prototypeAlias$$.$setReadOnly$ = function(b) {
    var c = !$goog$array$contains$$($goog$dom$classes$get$$(b), "readOnlyInput");
    c ? $goog$dom$classes$add$$(b, "readOnlyInput") : $goog$dom$classes$remove$$(b, "readOnlyInput");
    if (c) return b.setAttribute("readonly", "readonly");
}, $JSCompiler_prototypeAlias$$.$saveForm$ = function() {
    var b;
    if (this.$currentForm$) return b = new $Server$$("" + $app$Settings$SERVER_URL$$()), b.put("/forms" + this.$currentForm$.uri, $JSCompiler_StaticMethods_saveFormResponseHandler_$$(), JSON.stringify({
        content: this.$getElement$().value
    }));
}, $JSCompiler_prototypeAlias$$.$loadTestData$ = function() {
    return $("#output-form").populate({
        $mrmrainline$: "8",
        $mrmra$: "1",
        $mrdif$: "1",
        $mrdsei$: "3",
        $mrsaspa1d$: "4",
        $mrinft$: "2",
        $mrdant$: "1",
        $mrdpos$: "8",
        $mrflai$: "9",
        $mrfmik$: "0",
        $mrftea$: "1",
        $mrfcom$: "test kommentar",
        $hauch$: "bla bla",
        $mrdifnuminline$: "138",
        $Geburtsdatum$: "10.10.1980",
        $mrdifnum$: "10",
        $mrdvol$: "4",
        $mrfwfr$: "23",
        $mrfwpr$: "111",
        $mrfwtr$: "1",
        $mrfwbr$: "3",
        $mrfwir$: "5",
        $mrfwsr$: "143",
        $mrfwfl$: "4",
        $mrfwpl$: "88",
        $mrfwtl$: "44",
        $mrfwbl$: "33",
        $mrfwil$: "55",
        $mrfwsl$: "224"
    });
}, $goog$inherits$$($goog$fx$Dragger$$, $goog$events$EventTarget$$);

var $goog$fx$Dragger$HAS_SET_CAPTURE_$$ = $goog$userAgent$IE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.3");

$JSCompiler_prototypeAlias$$ = $goog$fx$Dragger$$.prototype, $JSCompiler_prototypeAlias$$.clientX = 0, $JSCompiler_prototypeAlias$$.clientY = 0, $JSCompiler_prototypeAlias$$.screenX = 0, $JSCompiler_prototypeAlias$$.screenY = 0, $JSCompiler_prototypeAlias$$.$startX$ = 0, $JSCompiler_prototypeAlias$$.$startY$ = 0, $JSCompiler_prototypeAlias$$.$deltaX$ = 0, $JSCompiler_prototypeAlias$$.$deltaY$ = 0, $JSCompiler_prototypeAlias$$.$enabled_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$dragging_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$hysteresisDistanceSquared_$ = 0, $JSCompiler_prototypeAlias$$.$ieDragStartCancellingOn_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$getHandler$ = $JSCompiler_get$$("$eventHandler_$"), $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$fx$Dragger$$.$superClass_$.$disposeInternal$.call(this), $goog$events$unlisten$$(this.handle, [ "touchstart", "mousedown" ], this.$startDrag$, $JSCompiler_alias_FALSE$$, this), this.$eventHandler_$.$dispose$(), delete this.target, delete this.handle, delete this.$eventHandler_$;
}, $JSCompiler_prototypeAlias$$.$startDrag$ = function(b) {
    var c = "mousedown" == b.type;
    if (this.$enabled_$ && !this.$dragging_$ && (!c || $JSCompiler_StaticMethods_isMouseActionButton$$(b))) {
        $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$(b);
        if (0 == this.$hysteresisDistanceSquared_$) {
            if ($JSCompiler_StaticMethods_initializeDrag_$$(this, b), !this.$dragging_$) return;
            b.preventDefault();
        } else b.preventDefault();
        var c = this.$document_$, d = c.documentElement, e = !$goog$fx$Dragger$HAS_SET_CAPTURE_$$;
        $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, c, [ "touchmove", "mousemove" ], this.$handleMove_$, e), $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, c, [ "touchend", "mouseup" ], this.$endDrag$, e), $goog$fx$Dragger$HAS_SET_CAPTURE_$$ ? (d.setCapture($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, d, "losecapture", this.$endDrag$)) : $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, c ? $goog$dom$getWindow_$$(c) : window, "blur", this.$endDrag$), $goog$userAgent$IE$$ && this.$ieDragStartCancellingOn_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, c, "dragstart", $goog$events$Event$preventDefault$$), this.$scrollTarget_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, this.$scrollTarget_$, "scroll", this.$onScroll_$, e), this.clientX = this.$startX$ = b.clientX, this.clientY = this.$startY$ = b.clientY, this.screenX = b.screenX, this.screenY = b.screenY, this.$deltaX$ = this.target.offsetLeft, this.$deltaY$ = this.target.offsetTop, this.$pageScroll$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$(this.$document_$)), $goog$now$$();
    } else this.dispatchEvent("earlycancel");
}, $JSCompiler_prototypeAlias$$.$endDrag$ = function(b) {
    $JSCompiler_StaticMethods_removeAll$$(this.$eventHandler_$), $goog$fx$Dragger$HAS_SET_CAPTURE_$$ && this.$document_$.releaseCapture();
    var c = $JSCompiler_StaticMethods_limitX$$(this, this.$deltaX$), d = $JSCompiler_StaticMethods_limitY$$(this, this.$deltaY$);
    this.$dragging_$ ? ($JSCompiler_StaticMethods_maybeReinitTouchEvent_$$(b), this.$dragging_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent(new $goog$fx$DragEvent$$("end", this, b.clientX, b.clientY, 0, c, d))) : this.dispatchEvent("earlycancel"), ("touchend" == b.type || "touchcancel" == b.type) && b.preventDefault();
}, $JSCompiler_prototypeAlias$$.$handleMove_$ = function(b) {
    if (this.$enabled_$) {
        $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$(b);
        var c = b.clientX - this.clientX, d = b.clientY - this.clientY;
        this.clientX = b.clientX, this.clientY = b.clientY, this.screenX = b.screenX, this.screenY = b.screenY;
        if (!this.$dragging_$) {
            var e = this.$startX$ - this.clientX, f = this.$startY$ - this.clientY;
            if (e * e + f * f > this.$hysteresisDistanceSquared_$ && ($JSCompiler_StaticMethods_initializeDrag_$$(this, b), !this.$dragging_$)) {
                this.$endDrag$(b);
                return;
            }
        }
        d = $JSCompiler_StaticMethods_calculatePosition_$$(this, c, d), c = d.x, d = d.y, this.$dragging_$ && this.dispatchEvent(new $goog$fx$DragEvent$$("beforedrag", this, b.clientX, b.clientY, 0, c, d)) !== $JSCompiler_alias_FALSE$$ && ($JSCompiler_StaticMethods_doDrag$$(this, b, c, d), b.preventDefault());
    }
}, $JSCompiler_prototypeAlias$$.$onScroll_$ = function(b) {
    var c = $JSCompiler_StaticMethods_calculatePosition_$$(this, 0, 0);
    b.clientX = this.clientX, b.clientY = this.clientY, $JSCompiler_StaticMethods_doDrag$$(this, b, c.x, c.y);
}, $goog$inherits$$($goog$fx$DragEvent$$, $goog$events$Event$$), $goog$inherits$$($goog$events$FocusHandler$$, $goog$events$EventTarget$$), $goog$events$FocusHandler$$.prototype.handleEvent = function(b) {
    var c = new $goog$events$BrowserEvent$$(b.$event_$);
    c.type = "focusin" == b.type || "focus" == b.type ? "focusin" : "focusout";
    try {
        this.dispatchEvent(c);
    } finally {
        c.$dispose$();
    }
}, $goog$events$FocusHandler$$.prototype.$disposeInternal$ = function() {
    $goog$events$FocusHandler$$.$superClass_$.$disposeInternal$.call(this), $goog$events$unlistenByKey$$(this.$listenKeyIn_$), $goog$events$unlistenByKey$$(this.$listenKeyOut_$), delete this.$element_$;
}, $goog$inherits$$($goog$ui$ModalPopup$$, $goog$ui$Component$$), $JSCompiler_prototypeAlias$$ = $goog$ui$ModalPopup$$.prototype, $JSCompiler_prototypeAlias$$.$focusHandler_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$bgEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$bgIframeEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$tabCatcherElement_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-modalpopup"), $JSCompiler_prototypeAlias$$.$getBackgroundElement$ = $JSCompiler_get$$("$bgEl_$"), $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    $goog$ui$ModalPopup$$.$superClass_$.$createDom$.call(this);
    var b = this.$getElement$();
    $goog$dom$classes$add$$(b, this.$getCssClass$()), $goog$dom$setFocusableTabIndex$$(b, $JSCompiler_alias_TRUE$$), $goog$style$showElement$$(b, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_manageBackgroundDom_$$(this), $JSCompiler_StaticMethods_createTabCatcher_$$(this);
}, $JSCompiler_prototypeAlias$$.$canDecorate$ = function(b) {
    return !!b && "DIV" == b.tagName;
}, $JSCompiler_prototypeAlias$$.$decorateInternal$ = function(b) {
    $goog$ui$ModalPopup$$.$superClass_$.$decorateInternal$.call(this, b), $goog$dom$classes$add$$(this.$getElement$(), this.$getCssClass$()), $JSCompiler_StaticMethods_manageBackgroundDom_$$(this), $JSCompiler_StaticMethods_createTabCatcher_$$(this), $goog$style$showElement$$(this.$getElement$(), $JSCompiler_alias_FALSE$$);
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    if (this.$bgIframeEl_$) {
        var b = this.$getElement$();
        b.parentNode && b.parentNode.insertBefore(this.$bgIframeEl_$, b);
    }
    b = this.$getElement$(), b.parentNode && b.parentNode.insertBefore(this.$bgEl_$, b), $goog$ui$ModalPopup$$.$superClass_$.$enterDocument$.call(this), b = this.$getElement$(), b.parentNode && b.parentNode.insertBefore(this.$tabCatcherElement_$, b.nextSibling), this.$focusHandler_$ = new $goog$events$FocusHandler$$($JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$())), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$focusHandler_$, "focusin", this.$onFocus_$);
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$), $goog$dispose$$(this.$focusHandler_$), $goog$ui$ModalPopup$$.$superClass_$.$exitDocument$.call(this), $goog$dom$removeNode$$(this.$bgIframeEl_$), $goog$dom$removeNode$$(this.$bgEl_$), $goog$dom$removeNode$$(this.$tabCatcherElement_$);
}, $JSCompiler_prototypeAlias$$.$setVisible$ = function(b) {
    b != this.$visible_$ && (this.$popupShowTransition_$ && this.$popupShowTransition_$.stop(), this.$bgShowTransition_$ && this.$bgShowTransition_$.stop(), this.$popupHideTransition_$ && this.$popupHideTransition_$.stop(), this.$bgHideTransition_$ && this.$bgHideTransition_$.stop(), b ? this.$show_$() : this.$hide_$());
}, $JSCompiler_prototypeAlias$$.$show_$ = function() {
    if (this.dispatchEvent("beforeshow")) {
        this.$resizeBackground_$(), this.$reposition$();
        var b = this.$getHandler$(), c = this.$getDomHelper$();
        $JSCompiler_StaticMethods_listen$$(b, $goog$dom$getWindow_$$(c.$document_$), "resize", this.$resizeBackground_$), $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_TRUE$$), this.focus(), this.$visible_$ = $JSCompiler_alias_TRUE$$, this.$popupShowTransition_$ && this.$bgShowTransition_$ ? ($goog$events$listenOnce$$(this.$popupShowTransition_$, "end", this.$onShow_$, $JSCompiler_alias_FALSE$$, this), this.$popupShowTransition_$.play(), this.$bgShowTransition_$.play()) : this.$onShow_$();
    }
}, $JSCompiler_prototypeAlias$$.$hide_$ = function() {
    if (this.dispatchEvent("beforehide")) {
        var b = $JSCompiler_StaticMethods_unlisten$$, c = this.$getHandler$(), d = this.$getDomHelper$();
        b(c, $goog$dom$getWindow_$$(d.$document_$), "resize", this.$resizeBackground_$), this.$popupHideTransition_$ && this.$bgHideTransition_$ ? ($goog$events$listenOnce$$(this.$popupHideTransition_$, "end", this.$onHide_$, $JSCompiler_alias_FALSE$$, this), this.$popupHideTransition_$.play(), this.$bgHideTransition_$.play()) : this.$onHide_$();
    }
}, $JSCompiler_prototypeAlias$$.$onShow_$ = function() {
    this.dispatchEvent("show");
}, $JSCompiler_prototypeAlias$$.$onHide_$ = function() {
    $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_FALSE$$), this.$visible_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent("hide");
}, $JSCompiler_prototypeAlias$$.focus = function() {
    this.$focusElement_$();
}, $JSCompiler_prototypeAlias$$.$resizeBackground_$ = function() {
    this.$bgIframeEl_$ && $goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_FALSE$$), this.$bgEl_$ && $goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_FALSE$$);
    var b = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), c = $goog$dom$getViewportSize_$$((b ? $goog$dom$getWindow_$$(b) : window) || window || window), d = Math.max(b.body.scrollWidth, c.width), b = Math.max(b.body.scrollHeight, c.height);
    this.$bgIframeEl_$ && ($goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgIframeEl_$, d, b)), this.$bgEl_$ && ($goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgEl_$, d, b));
}, $JSCompiler_prototypeAlias$$.$reposition$ = function() {
    var b = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), c = (b ? $goog$dom$getWindow_$$(b) : window) || window;
    if ("fixed" == $goog$style$getComputedPosition$$(this.$getElement$())) var d = b = 0; else d = $JSCompiler_StaticMethods_getDocumentScroll$$(this.$getDomHelper$()), b = d.x, d = d.y;
    var e = $goog$style$getSize$$(this.$getElement$()), c = $goog$dom$getViewportSize_$$(c || window), b = Math.max(b + c.width / 2 - e.width / 2, 0), d = Math.max(d + c.height / 2 - e.height / 2, 0);
    $goog$style$setPosition$$(this.$getElement$(), b, d), $goog$style$setPosition$$(this.$tabCatcherElement_$, b, d);
}, $JSCompiler_prototypeAlias$$.$onFocus_$ = function(b) {
    b.target == this.$tabCatcherElement_$ && $goog$Timer$callOnce$$(this.$focusElement_$, 0, this);
}, $JSCompiler_prototypeAlias$$.$focusElement_$ = function() {
    try {
        $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()).body.focus(), this.$getElement$().focus();
    } catch (b) {}
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$dispose$$(this.$popupShowTransition_$), this.$popupShowTransition_$ = $JSCompiler_alias_NULL$$, $goog$dispose$$(this.$popupHideTransition_$), this.$popupHideTransition_$ = $JSCompiler_alias_NULL$$, $goog$dispose$$(this.$bgShowTransition_$), this.$bgShowTransition_$ = $JSCompiler_alias_NULL$$, $goog$dispose$$(this.$bgHideTransition_$), this.$bgHideTransition_$ = $JSCompiler_alias_NULL$$, $goog$ui$ModalPopup$$.$superClass_$.$disposeInternal$.call(this);
}, $goog$inherits$$($goog$ui$Dialog$$, $goog$ui$ModalPopup$$), $JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$$.prototype, $JSCompiler_prototypeAlias$$.$escapeToCancel_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$hasTitleCloseButton_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$modal_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$draggable_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$backgroundElementOpacity_$ = .5, $JSCompiler_prototypeAlias$$.$title_$ = "", $JSCompiler_prototypeAlias$$.$content_$ = "", $JSCompiler_prototypeAlias$$.$dragger_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$disposeOnHide_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$titleEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$titleTextEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$titleId_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$titleCloseEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$contentEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$buttonEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_get$$("$class_$"), $JSCompiler_prototypeAlias$$.$setContent$ = function(b) {
    this.$content_$ = b, this.$contentEl_$ && (this.$contentEl_$.innerHTML = b);
}, $JSCompiler_prototypeAlias$$.$getContentElement$ = function() {
    return this.$getElement$() || this.$render$(), this.$contentEl_$;
}, $JSCompiler_prototypeAlias$$.$getBackgroundElement$ = function() {
    return this.$getElement$() || this.$render$(), $goog$ui$Dialog$$.$superClass_$.$getBackgroundElement$.call(this);
}, $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    $goog$ui$Dialog$$.$superClass_$.$createDom$.call(this);
    var b = this.$getElement$(), c = this.$getDomHelper$();
    this.$titleEl_$ = c.$createDom$("div", {
        className: this.$class_$ + "-title",
        id: $JSCompiler_StaticMethods_getId$$(this)
    }, this.$titleTextEl_$ = c.$createDom$("span", this.$class_$ + "-title-text", this.$title_$), this.$titleCloseEl_$ = c.$createDom$("span", this.$class_$ + "-title-close")), $goog$dom$append$$(b, this.$titleEl_$, this.$contentEl_$ = c.$createDom$("div", this.$class_$ + "-content"), this.$buttonEl_$ = c.$createDom$("div", this.$class_$ + "-buttons")), this.$titleId_$ = this.$titleEl_$.id, $goog$dom$a11y$setRole$$(b, "dialog"), $goog$dom$a11y$setState$$(b, "labelledby", this.$titleId_$ || ""), this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$), $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$), this.$buttons_$ && (b = this.$buttons_$, b.$element_$ = this.$buttonEl_$, b.$render$()), $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$), $JSCompiler_StaticMethods_setBackgroundElementOpacity$$(this, this.$backgroundElementOpacity_$);
}, $JSCompiler_prototypeAlias$$.$decorateInternal$ = function(b) {
    $goog$ui$Dialog$$.$superClass_$.$decorateInternal$.call(this, b);
    var b = this.$class_$ + "-content", c = this.$getElement$();
    (this.$contentEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_alias_NULL$$, b, c)[0]) ? this.$content_$ = this.$contentEl_$.innerHTML : (this.$contentEl_$ = this.$getDomHelper$().$createDom$("div", b), this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$), this.$getElement$().appendChild(this.$contentEl_$));
    var b = this.$class_$ + "-title", c = this.$class_$ + "-title-text", d = this.$class_$ + "-title-close", e = this.$getElement$();
    (this.$titleEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_alias_NULL$$, b, e)[0]) ? (this.$titleTextEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_alias_NULL$$, c, this.$titleEl_$)[0], this.$titleCloseEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_alias_NULL$$, d, this.$titleEl_$)[0], this.$titleEl_$.id || (this.$titleEl_$.id = $JSCompiler_StaticMethods_getId$$(this))) : (this.$titleEl_$ = this.$getDomHelper$().$createDom$("div", {
        className: b,
        id: $JSCompiler_StaticMethods_getId$$(this)
    }), this.$getElement$().insertBefore(this.$titleEl_$, this.$contentEl_$)), this.$titleId_$ = this.$titleEl_$.id, this.$titleTextEl_$ ? this.$title_$ = $goog$dom$getTextContent$$(this.$titleTextEl_$) : (this.$titleTextEl_$ = this.$getDomHelper$().$createDom$("span", c, this.$title_$), this.$titleEl_$.appendChild(this.$titleTextEl_$)), $goog$dom$a11y$setState$$(this.$getElement$(), "labelledby", this.$titleId_$ || ""), this.$titleCloseEl_$ || (this.$titleCloseEl_$ = this.$getDomHelper$().$createDom$("span", d), this.$titleEl_$.appendChild(this.$titleCloseEl_$)), $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$), b = this.$class_$ + "-buttons", c = this.$getElement$(), (this.$buttonEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_alias_NULL$$, b, c)[0]) ? (this.$buttons_$ = new $goog$ui$Dialog$ButtonSet$$(this.$getDomHelper$()), this.$buttons_$.$decorate$(this.$buttonEl_$)) : (this.$buttonEl_$ = this.$getDomHelper$().$createDom$("div", b), this.$getElement$().appendChild(this.$buttonEl_$), this.$buttons_$ && (b = this.$buttons_$, b.$element_$ = this.$buttonEl_$, b.$render$()), $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$)), $JSCompiler_StaticMethods_setBackgroundElementOpacity$$(this, this.$backgroundElementOpacity_$);
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    $goog$ui$Dialog$$.$superClass_$.$enterDocument$.call(this), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this, [ "show", "hide" ], this.$setVisibleInternal_$), $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, this.$draggable_$), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$titleCloseEl_$, "click", this.$onTitleCloseClick_$), $goog$dom$a11y$setRole$$(this.$getElement$(), "dialog"), "" !== this.$titleTextEl_$.id && $goog$dom$a11y$setState$$(this.$getElement$(), "labelledby", this.$titleTextEl_$.id);
    if (!this.$modal_$ && (this.$modal_$ = $JSCompiler_alias_FALSE$$, this.$inDocument_$)) {
        var b = this.$getDomHelper$(), c = this.$getBackgroundElement$();
        b.removeNode(this.$bgIframeEl_$), b.removeNode(c);
    }
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, $JSCompiler_alias_FALSE$$), $goog$ui$Dialog$$.$superClass_$.$exitDocument$.call(this);
}, $JSCompiler_prototypeAlias$$.$setVisible$ = function(b) {
    b != this.$visible_$ && (this.$inDocument_$ || this.$render$(), $goog$ui$Dialog$$.$superClass_$.$setVisible$.call(this, b));
}, $JSCompiler_prototypeAlias$$.$setVisibleInternal_$ = function(b) {
    b.target != this || this.$disposed_$ || (this.$visible_$ ? ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "keydown", this.$onKey_$), this.$getElement$(), "keypress", this.$onKey_$), this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_SHOW$$), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$buttonEl_$, "click", this.$onButtonClick_$)) : ($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$(this.$getHandler$(), this.$getElement$(), "keydown", this.$onKey_$), this.$getElement$(), "keypress", this.$onKey_$), this.$buttonEl_$, "click", this.$onButtonClick_$), this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_HIDE$$), this.$disposeOnHide_$ && this.$dispose$()));
}, $JSCompiler_prototypeAlias$$.focus = function() {
    $goog$ui$Dialog$$.$superClass_$.focus.call(this);
    if (this.$buttons_$) {
        var b = this.$buttons_$.$defaultButton_$;
        if (b) for (var c = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), d = this.$buttonEl_$.getElementsByTagName("button"), e = 0, f; f = d[e]; e++) if (f.name == b) {
            try {
                if ($goog$userAgent$WEBKIT$$ || $goog$userAgent$OPERA$$) {
                    var g = c.createElement("input");
                    g.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;", this.$getElement$().appendChild(g), g.focus(), this.$getElement$().removeChild(g);
                }
                f.focus();
            } catch (h) {}
            break;
        }
    }
}, $JSCompiler_prototypeAlias$$.$setDraggerLimits_$ = function() {
    var b = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), c = $goog$dom$getViewportSize_$$((b ? $goog$dom$getWindow_$$(b) : window) || window || window), d = Math.max(b.body.scrollWidth, c.width), b = Math.max(b.body.scrollHeight, c.height), e = $goog$style$getSize$$(this.$getElement$());
    this.$dragger_$.$limits$ = "fixed" == $goog$style$getComputedPosition$$(this.$getElement$()) ? new $goog$math$Rect$$(0, 0, Math.max(0, c.width - e.width), Math.max(0, c.height - e.height)) || new $goog$math$Rect$$(NaN, NaN, NaN, NaN) : new $goog$math$Rect$$(0, 0, d - e.width, b - e.height) || new $goog$math$Rect$$(NaN, NaN, NaN, NaN);
}, $JSCompiler_prototypeAlias$$.$onTitleCloseClick_$ = function() {
    if (this.$hasTitleCloseButton_$) {
        var b = this.$buttons_$, c = b && b.$cancelButton_$;
        c ? (b = b.get(c), this.dispatchEvent(new $goog$ui$Dialog$Event$$(c, b)) && this.$setVisible$($JSCompiler_alias_FALSE$$)) : this.$setVisible$($JSCompiler_alias_FALSE$$);
    }
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    this.$buttonEl_$ = this.$titleCloseEl_$ = $JSCompiler_alias_NULL$$, $goog$ui$Dialog$$.$superClass_$.$disposeInternal$.call(this);
}, $JSCompiler_prototypeAlias$$.$onButtonClick_$ = function(b) {
    a : {
        for (b = b.target; b != $JSCompiler_alias_NULL$$ && b != this.$buttonEl_$; ) {
            if ("BUTTON" == b.tagName) break a;
            b = b.parentNode;
        }
        b = $JSCompiler_alias_NULL$$;
    }
    if (b && !b.disabled) {
        var b = b.name, c = this.$buttons_$.get(b);
        this.dispatchEvent(new $goog$ui$Dialog$Event$$(b, c)) && this.$setVisible$($JSCompiler_alias_FALSE$$);
    }
}, $JSCompiler_prototypeAlias$$.$onKey_$ = function(b) {
    var c = $JSCompiler_alias_FALSE$$, d = $JSCompiler_alias_FALSE$$, e = this.$buttons_$, f = b.target;
    if ("keydown" == b.type) if (this.$escapeToCancel_$ && 27 == b.keyCode) {
        var g = e && e.$cancelButton_$, f = "SELECT" == f.tagName && !f.disabled;
        g && !f ? (d = $JSCompiler_alias_TRUE$$, c = e.get(g), c = this.dispatchEvent(new $goog$ui$Dialog$Event$$(g, c))) : f || (c = $JSCompiler_alias_TRUE$$);
    } else 9 == b.keyCode && b.shiftKey && f == this.$getElement$() && (d = $JSCompiler_alias_TRUE$$); else if (13 == b.keyCode) {
        if ("BUTTON" == f.tagName) g = f.name; else if (e) {
            var h = e.$defaultButton_$, i = h && $JSCompiler_StaticMethods_getButton$$(e, h), f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName) && !f.disabled;
            i && !i.disabled && !f && (g = h);
        }
        g && e && (d = $JSCompiler_alias_TRUE$$, c = this.dispatchEvent(new $goog$ui$Dialog$Event$$(g, "" + e.get(g))));
    }
    if (c || d) b.stopPropagation(), b.preventDefault();
    c && this.$setVisible$($JSCompiler_alias_FALSE$$);
}, $goog$inherits$$($goog$ui$Dialog$Event$$, $goog$events$Event$$);

var $goog$ui$Dialog$EventType$SELECT$$ = "dialogselect", $goog$ui$Dialog$EventType$AFTER_HIDE$$ = "afterhide", $goog$ui$Dialog$EventType$AFTER_SHOW$$ = "aftershow";

$goog$inherits$$($goog$ui$Dialog$ButtonSet$$, $goog$structs$Map$$), $JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$ButtonSet$$.prototype, $JSCompiler_prototypeAlias$$.$class_$ = "goog-buttonset", $JSCompiler_prototypeAlias$$.$defaultButton_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$cancelButton_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.set = function(b, c, d, e) {
    return $goog$structs$Map$$.prototype.set.call(this, b, c), d && (this.$defaultButton_$ = b), e && (this.$cancelButton_$ = b), this;
}, $JSCompiler_prototypeAlias$$.$render$ = function() {
    if (this.$element_$) {
        this.$element_$.innerHTML = "";
        var b = $goog$dom$getDomHelper$$(this.$element_$);
        $goog$structs$forEach$$(this, function(a, c) {
            var d = b.$createDom$("button", {
                name: c
            }, a);
            c == this.$defaultButton_$ && (d.className = this.$class_$ + "-default"), this.$element_$.appendChild(d);
        }, this);
    }
}, $JSCompiler_prototypeAlias$$.$decorate$ = function(b) {
    if (b && 1 == b.nodeType) {
        this.$element_$ = b;
        for (var b = this.$element_$.getElementsByTagName("button"), c = 0, d, e, f; d = b[c]; c++) if (e = d.name || d.id, f = $goog$dom$getTextContent$$(d) || d.value, e) {
            var g = 0 == c;
            this.set(e, f, g, d.name == $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$), g && $goog$dom$classes$add$$(d, this.$class_$ + "-default");
        }
    }
}, $JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$"), $JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");

var $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$ = "cancel", $goog$ui$Dialog$MSG_DIALOG_OK_$$ = $goog$getMsg$$("OK"), $goog$ui$Dialog$MSG_DIALOG_CANCEL_$$ = $goog$getMsg$$("Cancel"), $goog$ui$Dialog$MSG_DIALOG_YES_$$ = $goog$getMsg$$("Yes"), $goog$ui$Dialog$MSG_DIALOG_NO_$$ = $goog$getMsg$$("No"), $goog$ui$Dialog$MSG_DIALOG_SAVE_$$ = $goog$getMsg$$("Save"), $goog$ui$Dialog$DefaultButtonCaptions$CONTINUE$$ = $goog$getMsg$$("Continue"), $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$ = {
    key: "ok",
    caption: $goog$ui$Dialog$MSG_DIALOG_OK_$$
}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$ = {
    key: $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$,
    caption: $goog$ui$Dialog$MSG_DIALOG_CANCEL_$$
}, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$ = {
    key: "yes",
    caption: $goog$ui$Dialog$MSG_DIALOG_YES_$$
}, $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$ = {
    key: "no",
    caption: $goog$ui$Dialog$MSG_DIALOG_NO_$$
}, $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$ = {
    key: "save",
    caption: $goog$ui$Dialog$MSG_DIALOG_SAVE_$$
}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$ = {
    key: "continue",
    caption: $goog$ui$Dialog$DefaultButtonCaptions$CONTINUE$$
};

"undefined" != typeof document && ($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$createOkCancel$$(), $goog$ui$Dialog$ButtonSet$createYesNo$$(), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)), $goog$inherits$$($goog$ui$Prompt$$, $goog$ui$Dialog$$), $JSCompiler_prototypeAlias$$ = $goog$ui$Prompt$$.prototype, $JSCompiler_prototypeAlias$$.$callback_$ = $goog$nullFunction$$, $JSCompiler_prototypeAlias$$.$defaultValue_$ = "", $JSCompiler_prototypeAlias$$.$userInputEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$isClosing_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$rows_$ = 1, $JSCompiler_prototypeAlias$$.$cols_$ = 0, $JSCompiler_prototypeAlias$$.$inputDecoratorFn_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$validationFn_$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$), $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    this.$inputDecoratorFn_$ && this.$inputDecoratorFn_$(this.$userInputEl_$), $goog$ui$Prompt$$.$superClass_$.$enterDocument$.call(this), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this, $goog$ui$Dialog$EventType$SELECT$$, this.$onPromptExit_$), $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$userInputEl_$, [ "keyup", "change" ], this.$handleInputChanged_$);
}, $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    $goog$ui$Prompt$$.$superClass_$.$createDom$.call(this);
    var b = {
        className: this.$getCssClass$() + "-userInput",
        value: this.$defaultValue_$
    };
    1 == this.$rows_$ ? (this.$userInputEl_$ = this.$getDomHelper$().$createDom$("input", b), this.$userInputEl_$.type = "text", this.$cols_$ && (this.$userInputEl_$.size = this.$cols_$)) : (this.$userInputEl_$ = this.$getDomHelper$().$createDom$("textarea", b), this.$userInputEl_$.rows = this.$rows_$, this.$cols_$ && (this.$userInputEl_$.cols = this.$cols_$)), this.$userInputEl_$.id = this.$inputElementId_$, this.$getContentElement$().appendChild(this.$getDomHelper$().$createDom$("div", {
        style: "overflow: auto"
    }, this.$userInputEl_$)), 1 < this.$rows_$ && (this.$buttons_$.$defaultButton_$ = $JSCompiler_alias_NULL$$);
}, $JSCompiler_prototypeAlias$$.$handleInputChanged_$ = function() {
    var b = this.$validationFn_$(this.$userInputEl_$.value), c = $JSCompiler_StaticMethods_getButton$$(this.$buttons_$, "ok");
    c && (c.disabled = !b);
}, $JSCompiler_prototypeAlias$$.$setVisible$ = function(b) {
    $goog$ui$Dialog$$.prototype.$setVisible$.call(this, b);
    if (b) {
        this.$isClosing_$ = $JSCompiler_alias_FALSE$$, this.$userInputEl_$.value = this.$defaultValue_$, this.focus();
        var b = this.$validationFn_$(this.$userInputEl_$.value), c = $JSCompiler_StaticMethods_getButton$$(this.$buttons_$, "ok");
        c && (c.disabled = !b);
    }
}, $JSCompiler_prototypeAlias$$.focus = function() {
    $goog$userAgent$OPERA$$ && this.$userInputEl_$.focus(), this.$userInputEl_$.select();
}, $JSCompiler_prototypeAlias$$.$onPromptExit_$ = function(b) {
    this.$isClosing_$ || (this.$isClosing_$ = $JSCompiler_alias_TRUE$$, "ok" == b.key ? $goog$Timer$callOnce$$($goog$bind$$(this.$callback_$, this, this.$userInputEl_$.value), 1) : $goog$Timer$callOnce$$($goog$bind$$(this.$callback_$, this, $JSCompiler_alias_NULL$$), 1));
}, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$dom$removeNode$$(this.$userInputEl_$), $goog$events$unlisten$$(this, $goog$ui$Dialog$EventType$SELECT$$, this.$onPromptExit_$, $JSCompiler_alias_TRUE$$, this), $goog$ui$Prompt$$.$superClass_$.$disposeInternal$.call(this), this.$userInputEl_$ = $JSCompiler_alias_NULL$$;
}, $goog$inherits$$($goog$ui$tree$BaseNode$$, $goog$ui$Component$$);

var $goog$ui$tree$BaseNode$allNodes$$ = {};

$JSCompiler_prototypeAlias$$ = $goog$ui$tree$BaseNode$$.prototype, $JSCompiler_prototypeAlias$$.$selected_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$expanded_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$toolTip_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$afterLabelHtml_$ = "", $JSCompiler_prototypeAlias$$.$isUserCollapsible_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$depth_$ = -1, $JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
    $goog$ui$tree$BaseNode$$.$superClass_$.$disposeInternal$.call(this), this.$tree_$ && (this.$tree_$.removeNode(this), this.$tree_$ = $JSCompiler_alias_NULL$$), this.$element_$ = $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$initAccessibility$ = function() {
    var b = this.$getElement$();
    if (b) {
        var c = $JSCompiler_StaticMethods_getLabelElement$$(this);
        c && !c.id && (c.id = $JSCompiler_StaticMethods_getId$$(this) + ".label"), $goog$dom$a11y$setRole$$(b, "treeitem"), $goog$dom$a11y$setState$$(b, "selected", $JSCompiler_alias_FALSE$$), $goog$dom$a11y$setState$$(b, "expanded", $JSCompiler_alias_FALSE$$), $goog$dom$a11y$setState$$(b, "level", this.$getDepth$()), c && $goog$dom$a11y$setState$$(b, "labelledby", c.id), (b = this.$getIconElement$()) && $goog$dom$a11y$setRole$$(b, "presentation"), (b = this.$getExpandIconElement$()) && $goog$dom$a11y$setRole$$(b, "presentation"), b = $JSCompiler_StaticMethods_getChildrenElement$$(this), $goog$dom$a11y$setRole$$(b, "group");
        if (b.hasChildNodes()) {
            b = $JSCompiler_StaticMethods_getChildCount$$(this);
            for (c = 1; c <= b; c++) {
                var d = $JSCompiler_StaticMethods_getChildAt$$(this, c - 1).$getElement$();
                $goog$dom$a11y$setState$$(d, "setsize", b), $goog$dom$a11y$setState$$(d, "posinset", c);
            }
        }
    }
}, $JSCompiler_prototypeAlias$$.$createDom$ = function() {
    var b = new $goog$string$StringBuffer$$;
    $JSCompiler_StaticMethods_toHtml$$(this, b);
    var c;
    c = this.$getDomHelper$().$document_$;
    var d = b.toString(), b = c.createElement("div");
    $goog$userAgent$IE$$ ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if (1 == b.childNodes.length) c = b.removeChild(b.firstChild); else for (c = c.createDocumentFragment(); b.firstChild; ) c.appendChild(b.firstChild);
    this.$element_$ = c;
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    $goog$ui$tree$BaseNode$$.$superClass_$.$enterDocument$.call(this), $goog$ui$tree$BaseNode$allNodes$$[$JSCompiler_StaticMethods_getId$$(this)] = this, this.$initAccessibility$();
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    $goog$ui$tree$BaseNode$$.$superClass_$.$exitDocument$.call(this), delete $goog$ui$tree$BaseNode$allNodes$$[$JSCompiler_StaticMethods_getId$$(this)];
}, $JSCompiler_prototypeAlias$$.$addChildAt$ = function(b, c) {
    b.getParent();
    var d = $JSCompiler_StaticMethods_getChildAt$$(this, c - 1), e = $JSCompiler_StaticMethods_getChildAt$$(this, c);
    $goog$ui$tree$BaseNode$$.$superClass_$.$addChildAt$.call(this, b, c), b.$previousSibling_$ = d, b.$nextSibling_$ = e, d ? d.$nextSibling_$ = b : this.$firstChild_$ = b, e ? e.$previousSibling_$ = b : this.$lastChild_$ = b;
    var f = this.$getTree$();
    f && $JSCompiler_StaticMethods_setTreeInternal$$(b, f), $JSCompiler_StaticMethods_setDepth_$$(b, this.$getDepth$() + 1);
    if (this.$getElement$() && (this.$updateExpandIcon$(), this.$getExpanded$())) {
        f = $JSCompiler_StaticMethods_getChildrenElement$$(this), b.$getElement$() || b.$createDom$();
        var g = b.$getElement$(), h = e && e.$getElement$();
        f.insertBefore(g, h), this.$inDocument_$ && b.$enterDocument$(), e || (d ? d.$updateExpandIcon$() : ($goog$style$showElement$$(f, $JSCompiler_alias_TRUE$$), this.$setExpanded$(this.$getExpanded$())));
    }
}, $JSCompiler_prototypeAlias$$.add = function(b, c) {
    return !c || c.getParent(), b.getParent() && b.getParent().removeChild(b), this.$addChildAt$(b, c ? this.$children_$ && c ? $goog$array$indexOf$$(this.$children_$, c) : -1 : $JSCompiler_StaticMethods_getChildCount$$(this)), b;
}, $JSCompiler_prototypeAlias$$.removeChild = function(b) {
    var c = this.$getTree$(), d = c ? c.$selectedItem_$ : $JSCompiler_alias_NULL$$;
    if (d == b || b.contains(d)) c.hasFocus() ? (this.select(), $goog$Timer$callOnce$$(this.$onTimeoutSelect_$, 10, this)) : this.select();
    $goog$ui$tree$BaseNode$$.$superClass_$.removeChild.call(this, b), this.$lastChild_$ == b && (this.$lastChild_$ = b.$previousSibling_$), this.$firstChild_$ == b && (this.$firstChild_$ = b.$nextSibling_$), b.$previousSibling_$ && (b.$previousSibling_$.$nextSibling_$ = b.$nextSibling_$), b.$nextSibling_$ && (b.$nextSibling_$.$previousSibling_$ = b.$previousSibling_$), d = !b.$nextSibling_$, b.$tree_$ = $JSCompiler_alias_NULL$$, b.$depth_$ = -1;
    if (c && (c.removeNode(this), this.$inDocument_$)) {
        c = $JSCompiler_StaticMethods_getChildrenElement$$(this);
        if (b.$inDocument_$) {
            var e = b.$getElement$();
            c.removeChild(e), b.$exitDocument$();
        }
        d && (d = $JSCompiler_StaticMethods_getChildAt$$(this, $JSCompiler_StaticMethods_getChildCount$$(this) - 1)) && d.$updateExpandIcon$(), $JSCompiler_StaticMethods_hasChildren$$(this) || (c.style.display = "none", this.$updateExpandIcon$(), $JSCompiler_StaticMethods_updateIcon_$$(this));
    }
    return b;
}, $JSCompiler_prototypeAlias$$.remove = $goog$ui$tree$BaseNode$$.prototype.removeChild, $JSCompiler_prototypeAlias$$.$onTimeoutSelect_$ = function() {
    this.select();
}, $JSCompiler_prototypeAlias$$.$getDepth$ = function() {
    var b = this.$depth_$;
    return 0 > b && (b = (b = this.getParent()) ? b.$getDepth$() + 1 : 0, $JSCompiler_StaticMethods_setDepth_$$(this, b)), b;
}, $JSCompiler_prototypeAlias$$.contains = function(b) {
    for (; b; ) {
        if (b == this) return $JSCompiler_alias_TRUE$$;
        b = b.getParent();
    }
    return $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.$getChildren$ = function() {
    var b = [];
    return $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
        b.push(a);
    }), b;
}, $JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$selected_$"), $JSCompiler_prototypeAlias$$.select = function() {
    var b = this.$getTree$();
    if (b && b.$selectedItem_$ != this) {
        var c = $JSCompiler_alias_FALSE$$;
        b.$selectedItem_$ && (c = b.$selectedItem_$ == b.$focusedNode_$, $JSCompiler_StaticMethods_setSelectedInternal$$(b.$selectedItem_$, $JSCompiler_alias_FALSE$$)), b.$selectedItem_$ = this, this && ($JSCompiler_StaticMethods_setSelectedInternal$$(this, $JSCompiler_alias_TRUE$$), c && this.select()), b.dispatchEvent("change");
    }
}, $JSCompiler_prototypeAlias$$.$getExpanded$ = $JSCompiler_get$$("$expanded_$"), $JSCompiler_prototypeAlias$$.$setExpanded$ = function(b) {
    var c = b != this.$expanded_$;
    if (!c || this.dispatchEvent(b ? "beforeexpand" : "beforecollapse")) {
        var d;
        this.$expanded_$ = b, d = this.$getTree$();
        var e = this.$getElement$();
        if ($JSCompiler_StaticMethods_hasChildren$$(this)) {
            if (!b && d && this.contains(d.$selectedItem_$) && this.select(), e) {
                if (d = $JSCompiler_StaticMethods_getChildrenElement$$(this)) if ($goog$style$showElement$$(d, b), b && this.$inDocument_$ && !d.hasChildNodes()) {
                    var f = new $goog$string$StringBuffer$$;
                    $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
                        $JSCompiler_StaticMethods_toHtml$$(a, f);
                    }), d.innerHTML = f.toString(), $JSCompiler_StaticMethods_forEachChild$$(this, function(a) {
                        a.$enterDocument$();
                    });
                }
                this.$updateExpandIcon$();
            }
        } else (d = $JSCompiler_StaticMethods_getChildrenElement$$(this)) && $goog$style$showElement$$(d, $JSCompiler_alias_FALSE$$);
        e && ($JSCompiler_StaticMethods_updateIcon_$$(this), $goog$dom$a11y$setState$$(e, "expanded", b)), c && this.dispatchEvent(b ? "expand" : "collapse");
    }
}, $JSCompiler_prototypeAlias$$.toggle = function() {
    this.$setExpanded$(!this.$getExpanded$());
}, $JSCompiler_prototypeAlias$$.$reveal$ = function() {
    var b = this.getParent();
    b && (b.$setExpanded$($JSCompiler_alias_TRUE$$), b.$reveal$());
}, $JSCompiler_prototypeAlias$$.$getRowClassName$ = function() {
    return this.$config_$.$cssTreeRow$ + (this.$isSelected$() ? " " + this.$config_$.$cssSelectedRow$ : "");
}, $JSCompiler_prototypeAlias$$.$getExpandIconHtml$ = function() {
    return $goog$string$buildString$$('<img type="expand" class="', $JSCompiler_StaticMethods_getExpandIconClass$$(this), '" src="', this.$config_$.$cleardotPath$ + '">');
}, $JSCompiler_prototypeAlias$$.$getElement$ = function() {
    var b = $goog$ui$tree$BaseNode$$.$superClass_$.$getElement$.call(this);
    return b || (this.$element_$ = b = this.$getDomHelper$().$getElement$($JSCompiler_StaticMethods_getId$$(this))), b;
}, $JSCompiler_prototypeAlias$$.$getExpandIconElement$ = function() {
    var b = $JSCompiler_StaticMethods_getRowElement$$(this);
    return b ? b.firstChild : $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$getIconElement$ = function() {
    var b = $JSCompiler_StaticMethods_getRowElement$$(this);
    return b ? b.childNodes[1] : $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$updateExpandIcon$ = function() {
    var b = this.$getExpandIconElement$();
    b && (b.className = $JSCompiler_StaticMethods_getExpandIconClass$$(this));
    if (b = $JSCompiler_StaticMethods_getChildrenElement$$(this)) b.style.backgroundPosition = $JSCompiler_StaticMethods_getLineStyle2$$(this);
}, $JSCompiler_prototypeAlias$$.$onClick_$ = $goog$events$Event$preventDefault$$, $goog$inherits$$($goog$ui$tree$TreeNode$$, $goog$ui$tree$BaseNode$$), $goog$ui$tree$TreeNode$$.prototype.$tree_$ = $JSCompiler_alias_NULL$$, $goog$ui$tree$TreeNode$$.prototype.$getTree$ = function() {
    if (this.$tree_$) return this.$tree_$;
    var b = this.getParent();
    return b && (b = b.$getTree$()) ? ($JSCompiler_StaticMethods_setTreeInternal$$(this, b), b) : $JSCompiler_alias_NULL$$;
}, $goog$ui$tree$TreeNode$$.prototype.$getCalculatedIconClass$ = function() {
    var b = this.$getExpanded$();
    if (b && this.$expandedIconClass_$) return this.$expandedIconClass_$;
    if (!b && this.$iconClass_$) return this.$iconClass_$;
    var c = this.$config_$;
    if ($JSCompiler_StaticMethods_hasChildren$$(this)) {
        if (b && c.$cssExpandedFolderIcon$) return c.$cssTreeIcon$ + " " + c.$cssExpandedFolderIcon$;
        if (!b && c.$cssCollapsedFolderIcon$) return c.$cssTreeIcon$ + " " + c.$cssCollapsedFolderIcon$;
    } else if (c.$cssFileIcon$) return c.$cssTreeIcon$ + " " + c.$cssFileIcon$;
    return "";
}, $JSCompiler_prototypeAlias$$ = $goog$structs$Trie$$.prototype, $JSCompiler_prototypeAlias$$.$value_$ = $JSCompiler_alias_VOID$$, $JSCompiler_prototypeAlias$$.set = function(b, c) {
    $JSCompiler_StaticMethods_setOrAdd_$$(this, b, c, $JSCompiler_alias_FALSE$$);
}, $JSCompiler_prototypeAlias$$.add = function(b, c) {
    $JSCompiler_StaticMethods_setOrAdd_$$(this, b, c, $JSCompiler_alias_TRUE$$);
}, $JSCompiler_prototypeAlias$$.get = function(b) {
    for (var c = this, d = 0; d < b.length; d++) {
        var e = b.charAt(d);
        if (!c.$childNodes_$[e]) return;
        c = c.$childNodes_$[e];
    }
    return c.$value_$;
}, $JSCompiler_prototypeAlias$$.$getValues$ = function() {
    var b = [];
    return $JSCompiler_StaticMethods_getValuesInternal_$$(this, b), b;
}, $JSCompiler_prototypeAlias$$.$getKeys$ = function(b) {
    var c = [];
    if (b) {
        for (var d = this, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            if (!d.$childNodes_$[f]) return [];
            d = d.$childNodes_$[f];
        }
        $JSCompiler_StaticMethods_getKeysInternal_$$(d, b, c);
    } else $JSCompiler_StaticMethods_getKeysInternal_$$(this, "", c);
    return c;
}, $JSCompiler_prototypeAlias$$.$containsKey$ = function(b) {
    return this.get(b) !== $JSCompiler_alias_VOID$$;
}, $JSCompiler_prototypeAlias$$.clear = function() {
    this.$childNodes_$ = {}, this.$value_$ = $JSCompiler_alias_VOID$$;
}, $JSCompiler_prototypeAlias$$.remove = function(b) {
    for (var c = this, d = [], e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        c.$childNodes_$[f] || $JSCompiler_alias_THROW$$(Error('The collection does not have the key "' + b + '"')), d.push([ c, f ]), c = c.$childNodes_$[f];
    }
    b = c.$value_$;
    for (delete c.$value_$; 0 < d.length; ) {
        f = d.pop(), c = f[0], f = f[1];
        a : {
            e = $JSCompiler_alias_VOID$$;
            for (e in c.$childNodes_$[f].$childNodes_$) {
                e = $JSCompiler_alias_FALSE$$;
                break a;
            }
            e = $JSCompiler_alias_TRUE$$;
        }
        if (!e) break;
        delete c.$childNodes_$[f];
    }
    return b;
}, $JSCompiler_prototypeAlias$$.$clone$ = function() {
    return new $goog$structs$Trie$$(this);
}, $JSCompiler_prototypeAlias$$ = $goog$ui$tree$TypeAhead$$.prototype, $JSCompiler_prototypeAlias$$.$buffer_$ = "", $JSCompiler_prototypeAlias$$.$matchingLabels_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$matchingNodes_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$matchingLabelIndex_$ = 0, $JSCompiler_prototypeAlias$$.$matchingNodeIndex_$ = 0, $JSCompiler_prototypeAlias$$.clear = function() {
    this.$buffer_$ = "";
}, $goog$inherits$$($goog$ui$tree$TreeControl$$, $goog$ui$tree$BaseNode$$), $JSCompiler_prototypeAlias$$ = $goog$ui$tree$TreeControl$$.prototype, $JSCompiler_prototypeAlias$$.$keyHandler_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$focusHandler_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.ui.tree.TreeControl"), $JSCompiler_prototypeAlias$$.$focused_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$focusedNode_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$showLines_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$showExpandIcons_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$showRootNode_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$showRootLines_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_prototypeAlias$$.$getTree$ = function() {
    return this;
}, $JSCompiler_prototypeAlias$$.$getDepth$ = $JSCompiler_returnArg$$(0), $JSCompiler_prototypeAlias$$.$reveal$ = function() {}, $JSCompiler_prototypeAlias$$.$handleFocus_$ = function() {
    this.$focused_$ = $JSCompiler_alias_TRUE$$, $goog$dom$classes$add$$(this.$getElement$(), "focused"), this.$selectedItem_$ && this.$selectedItem_$.select();
}, $JSCompiler_prototypeAlias$$.$handleBlur_$ = function() {
    this.$focused_$ = $JSCompiler_alias_FALSE$$, $goog$dom$classes$remove$$(this.$getElement$(), "focused");
}, $JSCompiler_prototypeAlias$$.hasFocus = $JSCompiler_get$$("$focused_$"), $JSCompiler_prototypeAlias$$.$getExpanded$ = function() {
    return !this.$showRootNode_$ || $goog$ui$tree$TreeControl$$.$superClass_$.$getExpanded$.call(this);
}, $JSCompiler_prototypeAlias$$.$setExpanded$ = function(b) {
    this.$showRootNode_$ ? $goog$ui$tree$TreeControl$$.$superClass_$.$setExpanded$.call(this, b) : this.$expanded_$ = b;
}, $JSCompiler_prototypeAlias$$.$getExpandIconHtml$ = $JSCompiler_returnArg$$(""), $JSCompiler_prototypeAlias$$.$getIconElement$ = function() {
    var b = $JSCompiler_StaticMethods_getRowElement$$(this);
    return b ? b.firstChild : $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$getExpandIconElement$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$), $JSCompiler_prototypeAlias$$.$updateExpandIcon$ = function() {}, $JSCompiler_prototypeAlias$$.$getRowClassName$ = function() {
    return $goog$ui$tree$TreeControl$$.$superClass_$.$getRowClassName$.call(this) + (this.$showRootNode_$ ? "" : " " + this.$config_$.$cssHideRoot$);
}, $JSCompiler_prototypeAlias$$.$getCalculatedIconClass$ = function() {
    var b = this.$getExpanded$();
    if (b && this.$expandedIconClass_$) return this.$expandedIconClass_$;
    if (!b && this.$iconClass_$) return this.$iconClass_$;
    var c = this.$config_$;
    return b && c.$cssExpandedRootIcon$ ? c.$cssTreeIcon$ + " " + c.$cssExpandedRootIcon$ : !b && c.$cssCollapsedRootIcon$ ? c.$cssTreeIcon$ + " " + c.$cssCollapsedRootIcon$ : "";
}, $JSCompiler_prototypeAlias$$.$initAccessibility$ = function() {
    $goog$ui$tree$TreeControl$$.$superClass_$.$initAccessibility$.call(this);
    var b = this.$getElement$();
    $goog$dom$a11y$setRole$$(b, "tree"), $goog$dom$a11y$setState$$(b, "labelledby", $JSCompiler_StaticMethods_getLabelElement$$(this).id);
}, $JSCompiler_prototypeAlias$$.$enterDocument$ = function() {
    $goog$ui$tree$TreeControl$$.$superClass_$.$enterDocument$.call(this);
    var b = this.$getElement$();
    b.className = this.$config_$.$cssRoot$, b.setAttribute("hideFocus", "true"), b = this.$getElement$(), b.tabIndex = 0;
    var c = this.$keyHandler_$ = new $goog$events$KeyHandler$$(b), d = this.$focusHandler_$ = new $goog$events$FocusHandler$$(b);
    $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), d, "focusout", this.$handleBlur_$), d, "focusin", this.$handleFocus_$), c, "key", this.$handleKeyEvent$), b, "mousedown", this.$handleMouseEvent_$), b, "click", this.$handleMouseEvent_$), b, "dblclick", this.$handleMouseEvent_$), this.$initAccessibility$();
}, $JSCompiler_prototypeAlias$$.$exitDocument$ = function() {
    $goog$ui$tree$TreeControl$$.$superClass_$.$exitDocument$.call(this), this.$keyHandler_$.$dispose$(), this.$keyHandler_$ = $JSCompiler_alias_NULL$$, this.$focusHandler_$.$dispose$(), this.$focusHandler_$ = $JSCompiler_alias_NULL$$;
}, $JSCompiler_prototypeAlias$$.$handleMouseEvent_$ = function(b) {
    $JSCompiler_StaticMethods_fine$$(this.$logger_$, "Received event " + b.type);
    var c = $JSCompiler_StaticMethods_getNodeFromEvent_$$(this, b);
    if (c) switch (b.type) {
      case "mousedown":
        "expand" == b.target.getAttribute("type") && $JSCompiler_StaticMethods_hasChildren$$(c) ? c.$isUserCollapsible_$ && c.toggle() : (c.select(), $JSCompiler_StaticMethods_updateRow$$(c));
        break;
      case "click":
        c.$onClick_$(b);
        break;
      case "dblclick":
        "expand" == b.target.getAttribute("type") && $JSCompiler_StaticMethods_hasChildren$$(c) || c.$isUserCollapsible_$ && c.toggle();
    }
}, $JSCompiler_prototypeAlias$$.$handleKeyEvent$ = function(b) {
    var c = $JSCompiler_alias_FALSE$$, c = this.$typeAhead_$, d = $JSCompiler_alias_FALSE$$;
    switch (b.keyCode) {
      case 40:
      case 38:
        if (b.ctrlKey) {
            var d = 40 == b.keyCode ? 1 : -1, e = c.$matchingLabels_$;
            if (e) {
                var f = $JSCompiler_alias_NULL$$, g = $JSCompiler_alias_FALSE$$;
                if (c.$matchingNodes_$) {
                    var h = c.$matchingNodeIndex_$ + d;
                    0 <= h && h < c.$matchingNodes_$.length ? (c.$matchingNodeIndex_$ = h, f = c.$matchingNodes_$) : g = $JSCompiler_alias_TRUE$$;
                }
                f || (h = c.$matchingLabelIndex_$ + d, 0 <= h && h < e.length && (c.$matchingLabelIndex_$ = h), e.length > c.$matchingLabelIndex_$ && (f = c.$nodeMap_$.get(e[c.$matchingLabelIndex_$])), f && f.length && g && (c.$matchingNodeIndex_$ = -1 == d ? f.length - 1 : 0)), $JSCompiler_StaticMethods_selectMatchingNode_$$(c, f) && (c.$matchingLabels_$ = e);
            }
            d = $JSCompiler_alias_TRUE$$;
        }
        break;
      case 8:
        e = c.$buffer_$.length - 1, d = $JSCompiler_alias_TRUE$$, 0 < e ? (c.$buffer_$ = c.$buffer_$.substring(0, e), $JSCompiler_StaticMethods_jumpToLabel_$$(c, c.$buffer_$)) : 0 == e ? c.$buffer_$ = "" : d = $JSCompiler_alias_FALSE$$;
        break;
      case 27:
        c.$buffer_$ = "", d = $JSCompiler_alias_TRUE$$;
    }
    if (!(c = d)) {
        if (c = this.$selectedItem_$) {
            c = this.$selectedItem_$, d = $JSCompiler_alias_TRUE$$;
            switch (b.keyCode) {
              case 39:
                if (b.altKey) break;
                $JSCompiler_StaticMethods_hasChildren$$(c) && (c.$getExpanded$() ? $JSCompiler_StaticMethods_getChildAt$$(c, 0).select() : c.$setExpanded$($JSCompiler_alias_TRUE$$));
                break;
              case 37:
                if (b.altKey) break;
                $JSCompiler_StaticMethods_hasChildren$$(c) && c.$getExpanded$() && c.$isUserCollapsible_$ ? c.$setExpanded$($JSCompiler_alias_FALSE$$) : (e = c.getParent(), f = c.$getTree$(), e && (f.$showRootNode_$ || e != f) && e.select());
                break;
              case 40:
                a : if ($JSCompiler_StaticMethods_hasChildren$$(c) && c.$getExpanded$()) e = $JSCompiler_StaticMethods_getChildAt$$(c, 0); else {
                    for (e = c; e != c.$getTree$(); ) {
                        f = e.$nextSibling_$;
                        if (f != $JSCompiler_alias_NULL$$) {
                            e = f;
                            break a;
                        }
                        e = e.getParent();
                    }
                    e = $JSCompiler_alias_NULL$$;
                }
                e && e.select();
                break;
              case 38:
                e = c.$previousSibling_$, e != $JSCompiler_alias_NULL$$ ? e = $JSCompiler_StaticMethods_getLastShownDescendant$$(e) : (e = c.getParent(), f = c.$getTree$(), e = !f.$showRootNode_$ && e == f ? $JSCompiler_alias_NULL$$ : e), e && e.select();
                break;
              default:
                d = $JSCompiler_alias_FALSE$$;
            }
            d && (b.preventDefault(), (f = c.$getTree$()) && f.$typeAhead_$.clear()), c = d;
        }
        c || (c = this.$typeAhead_$, d = $JSCompiler_alias_FALSE$$, !b.ctrlKey && !b.altKey && (e = String.fromCharCode(b.charCode || b.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "?" <= e && "�" >= e) && (" " != e || c.$buffer_$)) && (c.$buffer_$ += e, d = $JSCompiler_StaticMethods_jumpToLabel_$$(c, c.$buffer_$)), c = d);
    }
    return c && b.preventDefault(), c;
}, $JSCompiler_prototypeAlias$$.createNode = function(b) {
    return new $goog$ui$tree$TreeNode$$(b || "", this.$config_$, this.$getDomHelper$());
}, $JSCompiler_prototypeAlias$$.removeNode = function(b) {
    var c = this.$typeAhead_$, d = $JSCompiler_StaticMethods_getText$$(b);
    if (d && !/^[\s\xa0]*$/.test(d == $JSCompiler_alias_NULL$$ ? "" : "" + d)) {
        var d = d.toLowerCase(), e = c.$nodeMap_$.get(d);
        e && ($goog$array$remove$$(e, b), e.length && c.$nodeMap_$.remove(d));
    }
};

var $goog$ui$tree$TreeControl$defaultConfig$$ = {
    $cleardotPath$: "images/cleardot.gif",
    $indentWidth$: 19,
    $cssRoot$: "goog-tree-root goog-tree-item",
    $cssHideRoot$: "goog-tree-hide-root",
    $cssItem$: "goog-tree-item",
    $cssChildren$: "goog-tree-children",
    $cssChildrenNoLines$: "goog-tree-children-nolines",
    $cssTreeRow$: "goog-tree-row",
    $cssItemLabel$: "goog-tree-item-label",
    $cssTreeIcon$: "goog-tree-icon",
    $cssExpandTreeIcon$: "goog-tree-expand-icon",
    $cssExpandTreeIconPlus$: "goog-tree-expand-icon-plus",
    $cssExpandTreeIconMinus$: "goog-tree-expand-icon-minus",
    $cssExpandTreeIconTPlus$: "goog-tree-expand-icon-tplus",
    $cssExpandTreeIconTMinus$: "goog-tree-expand-icon-tminus",
    $cssExpandTreeIconLPlus$: "goog-tree-expand-icon-lplus",
    $cssExpandTreeIconLMinus$: "goog-tree-expand-icon-lminus",
    $cssExpandTreeIconT$: "goog-tree-expand-icon-t",
    $cssExpandTreeIconL$: "goog-tree-expand-icon-l",
    $cssExpandTreeIconBlank$: "goog-tree-expand-icon-blank",
    $cssExpandedFolderIcon$: "goog-tree-expanded-folder-icon",
    $cssCollapsedFolderIcon$: "goog-tree-collapsed-folder-icon",
    $cssFileIcon$: "goog-tree-file-icon",
    $cssExpandedRootIcon$: "goog-tree-expanded-folder-icon",
    $cssCollapsedRootIcon$: "goog-tree-collapsed-folder-icon",
    $cssSelectedRow$: "selected"
};

$goog$inherits$$($curaapp$TreeControl$$, $goog$ui$tree$TreeControl$$), $JSCompiler_prototypeAlias$$ = $curaapp$TreeControl$$.prototype, $JSCompiler_prototypeAlias$$.$initEvents$ = function() {
    return $goog$events$listen$$(this.$getElement$(), "click", this.$onNodeClick$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("createFormBtn"), "click", this.$createForm$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("resetFormBtn"), "click", this.$resetForm$, $JSCompiler_alias_TRUE$$, this), $goog$events$listen$$($goog$dom$getElement$$("deleteFormBtn"), "click", this.$deleteForm$, $JSCompiler_alias_TRUE$$, this);
}, $JSCompiler_prototypeAlias$$.$onNodeClick$ = function(b) {
    b = $JSCompiler_StaticMethods_getNodeFromEvent_$$(this, b);
    if (!$JSCompiler_StaticMethods_hasChildren$$(b)) return $JSCompiler_StaticMethods_getForm$$(this, b.attributes.uri), this.$currentPath$ = b.attributes.uri;
}, $JSCompiler_prototypeAlias$$.$createForm$ = function() {
    var b;
    return b = new $goog$ui$Prompt$$("Information Required", "Form name", $goog$bind$$(this.$promptHandler_$, this)), b.$validationFn_$ = this.$validateFormName$, b.$setVisible$($JSCompiler_alias_TRUE$$);
}, $JSCompiler_prototypeAlias$$.$validateFormName$ = function(b) {
    return b.length;
}, $JSCompiler_prototypeAlias$$.$promptHandler_$ = function(b) {
    var c, d;
    if ((c = this.$selectedItem_$.attributes) && b) return c = "/" === c.uri || c.children.length ? c.uri : c.$parentUri$, c = "/" === c ? "" : c, this.$currentPath$ = "" + c + "/" + b, d = new $Server$$("" + $app$Settings$SERVER_URL$$()), $goog$net$XhrIo$send$$("" + d.$serverUrl$ + ("/forms" + c + "/" + b), d.$callback_$($JSCompiler_StaticMethods_createFormResponseHandler_$$(this)), "POST", '{"content":""}');
}, $JSCompiler_prototypeAlias$$.$resetForm$ = function() {
    if (this.$currentPath$) return $JSCompiler_StaticMethods_forEachChild$$(this, $curaapp$TreeControl$selectNodeByUri$$(this.$currentPath$)), $JSCompiler_StaticMethods_getForm$$(this, this.$currentPath$);
}, $JSCompiler_prototypeAlias$$.$deleteForm$ = function() {
    var b;
    return this.$currentPath$ ? (b = new $goog$ui$Dialog$$, b.$setContent$("Are you sure you want to delete this form?"), $JSCompiler_StaticMethods_setButtonSet$$(b, $goog$ui$Dialog$ButtonSet$createYesNo$$()), b.$setVisible$($JSCompiler_alias_TRUE$$), $goog$events$listen$$(b, $goog$ui$Dialog$EventType$SELECT$$, $goog$bind$$(this.$deleteFormConfirmationHandler_$, this))) : alert("No form selected");
}, $JSCompiler_prototypeAlias$$.$deleteFormConfirmationHandler_$ = function(b) {
    if ("yes" === b.key) return b = new $Server$$("" + $app$Settings$SERVER_URL$$()), b["delete"]("/forms" + this.$currentPath$, $JSCompiler_StaticMethods_deleteFormResponseHandler_$$(this));
}, $JSCompiler_prototypeAlias$$ = $goog$Uri$$.prototype, $JSCompiler_prototypeAlias$$.$scheme_$ = "", $JSCompiler_prototypeAlias$$.$userInfo_$ = "", $JSCompiler_prototypeAlias$$.$domain_$ = "", $JSCompiler_prototypeAlias$$.$port_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$path_$ = "", $JSCompiler_prototypeAlias$$.$fragment_$ = "", $JSCompiler_prototypeAlias$$.$isReadOnly_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.$ignoreCase_$ = $JSCompiler_alias_FALSE$$, $JSCompiler_prototypeAlias$$.toString = function() {
    if (this.$cachedToString_$) return this.$cachedToString_$;
    var b = [];
    this.$scheme_$ && b.push($goog$Uri$encodeSpecialChars_$$(this.$scheme_$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), ":"), this.$domain_$ && (b.push("//"), this.$userInfo_$ && b.push($goog$Uri$encodeSpecialChars_$$(this.$userInfo_$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), "@"), b.push($goog$isString$$(this.$domain_$) ? encodeURIComponent(this.$domain_$) : $JSCompiler_alias_NULL$$), this.$port_$ != $JSCompiler_alias_NULL$$ && b.push(":", "" + this.$port_$)), this.$path_$ && (this.$domain_$ && "/" != this.$path_$.charAt(0) && b.push("/"), b.push($goog$Uri$encodeSpecialChars_$$(this.$path_$, "/" == this.$path_$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$)));
    var c = "" + this.$queryData_$;
    return c && b.push("?", c), this.$fragment_$ && b.push("#", $goog$Uri$encodeSpecialChars_$$(this.$fragment_$, $goog$Uri$reDisallowedInFragment_$$)), this.$cachedToString_$ = b.join("");
}, $JSCompiler_prototypeAlias$$.$clone$ = function() {
    var b = this.$scheme_$, c = this.$userInfo_$, d = this.$domain_$, e = this.$port_$, f = this.$path_$, g = this.$queryData_$.$clone$(), h = this.$fragment_$, i = new $goog$Uri$$($JSCompiler_alias_NULL$$, this.$ignoreCase_$);
    return b && $JSCompiler_StaticMethods_setScheme$$(i, b), c && $JSCompiler_StaticMethods_setUserInfo$$(i, c), d && $JSCompiler_StaticMethods_setDomain$$(i, d), e && $JSCompiler_StaticMethods_setPort$$(i, e), f && $JSCompiler_StaticMethods_setPath$$(i, f), g && $JSCompiler_StaticMethods_setQueryData$$(i, g), h && $JSCompiler_StaticMethods_setFragment$$(i, h), i;
}, $JSCompiler_prototypeAlias$$.$setReadOnly$ = function(b) {
    return this.$isReadOnly_$ = b, this;
}, $JSCompiler_prototypeAlias$$.$setIgnoreCase$ = function(b) {
    return this.$ignoreCase_$ = b, this.$queryData_$ && this.$queryData_$.$setIgnoreCase$(b), this;
};

var $goog$Uri$encodeSpecialRegExp_$$ = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[\#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[\#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[\#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g;

$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype, $JSCompiler_prototypeAlias$$.$keyMap_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.$count_$ = $JSCompiler_alias_NULL$$, $JSCompiler_prototypeAlias$$.add = function(b, c) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), $JSCompiler_StaticMethods_invalidateCache_$$(this), b = $JSCompiler_StaticMethods_getKeyName_$$(this, b);
    if (this.$containsKey$(b)) {
        var d = this.$keyMap_$.get(b);
        $goog$isArray$$(d) ? d.push(c) : this.$keyMap_$.set(b, [ d, c ]);
    } else this.$keyMap_$.set(b, c);
    return this.$count_$++, this;
}, $JSCompiler_prototypeAlias$$.remove = function(b) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), b = $JSCompiler_StaticMethods_getKeyName_$$(this, b);
    if (this.$keyMap_$.$containsKey$(b)) {
        $JSCompiler_StaticMethods_invalidateCache_$$(this);
        var c = this.$keyMap_$.get(b);
        return $goog$isArray$$(c) ? this.$count_$ -= c.length : this.$count_$--, this.$keyMap_$.remove(b);
    }
    return $JSCompiler_alias_FALSE$$;
}, $JSCompiler_prototypeAlias$$.clear = function() {
    $JSCompiler_StaticMethods_invalidateCache_$$(this), this.$keyMap_$ && this.$keyMap_$.clear(), this.$count_$ = 0;
}, $JSCompiler_prototypeAlias$$.$containsKey$ = function(b) {
    return $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), b = $JSCompiler_StaticMethods_getKeyName_$$(this, b), this.$keyMap_$.$containsKey$(b);
}, $JSCompiler_prototypeAlias$$.$getKeys$ = function() {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
    for (var b = this.$keyMap_$.$getValues$(), c = this.$keyMap_$.$getKeys$(), d = [], e = 0; e < c.length; e++) {
        var f = b[e];
        if ($goog$isArray$$(f)) for (var g = 0; g < f.length; g++) d.push(c[e]); else d.push(c[e]);
    }
    return d;
}, $JSCompiler_prototypeAlias$$.$getValues$ = function(b) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
    if (b) if (b = $JSCompiler_StaticMethods_getKeyName_$$(this, b), this.$containsKey$(b)) {
        var c = this.$keyMap_$.get(b);
        if ($goog$isArray$$(c)) return c;
        b = [], b.push(c);
    } else b = []; else for (var c = this.$keyMap_$.$getValues$(), b = [], d = 0; d < c.length; d++) {
        var e = c[d];
        $goog$isArray$$(e) ? $goog$array$extend$$(b, e) : b.push(e);
    }
    return b;
}, $JSCompiler_prototypeAlias$$.set = function(b, c) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), $JSCompiler_StaticMethods_invalidateCache_$$(this), b = $JSCompiler_StaticMethods_getKeyName_$$(this, b);
    if (this.$containsKey$(b)) {
        var d = this.$keyMap_$.get(b);
        $goog$isArray$$(d) ? this.$count_$ -= d.length : this.$count_$--;
    }
    return this.$keyMap_$.set(b, c), this.$count_$++, this;
}, $JSCompiler_prototypeAlias$$.get = function(b, c) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), b = $JSCompiler_StaticMethods_getKeyName_$$(this, b);
    if (this.$containsKey$(b)) {
        var d = this.$keyMap_$.get(b);
        return $goog$isArray$$(d) ? d[0] : d;
    }
    return c;
}, $JSCompiler_prototypeAlias$$.toString = function() {
    if (this.$encodedQuery_$) return this.$encodedQuery_$;
    if (!this.$keyMap_$) return "";
    for (var b = [], c = 0, d = this.$keyMap_$.$getKeys$(), e = 0; e < d.length; e++) {
        var f = d[e], g = $goog$string$urlEncode$$(f), f = this.$keyMap_$.get(f);
        if ($goog$isArray$$(f)) for (var h = 0; h < f.length; h++) 0 < c && b.push("&"), b.push(g), "" !== f[h] && b.push("=", $goog$string$urlEncode$$(f[h])), c++; else 0 < c && b.push("&"), b.push(g), "" !== f && b.push("=", $goog$string$urlEncode$$(f)), c++;
    }
    return this.$encodedQuery_$ = b.join("");
}, $JSCompiler_prototypeAlias$$.$clone$ = function() {
    var b = new $goog$Uri$QueryData$$;
    return this.$decodedQuery_$ && (b.$decodedQuery_$ = this.$decodedQuery_$), this.$encodedQuery_$ && (b.$encodedQuery_$ = this.$encodedQuery_$), this.$keyMap_$ && (b.$keyMap_$ = this.$keyMap_$.$clone$()), b;
}, $JSCompiler_prototypeAlias$$.$setIgnoreCase$ = function(b) {
    b && !this.$ignoreCase_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), $JSCompiler_StaticMethods_invalidateCache_$$(this), $goog$structs$forEach$$(this.$keyMap_$, function(a, b) {
        var c = b.toLowerCase();
        b != c && (this.remove(b), this.add(c, a));
    }, this)), this.$ignoreCase_$ = b;
}, $pages$Viewer$$.prototype.$init$ = function(b) {
    return b != $JSCompiler_alias_NULL$$ ? b : new $readModels$Viewer$$;
}, $ipad$StudyApplication$$.prototype.$onOpenStudy$ = function() {
    var b;
    return b = new $pages$Viewer$$, b.$init$(), $JSCompiler_StaticMethods_renderFullscreen$$(b);
}, $goog$exportPath_$$("cura.ipad.studylist.start", function(a, b) {
    var c, d;
    console.log("> started"), b && (c = new $goog$Uri$$(b), d = c.$queryData_$.toString()), $app$Settings$init$$(function(b) {
        return b ? console.log("COULD NOT INITIALIZE SETTINGS") : ($JSCompiler_StaticMethods_displayIn$$(new $ipad$StudyApplication$$(d), a), console.log("< started"));
    });
}), $goog$exportPath_$$("ipad.StudyApp.startFormEditor", function(a, b, c) {
    console.log("startFormEditor"), $app$Settings$init$$(function(d) {
        var e;
        return d ? console.log("COULD NOT INITIALIZE SETTINGS") : (e = new $curaapp$TreeControl$$(a), d = new $curaapp$Textarea$$(b, c), $goog$events$listen$$(e, "FORM_SELECTED", d.$loadFormDescription$, $JSCompiler_alias_TRUE$$, d));
    });
});