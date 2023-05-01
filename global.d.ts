/// <reference types="nativewind/types" />

import { RouteParamsType } from './src/routes/route-params.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteParamsType { }
  }
  declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }

  declare module '*.jpg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
}