import React, { PureComponent, useState, useMemo, useEffect, ElementConfig } from 'react';

// import { uniqueId } from 'lodash';
// import filesize from 'filesize';

// import api from '~/services/api';

import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

// import PropTypes from 'prop-types'

import { MdClear, MdFileUpload} from 'react-icons/md';

import {
  Button,
  DialogContainer,
  // Divider,
  // FileInput,
  // SelectField,
  Toolbar,
} from 'react-md';

import Select, { components } from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
// import { createTaskRequest } from '~/store/modules/task/actions';
import { answerTaskRequest } from '~/store/modules/task/actions';

import { Container } from './styles';

import UploadMain from '~/components/UploadMain';

// const schema = Yup.object().shape({
//   description: Yup.string(),
// });

export default function AnswerModal(props){

  const [ visible, setVisible ] = useState(false);
  const [ renderNode, setRenderNode ] = useState(null);

  const [ idsImages, setIdsImages ] = useState([]);
  // const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();

  const ids_images = useSelector(state => state.task.ids_images);

  useMemo(() => {

    if (ids_images){
      if(typeof(ids_images) === 'string'){
        const numberArray = ids_images.split('remove')
        const numberString = numberArray.find(element => element);
        const number = parseInt(numberString);

        const newNumbers = idsImages.filter(item => item !== number);
        setIdsImages(newNumbers)
      }

      if(typeof(ids_images) === 'number') {
        setIdsImages([...idsImages, ids_images]);
      }
    }

  }, [ids_images]);

  const show = (e) => {
    setVisible(true);
    setIdsImages([]);
  };

  const hide = () => {
    setVisible(false);

    setIdsImages([]);
  };

  const handleSubmit = (d) => {

    const task_id = props.task;

    const data = {
      task_id,
      idsImages
    }

    dispatch(answerTaskRequest(data));
    setIdsImages([]);
    hide()
  };


  const actions = [{
    id: 'dialog-cancel',
    secondary: true,
    children: 'Cancelar',
    onClick: hide,
  }, {
    id: 'dialog-ok',
    primary: true,
    children: 'Criar',
    type: 'submit',
  }];

  return (
      <Container>

        <Button
          onClick={show}
          aria-controls="modal-task"
          className="btn-send"
          tooltipLabel="Entregar tarefa" tooltipPosition="top"
        >
          <i className="material-icons mt-plus">send</i>
        </Button>

        <Form

        onSubmit={handleSubmit}>
          <DialogContainer
            id="modal-task"
            visible={visible}
            actions={actions}
            onHide={hide}
            aria-labelledby="bar-top"
          >

            <Toolbar
              fixed
              colored
              title="Enviar tarefa"
              titleId="bar-top"
              className="barTask"
              nav={<Button icon onClick={hide}><MdClear/></Button> }
            />

              <section className="md-toolbar-relative content-task">

                <div className="d-flex-column">
                    {/* <Input
                      className="text-description"
                      name="description"
                      placeholder="Algum comentário?"
                      label="Comentário: (opcional)"
                      multiline
                    /> */}

                  <div className="block-file">
                      <p>Inserir tarefa: (obrigatório)</p>
                      <UploadMain />
                  </div>
                </div>

              </section>

          </DialogContainer>
        </Form>

      </Container>
  )
}
