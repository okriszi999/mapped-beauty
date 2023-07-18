import Input from "@src/components/input";
import { colors } from "@src/data/colors";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerForm = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type RegisterForm = z.infer<typeof registerForm>;

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerForm),
  });
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  function onSubmit(data: RegisterForm) {
    console.log(
      `Username: ${data.username}, Email: ${data.email}, Password: ${data.password}`
    );
  }
  return (
    <View className="h-screen w-full bg-primary flex items-center justify-between">
      <View className="w-full h-1/3 flex items-center justify-center rounded">
        <Text className="text-4xl text-primary-content">REGISTER</Text>
      </View>
      <View className="w-full h-full flex  bg-blue-50 px-14 py-7 rounded-t-3xl z-20">
        <Text className="text-3xl text-primary font-bold">Register</Text>
        <Text className="text-sm text-primary-focus mb-16">
          and be a part of the community
        </Text>
        <Controller
          control={control}
          name="register"
          render={() => (
            <View>
              {errors.username && (
                <Text className="text-red-500">Need username </Text>
              )}
              {errors.email && (
                <Text className="text-red-500">Need email </Text>
              )}
              {errors.password && (
                <Text className="text-red-500">Need password </Text>
              )}
              <View className="flex mb-2">
                <Input
                  {...register("username")}
                  label="Username"
                  placeholder="SalamiQueen12"
                  keyboardType="default"
                />
                <Input
                  {...register("email")}
                  label="Email"
                  placeholder="example@demo.com"
                  keyboardType="email-address"
                />
                <Input
                  {...register("password")}
                  label="Password"
                  placeholder="********"
                  keyboardType="email-address"
                  secureTextEntry={true}
                />
              </View>

              <View className="flex flex-row gap-2 items-center mb-2 justify-center">
                <Checkbox
                  color={colors.primary.DEFAULT}
                  value={termsAndConditions}
                  onValueChange={setTermsAndConditions}
                />
                <Text>
                  I accept the{" "}
                  <Text className="text-primary underline">
                    terms and conditions
                  </Text>
                </Text>
              </View>
              <View className="flex items-center justify-center">
                <TouchableOpacity
                  disabled={!termsAndConditions}
                  className={` px-12 py-2 rounded-full ${
                    !termsAndConditions
                      ? "bg-primary-focus opacity-75"
                      : "bg-primary"
                  }`}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text className="text-primary-content text-2xl">
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></Controller>

        <View className="flex justify-center items-center">
          <View className="flex flex-row item-center w-full my-2 justify-center">
            <View className="border-b-2 border-primary w-4 h-0 mt-2"></View>
            <Text className="mx-2 text-primary font-bold">or</Text>
            <View className="border-b-2 border-primary w-4 h-0 mt-2"></View>
          </View>

          <Link href="authentication/login" asChild>
            <TouchableOpacity>
              <Text className="text-primary text-lg underline">Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
