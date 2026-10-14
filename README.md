# Tail Wagging commercial acceptance fixture

Synthetic public repository for testing the complete authorised commercial workflow. No customer source or credentials belong here.

The intentional baseline defect is in `src/greet.mjs`. The requested repair is to return exactly `Hello commercial fulfilment.`. Only that source file may change; tests and the independent check workflow must remain unchanged.

A green pull-request check is necessary but does not establish that a Stripe test purchase or fulfilment order has completed.
