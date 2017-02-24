import React, { Component } from 'react';
import { View, Text, NativeModules, TouchableHighlight, AlertIOS } from 'react-native';

const Mailer = NativeModules.RNMail;

class SendMail extends Component {
    handleHelp() {
        Mailer.mail({
            subject: 'need help',
            recipients: ['support@example.com'],
             ccRecipients: ['supportCC@example.com'],
             bccRecipients: ['supportBCC@example.com'],
             body: '',
              isHTML: true, // iOS only, exclude if false
             attachment: {
               path: '',  // The absolute path of the file from which to read data.
               type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
               name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
        if (error) {
            console.log(error);
            console.log(event);
          AlertIOS.alert('Error', 'Could not send mail. Please send a mail to support@example.com');
        }
        });
    }
    render() {
        return (
            <TouchableHighlight
                onPress={this.handleHelp.bind(this)}
                underlayColor="#f7f7f7"
            >
        <View>
            <Text>SEND EMAIL</Text>
          </View>
            </TouchableHighlight>
        );
    }
}

export default SendMail;
