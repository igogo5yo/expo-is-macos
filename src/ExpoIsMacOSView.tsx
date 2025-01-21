import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIsMacOSViewProps } from './ExpoIsMacOS.types';

const NativeView: React.ComponentType<ExpoIsMacOSViewProps> =
  requireNativeView('ExpoIsMacOS');

export default function ExpoIsMacOSView(props: ExpoIsMacOSViewProps) {
  return <NativeView {...props} />;
}
