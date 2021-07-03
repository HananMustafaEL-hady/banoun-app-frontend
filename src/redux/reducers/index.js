import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";
import categories from "./categories";
import specialist from "./specialist";
import userProfile from "./userProfile";
import posts from "./posts";
import Reviews from "./Reviews";
import reviewerComments from "./reviewerComments";
import event from "./event";
export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
  categories,
  specialist,
  userProfile,
  posts,
  Reviews,
  reviewerComments,
  event,
});
