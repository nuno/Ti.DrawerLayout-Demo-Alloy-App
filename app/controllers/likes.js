var args = arguments[0] || {};

/**
 * Simple Alert
 */
function doAlert (e) {
	Ti.UI.createOptionDialog({
    message: e.source.text,
    ok: 'Okay',
    title: 'AlertDialog'
  }).show();
}

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  if (e.actionBar) {
    e.actionBar.title = "Likes";
  }
}

/**
 * Cleans up the controller
 * 
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
function destroy() {
  $.off();
}

/**
 * Initializes the controller
 */
function init() {

  $.on('createOptionsMenu', onCreateOptionsMenu);

}

// PUBLIC
exports.destroy = destroy;
exports.init = init;