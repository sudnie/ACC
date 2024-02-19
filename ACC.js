// ==UserScript==
// @name         ACC
// @namespace    http://tampermonkey.net/
// @version      2024-02-19
// @description  try to take over the world!
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @match        https://likexia.gitee.io/cat-zh/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var catnipRPT = $(".res-cell resPerTick").val()
    console.log(catnipRPT);
})();