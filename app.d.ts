/// <reference types="nativewind/types" />
declare module "react-native-user-avatar";
declare module "expo-cached-image" {
  import { ImageProps } from "react-native";

  type CachedImageProps = ImageProps & {
    cacheKey?: string;
    placeholderContent?: any;
  };

  export default function (props: CachedImageProps): JSX.Element;
}
