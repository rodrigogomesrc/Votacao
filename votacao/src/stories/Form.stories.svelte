<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Form from "../Components/Form.svelte";
</script>

<Meta
  title="Form"
  component={Form}
  argTypes={{
   
  }}
/>

<Template let:args>
    <Form {...args} />
</Template>

<Story
  name="Form1"
  args={{
   
  }}
/>