import { useNavigationState, useNavigation } from "@react-navigation/native";

// const useHasTabBar = () => {
//   const state = useNavigationState((state) => state);
//   console.log(3744, state.routes);
//   // Check if any route in the hierarchy has a tab navigator
//   const hasTabBar = state.routes.some(
//     (route) =>
//       route.state?.type === "tab" ||
//       route.state?.routes?.some(
//         (nestedRoute) => nestedRoute.state?.type === "tab",
//       ),
//   );

//   console.log("Has tab bar:", hasTabBar);

//   return hasTabBar;
// };

const useHasTabBar = () => {
  const navigation = useNavigation();

  // Check if the parent navigator is a tab navigator
  const parent = navigation.getParent();
  const isInsideTabNavigator = parent?.getState().type === "tab";

  console.log(
    "Is inside a tab navigator?",
    isInsideTabNavigator,
    parent?.getState(),
  );
};

export default useHasTabBar;
