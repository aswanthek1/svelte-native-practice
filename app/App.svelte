
<script>
  import Home from "./components/Home.svelte";
  import { navigate } from "svelte-native";
  import CameraScreen from "./components/Camera.svelte";
  import * as nav from './Nav'
  import { onMount } from "svelte";
  import TodoApi from "./components/TodoApi.svelte";
    import Form from "./components/Form.svelte";

 export let drawer;

 onMount(() => {
    nav.init(drawer)
 })

  function close(page) {
    drawer.closeDrawer();
      navigate({ page });
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
          <label on:tap={() => close(Home)} class="side_menu" text="Home" />
          <label on:tap={() => close(CameraScreen)} class="side_menu" text="Camera" />
          <label on:tap={() => close(TodoApi)} class="side_menu" text="Todo Api" />
          <label on:tap={() => close(Form)} class="side_menu" text="Form" />
      </stackLayout>
    </stackLayout>
  </radSideDrawer.drawerContent>
  <radSideDrawer.mainContent>
    <frame backgroundColor="white">
        <Home />
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
    font-size: 18px;
    font-weight: 400;
    margin-top: 40px;
  }

  .links_container {
    margin-top: 75px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>
