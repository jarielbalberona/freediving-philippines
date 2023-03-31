import { useRoute } from "@react-navigation/native";
import {
  supabase,
  googleSignInWithExpo,
  facebookSignInWithExpo,
} from "@services/supabase";
import React, { useState, useEffect } from "react";
import { Text, Alert, StyleSheet, View, Button, TextInput } from "react-native";

const SignIn = ({ navigation, screen }: any) => {
  const route = useRoute();
  const [username, setUsername] = useState("jarielbalberona");
  const [email, setEmail] = useState("jariel@freediving.ph");
  const [password, setPassword] = useState("Fph1568457291430!");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("screen", screen);
  }, [screen]);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log("error", error);
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signInWithFacebook() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
    console.log("data", data);
    if (error) Alert.alert(error.message);
    console.log("error", error);
    setLoading(false);
  }

  async function signInWithGoogle() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (data) {
      console.log("data", data);
    }

    if (error) Alert.alert(error.message);
    console.log("error", error);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      {screen === "SignUp" ? (
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <TextInput
            className="block w-full h-12 px-4 text-black bg-white border border-gray-300 rounded-full shadow-sm sm:text-sm"
            value={username}
            onChangeText={(text: any) => setUsername(text)}
            placeholder="username"
            autoCapitalize="none"
          />
        </View>
      ) : (
        <View />
      )}
      <View style={styles.verticallySpaced}>
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
      {screen === "SignIn" ? (
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
      ) : (
        <View style={styles.verticallySpaced}>
          <Button
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View>
      )}
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Google Sign In"
          disabled={loading}
          onPress={() => googleSignInWithExpo()}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Facebook Sign In"
          disabled={loading}
          onPress={() => facebookSignInWithExpo()}
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
