export function createTaskRequest(data) {
  return {
    type: '@task/CREATE_TASK_REQUEST',
    payload: { data },
  };
}

export function createTaskSuccess(task) {
  return {
    type: '@task/CREATE_TASK_SUCCESS',
    payload: { task },
  };
}

export function createFailure() {
  return {
    type: '@task/CREATE_FAILURE',
  };
}
