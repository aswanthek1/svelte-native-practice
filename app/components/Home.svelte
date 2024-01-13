<page>
    <actionBar class="action_bar"  title="Home" />
    <!-- <gridLayout class="layout">
        <label class="info">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span class="message" text=" {message}" />
            </formattedString>
        </label>
    </gridLayout> -->
    <scrollView orientation="vertical">
    <stackLayout paddingLeft="10" paddingRight="10">
        <absoluteLayout paddingBottom="10" marginBottom="20" class="layout">
            <!-- absolute layout works like position absolute -->
            <label class="message" color="black" text="Absolute Layout" top="10"/>
            <label class="boxes" text="10,10" left="10" top="40" width="100" height="100" backgroundColor="#286290"/>
            <label class="boxes" text="30,40" left="110" top="140" width="100" height="100" backgroundColor="#4383b8"/>
            <label class="boxes" text="30,40" left="210" top="240" width="100" height="100" backgroundColor="#4383b8"/>
        </absoluteLayout>

        <dockLayout height="400" marginBottom="20" class="layout" stretchLastChild="false">
            <label class="message" color="black" dock="top" text="Dock Layout"/>
            <label text="left" dock="left" width="50" backgroundColor="#4383b8"/>
            <label text="top" dock="top" height="50" backgroundColor="#286290"/>
            <label text="right" dock="right" width="50" backgroundColor="#4383b8"/>
            <label text="bottom" dock="bottom" height="50" backgroundColor="#286290"/>
        </dockLayout>

        <flexboxLayout  class="layout flex_layout" marginBottom="20" flexDirection="row" flexWrap="wrap" alignItems="center" >
                <label class="message" color="black" text="FlexBox Layout"/>
                <label text="first" width="100" height="100" backgroundColor="#4383b8" margin="10"/>
                <label text="second" width="100" height="100" backgroundColor="#1c486b"  margin="10"/>
                <label text="third" width="100" height="100" backgroundColor="#286290"  margin="10"/>
                <label text="third" width="100" height="100" backgroundColor="#1c486b"  margin="10"/>
                <label text="third" width="100" height="100" backgroundColor="#4383b8" margin="10"/>
        </flexboxLayout>

        <label class="message" background="white" color="black" text="Grid Layout"/>
        <gridLayout class="layout grid_layout" marginBottom="20" columns="120, 120, 120, 120" rows="120, 120, 120" >
            <label margin="10" text="0,0" row="0" col="0" backgroundColor="#4383b8"/>
            <label margin="10" text="0,1" row="0" col="1" backgroundColor="#1c486b"/>
            <label margin="10" text="0,1" row="0" col="2" backgroundColor="red"/>
            <label margin="10" text="1,0" row="1" col="0" backgroundColor="#286290"/>
            <label margin="10" text="1,1" row="1" col="1" backgroundColor="#4383b8"/>
            <label margin="10" text="1,1" row="2" col="0" backgroundColor="green"/>
        </gridLayout>

        <gridLayout class="layout" columns="*, *" rows="*, *" marginBottom="20">
            <label class="message" background="white" colSpan="0" rowSpan="0" color="black" text="Grid Layout"/>
            <label text="0,0" margin="10" height="100" row="0" col="0" backgroundColor="#4383b8"/>
            <label text="0,1" margin="10" height="100" row="0" col="1" backgroundColor="#1c486b"/>
            <label text="1,0" margin="10" height="100" row="1" col="0" backgroundColor="#286290"/>
            <label text="1,1" margin="10" height="100" row="1" col="1" backgroundColor="#4383b8"/>
        </gridLayout>
    </stackLayout>
</scrollView>
</page>

<script lang="ts">
    let message: string = "Blank Svelte Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        /* horizontal-align: center; */
        text-align: center;
        vertical-align: middle;
    }

    .message {
        color: black;
        width: 100%;
        text-align: center;
        font-size: medium;
        font-weight: 600;
        text-decoration: underline;
    }
    .action_bar {
        background-color: rgb(69, 67, 67);
        box-shadow: 1px 10px 15px;
    }

    .layout {
        background-color: white;
    }
    .boxes {
        box-shadow: 1px 1px 50px;
        text-align: start;
    }

    .flex_container {
        width: 100%;
        background-color: red;
    }

    .flex_layout {
        gap: 10px;
    }

    .grid_layout {
        /* width: 50%; */
    }
</style>
