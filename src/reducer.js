export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARH_TERM: "SET_SEARH_TERM",
};

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_SEARH_TERM:
            return {
                ...state,
                term: action.term,
            };

        default:
            return state;
    }
};

export default reducer;