import { reactive, readonly } from 'vue'

const state = reactive({

    formTitle: "titulo de teste aqui?",
    formOptions: [
        {text: "Sim", count: 30},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
      ],
    votingStatus: "open"
})

export default function useStore () {
  return readonly(state)
}

export function setOptions(options){
    state.formOptions = options;
}

export function setVotingState(status){
    state.votingStatus = status;
}

export function setFormTitle(title) {
    state.formTitle = title;
}
