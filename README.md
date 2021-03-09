Realtime Vehicle Tracking from Spatiotemporal Updates
=================

In this repository is a basic html file which allows for consumption from realtime spatiotemporal updates from one of [Ably Hub's](https://www.ably.com/hub) vehicle position sources. 

It makes use of Mapbox for rendering the data, and [Ably's JS client library](https://www.github.com/ably/ably-js) for connecting to Ably. The spatiotemporal data sent from Ably is then interpolated on the client.

To use this, simply replace the `ABLY_API_KEY` and `MAPBOX_API_KEY` with the keys from [Ably](https://www.ably.com/accounts/any/apps/any/app_keys) and [Mapbox](https://docs.mapbox.com/help/getting-started/access-tokens/) respectively. Load the html page in a browser and you're good to go!

Currently this does not have adaptive channel subscriptions based on current zoom/position on the map, but you can adjust what product and channel you're listening to.