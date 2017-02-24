import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
    Scene, 
    Router,
    Actions,
    TouchableHighlight }
from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';

import Calendar from './components/Calendar';
import CalendarDetail from './components/CalendarDetail';
import PopupComponent from './components/Popup';

const scenes = Actions.create(
<Scene key="main">
        <Scene           
            key='Calendar' 
            component={Calendar}
            renderTitle={() => 
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTitleStyle}>Financial Calendar</Text>
                    <Icon 
                            onPress={() => {
                                     this.popupDialog.openDialog();
                                 }}
                         name='ios-download-outline'
                         style={styles.headerIconStyle}
                    />
                    <PopupComponent />
                </View>
            }
            initial                  
        />
        <Scene 
            key='calendarDetail' 
            component={CalendarDetail} 
            renderTitle={() => 
                <View style={styles.headerStyle}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Financial Calendar</Text>
                </View>
            }                    
        /> 

</Scene>
);
class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: 'Ken' };
    }
    render() {
    return (
        <Router
            navigationBarStyle={{ backgroundColor: '#4d4d4f', borderBottomColor: '#4d4d4f' }}
            titleStyle={{ color: '#fff' }}
            backTitle='Back'
            backButtonTextStyle={{ color: '#fff' }}
            scenes={scenes}
        />   
        
    );
}
}

const styles = {
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
         marginTop: 30
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 88
    },
    headerIconStyle: {
        color: '#fff',
        fontSize: 32,
        marginLeft: 70,
        marginTop: -3
    },
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
    },
};

export default RouterComponent;
