
/**
 * Import modules
 */

var Diagnostics = require('Diagnostics')
var Scene = require('Scene')
var TouchGestures = require('TouchGestures')
var Patches = require('Patches')

// Grab our variable value from the patch
var ourVar = Patches.getStringValue('helloString')


var numberOfBubbles = 8;

// Setup loop that will iterate over the number of bubbles
for (let i = 1; i < numberOfBubbles; i++) {   

    // Get a single bubble from the scene
    var currentBubble = Scene.root.find(`bubbles_${i}`)

    // Setup a tap event on that bubble
    TouchGestures.onTap(currentBubble).subscribe((e) => {

        // Find bubble we tapped and hide it
        Scene.root.find(`bubbles_${i}`).hidden = true;

        // Log our last value on tap
        Diagnostics.log(ourVar.pinLastValue())
        
    });
  
}

