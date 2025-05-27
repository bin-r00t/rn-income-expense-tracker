import { router } from "expo-router";
import { View, Text, Button, Alert, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useEffect, useReducer, useState } from "react";
import * as Location from "expo-location";
import React from "react";
import { Platform } from "react-native";
import { showLocation } from "react-native-map-link";

const initialState = {
  location: {
    latitude: 0,
    longitude: 0,
  },
  isLoading: false,
  error: null,
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function LocationView() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [status, requestPermission] = Location.useBackgroundPermissions();

  const checkLocationServices = async () => {
    const enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "位置服务未启用",
        "请在系统设置中启用位置服务以使用此功能。",
        [
          { text: "取消", style: "cancel" },
          {
            text: "打开设置",
            onPress: () => {
              if (Platform.OS === "ios") {
                Linking.openURL("app-settings:");
              } else {
                Linking.openSettings();
              }
            },
          },
        ]
      );
      return false;
    }
    return true;
  };

  const requestLocationPermission = async () => {
    try {
      const servicesEnabled = await checkLocationServices();
      if (!servicesEnabled) return;

      const { status: foregroundStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (foregroundStatus !== "granted") {
        Alert.alert(
          "需要位置权限",
          "请允许应用访问您的位置信息以继续使用此功能。",
          [{ text: "确定" }]
        );
        return;
      }

      const { status: backgroundStatus } =
        await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus !== "granted") {
        Alert.alert(
          "需要后台位置权限",
          "为了提供更好的服务，请允许应用在后台访问位置信息。",
          [{ text: "确定" }]
        );
      }
    } catch (error) {
      console.error("请求位置权限时出错:", error);
      Alert.alert("错误", "请求位置权限时发生错误，请稍后重试。");
    }
  };

  const getCurrentLocation = async () => {
    try {
      const servicesEnabled = await checkLocationServices();
      if (!servicesEnabled) return;

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      console.log("location", location);
      dispatch({
        type: "SET_LOCATION",
        payload: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
    } catch (error) {
      console.log("获取位置错误:", error);
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "未知错误",
      });
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (status?.granted) {
      getCurrentLocation();
    }
  }, [status]);

  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <View className="p-4">
        <Button title="重新请求位置权限" onPress={requestLocationPermission} />
        <View className="mt-4">
          <Button title="刷新位置" onPress={getCurrentLocation} />
        </View>
        <View className="mt-4">
          <Button
            title="打开地图"
            onPress={() => {
              showLocation({
                latitude: 40.0583,
                longitude: 116.3046,
                dialogTitle: "打开地图",
                dialogMessage: "请选择地图应用",
              });
            }}
          />
        </View>
      </View>
      <View className="gap-3 bg-gray-200 p-4">
        <Text className="font-bold text-lg">当前位置:</Text>
        {state.error ? (
          <Text className="text-lg text-red-400">错误: {state.error}</Text>
        ) : (
          <>
            <Text className="text-lg text-red-400">
              纬度: {state.location.latitude}
            </Text>
            <Text className="text-lg text-red-400">
              经度: {state.location.longitude}
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
