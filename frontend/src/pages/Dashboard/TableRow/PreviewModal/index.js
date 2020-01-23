import React, { PureComponent } from 'react';
import { Button, DialogContainer } from 'react-md';
import { Preview } from './styles';
import { connect } from 'react-redux';

import {MdDateRange, MdPriorityHigh, MdShortText, MdTrendingUp, MdAccountBox} from 'react-icons/md';


class PreviewModal extends PureComponent {

  state = {
    visible: false,
    content: []
  };

  componentDidUpdate(prevProps) {

    if (this.props.newTask !== prevProps.newTask) {
      let taskOld = this.state.content;
      let newTask = this.props.newTask.find(element => element);

      if( newTask.id === taskOld.id) {
        console.log(newTask.id)
        this.setState({ content: newTask });
      }
    }
  }

  componentDidMount() {
    this.setState({ content: this.props.task });
  }

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { content } = this.state;

    const provider = content.provider;
    const provData = {...provider}

    const actions = [{
      onClick: this.hide,
      primary: true,
      children: 'Fechar',
    }];

    return (

      <Preview>
        {console.log(content)}
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
            <div className="prev-description-icon">
              <MdShortText size={20} />
              <strong>Descrição: </strong>
            </div>

            <p id="speed-boost-description" className="md-color--secondary-text">
             {content.description}
            </p>

          <div className="prev-date">
            <MdAccountBox size={20} />
            <strong>Proprietário: </strong>
            <span> {provData.name}</span>
          </div>

          <div className="prev-date">
            <MdTrendingUp size={20} />
            <strong>Status: </strong>
            <span> {content.status}</span>
          </div>

          <div className="prev-date">
            <MdPriorityHigh size={20} />
            <strong>Prioridade: </strong>
            <span> {content.priorityValue}</span>
          </div>

          <div className="prev-date">
            <MdDateRange size={20} />
            <strong>Entrega: </strong>
            <span> {content.deliveryDate}</span>
          </div>

        </DialogContainer>
      </Preview>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTask: state.task.editing_task
  }
}

export default connect(mapStateToProps)(PreviewModal)
