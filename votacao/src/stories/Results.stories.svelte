<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Results from "../Components/Results.svelte";

</script>
  
<Meta
  title="Results"
  component={Results}
  argTypes={{
    options: {Control: "array"}
  }}
/>

<Template let:args>
    <Results {...args} />
</Template>

<Story
  name="Results1"
  args={{
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
    ],
  }}
/>

<Story
  name="Results2"
  args={{
    options: [
        {text: "Sim", count: 12},
        {text: "Não", count: 4},
    ],
  }}
/>

<Story
  name="Results3"
  args={{
    options: [
        {text: "Opção A", count: 12},
        {text: "Opção B", count: 4},
        {text: "Opção C", count: 5},
        {text: "Opção D", count: 7},
    ],
  }}
/>


