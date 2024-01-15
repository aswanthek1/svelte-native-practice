import RadSideDrawerElement from "svelte-native-nativescript-ui/sidedrawer";

let drawer:RadSideDrawerElement;

export function init(navDrawer:RadSideDrawerElement) {
    drawer = navDrawer
}

export const toggleDrawer = () => {
    console.log('clicked ata')
    drawer.toggleDrawerState()
}