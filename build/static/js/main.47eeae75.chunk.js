(this["webpackJsonphuddled-media-tech-test"]=this["webpackJsonphuddled-media-tech-test"]||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},53:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(35),i=a.n(r),s=(a(46),a(10));a(53);function c(){return l.a.createElement("header",null,l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png",alt:"logo",style:{maxWidth:"100px",objectFit:"contain"}}),l.a.createElement("h1",{className:"m-0"},"Tube Tracker"))}var o=a(15),d=a(16),u=a(23),m=a(21),p=a(74),b=a(75),h=a(24),f=a.n(h),E=function(){return f.a.get("https://api.tfl.gov.uk/Line/Mode/tube/Status?app_id=cdf2be4d&app_key=2c620fbd67b0fe7202e99b15a97419d6")},v=function(e){return f.a.get("https://api.tfl.gov.uk/Line/".concat(e,"/Status?app_id=cdf2be4d&app_key=2c620fbd67b0fe7202e99b15a97419d6"))},g=function(){return l.a.createElement("div",{className:"d-flex align-items-center justify-content-center py-2"},l.a.createElement("div",{className:"spinner-border text-primary"},l.a.createElement("span",{className:"sr-only"},"Loading...")))},y=a(37),k=a.n(y),S=function(e){var t=e.lastUpdated;return l.a.createElement("h5",{id:"updated"},"Updated on ",k()(t).format("DD MMM YYYY \u2014 HH:mm:ss"))},w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rawLines:[],lines:null,lastUpdated:new Date},e.getData=function(){e.dataSub&&e.dataSub.unsubscribe(),e.dataSub=Object(p.a)(0,6e4).pipe(Object(b.a)((function(){return E()}))).subscribe((function(t){var a=t.data;return e.setState({rawLines:a,lines:a.filter((function(t){return!e.props.filterId||t.id!==e.props.filterId})),lastUpdated:new Date})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.filterId!==e.filterId&&(this.setState({lines:this.state.rawLines.filter((function(e){return!t.props.filterId||e.id!==t.props.filterId}))}),this.props.loaded&&this.props.loaded())}},{key:"componentWillUnmount",value:function(){this.dataSub&&this.dataSub.unsubscribe()}},{key:"render",value:function(){return this.state.lines?l.a.createElement("div",null,l.a.createElement(S,{lastUpdated:this.state.lastUpdated}),l.a.createElement("table",{className:"table text-dark bg-white table-bordered mb-0",id:"table"},l.a.createElement("tbody",null,this.state.lines.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement("p",{className:"font-weight-bold mb-0 line-name",id:"".concat(e.id)},e.name)),l.a.createElement("td",null,e.lineStatuses.map((function(t,a){var n=a===e.lineStatuses.length-1;return["No Issues","Good Service"].includes(t.statusSeverityDescription)?l.a.createElement("p",{className:n?"mb-0":"mb-1",key:a},t.statusSeverityDescription):l.a.createElement("p",{className:n?"mb-0":"mb-1",key:a},l.a.createElement("svg",{className:"bi bi-exclamation-triangle-fill text-warning",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"}))," ",t.statusSeverityDescription)}))),l.a.createElement("td",null,l.a.createElement(s.a,{to:"/".concat(e.id)},l.a.createElement("p",{className:"btn btn-link p-0"},"More Information"))))}))))):l.a.createElement(g,null)}}]),a}(n.Component),N=a(38),j=a(73),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0,line:null,lastUpdated:new Date,error:!1},e.getData=function(){e.dataSub&&e.dataSub.unsubscribe(),e.setState({loading:!0}),e.dataSub=Object(p.a)(0,6e4).pipe(Object(b.a)((function(){return Object(N.a)(v(e.props.lineId)).pipe(Object(j.a)((function(){return e.setState({loading:!1})})))}))).subscribe((function(t){var a=t.data;e.setState({line:a[0],lastUpdated:new Date})}),(function(){return e.setState({error:!0})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e){this.props.lineId!==e.lineId&&this.getData()}},{key:"componentWillUnmount",value:function(){this.dataSub&&this.dataSub.unsubscribe()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{lastUpdated:this.state.lastUpdated}),l.a.createElement("div",{className:"position-relative"},l.a.createElement("div",{className:"card text-dark rounded"},this.state.error?l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title"},"Line not found"),l.a.createElement(s.a,{to:"/"},l.a.createElement("p",{className:"card-link"},"\u2039 Back"))):l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title"},this.state.line&&this.state.line.name),l.a.createElement("p",{className:"card-text"},this.state.line&&this.state.line.lineStatuses[0].reason||"Services running as normal."),l.a.createElement(s.a,{to:"/"},l.a.createElement("p",{className:"card-link"},"\u2039 Back")))),this.state.line?l.a.createElement("div",{className:"bg-white p-4 rounded mt-2 border"},l.a.createElement("img",{style:{height:220,objectFit:"contain",objectPosition:"center center"},src:"/assets/images/".concat(this.state.line.id,".png"),className:"w-100",alt:this.state.line.name})):null,this.state.loading?l.a.createElement("div",{style:{top:0,bottom:0,right:0,left:0,background:"rgba(255, 255, 255, 0.5)"},className:"position-absolute d-flex align-items-center justify-content-center"},l.a.createElement(g,null)):null),l.a.createElement("hr",null),l.a.createElement("h3",null,"Other Lines"),l.a.createElement(w,{filterId:this.state.line&&this.state.line.id,loaded:function(){return setTimeout((function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}))}}))}}]),a}(n.Component),U=function(){return l.a.createElement("div",{className:"bg-container pb-5"},l.a.createElement("div",{className:"app"},l.a.createElement(c,null),l.a.createElement("main",null,l.a.createElement(s.b,null,l.a.createElement(w,{path:"/"}),l.a.createElement(D,{path:":lineId"})))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.47eeae75.chunk.js.map