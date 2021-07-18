<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Results from "../Components/Results.svelte";

    const options = [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
    ];

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
