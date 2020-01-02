import Loadable from "react-loadable";
import Loading from "../components/app/Loading";

export default (
  loader: any,
  loading: any = Loading
) => {
  return Loadable({
    loader,
    loading
  });
};
