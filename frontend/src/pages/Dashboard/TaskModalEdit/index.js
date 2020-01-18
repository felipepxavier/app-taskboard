import React, { useEffect, useState, useMemo, ElementConfig } from 'react';

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
import { updateTaskRequest } from '~/store/modules/task/actions';

import { parseISO, isAfter, parse, setHours, format } from 'date-fns';

import { Container } from './styles';

import UploadMain from '~/components/UploadMain';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Informe o título'),
  description: Yup.string().required('Informe a descrição da tarefa')

});

function TaskModalEdit(props){

  const id_current = props.match.params.id;

  const [ visible, setVisible ] = useState(true);
  const [ renderNode, setRenderNode ] = useState(null);

  const [ validDate, setValidDate ] = useState(false);
  const [ validPriority, setValidPriority] = useState(false);

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ priority, setPriority ] = useState('');
  const [ deliveryDate, setDeliveryDate ] = useState('');

  const [ images, setImages ] = useState([]);

  const [ idsImages, setIdsImages ] = useState([]);

  const ids_images = useSelector(state => state.task.ids_images);

  useMemo(() => {
    if (ids_images){
      setIdsImages([...idsImages, ids_images]);
    }
  }, [ids_images]);

  const initialData = {
    title: title,
    description: description,
  };

  const dispatch = useDispatch();

  useEffect(() => {

    async function loadTaskCurrent() {
      const response = await api.get(`tasks/${id_current}`);
      const data = response.data;

      setTitle(data.task.title)
      setDescription(data.task.description)
      setPriority(data.task.priorityValue)
      setImages(data.images)

      const parsedDate = setHours(parse(data.task.deliveryDate, 'dd/MM/yyyy', new Date()), 18)

      setDeliveryDate(parsedDate)

    }
    loadTaskCurrent();

  }, []);

  const show = (e) => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    props.history.goBack()

    setValidDate(false);
    setValidPriority(false);
  };

   const handleSubmit = (d) => {

    if (!priority) {
      console.log('nao tem prioridade')
      setValidPriority(true)
      return
    }

    if (!deliveryDate) {
      setValidDate(true)
      return
    }

    let formattedDate = deliveryDate;

    if(typeof(formattedDate) !== 'string') {
      // console.log('nao é string')
      formattedDate = format(
        formattedDate,
        "dd/MM/yyyy"
      );
      setDeliveryDate(formattedDate)
    }

    const priorityValue = priority.value;
    const data = {
      ...d,
      priorityValue,
      deliveryDate: formattedDate,
      idsImages
    }
    dispatch(updateTaskRequest(id_current, data));
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
    children: 'Atualizar',
    type: 'submit',
  }];

  const priorityWrapper = { value: priority, color: '#e6d76a', label: priority }

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

        <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
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

              <section className="md-toolbar-relative content-task">

                <div className="d-flex-column part-one">

                    <Input
                      className="input-text"
                      name="title"
                      type="text"
                      placeholder="Título"
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
                      value= {priority.value ? priority : priorityWrapper}
                    />

                  <DatePicker
                    required
                    id="delivery-date"
                    className="content-date"
                    errorText="Informe a data de entrega"
                    error={validDate}
                    label="Data de entrega"
                    onChange={(dateString, dateObject, event) => setDeliveryDate(dateString, dateObject, event.target.value)}
                    portal={true}
                    lastChild={true}
                    disableScrollLocking={true}
                    renderNode={renderNode}
                    value={deliveryDate}
                  />
                </div>

                <div className="d-flex-column">
                    <Input
                      className="text-description"
                      name="description"
                      placeholder="Descrição"
                      multiline
                    />

                  <div className="block-file">
                      <p>Insira uma imagem: (opcional)</p>
                      <UploadMain images={images} />
                  </div>
                </div>

              </section>

          </DialogContainer>
        </Form>


      </Container>
  )
}
}
export default withRouter(TaskModalEdit);
