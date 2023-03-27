/* eslint-disable import/no-anonymous-default-export */
import { api } from "~/utils/api";
export default () => {
  const utils = api.useContext();
  const refetch = async () => {
    await utils.task.index.invalidate();
  };
  return refetch;
};
