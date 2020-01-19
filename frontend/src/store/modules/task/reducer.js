import produce from 'immer';

const INITIAL_STATE = {
  current_task: null,
  editing_task: null,
  removing_task: null,
  ids_images: null,
  loading: false,
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/GET_IDS_IMAGES': {
        draft.ids_images = action.payload.data;
        console.log(draft.ids_images)
        break;
      }
      case '@task/CREATE_TASK_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/CREATE_TASK_SUCCESS': {
        draft.current_task = action.payload.task;
        draft.loading = false;
        break;
      }
      case '@task/UPDATE_TASK_SUCCESS': {
        draft.editing_task = action.payload.task;
        // draft.loading = false;
        break;
      }
      case '@task/DELETE_TASK_SUCCESS': {
        draft.removing_task = action.payload.task;
        // draft.loading = false;
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
