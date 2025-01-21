import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIsMacOSModuleEvents } from './ExpoIsMacOS.types';

declare class ExpoIsMacOSModule extends NativeModule<ExpoIsMacOSModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIsMacOSModule>('ExpoIsMacOS');
