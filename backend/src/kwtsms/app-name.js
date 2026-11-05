/**
 * FILE:      backend/src/kwtsms/app-name.js
 * CREATED:   2026-11-05 14:59 +03
 * TASK:      #939
 * AUTHOR:    M Alhassoun
 * WHAT:      The app token "kwtsms-hubspot/<version>" passed to the kwtsms library as appName.
 * WHY:       kwtSMS counts accounts per integration from the User-Agent (name and version only,
 *            no personal data). One place, so every KwtSMS client sends the same token.
 * USAGE:     const { APP_NAME } = require('../kwtsms/app-name');
 *            new KwtSMS(user, pass, { ..., appName: APP_NAME })
 * DEPENDS:   backend/package.json "version". kwtsms library with appName support; older
 *            versions ignore the option and send their own User-Agent only.
 */

const { version } = require('../../package.json');

const APP_NAME = `kwtsms-hubspot/${version}`;

module.exports = { APP_NAME };
