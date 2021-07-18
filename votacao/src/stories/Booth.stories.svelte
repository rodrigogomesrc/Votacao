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

<Story
  name="Booth2"
  args={{
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
    ],
  }}
/>


<Story
  name="Booth3"
  args={{
    options: [
        {text: "Opção A", count: 12},
        {text: "Opção B", count: 4},
        {text: "Opção C", count: 5},
        {text: "Opção D", count: 7},
    ],
  }}
/>


