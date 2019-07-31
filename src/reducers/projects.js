export default (state = { projects:[], loading: false}, action) => {
    switch(action.type){

    case "LOADING":
      return {loading: true}

     default:
        return state;
    }
  }
