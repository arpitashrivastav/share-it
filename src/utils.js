import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "./actions/settingsActions";

export const API = "https://replit.com/@arpitashrivast1/share-it";

export const useToken = () => {
  const token = useSelector((state) => state?.user?.token);
  return token;
};

export const useCloseSearchListner = () => {
  const dispatch = useDispatch();
  const handleOnClick = useCallback(
    () => dispatch(toggleSearch(false)),
    [dispatch]
  );
  useEffect(() => {
    document.addEventListener("click", handleOnClick);
    return () => {
      document.removeEventListener("click", handleOnClick);
    };
  }, [handleOnClick]);
};
