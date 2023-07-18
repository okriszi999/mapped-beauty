import { colors } from "@src/data/colors";
import { useEffect, useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as device from "expo-device";

import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Input from "@src/components/input";

export default function Login() {
  return (
    <View className="h-screen bg-primary flex items-center justify-between">
      <View className="w-full h-1/3 flex items-center justify-center rounded">
        <Text className="text-4xl text-primary-content">MAPPED-BEAUTY</Text>
      </View>
      <View className="w-full h-full flex  bg-blue-50 px-14 py-7 rounded-t-3xl z-20">
        <Text className="text-3xl text-primary font-bold">Log in</Text>
        <Text className="text-sm text-primary-focus mb-16">
          and start finding your new look
        </Text>
        <View className="flex">
          <Input
            label="Email"
            placeholder="example@demo.com"
            keyboardType="email-address"
          />
          <Input
            label="Password"
            placeholder="********"
            keyboardType="email-address"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity className="mb-3">
          <Text className="text-primary opacity-70 text-right text-sm underline">
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View className="flex justify-center items-center">
          <TouchableOpacity className="bg-primary px-12 py-2 rounded-full">
            <Text className="text-primary-content text-2xl">Login</Text>
          </TouchableOpacity>

          <View className="flex flex-row item-center w-full my-2 justify-center">
            <View className="border-b-2 border-primary w-4 h-0 mt-2"></View>
            <Text className="mx-2 text-primary font-bold">or</Text>
            <View className="border-b-2 border-primary w-4 h-0 mt-2"></View>
          </View>

          <Link href="authentication/register">
            <TouchableOpacity>
              <Text className="text-primary text-lg underline">Register</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="flex flex-row item-center w-full my-5">
          <View className="border-b-2 border-primary flex-grow h-0 mt-2"></View>
          <Text className="mx-2 text-primary font-bold">Other options</Text>
          <View className="border-b-2 border-primary flex-grow h-0 mt-2"></View>
        </View>

        <View className="flex flex-row w-full items-center justify-evenly">
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={32} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="logo-google"
              size={32}
              color={colors.primary.DEFAULT}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="logo-twitter" size={32} color="#26a7de" />
          </TouchableOpacity>

          {device.osName === "iOS" && (
            <TouchableOpacity>
              <Ionicons name="logo-apple" size={32} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
