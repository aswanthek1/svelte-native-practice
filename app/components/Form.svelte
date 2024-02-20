<script>
    import Header from "~/Header.svelte";

</script>
<page>
    <Header title={'Form'} />
    <stackLayout>
        <flexboxLayout flexDirection="column" justifyContent="center" marginTop="30">
            <label textAlignment="center" width="100%" fontSize="20" fontWeight="600" text="Register" ></label>
            <flexboxLayout flexDirection="column" marginTop="25" justifyContent="center" >
                <textField width="100%" hint="Enter Name" />
                <textField marginTop="20" width="100%" hint="Enter Email" />
                <textField marginTop="20" width="100%" hint="Enter Password" />
                <button text="Submit" backgroundColor="green" marginTop="30" />
            </flexboxLayout>
        </flexboxLayout>
    </stackLayout>
</page>