import React, { useEffect, useState, ElementConfig } from 'react';

import { withRouter } from 'react-router-dom';

import api from '~/services/api';

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

function TaskModalEdit(props){

  const id_current = props.match.params.id;

  const [ visible, setVisible ] = useState(true);
  const [ renderNode, setRenderNode ] = useState(null);

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ priority, setPriority ] = useState('');
  const [ deliveryDate, setDeliveryDate ] = useState('');

    console.log(title)
    console.log(description)
    console.log(priority)
    console.log(deliveryDate)
    console.log(props)

  const dispatch = useDispatch();

  useEffect(() => {


    async function loadTaskCurrent() {
      const response = await api.get(`tasks/${id_current}`);
      const data = response.data;

      setTitle(data.title)
      setDescription(data.description)
      setPriority(data.priorityValue)
      setDeliveryDate(data.deliveryDate)
      console.log(typeof(priority))
    }
    loadTaskCurrent();

  }, []);

  const show = (e) => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    props.history.goBack()
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
    children: 'Atualizar',
    type: 'submit',
  }];

  const priorityWrapper = { value: priority, color: '#e6d76a', label: priority }
console.log(priorityWrapper)
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

  if (props.isModal) {
  return (
      <Container>

        <form onSubmit={handleSubmit}>
          <DialogContainer
            id="modal-task"
            visible={visible}
            onHide={hide}
            actions={actions}
            aria-labelledby="bar-top"
            defaultVisibleTransitionable={true}
          >

            <Toolbar
              fixed
              colored
              title="Editar tarefa"
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
                      background: `${priority ? (priority.color ? priority.color : '#1992f5') : null }`,
                      color: 'white',
                      display: 'flex' })
                    }}
                    components={{ SingleValue }}
                    options={colourOptions}
                    value= {priority.value ? priority : priorityWrapper}

                  />
                  {console.log('aquiiii=>'+priority)}
                  <DatePicker
                    required
                    id="delivery-date"
                    label="Data de entrega"
                    onChange={(dateString, dateObject, event) => setDeliveryDate(dateString, dateObject, event.target.value)}
                    portal={true}
                    lastChild={true}
                    disableScrollLocking={true}
                    renderNode={renderNode}
                    defaultValue={deliveryDate}
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
}
export default withRouter(TaskModalEdit);
