import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';

const PopupComponent = () => {
    return (
        <PopupDialog 
                                width={300}
                                height={430}
                                
                                overlayBackgroundColor={'#000'}
                                overlayOpacity={0.7}
                                dialogTitle={<DialogTitle                                           
                                               haveTitleBar={false} 
                                               
                                              />}
                                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                         >
                                <View>
                                    <Text 
                                        style={ styles.downloadTextStyle}
                                    >
                                        Download All {'\n'} Upcoming Events
                                    </Text>
                                    <Icon 
                                        name='ios-download-outline'
                                        style={styles.iconStyle}
                                    />

                                    <Text style={styles.downloadDescStyle}>
                                        Downloading will add upcoming {'\n'}
                                        events in your phone calendar. {'\n'}
                                        You can delete them anytime.
                                    </Text>
                                
                                <TouchableHighlight>
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            justifyContent: 'center',                                                                              
                                        }}
                                    >
                                        <Icon 
                                        name='ios-checkmark-outline'
                                        style={styles.decisionStyle}                      
                                        /> 
                                    <Text style={{ marginTop: 30, fontSize: 18, marginLeft: 10 }}>
                                        Yes
                                    </Text>
                                        </View>                   
                                    </TouchableHighlight>  

                                    <TouchableHighlight
                                        underlayColor={'#fff'}
                                        onPress={() => {
                                            this.popupDialog.closeDialog();
                                         }}
                                    >
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            justifyContent: 'center',
                                            borderTopColor: '#ddd',
                                            borderTopWidth: 1,
                                            borderStyle: 'solid',
                                            marginTop: -10,
                                            paddingTop: -10
                                        }}
                                    >
                                  
                                        <Icon 
                                        name='ios-close-outline'
                                        style={styles.decisionStyle}                      
                                        /> 
                                    <Text 
                                        style={styles.closeBtn}
                            
                                    >
                                        No
                                    </Text>
                                        </View>                   
                                    </TouchableHighlight>                               
                                 </View>
                </PopupDialog>  
    );
};


const styles = {
    closeBtn: {
        marginTop: 30, 
        fontSize: 18, 
        marginLeft: 10
    },
    iconStyle: {
        color: '#000',
        fontSize: 85,    
        textAlign: 'center', 
    },
    downloadTextStyle: {
        textAlign: 'center',
        fontSize: 25,       
    },
    downloadDescStyle: {
        fontSize: 19,
        textAlign: 'center'
    },
    decisionStyle: {
        color: '#000',
        fontSize: 70,
    }
};
export default PopupComponent;
