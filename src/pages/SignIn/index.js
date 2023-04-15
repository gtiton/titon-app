import React, { useEffect, useRef, useState } from 'react';
import backgroudImageLogin from '../../assets/background-login.png';
import logo from '../../assets/logo-titon.png';
import styledComponentsNative from 'styled-components/native';

import { signInRequest } from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles.js';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const animation = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);

  const [nameUser, setNameUser] = useState('');
  const [password, setPassword] = useState('');

  const [statusHeight, setStatusHeight] = useState(0);

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(nameUser, password));
  }

  const handlePress = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 4500,
      useNativeDriver: false,
    }).start(() => {
      setStatusHeight(100); // define a altura como 100% após a animação
    });
  }, []);

  // const animatedHeight = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['100%', '55%'], // defina o tamanho que você quer que o componente tenha após a animação
  // });

  const AnimatedStyledComponent = styledComponentsNative(Animated.View)`
    background: #2b2b2c;
    display: flex;

    justify-content: center;
    align-items: center;

    border-top-left-radius: ${statusHeight ? '20px' : '0'};
    border-top-right-radius: ${statusHeight ? '20px' : '0'};
  `;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={backgroudImageLogin}
          resizeMode="cover"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <KeyboardAvoidingView
            behavior={'padding'}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            {/* <AnimatedStyledComponent style={{ height: 300 }}> */}
            <Image
              source={logo}
              style={{
                width: 300,
                height: 42,
                display: `${statusHeight ? 'none' : 'flex'}`,
              }}
            />
            <Container status={statusHeight ? 'flex' : 'none'}>
              <Image
                source={logo}
                style={{ width: 236, height: 32, marginBottom: 50 }}
              />
              <Form>
                <FormInput
                  icon="account-circle"
                  // keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu nome de usúario"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  value={nameUser}
                  onChangeText={setNameUser}
                  ref={inputRef}
                />

                <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Senha"
                  ref={passwordRef}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                  value={password}
                  onChangeText={setPassword}
                />
                <SignLink
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <SignLinkText>Esqueceu sua senha?</SignLinkText>
                </SignLink>

                <SubmitButton loading={loading} onPress={handleSubmit}>
                  Login
                </SubmitButton>
              </Form>
            </Container>
            {/* </AnimatedStyledComponent> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
