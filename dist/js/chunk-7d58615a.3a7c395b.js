(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d58615a"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),i=n("2d00"),r=c("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?c.f(t,r,i(0,n)):t[r]=n}},a434:function(t,e,n){"use strict";var a=n("23e7"),c=n("23cb"),i=n("a691"),r=n("50c4"),o=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),b=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),O=Math.max,j=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b||!f},{splice:function(t,e){var n,a,u,d,b,f,g=o(this),h=r(g.length),v=c(t,h),x=arguments.length;if(0===x?n=a=0:1===x?(n=0,a=h-v):(n=x-2,a=j(O(i(e),0),h-v)),h+n-a>m)throw TypeError(p);for(u=s(g,a),d=0;d<a;d++)b=v+d,b in g&&l(u,d,g[b]);if(u.length=a,n<a){for(d=v;d<h-a;d++)b=d+a,f=d+n,b in g?g[f]=g[b]:delete g[f];for(d=h;d>h-a+n;d--)delete g[d-1]}else if(n>a)for(d=h-a;d>v;d--)b=d+a-1,f=d+n-1,b in g?g[f]=g[b]:delete g[f];for(d=0;d<n;d++)g[d+v]=arguments[d+2];return g.length=h-a+n,u}})},a9d7:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"d-flex flex-column col-11 m-auto"},i={class:"col-2"},r=Object(a["h"])("Adicionar"),o={class:"card shadow"},s=Object(a["i"])("div",{class:"card-header"},"Usuário",-1),l={class:"card-body"},u=Object(a["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "}," Ações ",-1),d=Object(a["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "},[Object(a["i"])("button",{"data-edit":"2",class:"btn btn-sm btn-primary",title:"Visualizar"},[Object(a["i"])("i",{"data-edit":"2",class:"fas fa-eye"})]),Object(a["i"])("button",{title:"Editar","data-edit":"1",class:"btn btn-sm btn-warning mr-2"},[Object(a["i"])("i",{"data-edit":"1",class:"fas fa-edit"})]),Object(a["i"])("button",{title:"Excluir","data-edit":"0",class:"btn btn-sm btn-danger"},[Object(a["i"])("i",{"data-edit":"0",class:"fas fa-trash-alt"})])],-1),b=Object(a["h"])(" caregando tabela ");function f(t,e,n,f,O,j){var m=Object(a["A"])("router-link"),p=Object(a["A"])("Table");return Object(a["s"])(),Object(a["e"])("div",c,[Object(a["i"])("div",i,[Object(a["i"])(m,{title:"Adicionar novo usuário",class:"ml-auto m-1 btn btn-sm btn-primary",to:"/usuario/novo"},{default:Object(a["I"])((function(){return[r]})),_:1})]),Object(a["i"])("div",o,[s,Object(a["i"])("div",l,[(Object(a["s"])(),Object(a["e"])(a["b"],null,{default:Object(a["I"])((function(){return[Object(a["i"])(p,{class:"table-borderless table-striped",headerColumns:f.hColumns,items:f.items,componentePaginacao:f.componentePaginacao,pathPaginaAtual:"cargo",action:"true",onOnActionClick:f.onEdit},{"table-header-actions":Object(a["I"])((function(){return[u]})),"table-actions":Object(a["I"])((function(){return[d]})),_:1},8,["headerColumns","items","componentePaginacao","onOnActionClick"])]})),fallback:Object(a["I"])((function(){return[b]})),_:1}))])])])}n("4160"),n("c975"),n("a434"),n("159b"),n("96cf");var O=n("1da1"),j=n("e91f"),m=n("6c02"),p=n("3d20"),g=n.n(p),h={setup:function(){var t=Object(m["e"])(),e=Object(a["x"])(null),n=Object(a["x"])(null),c=Object(a["x"])(null),i=Object(a["x"])([{key:"nome",label:"Nome"}]),r=function(a){if(a&&a.target&&a.target.dataset){if(1==a.target.dataset.edit&&(console.log("Editar",a.item.id),t.push("/usuario/editar/"+a.item.id)),2==a.target.dataset.edit&&t.push("/usuario/visualizar/"+a.item.id+"/visualizar"),0==a.target.dataset.edit){n=a.item.id;var c=!1,i=a.item.nome;g.a.fire({icon:"question",title:"Deseja excluir",confirmButtonText:"Sim",text:'O item "'.concat(i,'"?'),showCancelButton:!0,cancelButtonText:"Cancelar"}).then((function(t){if(t.isConfirmed){var a=n,r=localStorage.getItem("dataLocalStorageTarefa");if(r){var o=JSON.parse(r);o.forEach((function(t){console.log(t.atribuidaPara,a),t.atribuidaPara==a&&(c=!0)}))}if(c)g.a.fire({icon:"warning",title:"Atenção",text:'O usuário "'.concat(i,'" não pode ser excluído pois ja possui tarefas cadastradas.')});else{var s=localStorage.getItem("dataLocalStorageUsuario"),l=JSON.parse(s);l.forEach((function(t){if(t.id==a){var n=l.indexOf(t);e.value.splice(n,1);var c=JSON.stringify(e.value);localStorage.setItem("dataLocalStorageUsuario",c)}})),g.a.fire({icon:"success",title:"Concluído",text:'O Item "'.concat(i,'" foi excluído')}),c=!1}}}))}}else console.log("Objeto Errado")};return Object(a["q"])(Object(O["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=localStorage.getItem("dataLocalStorageUsuario"),a=JSON.parse(n),e.value=a;case 3:case"end":return t.stop()}}),t)})))),{items:e,componentePaginacao:c,hColumns:i,onEdit:r}},components:{Table:j["a"]}},v=n("d959"),x=n.n(v);const C=x()(h,[["render",f]]);e["default"]=C},c975:function(t,e,n){"use strict";var a=n("23e7"),c=n("4d64").indexOf,i=n("a640"),r=n("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(t){return s?o.apply(this,arguments)||0:c(this,t,arguments.length>1?arguments[1]:void 0)}})},e91f:function(t,e,n){"use strict";var a=n("7a23"),c={class:"table"},i={key:0,id:"tableHeaderActions"};function r(t,e,n,r,o,s){return Object(a["s"])(),Object(a["e"])("table",c,[Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(r.hColumns,(function(t,e){return Object(a["s"])(),Object(a["e"])("th",{scope:"col",key:e},[Object(a["i"])("div",null,Object(a["C"])(t.label),1)])})),128)),r.lAction?(Object(a["s"])(),Object(a["e"])("th",i,[Object(a["z"])(t.$slots,"table-header-actions")])):Object(a["f"])("",!0)])]),Object(a["i"])("tbody",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(n.items,(function(e,n){return Object(a["s"])(),Object(a["e"])("tr",{scope:"row",key:n},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(r.getColumns(e),(function(t,e){return Object(a["s"])(),Object(a["e"])("td",{key:e},Object(a["C"])(t),1)})),128)),r.lAction?(Object(a["s"])(),Object(a["e"])("td",{key:0,id:"tableAction"+n,"data-item":e,onClick:function(t){return r.onActionClick(t,e)}},[Object(a["z"])(t.$slots,"table-actions")],8,["id","data-item","onClick"])):Object(a["f"])("",!0)])})),128))])])}n("96cf");var o=n("1da1"),s={props:["headerColumns","items","action"],setup:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function n(){var c,i,r,o,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.emit,i=Object(a["x"])(t.headerColumns),r=Object(a["x"])(!!t.action&&t.action),n.t0=a["x"],n.next=6,t.items;case 6:return n.t1=n.sent,o=(0,n.t0)(n.t1),s=function(t){for(var e=[],n=0;n<i.value.length;n++){var a=i.value[n].key;e.push(t[a])}return e},l=function(t,e){t.item=e,c("on-action-click",t)},n.abrupt("return",{lAction:r,hColumns:i,lItems:o,getColumns:s,onActionClick:l});case 11:case"end":return n.stop()}}),n)})))()}},l=n("d959"),u=n.n(l);const d=u()(s,[["render",r]]);e["a"]=d}}]);
//# sourceMappingURL=chunk-7d58615a.3a7c395b.js.map