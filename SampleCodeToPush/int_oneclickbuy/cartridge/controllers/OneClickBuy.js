'use strict';
/**
 * Controller that provides functions for rendering profile completion form
 * And related functions for the One click buy feature
*
* @module  controllers/OneClickBuy
*/
/* API Includes */
const ArrayList = require('dw/util/ArrayList');
const Transaction = require('dw/system/Transaction');
const Resource = require('dw/web/Resource');
const URLUtils = require('dw/web/URLUtils');
const PaymentInstrument = require('dw/order/PaymentInstrument');
const CSRFProtection = require('dw/web/CSRFProtection');

/* Script Modules */
const app = require('*/cartridge/scripts/app');
const guard = require('*/cartridge/scripts/guard');
const Response = require('*/cartridge/scripts/util/Response');



/**
 * Checks whether a customer is eligible for one click buy option or not
 * @return {void}
 */
 function showBuyNowButton() {
	
}

/**
 *  Renders the buy now button on PDP based on customer is eligible for one click buy or not
 *  @see module:controllers/Product~showBuyNowButton
 */

 exports.ShowBuyNow = guard.ensure(['get'], showBuyNowButton);