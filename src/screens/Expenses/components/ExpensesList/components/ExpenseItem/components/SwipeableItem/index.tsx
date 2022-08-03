import React, {ReactElement, useRef} from 'react';
import {Alert, Animated, StyleSheet, Vibration} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {UpdateMode} from 'realm';
import {uploadReceipt} from '@libs/api';
import Camera from '@libs/Camera';
import {Expense} from '@models/Expense';
import {ParsedExpense} from '@models/types';
import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import Action from './components/Action';
import {ROUTES, StackParamList} from '@navigation/routes';
import colors from '@theme/colors';
import sizes from '@theme/sizes';
import strings from '@locales/index';

const {useRealm} = ExpenseRealmContext;

type Props = {
  expense: ParsedExpense;
  children: ReactElement;
};

const SwipeableItem = ({expense, children}: Props) => {
  const realm = useRealm();
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const swipeableRef = useRef<Swipeable | null>();

  const {hasAttachedReceipts} = expense;

  const renderRightActions = (progress: Animated.AnimatedInterpolation) => (
    <Action
      title={strings.item.add_receipt}
      icon={'receipt'}
      progress={progress}
    />
  );
  const renderLeftActions = (progress: Animated.AnimatedInterpolation) => (
    <Action
      title={strings.item.check_receipt}
      icon={'eye'}
      progress={progress}
    />
  );

  const onSwipeRight = () => {
    Vibration.vibrate();
    swipeableRef?.current?.close();
    onTakeCameraPhoto();
  };

  const onSwipeLeft = () => {
    navigation.navigate(ROUTES.receipts, {
      id: expense.id,
      imageUris: [...expense.receipts],
      merchant: expense.merchant,
      amount: expense.amount,
    });
    swipeableRef?.current?.close();
  };

  const onSwipeableOpen = async (direction: 'right' | 'left') => {
    if (direction === 'right') {
      onSwipeRight();
    } else {
      onSwipeLeft();
    }
  };

  const onTakeCameraPhoto = async () => {
    const isPermissionGranted = await Camera.isPermissionGranted();

    if (isPermissionGranted) {
      takeCameraPhoto();
    } else {
      const granted = await requestPermission();
      granted && takeCameraPhoto();
    }
  };

  const requestPermission = async () => {
    const granted = await Camera.requestPermission();
    !granted && Alert.alert(strings.camera.permission_denied);

    return granted;
  };

  const takeCameraPhoto = async () => {
    const imageUri: string = await Camera.takePhoto();

    if (imageUri) {
      const {data} = await uploadReceipt(expense.id, imageUri);
      realm.write(() => {
        realm.create('Expense', Expense.generate(data), UpdateMode.Modified);
      });
    }
  };

  return (
    <Swipeable
      ref={ref => (swipeableRef.current = ref)}
      childrenContainerStyle={styles.item}
      renderRightActions={renderRightActions}
      renderLeftActions={hasAttachedReceipts ? renderLeftActions : undefined}
      overshootRight={false}
      overshootLeft={false}
      onSwipeableOpen={onSwipeableOpen}>
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 4,
  },
  item: {
    padding: sizes.s16,
    borderRadius: sizes.s8,
    backgroundColor: colors.secondaryBackground,
  },
});

export default SwipeableItem;
