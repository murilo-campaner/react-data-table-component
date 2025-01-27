!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactDataTable={},e.React,e.styled)}(this,(function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,r=a(t),i=o(t),s=o(n);function d(e,t){return e[t]}function c(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function g(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function u(e=[],t,n="id"){const o=e.slice(),a=d(t,n);return a?o.splice(o.findIndex((e=>d(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function p(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function b(e,t){return Math.ceil(e/t)}function f(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const m=()=>null;function h(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function w(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function x(e,t){return t?e.findIndex((e=>C(e.id,t))):-1}function C(e,t){return e==t}function y(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!w(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!w(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:u(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:g(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!w(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const v=n.css`
	pointer-events: none;
	opacity: 0.4;
`,R=s.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&v};
	${({theme:e})=>e.table.style};
`,S=n.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,E=s.default.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&S};
	${({theme:e})=>e.head.style};
`,O=s.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,P=(e,...t)=>n.css`
		@media screen and (max-width: ${599}px) {
			${n.css(e,...t)}
		}
	`,k=(e,...t)=>n.css`
		@media screen and (max-width: ${959}px) {
			${n.css(e,...t)}
		}
	`,D=(e,...t)=>n.css`
		@media screen and (max-width: ${1280}px) {
			${n.css(e,...t)}
		}
	`,H=e=>(t,...o)=>n.css`
				@media screen and (max-width: ${e}px) {
					${n.css(t,...o)}
				}
			`,$=s.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,j=s.default($)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&n.css`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&P`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&k`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&D`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&H(e)`
    display: none;
  `};
`,T=n.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,F=s.default(j).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&T};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var I=r.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:u}){const{style:p,classNames:b}=h(n,t.conditionalCellStyles,["rdt_TableCell"]);return r.createElement(F,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:p,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:u},!t.cell&&r.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):c(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const A="input";var _=r.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:l=!1,onClick:i=m}){const s=t,d=s!==A?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),c=r.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return r.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:l?m:i,name:e,"aria-label":e,checked:a,disabled:l},c,{onChange:m}))}));const L=s.default($)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function M({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:l,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return r.createElement(L,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},r.createElement(_,{name:e,component:l,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const z=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function N({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:o,row:a,onToggled:l}){const i=t?n.expanded:n.collapsed;return r.createElement(z,{"aria-disabled":e,onClick:()=>l&&l(a),"data-testid":`expander-button-${o}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const W=s.default($)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function B({row:e,expanded:t=!1,expandableIcon:n,id:o,onToggled:a,disabled:l=!1}){return r.createElement(W,{onClick:e=>e.stopPropagation(),noPadding:!0},r.createElement(N,{id:o,row:e,expanded:t,expandableIcon:n,disabled:l,onToggled:a}))}const G=s.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var V=r.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const l=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return r.createElement(G,{className:l,extendedRowStyle:o},r.createElement(t,Object.assign({data:e},n)))}));const U="allowRowEvents";var q,Y,K;e.Direction=void 0,(q=e.Direction||(e.Direction={})).LTR="ltr",q.RTL="rtl",q.AUTO="auto",e.Alignment=void 0,(Y=e.Alignment||(e.Alignment={})).LEFT="left",Y.RIGHT="right",Y.CENTER="center",e.Media=void 0,(K=e.Media||(e.Media={})).SM="sm",K.MD="md",K.LG="lg";const J=n.css`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Q=n.css`
	&:hover {
		cursor: pointer;
	}
`,X=s.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&J};
	${({pointerOnHover:e})=>e&&Q};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Z({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:o=!1,dense:a=!1,expandableIcon:l,expandableRows:i=!1,expandableRowsComponent:s,expandableRowsComponentProps:c,expandableRowsHideExpander:g,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:b=!1,id:f,expandableInheritConditionalStyles:w,keyField:x,onRowClicked:y=m,onRowDoubleClicked:v=m,onRowExpandToggled:R=m,onSelectedRow:S=m,pointerOnHover:E=!1,row:O,rowCount:P,rowIndex:k,selectableRowDisabled:D=null,selectableRows:H=!1,selectableRowsComponent:$,selectableRowsComponentProps:j,selectableRowsHighlight:T=!1,selectableRowsSingle:F=!1,selected:A,striped:_=!1,draggingColumnId:L,onDragStart:z,onDragOver:N,onDragEnd:W,onDragEnter:G,onDragLeave:q}){const[Y,K]=r.useState(n);r.useEffect((()=>{K(n)}),[n]);const J=r.useCallback((()=>{K(!Y),R(!Y,O)}),[Y,R,O]),Q=E||i&&(u||p),Z=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===U&&(y(O,e),!o&&i&&u&&J())}),[o,u,i,J,y,O]),ee=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===U&&(v(O,e),!o&&i&&p&&J())}),[o,p,i,J,v,O]),te=d(O,x),{style:ne,classNames:oe}=h(O,t,["rdt_TableRow"]),ae=T&&A,le=w?ne:{},re=_&&k%2==0;return r.createElement(r.Fragment,null,r.createElement(X,{id:`row-${f}`,role:"row",striped:re,highlightOnHover:b,pointerOnHover:!o&&Q,dense:a,onClick:Z,onDoubleClick:ee,className:oe,selected:ae,style:ne},H&&r.createElement(M,{name:`select-row-${te}`,keyField:x,row:O,rowCount:P,selected:A,selectableRowsComponent:$,selectableRowsComponentProps:j,selectableRowDisabled:D,selectableRowsSingle:F,onSelectedRow:S}),i&&!g&&r.createElement(B,{id:te,expandableIcon:l,expanded:Y,row:O,onToggled:J,disabled:o}),e.map((e=>e.omit?null:r.createElement(I,{id:`cell-${e.id}-${te}`,key:`cell-${e.id}-${te}`,dataTag:e.ignoreRowClick||e.button?null:U,column:e,row:O,rowIndex:k,isDragging:C(L,e.id),onDragStart:z,onDragOver:N,onDragEnd:W,onDragEnter:G,onDragLeave:q})))),i&&Y&&r.createElement(V,{key:`expander-${te}`,data:O,extendedRowStyle:le,extendedClassNames:oe,ExpanderComponent:s,expanderComponentProps:c}))}const ee=s.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,te=({sortActive:e,sortDirection:t})=>i.default.createElement(ee,{sortActive:e,sortDirection:t},"▲"),ne=s.default(j)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,oe=n.css`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&n.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ae=s.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&oe};
`,le=s.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var re=r.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:a,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:u,onSort:p,onDragStart:b,onDragOver:f,onDragEnd:m,onDragEnter:h,onDragLeave:w}){r.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[x,y]=r.useState(!1),v=r.useRef(null);if(r.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[x]),e.omit)return null;const R=()=>{if(!e.sortable&&!e.selector)return;let t=a;C(o.id,e.id)&&(t=a===l.ASC?l.DESC:l.ASC),p({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||u})},S=e=>r.createElement(te,{sortActive:e,sortDirection:a}),E=()=>r.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!e.sortable||!C(o.id,e.id)),P=!e.sortable||t,k=e.sortable&&!i&&!e.right,D=e.sortable&&!i&&e.right,H=e.sortable&&i&&!e.right,$=e.sortable&&i&&e.right;return r.createElement(ne,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:C(e.id,n),onDragStart:b,onDragOver:f,onDragEnd:m,onDragEnter:h,onDragLeave:w},e.name&&r.createElement(ae,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:P?void 0:R,onKeyPress:P?void 0:e=>{"Enter"===e.key&&R()},sortActive:!P&&O,disabled:P},!P&&$&&E(),!P&&D&&S(O),"string"==typeof e.name?r.createElement(le,{title:x?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!P&&H&&E(),!P&&k&&S(O)))}));const ie=s.default($)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function se({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=l.length>0&&!o,u=d?t.filter((e=>!d(e))):t,p=0===u.length,b=Math.min(t.length,u.length);return r.createElement(ie,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(_,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:u,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:p}))}function de(t=e.Direction.AUTO){const n="object"==typeof window,[o,a]=r.useState(!1);return r.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const ce=s.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ge=s.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ue=s.default.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function pe({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const l=de(a),i=o>0;return n?r.createElement(ue,{visible:i},r.cloneElement(n,{selectedCount:o})):r.createElement(ue,{visible:i,rtl:l},r.createElement(ce,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,l)),r.createElement(ge,null,t))}const be=s.default.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,fe=s.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,me=s.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,he=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:l,direction:i,showMenu:s=!0})=>r.createElement(be,{className:"rdt_TableHeader",role:"heading","aria-level":1},r.createElement(fe,null,e),t&&r.createElement(me,null,t),s&&r.createElement(pe,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:l}))
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */;function we(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const xe={left:"flex-start",right:"flex-end",center:"center"},Ce=s.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>xe[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,ye=e=>{var{align:t="right",wrapContent:n=!0}=e,o=we(e,["align","wrapContent"]);return r.createElement(Ce,Object.assign({align:t,wrapContent:n},o))},ve=s.default.div`
	display: flex;
	flex-direction: column;
`,Re=s.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&n.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&n.css`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};
`,Se=s.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Ee=s.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Oe=s.default($)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Pe=s.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,ke=()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M7 10l5 5 5-5z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),De=s.default.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,He=s.default.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,$e=e=>{var{defaultValue:t,onChange:n}=e,o=we(e,["defaultValue","onChange"]);return r.createElement(He,null,r.createElement(De,Object.assign({onChange:n,defaultValue:t},o)),r.createElement(ke,null))},je={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return i.default.createElement("div",null,"To add an expander pass in a component instance via ",i.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),i.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),i.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:i.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:i.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:e.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,subHeading:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),i.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:e.Direction.AUTO,onChangePage:m,onChangeRowsPerPage:m,onRowClicked:m,onRowDoubleClicked:m,onRowExpandToggled:m,onSelectedRowsChange:m,onSort:m,onColumnOrderChange:m},Te={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Fe=s.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ie=s.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Ae=s.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${P`
    width: 100%;
    justify-content: space-around;
  `};
`,_e=s.default.span`
	flex-shrink: 1;
	user-select: none;
`,Le=s.default(_e)`
	margin: 0 24px;
`,Me=s.default(_e)`
	margin: 0 4px;
`;var ze=r.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=je.direction,paginationRowsPerPageOptions:a=je.paginationRowsPerPageOptions,paginationIconLastPage:l=je.paginationIconLastPage,paginationIconFirstPage:i=je.paginationIconFirstPage,paginationIconNext:s=je.paginationIconNext,paginationIconPrevious:d=je.paginationIconPrevious,paginationComponentOptions:c=je.paginationComponentOptions,onChangeRowsPerPage:g=je.onChangeRowsPerPage,onChangePage:u=je.onChangePage}){const p=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=r.useState(t);return r.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),f=de(o),m=p.width&&p.width>599,h=b(t,e),w=n*e,x=w-e+1,C=1===n,y=n===h,v=Object.assign(Object.assign({},Te),c),R=n===h?`${x}-${t} ${v.rangeSeparatorText} ${t}`:`${x}-${w} ${v.rangeSeparatorText} ${t}`,S=r.useCallback((()=>u(n-1)),[n,u]),E=r.useCallback((()=>u(n+1)),[n,u]),O=r.useCallback((()=>u(1)),[u]),P=r.useCallback((()=>u(b(t,e))),[u,t,e]),k=r.useCallback((e=>g(Number(e.target.value),n)),[n,g]),D=a.map((e=>r.createElement("option",{key:e,value:e},e)));v.selectAllRowsItem&&D.push(r.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const H=r.createElement($e,{onChange:k,defaultValue:e,"aria-label":v.rowsPerPageText},D);return r.createElement(Fe,{className:"rdt_Pagination"},!v.noRowsPerPage&&m&&r.createElement(r.Fragment,null,r.createElement(Me,null,v.rowsPerPageText),H),m&&r.createElement(Le,null,R),r.createElement(Ae,null,r.createElement(Ie,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,isRTL:f},i),r.createElement(Ie,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,isRTL:f},d),!m&&H,r.createElement(Ie,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":y,onClick:E,disabled:y,isRTL:f},s),r.createElement(Ie,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":y,onClick:P,disabled:y,isRTL:f},l)))}));const Ne=(e,t)=>{const n=r.useRef(!0);r.useEffect((()=>{n.current?n.current=!1:e()}),t)};var We=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Be}(e)}(e)};var Be="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ge(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ke((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ve(e,t,n){return e.concat(t).map((function(e){return Ge(e,n)}))}function Ue(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function qe(e,t){try{return t in e}catch(e){return!1}}function Ye(e,t,n){var o={};return n.isMergeableObject(e)&&Ue(e).forEach((function(t){o[t]=Ge(e[t],n)})),Ue(t).forEach((function(a){(function(e,t){return qe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(qe(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ke;var n=t.customMerge(e);return"function"==typeof n?n:Ke}(a,n)(e[a],t[a],n):o[a]=Ge(t[a],n))})),o}function Ke(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ve,n.isMergeableObject=n.isMergeableObject||We,n.cloneUnlessOtherwiseSpecified=Ge;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ye(e,t,n):Ge(t,n)}Ke.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ke(e,n,t)}),{})};var Je=Ke;const Qe={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Xe={default:Qe,light:Qe,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ze(e,t,n,o){const[a,i]=r.useState((()=>p(e))),[s,d]=r.useState(""),c=r.useRef("");Ne((()=>{i(p(e))}),[e]);const g=r.useCallback((e=>{var t,n,o;const{attributes:l}=e.target,r=null===(t=l.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;r&&(c.current=(null===(o=null===(n=a[x(a,r)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[a]),u=r.useCallback((e=>{var n;const{attributes:o}=e.target,l=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(l&&c.current&&l!==c.current){const e=x(a,c.current),n=x(a,l),o=[...a];o[e]=a[n],o[n]=a[e],i(o),t(o)}}),[t,a]),b=r.useCallback((e=>{e.preventDefault()}),[]),f=r.useCallback((e=>{e.preventDefault()}),[]),m=r.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),h=function(e=!1){return e?l.ASC:l.DESC}(o),w=r.useMemo((()=>a[x(a,null==n?void 0:n.toString())]||{}),[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:g,handleDragEnter:u,handleDragOver:b,handleDragLeave:f,handleDragEnd:m,defaultSortDirection:h,defaultSortColumn:w}}var et=r.memo((function(e){const{data:t=je.data,columns:o=je.columns,title:a=je.title,actions:i=je.actions,keyField:s=je.keyField,striped:g=je.striped,highlightOnHover:u=je.highlightOnHover,pointerOnHover:p=je.pointerOnHover,dense:m=je.dense,selectableRows:h=je.selectableRows,selectableRowsSingle:x=je.selectableRowsSingle,selectableRowsHighlight:C=je.selectableRowsHighlight,selectableRowsNoSelectAll:v=je.selectableRowsNoSelectAll,selectableRowsVisibleOnly:S=je.selectableRowsVisibleOnly,selectableRowSelected:P=je.selectableRowSelected,selectableRowDisabled:k=je.selectableRowDisabled,selectableRowsComponent:D=je.selectableRowsComponent,selectableRowsComponentProps:H=je.selectableRowsComponentProps,onRowExpandToggled:j=je.onRowExpandToggled,onSelectedRowsChange:T=je.onSelectedRowsChange,expandableIcon:F=je.expandableIcon,onChangeRowsPerPage:I=je.onChangeRowsPerPage,onChangePage:A=je.onChangePage,paginationServer:_=je.paginationServer,paginationServerOptions:L=je.paginationServerOptions,paginationTotalRows:M=je.paginationTotalRows,paginationDefaultPage:z=je.paginationDefaultPage,paginationResetDefaultPage:N=je.paginationResetDefaultPage,paginationPerPage:W=je.paginationPerPage,paginationRowsPerPageOptions:B=je.paginationRowsPerPageOptions,paginationIconLastPage:G=je.paginationIconLastPage,paginationIconFirstPage:V=je.paginationIconFirstPage,paginationIconNext:U=je.paginationIconNext,paginationIconPrevious:q=je.paginationIconPrevious,paginationComponent:Y=je.paginationComponent,paginationComponentOptions:K=je.paginationComponentOptions,responsive:J=je.responsive,progressPending:Q=je.progressPending,progressComponent:X=je.progressComponent,persistTableHead:ee=je.persistTableHead,noDataComponent:te=je.noDataComponent,disabled:ne=je.disabled,noTableHead:oe=je.noTableHead,noHeader:ae=je.noHeader,fixedHeader:le=je.fixedHeader,fixedHeaderScrollHeight:ie=je.fixedHeaderScrollHeight,pagination:de=je.pagination,subHeader:ce=je.subHeader,subHeaderAlign:ge=je.subHeaderAlign,subHeaderWrap:ue=je.subHeaderWrap,subHeaderComponent:pe=je.subHeaderComponent,subHeading:be=je.subHeading,noContextMenu:fe=je.noContextMenu,contextMessage:me=je.contextMessage,contextActions:we=je.contextActions,contextComponent:xe=je.contextComponent,expandableRows:Ce=je.expandableRows,onRowClicked:ke=je.onRowClicked,onRowDoubleClicked:De=je.onRowDoubleClicked,sortIcon:He=je.sortIcon,onSort:$e=je.onSort,sortFunction:Te=je.sortFunction,sortServer:Fe=je.sortServer,expandableRowsComponent:Ie=je.expandableRowsComponent,expandableRowsComponentProps:Ae=je.expandableRowsComponentProps,expandableRowDisabled:_e=je.expandableRowDisabled,expandableRowsHideExpander:Le=je.expandableRowsHideExpander,expandOnRowClicked:Me=je.expandOnRowClicked,expandOnRowDoubleClicked:We=je.expandOnRowDoubleClicked,expandableRowExpanded:Be=je.expandableRowExpanded,expandableInheritConditionalStyles:Ge=je.expandableInheritConditionalStyles,defaultSortFieldId:Ve=je.defaultSortFieldId,defaultSortAsc:Ue=je.defaultSortAsc,clearSelectedRows:qe=je.clearSelectedRows,conditionalRowStyles:Ye=je.conditionalRowStyles,theme:Ke=je.theme,customStyles:Qe=je.customStyles,direction:et=je.direction,onColumnOrderChange:tt=je.onColumnOrderChange}=e,{tableColumns:nt,draggingColumnId:ot,handleDragStart:at,handleDragEnter:lt,handleDragOver:rt,handleDragLeave:it,handleDragEnd:st,defaultSortDirection:dt,defaultSortColumn:ct}=Ze(o,tt,Ve,Ue),[{rowsPerPage:gt,currentPage:ut,selectedRows:pt,allSelected:bt,selectedCount:ft,selectedColumn:mt,sortDirection:ht,toggleOnSelectedRowsChange:wt},xt]=r.useReducer(y,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:ct,toggleOnSelectedRowsChange:!1,sortDirection:dt,currentPage:z,rowsPerPage:W,selectedRowsFlag:!1,contextMessage:je.contextMessage}),{persistSelectedOnSort:Ct=!1,persistSelectedOnPageChange:yt=!1}=L,vt=!(!_||!yt&&!Ct),Rt=de&&!Q&&t.length>0,St=Y||ze,Et=r.useMemo((()=>((e={},t="default",n="default")=>{const o=Xe[t]?t:n;return Je({table:{style:{color:(a=Xe[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(Qe,Ke)),[Qe,Ke]),Ot=r.useMemo((()=>Object.assign({},"auto"!==et&&{dir:et})),[et]),Pt=r.useMemo((()=>{if(Fe)return t;if((null==mt?void 0:mt.sortFunction)&&"function"==typeof mt.sortFunction){const e=mt.sortFunction,n=ht===l.ASC?e:(t,n)=>-1*e(t,n);return[...t].sort(n)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=c(e,t),l=c(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(t,null==mt?void 0:mt.selector,ht,Te)}),[Fe,mt,ht,t,Te]),kt=r.useMemo((()=>{if(de&&!_){const e=ut*gt,t=e-gt;return Pt.slice(t,e)}return Pt}),[ut,de,_,gt,Pt]),Dt=r.useCallback((e=>{xt(e)}),[]),Ht=r.useCallback((e=>{xt(e)}),[]),$t=r.useCallback((e=>{xt(e)}),[]),jt=r.useCallback(((e,t)=>ke(e,t)),[ke]),Tt=r.useCallback(((e,t)=>De(e,t)),[De]),Ft=r.useCallback((e=>xt({type:"CHANGE_PAGE",page:e,paginationServer:_,visibleOnly:S,persistSelectedOnPageChange:yt})),[_,yt,S]),It=r.useCallback((e=>{const t=b(M||kt.length,e),n=f(ut,t);_||Ft(n),xt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[ut,Ft,_,M,kt.length]);if(de&&!_&&Pt.length>0&&0===kt.length){const e=b(Pt.length,gt),t=f(ut,e);Ft(t)}Ne((()=>{T({allSelected:bt,selectedCount:ft,selectedRows:pt})}),[wt]),Ne((()=>{$e(mt,ht)}),[mt,ht]),Ne((()=>{A(ut,M||Pt.length)}),[ut]),Ne((()=>{I(gt,ut)}),[gt]),Ne((()=>{Ft(z)}),[z,N]),Ne((()=>{if(de&&_&&M>0){const e=b(M,gt),t=f(ut,e);ut!==t&&Ft(t)}}),[M]),r.useEffect((()=>{xt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:qe})}),[x,qe]),r.useEffect((()=>{if(!P)return;const e=Pt.filter((e=>P(e))),t=x?e.slice(0,1):e;xt({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:t,totalRows:Pt.length,mergeSelections:vt})}),[t,P]);const At=S?kt:Pt,_t=yt||x||v;return r.createElement(n.ThemeProvider,{theme:Et},!ae&&(!!a||!!i)&&r.createElement(he,{title:a,actions:i,showMenu:!fe,selectedCount:ft,direction:et,contextActions:we,contextComponent:xe,contextMessage:me}),ce&&r.createElement(ye,{align:ge,wrapContent:ue},pe),r.createElement(Re,Object.assign({responsive:J,fixedHeader:le,fixedHeaderScrollHeight:ie},Ot),r.createElement(Ee,null,Q&&!ee&&r.createElement(Se,null,X),r.createElement(R,{disabled:ne,className:"rdt_Table",role:"table"},!oe&&(!!ee||Pt.length>0&&!Q)&&r.createElement(E,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:le},r.createElement(O,{className:"rdt_TableHeadRow",role:"row",dense:m},h&&(_t?r.createElement($,{style:{flex:"0 0 48px"}}):r.createElement(se,{allSelected:bt,selectedRows:pt,selectableRowsComponent:D,selectableRowsComponentProps:H,selectableRowDisabled:k,rowData:At,keyField:s,mergeSelections:vt,onSelectAllRows:Ht})),Ce&&!Le&&r.createElement(Oe,null),nt.map((e=>r.createElement(re,{key:e.id,column:e,selectedColumn:mt,disabled:Q||0===Pt.length,pagination:de,paginationServer:_,persistSelectedOnSort:Ct,selectableRowsVisibleOnly:S,sortDirection:ht,sortIcon:He,sortServer:Fe,onSort:Dt,onDragStart:at,onDragOver:rt,onDragEnd:st,onDragEnter:lt,onDragLeave:it,draggingColumnId:ot}))))),be&&r.createElement(E,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:le},r.createElement(O,{className:"rdt_TableHeadRow",role:"row",dense:m},be)),!Pt.length&&!Q&&r.createElement(Pe,null,te),Q&&ee&&r.createElement(Se,null,X),!Q&&Pt.length>0&&r.createElement(ve,{className:"rdt_TableBody",role:"rowgroup"},kt.map(((e,t)=>{const n=d(e,s),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=w(e,pt,s),l=!!(Ce&&Be&&Be(e)),i=!!(Ce&&_e&&_e(e));return r.createElement(Z,{id:o,key:o,keyField:s,"data-row-id":o,columns:nt,row:e,rowCount:Pt.length,rowIndex:t,selectableRows:h,expandableRows:Ce,expandableIcon:F,highlightOnHover:u,pointerOnHover:p,dense:m,expandOnRowClicked:Me,expandOnRowDoubleClicked:We,expandableRowsComponent:Ie,expandableRowsComponentProps:Ae,expandableRowsHideExpander:Le,defaultExpanderDisabled:i,defaultExpanded:l,expandableInheritConditionalStyles:Ge,conditionalRowStyles:Ye,selected:a,selectableRowsHighlight:C,selectableRowsComponent:D,selectableRowsComponentProps:H,selectableRowDisabled:k,selectableRowsSingle:x,striped:g,onRowExpandToggled:j,onRowClicked:jt,onRowDoubleClicked:Tt,onSelectedRow:$t,draggingColumnId:ot,onDragStart:at,onDragOver:rt,onDragEnd:st,onDragEnter:lt,onDragLeave:it})})))))),Rt&&r.createElement("div",null,r.createElement(St,{onChangePage:Ft,onChangeRowsPerPage:It,rowCount:M||Pt.length,currentPage:ut,rowsPerPage:gt,direction:et,paginationRowsPerPageOptions:B,paginationIconLastPage:G,paginationIconFirstPage:V,paginationIconNext:U,paginationIconPrevious:q,paginationComponentOptions:K})))}));e.STOP_PROP_TAG=U,e.createTheme=function(e="default",t,n="default"){return Xe[e]||(Xe[e]=Je(Xe[n],t||{})),Xe[e]=Je(Xe[e],t||{}),Xe[e]},e.default=et,e.defaultThemes=Xe,Object.defineProperty(e,"__esModule",{value:!0})}));
