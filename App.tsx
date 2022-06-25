import { ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./constants/theme";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const { isLoadingComplete, onRootViewLayout } = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider onLayout={onRootViewLayout}>
          <Navigation colorScheme={colorScheme} />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
