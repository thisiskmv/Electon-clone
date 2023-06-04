const initial={
    theme:"light"
}

export const themeReducer=(state=initial,action)=>{
   switch(action.type){
    case "themeChange":
        return{
            theme:action.payload
        }
    default: return state    
   }
}