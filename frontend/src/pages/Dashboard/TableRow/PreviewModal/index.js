import React, { PureComponent } from 'react';
import { Button, DialogContainer } from 'react-md';
import { Preview } from './styles';

export default class SimpleModal extends PureComponent {
  state = {
    visible: false,
    content: []
  };

  componentDidMount() {

    this.setState({ content: this.props.task });
  }

  show = () => {
    // console.log(this.props.task)
    // console.log(this.content)
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { content } = this.state;


    const actions = [{
      onClick: this.hide,
      primary: true,
      children: 'Fechar',
    }];

    return (

      <Preview>
        <Button flat className="preview-task" onClick={this.show}>{content.title}</Button>
        <DialogContainer
          id="speed-boost"
          visible={visible}
          title={content.title}
          onHide={this.hide}
          aria-describedby="speed-boost-description"
          modal
          actions={actions}
        >
          <p id="speed-boost-description" className="md-color--secondary-text">
            {content.description}
          </p>
        </DialogContainer>
      </Preview>
    );
  }
}
