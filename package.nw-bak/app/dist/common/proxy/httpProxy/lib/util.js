"use strict";var lower_keys=function(e){for(var r in e){var o=r.toLowerCase(),t=e[r];delete e[r],"host"!==o?e[o]=t:e.Host=t}return e},merge=function(e,r){for(var o in r)e[o]=r[o];return e};module.exports={merge:merge,lower_keys:lower_keys};