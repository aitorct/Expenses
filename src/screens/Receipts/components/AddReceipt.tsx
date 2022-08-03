import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UpdateMode} from 'realm';
import {uploadReceipt} from '@libs/api';
import Camera from '@libs/Camera';
import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import {Expense} from '@models/Expense';
import colors from '@theme/colors';
import sizes from '@theme/sizes';

const {useRealm} = ExpenseRealmContext;

interface Props {
  id: string;
  onImageUploaded: (imageUri: string) => void;
}

const AddReceipt = ({id, onImageUploaded}: Props) => {
  const realm = useRealm();

  const onTakeCameraPhoto = async () => {
    const granted = await Camera.isPermissionGranted();

    if (granted) {
      takeCameraPhoto();
    } else {
      const requestGranted = await Camera.requestPermission();
      requestGranted && takeCameraPhoto();
    }
  };

  const takeCameraPhoto = async () => {
    const imageUri: string = await Camera.takePhoto();

    if (imageUri) {
      const {data} = await uploadReceipt(id, imageUri);
      realm.write(() => {
        const updatedObject = realm.create(
          'Expense',
          Expense.generate(data),
          UpdateMode.Modified,
        );

        const receipts = updatedObject.receipts;
        const uploadedImageUri = receipts[receipts.length - 1];
        onImageUploaded(uploadedImageUri);
      });
    }
  };

  return (
    <TouchableOpacity onPress={onTakeCameraPhoto}>
      <Icon name={'plus'} color={colors.icon} size={sizes.headerIcon} />
    </TouchableOpacity>
  );
};

export default AddReceipt;
