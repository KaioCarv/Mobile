import {
  SafeAreaView, 
  View, 
  Text, 
  FlatList 
} from "react-native";

import { useEffect } from "react";
import { styles } from "./styles";

const posts = Array.from({ length: 10 }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}));

function ListItem({ title }) {
  useEffect(() => {
  console.log(`Montou o ${title}`);

  return () => {''
  console.log(`Montou o ${title}`)
  };
  },[])

  return (
    <View style={styles.PostContainer}>
      <Text style={styles.postTitle}>{ title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.container}
        contentContainerStyle={{ gap: 16 }}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => (
        <ListItem title={post.title} />
      )}
      />
    </SafeAreaView>
  );
}
