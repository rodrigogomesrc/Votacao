<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Booth from "../Components/Booth.svelte";

</script>
  
<Meta
  title="Booth"
  component={Booth}
  argTypes={{
    options: {Control: "array"}
  }}
/>

<Template let:args>
    <Booth {...args} />
</Template>

<Story
  name="Booth1"
  args={{
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
    ],
  }}
/>
