import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: props.online };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.alt} />
        <div>
          <p>{this.props.name}</p>
          <span
            className="status"
            onClick={(event) => {
              const newOnline = !this.state.online;
              this.setState({ online: newOnline });
            }}
          >
            <div
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></div>
            <div className="status-text">
              {this.state.online ? 'online' : 'offline'}
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
