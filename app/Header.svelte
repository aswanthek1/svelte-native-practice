<actionBar class="action_bar" title="">
    <label text="{title}" on:tap={toggleDrawer} />
</actionBar>

<script lang="ts" >
    import {toggleDrawer} from './Nav'
    export let title:string = ''
</script>