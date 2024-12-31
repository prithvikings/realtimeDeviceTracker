# realtimeDeviceTracker
-Check if the browser supports geolocation.

set options for high accuracy, a 5-second timeout, and no caching. Use watchPosition to track the user's location continously. emit the latitude and longitude via a socket with "send-location". log any errors to the console

Inititalize a mpa centered at coordinates(0,0) with a zoom level of 15 using leaflet. and openStreetMap tiles to the map

Create an empty object markers.

when receiving location data via the socket, extract id, latitude, and longitude and center the map on the new coordinates.

if a marker for the id exists, update its position, otherwise, create new marker at given coordinates and add it to the map. when a user disconnects, remove their marker from the map and delete it from markers.