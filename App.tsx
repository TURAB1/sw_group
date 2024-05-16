import * as React from "react"
import SplashScreen from 'react-native-splash-screen';
import { Provider } from "react-redux";
import { store } from "./src/Global";
import AuthStack from "./src/beforeAuth/AuthStack";
 
 function App(){

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
    return(
      <Provider store={store} >
        <AuthStack/>
       
      </Provider>
    )
  }

 export default App; 