<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import VotingCard from "../Components/VotingCard.svelte";

</script>
  
<Meta
  title="VotingCard"
  component={VotingCard}
  argTypes={{
    options: {Control: "array"},
    title:"",
    state: {
      options: ['open', 'closed'],
      control: {type: 'radio'}
    },
  }}
/>

<Template let:args>
    <VotingCard {...args} />
</Template>

<Story
  name="VotingCard1"
  args={{
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
    ],
    title: "Você Concorda?",
    state: "open"
  }}
/>
