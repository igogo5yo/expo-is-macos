// Reexport the native module. On web, it will be resolved to ExpoIsMacOSModule.web.ts
// and on native platforms to ExpoIsMacOSModule.ts
export { default } from './ExpoIsMacOSModule';
export { default as ExpoIsMacOSView } from './ExpoIsMacOSView';
export * from  './ExpoIsMacOS.types';
