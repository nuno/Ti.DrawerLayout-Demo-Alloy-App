/**
 * MenuRow Controller
 * 
 * represents a menu item
 * 
 * @class controllers.menuRow
 */

var args = arguments[0] || {};

/**
 * Initializes the row controller
 */
function init() {
  
  // set title
  $.menurow.title = args.title;
  
  // bind info about associated controller
  $.menurow.controller = args.controller;

}

/**
 * Sets the row (in-)active
 * Called by menu
 * @param {Boolean} active
 */
$.menurow.setActive = function(_active) {
  $.menurow.setBackgroundColor( _active ? "#3F3D3D" : "#212121" );
};

init();