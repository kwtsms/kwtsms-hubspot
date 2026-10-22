# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - Unreleased

### Docs
- Test mode: test messages are queued but not delivered; their credits are held until you delete them from the Sending Queue
- ERR028 action key is now `wait_and_retry` (was `wait_15_seconds`): duplicate SMS protection is opt-in per account with a configurable window (10 seconds by default)

### Added
- kwtSMS gateway integration (send, balance, senderid, coverage, validate)
- HubSpot workflow action: "Send SMS via kwtSMS" with English and Arabic labels
- CRM card: SMS panel on contact records with quick send and history
- Phone number normalization (Arabic digits, prefixes, spaces, dashes)
- Message text cleaning (emoji, hidden chars, HTML stripping)
- SMS logging with full API response storage
- Gateway settings with test connection feature
- Test mode support (sends to API with test=1)
- Daily balance, sender ID, and coverage sync
- Dashboard with gateway status and SMS statistics
- Help page with setup guide and support links
