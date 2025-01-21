import * as React from 'react';

import { ExpoIsMacOSViewProps } from './ExpoIsMacOS.types';

export default function ExpoIsMacOSView(props: ExpoIsMacOSViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
