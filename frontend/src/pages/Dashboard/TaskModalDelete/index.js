import React, { useEffect, useState, ElementConfig } from 'react';

import { toast } from 'react-toastify';

import { withRouter } from 'react-router-dom';

import api from '~/services/api';

import history from '~/services/history';

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


import { useDispatch } from 'react-redux';
import { deleteTaskRequest } from '~/store/modules/task/actions';

// import { Container } from './styles';

function TaskModalDelete(props){

  const id_current = props.match.params.id;
  const title_current = props.location.state.title;
  // console.log(id_current)

  const [ visible, setVisible ] = useState(true);

  const dispatch = useDispatch();

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    props.history.goBack()
  };

  async function handleDelete() {
    dispatch(deleteTaskRequest(id_current));
    hide()
  }

  const actions = [];
  actions.push({ secondary: true, children: 'Não', onClick: hide });
  actions.push(<Button flat primary  onClick={handleDelete}>Sim</Button>);

  if (props.isModal) {
  return (

          <DialogContainer
            id="simple-action-dialog"
            visible={visible}
            onHide={hide}
            actions={actions}
            defaultVisibleTransitionable={true}
            title={`Deseja realmente deletar a tarefa "${title_current}"?`}
          >
          </DialogContainer>



  )
}
}
export default withRouter(TaskModalDelete);
