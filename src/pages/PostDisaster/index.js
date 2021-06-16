import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Button from '../../components/Button';
import LocationPicker from '../../components/LocationPicker';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import {getData} from '../../config/localStorage';

const PostDisaster = () => {
  const [image, setImage] = useState(
    'https://cdn.iconscout.com/icon/free/png-512/apple-camera-493147.png',
  );
  const [data, setData] = useState({
    token: '',
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isFetching, setIsFetching] = useState(null);

  const getLocation = () => {
    const geo = Geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
    console.log(geo);
  };

  useEffect(() => {
    getData('user').then((res) => {
      setData(res);
    });
  }, []);

  const postDisasterInfo = () => {
    let photo = {
      uri: image,
      name: `photo-${Date.now()}`,
      type: 'image/jpeg',
    };

    let formData = new FormData();
    formData.append('image', photo);

    let body = {
      token: data.token,
      title: title,
      description: description,
      latitute: latitude,
      longtitute: longitude,
      image: formData,
    };

    Axios({
      method: 'post',
      url: 'http://tesapp.asdosku.com/api/post-bencana',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: body,
    })
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === 'success') {
          showMessage({
            message: response.data.status,
            description: 'Posting Info Bencana berhasil',
            type: 'success',
          });
        } else {
          showMessage({
            message: response.data.status,
            type: 'danger',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            initialSnap={1}
            renderContent={renderInner}
            renderHeader={renderHeader}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <Image source={{uri: image}} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.form}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Title</Text>
              <TextInput
                placeholder="Masukan Judul"
                style={styles.input}
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Description</Text>
              <TextInput
                placeholder="Masukan Deskripsi"
                style={styles.input}
                multiline={true}
                value={description}
                onChangeText={setDescription}
              />
            </View>
          </View>
          <LocationPicker />
          {/* <Button title="get location" onPress={getLocation} /> */}
          <View style={styles.btnContainer}>
            <Button title="Post" onPress={postDisasterInfo} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default PostDisaster;

const styles = StyleSheet.create({
  image: {
    height: 135,
    width: 165,
    borderRadius: 12,
    marginVertical: 10,
  },
  textContainer: {
    marginTop: 21,
    marginBottom: 10,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.9,
  },
  title: {
    fontSize: 11,
    color: colors.blackGray,
  },
  containerMap: {
    alignItems: 'center',
    height: 300,
    width: 400,
    justifyContent: 'flex-end',
    marginTop: 20,
    // ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  container: {
    alignItems: 'center',
  },
  form: {
    width: '90%',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
});
