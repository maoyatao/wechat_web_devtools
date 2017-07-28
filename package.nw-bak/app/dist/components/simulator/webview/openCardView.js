"use strict";function init(){var e=require("../../../lib/react.js"),t=require("../../../cssStr/cssStr.js"),a=require("../../../stores/webviewStores.js"),r=require("../../../stores/windowStores.js"),i=(require("../../../actions/webviewActions.js"),require("../../../actions/leftviewActions.js"),require("../../../stores/leftviewStores.js"),require("../../../common/log/log.js"),require("../../../common/jssdk/sdkNameTrans.js"),require("../../../config/errcodeConfig.js")),s=e.createClass({displayName:"OpenCardView",getInitialState:function(){return{show:!1,cardList:[],cardIndex:-1,lazyLoaded:!1}},componentDidMount:function(){a.on("SHOW_OPEN_CARD_VIEW",this._showOpenCardView)},componentWillUnmount:function(){a.removeListener("SHOW_OPEN_CARD_VIEW",this._showOpenCardView)},_showOpenCardView:function(e){var t=1===e.cardList.length;this.setState({show:!0,lazyLoaded:!0,cardList:e.cardList,cardIndex:t?0:-1,errData:e.errData})},close:function(e){this.setState({show:!1,cardList:[],cardIndex:-1})},formatTime:function(e){var t=new Date(1e3*e);return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()},cardDetail:function(e){var t=e.currentTarget,a=t.dataset,r=a.index;this.setState({cardIndex:r})},render:function(){var a=this;if(!this.state.lazyLoaded)return null;var s=this.state.show?{}:t.displayNone,c=r.getOffset();s=Object.assign({},s,{height:c.height+42,width:c.width});var o=null,d=this.state.cardList,n=this.state.errData;!!n.length,this.state.showDetails;if(this.state.cardIndex!=-1){var l=d[this.state.cardIndex],m=l.card_data_info,w=l.card_tp_info,v=this.formatTime(m.begin_time),h=this.formatTime(m.end_time),_=w.brand_name,b=w.title,u=w.logo_url,E=void 0,N={};N.backgroundColor=w.color,E=0===w.limit_num?e.createElement("div",{className:"webview-card-add-item_bottom_disable"},e.createElement("div",{className:"webview-card-add-item_button_error"},w.limit_wording)):e.createElement("div",null,m.operate_field&&m.operate_field.title||"查看详情"),o=e.createElement("div",{className:"webview-card-open",style:N},e.createElement("div",{className:"webview-card-open-header"},e.createElement("div",{className:"webview-card-open-header_button",onClick:this.close}," 返回 ")),e.createElement("div",{className:"webview-card-open-container"},e.createElement("div",{className:"webview-card-open_top"},e.createElement("img",{className:"webview-card-open-item_img",src:u})),e.createElement("div",{className:"webview-card-open_middle"},e.createElement("div",{className:"webview-card-open-name"},_),e.createElement("div",{className:"webview-card-open-intro"},b),e.createElement("div",{className:"webview-card-open-item_button",style:N},E),e.createElement("div",{className:"webview-card-open-time"},"有效期: ",v,"-",h))))}else{var p=d.map(function(t,r){var i=t.card_tp_info;return e.createElement("div",{onClick:a.cardDetail,key:r,"data-index":r,className:"webview-card-choose-item"},e.createElement("div",{className:"webview-card-choose_m"},e.createElement("div",{className:"webview-card-choose_left"},e.createElement("img",{className:"webview-card-choose-item_img",src:i.logo_url})),e.createElement("div",{className:"webview-card-choose_details"},e.createElement("div",{className:"webview-card-choose-item_name"},i.brand_name),e.createElement("div",{className:"webview-card-choose-item_info"},i.title))))}),f=n.map(function(t,a){var r="INVALID_CODE"===i[t.errcode]?"错误卡券 ID":"错误卡卷 code";return e.createElement("div",{key:a,className:"webview-card-choose-item"},e.createElement("div",{className:"webview-card-choose_mErr"},e.createElement("div",{className:"webview-card-choose_details"},e.createElement("div",{className:"webview-card-choose-item_error"},r),e.createElement("div",{className:"webview-card-choose-item_error"},"cardId: ",t.card_id),e.createElement("div",{className:"webview-card-choose-item_error"},"code: ",t.code))))});o=e.createElement("div",{className:"webview-card-choose"},e.createElement("div",{className:"webview-card-choose-header"},e.createElement("div",{className:"webview-card-choose-header_button",onClick:this.close}," 关闭 "),e.createElement("div",{className:"webview-card-choose-header_title"}," 卡券列表 ")),e.createElement("div",{className:"webview-card-choose-container",style:{height:c.height-42}},e.createElement("div",{className:"webview-card-choose-item"},p,f)))}return e.createElement("div",{className:"webview-card weapp-card-wrap",style:s},o)}});_exports=s}var _exports;init(),module.exports=_exports;