(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"0jGJ":function(a,e,t){a.exports={btn:"btn___2Qp3s",modalWrap:"modalWrap___1p1LB",modalMask:"modalMask___2WVb0",modal:"modal___2azsy",closeBtn:"closeBtn___2RpMi",modalTit:"modalTit___cqk5s",footer:"footer___23aTG"}},jwKU:function(a,e,t){"use strict";t.r(e);var l=t("cDcd"),o=t.n(l),n=t("faye"),c=t.n(n),s=t("0jGJ"),m=t.n(s),d=a=>{var e=a.visible,t=a.title,l=a.children,n=a.onClose,s=a.height,d=a.width,i=a.okText,r=a.cancelText,_=a.onOk,p=a.btnColor,b=()=>{_&&(location.href=_)},k=()=>{n&&n()},v=o.a.createElement("div",{className:m.a.modalWrap},o.a.createElement("div",{className:m.a.modalMask}),o.a.createElement("div",{className:m.a.modal,style:{width:d+"px",height:s+"px"}},o.a.createElement("span",{className:m.a.closeBtn,onClick:n},"x"),o.a.createElement("div",{className:m.a.modalTit},t),o.a.createElement("div",{style:{maxHeight:s-120,overflow:"auto"}}," ",l," "),(!!i||!!r)&&o.a.createElement("div",{className:m.a.footer},o.a.createElement("div",{className:m.a.btn,onClick:b,style:{backgroundColor:p}},i||"\u786e\u8ba4"),o.a.createElement("div",{className:m.a.btn,onClick:k},r||"\u53d6\u6d88"))));return e?c.a.createPortal(v,document.body):null};e["default"]=Object(l["memo"])(d)}}]);