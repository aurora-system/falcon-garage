(function(t){function e(e){for(var r,c,i=e[0],n=e[1],l=e[2],u=0,v=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&v.push(o[c][0]),o[c]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var n=a[i];0!==o[n]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},o={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=n;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02b5":function(t,e,a){"use strict";var r=a("d23a"),o=a.n(r);o.a},"086d":function(t,e,a){"use strict";var r=a("def8"),o=a.n(r);o.a},1544:function(t,e,a){},"413e":function(t,e,a){"use strict";var r=a("961d"),o=a.n(r);o.a},"42a2":function(t,e,a){},"49c8":function(t,e,a){"use strict";var r=a("aa1b"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"main-app"},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{on:{click:function(e){return t.routePage("home")}}},[a("v-list-item-action",[a("v-icon",[t._v("home")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Home")])],1)],1),a("v-list-item",{on:{click:function(e){return t.routePage("about")}}},[a("v-list-item-action",[a("v-icon",[t._v("contact_mail")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("About")])],1)],1),a("v-list-item",{on:{click:function(e){return t.routePage("orders")}}},[a("v-list-item-action",[a("v-icon",[t._v("shopping_cart")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Orders")])],1)],1),a("v-list-item",{on:{click:function(e){return t.routePage("products")}}},[a("v-list-item-action",[a("v-icon",[t._v("wallet_giftcard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Products")])],1)],1),a("v-list-item",{on:{click:function(e){return t.routePage("reports")}}},[a("v-list-item-action",[a("v-icon",[t._v("equalizer")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Reports")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Falcon")]),a("span",{staticClass:"font-weight-light"},[t._v("GARAGE")])]),a("v-spacer"),a("span",{staticClass:"mr-2"},[t._v("v1.0")])],1),a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("router-view")],1)],1)],1)],1),a("v-footer",{attrs:{app:"",color:"indigo",dark:""}},[a("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},s=[],c=a("8c4f"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",[t._v("This is the home page.")])])}],l={},d=l,u=(a("eac9"),a("2877")),v=Object(u["a"])(d,i,n,!1,null,null,null),p=v.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("p",[t._v("This is the about page.")])])}],f={},b=f,g=(a("b3c6"),Object(u["a"])(b,m,h,!1,null,null,null)),y=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orders"},[a("div",{staticClass:"orderForm"},[a("h3",[t._v("Enter Order Details")]),a("orderForm")],1),a("div",{staticClass:"orderList"},[a("ordersList")],1)])},C=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("v-app",{attrs:{id:"orderList"}},[a("v-card",[a("v-card-title",[a("h4",[t._v("List of Orders")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,"item-key":"name","no-data-text":"There are no orders.","sort-by":"createdDate","sort-desc":"",search:t.search}})],1)],1)],1)},_=[],V=a("bc3a"),P=a.n(V);const w="/api/orders/";class I{static getOrders(){return new Promise(async(t,e)=>{try{const r=await P.a.get(w),o=r.data;t(o.map(t=>({...t,createdDate:t.createdDate.substring(0,16)})))}catch(a){e(a)}})}static insertOrder(t){return P.a.post(w,{order:t})}formatCompat(t){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return t.getDate()+" "+e[t.getMonth()]+" "+t.getFullYear()}}var T=I,O={data(){return{singleSelect:!1,headers:[{text:"Ref. No.",value:"referenceNum"},{text:"Type",value:"type"},{text:"Customer Name",value:"customerName"},{text:"Total Amount",value:"totalAmount"},{text:"Created Date",value:"createdDate"},{text:"Remarks",value:"remarks"}],orders:[],search:""}},async created(){try{this.orders=await T.getOrders()}catch(t){this.error=t.message}}},A=O,$=(a("66ee"),a("6544")),S=a.n($),N=a("7496"),D=a("b0af"),j=a("99d9"),q=a("8fea"),L=a("2fa4"),R=a("8654"),E=Object(u["a"])(A,k,_,!1,null,null,null),B=E.exports;S()(E,{VApp:N["a"],VCard:D["a"],VCardTitle:j["c"],VDataTable:q["a"],VSpacer:L["a"],VTextField:R["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("v-form",{ref:"form",attrs:{"lazy-validation":!1}},[a("v-container",[a("v-row",[a("v-col",{staticClass:"d-flex"},[a("v-container",[a("h4",[t._v("Order Details")]),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"customerName"},[a("v-text-field",{attrs:{rules:t.custNameRules,id:"customerName",label:"Customer Name",required:"",outlined:""},model:{value:t.order.customerName,callback:function(e){t.$set(t.order,"customerName",e)},expression:"order.customerName"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"orderType"},[a("v-select",{attrs:{rules:t.orderTypeRules,items:t.orderTypes,label:"Order Type",required:"",outlined:""},model:{value:t.order.type,callback:function(e){t.$set(t.order,"type",e)},expression:"order.type"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"remarks"},[a("v-textarea",{attrs:{outlined:"",name:"remarks",label:"Remarks",value:"",height:"100"},model:{value:t.order.remarks,callback:function(e){t.$set(t.order,"remarks",e)},expression:"order.remarks"}})],1)],1)],1)],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"9"}},[a("v-container",[a("h4",[t._v("Product Selection")]),t._l(t.inputs,function(e,r){return a("v-row",{key:r,attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{items:t.productCategories,name:"productCategory","item-text":"name","item-value":"categoryId",label:"Category",outlined:""},on:{change:function(a){return t.getProductsOfCategory(e.category,r)}},model:{value:e.category,callback:function(a){t.$set(e,"category",a)},expression:"input.category"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{items:e.products,name:"product","item-text":"name","item-value":"_id",label:"Product",outlined:""},on:{change:function(a){return t.getSubtotalAmount(e.quantity,e.selectedProductId,r)}},model:{value:e.selectedProductId,callback:function(a){t.$set(e,"selectedProductId",a)},expression:"input.selectedProductId"}})],1),a("v-col",{attrs:{cols:"12",md:"1"}},[a("v-text-field",{attrs:{id:"quantity",rules:t.quantityRules,label:"Qty",type:"number",min:"0",required:"",outlined:""},on:{change:function(a){return t.getSubtotalAmount(e.quantity,e.selectedProductId,r)}},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"input.quantity"}})],1),a("v-col",{staticClass:"subtotalCost",attrs:{cols:"12",md:"2"}},[a("v-alert",{attrs:{id:"subtotal",text:"",color:"green",icon:"mdi-currency-php"}},[t._v(t._s(e.subtotal))])],1),a("v-col",{staticClass:"deleteBtn",attrs:{cols:"12",md:"1"}},[a("v-icon",{attrs:{large:""},on:{click:function(e){return t.deleteRow(r)}}},[t._v("mdi-trash-can-outline")])],1)],1)}),a("v-row",[a("v-col",{attrs:{cols:"12",md:"2"}},[a("div",{staticClass:"addBtn"},[a("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.addRow}},[t._v("Add Item")])],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"3"}},[a("h4",[t._v("Total Amount: ")])]),a("v-col",{attrs:{cols:"12",md:"9"}},[a("v-alert",{staticClass:"totalAmount",attrs:{text:"",color:"green",icon:"mdi-currency-php"}},[t._v(t._s(t.totalAmount))])],1)],1)],2)],1)],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n                        "+t._s(t.text)+"\n                        "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n                            Close\n                        ")])],1),a("div",{staticClass:"submitBtn"},[a("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.createOrder}},[t._v("Submit")])],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Success!")]),a("v-card-text",[t._v("\n                            The order has been saved.\n                            ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.reloadPage()}}},[t._v("\n                                Close\n                            ")])],1)],1)],1)],1)],1)],1)],1)],1)},M=[];const J="/api/products/";class G{static getProducts(){return new Promise(async(t,e)=>{try{const r=await P.a.get(J),o=r.data;t(o.map(t=>({...t})))}catch(a){e(a)}})}static getProductsOfCategory(t){return new Promise(async(e,a)=>{try{const o=await P.a.get(`${J}`+"category="+t),s=o.data;e(s.map(t=>({...t})))}catch(r){a(r)}})}static getProductById(t){return new Promise(async(e,a)=>{try{const o=await P.a.get(`${J}`+"id="+t),s=o.data;e(s)}catch(r){a(r)}})}static insertProduct(t){return P.a.post(J,t)}}var Y=G;const z="/api/productcategories/";class H{static getProductCategories(){return new Promise(async(t,e)=>{try{const r=await P.a.get(z),o=r.data;t(o.map(t=>({...t})))}catch(a){e(a)}})}static insertProductCategory(t){return P.a.post(z,t)}}var Q=H,K={data(){return{totalAmount:0,inputs:[{products:[],category:"",quantity:"",subtotal:0,selectedProductId:""}],order:{orderId:"1",type:"",customerName:"",createdDate:"",totalAmount:0,remarks:"",products:[]},orderTypes:["sale","service"],products:[],productCategories:[],color:"success",mode:"multi-line",snackbar:!1,text:"You have successfully saved an order.",timeout:5e3,x:null,y:"top",dialog:!1,custNameRules:[t=>!!t||""],orderTypeRules:[t=>!!t||""],quantityRules:[t=>!!t||""]}},computed:{},methods:{showAlert(){},addRow(){this.inputs.push({products:[],category:"",quantity:"",subtotal:0,selectedProductId:""})},deleteRow(t){var e=this.inputs[t];null!=e.subtotal&&(this.totalAmount=this.totalAmount-e.subtotal),this.inputs.splice(t,1)},reloadPage(){this.snackbar=!1,this.dialog=!1,document.location.reload(!0)},async getSubtotalAmount(t,e,a){var r=this.inputs[a];r.selectedProduct=e;var o=await Y.getProductById(e);r.quantity=t,r.subtotal=t*o.srp,this.totalAmount=0;for(var s=0;s<this.inputs.length;s++)null!=this.inputs[s].subtotal&&(this.totalAmount=this.totalAmount+this.inputs[s].subtotal,this.order.totalAmount=this.totalAmount)},async getProductsOfCategory(t,e){var a=this.inputs[e];a.products=await Y.getProductsOfCategory(t)},async createOrder(){console.log("In create order method."),this.$refs.form.validate();try{for(var t=this.order,e=0;e<this.inputs.length;e++){if(console.log("Name of the selected product: "+this.inputs[e].selectedProductId),""==this.inputs[e].selectedProductId)return this.snackbar=!0,this.color="error",void(this.text="You did not select a product.");var a=await Y.getProductById(this.inputs[e].selectedProductId);t.products.push(a)}this.orders=await T.insertOrder(this.order),this.dialog=!0}catch(r){this.snackbar=!0,this.color="error",this.error=r.message,console.log(this.error)}}},async created(){try{this.productCategories=await Q.getProductCategories()}catch(t){this.error=t.message}}},U=K,W=(a("801a"),a("0798")),X=a("8336"),Z=a("62ad"),tt=a("a523"),et=a("169a"),at=a("ce7e"),rt=a("4bd4"),ot=a("132d"),st=a("0fd9"),ct=a("b974"),it=a("2db4"),nt=a("a844"),lt=Object(u["a"])(U,F,M,!1,null,null,null),dt=lt.exports;S()(lt,{VAlert:W["a"],VBtn:X["a"],VCard:D["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:Z["a"],VContainer:tt["a"],VDialog:et["a"],VDivider:at["a"],VForm:rt["a"],VIcon:ot["a"],VRow:st["a"],VSelect:ct["a"],VSnackbar:it["a"],VSpacer:L["a"],VTextField:R["a"],VTextarea:nt["a"]});var ut={components:{OrdersList:B,OrderForm:dt}},vt=ut,pt=(a("413e"),Object(u["a"])(vt,x,C,!1,null,null,null)),mt=pt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("product-list")],1)},ft=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("v-card",[a("v-card-title",[a("h4",[t._v("List of Items")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,"single-select":!1,search:t.search,"item-key":"productId",loading:"products.length == 0","loading-text":"Loading Data"}})],1),a("v-card-actions",{staticClass:"d-flex ml-4"},[a("router-link",{attrs:{to:"/categories"}},[a("v-btn",{staticClass:"success mb-4"},[t._v("Add Category")])],1),a("router-link",{attrs:{to:"/addProduct"}},[a("v-btn",{staticClass:"info mb-4"},[t._v("Add Product")])],1)],1)],1)],1)},gt=[],yt={data(){return{search:"",products:[],headers:[{text:"Item Code",value:"productId"},{text:"Name",value:"name"},{text:"Brand",value:"brand"},{text:"Details",value:"otherDetails"},{text:"Vehicle",value:"forVehicle"},{text:"Color",value:"color"},{text:"Aqui Price",value:"aquiPrice"},{text:"SRP",value:"srp"},{text:"Stock Level",value:"stockLevel"},{text:"Category Id",value:"categoryId"},{text:"Supplier Name",value:"supplierName"}]}},async created(){try{this.products=await Y.getProducts()}catch(t){this.error=t.message}}},xt=yt,Ct=(a("086d"),Object(u["a"])(xt,bt,gt,!1,null,null,null)),kt=Ct.exports;S()(Ct,{VBtn:X["a"],VCard:D["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VDataTable:q["a"],VSpacer:L["a"],VTextField:R["a"]});var _t={components:{ProductList:kt}},Vt=_t,Pt=(a("d471"),Object(u["a"])(Vt,ht,ft,!1,null,null,null)),wt=Pt.exports;S()(Pt,{VContainer:tt["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("v-card",[a("v-card-title",[a("v-col",{staticClass:"d-flex"},[a("h4",[t._v("Add Product")])])],1),a("v-divider"),a("v-card-text",[a("v-form",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"product-name md-6"},[a("v-text-field",{attrs:{id:"productId",label:"Product Code",outlined:""},model:{value:t.product.productId,callback:function(e){t.$set(t.product,"productId",e)},expression:"product.productId"}})],1),a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"categoryId",label:"Product Category",outlined:""},model:{value:t.product.categoryId,callback:function(e){t.$set(t.product,"categoryId",e)},expression:"product.categoryId"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"product-name md-6"},[a("v-text-field",{attrs:{id:"name",label:"Product Name",required:"",outlined:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"brand",label:"Brand",outlined:""},model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand",e)},expression:"product.brand"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"md-12"},[a("v-text-field",{attrs:{id:"otherDetails",label:"Other Details",outlined:""},model:{value:t.product.otherDetails,callback:function(e){t.$set(t.product,"otherDetails",e)},expression:"product.otherDetails"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"forVehicle",label:"Vehicle",outlined:""},model:{value:t.product.forVehicle,callback:function(e){t.$set(t.product,"forVehicle",e)},expression:"product.forVehicle"}})],1),a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"color",label:"Color",outlined:""},model:{value:t.product.color,callback:function(e){t.$set(t.product,"color",e)},expression:"product.color"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"aquiPrice",label:"Aqui Price",outlined:""},model:{value:t.product.aquiPrice,callback:function(e){t.$set(t.product,"aquiPrice",e)},expression:"product.aquiPrice"}})],1),a("v-col",{staticClass:"md-6"},[a("v-text-field",{attrs:{id:"srp",label:"SRP",outlined:""},model:{value:t.product.srp,callback:function(e){t.$set(t.product,"srp",e)},expression:"product.srp"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"md-3"},[a("v-text-field",{attrs:{id:"stockLevel",label:"Stock Level",outlined:""},model:{value:t.product.stockLevel,callback:function(e){t.$set(t.product,"stockLevel",e)},expression:"product.stockLevel"}})],1),a("v-col",{staticClass:"md-9"},[a("v-text-field",{attrs:{id:"supplierName",label:"Supplier",outlined:""},model:{value:t.product.supplierName,callback:function(e){t.$set(t.product,"supplierName",e)},expression:"product.supplierName"}})],1)],1)],1)],1),a("v-divider"),a("p"),a("v-card-actions",{staticClass:"ml-4"},[a("v-btn",{staticClass:"success mb-4",on:{click:t.saveProduct}},[t._v("Save")]),a("v-btn",{staticClass:"info mb-4",on:{click:t.backToProducts}},[t._v("Cancel")])],1)],1)],1)},Tt=[],Ot={data(){return{product:{productId:"",name:"",brand:"",otherDetails:"",forVehicle:"",color:"",aquiPrice:0,srp:0,stockLevel:0,categoryId:0,supplierName:""},products:[],error:""}},methods:{saveProduct(){try{this.products=Y.insertProduct(this.product),this.$router.push("/products")}catch(t){this.error=t.message}},backToProducts(){this.$router.push("/products")}}},At=Ot,$t=(a("02b5"),Object(u["a"])(At,It,Tt,!1,null,null,null)),St=$t.exports;S()($t,{VBtn:X["a"],VCard:D["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:Z["a"],VDivider:at["a"],VForm:rt["a"],VRow:st["a"],VTextField:R["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.categories},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Product Categories")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-btn",{staticClass:"mb-2",on:{click:t.backToProducts}},[t._v("Back to Products")]),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[t._v("New Category")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{id:"productCategoryId",label:"Id",outlined:""},model:{value:t.editedItem.categoryId,callback:function(e){t.$set(t.editedItem,"categoryId",e)},expression:"editedItem.categoryId"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{id:"name",label:"Name",outlined:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var r=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n      edit\n    ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("\n      delete\n    ")])]}}])})},Dt=[],jt={data(){return{headers:[{text:"Id",value:"categoryId",align:"left",sortable:!1},{text:"Name",value:"name"},{text:"Actions",value:"action",sortable:!1}],categories:[],editedIndex:-1,editedItem:{categoryId:0,name:""},defaultItem:{categoryId:0,name:""},dialog:!1,category:{categoryId:0,name:""},snackbar:!1,error:""}},computed:{formTitle(){return-1===this.editedIndex?"New Category":"Edit Category"}},watch:{dialog(t){t||this.close()}},methods:{close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){if(this.editedIndex>-1)Object.assign(this.categories[this.editedIndex],this.editedItem);else{this.categories.push(this.editedItem);try{Q.insertProductCategory(this.editedItem)}catch(t){this.error=t.message}}this.close()},editItem(t){this.editedIndex=this.categories.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},backToProducts(){this.$router.push("/products")},saveCategory(){try{Q.insertProductCategory(this.category),this.snackbar=!0}catch(t){this.error=t.message}},closeAndGoToProducts(){this.snackbar=!1,this.$router.push("/products")}},async created(){try{this.categories=await Q.getProductCategories()}catch(t){this.error=t.message}}},qt=jt,Lt=a("71d9"),Rt=a("2a7f"),Et=Object(u["a"])(qt,Nt,Dt,!1,null,null,null),Bt=Et.exports;S()(Et,{VBtn:X["a"],VCard:D["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:Z["a"],VContainer:tt["a"],VDataTable:q["a"],VDialog:et["a"],VDivider:at["a"],VForm:rt["a"],VIcon:ot["a"],VRow:st["a"],VSpacer:L["a"],VTextField:R["a"],VToolbar:Lt["a"],VToolbarTitle:Rt["a"]});var Ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report"},[a("p",[t._v("This is the reports page.")])])}],Jt={},Gt=Jt,Yt=(a("b25d"),Object(u["a"])(Gt,Ft,Mt,!1,null,null,null)),zt=Yt.exports;r["a"].use(c["a"]);var Ht=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:p},{path:"/about",name:"about",component:y},{path:"/orders",name:"orders",component:mt},{path:"/products",name:"products",component:wt},{path:"/addProduct",name:"addProduct",component:St},{path:"/categories",name:"categories",component:Bt},{path:"/reports",name:"reports",component:zt}]});const Qt=Ht;var Kt={name:"App",props:{source:String},data:()=>({drawer:!0}),methods:{toggleDrawer(){this.drawer=!this.drawer},routePage(t){Qt.push({name:t})}}},Ut=Kt,Wt=(a("49c8"),a("40dc")),Xt=a("5bc1"),Zt=a("a75b"),te=a("553a"),ee=a("8860"),ae=a("da13"),re=a("1800"),oe=a("5d23"),se=a("f774"),ce=Object(u["a"])(Ut,o,s,!1,null,"1c24dca7",null),ie=ce.exports;S()(ce,{VApp:N["a"],VAppBar:Wt["a"],VAppBarNavIcon:Xt["a"],VCol:Z["a"],VContainer:tt["a"],VContent:Zt["a"],VFooter:te["a"],VIcon:ot["a"],VList:ee["a"],VListItem:ae["a"],VListItemAction:re["a"],VListItemContent:oe["a"],VListItemTitle:oe["b"],VNavigationDrawer:se["a"],VRow:st["a"],VSpacer:L["a"],VToolbarTitle:Rt["a"]});a("d1e7");var ne=a("f309");r["a"].use(ne["a"]);var le=new ne["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:Ht,vuetify:le,render:t=>t(ie)}).$mount("#app")},"66ee":function(t,e,a){"use strict";var r=a("fdd9"),o=a.n(r);o.a},"801a":function(t,e,a){"use strict";var r=a("42a2"),o=a.n(r);o.a},"8a4e":function(t,e,a){},"961d":function(t,e,a){},aa1b:function(t,e,a){},b25d:function(t,e,a){"use strict";var r=a("8a4e"),o=a.n(r);o.a},b3c6:function(t,e,a){"use strict";var r=a("d47d"),o=a.n(r);o.a},b9eb:function(t,e,a){},d23a:function(t,e,a){},d471:function(t,e,a){"use strict";var r=a("b9eb"),o=a.n(r);o.a},d47d:function(t,e,a){},def8:function(t,e,a){},eac9:function(t,e,a){"use strict";var r=a("1544"),o=a.n(r);o.a},fdd9:function(t,e,a){}});
//# sourceMappingURL=app.b6531c15.js.map