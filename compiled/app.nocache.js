function app(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.app=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'app', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 1, $intern_9 = 'iframe', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_11 = ' top: -1000px;', $intern_12 = 'Chrome', $intern_13 = 'CSS1Compat', $intern_14 = '<!doctype html>', $intern_15 = '', $intern_16 = '<html><head><\/head><body><\/body><\/html>', $intern_17 = 'undefined', $intern_18 = 'readystatechange', $intern_19 = 10, $intern_20 = 'script', $intern_21 = 'javascript', $intern_22 = 'Failed to load ', $intern_23 = 'moduleStartup', $intern_24 = 'scriptTagAdded', $intern_25 = 'moduleRequested', $intern_26 = 'meta', $intern_27 = 'name', $intern_28 = 'app::', $intern_29 = '::', $intern_30 = 'gwt:property', $intern_31 = 'content', $intern_32 = '=', $intern_33 = 'gwt:onPropertyErrorFn', $intern_34 = 'Bad handler "', $intern_35 = '" for "gwt:onPropertyErrorFn"', $intern_36 = 'gwt:onLoadErrorFn', $intern_37 = '" for "gwt:onLoadErrorFn"', $intern_38 = '/app.nocache.js', $intern_39 = 'Unable to load Super Dev Mode version of app.', $intern_40 = 'selectingPermutation', $intern_41 = 'app.devmode.js', $intern_42 = '6F339960A0B22951A3E8B5801479BDB7', $intern_43 = ':', $intern_44 = '.cache.js', $intern_45 = 'link', $intern_46 = 'rel', $intern_47 = 'stylesheet', $intern_48 = 'href', $intern_49 = 'head', $intern_50 = 'loadExternalRefs', $intern_51 = 'gwt/clean/clean.css', $intern_52 = 'end';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  app.__sendStats = sendStats;
  app.__moduleName = $intern_4;
  app.__errFn = null;
  app.__moduleBase = $intern_6;
  app.__softPermutationId = $intern_7;
  app.__computePropValue = null;
  app.__getPropMap = null;
  app.__installRunAsyncCode = function(){
  }
  ;
  app.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  app.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  app.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  app.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules[$intern_4].bindings;
    activeModules[$intern_4].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[app.__softPermutationId];
      for (var i = $intern_7; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[$intern_7]] = pair[$intern_8];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_9);
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_10 + $intern_11;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentWindow.document;
    if (navigator.userAgent.indexOf($intern_12) == -1) {
      frameDoc.open();
      var doctype = document.compatMode == $intern_13?$intern_14:$intern_15;
      frameDoc.write(doctype + $intern_16);
      frameDoc.close();
    }
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_17) {
          return typeof $doc.body != $intern_17 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function checkBodyDone(){
        if (!bodyDone) {
          if (!isBodyLoaded()) {
            return;
          }
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_18, checkBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_18, checkBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        checkBodyDone();
      }
      , $intern_19);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement($intern_20);
      script.language = $intern_21;
      if (location.host) {
        script.crossOrigin = $intern_15;
      }
      script.src = code_0;
      if (app.__errFn) {
        script.onerror = function(){
          app.__errFn($intern_4, new Error($intern_22 + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats($intern_23, $intern_24);
    }

    sendStats($intern_23, $intern_25);
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  app.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  app.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement($intern_20);
    script.language = $intern_21;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_26);
    for (var i = $intern_7, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_27), content_0;
      if (name_0) {
        name_0 = name_0.replace($intern_28, $intern_15);
        if (name_0.indexOf($intern_29) >= $intern_7) {
          continue;
        }
        if (name_0 == $intern_30) {
          content_0 = meta.getAttribute($intern_31);
          if (content_0) {
            var value_0, eq = content_0.indexOf($intern_32);
            if (eq >= $intern_7) {
              name_0 = content_0.substring($intern_7, eq);
              value_0 = content_0.substring(eq + $intern_8);
            }
             else {
              name_0 = content_0;
              value_0 = $intern_15;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_33) {
          content_0 = meta.getAttribute($intern_31);
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert($intern_34 + content_0 + $intern_35);
            }
          }
        }
         else if (name_0 == $intern_36) {
          content_0 = meta.getAttribute($intern_31);
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert($intern_34 + content_0 + $intern_37);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    app.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    $wnd.__gwt_activeModules[$intern_4].superdevmode = true;
    var expectedSuffix = $intern_38;
    var scriptTags = $doc.getElementsByTagName($intern_20);
    for (var i = $intern_7;; i++) {
      var tag = scriptTags[i];
      if (!tag) {
        break;
      }
      var candidate = tag.src;
      var lastMatch = candidate.lastIndexOf(expectedSuffix);
      if (lastMatch == candidate.length - expectedSuffix.length) {
        return candidate.substring($intern_7, lastMatch + $intern_8);
      }
    }
    $wnd.alert($intern_39);
    return null;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return app.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_7;
    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    app.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    app.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = app.__getPropMap;
    sendStats($intern_0, $intern_40);
    if (isHostedMode()) {
      return computeUrlForResource($intern_41);
    }
    var strongName;
    try {
      strongName = $intern_42;
      var idx = strongName.indexOf($intern_43);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_8), $intern_19);
        strongName = strongName.substring($intern_7, idx);
      }
    }
     catch (e) {
    }
    app.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_44);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc.createElement($intern_45);
        l.setAttribute($intern_46, $intern_47);
        l.setAttribute($intern_48, computeUrlForResource(stylesheetUrl));
        $doc.getElementsByTagName($intern_49)[$intern_7].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats($intern_50, $intern_1);
    installOneStylesheet($intern_51);
    sendStats($intern_50, $intern_52);
  }

  processMetas();
  app.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = app.__moduleBase;
  var filename = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats($intern_0, $intern_52);
  installScript(filename);
  return true;
}

app.succeeded = app();
