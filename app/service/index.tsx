import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, ScrollView, RefreshControl } from "react-native";

import { useGetPosts } from "@/api/posts/useGetPosts";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PostRow from "@/components/PostRow";
import EndOfPost from "@/components/PostRow/EndOfPost";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const { label } = useLocalSearchParams();
  const { data = [], isFetching, refetch } = useGetPosts();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={refetch}
          title="Loading..."
        />
      }
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={{
              uri: "https://wmwcqwluncoptiivxzut.supabase.co/storage/v1/object/public/services//Plumbers%20Tools%20Selection.jpg",
            }}
            style={styles.banner}
          />
        }
      >
        {data.map((post) => {
          const postId = post.id;
          return <PostRow key={postId} postData={post} />;
        })}

        <EndOfPost />
      </ParallaxScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  banner: {
    width: "100%",
    height: "100%",
  },
});
