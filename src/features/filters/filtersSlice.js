const initialstate = {
  filters:{
    status:'All',
    colors:[],
  }
}

export default function filtersReducer(state = initialstate, action) {
  switch(action.type){
    case 'filters/statusFilterChanged' : {
      return {
        ...state,
        status: action.payload
      }
    }
    default : 
    return state
  }
}