import { createStyles } from "@material-ui/core/styles";

export default createStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    width: 300,
    padding: 10,
    margin: "5px 5px"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    width: 220,
    padding: 10,
    margin: "5px 5px"
  },
  hiddenActionsContainer: {
    visibility: "hidden"
  },
  visibleActionsContainer: {
    visibility: "visible"
  },
  icon: {
    cursor: "pointer"
  }
});
