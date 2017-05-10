import * as React from 'react';
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Text,
  View,
} from 'native-base';
import { Dimensions } from 'react-native';

export class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    const {
      width,
      height,
    } = Dimensions.get('window');

    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.mainView(width, height)}>
            <View>
              <Text style={styles.title}>Trumpet</Text>
            </View>
            <View>
              <Form>
                <Text style={styles.formDescription}>Input a instance domain</Text>
                <Item>
                  <Input placeholder="mastodon.social" />
                </Item>
                <Button block primary style={styles.loginButton}>
                  <Text style={styles.loginButtonText}> Login </Text>
                </Button>
              </Form>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    padding: 40,
  },
  mainView(width: number, height: number): any {
    return {
      flex: 1,
      width: width - 80,
      height,
      flexDirection: 'column',
      justifyContent: 'center',
    }
  },
  title: {
    fontSize: 30,
    textAlign: 'center' as 'center',
    paddingBottom: 80,
  },
  formDescription: {
    fontSize: 12,
    textAlign: 'center' as 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  loginButton: {
    marginTop: 60,
  },
  loginButtonText: {
    textAlign: 'center' as 'center',
  },
};
