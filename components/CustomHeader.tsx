import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import BottomSheet from "@/components/BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            name="search-outline"
            style={styles.searchIcon}
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={"/(modal)/filter"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("../assets/images/bike.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery now</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subTitle}>London</Text>
            <Ionicons
              name="chevron-down-outline"
              size={16}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={16} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    backgroundColor: "#fff",
    height: 100,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bike: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 3,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
});

export default CustomHeader;
