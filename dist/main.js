let global = this;
function post() {
}
"use strict";(()=>{function r(e,t){let n=e.getLastRow();return n===0?[]:e.getRange(1,t,n).getValues().flat().filter(o=>o!=="")}function a(e,t){let s=SpreadsheetApp.openById(e).getSheetByName(t);if(!s)throw new Error(`\u30B7\u30FC\u30C8 '${t}' \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093`);return s}function p(){let n=a("1w7d08cVIbEGMae9cy_t_ddFtY7_dTQDg3R2nTfha1Ok","main"),o=r(n,2);console.log(o)}global.post=p;})();
