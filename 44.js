(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{LZsX:function(t,e,a){t.exports={sealWrap:"sealWrap___LR0fx"}},zn9t:function(t,e,a){"use strict";a.r(e);var n=a("cDcd"),r=a.n(n),l=a("LZsX"),i=a.n(l),o=Object(n["memo"])(t=>{var e=t.fontSize,a=t.width,l=t.compony,o=t.componySize,c=t.text,s=t.color,h=t.lineWidth,f=t.opacity,p=Object(n["useRef"])(null),d=(t,e,a,n,r,l,i,o)=>{var c=t,s=c.getContext("2d");c.width=e,c.height=e;var h=c.width/2,f=c.height/2;s.lineWidth=o,s.strokeStyle=i,s.beginPath(),s.arc(h,f,h-o,0,2*Math.PI),s.stroke(),M(s,h,f,30,i,0),s.font="".concat(l,"px Helvetica"),s.textBaseline="middle",s.textAlign="center",s.lineWidth=1,s.fillStyle=i,s.fillText(n,h,f+60),s.translate(h,f),s.font="".concat(r,"px Helvetica");for(var p,d=a.length,v=4*Math.PI/(3*(d-1)),u=a.split(""),x=0;x<d;x++)p=u[x],0==x?s.rotate(5*Math.PI/6):s.rotate(v),s.save(),s.translate(90,0),s.rotate(Math.PI/2),s.fillText(p,0,20),s.restore();function M(t,e,a,n,r,l){t.save(),t.fillStyle=r,t.translate(e,a),t.rotate(Math.PI+l),t.beginPath();Math.sin(0),Math.cos(0);for(var i=Math.PI/5*4,o=0;o<5;o++){var c=Math.sin(o*i),s=Math.cos(o*i);t.lineTo(c*n,s*n)}t.closePath(),t.stroke(),t.fill(),t.restore()}};return Object(n["useEffect"])(()=>{d(p.current,a,l,c,o,e,s,h)},[p.current,a,l,c,s,h,o,e]),r.a.createElement("div",{className:i.a.sealWrap,style:{opacity:f/100}},r.a.createElement("canvas",{ref:p}))});e["default"]=o}}]);