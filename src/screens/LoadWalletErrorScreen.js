/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { startWalletRequested } from '../actions';
import SimpleButton from '../components/SimpleButton';

export default () => {
  const dispatch = useDispatch();
  const { words, pin } = useSelector((state) => state.initWallet);
  const onReload = useCallback(() => dispatch(startWalletRequested({
    words,
    pin,
  })), [dispatch]);

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }}
    >
      <Text style={{
        fontSize: 18, lineHeight: 22, width: 200, textAlign: 'center'
      }}
      >
        There&apos;s been an error connecting to the server
      </Text>
      <SimpleButton
        containerStyle={{ marginTop: 12 }}
        textStyle={{ fontSize: 18 }}
        onPress={onReload}
        title='Try again'
      />
    </View>
  );
};
