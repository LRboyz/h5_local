(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{"Bok+":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return isEditorPage})),__webpack_require__.d(__webpack_exports__,"b",(function(){return cpClick})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addSpaceEntity}));var umi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("9kvl"),xss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("Xjjk"),xss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__),isEditorPage=()=>window.location.pathname.indexOf("editor")>-1,addSpaceEntity=e=>xss__WEBPACK_IMPORTED_MODULE_1___default()(e.replace(/\s/g,"&nbsp;")),cpClick=(type,content,showModalFn)=>{if(!isEditorPage())if("link"===type){if(window.location.href.indexOf("preview")>-1)return void(content&&(content.indexOf("http")>-1||content.indexOf(".")>-1?window.location.href=content.indexOf("http")>-1?content:"https://".concat(content):window.location.href="/h5?tid=".concat(content)));if(content.indexOf("http")>-1||content.indexOf(".")>-1)return void(window.location.href=content.indexOf("http")>-1?content:"https://".concat(content));content&&umi__WEBPACK_IMPORTED_MODULE_0__["a"].push("?tid=".concat(content))}else"modal"===type?showModalFn():"code"===type?eval(content):"phone"===type?window.location.href="tel://"+content:"toTop"===type&&document.querySelector("#dooring_scroll_box").scrollTo({top:0,behavior:"smooth"})}},cQd8:function(e,t,n){"use strict";n.r(t);var o=n("tJVT"),_=n("cDcd"),c=n.n(_),i=n("Bok+"),r=Object(_["memo"])(e=>{var t=e.text,n=e.fontSize,r=e.color,a=e.indent,d=e.lineHeight,l=e.textAlign,p=e.bgColor,s=e.space,u=e.padding,w=e.radius,b=e.interaction,f=void 0===b?{type:"",content:"",title:"",width:300,height:300,okText:"",cancelText:"",btnColor:"",onOk:""}:b,h=f.type,x=f.content,O=Object(_["useState"])(!1),k=Object(o["a"])(O,2),E=(k[0],k[1]),g=Object(_["useState"])(!1),m=Object(o["a"])(g,2),M=m[0],P=m[1],y=Object(_["useRef"])(null),D=window.location.pathname.indexOf("editor")>-1,T=()=>{D&&(P(!0),setTimeout(()=>{y.current.focus(),y.current.value=t},30))},v=()=>{Object(i["b"])(h,x,()=>{E(!0)})},C=()=>{window.handleTextUpdate(y.current.value),P(!1)};return c.a.createElement("div",{style:{color:r,textIndent:a+"px",wordBreak:"break-all",fontSize:n,lineHeight:d,textAlign:l,letterSpacing:s+"px",textAlignLast:l,backgroundColor:p,padding:u,borderRadius:w},onClick:v,onDoubleClick:T},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(i["a"])(t)}}),M&&c.a.createElement("textarea",{ref:y,style:{border:"none",position:"absolute",top:0,left:0,width:"100%",height:"100%",color:"rgba(60,60,60,1)",textAlign:"center"},onBlur:C}))});t["default"]=r}}]);