import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./tab.routes";

import { theme } from "@/theme";

export default function Routes() {
  return (
    <NavigationContainer theme={theme.MyThemeTabs}>
      <TabRoutes />
    </NavigationContainer>
  )
}