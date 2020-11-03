// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
function getCookie(uri) {
  let _0x54b0df = document[`cookie`][`split`]("; ");
  let _0xebe8a2 = _0x54b0df[`find`](function(canCreateDiscussions) {
    let URI = canCreateDiscussions[`split`]("=")[0];
    return URI == uri;
  });
  if (!_0xebe8a2) {
    return;
  }
  let def = _0xebe8a2[`split`]("=")[1];
  return def;
}
function setCookie(value, object) {
  let id = "";
  id = id + (`; domain=` + location[`hostname`]);
  let _0x547518 = new Date;
  _0x547518[`setTime`](_0x547518[`getTime`]() + 31536E6);
  id = id + ("; path=/; expires=" + _0x547518[`toUTCString`]());
  document[`cookie`] = value + "=" + object + id;
}
"use strict";
Element[`prototype`]["query"] = function(opt_cellsSelector) {
  return this["querySelectorAll"](opt_cellsSelector);
};
Element[`prototype`][`get`] = function(mmCoreSplitViewBlock) {
  return this["getElementById"](mmCoreSplitViewBlock);
};
Element[`prototype`][`remove`] = function() {
  this[`parentElement`][`removeChild`](this);
};
class Js {
  constructor() {
  }
  [`get`](b) {
    if (b[0] == "#") {
      return document["getElementById"](b[`slice`](1));
    }
    let mockB;
    if (b[0] == ".") {
      mockB = document["getElementsByClassName"](b[`slice`](1));
    } else {
      mockB = document["getElementsByTagName"](b);
    }
    if (mockB[`length`] == 0) {
      return;
    }
    if (mockB[`length`] == 1) {
      return mockB[0];
    }
    return mockB;
  }
  [`query`](name) {
    return document["querySelector"](name);
  }
  ["queryAll"](opt_cellsSelector) {
    let _0x189c03 = document["querySelectorAll"](opt_cellsSelector);
    if (_0x189c03[`length`] == 1) {
      return _0x189c03[0];
    }
    return _0x189c03;
  }
  [`tap`](mmCoreSplitViewBlock, extendedInfos) {
    js[`listen`](mmCoreSplitViewBlock, `click`, function(categorydiv) {
      if (!isTap(this, categorydiv)) {
        return;
      }
      extendedInfos[`bind`](this, categorydiv)();
    });
  }
  [`listen`](event, layoutSets, bubbles) {
    if (!event || event != window && event[`length`] != undefined && event[`length`] == 0) {
      return;
    }
    layoutSets = layoutSets["split"](" ");
    if (event[`length`]) {
      for (let unit = 0; unit < event[`length`]; unit++) {
        if (!event[unit]) {
          continue;
        }
        layoutSets[`forEach`]((mmCoreSplitViewBlock) => {
          event[unit][`addEventListener`](mmCoreSplitViewBlock, bubbles);
        });
      }
    } else {
      layoutSets[`forEach`]((eventType) => {
        event["addEventListener"](eventType, bubbles);
      });
    }
  }
  [`unlisten`](event, layoutSets, bubbles) {
    if (!event || event != window && event[`length`] != undefined && event[`length`] == 0) {
      return;
    }
    layoutSets = layoutSets["split"](" ");
    if (event[`length`]) {
      for (let unit = 0; unit < event[`length`]; unit++) {
        if (!event[unit]) {
          continue;
        }
        layoutSets[`forEach`]((type) => {
          event[unit]["removeEventListener"](type, bubbles);
        });
      }
    } else {
      layoutSets[`forEach`]((type) => {
        event[`removeEventListener`](type, bubbles);
      });
    }
  }
  ["css"](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority) {
    if (!mmCoreSplitViewBlock) {
      return;
    }
    if (mmaFrontpagePriority) {
      this[`_setCss`](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority);
      return;
    }
    return this[`_getCss`](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
  }
  [`attr`](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority) {
    if (!mmCoreSplitViewBlock) {
      return;
    }
    if (mmaFrontpagePriority) {
      this[`_setAttr`](mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority);
      return;
    }
    return this["_getAttr"](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
  }
  [`removeAttr`](data, _relatedTarget) {
    if (!data) {
      return;
    }
    if (!data[`length`]) {
      return data[`removeAttribute`](_relatedTarget);
    }
    for (let i = 0; i < data[`length`]; i++) {
      data[i]["removeAttribute"](_relatedTarget);
    }
  }
  [`addClass`](sections, type) {
    if (!sections || sections[`length`] == 0) {
      return;
    }
    if (!sections[`length`]) {
      sections[`classList`]["add"](type);
      return;
    }
    for (let i = 0; i < sections["length"]; i++) {
      sections[i][`classList`]["add"](type);
    }
  }
  ["removeClass"](PL$53, mmCoreSplitViewBlock) {
    if (!PL$53 || PL$53["length"] == 0) {
      return;
    }
    if (!PL$53["length"]) {
      PL$53["classList"][`remove`](mmCoreSplitViewBlock);
      return;
    }
    for (let PL$54 = 0; PL$54 < PL$53[`length`]; PL$54++) {
      PL$53[PL$54][`classList`][`remove`](mmCoreSplitViewBlock);
    }
  }
  ["toggleClass"](elems, mmCoreSplitViewBlock) {
    if (!elems || elems[`length`] == 0) {
      return;
    }
    if (!elems[`length`]) {
      if (elems[`classList`]) {
        elems[`classList`][`toggle`](mmCoreSplitViewBlock);
      }
      return;
    }
    for (let i = 0; i < elems[`length`]; i++) {
      if (elems[i][`classList`]) {
        elems[i]["classList"][`toggle`](mmCoreSplitViewBlock);
      }
    }
  }
  [`hasClass`](element, mmCoreSplitViewBlock) {
    if (!element || !element["classList"]) {
      return;
    }
    return element["classList"][`contains`](mmCoreSplitViewBlock);
  }
  [`hide`](mmCoreSplitViewBlock) {
    if (!mmCoreSplitViewBlock) {
      return;
    }
    this[`css`](mmCoreSplitViewBlock, `display`, `none`);
  }
  [`show`](params) {
    if (!params) {
      return;
    }
    if (!params[`length`]) {
      return params[`style`][`removeProperty`]("display");
    }
    for (let i = 0; i < params[`length`]; i++) {
      params[i]["style"]["removeProperty"](`display`);
    }
  }
  ["empty"](subLabels) {
    if (!subLabels) {
      return;
    }
    if (!subLabels[`length`]) {
      subLabels[`innerHTML`] = "";
      return;
    }
    let r = Array[`prototype`][`slice`][`apply`](subLabels);
    for (let o = 0; o < r[`length`]; o++) {
      this[`_deleteChildren`](r[o]);
    }
  }
  [`remove`](publicAPI) {
    if (!publicAPI) {
      return;
    }
    if (!publicAPI[`length`]) {
      return publicAPI[`remove`]();
    }
    let r = Array[`prototype`][`slice`][`apply`](publicAPI);
    for (let o = 0; o < r[`length`]; o++) {
      r[o][`remove`]();
    }
  }
  ["isVisible"](canCreateDiscussions) {
    return canCreateDiscussions[`offsetWidth`] > 0 || canCreateDiscussions[`offsetHeight`] > 0;
  }
  [`getDomElement`](i) {
    let t = document["createElement"](`div`);
    t[`innerHTML`] = i;
    return t["children"];
  }
  [`append`](anExpectedRequest, anActualRequest) {
    let nb_ft = anActualRequest[`length`];
    for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
      anExpectedRequest[`appendChild`](anActualRequest[0]);
    }
  }
  [`_getCss`](a, data) {
    let e;
    if (!a[`length`]) {
      e = a;
    } else {
      e = a[0];
    }
    let command_codes = window["getComputedStyle"](e);
    let _0x4cc943 = command_codes["getPropertyValue"](data);
    return _0x4cc943;
  }
  [`_setCss`](sections, javascriptName, jsonName) {
    if (!sections["length"]) {
      sections[`style`][javascriptName] = jsonName;
      return;
    }
    for (let i = 0; i < sections[`length`]; i++) {
      sections[i][`style`][javascriptName] = jsonName;
    }
  }
  [`_getAttr`](DeviceMatchers, agentService) {
    if (!DeviceMatchers[`length`]) {
      return DeviceMatchers[`getAttribute`](agentService);
    }
    return DeviceMatchers[0][`getAttribute`](agentService);
  }
  ["_setAttr"](sections, mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
    if (!sections["length"]) {
      sections[`setAttribute`](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    }
    for (let i = 0; i < sections[`length`]; i++) {
      sections[i][`setAttribute`](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    }
  }
  [`_deleteChildren`](canCreateDiscussions) {
    for (; canCreateDiscussions[`lastChild`];) {
      canCreateDiscussions[`removeChild`](canCreateDiscussions[`lastChild`]);
    }
  }
}
class Request {
  constructor() {
    this[`_timeout`] = 7E4;
  }
  ["get"](url, expect, resolve) {
    let xhr = new XMLHttpRequest;
    xhr[`open`](`GET`, url, !![]);
    xhr[`withCredentials`] = !![];
    if (!resolve) {
      xhr[`timeout`] = this[`_timeout`];
    } else {
      xhr[`setTimeout`] = resolve;
    }
    xhr["onreadystatechange"] = () => {
      if (xhr[`readyState`] !== 4) {
        return;
      }
      if (xhr["status"] === 200) {
        let message = xhr[`responseText`];
        try {
          message = JSON[`parse`](message);
        } catch (_0x1f89e1) {
        }
        if (expect) {
          expect(null, message);
        }
      } else {
        if (xhr[`status`]) {
          if (expect) {
            expect(xhr[`status`], xhr["responseText"]);
          }
        }
      }
    };
    xhr["ontimeout"] = (canCreateDiscussions) => {
      if (expect) {
        expect(408);
      }
    };
    xhr["onerror"] = () => {
      if (expect) {
        expect(408);
      }
    };
    xhr[`send`]();
    return xhr;
  }
  ["post"](url, data, $, themeFiles, aCompartments) {
    let opts = new XMLHttpRequest;
    opts["open"](`POST`, url, !![]);
    opts[`withCredentials`] = !![];
    if (aCompartments) {
      for (let name in aCompartments) {
        opts[`setRequestHeader`](name, aCompartments[name]);
      }
    }
    if (!themeFiles) {
      opts["timeout"] = this[`_timeout`];
    } else {
      if (themeFiles) {
        opts[`setTimeout`] = themeFiles;
      }
    }
    let message;
    try {
      if (!data) {
        data = {};
      }
      message = JSON[`stringify`](data);
      opts[`setRequestHeader`]("Content-type", "application/json");
    } catch (_0x386bbd) {
      message = data;
    }
    opts[`onreadystatechange`] = () => {
      if (opts[`readyState`] !== 4) {
        return;
      }
      if (opts[`status`] === 200) {
        let data = opts["responseText"];
        try {
          data = JSON[`parse`](data);
        } catch (_0x5be7fa) {
        }
        if ($) {
          $(null, data);
        }
      } else {
        if (opts["status"]) {
          if ($) {
            $(opts[`status`], opts[`responseText`]);
          }
        }
      }
    };
    opts[`ontimeout`] = () => {
      if ($) {
        $(408);
      }
    };
    opts[`onerror`] = () => {
      if ($) {
        $(408);
      }
    };
    opts["send"](message);
    return opts;
  }
}
const js = new Js;
const request = new Request;
const onlineChatConfig = {
  "support_domain" : "support.cs.money",
  "ws_protocol" : `wss`,
  "https_support_domain" : `https://support.cs.money`
};
if (window[`location`][`href`][`indexOf`]("dota.money") !== -1) {
  onlineChatConfig[`support_domain`] = "support.cs.money"; // se dota.money
  onlineChatConfig[`https_support_domain`] = `https://support.cs.money`;
}
if (window[`location`][`href`][`indexOf`](`127.0.0.1`) !== -1) { 
  onlineChatConfig[`support_domain`] = "127.0.0.1"; // se for 127.0.0.1
  onlineChatConfig[`ws_protocol`] = "ws";
  onlineChatConfig[`https_support_domain`] = "";
}
if (window["location"][`href`][`indexOf`](`http://localhost:3000`) !== -1) {
  onlineChatConfig["support_domain"] = `localhost`; // se for localhost:3000
  onlineChatConfig[`ws_protocol`] = "ws";
  onlineChatConfig[`https_support_domain`] = "http://localhost";
}
class Calendar {
  constructor() {
    this[`message_dates`] = null;
  }
  ["init"]() {
    if (this[`_current_month`] == undefined || this["_current_year"] == undefined) {
      let _0x2f29a0 = new Date;
      this["_current_year"] = _0x2f29a0[`getFullYear`]();
      this[`_current_month`] = _0x2f29a0[`getMonth`]();
    }
    this[`_render`](this[`_current_year`], this[`_current_month`]);
    this[`loadMessageDates`]();
  }
  [`loadMessageDates`]() {
    const url = (new Date)[`getTimezoneOffset`]();
    request["get"](onlineChatConfig[`https_support_domain`] + "/get_message_dates?timezone_offset=" + url, (body, data) => {
      if (body) {
        return console[`log`](body);
      }
      if (!Array[`isArray`](data) || data[`length`] == 0) {
        return;
      }
      this[`message_dates`] = data;
      this[`_render`](this["_current_year"], this[`_current_month`]);
    });
  }
  [`nextMonth`]() {
    let value = new Date(this[`_current_year`], this["_current_month"]);
    value[`setMonth`](value[`getMonth`]() + 1);
    this[`_current_year`] = value["getFullYear"]();
    this[`_current_month`] = value["getMonth"]();
    this[`_render`](this[`_current_year`], this["_current_month"]);
  }
  [`prevMonth`]() {
    let _0x2ef27c = new Date(this[`_current_year`], this["_current_month"]);
    _0x2ef27c[`setMonth`](_0x2ef27c[`getMonth`]() - 1);
    this[`_current_year`] = _0x2ef27c[`getFullYear`]();
    this[`_current_month`] = _0x2ef27c[`getMonth`]();
    this["_render"](this[`_current_year`], this[`_current_month`]);
  }
  [`_render`](ms_since_1970, m) {
    console[`time`](`Calendar._render`);
    let d = new Date(ms_since_1970, m);
    let _0x292158 = new Date(d["getTime"]());
    let _0x592b7 = new Date(d["setMonth"](d[`getMonth`]() + 1));
    let dowClass = new Date(_0x592b7["setDate"](_0x592b7[`getDate`]() - 1));
    let _0x53bf38 = `<div class="row_table row_table_header">\n                  <div class="col">MON</div><div class="col">TUE</div><div class="col">WED</div>\n                  <div class="col">THU</div><div class="col">FRI</div><div class="col">SAT</div>\n                  <div class="col">SUN</div>\n\t\t\t\t  </div><div class="row_table">`;
    const _0x480221 = _0x292158[`getDay`]() ? _0x292158[`getDay`]() : 7;
    if (_0x480221 == 1) {
      for (let delta = 7; delta > 0; delta--) {
        let next = new Date(_0x292158[`getTime`]());
        next = new Date(next["setDate"](d[`getDate`]() - delta));
        _0x53bf38 = _0x53bf38 + (`<div class="col col_past">` + next[`getDate`]() + `</div>`);
      }
      _0x53bf38 = _0x53bf38 + '</div><div class="row_table">';
    }
    for (let delta = _0x480221 - 1; delta > 0; delta--) {
      let next = new Date(_0x292158[`getTime`]());
      next = new Date(next[`setDate`](d["getDate"]() - delta));
      _0x53bf38 = _0x53bf38 + (`<div class="col col_past">` + next["getDate"]() + "</div>");
    }
    for (let o = 0; o < dowClass[`getDate`](); o++) {
      let tooltip = new Date(_0x292158[`getTime`]());
      tooltip = new Date(tooltip[`setDate`](d["getDate"]() + o));
      _0x53bf38 = _0x53bf38 + ('<div class="col" day="' + tooltip["getDate"]() + `">\n\t\t\t\t\t` + tooltip[`getDate`]() + `\n\t\t\t\t</div>`);
      if (tooltip[`getDay`]() == 0) {
        _0x53bf38 = _0x53bf38 + `</div><div class="row_table">`;
      }
    }
    for (let o = 0; o < 7 - dowClass["getDay"](); o++) {
      let tooltip = new Date(dowClass[`getTime`]());
      tooltip = new Date(tooltip["setDate"](d[`getDate`]() + o));
      _0x53bf38 = _0x53bf38 + ('<div class="col col_past">' + tooltip[`getDate`]() + `</div>`);
    }
    if (_0x292158["getDay"]() > 1 && dowClass[`getDay`]() > 1) {
      _0x53bf38 = _0x53bf38 + `</div><div class="row_table">`;
      for (let _0x53e315 = 0; _0x53e315 < 7; _0x53e315++) {
        let stringConstructorEndTime = new Date(dowClass[`getTime`]());
        stringConstructorEndTime = new Date(stringConstructorEndTime[`setDate`](d[`getDate`]() + _0x53e315 + 7 - dowClass["getDay"]()));
        _0x53bf38 = _0x53bf38 + (`<div class="col col_past">` + stringConstructorEndTime[`getDate`]() + `</div>`);
      }
    }
    js["get"](`#online_chat_month`)["innerText"] = onlineChatLanguage[MONTHS[m]][current_language];
    js["get"]("#online_chat_year")[`innerText`] = ms_since_1970;
    js["get"](`#online_chat_calendar_table`)[`innerHTML`] = _0x53bf38;
    if (!this[`message_dates`]) {
      return;
    }
    for (let i = 0; i < this[`message_dates`][`length`]; i++) {
      let _0x581a3d = this[`message_dates`][i]["split"]("-");
      let backUserId = _0x581a3d[0];
      let backGroupId = _0x581a3d[1];
      let _0xc7b8be = _0x581a3d[2];
      if (this[`_current_year`] != backUserId || this[`_current_month`] != backGroupId) {
        continue;
      }
      let _0x5f1ce2 = js[`query`](`#online_chat_calendar_table .col[day="` + _0xc7b8be + '"');
      _0x5f1ce2[`innerHTML`] += `<div class="col_active"></div>`;
    }
    console[`timeEnd`](`Calendar._render`);
  }
}
const calendar = new Calendar;
const onlineChatLanguage = {
  "january" : {
    "en" : `January`,
    "ru" : "\u042f\u043d\u0432\u0430\u0440\u044f",
    "de" : "January",
    "fr" : "January",
    "es" : "January",
    "tr" : `January`,
    "zh" : "January",
    "pl" : `January`,
    "pt" : `January`,
    "sv" : `January`,
    "jp" : "January",
    "no" : `January`,
    "ar" : "January",
    "bg" : `January`,
    "hi" : `January`,
    "nl" : `January`,
    "kr" : `January`,
    "hu" : "January",
    "cs" : "January",
    "th" : `January`
  },
  "february" : {
    "en" : "February",
    "ru" : `\u0424\u0435\u0432\u0440\u0430\u043b\u044f`,
    "de" : `February`,
    "fr" : "February",
    "es" : "February",
    "tr" : `February`,
    "zh" : "February",
    "pl" : `February`,
    "pt" : `February`,
    "sv" : "February",
    "jp" : `February`,
    "no" : `February`,
    "ar" : `February`,
    "bg" : "February",
    "hi" : "February",
    "nl" : `February`,
    "kr" : `February`,
    "hu" : `February`,
    "cs" : "February",
    "th" : `February`
  },
  "march" : {
    "en" : `March`,
    "ru" : "\u041c\u0430\u0440\u0442\u0430",
    "de" : `March`,
    "fr" : `March`,
    "es" : `March`,
    "tr" : "March",
    "zh" : `March`,
    "pl" : `March`,
    "pt" : "March",
    "sv" : "March",
    "jp" : `March`,
    "no" : `March`,
    "ar" : "March",
    "bg" : `March`,
    "hi" : "March",
    "nl" : `March`,
    "kr" : `March`,
    "hu" : "March",
    "cs" : "March",
    "th" : `March`
  },
  "april" : {
    "en" : `April`,
    "ru" : `\u0410\u043f\u0440\u0435\u043b\u044f`,
    "de" : `April`,
    "fr" : `April`,
    "es" : `April`,
    "tr" : `April`,
    "zh" : "April",
    "pl" : `April`,
    "pt" : `April`,
    "sv" : "April",
    "jp" : `April`,
    "no" : `April`,
    "ar" : `April`,
    "bg" : "April",
    "hi" : `April`,
    "nl" : `April`,
    "kr" : `April`,
    "hu" : `April`,
    "cs" : "April",
    "th" : `April`
  },
  "may" : {
    "en" : `May`,
    "ru" : `\u041c\u0430\u044f`,
    "de" : `May`,
    "fr" : `May`,
    "es" : "May",
    "tr" : `May`,
    "zh" : `May`,
    "pl" : `May`,
    "pt" : `May`,
    "sv" : `May`,
    "jp" : `May`,
    "no" : `May`,
    "ar" : `May`,
    "bg" : `May`,
    "hi" : `May`,
    "nl" : "May",
    "kr" : "May",
    "hu" : `May`,
    "cs" : `May`,
    "th" : `May`
  },
  "june" : {
    "en" : `June`,
    "ru" : "\u0418\u044e\u043d\u044f",
    "de" : `June`,
    "fr" : `June`,
    "es" : `June`,
    "tr" : `June`,
    "zh" : "June",
    "pl" : `June`,
    "pt" : `June`,
    "sv" : `June`,
    "jp" : `June`,
    "no" : `June`,
    "ar" : "June",
    "bg" : `June`,
    "hi" : `June`,
    "nl" : `June`,
    "kr" : `June`,
    "hu" : "June",
    "cs" : "June",
    "th" : `June`
  },
  "july" : {
    "en" : `July`,
    "ru" : "\u0418\u044e\u043b\u044f",
    "de" : `July`,
    "fr" : "July",
    "es" : "July",
    "tr" : "July",
    "zh" : `July`,
    "pl" : "July",
    "pt" : `July`,
    "sv" : `July`,
    "jp" : `July`,
    "no" : `July`,
    "ar" : `July`,
    "bg" : `July`,
    "hi" : "July",
    "nl" : `July`,
    "kr" : `July`,
    "hu" : `July`,
    "cs" : `July`,
    "th" : `July`
  },
  "august" : {
    "en" : `August`,
    "ru" : `\u0410\u0432\u0433\u0443\u0441\u0442\u0430`,
    "de" : `August`,
    "fr" : `August`,
    "es" : `August`,
    "tr" : "August",
    "zh" : `August`,
    "pl" : "August",
    "pt" : `August`,
    "sv" : `August`,
    "jp" : `August`,
    "no" : "August",
    "ar" : `August`,
    "bg" : `August`,
    "hi" : `August`,
    "nl" : `August`,
    "kr" : `August`,
    "hu" : `August`,
    "cs" : `August`,
    "th" : `August`
  },
  "september" : {
    "en" : `September`,
    "ru" : `\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f`,
    "de" : `September`,
    "fr" : `September`,
    "es" : `September`,
    "tr" : `September`,
    "zh" : "September",
    "pl" : `September`,
    "pt" : `September`,
    "sv" : "September",
    "jp" : `September`,
    "no" : `September`,
    "ar" : `September`,
    "bg" : `September`,
    "hi" : `September`,
    "nl" : `September`,
    "kr" : `September`,
    "hu" : "September",
    "cs" : `September`,
    "th" : `September`
  },
  "october" : {
    "en" : "October",
    "ru" : `\u041e\u043a\u0442\u044f\u0431\u0440\u044f`,
    "de" : "October",
    "fr" : `October`,
    "es" : `October`,
    "tr" : `October`,
    "zh" : `October`,
    "pl" : `October`,
    "pt" : `October`,
    "sv" : "October",
    "jp" : `October`,
    "no" : `October`,
    "ar" : `October`,
    "bg" : "October",
    "hi" : `October`,
    "nl" : `October`,
    "kr" : `October`,
    "hu" : "October",
    "cs" : `October`,
    "th" : "October"
  },
  "november" : {
    "en" : `November`,
    "ru" : `\u041d\u043e\u044f\u0431\u0440\u044f`,
    "de" : "November",
    "fr" : "November",
    "es" : `November`,
    "tr" : `November`,
    "zh" : `November`,
    "pl" : `November`,
    "pt" : `November`,
    "sv" : `November`,
    "jp" : `November`,
    "no" : `November`,
    "ar" : `November`,
    "bg" : `November`,
    "hi" : `November`,
    "nl" : "November",
    "kr" : "November",
    "hu" : `November`,
    "cs" : `November`,
    "th" : "November"
  },
  "december" : {
    "en" : "December",
    "ru" : "\u0414\u0435\u043a\u0430\u0431\u0440\u044f",
    "de" : "December",
    "fr" : `December`,
    "es" : "December",
    "tr" : "December",
    "zh" : "December",
    "pl" : `December`,
    "pt" : `December`,
    "sv" : `December`,
    "jp" : `December`,
    "no" : "December",
    "ar" : `December`,
    "bg" : `December`,
    "hi" : "December",
    "nl" : `December`,
    "kr" : `December`,
    "hu" : "December",
    "cs" : `December`,
    "th" : "December"
  },
  "file_size_limit_alert" : {
    "en" : "File size limit is 5 MB.",
    "ru" : `\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 - 5 \u041c\u0431.`,
    "de" : `File size limit is 5 MB.`,
    "fr" : "File size limit is 5 MB.",
    "es" : `File size limit is 5 MB.`,
    "tr" : `File size limit is 5 MB.`,
    "zh" : "File size limit is 5 MB.",
    "pl" : `File size limit is 5 MB.`,
    "pt" : "File size limit is 5 MB.",
    "sv" : `File size limit is 5 MB.`,
    "jp" : `File size limit is 5 MB.`,
    "no" : `File size limit is 5 MB.`,
    "ar" : `File size limit is 5 MB.`,
    "bg" : "File size limit is 5 MB.",
    "hi" : `File size limit is 5 MB.`,
    "nl" : `File size limit is 5 MB.`,
    "kr" : "File size limit is 5 MB.",
    "hu" : `File size limit is 5 MB.`,
    "cs" : `File size limit is 5 MB.`,
    "th" : `File size limit is 5 MB.`
  },
  "image_type_alert" : {
    "en" : `You can only attach jpeg or png images.`,
    "ru" : `\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e jpeg \u0438 png \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f.`,
    "de" : "You can only attach jpeg or png images.",
    "fr" : `You can only attach jpeg or png images.`,
    "es" : `You can only attach jpeg or png images.`,
    "tr" : `You can only attach jpeg or png images.`,
    "zh" : `You can only attach jpeg or png images.`,
    "pl" : `You can only attach jpeg or png images.`,
    "pt" : `You can only attach jpeg or png images.`,
    "sv" : "You can only attach jpeg or png images.",
    "jp" : `You can only attach jpeg or png images.`,
    "no" : `You can only attach jpeg or png images.`,
    "ar" : `You can only attach jpeg or png images.`,
    "bg" : `You can only attach jpeg or png images.`,
    "hi" : "You can only attach jpeg or png images.",
    "nl" : `You can only attach jpeg or png images.`,
    "kr" : `You can only attach jpeg or png images.`,
    "hu" : "You can only attach jpeg or png images.",
    "cs" : `You can only attach jpeg or png images.`,
    "th" : `You can only attach jpeg or png images.`
  },
  "you_are_banned_untill" : {
    "en" : `You are banned from chat untill `,
    "ru" : `\u0412\u044b \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u044b \u0432 \u0447\u0430\u0442\u0435 \u0434\u043e `,
    "de" : `You are banned from chat untill `,
    "fr" : "You are banned from chat untill ",
    "es" : `You are banned from chat untill `,
    "tr" : `You are banned from chat untill `,
    "zh" : `You are banned from chat untill `,
    "pl" : "You are banned from chat untill ",
    "pt" : `You are banned from chat untill `,
    "sv" : `You are banned from chat untill `,
    "jp" : "You are banned from chat untill ",
    "no" : "You are banned from chat untill ",
    "ar" : `You are banned from chat untill `,
    "bg" : `You are banned from chat untill `,
    "hi" : "You are banned from chat untill ",
    "nl" : `You are banned from chat untill `,
    "kr" : `You are banned from chat untill `,
    "hu" : `You are banned from chat untill `,
    "cs" : "You are banned from chat untill ",
    "th" : `You are banned from chat untill `
  },
  "you_are_banned_forever" : {
    "en" : "You are banned forever from chat.",
    "ru" : `\u0412\u044b \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u044b \u0432 \u0447\u0430\u0442\u0435.`,
    "de" : `You are banned forever from chat.`,
    "fr" : `You are banned forever from chat.`,
    "es" : `You are banned forever from chat.`,
    "tr" : "You are banned forever from chat.",
    "zh" : `You are banned forever from chat.`,
    "pl" : `You are banned forever from chat.`,
    "pt" : `You are banned forever from chat.`,
    "sv" : `You are banned forever from chat.`,
    "jp" : `You are banned forever from chat.`,
    "no" : `You are banned forever from chat.`,
    "ar" : "You are banned forever from chat.",
    "bg" : "You are banned forever from chat.",
    "hi" : `You are banned forever from chat.`,
    "nl" : `You are banned forever from chat.`,
    "kr" : `You are banned forever from chat.`,
    "hu" : "You are banned forever from chat.",
    "cs" : `You are banned forever from chat.`,
    "th" : `You are banned forever from chat.`
  }
};
class AudioPlayer {
  constructor() {
    this["notification"] = null;
  }
  [`playNotification`]() {
    if (!this[`notification`]) {
      this[`notification`] = new Audio(`https://cs.money/sounds/support_notification.mp3`);
    }
    this["notification"][`play`]();
  }
}
const audioPlayer = new AudioPlayer;
class Websocket {
  constructor(callback) {
    this["url"] = callback;
    this["ws"] = null;
    this[`connect_tries`] = 0;
  }
  [`connect`]() {
    this["ws"] = new WebSocket(this[`url`] + "?steamid=" + getCookie(`steamid`));
    this[`connect_tries`]++;
    console[`log`](`websocket.js: Connecting... Connection tries: ` + this["connect_tries"]);
    this["ws"][`onopen`] = () => {
      console[`log`](`websocket.js: Opened`);
      this["ws"]["onmessage"] = (mmCoreSplitViewBlock) => {
        this["on_message_callback"](mmCoreSplitViewBlock);
      };
    };
    this["ws"][`onerror`] = (b) => {
      console[`log`]("websocket.js: Error", b);
    };
    this["ws"]["onclose"] = (b) => {
      console[`log`](`websocket.js: Closed`, b);
      let ajaxInterval = this[`connect_tries`] * 1E3;
      if (this[`connect_tries`] > 5) {
        ajaxInterval = 5E3;
      }
      setTimeout(() => {
        this[`connect`]();
      }, ajaxInterval);
    };
  }
  [`setOnMessageCallback`](canCreateDiscussions) {
    this[`on_message_callback`] = canCreateDiscussions;
  }
}
class ChatView {
  constructor() {
    this["prevState"] = `chat`;
    this[`currState`] = `chat`;
  }
  ["switchToRating"]() {
    this[`clearChatInterface`]();
    js[`removeClass`](onlineChatDialogWindow, "hidden");
    js[`removeClass`](js[`get`]("#online_chat_text_input"), `hidden`);
    js["removeClass"](js[`get`]("#chat_rating"), "hidden");
    js[`addClass`](js["get"]("#online_chat"), `rating_opened`);
    this[`updateState`](`rating`);
  }
  [`switchToChat`]() {
    this[`clearChatInterface`]();
    js["removeClass"](onlineChatDialogWindow, "hidden");
    js["removeClass"](js[`get`](`#online_chat_text_input`), `hidden`);
    this["updateState"](`chat`);
  }
  [`switchToFeedback`]() {
    this[`clearChatInterface`]();
    js[`css`](js[`get`]("#chat_feedback"), "display", `block`);
    js["css"](js[`get`](`#chat_ready_button`), "display", `block`);
    this[`updateState`](`feedback`);
  }
  ["switchToPositiveFeedback"]() {
    this["clearChatInterface"]();
    js[`css`](js[`get`](`#chat_feedback_positive`), "display", "block");
    js[`css`](js[`get`](`#chat_ready_button_positive`), `display`, `block`);
    this["updateState"]("feedbackPositive");
  }
  [`switchToComment`]() {
    this["clearChatInterface"]();
    js["css"](js[`get`](`#online_chat_tell`), `display`, `block`);
    js["removeClass"](js[`get`](`#online_chat_text_input`), `hidden`);
    this["updateState"](`comment`);
  }
  ["switchToSupport"]() {
    if (!js[`hasClass`](js[`get`]("#online_chat_support"), `active`)) {
      js[`addClass`](js[`get`](`#online_chat_support`), `active`);
      js["removeClass"](js["get"](`#online_chat_faq`), `active`);
    }
    if (js[`hasClass`](js["get"](".online_chat_header"), "faq")) {
      js[`removeClass`](js["get"](".online_chat_footer"), `faq`);
      js[`removeClass`](js[`get`](`.online_chat_header`), `faq`);
      js[`removeClass`](js["get"](`.online_chat_drop_container`), `faq`);
    }
    setTimeout(() => {
      return js["addClass"](js[`get`](`.online_chat_drop_container`), `support`);
    }, 150);
    setTimeout(() => {
      return js[`addClass`](js["get"](`.online_chat_header`), "supprot");
    }, 150);
    setTimeout(() => {
      return js[`addClass`](js[`get`](".online_chat_footer"), `supprot`);
    }, 150);
    if (this["prevState"] === `rating`) {
      this[`switchToRating`]();
    }
    if (this[`prevState`] === `chat`) {
      this[`switchToChat`]();
    }
    if (this[`prevState`] === `feedback`) {
      this[`switchToFeedback`]();
    }
    if (this["prevState"] === `comment`) {
      this["switchToComment"]();
    }
    if (this["prevState"] === `feedbackPositive`) {
      this[`switchToPositiveFeedback`]();
    }
  }
  ["switchToFaq"]() {
    this[`clearChatInterface`]();
    if (!js[`hasClass`](js["get"](`#online_chat_faq`), `active`)) {
      js["addClass"](js["get"](`#online_chat_faq`), "active");
      js[`removeClass`](js[`get`](`#online_chat_support`), `active`);
    }
    if (js[`hasClass`](js[`get`](`.online_chat_drop_container`), "support")) {
      js[`removeClass`](js[`get`](`.online_chat_drop_container`), `support`);
    }
    setTimeout(function() {
      if (js[`hasClass`](js[`get`](`.online_chat_header`), `search`)) {
        js[`removeClass`](js[`get`](`.online_chat_footer`), `search`);
        js[`removeClass`](js[`get`](`.online_chat_header`), `search`);
        js[`removeClass`](js[`get`](`.online_chat_drop_container`), "search");
      }
      if (!js[`hasClass`](js["get"](`.online_chat_calendar`), `hidden`)) {
        js[`addClass`](js[`get`](`.online_chat_calendar`), `hidden`);
      }
    }, 150);
    setTimeout(() => {
      return js[`addClass`](js[`get`](`.online_chat_drop_container`), "faq");
    }, 150);
    setTimeout(() => {
      return js["addClass"](js[`get`](`.online_chat_header`), `faq`);
    }, 150);
    setTimeout(() => {
      return js["addClass"](js[`get`](`.online_chat_footer`), `faq`);
    }, 150);
    this[`updateState`]("faq");
  }
  [`clearChatInterface`]() {
    js[`removeClass`](js[`get`](`#online_chat`), `rating_opened`);
    js[`addClass`](js[`get`](`#chat_rating`), "hidden");
    js[`removeClass`](js[`get`]("#online_chat"), `rating_opened`);
    js["css"](js[`get`]("#chat_ready_button"), `display`, `none`);
    js[`css`](js[`get`](`#chat_ready_button_positive`), "display", "none");
    js[`addClass`](onlineChatDialogWindow, "hidden");
    js[`addClass`](js[`get`](`#online_chat_text_input`), `hidden`);
    js["css"](js[`get`](`#chat_feedback`), `display`, `none`);
    js[`css`](js[`get`](`#chat_feedback_positive`), `display`, `none`);
    js[`addClass`](js["get"]("#online_chat_text_input"), `hidden`);
    js[`css`](js[`get`](`#online_chat_tell`), `display`, "none");
  }
  ["updateState"](canCreateDiscussions) {
    this["prevState"] = this[`currState`];
    this[`currState`] = canCreateDiscussions;
  }
}
const chatView = new ChatView;
console[`time`](`online_chat`);
const MONTHS = [`january`, `february`, `march`, `april`, `may`, `june`, `july`, `august`, "september", `october`, `november`, `december`];
const feedback = {
  "rating" : 0,
  "comments" : []
};
let can_give_feedback = ![];
let faq_items;
const onlineChat = js["get"](`#online_chat`);
const onlineChatDrop = js[`get`](`#online_chat_drop`);
const onlineChatDialogWindow = js["get"](`#online_chat_dialog_window`);
const onlineChatTextInput = js["get"](`#online_chat_text_input`);
const onlineChatSearchInput = js[`get`](`#online_chat_search_input`);
const chatRating = js[`get`](`#chat_rating`);
const chatMessageNotification = js["get"](`.online_chat_button_notification`);
const hintsBlock = js["get"](`#online_chat_hints_block`);
let messageCount = 0;
let messagesAreOver = ![];
let lastSupportMessage = {};
let lastMessage = null;
let lastMessageDay = "0 october";
let foundElements = [];
let onlineChatCursor = {
  "element" : onlineChatTextInput,
  "start" : 0,
  "end" : 0
};
let selection = window[`getSelection`]();
const maxImgWidth = 200;
const maxImgHeight = 200;
if (getCookie(`mute_chat_notifications`) === "1") {
  js[`removeClass`](js[`get`](".sound_inactive"), `hidden`);
  js[`addClass`](js[`get`](".sound_active"), "hidden");
}
request["get"](onlineChatConfig[`https_support_domain`] + `/get_unread_messages`, (body, canCreateDiscussions) => {
  if (body) {
    return console[`log`](body);
  }
  if (!canCreateDiscussions[`user_unread`]) {
    return;
  }
  js[`removeClass`](chatMessageNotification, "hidden");
  chatMessageNotification[`innerText`] = canCreateDiscussions[`user_unread`];
});
request[`get`](onlineChatConfig[`https_support_domain`] + `/get_support_faq_questions?language=` + getCookie("language"), function(body, canCreateDiscussions) {
  if (body) {
    return console["log"](body);
  }
  faq_items = canCreateDiscussions;
  renderFaqItems(faq_items);
  if (getCookie(`language`) != "ru" && getCookie(`language`) != "en") {
    request["get"](onlineChatConfig["https_support_domain"] + `/get_support_faq_questions?language=en`, function(canCreateDiscussions, data) {
      localStorage[`setItem`](`faq`, JSON[`stringify`](data));
    });
  } else {
    localStorage[`setItem`]("faq", JSON["stringify"](faq_items));
  }
});
document[`addEventListener`](`click`, (canCreateDiscussions) => {
  if (!canCreateDiscussions[`target`][`closest`](`.smile_container`) && !canCreateDiscussions[`target`][`closest`](`.emoji_call`)) {
    js["addClass"](js["get"]("#smile_container"), `hidden`);
    js[`removeClass`](js[`get`](`.input_text_smile_container`), "active");
  }
});
js[`listen`](js[`get`](`.support_buttons`), `click`, function(canCreateDiscussions) {
  js[`addClass`](this, `check`);
  this[`addEventListener`](`animationend`, () => {
    return js["removeClass"](this, "check");
  }, ![]);
});
js["get"]("#search_online_chat")[`addEventListener`](`click`, function(canCreateDiscussions) {
  setTimeout(() => {
    js[`addClass`](js[`get`](`.online_chat_header`), `search`);
    onlineChatSearchInput[`focus`]();
  }, 150);
  request[`post`](onlineChatConfig[`https_support_domain`] + `/open_search_online_chat`, {}, function(body, canCreateDiscussions) {
    if (body) {
      console[`log`](body);
    }
  });
});
js[`get`](`#prev_online_chat`)[`addEventListener`]("click", function(canCreateDiscussions) {
  prevOnlineChatPage();
});
js[`get`]("#online_chat_calendar")[`addEventListener`](`click`, function(canCreateDiscussions) {
  calendar[`init`]();
  if (js["hasClass"](js[`get`](`.online_chat_calendar`), "hidden")) {
    setTimeout(() => {
      js[`removeClass`](js[`get`](`.online_chat_calendar`), "hidden");
      js[`addClass`](js[`get`](`.online_chat_calendar_container`), `bounceInUp`);
    }, 150);
  } else {
    setTimeout(() => {
      return js[`addClass`](js[`get`](".online_chat_calendar"), "hidden");
    }, 150);
  }
});
js[`listen`](onlineChatTextInput, `touchstart touchmove touchend`, function(canCreateDiscussions) {
  updateInputCursor();
});
js[`listen`](onlineChatTextInput, `click keyup`, function(targets) {
  if (targets[`target`][`tagName`] !== "IMG") {
    return updateInputCursor();
  }
  selection = window[`getSelection`]();
  if (selection[`type`] === `Range`) {
    return updateInputCursor();
  }
  let _0x436c2f = targets[`pageX`] - (targets["target"][`getBoundingClientRect`]()[`left`] + pageXOffset);
  const sections = [...onlineChatTextInput["childNodes"]];
  for (let i = 0; i < sections["length"]; i++) {
    if (sections[i] == targets[`target`]) {
      if (_0x436c2f < targets["target"][`offsetWidth`] / 2) {
        selection["collapse"](onlineChatTextInput, i);
      } else {
        selection["collapse"](onlineChatTextInput, i + 1);
      }
    }
  }
  updateInputCursor();
});
onlineChatTextInput[`addEventListener`]("input", function(canCreateDiscussions) {
  let gradient = onlineChatTextInput[`innerHTML`][`trim`]()[`replace`](/<br>/g, "")[`replace`](/<div><\/div>/g, "");
  let labels = JSON[`parse`](localStorage["getItem"]("faq"));
  let timemodified = [];
  if (localStorage[`getItem`](`active`) != `true` && labels && gradient["length"] > 2) {
    let fftBinsOfFreq = [{
      "word" : `\u043e\u0432\u0435\u0440\u0441\u0442\u043e\u043a`,
      "replace" : `overstock`
    }, {
      "word" : "\u0431\u0430\u0439",
      "replace" : `buy`
    }, {
      "word" : `\u043c\u043e\u0434`,
      "replace" : `mode`
    }, {
      "word" : `\u0442\u0440\u0435\u0439\u0434`,
      "replace" : `\u043e\u0431\u043c\u0435\u043d`
    }];
    let data = gradient["split"](" ");
    for (let j = 0; j < labels[`length`]; j++) {
      labels[j][`count`] = 0;
      for (let index = 0; index < data[`length`]; index++) {
        if (data[index]["length"] < 3) {
          continue;
        }
        for (let i = 0; i < fftBinsOfFreq[`length`]; i++) {
          if (data[index][`toLowerCase`]()[`indexOf`](fftBinsOfFreq[i]["word"]) != -1) {
            data[index] = fftBinsOfFreq[i][`replace`];
          }
        }
        if (labels[j][`title`][`toLowerCase`]()[`indexOf`](data[index][`toLowerCase`]()) != -1) {
          labels[j]["count"]++;
        }
      }
    }
    labels[`sort`](function(b, a) {
      return b[`count`] - a["count"];
    });
    labels[`reverse`]();
    console[`log`](labels);
    for (let i = 0; i < 3; i++) {
      if (labels[i]["count"] > 0) {
        labels[i][`title`] = labels[i][`title`][`toLowerCase`]();
        timemodified[`push`](labels[i][`title`][0][`toLocaleUpperCase`]() + labels[i][`title`][`slice`](1));
      }
    }
    if (timemodified[`length`] > 0) {
      renderHints(timemodified);
    }
  } else {
    renderHints(0);
  }
  if (gradient[`length`] !== 0 && (typingRequesting || typingRequestDate && new Date - typingRequestDate < 1500)) {
    return;
  }
  if (gradient[`length`] === 0 && (typingRequesting || typingRequestDate && new Date - typingRequestDate < 100)) {
    return setTimeout(() => {
      return sendMessageTypingRequest(gradient);
    }, 100);
  }
  gradient = getInputText(onlineChatTextInput)[`replace`](/<br>/g, "");
  sendMessageTypingRequest(gradient);
});
onlineChatTextInput[`addEventListener`](`keydown`, function(classProperties) {
  if (!classProperties[`shiftKey`] && classProperties[`key`] === `Enter`) {
    classProperties[`preventDefault`]();
  }
});
onlineChatTextInput[`addEventListener`]("keyup", (translationJSON) => {
  if (!translationJSON[`shiftKey`] && translationJSON["key"] === `Enter`) {
    sendMessage();
  }
});
js[`get`](`#emoji_call`)[`addEventListener`]("click", function(canCreateDiscussions) {
  if (js[`hasClass`](js[`get`](`.smile_container`), `hidden`)) {
    setTimeout(() => {
      return js["removeClass"](js[`get`](`.smile_container`), `hidden`);
    }, 150);
    js["addClass"](js["get"](`.input_text_smile_container`), `active`);
    selection["removeAllRanges"]();
    if (onlineChatCursor[`range`]) {
      selection[`addRange`](onlineChatCursor["range"]);
    }
  } else {
    js["removeClass"](js[`get`](`.input_text_smile_container`), `active`);
    setTimeout(() => {
      return js["addClass"](js[`get`](`.smile_container`), `hidden`);
    }, 150);
  }
});
js[`get`](".font_avatar")[`addEventListener`](`click`, function(canCreateDiscussions) {
  if (!js["hasClass"](js[`get`](`.online_chat_container`), `font`)) {
    js[`addClass`](js[`get`](`.online_chat_container`), `font`);
  } else {
    js["removeClass"](js[`get`](`.online_chat_container`), `font`);
  }
});
js[`get`](`#online_chat_turn_sound`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  if (js[`hasClass`](js[`get`](".sound_inactive"), `hidden`)) {
    js[`removeClass`](js[`get`](`.sound_inactive`), `hidden`);
    js[`addClass`](js["get"](".sound_active"), "hidden");
    setCookie(`mute_chat_notifications`, "1");
    request[`post`](onlineChatConfig[`https_support_domain`] + `/online_chat_turn_sound`, {
      "status" : `off`
    }, function(body, canCreateDiscussions) {
      if (body) {
        console[`log`](body);
      }
    });
  } else {
    js[`removeClass`](js["get"](".sound_active"), `hidden`);
    js[`addClass`](js[`get`](".sound_inactive"), `hidden`);
    setCookie(`mute_chat_notifications`, "0");
    request[`post`](onlineChatConfig[`https_support_domain`] + "/online_chat_turn_sound", {
      "status" : "on"
    }, function(body, canCreateDiscussions) {
      if (body) {
        console[`log`](body);
      }
    });
  }
});
js["get"](`#online_chat_faq`)["addEventListener"]("click", function(canCreateDiscussions) {
  chatView[`switchToFaq`]();
  request[`post`](onlineChatConfig[`https_support_domain`] + `/set_statistic_open_faq`, {}, function(body, canCreateDiscussions) {
    if (body) {
      console[`log`](body);
    }
  });
});
js[`get`](`#online_chat_support`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  chatView[`switchToSupport`]();
});
js[`listen`](js[`get`](`#online_chat_faq_search`), "input", (canCreateDiscussions) => {
  let skeletonId = js["get"]("#online_chat_faq_search")[`value`][`trim`]()[`toLowerCase`]();
  renderFaqItems(faq_items, skeletonId);
});
js[`listen`](js[`get`](`.online_chat_faq_main_container`), "click", (task_options) => {
  let artistTrack = task_options[`target`]["closest"](`.online_chat_faq_container`);
  if (!artistTrack || task_options["target"]["closest"](`.online_chat_faq_text`)) {
    return;
  }
  if (!js[`hasClass`](artistTrack, `is_active`)) {
    js[`addClass`](artistTrack, `is_active`);
    request[`post`](onlineChatConfig[`https_support_domain`] + `/set_statistic_open_faq_option`, {
      "text" : artistTrack[`children`][0][`children`][0][`textContent`]
    }, function(body, canCreateDiscussions) {
      if (body) {
        console[`log`](body);
      }
    });
  } else {
    js[`removeClass`](artistTrack, "is_active");
  }
});
function onCreateNewDialog(commands) {
  request[`post`](onlineChatConfig[`https_support_domain`] + "/set_statistic_open_chat", {
    "method" : commands[`method`],
    "page" : window[`location`][`pathname`][`substring`](1),
    "domain" : `new.cs.money`
  }, function(body, canCreateDiscussions) {
    if (body) {
      console["log"](body);
    }
  });
  openOnlineChat();
}
function openOnlineChat() {
  js[`addClass`](js[`get`]("#online_chat_call"), "animation_close");
  js[`removeClass`](onlineChat, `animation_close`);
  js[`addClass`](onlineChat, `animation_open`);
  chatMessageNotification[`innerText`] = 0;
  js[`addClass`](chatMessageNotification, `hidden`);
  request[`post`](onlineChatConfig[`https_support_domain`] + `/get_prime`, {}, (body, canCreateDiscussions) => {
    if (body) {
      return console[`log`](body);
    }
    if (canCreateDiscussions[`prime`]) {
      js[`removeClass`](js[`get`](`#support_prime_status`), `hidden`);
    } else {
      js["addClass"](js[`get`](`#support_prime_status`), "hidden");
    }
  });
  request[`post`](onlineChatConfig[`https_support_domain`] + `/set_unread_messages`, {
    "unread_message_count" : 0
  }, (body, canCreateDiscussions) => {
    if (body) {
      return console["log"](body);
    }
  });
  if (messageCount >= 10) {
    return;
  }
  request["get"](onlineChatConfig[`https_support_domain`] + "/get_messages?current_count=" + messageCount, function(body, data) {
    if (body) {
      return console[`log`](body);
    }
    if (data === `Error_2`) {
      return console["log"](`Banned`);
    }
    if (!data || !data[`messages`]) {
      return;
    }
    if (messageCount === 0) {
      lastMessage = data["messages"][data[`messages`][`length`] - 1];
    }
    renderMessages(data);
    if (js[`get`](`#emoji_container`)[`children`]["length"] === 0) {
      loadEmojiAndStickers();
    }
    if (data[`active`]) {
      localStorage[`setItem`](`active`, !![]);
      if (data[`role`] === `support`) {
        js[`get`](`.avatar_support_img`)[`src`] = "https://support.cs.money/support/images/avatars/" + data[`support_avatar`];
        js["get"](`#avatar_name_text`)[`innerHTML`] = data[`support_name`];
      } else {
        if (data[`role`] === "admin") {
          js[`get`](`.avatar_support_img`)[`src`] = `https://support.cs.money/support/images/avatars/default.png`;
          js[`get`]("#avatar_name_text")["innerHTML"] = `Developer`;
        } else {
          js["get"](`.avatar_support_img`)[`src`] = `https://support.cs.money/support/images/avatars/customer-service.png`;
          js[`get`](`#avatar_name_text`)["innerHTML"] = `Support`;
        }
      }
      if (data[`support_steamid`]) {
        js[`get`](`.avatar_support_img`)["src"] = `https://support.cs.money/support/images/avatars/default.png`;
        js["get"](`#avatar_name_text`)["innerHTML"] = "Developer";
      }
    } else {
      js[`get`](`.avatar_support_img`)[`src`] = `https://support.cs.money/support/images/avatars/customer-service.png`;
      js["get"](`#avatar_name_text`)[`innerHTML`] = `Support`;
      localStorage[`setItem`](`active`, ![]);
    }
    messageCount = messageCount + data[`messages`]["length"];
    onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`] - onlineChatDialogWindow[`offsetHeight`];
  });
  if (getCookie(`language`) != "ru") {
    js[`get`](`.online_chat_hints_title`)[`innerHTML`] = `POPULAR QUESTIONS`;
  } else {
    js[`get`](`.online_chat_hints_title`)[`innerHTML`] = "\u041f\u041e\u041f\u0423\u041b\u042f\u0420\u041d\u042b\u0415 \u0412\u041e\u041f\u0420\u041e\u0421\u042b";
  }
}
js[`get`](`#online_chat_call`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  request[`post`](onlineChatConfig[`https_support_domain`] + `/set_statistic_open_chat`, {
    "method" : "user",
    "page" : window["location"]["pathname"][`substring`](1),
    "domain" : `new.cs.money`
  }, function(body, canCreateDiscussions) {
    if (body) {
      console[`log`](body);
    }
  });
  openOnlineChat();
});
function loadEmojiAndStickers() {
  const scale = js["get"](`#emoji_container`);
  const missingStrings = js[`get`](`#sticker_container`);
  let text = "";
  for (let _0x5b3ad1 = 0; _0x5b3ad1 < 40; _0x5b3ad1++) {
    if (_0x5b3ad1 < 10) {
      text = text + ('<img src="https://support.cs.money/support/images/1f60' + _0x5b3ad1 + '.svg">');
    } else {
      text = text + (`<img src="https://support.cs.money/support/images/1f6` + _0x5b3ad1 + '.svg">');
    }
  }
  scale["innerHTML"] = text;
  text = "";
  for (let _0x2dd5a7 = 0; _0x2dd5a7 < 20; _0x2dd5a7++) {
    if (_0x2dd5a7 < 10) {
      text = text + ('<img src="https://support.cs.money/support/images/2f60' + _0x2dd5a7 + `.png">`);
    } else {
      text = text + (`<img src="https://support.cs.money/support/images/2f6` + _0x2dd5a7 + `.png">`);
    }
  }
  return missingStrings[`innerHTML`] = text;
}
onlineChatDialogWindow[`addEventListener`](`scroll`, function(canCreateDiscussions) {
  if (this[`scrollTop`] > 300) {
    return;
  }
  if (this["requesting"] || messagesAreOver) {
    return;
  }
  this["requesting"] = !![];
  let reqOptions = onlineChatConfig[`https_support_domain`] + `/get_messages?current_count=` + messageCount;
  request[`get`](reqOptions, (body, data) => {
    this[`requesting`] = ![];
    if (body) {
      return console[`log`](body);
    }
    if (!data) {
      return;
    }
    if (data[`messages`][`length`] < 10) {
      messagesAreOver = !![];
    }
    renderMessages(data);
    messageCount = messageCount + data[`messages`][`length`];
  });
});
js[`get`](`#online_chat_close`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  js["removeClass"](js[`get`](`.online_chat_main_container`), `animation_open`);
  js["addClass"](js[`get`](`.online_chat_main_container`), "animation_close");
  setTimeout(() => {
    return js[`removeClass`](js[`get`]("#online_chat_call"), `animation_close`);
  }, 400);
  request[`post`](onlineChatConfig[`https_support_domain`] + `/send_amplitude`, {
    "type" : `newcsmoney`,
    "eventType" : `support_window_close`,
    "eventProperties" : {}
  }, function(body, canCreateDiscussions) {
    if (body) {
      console[`log`](body);
    }
  });
});
js[`get`]("#online_chat_calendar_table")[`addEventListener`]("click", function(task_options) {
  if (!js[`hasClass`](task_options["target"], `col`) || task_options["target"][`closest`](`.row_table_header`)) {
    return;
  }
  if (!task_options[`target`][`children`] || !js[`hasClass`](task_options["target"][`children`][0], `col_active`)) {
    return;
  }
  let _0xbc7861 = task_options["target"][`innerText`] + " " + MONTHS[calendar[`_current_month`]];
  if (calendar[`_current_year`] != (new Date)[`getFullYear`]()) {
    _0xbc7861 = _0xbc7861 + " " + calendar[`_current_year`];
  }
  getAllMessages(function() {
    let r = onlineChatDialogWindow[`children`];
    for (let o = 0; o < r[`length`]; o++) {
      if (!js[`hasClass`](r[o], `message_container`) && r[o][`innerText`][`toLowerCase`]() == _0xbc7861) {
        scrollToMessage(onlineChatDialogWindow[`scrollTop`], r[o][`offsetTop`]);
      }
    }
  });
  setTimeout(() => {
    return js["addClass"](js[`get`](`.online_chat_calendar`), `hidden`);
  }, 150);
});
js[`get`](`#online_chat_calendar_prev`)["addEventListener"](`click`, function(canCreateDiscussions) {
  calendar["prevMonth"]();
  js[`addClass`](js[`get`](`#online_chat_calendar_head_mouth`), `active_left`);
  js[`get`](`#online_chat_calendar_head_mouth`)[`addEventListener`](`animationend`, () => {
    js[`removeClass`](js[`get`](`#online_chat_calendar_head_mouth`), "active_left");
  }, ![]);
});
js[`get`](`#online_chat_calendar_next`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  calendar[`nextMonth`]();
  js["addClass"](js[`get`](`#online_chat_calendar_head_mouth`), `active_next`);
  js[`get`]("#online_chat_calendar_head_mouth")["addEventListener"](`animationend`, () => {
    js[`removeClass`](js[`get`](`#online_chat_calendar_head_mouth`), `active_next`);
  }, ![]);
});
js[`get`](`#online_chat_file_input`)["addEventListener"](`change`, function(canCreateDiscussions) {
  sendFile(this[`files`][0]);
});
document[`addEventListener`](`keyup`, (canCreateDiscussions) => {
  js[`addClass`](onlineChatDrop, `hidden`);
});
js["listen"](onlineChat, `dragover dragenter`, function(canCreateDiscussions) {
  canCreateDiscussions[`stopPropagation`]();
  canCreateDiscussions[`preventDefault`]();
  js[`removeClass`](onlineChatDrop, `hidden`);
});
onlineChat[`addEventListener`](`drop`, function(result) {
  result["stopPropagation"]();
  result[`preventDefault`]();
  js["addClass"](onlineChatDrop, `hidden`);
  sendFile(result[`dataTransfer`][`files`][0]);
});
onlineChat["addEventListener"]("dragend", function(canCreateDiscussions) {
  canCreateDiscussions[`stopPropagation`]();
  canCreateDiscussions[`preventDefault`]();
  js["addClass"](onlineChatDrop, `hidden`);
});
onlineChatTextInput[`addEventListener`](`paste`, function(result) {
  if (result[`clipboardData`]["files"][`length`] === 0) {
    return;
  }
  result[`preventDefault`]();
  let r = (result[`clipboardData`] || result["originalEvent"]["clipboardData"])["items"];
  for (let o = 0; o < r[`length`]; o++) {
    if (r[o][`type`][`indexOf`](`image`) !== -1) {
      sendFile(r[o][`getAsFile`]());
    }
  }
});
js[`get`](`#online_chat_send_message`)[`addEventListener`]("click", function(canCreateDiscussions) {
  sendMessage();
});
onlineChatSearchInput["addEventListener"](`keyup`, function(PL$9) {
  console["log"](PL$9[`keyCode`]);
  if (PL$9[`keyCode`] === 13) {
    nextSearchResult();
  } else {
    if (PL$9[`keyCode`] === 38) {
      prevSearchResult();
    } else {
      if (PL$9[`keyCode`] === 40) {
        nextSearchResult();
      } else {
        if (PL$9["keyCode"] === 27) {
          prevOnlineChatPage();
        }
      }
    }
  }
});
let requestTimeout = null;
onlineChatSearchInput[`addEventListener`](`input`, function(canCreateDiscussions) {
  getAllMessages(function() {
    clearTimeout(requestTimeout);
    const searchQuery = onlineChatSearchInput[`value`][`trim`]()[`toLowerCase`]();
    if (searchQuery[`length`] === 0) {
      js[`get`](`#online_chat_curr_search_result`)[`innerText`] = 0;
      js[`get`]("#online_chat_all_search_results")["innerText"] = 0;
      return;
    }
    requestTimeout = setTimeout(() => {
      request[`post`](onlineChatConfig[`https_support_domain`] + "/search_found_elements", {
        "searchQuery" : searchQuery
      }, function(body, canCreateDiscussions) {
        if (body) {
          console["log"](body);
        }
      });
    }, 3500);
    let PL$13 = onlineChatDialogWindow[`children`];
    foundElements = [];
    for (let PL$17 = 0; PL$17 < PL$13[`length`]; PL$17++) {
      if (!js[`hasClass`](PL$13[PL$17], `online_chat_data`) && PL$13[PL$17][`innerText`][`toLowerCase`]()[`includes`](searchQuery)) {
        foundElements["push"](PL$13[PL$17]);
      }
    }
    js[`get`](`#online_chat_curr_search_result`)[`innerText`] = foundElements["length"] === 0 ? 0 : 1;
    js["get"](`#online_chat_all_search_results`)["innerText"] = foundElements[`length`];
    if (foundElements[0]) {
      onlineChatDialogWindow[`scrollTop`] = foundElements[0][`offsetTop`];
    }
  });
});
js["get"]("#online_chat_prev_search_result")[`addEventListener`](`click`, function(canCreateDiscussions) {
  prevSearchResult();
});
js[`get`]("#online_chat_next_search_result")[`addEventListener`](`click`, function(canCreateDiscussions) {
  nextSearchResult();
});
function isUserBanned() {
  return !js[`attr`](onlineChatTextInput, `contenteditable`);
}
js[`get`](`#emoji_container`)["addEventListener"](`click`, function(obj) {
  if (obj["target"][`tagName`] !== "IMG" || isUserBanned()) {
    return;
  }
  const $this = js["attr"](obj[`target`], `src`);
  const artistTrack = $this[`split`]("/")[5][`split`](".")[0];
  let previousState = document[`createElement`](`img`);
  js[`addClass`](previousState, `smile`);
  js[`attr`](previousState, `name`, artistTrack);
  js["attr"](previousState, "src", $this);
  previousState[`setAttribute`](`draggable`, ![]);
  onlineChatTextInput[`appendChild`](previousState);
  updateInputCursor();
  onlineChatTextInput[`dispatchEvent`](new Event(`input`));
});
js[`get`](`#sticker_container`)[`addEventListener`](`click`, function(canCreateDiscussions) {
  if (canCreateDiscussions[`target`][`tagName`] !== `IMG`) {
    return;
  }
  const $this = js[`attr`](canCreateDiscussions[`target`], `src`);
  const actionPayload = $this[`split`]("/")[5][`split`](".")[0];
  const previousState = document[`createElement`](`img`);
  js["addClass"](previousState, "sticker");
  js["attr"](previousState, `name`, actionPayload);
  js["attr"](previousState, `src`, $this);
  previousState["setAttribute"](`draggable`, ![]);
  const _0x7cb861 = onlineChatTextInput["innerHTML"];
  onlineChatTextInput[`innerHTML`] = "";
  onlineChatTextInput[`appendChild`](previousState);
  onlineChatTextInput[`dispatchEvent`](new Event(`input`));
  sendMessage();
  onlineChatTextInput[`innerHTML`] = _0x7cb861;
  js[`addClass`](js[`get`]("#smile_container"), "hidden");
});
js["get"](`#chat_star_wrapper`)[`addEventListener`](`click`, (childCompute) => {
  let previousState = getClickedElementByClass(`icon_star_container`, childCompute);
  if (!previousState) {
    return;
  }
  const active_tags = js[`get`](`#chat_star_wrapper`)["children"];
  feedback[`rating`] = js["attr"](previousState, `title`);
  for (let ii = 4; ii >= 0; ii--) {
    if (feedback[`rating`] >= 5 - ii) {
      js[`addClass`](active_tags[ii], "active");
    } else {
      js[`removeClass`](active_tags[ii], "active");
    }
  }
  request["post"](onlineChatConfig[`https_support_domain`] + `/rate_supporter_only_stars`, {
    "rating" : feedback["rating"]
  }, (body, canCreateDiscussions) => {
    if (body) {
      console[`log`](body);
    }
    console[`log`](`saf`);
  });
  if (feedback["rating"] <= 3) {
    return chatView["switchToFeedback"]();
  } else {
    return chatView[`switchToPositiveFeedback`]();
  }
});
js["get"](`#chat_feedback`)[`addEventListener`](`click`, (childCompute) => {
  let artistTrack = getClickedElementByClass(`online_chat_feedback_item`, childCompute);
  if (!artistTrack) {
    return;
  }
  js[`toggleClass`](artistTrack, `active`);
});
js[`get`](`#chat_feedback_positive`)[`addEventListener`](`click`, (childCompute) => {
  let artistTrack = getClickedElementByClass(`online_chat_feedback_item`, childCompute);
  if (!artistTrack) {
    return;
  }
  js["toggleClass"](artistTrack, `active`);
});
js[`get`](`#chat_ready_button`)[`addEventListener`](`click`, (canCreateDiscussions) => {
  if (js["css"](chatRating, `display`) === "block" && feedback[`rating`] <= 3) {
    return chatView[`switchToFeedback`]();
  } else {
    const stack = js[`get`](`#chat_feedback`)[`querySelectorAll`](`.online_chat_feedback_item.active`);
    for (let i = 0; stack && i < stack["length"]; i++) {
      let artistTrack = js[`attr`](stack[i], `text`);
      feedback[`comments`][`push`](artistTrack);
    }
    if (feedback[`comments`]["includes"](`Other`)) {
      return chatView[`switchToComment`]();
    }
    rateSupporter(feedback, (body, canCreateDiscussions) => {
      if (body) {
        return console[`log`](body);
      }
      resetFeedback();
    });
    chatView["switchToRating"]();
  }
});
js[`get`](`#chat_ready_button_positive`)[`addEventListener`]("click", (canCreateDiscussions) => {
  if (js["css"](chatRating, "display") === `block` && feedback[`rating`] > 3) {
    return chatView["switchToPositiveFeedback"]();
  } else {
    const stack = js[`get`]("#chat_feedback_positive")[`querySelectorAll`](`.online_chat_feedback_item.active`);
    for (let i = 0; stack && i < stack[`length`]; i++) {
      let artistTrack = js[`attr`](stack[i], `text`);
      feedback[`comments`][`push`](artistTrack);
    }
    if (feedback[`comments`][`includes`](`Other`)) {
      return chatView["switchToComment"]();
    }
    rateSupporter(feedback, (body, canCreateDiscussions) => {
      if (body) {
        return console[`log`](body);
      }
      resetFeedback();
    });
    chatView["switchToRating"]();
  }
});
function prevSearchResult() {
  let interestingPoint = parseInt(js[`get`](`#online_chat_curr_search_result`)[`innerText`]);
  let viewportCenter = parseInt(js[`get`](`#online_chat_all_search_results`)["innerText"]);
  if (!viewportCenter) {
    return;
  }
  interestingPoint--;
  if (interestingPoint == 0) {
    interestingPoint = viewportCenter;
  }
  js[`get`](`#online_chat_curr_search_result`)[`innerText`] = interestingPoint;
  scrollToMessage(onlineChatDialogWindow[`scrollTop`], foundElements[interestingPoint - 1][`offsetTop`]);
  js[`addClass`](foundElements[interestingPoint - 1], `highlight`);
  setTimeout(() => {
    return js[`removeClass`](foundElements[interestingPoint - 1], `highlight`);
  }, 1E3);
}
function nextSearchResult() {
  let val_exp = parseInt(js["get"](`#online_chat_curr_search_result`)["innerText"]);
  let exfrac = parseInt(js[`get`]("#online_chat_all_search_results")[`innerText`]);
  if (!exfrac) {
    return;
  }
  val_exp = val_exp % exfrac + 1;
  js["get"](`#online_chat_curr_search_result`)["innerText"] = val_exp;
  scrollToMessage(onlineChatDialogWindow[`scrollTop`], foundElements[val_exp - 1]["offsetTop"]);
  js[`addClass`](foundElements[val_exp - 1], `highlight`);
  setTimeout(() => {
    return js[`removeClass`](foundElements[val_exp - 1], "highlight");
  }, 1E3);
}
function prevOnlineChatPage() {
  setTimeout(() => {
    return js["removeClass"](js[`get`](`.online_chat_header`), `search`);
  }, 150);
  setTimeout(() => {
    return js[`removeClass`](js[`get`](`.online_chat_footer`), `search`);
  }, 150);
  if (!js["hasClass"](js[`get`](".online_chat_calendar"), `hidden`)) {
    setTimeout(() => {
      return js[`addClass`](js["get"](`.online_chat_calendar`), `hidden`);
    }, 150);
  }
}
function scrollToMessage(amount, i, artistTrack = 0) {
  if (Math["abs"](amount - i) > 400) {
    return onlineChatDialogWindow[`scrollTop`] = i;
  }
  let _0x1708b3 = amount - i;
  let _0x6e5ce1 = _0x1708b3 / 12;
  artistTrack++;
  onlineChatDialogWindow["scrollTop"] -= _0x6e5ce1;
  if (artistTrack < 12) {
    setTimeout(() => {
      return scrollToMessage(amount, i, artistTrack);
    }, 20);
  }
}
function renderMessages(message) {
  console[`time`]("renderMessages");
  let data = message[`messages`];
  if (messageCount === 0) {
    js[`empty`](onlineChatDialogWindow);
  }
  let settings = onlineChatDialogWindow[`firstElementChild`];
  let obj = {};
  let node = document[`createDocumentFragment`]();
  for (let i = 0; i < data[`length`]; i++) {
    let value = new Date(data[i]["date"]);
    let circle = value[`getDate`]() + " " + MONTHS[value[`getMonth`]()];
    if (value["getFullYear"]() !== (new Date)["getFullYear"]()) {
      circle = circle + " " + value["getFullYear"]();
    }
    if (circle != lastMessageDay) {
      let tspan = document["createElement"](`div`);
      js[`addClass`](tspan, `online_chat_data`);
      tspan[`innerHTML`] = "\n\t\t    \t<div>" + circle + `</div>\n\t\t    `;
      onlineChatDialogWindow[`appendChild`](tspan);
      lastMessageDay = circle;
      node["appendChild"](tspan);
      if (settings && settings[`innerText`][`toLowerCase`]() === circle) {
        let PUBLIC_JOIN_APPROVAL = settings[`nextElementSibling`];
        js[`remove`](settings);
        settings = PUBLIC_JOIN_APPROVAL;
      }
    } else {
      if (settings && settings[`innerText`]["toLowerCase"]() === circle) {
        let PUBLIC_JOIN_APPROVAL = settings[`nextElementSibling`];
        settings = PUBLIC_JOIN_APPROVAL;
      }
    }
    if (data[i]["img_ref"]) {
      data[i][`img_ref`] = onlineChatConfig["https_support_domain"] + `/support/images/attachments/` + data[i][`img_ref`];
    }
    let val = createMessage(data[i]);
    node[`appendChild`](val);
    if (!data[i][`steamid`] && !data[i][`img_ref`]) {
      obj[`message_container`] = val;
      obj[`date`] = data[i][`date`];
    }
    if (data[i]["steamid"] && !data[i][`img_ref`]) {
      lastSupportMessage["container"] = val;
      lastSupportMessage[`date`] = data[i][`date`];
    }
  }
  onlineChatDialogWindow[`insertBefore`](node, settings);
  if (messageCount) {
    onlineChatDialogWindow[`scrollTop`] = settings["offsetTop"];
  } else {
    if (!messageCount && Object[`keys`](obj)[`length`]) {
      onMessageSent(obj[`message_container`], obj["date"]);
    }
  }
  if (!js[`get`](`#last_support_message`) && Object[`keys`](lastSupportMessage)[`length`]) {
    js[`attr`](lastSupportMessage[`container`], "id", "last_support_message");
  }
  if (messageCount === 0 && message[`ban_end_date`]) {
    onBan(message);
  }
  can_give_feedback = message[`can_give_feedback`];
  console[`timeEnd`]("renderMessages");
}
function createMessage(data) {
  let _0x25f4d9 = new Date(data[`date`]);
  let _0x2dde05 = _0x25f4d9[`getHours`]();
  let ends = _0x25f4d9["getMinutes"]()[`toString`]();
  if (ends["length"] === 1) {
    ends = "0" + ends;
  }
  if (data["steamid"]) {
    who = `support`;
  } else {
    who = `user`;
  }
  let body = document[`createElement`](`div`);
  js["addClass"](body, `message_container`);
  if (data[`img_ref`]) {
    if (data[`img_width`] > maxImgWidth) {
      const Lii = data[`img_width`] / maxImgWidth;
      data[`img_width`] /= Lii;
      data[`img_height`] /= Lii;
    }
    if (data[`img_height`] > maxImgHeight) {
      const Lii = data[`img_height`] / maxImgHeight;
      data[`img_width`] /= Lii;
      data["img_height"] /= Lii;
    }
    let _0x5ce556 = "";
    if (data[`img_width`]) {
      _0x5ce556 = _0x5ce556 + (`width: ` + data[`img_width`] + `px;`);
    }
    if (data["img_height"]) {
      _0x5ce556 = _0x5ce556 + (`height: ` + data[`img_height`] + `px;`);
    }
    body["innerHTML"] = `<div class="message_` + who + `">\n\t\t\t          <img src="` + data[`img_ref`] + `" style="` + _0x5ce556 + `">\n\t\t\t          <div class="message_` + who + `_data">` + _0x2dde05 + ":" + ends + `</div>\n            </div>`;
    body[`querySelector`]("img")["addEventListener"](`click`, function(canCreateDiscussions) {
      js[`attr`](js[`get`](`#image_viewer_img`), `src`, "");
      js[`attr`](js[`get`](`#image_viewer_img`), "src", js[`attr`](this, `src`));
      js[`removeClass`](js[`get`](`#image_viewer`), `hidden`);
      js[`removeClass`](js[`get`]("#overlay"), "hidden");
    });
  } else {
    let _0x135c6b = turnOnSmiles(linkify(data[`text`]));
    let _0x8ef66f = "";
    if (_0x135c6b[`includes`]('class="sticker"')) {
      _0x8ef66f = `no_bg`;
    }
    if (data[`replyMessage`]) {
      body[`innerHTML`] += `<div class="dialog_container_reply_message_block">\n                    <div class="dialog_container_reply_message">\n                        <div class="reply_line"></div> \n                        <div class="message_` + who + '">\n                            <div class="message_name">' + data[`replyMessage`]["name"] + `</div>\n                            <div class="message_` + who + '_text">' + data[`replyMessage`]["text"] + `</div>\n                            <div class="message_` + 
      who + `_data">` + data[`replyMessage`]["date"] + `</div>\n                        </div>\n                    </div>\n                    <div class="message_` + who + `">\n\t\t\t\t\t\t\t\t\t      <div class="message_` + who + `_text">` + _0x135c6b + `</div>\n\t\t\t\t\t\t\t\t\t      <div class="message_` + who + '_data">' + _0x2dde05 + ":" + ends + `</div>\n                    </div>\n\t\t\t\t\t\t\t      ` + (data[`edited`] ? getEditedMessageHtml() : "") + "\n                 </div>\n                ";
    } else {
      body["innerHTML"] = `<div class="message_` + who + " " + _0x8ef66f + `">\n\t\t\t\t\t\t\t\t\t<div class="message_` + who + `_text">` + _0x135c6b + `</div>\n\t\t\t\t\t\t\t\t\t<div class="message_` + who + '_data">' + _0x2dde05 + ":" + ends + "</div>\n                </div>\n\t\t\t\t\t\t\t" + (data[`edited`] ? getEditedMessageHtml() : "");
    }
  }
  return body;
}
function sendFile(data) {
  if (!data) {
    return;
  }
  if (data["size"] / 1024 / 1024 > 5) {
    notify[`add`](onlineChatLanguage[`file_size_limit_alert`][current_language]);
    return;
  }
  if (data[`type`]["indexOf"](`image`) === -1 || data[`type`][`indexOf`](`jpg`) === -1 && data["type"][`indexOf`](`jpeg`) === -1 && data[`type`][`indexOf`](`png`) === -1) {
    return popup[`showDefaultPopup`](onlineChatLanguage[`image_type_alert`][current_language]);
  }
  let xhr = new XMLHttpRequest;
  let mime = new FormData;
  let command_codes = new FileReader;
  command_codes[`onload`] = function(data) {
    xhr["open"](`POST`, onlineChatConfig[`https_support_domain`] + `/upload_file`, !![]);
    xhr["setRequestHeader"]("CSRF-token", js[`attr`](js["get"](`#_sup_csrf`), `value`));
    xhr[`withCredentials`] = !![];
    xhr[`onreadystatechange`] = function() {
      if (xhr[`readyState`] !== 4 || xhr[`status`] !== 200) {
        return;
      }
      js[`addClass`](js[`get`](`#online_chat_loading_container`), "hidden");
      let _0x3a0b59 = {};
      try {
        _0x3a0b59 = JSON[`parse`](xhr[`responseText`]);
      } catch (previousState) {
        console[`log`](previousState);
      }
      let realVal = new Date;
      updateLastMessageDate(realVal);
      let message = {
        "img_ref" : data["target"]["result"],
        "img_width" : _0x3a0b59[`img_width`],
        "img_height" : _0x3a0b59["img_height"],
        "date" : new Date
      };
      let ig = createMessage(message);
      lastMessage = message;
      onlineChatDialogWindow["appendChild"](ig);
      onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`];
      messageCount++;
    };
    js["removeClass"](js[`get`](`#online_chat_loading_container`), `hidden`);
    xhr[`upload`]["onprogress"] = function(view) {
      let _0x102b4c = Math[`ceil`](100 * view["loaded"] / view[`total`]);
      js[`get`](`#online_chat_loading_progress`)[`innerText`] = _0x102b4c + "%";
      if (view[`loaded`] === view[`total`]) {
        setTimeout(() => {
          return js[`addClass`](js["get"]("#online_chat_loading_container"), `hidden`);
        }, 1E4);
      }
    };
    mime[`append`](`file`, data);
    xhr[`send`](mime);
  };
  command_codes[`readAsDataURL`](data);
}
function getUserLanguage() {
  const $this = window[`location`]["pathname"];
  if ($this[`split`]("/")[1] === "ru") {
    return "ru";
  }
  return "en";
}
function sendMessage() {
  if (!canSendMessage(onlineChatTextInput[`innerHTML`])) {
    return;
  }
  const password = getCookie(`steamid`);
  const token = formatMessageText(getInputText(onlineChatTextInput));
  if (!token || !password) {
    return;
  }
  if (isMessageToAdministration()) {
    o["comments"][o[`comments`][`indexOf`]("Other")] = token;
    rateSupporter(o, (body, canCreateDiscussions) => {
      if (body) {
        return console[`log`](body);
      }
      resetFeedback();
    });
    onlineChatTextInput[`innerHTML`] = "";
    return chatView[`switchToRating`]();
  }
  sendMessageTypingRequest("");
  if (onlineChatTextInput[`hasAttribute`](`editing`)) {
    const errorObject = {
      "date" : js[`attr`](js["get"](`#online_chat_edit_message`), `date`),
      "new_message" : token
    };
    js[`query`](`#online_chat_editable_message .message_user_text`)["innerHTML"] = formatMessageText(onlineChatTextInput[`innerHTML`]);
    updateEditedStatus(js["get"](`#online_chat_editable_message`));
    onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`];
    request[`post`](onlineChatConfig[`https_support_domain`] + `/edit_message`, errorObject, function(body, canCreateDiscussions) {
      if (body) {
        return console[`log`](body);
      }
    }, null, {
      "CSRF-token" : js[`attr`](js[`get`]("#_sup_csrf"), `value`)
    });
    onlineChatTextInput[`removeAttribute`](`editing`);
    onlineChatTextInput[`innerHTML`] = "";
    updateInputCursor();
    return;
  }
  onlineChatTextInput[`innerHTML`] = "";
  const errorObject = {
    "user_steamid" : password,
    "text" : token,
    "settings" : JSON["parse"](localStorage[`getItem`]("setting")),
    "domain" : window[`location`]["hostname"]
  };
  if (js[`hasClass`](js[`get`](`.block_title_bots`), `trade`)) {
    errorObject[`bot_mode`] = `buy`;
  } else {
    errorObject[`bot_mode`] = "trade";
  }
  if (js[`hasClass`](js["get"]('.block_title_user"'), `trade`)) {
    errorObject["user_mode"] = `buy`;
  } else {
    errorObject[`user_mode`] = `trade`;
  }
  const o = localStorage[`getItem`](`feedback_about_new_cs_money`);
  if (o === `true`) {
    errorObject["feedback"] = !![];
  }
  request[`post`](onlineChatConfig[`https_support_domain`] + `/send_message?language=` + getUserLanguage(), errorObject, (body, enmlHash) => {
    if (body) {
      return console[`log`](body);
    }
    let i = new Date;
    updateLastMessageDate(i);
    const message = {
      "text" : escapeString(token),
      "date" : i
    };
    const actionPayload = createMessage(message);
    lastMessage = message;
    onlineChatDialogWindow[`appendChild`](actionPayload);
    onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`];
    messageCount++;
    onMessageSent(actionPayload, parseInt(enmlHash[`date`]));
  }, null, {
    "CSRF-token" : js[`attr`](js[`get`]("#_sup_csrf"), `value`)
  });
  transferInventory();
  updateInputCursor();
  if (o === "false") {
    localStorage[`setItem`](`active`, !![]);
    js[`addClass`](js[`get`]("#chat-info-btns"), `hidden`);
  } else {
    js[`get`](`.info-btn`)["dispatchEvent"](new Event(`click`));
  }
}
function transferInventory() {
  console[`log`](`transferInventory`);
  request[`get`](onlineChatConfig["https_support_domain"] + `/should_transfer_inventory?game=730`, (body, canCreateDiscussions) => {
    if (body) {
      return console[`log`](body);
    }
    if (!canCreateDiscussions) {
      return;
    }
    const previousState = JSON[`stringify`](__REDUX_STORE__[`getState`]()[`userInventory`][`list`][`items`][1]);
    console[`log`](previousState);
    request[`post`](onlineChatConfig["https_support_domain"] + `/transfer_inventory`, {
      "inventory" : previousState,
      "game" : "730"
    }, (body, canCreateDiscussions) => {
      if (body) {
        return console[`log`](body);
      }
    });
  });
}
function canSendMessage(webColor) {
  return webColor["replace"](/<br>/g, "")["replace"](/&nbsp;/g, "")[`trim`]()[`length`] !== 0;
}
function updateEditedStatus($container) {
  if (!$container[`querySelector`](`.message_user_view`)) {
    $container["appendChild"](createEditedMessageEl());
  }
}
function getEditedMessageHtml() {
  return `<div class="message_user_view">edited</div>`;
}
function createEditedMessageEl() {
  const spanEl = document[`createElement`](`div`);
  js[`addClass`](spanEl, `message_user_view`);
  spanEl["innerText"] = `edited`;
  return spanEl;
}
function resetFeedback() {
  feedback[`rating`] = 0;
  feedback[`comments`] = [];
}
function rateSupporter(data, cb) {
  request["post"](onlineChatConfig["https_support_domain"] + `/rate_supporter`, {
    "rating" : data["rating"],
    "comments" : data["comments"]
  }, (fallbackReleases, formattedSections) => {
    cb(fallbackReleases, formattedSections);
  });
}
function onInterlocatorMessageEdited(exception) {
  const _0x287bfa = js[`query`]("#last_support_message .message_support_text");
  if (!_0x287bfa) {
    return;
  }
  _0x287bfa[`innerHTML`] = formatMessageText(turnOnSmiles(exception[`text`]));
  updateEditedStatus(js["get"](`#last_support_message`));
}
function onInterlocatorTyping(element) {
  updateInterlocatorTyping(element);
}
let messageTypingTimer = null;
function updateInterlocatorTyping(suppressDisabledCheck) {
  if (suppressDisabledCheck["typing_text"]) {
    js[`removeClass`](js["get"](`#support_typing`), `disabled`);
    clearTimeout(messageTypingTimer);
    messageTypingTimer = setTimeout(() => {
      js[`addClass`](js["get"]("#support_typing"), `disabled`);
    }, 1E4);
  } else {
    js[`addClass`](js[`get`](`#support_typing`), "disabled");
  }
}
function onMessageReceived(message) {
  messageCount++;
  if (message[`img_ref`]) {
    message[`img_ref`] = onlineChatConfig[`https_support_domain`] + `/support/images/attachments/` + message[`img_ref`];
  }
  updateLastMessageDate(new Date);
  const artistTrack = createMessage(message);
  lastMessage = message;
  onlineChatDialogWindow[`appendChild`](artistTrack);
  onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`];
  if (js[`get`]("#last_support_message")) {
    js[`get`](`#last_support_message`)[`removeAttribute`]("id", "");
    js[`attr`](artistTrack, "id", "last_support_message");
  }
  if (isChatHidden()) {
    js[`removeClass`](chatMessageNotification, `hidden`);
    chatMessageNotification[`innerText`] = parseInt(chatMessageNotification[`innerText`]) + 1;
  } else {
    request["post"](onlineChatConfig["https_support_domain"] + "/set_unread_messages", {
      "unread_message_count" : 0
    }, (body, canCreateDiscussions) => {
      if (body) {
        return console["log"](body);
      }
    });
  }
  if (isNotificationsEnabled()) {
    audioPlayer[`playNotification`]();
  }
}
function onMessageSent(actionPayload, from) {
  js[`remove`](js["get"](`#online_chat_edit_message`));
  if (js[`get`](`#online_chat_editable_message`)) {
    js[`get`]("#online_chat_editable_message")[`removeAttribute`]("id");
  }
  js["attr"](actionPayload, "id", `online_chat_editable_message`);
  const _0x3b3728 = actionPayload["querySelector"](`.message_user_data`)[`innerText`];
  actionPayload[`querySelector`](`.message_user_data`)[`innerHTML`] = '<svg id="online_chat_edit_message" date="' + from + `">\n\t\t\t<use  xlink:href="#pencil1"></use>\n\t\t</svg>` + _0x3b3728;
  js[`get`](`#online_chat_edit_message`)[`addEventListener`](`click`, function(canCreateDiscussions) {
    const tagNameSpecificConfig = actionPayload[`querySelector`](`.message_user_text`);
    onlineChatTextInput[`innerHTML`] = tagNameSpecificConfig["innerHTML"];
    onlineChatTextInput["setAttribute"](`editing`, "");
    onlineChatTextInput[`focus`]();
    selection["collapse"](onlineChatTextInput, onlineChatTextInput[`childNodes`][`length`]);
    updateInputCursor();
  });
}
function updateLastMessageDate(value) {
  let stripTerrain = value[`getDate`]() + " " + MONTHS[value[`getMonth`]()];
  if (value[`getFullYear`]() != (new Date)[`getFullYear`]()) {
    stripTerrain = stripTerrain + " " + value["getFullYear"]();
  }
  let stringConstructorEndTime = new Date(1970);
  if (lastMessage) {
    stringConstructorEndTime = new Date(lastMessage[`date`]);
  }
  let coast = stringConstructorEndTime[`getDate`]() + " " + MONTHS[stringConstructorEndTime[`getMonth`]()];
  if (value[`getFullYear`]() !== (new Date)["getFullYear"]()) {
    coast = coast + " " + stringConstructorEndTime[`getFullYear`]();
  }
  if (stripTerrain != coast) {
    let artistTrack = document[`createElement`](`div`);
    js[`addClass`](artistTrack, `online_chat_data`);
    artistTrack[`innerHTML`] = `\n\t\t\t<div>` + stripTerrain + `</div>\n\t\t`;
    onlineChatDialogWindow[`appendChild`](artistTrack);
    lastMessageDay = stripTerrain;
  }
}
function updateInputCursor() {
  selection = window[`getSelection`]();
  onlineChatCursor = {
    "element" : selection[`anchorNode`],
    "start" : selection[`anchorOffset`],
    "end" : selection[`focusOffset`],
    "range" : selection[`rangeCount`] ? selection["getRangeAt"](0) : null
  };
}
function onTicketClose() {
  chatView["switchToRating"]();
  localStorage[`setItem`](`active`, ![]);
  js["get"](`.avatar_support_img`)[`src`] = `https://support.cs.money/support/images/avatars/customer-service.png`;
  js[`get`](`#avatar_name_text`)["innerHTML"] = "Support";
  js[`removeClass`](js["get"](`#chat-info-btns`), `hidden`);
}
function onGetLogs(exception) {
  let url = "send_console_errors";
  if (exception[`save`]) {
    url = `save_console_errors`;
  }
  request[`post`](onlineChatConfig[`https_support_domain`] + "/" + url, {
    "logs" : console[`supportErrors`]
  }, function(canCreateDiscussions, isSlidingUp) {
  });
}
function saveLogs() {
  request[`post`](onlineChatConfig[`https_support_domain`] + `/save_console_errors`, {
    "logs" : console[`supportErrors`]
  }, function(canCreateDiscussions, isSlidingUp) {
  });
}
function onBan(exception) {
  js[`remove`](js["get"](`#ban_message`));
  onlineChatTextInput[`removeAttribute`]("contenteditable");
  let capture_headings = onlineChatLanguage[`you_are_banned_forever`][getCookie(`language`)];
  if (exception[`ban_end_date`] - new Date < 1E3 * 60 * 60 * 365 * 10) {
    capture_headings = onlineChatLanguage[`you_are_banned_untill`][getCookie(`language`)] + ` \n\t\t\t` + formatEndBanDate(exception[`ban_end_date`]);
  }
  const artistTrack = createMessage({
    "steamid" : "1",
    "text" : capture_headings,
    "date" : (new Date)["getTime"]()
  });
  js[`attr`](artistTrack, "id", `ban_message`);
  onlineChatDialogWindow[`appendChild`](artistTrack);
  onlineChatDialogWindow[`scrollTop`] = onlineChatDialogWindow[`scrollHeight`];
}
function onUnban(exception) {
  js[`remove`](js["get"](`#ban_message`));
  onlineChatTextInput["setAttribute"](`contenteditable`, !![]);
}
function formatMessageText(endResult) {
  let href = endResult[`trim`]();
  href = href[`replace`](/(<br>){2,}/g, "<br><br>");
  href = href[`replace`](/(<div><br><\/div>\s*){2,}/g, "");
  return href;
}
function getInputText(idx) {
  let lightCss = "";
  const result = idx[`childNodes`];
  for (let i = 0; i < result[`length`]; i++) {
    if (result[i][`nodeType`] === 3) {
      lightCss = lightCss + result[i]["textContent"];
    } else {
      if (result[i]["tagName"] === `IMG`) {
        lightCss = lightCss + js[`attr`](result[i], "name");
      } else {
        if (result[i][`tagName`] === "BR") {
          lightCss = lightCss + "<br>";
        } else {
          lightCss = lightCss + result[i][`innerText`];
        }
      }
    }
  }
  return lightCss;
}
const availableSmileCodes = {
  "&lt;br&gt;" : "<br>"
};
for (let i = 0; i <= 39; i++) {
  let currNum = i[`toString`]();
  if (currNum[`length`] === 1) {
    currNum = "0" + currNum;
  }
  availableSmileCodes[`1f6` + currNum] = `<img class="smile" draggable="false" \n        name="1f6` + currNum + `" src="` + onlineChatConfig[`https_support_domain`] + "/support/images/1f6" + currNum + `.svg">`;
}
for (let i = 0; i <= 19; i++) {
  let currNum = i[`toString`]();
  if (currNum[`length`] === 1) {
    currNum = "0" + currNum;
  }
  availableSmileCodes[`2f6` + currNum] = `<img class="sticker" draggable="false" \n        name="2f6` + currNum + `" src="` + onlineChatConfig[`https_support_domain`] + `/support/images/2f6` + currNum + `.png">`;
}
function turnOnSmiles(PL$5) {
  const params = Object[`keys`](availableSmileCodes);
  for (let i = 0; i < params[`length`]; i++) {
    PL$5 = PL$5[`replace`](new RegExp(params[i], "g"), availableSmileCodes[params[i]]);
  }
  return PL$5;
}
function getAllMessages(callback) {
  request[`get`](onlineChatConfig[`https_support_domain`] + `/get_all_messages`, function(body, data) {
    if (body) {
      return console[`log`](body);
    }
    console[`log`](data);
    messageCount = 0;
    renderMessages(data);
    messageCount = data[`length`];
    callback();
  });
}
let typingRequesting = ![];
let typingRequestDate = null;
function sendMessageTypingRequest(result) {
  typingRequestDate = result[`length`] !== 0 ? new Date : null;
  typingRequesting = !![];
  request[`post`](onlineChatConfig[`https_support_domain`] + "/is_typing", {
    "typing_text" : result
  }, (body, canCreateDiscussions) => {
    typingRequesting = ![];
    if (body) {
      return console["log"](body);
    }
  });
}
function renderFaqItems(elems, name) {
  if (!name) {
    name = "";
  }
  name = name[`trim`]()[`toLowerCase`]();
  let _0x2c404c = "";
  for (let i = 0; i < elems[`length`]; i++) {
    if (name && !(stringHasAllWords(elems[i][`title`], name[`split`](" ")) || stringHasAllWords(elems[i][`text`], name["split"](" ")))) {
      continue;
    }
    _0x2c404c = _0x2c404c + (`\n        <div class="online_chat_faq_main_container">\n            <div class="online_chat_faq_container">\n              <div class="online_chat_faq_title superclass_space">\n                <div >` + elems[i][`title`] + `</div>\n                <svg class="">\n                  <use  xlink:href="#svg_icon_arrow_down"></use>\n                </svg>\n              </div>\n              <div class="online_chat_faq_text">\n                  ` + elems[i][`text`] + "\n              </div>\n            </div>\n        </div>\n        ");
  }
  js[`get`](`#online_chat_faq_main_container`)[`innerHTML`] = _0x2c404c;
}
function stringHasAllWords(isSlidingUp, $cont) {
  isSlidingUp = isSlidingUp["toLowerCase"]();
  return $cont[`every`]((leftFence) => {
    return isSlidingUp[`includes`](leftFence);
  });
}
function isNotificationsEnabled() {
  return getCookie("mute_chat_notifications") !== "1";
}
function isChatHidden() {
  return js[`hasClass`](onlineChat, `animation_close`) || !js[`hasClass`](onlineChat, `animation_open`);
}
function isMessageToAdministration() {
  return js[`css`](js[`get`](`#online_chat_tell`), `display`) === `block`;
}
const symbolsToEscape = {
  "&" : `&amp;`,
  "<" : `&lt;`,
  ">" : `&gt;`,
  '"' : `&quot;`,
  "'" : `&#x27;`,
  "/" : `&#x2F;`
};
function escapeString(s) {
  let result = "";
  for (let i = 0; i < s[`length`]; i++) {
    if (symbolsToEscape[s[i]]) {
      result = result + symbolsToEscape[s[i]];
    } else {
      result = result + s[i];
    }
  }
  return result;
}
function linkify(replacement) {
  if (youtubefy(replacement)) {
    return youtubefy(replacement);
  }
  const i = /(\b(https?|ftp):(\/\/|&#x2F;&#x2F;)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  const escapeSequence = /(^|[^\/;])(www\.[\S]+(\b|$))/gim;
  const newline = /(([a-zA-Z0-9\-_\.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gim;
  let tok;
  tok = replacement["replace"](i, `<a href="$1" target="_blank">$1</a>`);
  tok = tok[`replace`](escapeSequence, `$1<a href="http://$2" target="_blank">$2</a>`);
  tok = tok[`replace`](newline, `<a href="mailto:$1">$1</a>`);
  return tok;
}
function youtubefy(options) {
  const datum = /\b(https:&#x2F;&#x2F;www.youtube.com&#x2F;watch\?v=)([-A-Z0-9+&@#\/%?=~_|!:,.;]*)/gim;
  const data = /\b(https:&#x2F;&#x2F;youtu.be&#x2F;)([-A-Z0-9+&@#\/%?=~_|!:,.;]*)/gim;
  let formatted = null;
  if (options[`includes`](`https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=`)) {
    formatted = options[`replace`](datum, `<br><iframe width="245" height="215" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe><br>`);
  }
  if (options[`includes`](`https:&#x2F;&#x2F;youtu.be&#x2F;`)) {
    formatted = options[`replace`](data, `<br><iframe width="245" height="215" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe><br>`);
  }
  if (!formatted) {
    return null;
  }
  return formatted;
}
function formatEndBanDate(domainStartDate) {
  domainStartDate = new Date(domainStartDate);
  const groupNamePrefix = addZeros(domainStartDate[`getDate`](), 2);
  const dupeNameCount = addZeros(domainStartDate[`getMonth`]() + 1, 2);
  const _0x1855c5 = domainStartDate[`getFullYear`]();
  const _0x41ea6b = addZeros(domainStartDate["getHours"](), 2);
  const _0x21c021 = addZeros(domainStartDate[`getMinutes`](), 2);
  return groupNamePrefix + "." + dupeNameCount + "." + _0x1855c5 + " " + _0x41ea6b + ":" + _0x21c021;
}
function addZeros(value, i) {
  value = value[`toString`]();
  const character = i - value[`length`];
  if (character <= 0) {
    return value;
  }
  return "0"[`repeat`](character) + value;
}
function getClickedElementByClass(hashOrKey, value) {
  let elem = value["target"];
  for (; elem && elem !== document;) {
    if (js["hasClass"](elem, hashOrKey)) {
      return elem;
    }
    elem = elem[`parentNode`];
  }
  return ![];
}
function onSupportAssigned(storage) {
  js["addClass"](js[`get`](`#chat-info-btns`), "hidden");
  let _0x3a235e = (new Date((new Date)[`getTime`]() - storage[`start_work_time`]))[`getMinutes`]();
  if (storage[`role`] === `support`) {
    js["get"](".avatar_support_img")[`src`] = `https://support.cs.money/support/images/avatars/` + storage[`support_avatar`];
    js[`get`](`#avatar_name_text`)[`innerHTML`] = storage[`support_name`];
  } else {
    js["get"](`.avatar_support_img`)[`src`] = "https://support.cs.money/support/images/avatars/default.png";
    js["get"](`#avatar_name_text`)["innerHTML"] = `Developer`;
  }
  js[`get`](`.cloud_support_problems`)["innerHTML"] = storage[`close_tickets`];
  js[`get`](`.cloud_support_work`)[`innerHTML`] = _0x3a235e;
}
function renderHints(allowOffline) {
  return;
}
hintsBlock[`addEventListener`](`click`, function(canCreateDiscussions) {
  let storage = canCreateDiscussions[`target`]["closest"](`.hints_link`);
  if (!storage) {
    return;
  }
  onlineChatTextInput["innerHTML"] = storage[`innerHTML`];
  sendMessage();
  js[`addClass`](js[`get`](`.online_chat_hints_container`), `hidden`);
  hintsBlock["innerHTML"] = "";
});
js["get"](`#hints_close`)[`addEventListener`](`click`, function() {
  js[`addClass`](js["get"](".online_chat_hints_container"), "hidden");
  hintsBlock[`innerHTML`] = "";
});
function onGetScreen(element) {
  if (js[`get`](`.h2cScript`) === undefined) {
    let window = document[`createElement`](`script`);
    window[`src`] = `/js/support/html2canvas.js`;
    window[`className`] = `h2cScript`;
    document[`body`][`appendChild`](window);
    window["onload"] = function() {
      sendUserScreen(element);
    };
  } else {
    sendUserScreen(element);
  }
}
function sendUserScreen(suppressDisabledCheck) {
  html2canvas(document[`querySelector`]("body"))[`then`]((canCreateDiscussions) => {
    let screen = canCreateDiscussions[`toDataURL`](`image/png`);
    request["post"](onlineChatConfig[`https_support_domain`] + `/send_user_screen`, {
      "screen" : screen,
      "supportSteamid" : suppressDisabledCheck["supportSteamid"]
    }, (body, canCreateDiscussions) => {
      if (body) {
        return console[`log`](body);
      }
    });
  });
}
js[`get`](`#smile_header_block`)["addEventListener"]("click", function(task_options) {
  let artistTrack = task_options["target"][`closest`](`.smile_header_title`);
  if (!artistTrack) {
    return;
  }
  let scrollClasses = js[`get`](`#sticker_container`);
  let GET_AUTH_URL_TIMEOUT = js[`get`](`#emoji_container`);
  let args = js["get"](`.stickers_pick`);
  let clickClasses = js["get"](`.emoji_pick`);
  if (js[`hasClass`](artistTrack, "stickers_pick")) {
    js[`addClass`](GET_AUTH_URL_TIMEOUT, `hidden`);
    js["addClass"](args, `active`);
    js["removeClass"](scrollClasses, `hidden`);
    js["removeClass"](clickClasses, "active");
  }
  if (js[`hasClass`](artistTrack, `emoji_pick`)) {
    js[`addClass`](scrollClasses, `hidden`);
    js[`addClass`](clickClasses, "active");
    js[`removeClass`](GET_AUTH_URL_TIMEOUT, `hidden`);
    js[`removeClass`](args, `active`);
  }
});
js["listen"](js[`get`](".modal__close"), "click", function(canCreateDiscussions) {
  js[`addClass`](js[`get`](".overlay"), `hidden`);
  js[`addClass`](js[`get`](`#image_viewer`), `hidden`);
});
document[`addEventListener`]("click", function(task_options) {
  if (js["hasClass"](task_options["target"], `modal_big_img`)) {
    js[`addClass`](js[`get`](".overlay"), `hidden`);
    js[`addClass`](js["get"]("#image_viewer"), `hidden`);
  }
});
let ws = new Websocket(onlineChatConfig[`ws_protocol`] + `://` + onlineChatConfig[`support_domain`] + `/support/user_ws`);
ws[`connect`]();
ws["setOnMessageCallback"](function(xhr) {
  let message = null;
  try {
    message = JSON["parse"](xhr[`data`]);
  } catch (previousState) {
    return console[`log`](previousState);
  }
  console["log"](message);
  switch(message[`type`]) {
    case `new_message`:
      onMessageReceived(message);
      break;
    case "message_edited":
      onInterlocatorMessageEdited(message);
      break;
    case `is_typing`:
      onInterlocatorTyping(message);
      break;
    case `ban`:
      onBan(message);
      break;
    case `unban`:
      onUnban(message);
      break;
    case "close_ticket":
      onTicketClose(message);
      break;
    case `get_logs`:
      onGetLogs(message);
      break;
    case `support_assigned`:
      onSupportAssigned(message);
      break;
    case `get_screen`:
      onGetScreen(message);
      break;
    case `create_new_dialog`:
      onCreateNewDialog(message);
      break;
  }
});
console["timeEnd"]("online_chat");
const chatInfoBtns = document[`querySelector`](`#chat-info-btns`);
const antiscamExtensionLink = `https://bit.ly/3aXNjy1`;
const virtualItemsBtnMessages = {
  "ru" : {
    "singleItem" : `\u041f\u043e\u0447\u0435\u043c\u0443 \u044f \u043d\u0435 \u043c\u043e\u0433\u0443 \u0437\u0430\u0431\u0440\u0430\u0442\u044c \u0441\u0432\u043e\u0439`,
    "multipleItems" : `\u041f\u043e\u0447\u0435\u043c\u0443 \u044f \u043d\u0435 \u043c\u043e\u0433\u0443 \u0437\u0430\u0431\u0440\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0432\u0435\u0449\u0438?`
  },
  "other" : {
    "singleItem" : "Why can't I take my",
    "multipleItems" : `Why can't I take my items?`
  }
};
const experiments = {
  "virtualItemsBtn" : `experiment_1`,
  "antiScamBtn" : `experiment_2`
};
const steamid = getCookie(`steamid`);
const createButton = () => {
  const a = document[`createElement`](`div`);
  a[`classList`][`add`]("info-btn");
  return a;
};
const filterItems = (comparator, force, inCallback) => {
  const ret = [];
  comparator[`forEach`]((inFolder) => {
    inCallback(inFolder, force, ret);
  });
  console[`log`]("items", ret);
  return ret;
};
const insertButtonMessage = (factory, node, events, startMonday) => {
  if (startMonday[`length`] > 1) {
    factory[`textContent`] = virtualItemsBtnMessages[events][`multipleItems`];
    node["appendChild"](factory);
    return;
  }
  factory[`textContent`] = virtualItemsBtnMessages[events]["singleItem"] + " " + startMonday[0] + "?";
  node[`appendChild`](factory);
  return;
};
const sendSystemMessage = (language = "ru") => {
  request["post"](`https://support.cs.money/send_hold_message`, {
    "language" : language
  }, (body, canCreateDiscussions) => {
    if (body) {
      console[`error`](body);
    }
  });
};
const renderVirtualItemsButton = (mmCoreSplitViewBlock, $state) => {
  const backdrop = createButton();
  const ext = getUserLanguage();
  const _0x205f47 = ext === "ru";
  if (_0x205f47) {
    insertButtonMessage(backdrop, $state, "ru", mmCoreSplitViewBlock);
  } else {
    insertButtonMessage(backdrop, $state, `other`, mmCoreSplitViewBlock);
  }
  backdrop[`addEventListener`]("click", () => {
    if (_0x205f47) {
      sendSystemMessage();
    } else {
      sendSystemMessage("en");
    }
  });
};
const renderAntiscamBtn = (InkElement) => {
  const nonWhitespaceOrBookmarkEval = createButton();
  const ext = getUserLanguage();
  const _0x31aa07 = ext === "ru";
  if (_0x31aa07) {
    nonWhitespaceOrBookmarkEval[`textContent`] = `\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u043a\u0430\u043c\u0435\u0440\u043e\u0432`;
  } else {
    nonWhitespaceOrBookmarkEval[`textContent`] = `Protect from scammers`;
  }
  const el = document["createElement"]("a");
  el["setAttribute"](`href`, antiscamExtensionLink);
  el["setAttribute"](`target`, `_blank`);
  el[`style`]["display"] = `block`;
  el[`appendChild`](nonWhitespaceOrBookmarkEval);
  InkElement[`appendChild`](el);
};
const showVirtualItemsBtn = (canCreateDiscussions) => {
  const parseBody = (data, name, parser) => {
    if (data[name]) {
      const costSum = new Date(data[name]);
      const gasSum = new Date;
      if (costSum > gasSum) {
        parser[`push`](data[`name`]);
      }
    }
  };
  request[`post`]("https://support.cs.money/get_virtual_items", {
    "userSteamid" : canCreateDiscussions
  }, (body, components) => {
    if (body) {
      console[`error`](body);
    }
    const artistTrack = filterItems(components, `hold_expiration`, parseBody);
    if (artistTrack[`length`]) {
      chatInfoBtns[`classList`][`remove`](`hidden`);
      renderVirtualItemsButton(artistTrack, chatInfoBtns);
    }
  });
};
const showInfoButton = () => {
  return showVirtualItemsBtn(steamid);
};
const virtualItemsExperiment = (mmCoreSplitViewBlock) => {
  request[`post`](`https://support.cs.money/get_user_group`, {
    "steamid" : steamid,
    "experiment_id" : experiments["virtualItemsBtn"]
  }, (body, match) => {
    if (body) {
      console[`error`](body);
      return;
    }
    if (match[`group`] === "B") {
      chatInfoBtns["classList"][`remove`]("hidden");
      renderVirtualItemsButton(mmCoreSplitViewBlock, chatInfoBtns);
    } else {
      if (match[`group`] === `other`) {
        chatInfoBtns[`classList`][`remove`](`hidden`);
        renderAntiscamBtn(chatInfoBtns);
      }
    }
  });
};
const antiscamExperiment = (canCreateDiscussions) => {
  request[`post`](`https://support.cs.money/get_user_group`, {
    "steamid" : steamid,
    "experiment_id" : experiments[`antiScamBtn`]
  }, (body, match) => {
    if (body) {
      console[`error`](body);
      return;
    }
    if (match[`group`] === "B") {
      chatInfoBtns["classList"][`remove`](`hidden`);
      renderAntiscamBtn(chatInfoBtns);
    }
  });
};
const startExperiment = () => {
  const gamesloaded = (params, version, record) => {
    if (params[version]) {
      const costSum = new Date(params[version]);
      const gasSum = new Date;
      if (costSum > gasSum) {
        record[`push`](params["name"]);
      }
    }
  };
  request["post"](`https://support.cs.money/get_virtual_items`, {
    "userSteamid" : steamid
  }, (record, components) => {
    if (record) {
      console["error"](record);
      return;
    }
    const startpositions = filterItems(components, `hold_expiration`, gamesloaded);
    if (startpositions["length"] > 0) {
      chatInfoBtns[`classList`][`remove`](`hidden`);
      renderVirtualItemsButton(startpositions, chatInfoBtns);
    } else {
    }
  });
};
const feedbackBtn = () => {
  const _0x53f270 = localStorage[`getItem`](`active`);
  if (_0x53f270 === `false`) {
    renderFeedbackBtn(chatInfoBtns);
  }
};
const renderFeedbackBtn = (boardManager) => {
  const filesMatches = createButton();
  const fileContent = getUserLanguage() === "ru" ? "ru" : "en";
  filesMatches[`textContent`] = getFeedbackBtnText(`main`, fileContent);
  boardManager[`appendChild`](filesMatches);
  chatInfoBtns["classList"][`remove`](`hidden`);
  filesMatches[`addEventListener`](`click`, () => {
    if (js["hasClass"](filesMatches, `cancel`)) {
      localStorage[`setItem`](`feedback_about_new_cs_money`, "false");
      filesMatches[`classList`][`remove`](`cancel`);
      filesMatches[`textContent`] = getFeedbackBtnText(`main`, fileContent);
    } else {
      localStorage[`setItem`](`feedback_about_new_cs_money`, `true`);
      filesMatches[`classList`][`add`]("cancel");
      filesMatches[`textContent`] = getFeedbackBtnText(`cancel`, fileContent);
      sendInstructionIfNeed(fileContent);
    }
  });
};
const sendInstructionIfNeed = (name) => {
  request[`post`](`https://support.cs.money/send_feedback_instruction`, {
    "language" : name
  }, (body) => {
    if (body) {
      console[`error`](body);
    }
  });
};
const getFeedbackBtnText = (siteId, shortcode) => {
  const state = {
    "main" : {
      "ru" : `\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u043e new.cs.money`,
      "en" : `Share your feedback about new.cs.money`
    },
    "cancel" : {
      "ru" : `\u041e\u0442\u043c\u0435\u043d\u0430`,
      "en" : `Cancel`
    }
  };
  return state[siteId][shortcode];
};
js[`get`](`#online_chat_close`)[`addEventListener`](`click`, () => {
  setTimeout(() => {
    chatInfoBtns["innerHTML"] = "";
  }, 400);
});
