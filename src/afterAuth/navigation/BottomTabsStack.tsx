import  AnnouncementDisplay from '../components/announcementDisplay';
import ImageUploadScreen from '../screens/imageUpload/imageUploadScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import navigationStrings from '../../constants/navigationStrings';

const Stack = createNativeStackNavigator();

const BottomTabsStack = () => {
    return (

        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={navigationStrings.BOTTOM_TABS}
            component={BottomTabs}
          />
          <Stack.Screen
            name={navigationStrings.ANNOUNCEMENT_DISPLAY}
            component={AnnouncementDisplay}
          />
          <Stack.Screen
            name={navigationStrings.IMAGE_UPLOAD}
            component={ImageUploadScreen}
          />
        </Stack.Navigator>
  
      )
}

export default BottomTabsStack ;
