import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { HeaderComponent } from "../components/headerComponent";


export const AttendanceAndBonusScreen = ({ navigation, screenName }: any) => {
  const [selected, setSelected] = useState('');
  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="근태/연차/수당관리" />
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedColor: 'blue' }
        }}
      />
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({

});