import { Text, Alert, StyleSheet, View, Button, TextInput } from "react-native";

import React, { useState } from "react";
import { supabase } from "../../services/supabase";

const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("error", error);
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          className="block w-full h-12 px-4 text-black bg-white border border-gray-300 rounded-full shadow-sm sm:text-sm"
          value={email}
          onChangeText={(text: any) => setEmail(text)}
          placeholder="Email"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          className="block w-full h-12 px-4 text-black bg-white border border-gray-300 rounded-full shadow-sm sm:text-sm"
          value={password}
          onChangeText={(text: any) => setPassword(text)}
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});

export default SignIn;
