import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Skeleton from "@thevsstech/react-native-skeleton";


export const SalaryManagementScreen = ({ navigation, screenName }: any) => {

  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="급여관리" />
      <Skeleton >
        <Skeleton.Item alignItems="center">
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
        </Skeleton.Item>
      </Skeleton>

    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

});