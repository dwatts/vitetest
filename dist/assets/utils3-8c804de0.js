import"./index-b652a0c6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const l={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},d={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},u=5,S={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank",close:"x"},r="calcite-list-item-group",s="calcite-list-item";function m(n){const e=n.target.assignedElements({flatten:!0}),c=e.filter(t=>t==null?void 0:t.matches(r)).map(t=>Array.from(t.querySelectorAll(s))).reduce((t,a)=>[...t,...a],[]),o=e.filter(t=>t==null?void 0:t.matches(s));return[...c,...o]}function p(n){n.forEach(e=>{e.setPosition=n.indexOf(e)+1,e.setSize=n.length})}function C(n,e=!1){const c=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(c,n,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{l as C,S as I,u as M,d as S,C as a,m as g,p as u};
