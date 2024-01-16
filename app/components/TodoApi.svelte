<script>
  import { onMount } from "svelte";
  import { Template } from "svelte-native/components";
  import Header from "~/Header.svelte";

  $: todos = [];
  $: loading = false;

  onMount(async () => {
    console.log("Inside mount");
    await fetchTodo();
    // Process the fetched data
  });

  const fetchTodo = async () => {
    try {
      loading = true;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      todos = await response.json();
      loading = false;
      //   console.log(data, "data");
    } catch (error) {
      console.log("Api errro", error);
      loading = false;
    }
  };
</script>

<page>
  <Header title={"Todo Api"} />
  <!-- <stackLayout> -->
  {#if loading}
    <flexboxLayout justifyContent="center" alignItems="center" height="100%" backgroundColor="white" >
        <!-- <label color="black" text="loading..." /> -->
        <!-- <progress height="30" width="60%" value="{1000}" /> -->
        <activityIndicator busy="{loading}" />
    </flexboxLayout>
  {:else}
    <listView items={todos}>
      <Template let:item={todo}>
        <flexboxLayout>
          <label>
            <formattedString>
              <span text={todo.id} />
              <span class="title" text="       {todo.title}" />
            </formattedString>
          </label>
        </flexboxLayout>
      </Template>
    </listView>
  {/if}
  <!-- </stackLayout> -->
</page>

<style>
  .title {
    word-break: break-all;
    max-width: 100%;
  }
</style>
