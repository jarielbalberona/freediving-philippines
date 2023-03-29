import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = (props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) => {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  );
};

export default Icon;
