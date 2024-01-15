
<script>
  import Home from "./components/Home.svelte";
  import { navigate } from "svelte-native";
  import CameraScreen from "./components/Camera.svelte";
  import Header from "./Header.svelte";
  import * as nav from './Nav'
    import { onMount } from "svelte";

 export let drawer;

 onMount(() => {
    nav.init(drawer)
 })

  function close(page) {
      navigate({ page });
    drawer.closeDrawer();
  }

  const closeDrawer = () => drawer.closeDrawer();
</script>

<stackLayout>
<radSideDrawer bind:this={drawer}>
  <radSideDrawer.drawerContent>
    <stackLayout padding="10">
      <flexboxLayout justifyContent="space-between">
        <label class="side_bar_heading" text="App" />
        <label class="side_bar_heading" text="X" on:tap={closeDrawer} />
      </flexboxLayout>
      <stackLayout class="links_container" >
        <label on:tap={() => close(CameraScreen)} class="side_menu" text="Camera" />
      </stackLayout>
    </stackLayout>
  </radSideDrawer.drawerContent>
  <radSideDrawer.mainContent>
    <frame>
        <page>
          <!-- <actionBar class="action_bar">
            <label text="Nav" on:tap={() => drawer.toggleDrawerState()} />
          </actionBar> -->
          <Header title="Home" />
        <Home />
      </page>
    </frame>
  </radSideDrawer.mainContent>
</radSideDrawer>
</stackLayout>

<style>

  .side_bar_heading {
    font-size: 20px;
    font-weight: 800;
  }

  .side_menu {
    font-size: 15px;
    font-weight: 400;
  }

  .links_container {
    margin-top: 55px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>
