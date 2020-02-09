import React, { PureComponent } from 'react';
import { Button, DialogContainer } from 'react-md';
import { Preview } from './styles';
import { connect } from 'react-redux';

import {MdDateRange, MdPriorityHigh, MdShortText, MdTrendingUp, MdAccountBox, MdAttachment, MdInfo} from 'react-icons/md';


class PreviewModal extends PureComponent {

  state = {
    visible: false,
    content: []
  };

  componentDidUpdate(prevProps) {

    if (this.props.newTask !== prevProps.newTask) {
      console.log(this.props.newTask)
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
    console.log(content)
    const provData = {...provider}
    console.log(provData)
    const images = content.images;

    const actions = [{
      onClick: this.hide,
      primary: true,
      children: 'Fechar',
    }];


    const handleImages =() => {

      if(images && images.length !== 0) {
        return(
          <section className="block-images">
           <div>
              <MdAttachment size={20} />
              <strong>imagens: </strong>
            </div>
            {
              images ? images.map(item => {
                return <a target="_blank" rel="noopener noreferrer" href={item.url}><img src={item.url} alt=""/></a>
              }) : null
            }
          </section>
        )
      }else {
        return (
          <section className="notImages">
           <MdInfo size={20} color="#4b6de8" /> <p>Sem anexos</p>
          </section>
        )
      }
    }

    return (

      <Preview>
        {console.log(content)}
        <Button flat className="preview-task" onClick={this.show}>{content.title}</Button>
        <DialogContainer
          id="modal-preview"
          visible={visible}
          title={content.title}
          onHide={this.hide}
          aria-describedby="modal-preview-description"
          modal
          actions={actions}
          className="modal-prev"
        >
          <section className="block-flex">
            <section className="block-prev-description">
              <div className="prev-description-icon">
                <MdShortText size={20} />
                <strong>Descrição: </strong>
              </div>

              <p>
              {content.description}
              </p>
            </section>

            <section className="block-prev-data">
              <div className="prev-icon">
                <MdAccountBox size={20} />
                <strong>Proprietário: </strong>
                <span> {provData.name}</span>
              </div>

              <div className="prev-icon">
                <MdTrendingUp size={20} />
                <strong>Status: </strong>
                <span> {content.status}</span>
              </div>

              <div className="prev-icon">
                <MdPriorityHigh size={20} />
                <strong>Prioridade: </strong>
                <span> {content.priorityValue}</span>
              </div>

              <div className="prev-icon">
                <MdDateRange size={20} />
                <strong>Entrega: </strong>
                <span> {content.deliveryDate}</span>
              </div>
            </section>
          </section>

          {handleImages()}
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
