webpackJsonp([0,2],{0:function(t,e,n){n("fuAh"),t.exports=n("lVK7")},VTUT:function(t,e){},YCZr:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){try{var e=t.split("/")[2].split(",");return e.map(function(t){var e=t.split("-"),n=e[0],o=e[1],r=e[2];return{lineid:n,direction:o,stopid:r}})}catch(t){return!1}}e.__esModule=!0,e.default=void 0,n("VTUT");var a=n("EF6w"),c=n("4t7O"),p=o(c),f=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return s(e,t),e.prototype.componentDidMount=function(){var t=u(window.location.hash);t&&this.setState({stopLines:t})},e.prototype.render=function(t,e){return h("div",{className:"App"},e.stopLines||h("span",null,"Loading..."),e.stopLines&&e.stopLines.map(function(t){return h(p.default,{data:t})}))},e}(a.Component);e.default=f,t.exports=e.default},uY7q:function(t,e){},"4t7O":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var s=n("EF6w"),u=n("VTQS");n("uY7q");var a=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.data,n=e.lineid,o=e.direction,r=e.stopid;(0,u.fetchBusLine)(n).then(function(e){return t.setState({buslines:e.data,currentLine:o?e.data.lineResults0:e.data.lineResults1})}),(0,u.fetchBusStop)(n,o,r).then(function(e){return t.setState({bus:e.data})})},e.prototype.renderBusActivity=function(t){if(t){var e=t.terminal,n=t.stopdis,o=t.time;return e+" 还有"+n+"站，约"+parseInt(o/60,10)+"分钟"}return this.state.bus?"等待发车":"更新线路信息……"},e.prototype.render=function(t,e){var n=t.data,o=n.lineid,r=n.stopid,i=e.currentLine&&e.currentLine.stops[r-1],s=e.bus&&e.bus.cars[0];return h("div",{className:"stopline-panel"},h("div",{className:"title-row"},h("div",{className:"line-name"},o),h("div",{className:"stop-name"},i&&i.zdmc)),h("div",{className:"state-row"},this.renderBusActivity(s)))},e}(s.Component);e.default=a,t.exports=e.default},VTQS:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){var e="https://busline.now.sh/sh/line?line="+t;return u.default.get(e)}function i(t,e,n){var o="https://busline.now.sh/sh/stop?line="+t+"&direction="+e+"&stop="+n;return u.default.get(o)}e.__esModule=!0,e.fetchBusStop=e.fetchBusLine=void 0;var s=n("mtWM"),u=o(s);e.fetchBusLine=r,e.fetchBusStop=i},cilB:function(t,e){},lVK7:function(t,e,n){"use strict";function o(){var t=n("YCZr");i=(0,r.render)((0,r.h)(t,null),document.querySelector("#app"),i)}n("cilB");var r=n("EF6w");window.h=r.h;var i=void 0;o()}});
//# sourceMappingURL=app.8c466e1a.js.map