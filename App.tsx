import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";
import { ReactionProvider } from "react-native-reactions";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReactionProvider>
        <SafeAreaProvider className="mt-6">
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ReactionProvider>
    );
  }
}
