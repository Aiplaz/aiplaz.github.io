!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
(function () {
  if (!/(^|\.)aiplaz\.github\.io$/.test(location.hostname)) return;
  posthog.init('phc_AFfUAUmKa83D4wYvnZoJPX9LDD2BHUJvCk3Pw2riUk6Q', {
    api_host: 'https://eu.i.posthog.com',
    persistence: 'memory',
    person_profiles: 'never',
    autocapture: false,
    capture_pageview: true,
    capture_pageleave: false,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_feature_flags: true
  });
  posthog.register({ site: 'aiplaz', lang: document.documentElement.lang || '' });
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    posthog.capture('link_click', {
      label: a.getAttribute('data-track') || a.getAttribute('data-i18n') || (a.textContent || '').trim().slice(0, 40),
      target: url.host === location.host ? url.pathname : url.host + url.pathname,
      external: url.host !== location.host,
      page: location.pathname,
      lang: document.documentElement.lang || ''
    }, { send_instantly: true, transport: 'sendBeacon' });
  }, true);
  document.addEventListener('change', function (e) {
    var s = e.target;
    if (s && s.classList && s.classList.contains('lang-select')) {
      posthog.capture('lang_change', { lang: s.value, page: location.pathname });
    }
  }, true);
})();
