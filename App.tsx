import * as React from "react"
import SplashScreen from 'react-native-splash-screen';
import { Provider } from "react-redux";
import { store } from "./Global";
import {MainApp} from "./MainApp";
import AuthStack from "./AuthStack";
 
 function App(){

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
    return(
      <Provider store={store} >
        <AuthStack/>
        {/* <MainApp/> */}
       
      </Provider>
    )
  }

 export default App; 