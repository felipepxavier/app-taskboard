import React, { PureComponent, useState, ElementConfig } from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import api from '~/services/api';

import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import PropTypes from 'prop-types'

// import TextField  from '~/components/TextField';

import { MdClear, MdFileUpload} from 'react-icons/md';

import {
  Button,
  DialogContainer,
  Divider,
  FileInput,
  SelectField,
  Toolbar,
  DatePicker,
} from 'react-md';

import Select, { components } from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import { createTaskRequest } from '~/store/modules/task/actions';

import { Container } from './styles';

import UploadMain from '~/components/UploadMain';

const schema = Yup.object().shape({
  title: Yup.string().required('Informe o título'),
  // email: Yup.string()
  //   .required('Informe seu e-mail'),

  // oldPassword: Yup.string(),
  // password: Yup.string(),
  //   // .min(6, 'No minimo 6 caracteres'),
  // confirmPassword: Yup.string()
  //   .when('password', (password, field) =>
  //   password ? field.required().oneOf([Yup.ref('password')], "As senhas devem ser iguais" ) : field),

});


export default function TaskModal(){

  const [ visible, setVisible ] = useState(false);
  const [ renderNode, setRenderNode ] = useState(null);

  const [ validDate, setValidDate ] = useState(false);
  const [ validPriority, setValidPriority] = useState(false);

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ priority, setPriority ] = useState('');
  const [ deliveryDate, setDeliveryDate ] = useState('');

  const dispatch = useDispatch();

  const show = (e) => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);

    setTitle('')
    setDescription('')
    setPriority('')
    setDeliveryDate('')

    setValidDate(false);
    setValidPriority(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!priority) {
      console.log('nao tem prioridade')
      setValidPriority(true)
      return
    }

    if (!deliveryDate) {
      setValidDate(true)
      return
    }

    const priorityValue = priority.value;
    const data = {
      title,
      description,
      priorityValue,
      deliveryDate
    }

    dispatch(createTaskRequest(data));
    setValidDate(false)
    setValidPriority(false)
    hide()
  };

  const handleChange = (priority) => {
    setPriority(priority);
  }


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

  const colourOptions = [
    { value: 'Baixa', color: '#e6d76a', label: 'Baixa' },
    { value: 'Média', color: '#e29828', label: 'Media' },
    { value: 'Alta', color: '#e22828', label: 'Alta' }
  ];

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
  );

  return (
      <Container>

        <Button
          icon
          onClick={show}
          aria-controls="modal-task"
          className="light-blue lighten-1"
          tooltipLabel="Crie uma tarefa!" tooltipPosition="top"
        >
          <i className="material-icons mt-plus">add</i>
        </Button>

        <Form schema={schema} onSubmit={handleSubmit}>
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
              title="Nova Tarefa"
              titleId="bar-top"
              className="barTask"
              nav={<Button icon onClick={hide}><MdClear/></Button> }
            />

              <section className="md-toolbar-relative content-task">

                <div className="d-flex-column part-one">

                  {/* <TextField
                      required
                      errorText="Informe o título"
                      id="event-name"
                      label="Título"
                      value={title}
                      onChange={(val, event) => setTitle(val, event.target.value)}
                      paddedBlock
                    /> */}

                    <Input
                      className="input-text"
                      name="title"
                      type="text"
                      placeholder="Título"
                      onChange={(val, event) => setTitle(val, event.target.value)}
                      value={title}
                    />


                  <Select
                      id="selectPri"
                      placeholder="Prioridade*"
                      className={validPriority ? 'selPriority' : null }
                      onChange={handleChange}
                      styles={ { singleValue: (base) => ({
                        ...base,
                        padding: 5,
                        borderRadius: 5,
                        background: priority.color,
                        color: 'white',
                        display: 'flex' })
                      }}
                      components={{ SingleValue }}
                      options={colourOptions}
                    />

                  <DatePicker
                    className="content-date"
                    required
                    errorText="Informe a data de entrega"
                    error={validDate}
                    id="delivery-date"
                    label="Data de entrega"
                    selected={deliveryDate}
                    onChange={(dateString, dateObject, event) => setDeliveryDate(dateString, dateObject, event.target.value)}
                    portal={true}
                    lastChild={true}
                    disableScrollLocking={true}
                    renderNode={renderNode}
                  />
                </div>

                <div className="d-flex-column">
                    <Input
                      className="text-description"
                      name="description"
                      placeholder="Descrição"
                      value={description}
                      onChange={(val, event) => setDescription(val, event.target.value)}
                      multiline
                    />

                  <div className="block-file">
                      <p>Insira uma imagem: (opcional)</p>
                      <UploadMain />
                  </div>
                </div>

              </section>

          </DialogContainer>
        </Form>

      </Container>
  )
}
