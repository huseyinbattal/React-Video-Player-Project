import React from 'react';

export class Video extends React.Component {
  render() {
    return (
    <video src={this.props.src} controls autostart autoPlay />
    );
  }
}
// autoPlay özelliği videonun otomatik olarak başlamasını sağlar.