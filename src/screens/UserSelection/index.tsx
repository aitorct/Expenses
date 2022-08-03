import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useFilterData from '@hooks/useFilterData';
import {useFilter} from '@hooks/useFilter';
import {LIMIT} from '@hooks/useExpenses';
import {FilterType} from '@contexts/FiltersContext/types';
import colors from '@theme/colors';
import fontSizes from '@theme/fontSizes';
import sizes from '@theme/sizes';
import strings from '@locales/index';

const UserSelection = () => {
  const {filterData} = useFilterData(FilterType.USER);
  const {filterValue, applyFilter} = useFilter(FilterType.USER);
  const [search, setSearch] = useState('');
  const insets = useSafeAreaInsets();

  const onUserSelect = (user: string) => {
    user === filterValue ? applyFilter(null) : applyFilter(user);
  };

  const renderItem = ({item}: {item: string}) => {
    const isSelected = item === filterValue;

    const customStyle = isSelected
      ? styles.selectedItem
      : styles.unselectedItem;

    const onPress = (user: string) => {
      Keyboard.dismiss();
      onUserSelect(user);
    };

    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={[styles.item, customStyle]}>
        <Text style={styles.itemText}>{item}</Text>
        {item === filterValue && (
          <Icon name="check-circle" color={colors.icon} size={sizes.icon} />
        )}
      </TouchableOpacity>
    );
  };

  const filteredData = filterData.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );
  const customListStyles = {paddingBottom: insets.bottom};

  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.input}>
        <View style={styles.inputIcon}>
          <Icon name="magnify" color={colors.icon} size={sizes.icon} />
        </View>
        <TextInput
          style={styles.textInput}
          selectionColor={colors.selectionColor}
          placeholder={strings.filters.user.selection.placeholder}
          placeholderTextColor={colors.placeholderText}
          value={search}
          onChangeText={text => setSearch(text)}
        />
      </View>
      {filteredData.length ? (
        <KeyboardAvoidingView
          style={styles.flex}
          behavior="padding"
          keyboardVerticalOffset={sizes.s100}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={filteredData}
            contentContainerStyle={customListStyles}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
            estimatedItemSize={LIMIT}
          />
        </KeyboardAvoidingView>
      ) : (
        <View style={[styles.emptyState, styles.center]}>
          <Text style={styles.emptyText}>
            {strings.filters.user.selection.emptySearch}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingTop: sizes.s16,
    paddingHorizontal: sizes.s16,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: sizes.s8,
    marginBottom: sizes.s12,
    borderRadius: 12,
    paddingVertical: Platform.OS === 'ios' ? sizes.s8 : undefined,
    paddingHorizontal: sizes.s8,
    backgroundColor: colors.textInputBackground,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputIcon: {
    paddingRight: sizes.s8,
  },
  item: {
    height: sizes.s48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.s16,
    marginBottom: sizes.s4,
    borderRadius: sizes.s8,
    borderWidth: sizes.border,
  },
  selectedItem: {
    borderColor: colors.selectedTouchableTagBorder,
    backgroundColor: colors.tagBackground,
  },
  unselectedItem: {
    borderColor: colors.touchableTagBackground,
    backgroundColor: colors.touchableTagBackground,
  },
  emptyState: {
    paddingTop: sizes.s24,
  },
  emptyText: {
    fontSize: fontSizes.largeText,
    textAlign: 'center',
  },
  textInput: {
    fontSize: fontSizes.text,
  },
  itemText: {
    fontSize: fontSizes.largeText,
    color: colors.text,
  },
});

export default UserSelection;
