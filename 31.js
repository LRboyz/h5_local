(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31,67],{"0jGJ":function(e,t,_){e.exports={btn:"btn___2Qp3s",modalWrap:"modalWrap___1p1LB",modalMask:"modalMask___2WVb0",modal:"modal___2azsy",closeBtn:"closeBtn___2RpMi",modalTit:"modalTit___cqk5s",footer:"footer___23aTG"}},jwKU:function(e,t,_){"use strict";_.r(t);var o=_("cDcd"),r=_.n(o),a=_("faye"),i=_.n(a),n=_("0jGJ"),l=_.n(n),c=e=>{var t=e.visible,_=e.title,o=e.children,a=e.onClose,n=e.height,c=e.width,s=e.okText,d=e.cancelText,p=e.onOk,u=e.btnColor,m=()=>{p&&(location.href=p)},E=()=>{a&&a()},b=r.a.createElement("div",{className:l.a.modalWrap},r.a.createElement("div",{className:l.a.modalMask}),r.a.createElement("div",{className:l.a.modal,style:{width:c+"px",height:n+"px"}},r.a.createElement("span",{className:l.a.closeBtn,onClick:a},"x"),r.a.createElement("div",{className:l.a.modalTit},_),r.a.createElement("div",{style:{maxHeight:n-120,overflow:"auto"}}," ",o," "),(!!s||!!d)&&r.a.createElement("div",{className:l.a.footer},r.a.createElement("div",{className:l.a.btn,onClick:m,style:{backgroundColor:u}},s||"\u786e\u8ba4"),r.a.createElement("div",{className:l.a.btn,onClick:E},d||"\u53d6\u6d88"))));return t?i.a.createPortal(b,document.body):null};t["default"]=Object(o["memo"])(c)},npgF:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_apple_Desktop_github_h5_dooring_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("tJVT"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("cDcd"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_luck_draw__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("HBJs"),_BasicComponents_XButton_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("jwKU"),umi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("9kvl"),Drawer=Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props=>{var border1Color=props.border1Color,border2Color=props.border2Color,border3Color=props.border3Color,sourceData=props.sourceData,fontSize=props.fontSize,color=props.color,radius=props.radius,num=props.num,_props$interaction=props.interaction,interaction=void 0===_props$interaction?{type:"",content:"",title:"",width:300,height:300,okText:"",cancelText:"",btnColor:"",onOk:""}:_props$interaction,type=interaction.type,content=interaction.content,title=interaction.title,ref=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(num),_useState2=Object(_Users_apple_Desktop_github_h5_dooring_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_useState,2),prizeNum=_useState2[0],setPrizeNum=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!1),_useState4=Object(_Users_apple_Desktop_github_h5_dooring_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_useState3,2),visible=_useState4[0],setVisible=_useState4[1],prefixStoreName="prizeNum"+window.location.search,prizeData="",config={blocks:[{padding:"15px",background:border1Color,borderRadius:28},{padding:"4px",background:border2Color,borderRadius:23},{padding:"4px",background:border3Color,borderRadius:20}],buttons:[{x:1,y:1,background:"linear-gradient(270deg, #FFDCB8, #FDC689)",shadow:"0 5 1 #e89b4f",fonts:[{text:"".concat(prizeNum,"\u6b21"),fontColor:"#fff",top:"73%",fontSize:"11px"}],imgs:[{src:"https://100px.net/assets/img/button.2f4ac3e9.png",width:"65%",top:"13%"},{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAgCAYAAAB0OKThAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDUyYzFkZi0wMzBkLTQ4M2YtODQ2ZC05ZmZiNzA4ODk4YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ3QUEzNTVERDlEMTFFQUFFMjlEOENEMjk2NkNCQjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ3QUEzNTRERDlEMTFFQUFFMjlEOENEMjk2NkNCQjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplN2M2ZDZjNi1kNTUwLTQzMjMtODViOS02N2E1NzU0ZThmMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ1MmMxZGYtMDMwZC00ODNmLTg0NmQtOWZmYjcwODg5OGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6LYfBAAAAetJREFUeNrsmrFLAmEYhz8PLMOylnAO3YKKliBcwiWsIWipvX/AJRsd06X+gJprqK2iRVqKtgjBKaVZXErLiob6vfkeqF3nmd59g+8Dz6Quz53ffXf3+r4W15RDRuEKXIJzcAqOw2E1uHzAZ/gI7+EVPIcvTn7scxA/ClNwEwaV0IlXeAQzsGj3RcPmswDchQW4JeEdE+ReBT4AgW7jR+Atn/FD0vNfULdt7hh1Gn8e3vC6LvQOdbzmrrbx6QhdwrA06yth7hr9K/4IPIGT0soVqOspd/4VPw1npZGrzHDnlvh0gU1KG09ImsuPGX8H+qWLJ/i590/8Mb6BErxjg7pT/ITcQGm5EUtQ/Li00ELc4CuwoGHnY/BOR/CeCMUPSQcthAxpoA+KX5UMWqhS/JJ00EKJ4uelgxbyFD8nHbSQo/gXqvHeUfCOOnWn+DV4LD08hV6w18ytJr0o/5QmnkCdM+ZWk6ARhz3p4gn78KE5PpGWnY/7Oxxl8SaLeIPrsCKNXKHCfetW8c3lZxmWpVVfKXPXYvvjhXbuYEyWoL4uNTHuqjrFN/8BCzAru6CedjVZ7mg5s2n3VPNdNcYFp+FB81ol2ELXzkPuluKOlvi6HBFfVa0j4hNqsKce6Ox+Uq0j4mfK4Yj4twADAFPnVt8Y9zydAAAAAElFTkSuQmCC",width:"50%",top:"73%"}]}],defaultConfig:{gutter:5},defaultStyle:{borderRadius:radius,fontColor:color,fontSize:fontSize+"px",textAlign:"center",background:"#fff",shadow:"0 5 1 #ebf1f4"},activeStyle:{background:"linear-gradient(270deg, #FFDCB8, #FDC689)",shadow:""}},handleClose=()=>{setVisible(!1)},getPrize=()=>{for(var e=sourceData.map(e=>({name:e.title,img:e.imgUrl?e.imgUrl[0].url:"",background:e.background})),t=[],_=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],o=0;o<8;o++){var r=e[o];t.push({index:o,x:_[o][0],y:_[o][1],fonts:[{text:r.name,top:"70%"}],imgs:[{src:r.img,width:"55%",top:"8%"}]})}return t};return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{window.location.href.indexOf("editor")<0&&(localStorage.getItem(prefixStoreName)&&null!==localStorage.getItem(prefixStoreName)||localStorage.setItem(prefixStoreName,num+""))},[]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",borderRadius:radius+"px",boxShadow:"0 0 6px rgba(0,0,0, .1)"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_luck_draw__WEBPACK_IMPORTED_MODULE_2__["a"],{ref:ref,width:"300px",height:"300px",blocks:config.blocks,prizes:getPrize(),buttons:config.buttons,defaultStyle:config.defaultStyle,onStart:()=>{if(!(window.location.href.indexOf("editor")>-1)){if(!+localStorage.getItem(prefixStoreName))return alert("\u8fd8\u52690\u6b21\u62bd\u5956\u673a\u4f1a");ref.current.play(),setTimeout(()=>{ref.current.stop(7*Math.random()>>0)},2e3)}},onEnd:prize=>{if(prizeData=prize.fonts[0].text,console.log("\u5956\u54c1\u6570\u636e:"+prizeData),"link"===type){if(content.indexOf("http")>-1)return void(window.location.href=content);umi__WEBPACK_IMPORTED_MODULE_4__["a"].replace("?tid=".concat(content))}else"modal"===type?setVisible(!0):"code"===type&&eval(content);setPrizeNum(e=>(localStorage.setItem(prefixStoreName,e-1+""),e-1))}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasicComponents_XButton_Modal__WEBPACK_IMPORTED_MODULE_3__["default"],{visible:visible,onClose:handleClose,title:interaction&&interaction.title,width:interaction.width,height:interaction.height,okText:interaction.okText,cancelText:interaction.cancelText,onOk:interaction.onOk,btnColor:interaction.btnColor},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:content}})))});__webpack_exports__["default"]=Drawer}}]);