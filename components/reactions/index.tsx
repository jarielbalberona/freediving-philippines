import React, { useState, useEffect } from "react";
import { Reaction } from "react-native-reactions";
import { Text, View } from "react-native";

const ReactionItems = [
  {
    id: 0,
    emoji: "✌️",
    title: "like",
  },
  {
    id: 1,
    emoji: "🧜‍♀️",
    title: "mermaid",
  },
  {
    id: 2,
    emoji: "🤙",
    title: "care",
  },
  {
    id: 3,
    emoji: "😍",
    title: "love",
  },
  {
    id: 4,
    emoji: "😂",
    title: "laugh",
  },
  {
    id: 5,
    emoji: "😎",
    title: "cool",
  },
];

const Reactions = ({ item }: any) => {
  const [selectedEmoji, setSelectedEmoji]: any = useState();
  return (
    <View className="my-2 bg-white">
      <Reaction type="modal" items={ReactionItems} onTap={setSelectedEmoji}>
        <Text>{selectedEmoji ? selectedEmoji?.emoji : "🧜‍♀️"}</Text>
      </Reaction>
    </View>
  );
};

export default Reactions;
