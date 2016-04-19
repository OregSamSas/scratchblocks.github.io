/*
 * scratchblocks
 * http://scratchblocks.github.io/
 *
 * Copyright 2013-2016, Tim Radvan
 * @license MIT
 * http://opensource.org/licenses/MIT
 */
var scratchblocks=function(){"use strict";function e(e,t){if(!e)throw"Assertion failed! "+(t||"")}function t(e){return e&&e.constructor===Array}function n(e){return!!e}function r(e,t){e=e||{};t=t||{};for(var n in e){if(e.hasOwnProperty(n)&&!t.hasOwnProperty(n)){t[n]=e[n]}}return t}function i(e){if(e==null)return e;if(e.constructor==Array){return e.map(i)}else if(typeof e=="object"){var t={};for(var n in e){t[i(n)]=i(e[n])}return t}else{return e}}function o(e){return e.split("\n").map(function(e){return"  "+e}).join("\n")}var s=["motion","looks","sound","pen","variables","list","events","control","sensing","operators","custom","custom-arg","extension","grey","obsolete"];var a=["hat","cap","stack","boolean","reporter","celse","cend","ring"];var l=["ar","fa","he"];var c=[["move %n steps"," ",1,"forward:"],["turn @turnRight %n degrees"," ",1,"turnRight:"],["turn @turnLeft %n degrees"," ",1,"turnLeft:"],["point in direction %d.direction"," ",1,"heading:"],["point towards %m.spriteOrMouse"," ",1,"pointTowards:"],["go to x:%n y:%n"," ",1,"gotoX:y:"],["go to %m.location"," ",1,"gotoSpriteOrMouse:"],["glide %n secs to x:%n y:%n"," ",1,"glideSecs:toX:y:elapsed:from:"],["change x by %n"," ",1,"changeXposBy:"],["set x to %n"," ",1,"xpos:"],["change y by %n"," ",1,"changeYposBy:"],["set y to %n"," ",1,"ypos:"],["set rotation style %m.rotationStyle"," ",1,"setRotationStyle"],["say %s for %n secs"," ",2,"say:duration:elapsed:from:"],["say %s"," ",2,"say:"],["think %s for %n secs"," ",2,"think:duration:elapsed:from:"],["think %s"," ",2,"think:"],["show"," ",2,"show"],["hide"," ",2,"hide"],["switch costume to %m.costume"," ",2,"lookLike:"],["next costume"," ",2,"nextCostume"],["next backdrop"," ",102,"nextScene"],["switch backdrop to %m.backdrop"," ",2,"startScene"],["switch backdrop to %m.backdrop and wait"," ",102,"startSceneAndWait"],["change %m.effect effect by %n"," ",2,"changeGraphicEffect:by:"],["set %m.effect effect to %n"," ",2,"setGraphicEffect:to:"],["clear graphic effects"," ",2,"filterReset"],["change size by %n"," ",2,"changeSizeBy:"],["set size to %n%"," ",2,"setSizeTo:"],["go to front"," ",2,"comeToFront"],["go back %n layers"," ",2,"goBackByLayers:"],["play sound %m.sound"," ",3,"playSound:"],["play sound %m.sound until done"," ",3,"doPlaySoundAndWait"],["stop all sounds"," ",3,"stopAllSounds"],["play drum %d.drum for %n beats"," ",3,"playDrum"],["rest for %n beats"," ",3,"rest:elapsed:from:"],["play note %d.note for %n beats"," ",3,"noteOn:duration:elapsed:from:"],["set instrument to %d.instrument"," ",3,"instrument:"],["change volume by %n"," ",3,"changeVolumeBy:"],["set volume to %n%"," ",3,"setVolumeTo:"],["change tempo by %n"," ",3,"changeTempoBy:"],["set tempo to %n bpm"," ",3,"setTempoTo:"],["clear"," ",4,"clearPenTrails"],["stamp"," ",4,"stampCostume"],["pen down"," ",4,"putPenDown"],["pen up"," ",4,"putPenUp"],["set pen color to %c"," ",4,"penColor:"],["change pen color by %n"," ",4,"changePenHueBy:"],["set pen color to %n"," ",4,"setPenHueTo:"],["change pen shade by %n"," ",4,"changePenShadeBy:"],["set pen shade to %n"," ",4,"setPenShadeTo:"],["change pen size by %n"," ",4,"changePenSizeBy:"],["set pen size to %n"," ",4,"penSize:"],["when @greenFlag clicked","h",5,"whenGreenFlag"],["when %m.key key pressed","h",5,"whenKeyPressed"],["when this sprite clicked","h",5,"whenClicked"],["when backdrop switches to %m.backdrop","h",5,"whenSceneStarts"],["when %m.triggerSensor > %n","h",5,"whenSensorGreaterThan"],["when I receive %m.broadcast","h",5,"whenIReceive"],["broadcast %m.broadcast"," ",5,"broadcast:"],["broadcast %m.broadcast and wait"," ",5,"doBroadcastAndWait"],["wait %n secs"," ",6,"wait:elapsed:from:"],["repeat %n","c",6,"doRepeat"],["forever","cf",6,"doForever"],["if %b then","c",6,"doIf"],["if %b then","e",6,"doIfElse"],["wait until %b"," ",6,"doWaitUntil"],["repeat until %b","c",6,"doUntil"],["stop %m.stop","f",6,"stopScripts"],["when I start as a clone","h",6,"whenCloned"],["create clone of %m.spriteOnly"," ",6,"createCloneOf"],["delete this clone","f",6,"deleteClone"],["ask %s and wait"," ",7,"doAsk"],["turn video %m.videoState"," ",7,"setVideoState"],["set video transparency to %n%"," ",7,"setVideoTransparency"],["reset timer"," ",7,"timerReset"],["set %m.var to %s"," ",9,"setVar:to:"],["change %m.var by %n"," ",9,"changeVar:by:"],["show variable %m.var"," ",9,"showVariable:"],["hide variable %m.var"," ",9,"hideVariable:"],["add %s to %m.list"," ",12,"append:toList:"],["delete %d.listDeleteItem of %m.list"," ",12,"deleteLine:ofList:"],["if on edge, bounce"," ",1,"bounceOffEdge"],["insert %s at %d.listItem of %m.list"," ",12,"insert:at:ofList:"],["replace item %d.listItem of %m.list with %s"," ",12,"setLine:ofList:to:"],["show list %m.list"," ",12,"showList:"],["hide list %m.list"," ",12,"hideList:"],["x position","r",1,"xpos"],["y position","r",1,"ypos"],["direction","r",1,"heading"],["costume #","r",2,"costumeIndex"],["size","r",2,"scale"],["backdrop name","r",102,"sceneName"],["backdrop #","r",102,"backgroundIndex"],["volume","r",3,"volume"],["tempo","r",3,"tempo"],["touching %m.touching?","b",7,"touching:"],["touching color %c?","b",7,"touchingColor:"],["color %c is touching %c?","b",7,"color:sees:"],["distance to %m.spriteOrMouse","r",7,"distanceTo:"],["answer","r",7,"answer"],["key %m.key pressed?","b",7,"keyPressed:"],["mouse down?","b",7,"mousePressed"],["mouse x","r",7,"mouseX"],["mouse y","r",7,"mouseY"],["loudness","r",7,"soundLevel"],["video %m.videoMotionType on %m.stageOrThis","r",7,"senseVideoMotion"],["timer","r",7,"timer"],["%m.attribute of %m.spriteOrStage","r",7,"getAttribute:of:"],["current %m.timeAndDate","r",7,"timeAndDate"],["days since 2000","r",7,"timestamp"],["username","r",7,"getUserName"],["%n + %n","r",8,"+"],["%n - %n","r",8,"-"],["%n * %n","r",8,"*"],["%n / %n","r",8,"/"],["pick random %n to %n","r",8,"randomFrom:to:"],["%s < %s","b",8,"<"],["%s = %s","b",8,"="],["%s > %s","b",8,">"],["%b and %b","b",8,"&"],["%b or %b","b",8,"|"],["not %b","b",8,"not"],["join %s %s","r",8,"concatenate:with:"],["letter %n of %s","r",8,"letter:of:"],["length of %s","r",8,"stringLength:"],["%n mod %n","r",8,"%"],["round %n","r",8,"rounded"],["%m.mathOp of %n","r",8,"computeFunction:of:"],["item %d.listItem of %m.list","r",12,"getLine:ofList:"],["length of %m.list","r",12,"lineCountOfList:"],["%m.list contains %s?","b",12,"list:contains:"],["when %m.booleanSensor","h",20,""],["when %m.sensor %m.lessMore %n","h",20,""],["sensor %m.booleanSensor?","b",20,""],["%m.sensor sensor value","r",20,""],["turn %m.motor on for %n secs"," ",20,""],["turn %m.motor on"," ",20,""],["turn %m.motor off"," ",20,""],["set %m.motor power to %n"," ",20,""],["set %m.motor2 direction to %m.motorDirection"," ",20,""],["when distance %m.lessMore %n","h",20,""],["when tilt %m.eNe %n","h",20,""],["distance","r",20,""],["tilt","r",20,""],["turn %m.motor on for %n seconds"," ",20,""],["set light color to %n"," ",20,""],["play note %n for %n seconds"," ",20,""],["when tilted","h",20,""],["tilt %m.xxx","r",20,""],["else","else",6,""],["end","end",6,""],[". . ."," ",42,""],["%n @addInput","ring",42,""],["if %b","c",0,"doIf"],["if %b","e",0,"doIfElse"],["forever if %b","cf",0,"doForeverIf"],["stop script","f",0,"doReturn"],["stop all","f",0,"stopAll"],["switch to costume %m.costume"," ",0,"lookLike:"],["next background"," ",0,"nextScene"],["switch to background %m.backdrop"," ",0,"startScene"],["background #","r",0,"backgroundIndex"],["loud?","b",0,"isLoud"]];var h={0:"obsolete",1:"motion",2:"looks",3:"sound",4:"pen",5:"events",6:"control",7:"sensing",8:"operators",9:"variables",10:"custom",11:"parameter",12:"list",20:"extension",42:"grey"};var u={" ":"stack",b:"boolean",c:"c-block",e:"if-block",f:"cap",h:"hat",r:"reporter",cf:"c-block cap","else":"celse",end:"cend",ring:"ring"};var f=/(%[a-zA-Z](?:\.[a-zA-Z0-9]+)?)/g;var p=/(@[a-zA-Z]+)/;var d=new RegExp([f.source,"|",p.source].join(""),"g");var v=/^#(?:[0-9a-fA-F]{3}){1,2}?$/;function m(e){var t=e.split(d).filter(n);return{spec:e,parts:t,inputs:t.filter(function(e){return f.test(e)}),hash:g(e)}}function g(e){return b(e.replace(f," _ "))}function b(e){return e.replace(/_/g," _ ").replace(/ +/g," ").replace(/[,%?:]/g,"").replace(/ß/g,"ss").replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(". . .","...").trim()}var w={};var y={};var k=c.map(function(e){var t=r(m(e[0]),{shape:u[e[1]],category:h[e[2]%100],selector:e[3],hasLoopArrow:["doRepeat","doUntil","doForever"].indexOf(e[3])>-1});if(t.selector){if(!w[t.selector])w[t.selector]=t}return y[t.spec]=t});var L={"@greenFlag":"⚑","@turnRight":"↻","@turnLeft":"↺","@addInput":"▸","@delInput":"◂"};var S={};function x(e,t){var n=t.blocksByHash={};Object.keys(t.commands).forEach(function(e){var r=t.commands[e];var i=y[e];var o=g(r);n[o]=i;var s=p.exec(e);if(s){var a=s[0];var l=o.replace(a,L[a]);n[l]=i}});Object.keys(t.aliases).forEach(function(e){var r=t.aliases[e];var i=y[r];var o=g(e);n[o]=i});t.code=e;S[e]=t}function I(e){Object.keys(e).forEach(function(t){x(t,e[t])})}var M={aliases:{"turn left %n degrees":"turn @turnLeft %n degrees","turn ccw %n degrees":"turn @turnLeft %n degrees","turn right %n degrees":"turn @turnRight %n degrees","turn cw %n degrees":"turn @turnRight %n degrees","when gf clicked":"when @greenFlag clicked","when flag clicked":"when @greenFlag clicked","when green flag clicked":"when @greenFlag clicked","...":". . .","…":". . ."},define:["define"],ignorelt:["when distance"],math:["abs","floor","ceiling","sqrt","sin","cos","tan","asin","acos","atan","ln","log","e ^","10 ^"],osis:["other scripts in sprite","other scripts in stage"],commands:{}};k.forEach(function(e){M.commands[e.spec]=e.spec}),I({en:M});function O(e,t,n){var r=function(r,i,o){return w[n(i,o)?e:t]};w[e].specialCase=w[t].specialCase=r}O("computeFunction:of:","getAttribute:of:",function(e,t){var n=e[0];if(!n.isInput)return;var r=n.value;return t.math.indexOf(r)>-1});O("lineCountOfList:","stringLength:",function(e,t){var n=e[e.length-1];if(!n.isInput)return;return n.shape==="dropdown"});w["stopScripts"].specialCase=function(e,t,n){var i=t[t.length-1];if(!i.isInput)return;var o=i.value;if(n.osis.indexOf(o)>-1){return r(w["stopScripts"],{shape:"stack"})}};function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(v.test(r)){e.color=r;e.category="";e.categoryIsDefault=false}else if(s.indexOf(r)>-1){e.category=r;e.categoryIsDefault=false}else if(a.indexOf(r)>-1){e.shape=r}else if(r==="cstart"){e.shape="c-block"}else if(r==="loop"){e.hasLoopArrow=true}}}function C(e,r,i){var o=[];if(t(r[r.length-1])){o=r.pop()}var s=[];for(var a=0;a<r.length;a++){var c=r[a];if(c.isLabel){s.push(c.value)}else if(c.isIcon){s.push("@"+c.name)}else{s.push("_")}}var h=e.hash=b(s.join(" "));for(var a=0;a<i.length;a++){var u=i[a];if(u.blocksByHash.hasOwnProperty(h)){var d=u.blocksByHash[h];if(d.specialCase){d=d.specialCase(e,r,u)||d}e.language=u;e.isRTL=l.indexOf(u.code)>-1;if(d.shape==="ring"?e.shape==="reporter":e.shape==="stack"){e.shape=d.shape}e.category=d.category;e.categoryIsDefault=false;e.selector=d.selector;e.hasLoopArrow=d.hasLoopArrow;if(p.test(d.spec)||u.aliases[h]){var v=r.filter(function(e){return!e.isLabel});r=d.parts.map(function(e){e=e.trim();if(!e)return;return f.test(e)?v.shift():p.test(e)?new Be(e.slice(1)):new Ce(e)}).filter(n)}}}A(e,o);if(e.hasLoopArrow){r.push(new Be("loopArrow"))}return new je(e,r)}function B(e,t){var n=e[0];var r=0;function i(){n=e[++r]}function o(){return e[r+1]}function s(){for(var t=r+1;t<e.length;t++){if(e[t]!==" ")return e[t]}}var a=[];t.map(function(e){a=a.concat(e.define)});function l(e){return a.indexOf(e)>-1}function c(e,n){var r=!!n.filter(function(e){return!e.isLabel}).length;var i={shape:e,category:e==="define-hat"?"custom":e==="reporter"&&!r?"variables":"obsolete",categoryIsDefault:true,hasLoopArrow:false};return C(i,n,t)}function h(e){var t=[];var r;while(n&&n!=="\n"){if(n==="<"||n===">"&&e===">"){var a=t[t.length-1];var c=s();if(a&&!a.isLabel&&(c==="["||c==="("||c==="<"||c==="{")){r=null;t.push(new Ce(n));i();continue}}if(n===e)break;if(n==="/"&&o()==="/")break;switch(n){case"[":r=null;t.push(u());break;case"(":r=null;t.push(p());break;case"<":r=null;t.push(d());break;case"{":r=null;t.push(m());break;case" ":i();if(r&&l(r.value)){t.push(y());return t}r=null;break;case"◂":case"▸":t.push(g());r=null;break;case":":if(o()===":"){t.push(b(e));return t}case"/":default:if(!r)t.push(r=new Ce(""));r.value+=n;i()}}return t}function u(){i();var e="";var t=false;while(n&&n!=="]"&&n!=="\n"){if(n==="\\"){i();if(n==="v")t=true;if(!n)break}else{t=false}e+=n;i()}if(n==="]")i();if(v.test(e)){return new Re("color",e)}return!t&&/ v$/.test(e)?new Re("dropdown",e.slice(0,e.length-2)):new Re("string",e)}function f(e){var t=h(e);if(n&&n==="\n")i();if(t.length===0)return;var r=t[0];if(r&&r.isLabel&&l(r.value)){return c("define-hat",t)}if(t.length===1){var o=t[0];if(o.isBlock&&(o.isReporter||o.isBoolean||o.isRing)){return o}}return c("stack",t)}function p(){i();var e=h(")");if(n&&n===")")i();if(e.length===0){return new Re("number","")}if(e.length===1&&e[0].isLabel){var t=e[0].value;if(/^[0-9e.-]*$/.test(t)){return new Re("number",t)}}for(var r=0;r<e.length;r++){if(!e[r].isLabel){break}}if(r===e.length){var o=e[r-1];if(r>1&&o.value==="v"){e.pop();var t=e.map(function(e){return e.value}).join(" ");return new Re("number-dropdown",t)}}var s=c("reporter",e);if(s.info.shape==="ring"){var a=s.children[0];if(a&&a.isInput&&a.shape==="number"&&a.value===""){s.children[0]=new Re("reporter")}else if(a&&a.isScript&&a.isEmpty){s.children[0]=new Re("stack")}}return s}function d(){i();var e=h(">");if(n&&n===">")i();if(e.length===0){return new Re("boolean")}return c("boolean",e)}function m(){i();var e=function(){while(n&&n!=="}"){var e=f("}");if(e)return e}};var t=R(e);var r=[];t.forEach(function(e){r=r.concat(e.blocks)});if(n==="}")i();return new Ne(r)}function g(){var e=n;i();switch(e){case"▸":return new Be("addInput");case"◂":return new Be("delInput")}}function b(e){i();i();var t=[];var r="";while(n&&n!=="\n"&&n!==e){if(n===" "){if(r){t.push(r);r=""}}else if(n==="/"&&o()==="/"){break}else{r+=n}i()}if(r)t.push(r);return t}function w(e){i();i();var t="";while(n&&n!=="\n"&&n!==e){t+=n;i()}if(n&&n==="\n")i();return new Ee(t,true)}function y(){var e=[];function r(r,o){s=null;i();var a=h(o);if(n===o)i();e.push(C({shape:r==="boolean"?"boolean":"reporter",argument:r,category:"custom-arg"},a,t))}var s;while(n&&n!=="\n"){switch(n){case"(":r("number",")");break;case"[":r("string","]");break;case"<":r("boolean",">");break;case" ":i();s=null;break;case":":if(o()===":"){e.push(b());break}default:if(!s)e.push(s=new Ce(""));s.value+=n;i()}}return c("outline",e)}function k(){var e=f();if(n==="/"&&o()==="/"){var t=w();t.hasBlock=e&&e.children.length;if(!t.hasBlock){return t}e.comment=t}return e}return function(){if(!n)return undefined;var e=k();return e||"NL"}}function R(e){var t=e();function n(){t=e()}function i(){while(t==="NL")n();var e=[];while(t){var i=[];while(t&&t!=="NL"){var s=o();if(s.isElse||s.isEnd){s=new je(r(s.info,{shape:"stack"}),s.children)}if(s.isHat){if(i.length)e.push(new Ne(i));i=[s]}else if(s.isFinal){i.push(s);break}else if(s.isCommand){i.push(s)}else{if(i.length)e.push(new Ne(i));e.push(new Ne([s]));i=[];break}}if(i.length)e.push(new Ne(i));while(t==="NL")n()}return e}function o(){var e=t;n();if(e.hasScript){while(true){var r=s();e.children.push(new Ne(r));if(t&&t.isElse){for(var i=0;i<t.children.length;i++){e.children.push(t.children[i])}n();continue}if(t&&t.isEnd){n()}break}}return e}function s(){var e=[];while(t){if(t==="NL"){n();continue}if(!t.isCommand){return e}e.push(o())}return e}return i()}function j(e,t){if(e.isScript){e.blocks.forEach(function(e){j(e,t)})}else if(e.isBlock){t(e);e.children.forEach(function(e){j(e,t)})}}var E={"append:toList:":1,"deleteLine:ofList:":1,"insert:at:ofList:":2,"setLine:ofList:to:":1,"showList:":0,"hideList:":0};function N(e){var t=[];for(var n=0;n<e.children.length;n++){var r=e.children[n];if(!r.isLabel)return;t.push(r.value)}return t.join(" ")}function D(e){var t={};var n={};e.forEach(function(e){var r={};j(e,function(e){if(e.info.shape==="define-hat"){var i=e.children[1];if(!i)return;var o=[];var s=[];for(var a=0;a<i.children.length;a++){var l=i.children[a];if(l.isLabel){s.push(l.value)}else if(l.isBlock){if(!l.info.argument)return;s.push({number:"%n",string:"%s","boolean":"%b"}[l.info.argument]);var c=N(l);o.push(c);r[c]=true}}var h=s.join(" ");var u=g(h);var f=t[u]={spec:h,names:o};e.info.selector="procDef";e.info.call=f.spec;e.info.names=f.names;e.info.category="custom"}else if(e.info.selector==="doIfElse"){var p=e.children[e.children.length-2];e.info.selector=p&&p.isLabel&&p.value==="else"?"doIfElse":"doIf"}else if(e.info.categoryIsDefault&&(e.isReporter||e.isBoolean)){var c=N(e);if(r[c]){e.info.category="custom-arg";e.info.categoryIsDefault=false;e.info.selector="getParam"}}else if(E.hasOwnProperty(e.info.selector)){var d=E[e.info.selector];var v=e.children.filter(function(e){return!e.isLabel});var m=v[d];if(m.isInput){n[m.value]=true}}})});e.forEach(function(e){j(e,function(e){if(e.info.categoryIsDefault&&e.info.category==="obsolete"){var r=t[e.info.hash];if(r){e.info.selector="call";e.info.call=r.spec;e.info.names=r.names;e.info.category="custom"}}else if(e.isReporter){var i=N(e);if(!i)return;if(e.info.category==="variables"&&n[i]&&e.info.categoryIsDefault){e.info.category="list";e.info.categoryIsDefault=false}if(e.info.category==="list"){e.info.selector="contentsOfList:"}else if(e.info.category==="variables"){e.info.selector="readVariable"}}})})}function F(e,t){var t=r({inline:false,languages:["en"]},t);if(t.inline){e=e.replace(/\n/g," ")}var n=t.languages.map(function(e){return S[e]});var i=B(e,n);var o=R(i);D(o);return new De(o)}var P=(new DOMParser).parseFromString("<xml></xml>","application/xml");function z(e){return P.createCDATASection(e)}function T(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg",e);return V(n,t)}var J={textContent:true};function V(e,t){for(var n in t){var r=""+t[n];if(J[n]){e[n]=r}else if(/^xlink:/.test(n)){e.setAttributeNS("http://www.w3.org/1999/xlink",n.slice(6),r)}else if(t[n]!==null&&t.hasOwnProperty(n)){e.setAttributeNS(null,n,r)}}return e}function Z(e,t){for(var n=0;n<t.length;n++){e.appendChild(t[n])}return e}function H(e){return Z(T("g"),e)}function G(e,t){return T("svg",{version:"1.1",width:e,height:t})}function U(e){return T("polygon",r(e,{points:e.points.join(" ")}))}function Q(e){return T("path",r(e,{path:null,d:e.path.join(" ")}))}function X(e,t,n,i){var o=T("text",r(i,{x:e,y:t,textContent:n}));return o}function q(e){return T("use",{"xlink:href":e})}function W(e,t,n){V(n,{transform:["translate(",e," ",t,")"].join("")});return n}function $(t,n,r){var i=true;var o=r.split(" ");var s=[];for(var a=0;a<o.length;a++){var l=o[a];if(l==="A"){var c=a+5;s.push("A");while(a<c){s.push(o[++a])}continue}else if(/[A-Za-z]/.test(l)){e(i)}else{l=+l;l+=i?t:n;i=!i}s.push(l)}return s.join(" ")}function _(e,t,n){return T("rect",r(n,{x:0,y:0,width:e,height:t}))}function K(e,t,n,r,i,o){var s=r-t;return["L",e,t,"A",i,o,0,0,1,n,r].join(" ")}function Y(e,t,n,r,i,o){var s=r-t;return["L",e,t,"A",i,o,0,0,0,n,r].join(" ")}function ee(e,t){var n=t/2;return["M",n,0,K(e-n,0,e-n,t,n,n),K(n,t,n,0,n,n),"Z"]}function te(e,t,n){return Q(r(n,{path:ee(e,t)}))}function ne(e,t){var n=t/2;return["M",n,0,"L",e-n,0,e,n,"L",e,n,e-n,t,"L",n,t,0,n,"L",0,n,n,0,"Z"]}function re(e,t,n){return Q(r(n,{path:ne(e,t)}))}function ie(e){return["M",0,3,"L",3,0,"L",13,0,"L",16,3,"L",24,3,"L",27,0,"L",e-3,0,"L",e,3].join(" ")}function oe(e){return["M",0,3,"L",3,0,"L",7,0,"L",10,3,"L",16,3,"L",19,0,"L",e-3,0,"L",e,3].join(" ")}function se(e,t,n,r){if(typeof r==="undefined"){r=0}var i=["L",e,t-3,"L",e-3,t];if(n){i=i.concat(["L",r+27,t,"L",r+24,t+3,"L",r+16,t+3,"L",r+13,t])}if(r>0){i=i.concat(["L",r+2,t,"L",r,t+2])}else{i=i.concat(["L",r+3,t,"L",0,t-3])}return i.join(" ")}function ae(e,t){return["L",15,t-2,"L",15+2,t,"L",e-3,t,"L",e,t+3].join(" ")}function le(e,t,n){return Q(r(n,{path:[ie(e),se(e,t,true,0),"Z"]}))}function ce(e,t){return[ie(e),se(e,t,false,0),"Z"]}function he(e,t){return[oe(e),se(e,t,false,0),"Z"]}function ue(e,t,n){return Q(r(n,{path:ce(e,t)}))}function fe(e,t,n){return Q(r(n,{path:["M",0,12,K(0,12,80,10,80,80),"L",e-3,10,"L",e,10+3,se(e,t,true),"Z"]}))}function pe(e,t,n,r,i){var i=i||.42;var o=(e+n)/2;var s=(t+r)/2;var a=Math.round(o+i*(r-t));var l=Math.round(s-i*(n-e));return[a,l,n,r].join(" ")}function de(e,t,n,i){var n=Math.min(.2,35/e);return Q(r(i,{path:["M",0,15,"Q",pe(0,15,e,15,n),se(e,t,true),"M",-1,13,"Q",pe(-1,13,e+1,13,n),"Q",pe(e+1,13,e,16,.6),"Q",pe(e,16,0,16,-n),"Q",pe(0,16,-1,13,.6),"Z"]}))}function ve(e,t,n){return Q({path:["M",-1,13,"Q",pe(-1,13,e+1,13,n),"Q",pe(e+1,13,e,16,.6),"Q",pe(e,16,0,16,-n),"Q",pe(0,16,-1,13,.6),"Z"],"class":"define-hat-cap"})}function me(e,t,n){var r=52;var i=t-r;var o=Math.min(.2,35/e);return W(0,i,H([de(e,r,o,n),ve(e,r,o)]))}function ge(e,t,n,i,o){var s=i[0].height;var a=[ie(e),se(e,s,true,15)];for(var l=1;l<i.length;l+=2){var c=l+2===i.length;s+=i[l].height-3;a.push(ae(e,s));var h=!(c&&n);var u=c?0:15;s+=i[l+1].height+3;a.push(se(e,s,h,u))}return Q(r(o,{path:a}))}function be(e,t,n,i,o,s,a){var l=8;var c=s==="reporter"?ee:s==="boolean"?ne:i<40?he:ce;return Q(r(a,{path:["M",l,0,Y(l,0,0,l,l,l),Y(0,t-l,l,t,l,l),Y(e-l,t,e,t-l,l,l),Y(e,l,e-l,0,l,l),"Z",$(4,n||4,c(i,o).join(" "))],"fill-rule":"even-odd"}))}function we(e,t,n){var i=6;return Q(r(n,{"class":"comment",path:["M",i,0,K(e-i,0,e,i,i,i),K(e,t-i,e-i,t,i,i),K(i,t,0,t-i,i,i),K(0,i,i,0,i,i),"Z"]}))}function ye(e,t){return W(-e,9,_(e,2,r(t,{"class":"comment-line"})))}var ke="text{font-family:Lucida Grande,Verdana,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#fff;font-size:10px;word-spacing:+1px}.obsolete{fill:#d42828}.motion{fill:#4a6cd4}.looks{fill:#8a55d7}.sound{fill:#bb42c3}.pen{fill:#0e9a6c}.events{fill:#c88330}.control{fill:#e1a91a}.sensing{fill:#2ca5e2}.operators{fill:#5cb712}.variables{fill:#ee7d16}.list{fill:#cc5b22}.custom{fill:#632d99}.custom-arg{fill:#5947b1}.extension{fill:#4b4a60}.grey{fill:#969696}.bevel{filter:url(#bevelFilter)}.input{filter:url(#inputBevelFilter)}.input-number,.input-number-dropdown,.input-string{fill:#fff}.literal-dropdown,.literal-number,.literal-number-dropdown,.literal-string{font-weight:400;font-size:9px;word-spacing:0}.literal-number,.literal-number-dropdown,.literal-string{fill:#000}.darker{filter:url(#inputDarkFilter)}.outline{stroke:#fff;stroke-opacity:.2;stroke-width:2;fill:none}.define-hat-cap{stroke:#632d99;stroke-width:1;fill:#8e2ec2}.comment{fill:#ffffa5;stroke:#d0d1d2;stroke-width:1}.comment-line{fill:#ffff80}.comment-label{font-family:Helevetica,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#5c5d5f;word-spacing:0;font-size:12px}";function Le(){var e=T("style");e.appendChild(z(ke));return e}function Se(){return[T("path",{d:"M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z",fill:"#3f8d15",id:"greenFlag"}),T("path",{d:"M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z",fill:"#fff",id:"turnRight"}),T("path",{d:"M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z",fill:"#fff",id:"turnLeft"}),T("path",{d:"M0 0L4 4L0 8Z",fill:"#111",id:"addInput"}),T("path",{d:"M4 0L4 8L0 4Z",fill:"#111",id:"delInput"}),V(H([T("path",{d:"M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",fill:"#000",opacity:"0.3"}),W(-1,-1,T("path",{d:"M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",fill:"#fff",opacity:"0.9"}))]),{id:"loopArrow"})]}var xe=function(e,t){this.el=T("filter",r(t,{id:e,x0:"-50%",y0:"-50%",width:"200%",height:"200%"}));this.highestId=0};xe.prototype.fe=function(e,t,n){var i=e.toLowerCase().replace(/gaussian|osite/,"");var o=[i,"-",++this.highestId].join("");this.el.appendChild(Z(T("fe"+e,r(t,{result:o})),n||[]));return o};xe.prototype.comp=function(e,t,n,i){return this.fe("Composite",r(i,{operator:e,"in":t,in2:n}))};xe.prototype.subtract=function(e,t){return this.comp("arithmetic",e,t,{k2:+1,k3:-1})};xe.prototype.offset=function(e,t,n){return this.fe("Offset",{"in":n,dx:e,dy:t})};xe.prototype.flood=function(e,t,n){return this.fe("Flood",{"in":n,"flood-color":e,"flood-opacity":t})};xe.prototype.blur=function(e,t){return this.fe("GaussianBlur",{"in":"SourceAlpha",stdDeviation:[e,e].join(" ")})};xe.prototype.merge=function(e){this.fe("Merge",{},e.map(function(e){return T("feMergeNode",{"in":e})}))};function Ie(e,t){var n=new xe(e);var r="SourceAlpha";var i=t?-1:1;var o=n.blur(1,r);n.merge(["SourceGraphic",n.comp("in",n.flood("#fff",.15),n.subtract(r,n.offset(+i,+i,o))),n.comp("in",n.flood("#000",.7),n.subtract(r,n.offset(-i,-i,o)))]);return n.el}function Me(e){var t=new xe(e);t.merge(["SourceGraphic",t.comp("in",t.flood("#000",.2),"SourceAlpha")]);return t.el}function Oe(e,t,n,r){return V(H([V(r,{"class":[n,"darker"].join(" ")})]),{width:e,height:t})}function Ae(e){e.draw()}var Ce=function(e,t){this.value=e;this.cls=t||"";this.el=null;this.width=null;this.height=12;this.x=0};Ce.prototype.isLabel=true;Ce.prototype.stringify=function(){return this.value};Ce.prototype.measure=function(){this.el=X(0,10,this.value,{"class":this.cls});if(this.value===""){this.width=0}else if(this.value===" "){this.width=4.15625}else{Ce.measure(this)}};Ce.prototype.draw=function(){return this.el};Ce.measuring=null;Ce.toMeasure=[];Ce.startMeasuring=function(){Ce.measuring=V(G(1,1),{"class":"sb-measure"});Ce.measuring.style.visibility="hidden";document.body.appendChild(Ce.measuring);var e=T("defs");Ce.measuring.appendChild(e);e.appendChild(Le())};Ce.measure=function(e){Ce.measuring.appendChild(e.el);Ce.toMeasure.push(e)};Ce.endMeasuring=function(e){var t=Ce.measuring;var n=Ce.toMeasure;Ce.measuring=null;Ce.toMeasure=[];setTimeout(Ce.measureAll.bind(null,t,n,e),0)};Ce.measureAll=function(e,t,n){for(var r=0;r<t.length;r++){var i=t[r];var o=i.el.getBBox();i.width=o.width+.5|0;var s=/ *$/.exec(i.value)[0].length||0;for(var a=0;a<s;a++){i.width+=4.15625}}document.body.removeChild(e);n()};var Be=function(t){this.name=t;this.isArrow=t==="loopArrow";var n=Be.icons[t];e(n,"no info for icon "+t);r(n,this)};Be.prototype.isIcon=true;Be.prototype.stringify=function(){return L["@"+this.name]||""};Be.icons={greenFlag:{width:20,height:21,dy:-2},turnLeft:{width:15,height:12,dy:+1},turnRight:{width:15,height:12,dy:+1},loopArrow:{width:14,height:11},addInput:{width:4,height:8},delInput:{width:4,height:8}};Be.prototype.draw=function(){return q("#"+this.name,{width:this.width,height:this.height})};var Re=function(e,t){this.shape=e;this.value=t;this.isRound=e==="number"||e==="number-dropdown";this.isBoolean=e==="boolean";this.isStack=e==="stack";this.isInset=e==="boolean"||e==="stack"||e==="reporter";this.isColor=e==="color";this.hasArrow=e==="dropdown"||e==="number-dropdown";this.isDarker=e==="boolean"||e==="stack"||e==="dropdown";this.isSquare=e==="string"||e==="color"||e==="dropdown";this.hasLabel=!(this.isColor||this.isInset);this.label=this.hasLabel?new Ce(t,["literal-"+this.shape]):null;this.x=0};Re.prototype.isInput=true;Re.fromJSON=function(e,t,n){return new Re({b:"boolean",n:"number",s:"string",d:"number-dropdown",m:"dropdown"}[n[1]],t||"")};Re.prototype.toJSON=function(){return this.isBoolean?false:this.value};Re.prototype.stringify=function(){var e=this.value||"";if(this.hasArrow)e+=" v";return this.isRound?"("+e+")":this.isSquare?"["+e+"]":this.isBoolean?"<>":this.isStacK?"{}":e};Re.prototype.measure=function(){if(this.hasLabel)this.label.measure()};Re.shapes={string:_,number:te,"number-dropdown":te,color:_,dropdown:_,"boolean":re,stack:le,reporter:te};Re.prototype.draw=function(e){if(this.hasLabel){var t=this.label.draw();var n=Math.max(14,this.label.width+(this.shape==="string"||this.shape==="number-dropdown"?6:9))}else{var n=this.isInset?30:this.isColor?13:null}if(this.hasArrow)n+=10;this.width=n;var r=this.height=this.isRound||this.isColor?13:14;var i=Re.shapes[this.shape](n,r);if(this.isColor){V(i,{fill:this.value})}else if(this.isDarker){i=Oe(n,r,e.info.category,i);if(e.info.color){V(i,{fill:e.info.color})}}var o=H([V(i,{"class":["input","input-"+this.shape].join(" ")})]);if(this.hasLabel){var s=this.isRound?5:4;o.appendChild(W(s,0,t))}if(this.hasArrow){var a=this.shape==="dropdown"?5:4;o.appendChild(W(n-10,a,U({points:[7,0,3.5,4,0,0],fill:"#000",opacity:"0.6"})))}return o};var je=function(t,n,r){e(t);this.info=t;this.children=n;this.comment=r||null;var i=this.info.shape;this.isHat=i==="hat"||i==="define-hat";this.hasPuzzle=i==="stack"||i==="hat";this.isFinal=/cap/.test(i);this.isCommand=i==="stack"||i==="cap"||/block/.test(i);this.isOutline=i==="outline";this.isReporter=i==="reporter";this.isBoolean=i==="boolean";this.isRing=i==="ring";this.hasScript=/block/.test(i);this.isElse=i==="celse";this.isEnd=i==="cend";this.x=0};je.prototype.isBlock=true;je.fromJSON=function(n,i,o){var s=i.slice();var a=s.shift();if(a==="procDef"){var l=s[0];var c=s[1].slice();var h=m(l);var u=h.parts.map(function(e){if(f.test(e)){var t=new Ce(c.shift());return new je({shape:e[1]==="b"?"boolean":"reporter",category:"custom-arg"},[t])}else{return new Ce(e)}});var d=new je({shape:"outline"},u);var u=[new Ce(n.define[0]),d];return new je({shape:"define-hat",category:"custom",selector:"procDef",call:l,names:s[1]},u)}else if(a==="call"){var l=s.shift();var h=r(m(l),{category:"custom",shape:"stack",selector:"call",call:l});var v=h.parts}else if(a==="readVariable"||a==="contentsOfList:"||a==="getParam"){var g=a==="getParam"&&s.shift()==="b"?"boolean":"reporter";var h={selector:a,shape:g,category:{readVariable:"variables","contentsOfList:":"list",getParam:"custom-arg"}[a]};return new je(h,[new Ce(s[0])])}else{var h=w[a];e(h,"unknown selector: "+a);var l=n.commands[h.spec];var v=m(l).parts}var u=v.map(function(e){if(f.test(e)){var r=s.shift();return(t(r)?je:Re).fromJSON(n,r,e)}else if(p.test(e)){return new Be(e.slice(1))}else{return new Ce(e.trim())}});s.forEach(function(r){e(t(r));u.push(new Ne(r.map(je.fromJSON.bind(null,n))))});return new je(h,u)};je.prototype.toJSON=function(){var e=this.info.selector;var t=[];if(e==="procDef"){var n=this.info.names;var r=this.info.call;var i=m(r);var o=i.inputs.map(function(e){return e==="%n"?1:e==="%b"?false:""});var s=false;return["procDef",r,n,o,s]}if(e==="readVariable"||e==="contentsOfList:"||e==="getParam"){if(e==="getParam")t.push(this.isBoolean==="boolean"?"b":"r");t.push(N(this))}else{for(var a=0;a<this.children.length;a++){var l=this.children[a];if(l.isInput||l.isBlock||l.isScript){t.push(l.toJSON())}}if(e==="call"){return["call",this.info.call].concat(t)}}if(!e)return"";return[e].concat(t)};je.prototype.stringify=function(){var e=this.children.map(function(e){return e.isScript?"\n"+o(e.stringify())+"\n":e.stringify().trim()+" "}).join("").trim();if(this.info.shape==="reporter"&&this.info.category==="list")e+=" :: list";if(this.info.category==="custom"&&this.info.shape!=="define-hat")e+=" :: custom";return this.hasScript?e+"\nend":this.info.shape==="reporter"?"("+e+")":this.info.shape==="boolean"?"<"+e+">":e};je.prototype.measure=function(){for(var e=0;e<this.children.length;e++){var t=this.children[e];if(t.measure)t.measure()}if(this.comment)this.comment.measure()};je.shapes={stack:le,"c-block":le,"if-block":le,celse:le,cend:le,cap:ue,reporter:te,"boolean":re,hat:fe,"define-hat":me,ring:te};je.prototype.drawSelf=function(t,n,r){
if(r.length>1){return ge(t,n,this.isFinal,r,{"class":[this.info.category,"bevel"].join(" ")})}if(this.info.shape==="outline"){return V(le(t,n),{"class":"outline"})}if(this.isRing){var i=this.children[0];if(i&&(i.isInput||i.isBlock||i.isScript)){var o=i.isScript?"stack":i.isInput?i.shape:i.info.shape;return be(t,n,i.y,i.width,i.height,o,{"class":[this.info.category,"bevel"].join(" ")})}}var s=je.shapes[this.info.shape];e(s,"no shape func: "+this.info.shape);return s(t,n,{"class":[this.info.category,"bevel"].join(" ")})};je.prototype.minDistance=function(e){if(this.isBoolean){return e.isReporter?4+e.height/4|0:e.isLabel?5+e.height/2|0:e.isBoolean||e.shape==="boolean"?5:2+e.height/2|0}if(this.isReporter){return e.isInput&&e.isRound||(e.isReporter||e.isBoolean)&&!e.hasScript?0:e.isLabel?2+e.height/2|0:-2+e.height/2|0}return 0};je.padding={hat:[15,6,2],"define-hat":[21,8,9],reporter:[3,4,1],"boolean":[3,4,2],cap:[6,6,2],"c-block":[3,6,2],"if-block":[3,6,2],ring:[4,4,2],"null":[4,6,2]};je.prototype.draw=function(){var e=this.info.shape==="define-hat";var t=this.children;var n=je.padding[this.info.shape]||je.padding[null];var r=n[0],i=n[1],o=n[2];var s=0;var a=function(e){this.y=e;this.width=0;this.height=16;this.children=[]};var l=0;var c=0;var h=new a(s);function u(e){if(v.length===0){h.height+=r+o}else{h.height=e?13:15;h.y-=1}s+=h.height;v.push(h)}if(this.info.isRTL){var f=0;var p=function(){t=t.slice(0,f).concat(t.slice(f,d).reverse()).concat(t.slice(d))}.bind(this);for(var d=0;d<t.length;d++){if(t[d].isScript){p();f=d+1}}if(f<d){p()}}var v=[];for(var d=0;d<t.length;d++){var m=t[d];m.el=m.draw(this);if(m.isScript&&this.hasScript){u();m.y=s;v.push(m);c=Math.max(c,Math.max(1,m.width));m.height=Math.max(12,m.height)+3;s+=m.height;h=new a(s)}else{var g=d>0?30:0;var b=this.isCommand?0:this.minDistance(m);var w=this.isCommand?m.isBlock||m.isInput?g:0:b;if(w&&!v.length&&h.width<w-i){h.width=w-i}m.x=h.width;h.width+=m.width;l=Math.max(l,h.width+Math.max(0,b-i));h.width+=4;if(!m.isLabel){h.height=Math.max(h.height,m.height)}h.children.push(m)}}u(true);l=Math.max(l+i*2,this.isHat||this.hasScript?83:this.isCommand||this.isOutline||this.isRing?39:20);this.height=s;this.width=c?Math.max(l,15+c):l;if(e){var y=Math.min(26,3.5+.13*l|0)-18;this.height+=y;r+=2*y}var k=[];for(var d=0;d<v.length;d++){var h=v[d];if(h.isScript){k.push(W(15,h.y,h.el));continue}var L=h.height;for(var S=0;S<h.children.length;S++){var m=h.children[S];if(m.isArrow){k.push(W(l-15,this.height-3,m.el));continue}var s=r+(L-m.height-r-o)/2-1;if(e&&m.isLabel){s+=3}else if(m.isIcon){s+=m.dy|0}if(this.isRing){m.y=h.y+s|0;if(m.isInset){continue}}k.push(W(i+m.x,h.y+s|0,m.el))}}var x=this.drawSelf(l,this.height,v);k.splice(0,0,x);if(this.info.color){V(x,{fill:this.info.color})}return H(k)};var Ee=function(e,t){this.label=new Ce(e,["comment-label"]);this.width=null;this.hasBlock=t};Ee.prototype.isComment=true;Ee.lineLength=12;Ee.prototype.height=20;Ee.prototype.stringify=function(){return"// "+this.label.value};Ee.prototype.measure=function(){this.label.measure()};Ee.prototype.draw=function(){var e=this.label.draw();this.width=this.label.width+16;return H([ye(this.hasBlock?Ee.lineLength:0,6),we(this.width,this.height,{"class":"comment"}),W(8,4,e)])};var Ne=function(e){this.blocks=e;this.isEmpty=!e.length;this.isFinal=!this.isEmpty&&e[e.length-1].isFinal;this.y=0};Ne.prototype.isScript=true;Ne.prototype.measure=function(){for(var e=0;e<this.blocks.length;e++){this.blocks[e].measure()}};Ne.fromJSON=function(e,t){return new Ne(t[2].map(je.fromJSON.bind(null,e)))};Ne.prototype.toJSON=function(){return this.blocks.map(function(e){return e.toJSON()})};Ne.prototype.stringify=function(){return this.blocks.map(function(e){var t=e.stringify();if(e.comment)t+=" "+e.comment.stringify();return t}).join("\n")};Ne.prototype.draw=function(e){var t=[];var n=0;this.width=0;for(var r=0;r<this.blocks.length;r++){var i=this.blocks[r];t.push(W(e?0:2,n,i.draw()));n+=i.height;this.width=Math.max(this.width,i.width);var o=i.comment;if(o){var s=i.width+2+Ee.lineLength;var a=n-i.height/2;var l=o.draw();t.push(W(s,a-o.height/2,l));this.width=Math.max(this.width,s+o.width)}}this.height=n;if(!e&&!this.isFinal){this.height+=3}return H(t)};var De=function(e){this.scripts=e;this.width=null;this.height=null;this.el=null};De.fromJSON=function(e,t){var t=t||M;var n=e.scripts.map(Ne.fromJSON.bind(null,t));return new De(n)};De.prototype.toJSON=function(){var e=this.scripts.map(function(e){return[10,e.y+10,e.toJSON()]});return{scripts:e}};De.prototype.stringify=function(){return this.scripts.map(function(e){return e.stringify()}).join("\n\n")};De.prototype.measure=function(){this.scripts.forEach(function(e){e.measure()})};De.prototype.render=function(e){Ce.startMeasuring();this.measure();Ce.endMeasuring(this.drawScripts.bind(this,e))};De.prototype.drawScripts=function(e){var t=0;var n=0;var r=[];for(var i=0;i<this.scripts.length;i++){var o=this.scripts[i];if(n)n+=10;o.y=n;r.push(W(0,n,o.draw()));n+=o.height;t=Math.max(t,o.width+4)}this.width=t;this.height=n;var s=G(t,n);s.appendChild(Z(T("defs"),[Le(),Ie("bevelFilter",false),Ie("inputBevelFilter",true),Me("inputDarkFilter")].concat(Se())));s.appendChild(H(r));this.el=s;e(s)};De.prototype.exportSVG=function(){e(this.el,"call draw() first");return(new XMLSerializer).serializeToString(this.el)};De.prototype.exportPNG=function(e){var t=document.createElement("canvas");t.width=this.width;t.height=this.height;var n=t.getContext("2d");var r=new Image;r.src="data:image/svg+xml;utf8,"+this.exportSVG();r.onload=function(){n.drawImage(r,0,0);if(URL&&URL.createObjectURL&&Blob&&t.toBlob){var i=t.toBlob(function(t){e(URL.createObjectURL(t))},"image/png")}else{e(t.toDataURL("image/png"))}}};function Fe(e,t){return e.render(t)}function Pe(e,t){var t=r({inline:false},t);var n=e.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi,"\n");var i=document.createElement("pre");i.innerHTML=n;var o=i.textContent;if(t.inline){o=o.replace("\n","")}return o}function ze(e,t,n,r){if(r.inline){var i=document.createElement("span");var o="scratchblocks scratchblocks-inline";if(n[0]&&!n[0].isEmpty){o+=" scratchblocks-inline-"+n[0].blocks[0].shape}i.className=o;i.style.display="inline-block";i.style.verticalAlign="middle"}else{var i=document.createElement("div");i.className="scratchblocks"}i.appendChild(t);e.innerHTML="";e.appendChild(i)}var Te=function(e,t){var e=e||"pre.blocks";var t=r({inline:false,languages:["en"],read:Pe,parse:F,render:Fe,replace:ze},t);var n=[].slice.apply(document.querySelectorAll(e));n.forEach(function(e){var n=t.read(e,t);var r=t.parse(n,t);t.render(r,function(n){t.replace(e,n,r,t)})})};return{allLanguages:S,loadLanguages:I,fromJSON:De.fromJSON,toJSON:function(e){return e.toJSON()},stringify:function(e){return e.stringify()},Label:Ce,Icon:Be,Input:Re,Block:je,Comment:Ee,Script:Ne,Document:De,read:Pe,parse:F,render:Fe,replace:ze,renderMatching:Te}}();
