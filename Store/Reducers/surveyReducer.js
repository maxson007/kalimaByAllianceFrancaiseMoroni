import {ADD_SURVEY_RESPONSE} from '../../constants/ActionTypes'


const initialState ={
    surveyResponse: {
        languageToLearn: null,
        dialectToLearn: null,
        whyLearnLanguage: null
    }
    };


function surveyReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ADD_SURVEY_RESPONSE:
                nextState = {
                    ...state,
                    surveyResponse:  action.value
                }

            return nextState || state;
        default:
            return state
    }
}

export default surveyReducer
