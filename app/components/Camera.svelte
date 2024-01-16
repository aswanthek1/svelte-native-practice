<script lang="ts">
  import { requestPermissions, takePicture } from "@nativescript/camera";
  import * as camera from "@nativescript/camera";
  import { Image } from "@nativescript/core";
  import * as imagePickerPlugin from "@nativescript/imagepicker";
  import { ImagePicker } from "@nativescript/imagepicker";
  import { Template } from "svelte-native/components";
  import Header from "~/Header.svelte";
  let title = "Camera";
  let image;
  $:selectedImages = [];

  // for selecting images from gallery
  let imagePickerObj: ImagePicker = imagePickerPlugin.create({
    mode: "multiple",
  });

  const chooseImage = () => {
    try {
      imagePickerObj.authorize().then((authResult) => {
        if (authResult.authorized) {
          return imagePickerObj.present().then((selection) => {
            console.log(selection.length, "selection is");
            selection.forEach((selected) => {
              // console.log(selected, "selected")
              // image = selected.asset;
              // this.type = selected.type;
              // this.filesize = selected.filesize;
              image = new Image();
              image.src = selected.asset;
              // console.log('choosed image', image.src)
              selectedImages.push(image);
            });
          });
        } else {
          console.log("not authorized");
        }
      });
    } catch (error) {
      console.log("[Error]=> choose image", error);
    }
  };

  // taking photo by camera
  const options: camera.CameraOptions = {
    height: 300,
    width: 300,
    keepAspectRatio: true,
    saveToGallery: true,
  };

  const handleCamera = () => {
    requestPermissions().then(
      function success() {
        // permission request accepted or already granted
        // ... call camera.takePicture here ...
        console.log("success");
        const isAvailable = camera.isAvailable();
        if (isAvailable) {
          takePicture(options)
            .then((imageAsset) => {
              image = new Image();
              image.src = imageAsset;
              selectedImages.push(image)
            })
            .catch((error) => {
              console.log("Error -> " + error);
            });
        }
      },
      function failure() {
        // permission request rejected
        // ... tell the user ...
        console.log("failure");
      },
    );
  };
</script>

<page>
  <Header {title} />
  <stackLayout class="camera_container">
    <button text="Take picture" on:tap={handleCamera} />
    <button text="Select from gallery" on:tap={chooseImage} />

    <!-- <flexboxLayout flexWrap="wrap" justifyContent="center"  > -->
    <!-- {#each selectedImages as item }
      <image
            src={item && item?.src
              ? item?.src
              : "https://svelte-native.technology/media/todoapp/todo-add-item.png"}
            class="image_class"
            height="250"
          />
      {/each} -->
      {#if selectedImages.length > 0}
      <listView class="list_view" items={selectedImages} >
        <Template let:item={image}>
          <!-- <flexboxLayout flexWrap="wrap" justifyContent="center"> -->
            <image
              src={image && image?.src
                ? image?.src
                : "https://svelte-native.technology/media/todoapp/todo-add-item.png"}
              class="image_class"
              height="250"
            />
          <!-- </flexboxLayout> -->
        </Template>
      </listView>
      {:else}
          <label marginTop="100" color="black" textAlignment="center" fontSize="20" text="No images selected"  />
      {/if}
    
  </stackLayout>
</page>

<style>
  .camera_container {
    padding: 10px;
    background-color: white;
  }
  .image_class {
    max-height: 100px;
    margin: 20px;
  }

  .list_view {
    display: flex;
    flex-wrap: wrap;
  }
</style>
