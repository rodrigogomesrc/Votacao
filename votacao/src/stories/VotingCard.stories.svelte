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


<Story
  name="VotingCard2"
  args={{
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
    ],
    title: "Segue o relator?",
    state: "open"
  }}
/>


<Story
  name="VotingCard2"
  args={{
     options: [
        {text: "Opção A", count: 12},
        {text: "Opção B", count: 4},
        {text: "Opção C", count: 5},
        {text: "Opção D", count: 7},
    ],
    title: "Qual é a melhor opção?",
    state: "open"
  }}
/>