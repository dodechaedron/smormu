var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(){"use strict";class t{constructor(){this.callbacks=[],window.addEventListener("DOMContentLoaded",(()=>this.onDOMContentLoaded()))}onDOMContentLoaded(){this.callbacks.sort(((t,e)=>t.priority-e.priority)).forEach((({callback:t})=>t()))}runOnLoad(t){"loading"===document.readyState?this.callbacks.push(t):t.callback()}}const e=async t=>{const o=t.classList.contains("animated"),r=()=>window.requestAnimationFrame((()=>t.style.animationPlayState="running"));o&&n(t)?(await a(t),r()):o?r():null!=t.firstElementChild&&e(t.firstElementChild)},n=t=>{const e=t.getElementsByTagName("img").length>0,n=t.getElementsByTagName("video").length>0;return o(t)||e||n},o=t=>{var e;return!!(null===(e=t.textContent)||void 0===e?void 0:e.trim().length)},a=async t=>{const e=[],n=t.getElementsByTagName("img");for(let t=0;t<n.length;t++){const o=n.item(t);e.push(r(o))}const o=t.getElementsByTagName("video");for(let t=0;t<o.length;t++){const n=o.item(t);e.push(s(n))}const a=new Map;document.fonts.forEach((t=>a.set(`${t.family}_${t.style}_${t.weight}`,t)));const l=t.getElementsByTagName("span");for(let t=0;t<l.length;t++){const n=l.item(t);e.push(i(n,a))}return Promise.all(e)},r=t=>new Promise(((e,n)=>{t.complete?e():(t.loading="eager",t.addEventListener("load",(()=>e())),t.addEventListener("error",(()=>n())))})),s=t=>new Promise(((e,n)=>{t.readyState>=2||t.poster?e():(t.addEventListener("loadeddata",(()=>e())),t.addEventListener("error",(()=>n())))})),i=(t,e)=>{const{fontFamily:n,fontStyle:o,fontWeight:a}=getComputedStyle(t),r=e.get(`${n}_${o}_${a}`);return(null==r?void 0:r.loaded)||document.fonts.ready};!function(e,n=Number.MAX_VALUE){var o;(window.canva_scriptExecutor=null!==(o=window.canva_scriptExecutor)&&void 0!==o?o:new t).runOnLoad({callback:e,priority:n})}((()=>{(()=>{const t=document.querySelectorAll(".animation_container");if(0===t.length)return;const n=new IntersectionObserver((t=>{t.forEach((t=>{if(!t.isIntersecting)return;const o=t.target;e(o),n.unobserve(o)}))}),{threshold:.01});t.forEach((t=>n.observe(t)))})()}))}();


}
/*
     FILE ARCHIVED ON 14:53:35 Jun 12, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:30:36 Jul 13, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.427
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.012
  esindex: 0.009
  cdx.remote: 8.025
  LoadShardBlock: 198.555 (3)
  PetaboxLoader3.resolve: 105.01 (3)
  PetaboxLoader3.datanode: 125.797 (5)
  load_resource: 61.304
  loaddict: 19.519
*/