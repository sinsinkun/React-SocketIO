import { createContext, useReducer, useContext, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const initialData = {
  winX:window.innerWidth, 
  winY:window.innerHeight,
  user:"",
  theme:createMuiTheme({
    palette: {
      primary: { main: "#673ab7" },
      secondary: { main: "#2979ff" },
      tertiary: { main: "#1de9b6" }
    }
  })
};

/*! IMPORTANT all your reducer functionality goes here */
const reduceFn = (state, action) => {
  switch (action.do) {
  case "resize":
    return {...state, winX:window.innerWidth, winY:window.innerHeight};
  case "signin":
    return {...state, user:action.name};
  default:
    throw new Error(`Invalid action type: ${action.do}`);
  }
}

const StoreContext = createContext();

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( reduceFn, initialData );

  useEffect(() => {
    // add listeners for window resize
    function handleResize() { dispatch({do:"resize"}) };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      <ThemeProvider theme={state.theme}>
        {props.children}
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

const useStoreContext = function(){ return useContext(StoreContext) };

export { StoreProvider, useStoreContext }