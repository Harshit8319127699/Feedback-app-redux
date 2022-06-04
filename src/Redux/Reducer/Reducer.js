const initialState ={
    feedback:[]
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Addfeedback":
            return {
                ...state,
                feedback: [...state.feedback, action.payload]
            };
        case "Deletefeedback":
        console.log("its working");    
        return {
                ...state,
                feedback: state.feedback.filter(feedback => feedback !== action.payload?feedback.feedback:null)
            };
        default:
            return state;
    }
}


export default feedbackReducer;