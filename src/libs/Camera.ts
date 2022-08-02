import {Alert, NativeModules} from 'react-native';
import strings from '@locales/index';

const {NativeCamera} = NativeModules;

const isPermissionGranted = async () =>
  await NativeCamera.isPermissionGranted();

const requestPermission = async () => {
  const granted = await NativeCamera.requestPermission();
  !granted && Alert.alert(strings.camera.permission_denied);

  return granted;
};

const takePhoto = async () => await NativeCamera.takePhoto();

const Camera = {isPermissionGranted, requestPermission, takePhoto};

export default Camera;
