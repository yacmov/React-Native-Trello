import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useObject, useRealm } from "@realm/react";
import { Task } from "@/models/Task";
import { BSON } from "realm";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );

  const realm = useRealm();
  
  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription as string;
    });
  };
  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View className="p-4">
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        className="text-white text-2xl"
      />
    </View>
  );
};

export default TaskDetails;
