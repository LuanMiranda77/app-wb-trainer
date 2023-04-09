import React from 'react';
import Video from 'react-native-video';

export function DisplayVideo(url, height=300, width='100%', isControls=true) {
  return (
    <Video
      source={{ uri: url }}
      style={{ width: width, height: height }}
      controls={isControls}
    />
  );
}
