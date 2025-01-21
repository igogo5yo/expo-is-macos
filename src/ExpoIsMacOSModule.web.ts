import { registerWebModule, NativeModule } from 'expo';

import { ExpoIsMacOSModuleEvents } from './ExpoIsMacOS.types';

class ExpoIsMacOSModule extends NativeModule<ExpoIsMacOSModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIsMacOSModule);
