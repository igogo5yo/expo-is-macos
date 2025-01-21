// Reexport the native module. On web, it will be resolved to ExpoIsMacOSModule.web.ts
// and on native platforms to ExpoIsMacOSModule.ts
export { isMacOS } from './ExpoIsMacOSModule';
export * from  './ExpoIsMacOS.types';
