import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../screens/LoginScreen/containers';
import HomeScreen from './../screens/Home/containers';
import PriceListScreen from './../screens/PriceList/containers';
import VisitsScreen from './../screens/Visits/containers';
import VisitsMapScreen from './../screens/VisitsMap/containers';
import SurveyScreen from './../screens/Survey/containers';
import ImageCaptureScreen from './../screens/ImageCapture/containers';
import TasksScreen from './../screens/Tasks/containers';
import TasksActiveScreen from './../screens/TasksActive/containers';
import NotificationsScreen from './../screens/Notifications/containers';
import SignatureScreen from './../screens/Signature/containers';
import NewSignatureScreen from './../screens/NewSignature/containers';
import ChatScreen from './../screens/Chat/containers';

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