import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  background: #1c1c1c;
  width: 360px;
  height: 168px;
  box-shadow: 4px 4px 8px rgba(117, 117, 117, 0.25);
  border-radius: 8px;

  position: absolute;
  left: 25.8px;
  top: -10px;
  z-index: 10;
`;
