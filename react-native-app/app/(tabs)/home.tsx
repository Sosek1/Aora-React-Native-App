import { View, Text } from "react-native";
import React from "react";

import CustomButton from "../../components/CustomButton";
import { signOut } from "../../lib/appwrite";

const Home = () => {
  const signOutHandler = () => {
    signOut();
  };

  return (
    <View className="justify-center h-[85vh] bg-primary">
      <CustomButton
        title="Sign out"
        handlePress={signOutHandler}
        isLoading={false}
      ></CustomButton>
    </View>
  );
};

export default Home;
