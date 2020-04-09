export const candidateDataReducer = (state, action) => {
    switch (action.type) {
      case "SHOWMODAL":         
        return{
            ...state,
            showModal: true
        }
      case "TOGGLEMODAL":
          return{
              ...state,
              showModal: !state.showModal
          }
      case "ONCHANGE":
        console.log(action);
        console.log(action.payload)
        const { name, value } = action.payload;
        return {
          ...state,
          [name]: value
        };
      case "BUY_ITEM":
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.item.price,
          car: { ...state.car, features: [...state.car.features, action.item] },
          store: state.store.filter((x) => x.id !== action.item.id)
        }
      default:
        return state;
    }
}