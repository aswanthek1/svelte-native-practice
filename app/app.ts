/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native'
import RadSideDrawerElement from 'svelte-native-nativescript-ui/sidedrawer'
import App from './App.svelte'
// import { registerNativeViewElement } from 'svelte-native/dom'

// registerNativeViewElement("radSidebar", () => require("nativescript-ui-sidedrawer"));



RadSideDrawerElement.register()

svelteNativeNoFrame(App, {})
