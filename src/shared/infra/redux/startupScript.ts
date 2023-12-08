import { Store } from "redux"
import operators from "../../../modules/users/redux/operators"

function initialReduxStartupScript (store: Store) : void {
  //@ts-ignore
  store.dispatch(operators.getUserProfile(store.dispatch))
}

export {
  initialReduxStartupScript
}