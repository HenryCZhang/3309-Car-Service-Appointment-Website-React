(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(26),s=n.n(a),o=n(11),i=n(12),l=n(14),r=n(13),j=(n(17),n(5)),b=n(3),d=(n(31),n(0)),O=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("body",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{class:"row justify-content-md-center mt-3 mb-3",children:Object(d.jsxs)("div",{class:"col_back",children:[Object(d.jsxs)("h1",{children:["Welcome to ",Object(d.jsx)("small",{class:"text-muted",children:"AutoGo"})]}),Object(d.jsxs)("div",{class:"page-header",children:[Object(d.jsx)("p",{class:"lead"}),Object(d.jsx)("p",{class:"lead0",children:"Find we provide the best automobile service!"})]}),Object(d.jsx)("div",{style:{padding:10},children:Object(d.jsx)(j.b,{to:"/login",className:"btn btn-primary",style:{padding:10},children:"Let's Get Started !"})})]})})})})}}]),n}(c.Component),u=n(2),p=n(4),h=n.n(p);function x(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object(c.useState)("Wrong username or password"),j=Object(u.a)(r,2),O=j[0],p=(j[1],Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost"),x=Object(b.f)();return Object(d.jsxs)("div",{class:"row align-items-center",children:[Object(d.jsx)("div",{class:"col",children:Object(d.jsx)("div",{class:"staffLogin",children:Object(d.jsxs)("form",{class:"form-horizontal",children:[Object(d.jsxs)("div",{class:"form-floating mb-3",children:[Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},name:"inputUserName",type:"text",class:"form-control",id:"inputUserNameStaff",placeholder:"User name",required:!0}),Object(d.jsx)("label",{for:"inputUserName",class:"form-label",children:"User Name"})]}),Object(d.jsxs)("div",{class:"form-floating mb-3",children:[Object(d.jsx)("input",{onChange:function(e){l(e.target.value)},name:"inputPassword",type:"password",class:"form-control",id:"inputPasswordStaff",placeholder:"Password",required:!0}),Object(d.jsx)("label",{for:"inputPassword",class:"form-label",children:"Password"})]}),Object(d.jsx)("div",{class:"position-relative",children:Object(d.jsx)("div",{class:"position-absolute top-0 end-0",children:Object(d.jsx)("button",{onClick:function(){""!==n&&""!==i&&h.a.post("http://".concat(p,":8081/api/staff_login"),{loginType:"staff",usr:n,pwd:i}).then((function(e){""!==n&&""!==e.data?(localStorage.setItem("currentUser",n),localStorage.setItem("password",i),"manager"==e.data[0].position?x("/staff-manager-home"):x("/staff-home"),window.location.reload()):alert(O)}))},id:"staff-login-btn",class:"btn btn-dark",type:"button",children:"Log In As Staff"})})})]})})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsx)("div",{class:"guestLogin",children:Object(d.jsxs)("form",{class:"form-horizontal",children:[Object(d.jsxs)("div",{class:"form-floating mb-3",children:[Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},name:"inputUserName",type:"text",class:"form-control",id:"inputUserNameGuest",placeholder:"User name",required:!0}),Object(d.jsx)("label",{for:"inputUserName",class:"form-label",children:"User Name"})]}),Object(d.jsxs)("div",{class:"form-floating mb-3",children:[Object(d.jsx)("input",{onChange:function(e){l(e.target.value)},name:"inputPassword",type:"password",class:"form-control",id:"inputPasswordGuest",placeholder:"Password",required:!0}),Object(d.jsx)("label",{for:"inputPassword",class:"form-label",children:"Password"})]}),Object(d.jsx)("div",{class:"position-relative",children:Object(d.jsx)("div",{class:"position-absolute top-0 end-0",children:Object(d.jsx)("button",{onClick:function(){""!==n&&""!==i&&h.a.post("http://".concat(p,":8081/api/guest_login"),{loginType:"guest",usr:n,pwd:i}).then((function(e){""!==n&&""!==e.data?(console.log(e.data),localStorage.setItem("currentUser",n),localStorage.setItem("password",i),localStorage.setItem("clientNo",e.data[0].clientNo),console.log("guest login nav called"),x("/guest-home"),window.location.reload()):alert(O)}))},id:"guest-login-btn",class:"btn btn-dark",type:"button",children:"Log In As Guest"})})})]})})})]})}function v(){var e={backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},t={margin:"20px",color:"plum"};return Object(d.jsxs)("div",{children:["Guest Home page",Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/guest-view-appointment",style:e,children:"View My Appointments"})}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/add-appointment",style:e,children:"Book A Appointment"})}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/guest-find-item",style:e,children:"Search Accessory"})})]})}function m(){var e={backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px",fontSize:"bold"},t={margin:"20px"};return Object(d.jsxs)("div",{children:["Staff Home page",Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/staff-view-appointment",style:e,children:"View My Appointments"})})]})}function f(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object(c.useState)(""),j=Object(u.a)(r,2),O=j[0],p=j[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),m=v[0],f=v[1],g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",S=Object(b.f)();return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"username",class:"form-label",children:"Username"}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},class:"form-control",id:"username",required:!0})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"password",class:"form-label",children:"Password"}),Object(d.jsx)("input",{onChange:function(e){l(e.target.value)},type:"password",class:"form-control",id:"password",required:!0})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"position",class:"form-label",children:"Position (optional)"}),Object(d.jsx)("input",{onChange:function(e){p(e.target.value)},class:"form-control",id:"position",placeholder:"E.g. manager"})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"branchNo",class:"form-label",children:"Branch Number"}),Object(d.jsx)("input",{onChange:function(e){f(e.target.value)},class:"form-control",id:"branchNo",required:!0})]}),Object(d.jsx)("button",{onClick:function(){""!==n&&""!==i&&""!==m&&(console.log("staff-signup usr "+n),console.log("staff-signup pws "+i),h.a.post("http://".concat(g,":8081/api/staff_signup"),{signupType:"staff",username:n,password:i,position:O,branchNo:m}).then((function(e){console.log("Inside"),console.log(e),localStorage.setItem("currentUser",n),S("/login"),window.location.reload()})))},type:"button",class:"btn btn-primary",children:"Signup As Staff"})]})}function g(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object(c.useState)(""),j=Object(u.a)(r,2),O=j[0],p=j[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),m=v[0],f=v[1],g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",S=Object(b.f)();return Object(d.jsxs)("form",{className:"signup_form",children:[Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"username",class:"form-label",children:"Username"}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},class:"form-control",id:"username",required:!0})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"password",class:"form-label",children:"Password"}),Object(d.jsx)("input",{onChange:function(e){l(e.target.value)},type:"password",class:"form-control",id:"password",required:!0})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"address",class:"form-label",children:"Address (optional)"}),Object(d.jsx)("input",{onChange:function(e){p(e.target.value)},class:"form-control",id:"address"})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"phone",class:"form-label",children:"Phone"}),Object(d.jsx)("input",{onChange:function(e){f(e.target.value)},class:"form-control",id:"phone",required:!0})]}),Object(d.jsx)("button",{onClick:function(){""!==n&&""!==i&&""!==m&&(console.log("guest-signup usr "+n),console.log("guest-signup pws "+i),h.a.post("http://".concat(g,":8081/api/guest_signup"),{signupType:"guest",username:n,password:i,address:O,phone:m}).then((function(e){console.log(e),localStorage.setItem("currentUser",n),S("/login"),window.location.reload()})))},type:"button",class:"btn btn-primary",children:"Signup As Guest"})]})}function S(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),l=i[0],r=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Find Accessory Locations"}),Object(d.jsx)("div",{style:{margin:"20px"},children:Object(d.jsx)("a",{href:"/guest-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Guest Home Page"})}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"item",children:"Enter item name: "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},id:"item",placeholder:"Type in item name"}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/guest_find_item"),{itemNo:a}).then((function(e){console.log(e.data),r(e.data)}))},type:"button",class:"btn btn-primary",children:"Show Item Locations"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"Item",readOnly:!0}),Object(d.jsx)("input",{value:"Price",readOnly:!0}),Object(d.jsx)("input",{value:"location",readOnly:!0}),Object(d.jsx)("input",{value:"inventory",readOnly:!0}),Object(d.jsx)("br",{}),l.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.item,readOnly:!0}),Object(d.jsx)("input",{value:e.price,readOnly:!0}),Object(d.jsx)("input",{value:e.location,readOnly:!0}),Object(d.jsx)("input",{value:e.inventory,readOnly:!0})]})}))]})}function y(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object(c.useState)([]),j=Object(u.a)(r,2),b=j[0],O=j[1],p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",x=function(){console.log(localStorage.currentUser),console.log(localStorage.password),h.a.post("http://".concat(p,":8081/api/guest_view_appointment"),{userName:localStorage.currentUser,password:localStorage.password}).then((function(e){console.log(e.data),l(e.data)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Guest View Appointment Page"}),Object(d.jsxs)("div",{style:{margin:"20px"},children:[Object(d.jsx)("a",{href:"/guest-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Guest Home Page"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:x,type:"button",class:"btn btn-primary",children:"Show Appointments"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"AppointmentNo",readOnly:!0}),Object(d.jsx)("input",{value:"Service Type",readOnly:!0}),Object(d.jsx)("input",{value:"Service Description",readOnly:!0}),Object(d.jsx)("input",{value:"Date",readOnly:!0}),Object(d.jsx)("input",{value:"Location",readOnly:!0}),Object(d.jsx)("br",{}),i.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.appointmentNo,readOnly:!0}),Object(d.jsx)("input",{value:e.serviceType,readOnly:!0}),Object(d.jsx)("input",{value:e.serviceDescription,readOnly:!0}),Object(d.jsx)("input",{value:e.date,readOnly:!0}),Object(d.jsx)("input",{value:e.location,readOnly:!0})]})})),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},name:"appointmentNoInput",placeholder:"Type in appointmentNo"}),Object(d.jsx)("button",{onClick:function(){h.a.post("http://".concat(p,":8081/api/guest_delete_appointment"),{appointmentNo:n}).then((function(e){console.log(e.data),x()}))},type:"button",class:"btn btn-primary",children:"Delete Appointment"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},name:"appointmentNoInput",placeholder:"Type in appointmentNo"}),Object(d.jsx)("button",{onClick:function(){h.a.post("http://".concat(p,":8081/api/guest_view_receipt"),{appointmentNo:n}).then((function(e){console.log(e.data),O(e.data)}))},type:"button",class:"btn btn-primary",children:"View Receipt"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"AppointmentNo",readOnly:!0}),Object(d.jsx)("input",{value:"Client",readOnly:!0}),Object(d.jsx)("input",{value:"Date",readOnly:!0}),Object(d.jsx)("input",{value:"Location",readOnly:!0}),Object(d.jsx)("input",{value:"Price",readOnly:!0}),Object(d.jsx)("br",{}),b.map((function(e){return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.appointmentNo,readOnly:!0}),Object(d.jsx)("input",{value:e.clientName,readOnly:!0}),Object(d.jsx)("input",{value:e.date,readOnly:!0}),Object(d.jsx)("input",{value:e.location,readOnly:!0}),Object(d.jsx)("input",{value:e.totalPayment,readOnly:!0})]})}))]})}function _(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(c.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),l=i[0],r=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Show Branch Appointment Of Each Car"}),Object(d.jsx)("div",{style:{margin:"20px"},children:Object(d.jsx)("a",{href:"/staff-manager-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Manager Home"})}),Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},id:"branchNo",placeholder:"Branch No"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/staff_show_branchAppointment"),{branchNo:a}).then((function(e){console.log(e.data),r(e.data)}))},style:{marign:"10px"},type:"button",class:"btn btn-primary",children:"Show Car List"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"License Plate",readOnly:!0}),Object(d.jsx)("input",{value:"Color",readOnly:!0}),Object(d.jsx)("input",{value:"Model",readOnly:!0}),Object(d.jsx)("input",{value:"Make",readOnly:!0}),Object(d.jsx)("input",{value:"Branch Number",readOnly:!0}),l.map((function(e){return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.licensePlate,readOnly:!0}),Object(d.jsx)("input",{value:e.color,readOnly:!0}),Object(d.jsx)("input",{value:e.model,readOnly:!0}),Object(d.jsx)("input",{value:e.make,readOnly:!0}),Object(d.jsx)("input",{value:e.branchNo,readOnly:!0})]})}))]})}function w(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(c.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),l=i[0],r=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Your Personal Information"}),Object(d.jsx)("div",{style:{margin:"20px"},children:Object(d.jsx)("a",{href:"/staff-manager-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Manager Home"})}),Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},id:"clientNo",placeholder:"Client Number"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/staff_show_clientProfile"),{clientNo:a}).then((function(e){console.log(e.data),r(e.data)}))},style:{marign:"10px"},type:"button",class:"btn btn-primary",children:"View Client Profile"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"Client Number",readOnly:!0}),Object(d.jsx)("input",{value:"Name",readOnly:!0}),Object(d.jsx)("input",{value:"Address",readOnly:!0}),Object(d.jsx)("input",{value:"Phone Number",readOnly:!0}),l.map((function(e){return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.clientNo,readOnly:!0}),Object(d.jsx)("input",{value:e.name,readOnly:!0}),Object(d.jsx)("input",{value:e.address,readOnly:!0}),Object(d.jsx)("input",{value:e.phone,readOnly:!0})]})}))]})}function C(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Staff View Appointment Page"}),Object(d.jsxs)("div",{style:{margin:"20px"},children:[Object(d.jsx)("a",{href:"/staff-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Staff Home Page"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/staff_view_appointment"),{userName:localStorage.currentUser,password:localStorage.password}).then((function(e){s(e.data)}))},type:"button",class:"btn btn-primary",children:"Show Appointments"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"AppointmentNo",readOnly:!0}),Object(d.jsx)("input",{value:"Service Type",readOnly:!0}),Object(d.jsx)("input",{value:"Service Description",readOnly:!0}),Object(d.jsx)("input",{value:"Date",readOnly:!0}),Object(d.jsx)("input",{value:"License Plate",readOnly:!0}),Object(d.jsx)("br",{}),a.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.appointmentNo,readOnly:!0}),Object(d.jsx)("input",{value:e.serviceType,readOnly:!0}),Object(d.jsx)("input",{value:e.serviceDescription,readOnly:!0}),Object(d.jsx)("input",{value:e.date,readOnly:!0}),Object(d.jsx)("input",{value:e.licensePlate,readOnly:!0})]})}))]})}function N(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),l=i[0],r=i[1],j=Object(c.useState)([]),b=Object(u.a)(j,2),O=b[0],p=b[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Staff View Branch Monthly Revenue Page"}),Object(d.jsxs)("div",{style:{margin:"20px"},children:[Object(d.jsx)("a",{href:"/staff-manager-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Manager Home Page"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},id:"dateFrom",placeholder:"Date From"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){r(e.target.value)},id:"dateTo",placeholder:"Date To"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/staff_view_branchRevenue"),{dateFrom:a,dateTo:l}).then((function(e){console.log(e.data),p(e.data)}))},type:"button",class:"btn btn-primary",children:"Show Branch Revenue"}),Object(d.jsx)("div",{children:"Follow this format: 2021-08-20 10:00:00"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"Branch Number",readOnly:!0}),Object(d.jsx)("input",{value:"Location",readOnly:!0}),Object(d.jsx)("input",{value:"Monthly Revenue",readOnly:!0}),Object(d.jsx)("br",{}),O.map((function(e){return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.branchNo,readOnly:!0}),Object(d.jsx)("input",{value:e.location,readOnly:!0}),Object(d.jsx)("input",{value:e.totalPayment,readOnly:!0})]})}))]})}var T=n(8);function P(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("1"),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object(c.useState)(""),j=Object(u.a)(r,2),b=j[0],O=j[1],p=Object(c.useState)("car wash"),x=Object(u.a)(p,2),v=x[0],m=x[1],f=Object(c.useState)("none"),g=Object(u.a)(f,2),S=g[0],y=g[1],_=Object(c.useState)("none"),w=Object(u.a)(_,2),C=w[0],N=w[1],P=Object(c.useState)("none"),E=Object(u.a)(P,2),D=E[0],A=E[1],R=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost";return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Add Appointment page"}),Object(d.jsxs)("div",{style:{margin:"20px"},children:[Object(d.jsx)("a",{href:"/guest-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Guest Home Page"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"date",class:"form-label",children:"Date"}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},class:"form-control",id:"date",required:!0})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"service",class:"form-label",children:"Service 1"}),Object(d.jsxs)("select",{name:"service",id:"service",onChange:function(e){m(e.target.value)},children:[Object(d.jsx)("option",{value:"car wash",children:"car wash"}),Object(d.jsx)("option",{value:"inspection",children:"inspection"}),Object(d.jsx)("option",{value:"maintenance",children:"maintenance"}),Object(d.jsx)("option",{value:"tire change",children:"tire change"})]})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"service",class:"form-label",children:"Service 2"}),Object(d.jsxs)("select",{name:"service",id:"service",onChange:function(e){y(e.target.value)},children:[Object(d.jsx)("option",{value:"none",children:"none"}),Object(d.jsx)("option",{value:"car wash",children:"car wash"}),Object(d.jsx)("option",{value:"inspection",children:"inspection"}),Object(d.jsx)("option",{value:"maintenance",children:"maintenance"}),Object(d.jsx)("option",{value:"tire change",children:"tire change"})]})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"service",class:"form-label",children:"Service 3"}),Object(d.jsxs)("select",{name:"service",id:"service",onChange:function(e){N(e.target.value)},children:[Object(d.jsx)("option",{value:"none",children:"none"}),Object(d.jsx)("option",{value:"car wash",children:"car wash"}),Object(d.jsx)("option",{value:"inspection",children:"inspection"}),Object(d.jsx)("option",{value:"maintenance",children:"maintenance"}),Object(d.jsx)("option",{value:"tire change",children:"tire change"})]})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"service",class:"form-label",children:"Service 4"}),Object(d.jsxs)("select",{name:"service",id:"service",onChange:function(e){A(e.target.value)},children:[Object(d.jsx)("option",{value:"none",children:"none"}),Object(d.jsx)("option",{value:"car wash",children:"car wash"}),Object(d.jsx)("option",{value:"inspection",children:"inspection"}),Object(d.jsx)("option",{value:"maintenance",children:"maintenance"})]})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"location",class:"form-label",children:"Location"}),Object(d.jsxs)("select",{name:"location",id:"location",onChange:function(e){l(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"wonderland road 101"}),Object(d.jsx)("option",{value:"2",children:"western road 100"}),Object(d.jsx)("option",{value:"3",children:"northwest street 201"}),Object(d.jsx)("option",{value:"4",children:"saniar201"})]})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"licensePlate",class:"form-label",children:"License Plate"}),Object(d.jsx)("input",{onChange:function(e){O(e.target.value)},class:"form-control",id:"licensePlate",required:!0})]}),Object(d.jsx)("button",{onClick:function(){var e;(console.log(localStorage.clientNo),""!==n&&""!==i&&""!==b)&&h.a.post("http://".concat(R,":8081/api/add_appointment"),(e={date:n,branchNo:i,clientNo:localStorage.getItem("clientNo")},Object(T.a)(e,"branchNo",i),Object(T.a)(e,"licensePlate",b),Object(T.a)(e,"service1",v),Object(T.a)(e,"service2",S),Object(T.a)(e,"service3",C),Object(T.a)(e,"service4",D),e)).then((function(e){console.log(e),window.location.reload()}))},type:"button",class:"btn btn-primary",children:"Submit"})]})]})}function E(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),i=o[0],l=o[1],r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost";return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Check which staff is working on each branch"}),Object(d.jsxs)("div",{style:{margin:"20px"},children:[Object(d.jsx)("a",{href:"/staff-manager-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Home Page"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{class:"select branch",children:Object(d.jsxs)("select",{name:"branch",id:"branch",onChange:function(e){a(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"branch 1"}),Object(d.jsx)("option",{value:"2",children:"branch 2"}),Object(d.jsx)("option",{value:"3",children:"branch 3"}),Object(d.jsx)("option",{value:"4",children:"branch 4 "})]})}),Object(d.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(r,":8081/api/staff_location"),{branchNo:n}).then((function(e){console.log("back"),console.log(e),l(e.data)}))},type:"button",class:"btn btn-primary",children:"View"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{value:"Name",readOnly:!0}),Object(d.jsx)("input",{value:"Position",readOnly:!0}),Object(d.jsx)("input",{value:"Location",readOnly:!0}),Object(d.jsx)("br",{}),i.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:e.name,readOnly:!0}),Object(d.jsx)("input",{value:e.position,readOnly:!0}),Object(d.jsx)("input",{value:e.location,readOnly:!0})]})}))]})}function D(){var e={backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px",fontSize:"bold"},t={margin:"20px"};return Object(d.jsxs)("div",{children:["Manager Home page",Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/staff-view-branchRevenue",style:e,children:"View Branch Reveneue"})}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/staff-show-branchAppointment",style:e,children:"Show Branch Appointments"})}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/staff-show-clientProfile",style:e,children:"Client Information"})}),Object(d.jsx)("div",{style:t,children:Object(d.jsx)("a",{href:"/staff-location",style:e,children:"staffs at each location"})})]})}var A=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{to:"/",className:"navbar-brand",children:"AutoGo"}),Object(d.jsxs)("div",{className:"navbar-nav ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/staff-signup",className:"nav-link",children:"Staff Signup"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/guest-signup",className:"nav-link",children:"Guest Signup"})})]})]})}),Object(d.jsx)("div",{className:"container mt-3",children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/",element:Object(d.jsx)(O,{})}),Object(d.jsx)(b.a,{path:"/login",element:Object(d.jsx)(x,{})}),Object(d.jsx)(b.a,{path:"/staff-signup",element:Object(d.jsx)(f,{})}),Object(d.jsx)(b.a,{path:"/guest-signup",element:Object(d.jsx)(g,{})}),Object(d.jsx)(b.a,{path:"/guest-home",element:Object(d.jsx)(v,{})}),Object(d.jsx)(b.a,{path:"/staff-home",element:Object(d.jsx)(m,{})}),Object(d.jsx)(b.a,{path:"/staff-manager-home",element:Object(d.jsx)(D,{})}),Object(d.jsx)(b.a,{path:"/guest-view-appointment",element:Object(d.jsx)(y,{})}),Object(d.jsx)(b.a,{path:"/guest-find-item",element:Object(d.jsx)(S,{})}),Object(d.jsx)(b.a,{path:"/staff-show-clientProfile",element:Object(d.jsx)(w,{})}),Object(d.jsx)(b.a,{path:"/staff-view-appointment",element:Object(d.jsx)(C,{})}),Object(d.jsx)(b.a,{path:"/staff-view-BRevenue",element:Object(d.jsx)(N,{})}),Object(d.jsx)(b.a,{path:"/add-appointment",element:Object(d.jsx)(P,{})}),Object(d.jsx)(b.a,{path:"/staff-location",element:Object(d.jsx)(E,{})}),Object(d.jsx)(b.a,{path:"/staff-view-branchRevenue",element:Object(d.jsx)(N,{})}),Object(d.jsx)(b.a,{path:"/staff-show-branchAppointment",element:Object(d.jsx)(_,{})}),Object(d.jsx)(b.a,{path:"/add-appointment",element:Object(d.jsx)(P,{})})]})}),Object(d.jsx)("footer",{className:"py-3 my-4"})]})}}]),n}(c.Component),R=A;s.a.render(Object(d.jsx)(j.a,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.588f42e9.chunk.js.map