import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';
import Share, { ShareSheet, Button } from 'react-native-share';

class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }
  onOpen() {
    console.log("OPEN")
    this.setState({visible:true});
  }
  render() {
    const shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };

    const shareImageBase64 = {
      title: "React Native",
      message: "Hola mundo",
      subject: "Share Link" //  for email
    };

    return (
      <View style={styles.container}>


        <TouchableOpacity 
          onPress={() => {
          Share.open(shareImageBase64);
        }}>
          <View style={styles.instructions}>
            <Text>Simple Share Image Base 64</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
          Share.open(shareOptions);
        }}>
          <View style={styles.instructions}>
            <Text>Simple Share</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onOpen.bind(this)}>
          <View style={styles.instructions}>
            <Text>Share UI Component</Text>
          </View>
        </TouchableOpacity>

        <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
          <Button 
                  onPress={() => {
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "twitter"
                }));
              },300);

            }}>Twitter</Button>
          <Button 
                  onPress={() => {
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "facebook"
                }));
              },300);
            }}>Facebook</Button>

          <Button 
                  onPress={() => { 
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "whatsapp"
                }));
              },300);
            }}>Whatsapp</Button>
          <Button
                  onPress={() => {
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "googleplus"
                }));
              }, 300);
            }}>Google +</Button>

          <Button
                  onPress={() => {
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "email"
                }));
              },300);
            }}>Email</Button>

          <Button
           
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                if (typeof shareOptions["url"] !== undefined) {
                  Clipboard.setString(shareOptions["url"]);
                  if (Platform.OS === "android") {
                    ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                  } else if (Platform.OS === "ios") {
                    AlertIOS.alert('Link copiado al portapapeles');
                  }
                }
              },300);
            }}>Copy Link</Button>

          <Button 
            onPress={() => {
              this.onCancel();
              setTimeout(() => {
                Share.open(shareOptions);
              }, 300);
            }}>More</Button>
        </ShareSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Sticky;
