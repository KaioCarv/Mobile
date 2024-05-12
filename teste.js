import { SafeAreaView, View, Text, FlatList, RefreshControl, ActivityIndicator, Platform, SectionList } from "react-native";

import { useEffect, useState } from "react";
import { styles } from "./styles";

const posts = Array.from({ length: 100 }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}));

function ListItem({ title }) {
  useEffect(() => {
    console.log(`Montou o ${title}`);

    return () => {
      console.log(`desmontou o ${title}`);
    };
  }, []);

  return (
    <View style={styles.PostContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  );
}

function Header({title}) {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <Text>{title}</Text>
    </View>
  );
}

function Footer() {
  return (
    <View
      style={{
        backgroundColor: "#000",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <Text
      style={{color: '#fff'}}>Rodape</Text>
    </View>
  );
}
function EmptyState() {
  return (
    <View
      style={{
        backgroundColor: "#555",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <Text>Nenhum item foi encontrado</Text>
    </View>
  );
}

 function Divader(){
   return(
    <View
    style={{
      height: 1,
      backgroundColor: '#aaa',
      marginVertical:12,
    }}
    />
   )
 }


export default function App() {
 const [isRefreshing, setIsRefreshing] = useState(false)

 async function handleRefresh(){
    setIsRefreshing(true);

    await new Promise(resolve => setTimeout(resolve,1500));
    console.log("Atualizou..");

    setIsRefreshing(false);
   }

  return (
    <SafeAreaView style={styles.wrapper}>
     {/* <ActivityIndicator
       color={'purple'}
       size={Platform.OS === 'android' ? 90 : 'large'}
     /> */}

      <SectionList
      
      refreshControl={(<RefreshControl
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        // Android only
        colors={['#f00', 'purple', 'blue']}
        progressBackgroundColor={'#000'}
        size="large"
      />)}

        ListHeaderComponent={<Header title="Posts"/>}
       ListFooterComponent={
        posts.length > 0 ? Footer : null
       }
       ListEmptyComponent={EmptyState}
       stickyHeaderIndices={[0,2]}
     

      //  ItemSeparatorComponent={Divader}

        style={styles.container}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => (
          <ListItem title={post.title} /> 
         )}
        getItemLayout={(data, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
        sections={[
          {
            title: 'Primeiro 01',
          data:posts.slice(0,5),
          },
          {
            title: 'Primeiro 02',
          data:posts.slice(5,20),
          },
          {
            title: 'Primeiro 03',
          data:posts.slice(20,100),
          },
      ]}
      renderSectionHeader={({section: {title}}) => (
        <View style={{
          backgroundColor: "#000",
          padding: 16,
          borderRadius: 8,
        }}>
          <Text style={{color: "#fff"}}> {title}</Text>
        </View>
      )}
       stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
}
