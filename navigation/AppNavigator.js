import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../screens/LoginScreen/index';
import HomeScreen from './../screens/Home/index';
import PriceListScreen from './../screens/PriceList/index';
import VisitsScreen from './../screens/Visits/index';
import VisitsMapScreen from './../screens/VisitsMap/index';
import SurveyScreen from './../screens/Survey/index';
import ImageCaptureScreen from './../screens/ImageCapture/index';
import TasksScreen from './../screens/Tasks/index';
import TasksActiveScreen from './../screens/TasksActive/index';
import NotificationsScreen from './../screens/Notifications/index';
import SignatureScreen from './../screens/Signature/index';
import NewSignatureScreen from './../screens/NewSignature/index';
import ChatScreen from './../screens/Chat/index';

const NoAuthRoutes = createStackNavigator({
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  PriceList: { 
    screen: PriceListScreen,
    navigationOptions: {
      header: null
    }
  },
  Encuestas: { 
    screen: SurveyScreen,
    navigationOptions: {
      header: null
    }
  },
  Visitas: { 
    screen: VisitsScreen,
    navigationOptions: {
      header: null
    }
  },
  VisitasMapa: { 
    screen: VisitsMapScreen,
    navigationOptions: {
      header: null
    }
  },
  Captura: { 
    screen: ImageCaptureScreen,
    navigationOptions: {
      header: null
    }
  },
  Tareas: { 
    screen: TasksScreen,
    navigationOptions: {
      header: null
    }
  },
  TareasActivas: { 
    screen: TasksActiveScreen,
    navigationOptions: {
      header: null
    }
  },
  Notificaciones: { 
    screen: NotificationsScreen,
    navigationOptions: {
      header: null
    }
  },
  Firmas: { 
    screen: SignatureScreen,
    navigationOptions: {
      header: null
    }
  },
  NuevaFirma: { 
    screen: NewSignatureScreen,
    navigationOptions: {
      header: null
    }
  },
  Chat: { 
    screen: ChatScreen,
    navigationOptions: {
      header: null
    }
  },
});

const Routes = createAppContainer(NoAuthRoutes);

export { Routes }