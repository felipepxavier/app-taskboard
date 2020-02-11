export function getIdsImages(data) {
  return {
    type: '@task/GET_IDS_IMAGES',
    payload: { data },
  };
}

export function createTaskRequest(data) {
  return {
    type: '@task/CREATE_TASK_REQUEST',
    payload: { data },
  };
}

export function answerTaskRequest(data) {
  return {
    type: '@task/ANSWER_TASK_REQUEST',
    payload: { data },
  };
}

export function updateTaskRequest(id_current, data) {
  return {
    type: '@task/UPDATE_TASK_REQUEST',
    payload: { id_current, data },
  };
}

export function deleteTaskRequest(id_current) {
  return {
    type: '@task/DELETE_TASK_REQUEST',
    payload: { id_current },
  };
}

export function createTaskSuccess(task) {
  return {
    type: '@task/CREATE_TASK_SUCCESS',
    payload: { task },
  };
}

export function answerTaskSuccess(task) {
  return {
    type: '@task/ANSWER_TASK_SUCCESS',
    payload: { task },
  };
}

export function updateTaskSuccess(task) {
  return {
    type: '@task/UPDATE_TASK_SUCCESS',
    payload: { task },
  };
}

export function deleteTaskSuccess(task) {
  return {
    type: '@task/DELETE_TASK_SUCCESS',
    payload: { task },
  };
}

export function createFailure() {
  return {
    type: '@task/CREATE_FAILURE',
  };
}

export function updateFailure() {
  return {
    type: '@task/UPDATE_FAILURE',
  };
}

export function deleteFailure() {
  return {
    type: '@task/DELETE_FAILURE',
  };
}
