/**
 * FILE:      backend/src/middleware/rate-limit.js
 * CREATED:   2026-11-08 16:05 +03
 * TASK:      hubspot-rate-limit (CodeQL js/missing-rate-limiting on settings and SMS routes)
 * AUTHOR:    M Alhassoun
 * WHAT:      Request limits per HubSpot portal for the settings routes (gateway login, sync) and the SMS routes.
 * WHY:       Without a limit one portal (or a script) can hammer the kwtSMS login and send endpoints through us.
 * USAGE:     app.use('/api/sms', requirePortalId, smsLimiter, ...) - after requirePortalId so req.portalId is set.
 * DEPENDS:   express-rate-limit.
 *
 * Keyed by portal ID, not IP: the backend sits behind a tunnel, so every request has the same IP.
 */

const { rateLimit, ipKeyGenerator } = require('express-rate-limit');

const keyByPortal = (req) => (req.portalId ? `portal:${req.portalId}` : ipKeyGenerator(req.ip || ''));

const settingsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 60,
  keyGenerator: keyByPortal,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a few minutes and try again.' },
});

const smsLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  keyGenerator: keyByPortal,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many SMS requests. Please wait a minute and try again.' },
});

module.exports = { settingsLimiter, smsLimiter };
