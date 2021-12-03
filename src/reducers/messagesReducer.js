const initialState = [
    // { 
    //     name: "Nasro",
    //     content: "roro zozo chechfech"
    // },
    // {
    //     name: "Nasro",
    //     content: "roro zozo One"
    // },

]

export default (state = initialState, { type, messages }) => {
    switch (type) {
        case "setMessages":
            return messages;

        default:
            return state
    }
}