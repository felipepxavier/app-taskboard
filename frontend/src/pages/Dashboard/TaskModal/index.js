import React, { PureComponent, useState, ElementConfig } from 'react';

import PropTypes from 'prop-types'

import { Form, Input } from '@rocketseat/unform';

import { MdClear, MdFileUpload} from 'react-icons/md';

import {
  Button,
  DialogContainer,
  Divider,
  FileInput,
  TextField,
  SelectField,
  Toolbar,
  DatePicker,
  SVGIcon
} from 'react-md';

import Select, { components } from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import { createTaskRequest } from '~/store/modules/task/actions';

import { Container } from './styles';

export default function TaskModal(){

  const [ visible, setVisible ] = useState(false);
  const [ renderNode, setRenderNode ] = useState(null);

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
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const priorityValue = priority.value;
    const data = {
      title,
      description,
      priorityValue,
      deliveryDate
    }

    dispatch(createTaskRequest(data));
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

        <form onSubmit={handleSubmit}>
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
              nav={<Button icon onClick={hide}><MdClear/></Button>}
            />

              <section className="md-toolbar-relative">

                  <TextField
                    id="event-name"
                    placeholder="Título"
                    value={title}
                    onChange={(val, event) => setTitle(val, event.target.value)}
                    required
                    paddedBlock
                  />

                  <TextField
                    id="event-desc"
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(val, event) => setDescription(val, event.target.value)}
                    paddedBlock
                    rows={4}
                  />

                  <Select
                    placeholder="Prioridade"
                    className="selPriority"
                    onChange={handleChange}
                    styles={{ singleValue: (base) => ({
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
                    required
                    id="delivery-date"
                    label="Data de entrega"
                    selected={deliveryDate}
                    onChange={(dateString, dateObject, event) => setDeliveryDate(dateString, dateObject, event.target.value)}
                    portal={true}
                    lastChild={true}
                    disableScrollLocking={true}
                    renderNode={renderNode}
                  />

                  <div className="block-file">
                    <p>Insira uma imagem: (opcional)</p>
                    <FileInput
                      id="image-input-1"
                      accept="image/*"
                      name="images"
                      label="Inserir imagem"
                      primary
                      icon={<MdFileUpload />}
                    />
                  </div>

              </section>

          </DialogContainer>
        </form>


      </Container>
  )
}
