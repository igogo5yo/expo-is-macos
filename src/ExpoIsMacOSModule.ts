import { requireNativeModule } from 'expo';

import { ExpoIsMacOSModule } from './ExpoIsMacOS.types';

// This call loads the native module object from the JSI.
export const isMacOS = requireNativeModule<ExpoIsMacOSModule>('ExpoIsMacOS').isMacOS;
