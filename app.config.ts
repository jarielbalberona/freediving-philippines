import { ExpoConfig, ConfigContext } from "@expo/config";
import * as dotenv from "dotenv";

// initialize dotenv
dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Freediving",
  version: "1.0.2",
  slug: "freediving",
  description:
    "Connect with fellow freedivers, find buddies, training centers, and diving spots in the Philippines",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "freediving",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/fdce503b-bd85-46c4-a225-42c6dceeff82",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.jarielbalberona.freediving",
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#ffffff",
    },
    versionCode: 4,
    package: "com.jarielbalberona.freediving",
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    eas: {
      projectId: "75c1a6d7-fde6-4ab8-b29a-f7f0ba7d668d",
    },
    apiUrl: process.env.API_URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
  },
  owner: "jarielbalberona",
  runtimeVersion: {
    policy: "sdkVersion",
  },
});
