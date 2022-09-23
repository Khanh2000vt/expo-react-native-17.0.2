import { theme } from "@theme";
import React, { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseHeader,
  BaseMediaPicker,
  ImageSVG,
  SvgX,
  VectorBack,
} from "../../components";
import { createPost, resetPost, RootState } from "../../redux";
function NewPostScreen({ route, navigation }: { route: any; navigation: any }) {
  const dispatch = useDispatch();

  const { onPressPost } = route.params;

  const user = useSelector((state: RootState) => state.auth.user);
  const postNote = useSelector((state: RootState) => state.post);

  const [textTitle, onChangeTextTitle] = useState<string>(postNote.title);
  const [textBody, onChangeTextBody] = useState<string>(postNote.body);
  const [images, setImages] = useState<any[]>(postNote.images);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  async function handlePressPost() {
    if (
      (!textTitle || textTitle.trim().length === 0) &&
      (!textBody || textBody.trim().length === 0) &&
      images.length === 0
    ) {
      return;
    }
    const dateCreate = new Date();
    const newPost = {
      name: user.name,
      avatar: user.avatar,
      createdAt: dateCreate.toISOString(),
      title: textTitle,
      body: textBody,
      likes: 0,
      replies: 0,
      image: images[0],
    };
    // const a = await ForumApi.postNewPost(newPost);
    onPressPost(newPost);
    dispatch(resetPost());
    navigation.goBack();
  }

  const handlePickComplete = (result: any) => {
    setImages([result].concat(images));
  };

  const handleBack = () => {
    Alert.alert("Warning", "Save to draft ?", [
      {
        text: "Yes",
        onPress: () => {
          const params = {
            title: textTitle,
            body: textBody,
            images: images,
          };
          dispatch(createPost(params));
          navigation.goBack();
        },
      },
      {
        text: "No",
        onPress: () => {
          dispatch(resetPost());
          navigation.goBack();
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.containerImagePost}>
        <Image source={{ uri: item.uri }} style={styles.imagePost} />
        <TouchableOpacity
          style={styles.buttonImagePost}
          activeOpacity={0.8}
          onPress={() => setImages(images.filter((image) => image !== item))}
        >
          <SvgX />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <BaseHeader
        title="New post"
        IconLeft={<VectorBack />}
        onPressLeft={handleBack}
        IconRight={
          <View style={styles.iconRight}>
            <Text style={styles.textIconRight}>Post</Text>
          </View>
        }
        onPressRight={handlePressPost}
        styleHeader={styles.styleHeader}
      />
      <View style={styles.body}>
        <Image source={{ uri: user.avatar }} style={styles.image} />
        <View style={styles.bodyPost}>
          <Text style={styles.textName}>{user.name}</Text>
          <TextInput
            placeholder="Title"
            style={[styles.text, styles.textTitle]}
            multiline
            onChangeText={onChangeTextTitle}
            value={textTitle}
          />
          <TextInput
            placeholder="What do you want to share?"
            style={[styles.text, styles.textBody]}
            multiline
            onChangeText={onChangeTextBody}
            value={textBody}
          />
          {!!images && (
            <FlatList
              data={images}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
          <TouchableOpacity
            style={styles.touchableOpacity}
            activeOpacity={0.8}
            onPress={() => setIsVisible(true)}
          >
            <ImageSVG />
          </TouchableOpacity>
        </View>
      </View>
      <BaseMediaPicker
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onPickComplete={handlePickComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  body: {
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  styleHeader: {
    paddingLeft: 33,
    paddingRight: 24,
    marginTop: 65,
    marginBottom: 16,
  },
  iconRight: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 13,
    paddingLeft: 17,
    paddingRight: 18,
    borderRadius: 8,
  },
  textIconRight: {
    color: theme.colors.Neutral0,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 22,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral10,
  },
  text: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral10,
    lineHeight: 24.52,
    width: "100%",
  },
  textTitle: {
    marginTop: 21,
    marginBottom: 16,
    height: 48,
  },
  textBody: {
    color: theme.colors.Neutral8,
    marginBottom: 20,
    height: 150,
  },
  bodyPost: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 16,
  },
  touchableOpacity: {
    backgroundColor: theme.colors.Neutral1,
    // flex: 1,
    padding: 12.5,
    borderRadius: 8,
    marginTop: 16,
  },
  containerImagePost: {
    marginRight: 10,
  },
  imagePost: {
    width: 146,
    height: 183,
    borderRadius: 8,
  },
  buttonImagePost: {
    position: "absolute",
    padding: 9,
    backgroundColor: "rgba(0, 0, 0, 0.63)",
    borderRadius: 100,
    top: 10,
    left: 10,
  },
});

export default NewPostScreen;
