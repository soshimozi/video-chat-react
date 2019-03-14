import React, { Component } from 'react';
import './styles.css';

class VideoElement extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.updateVideoStream()    
  }
  
  componentDidUpdate() {
    this.updateVideoStream()
  }
  
  updateVideoStream() {
    console.log(this.videoRef.current.srcObject);

    if (this.videoRef.current.srcObject === undefined || this.videoRef.current.srcObject === null) {
      const mediaStreamConstraints = {
        video: true,
        audio: true
      };    
  
      navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then((ms) => { this.videoRef.current.srcObject = ms; })
      .catch((err) => { this.handleError(err); });      
    }
  }  

  handleError(err) {
    console.log('navigator.getUserMedia error: ', err);     
  }

  render() {
    return <video ref={this.videoRef}  autoPlay playsInline/>
  }

}


export default VideoElement;