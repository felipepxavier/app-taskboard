import produce from 'immer';

const INITIAL_STATE = {
  taskCurrent: null,
  loading: false,
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/CREATE_TASK_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/CREATE_TASK_SUCCESS': {
        draft.taskCurrent = action.payload.task;
        draft.loading = false;

        console.tron.log(draft.taskCurrent)
        break;
      }
      case '@task/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
