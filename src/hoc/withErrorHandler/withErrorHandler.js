import React, {useEffect, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return function WithErrorHandler(props) {
    const [error, setError] = useState(null);

    const icId = React.useMemo(() => {
      return axios.interceptors.response.use(res => res, error => {
        setError(error);
        throw error;
      })
    }, []);

    useEffect(() => {
      return () => {
        axios.interceptors.response.eject(icId);
      }
    }, [icId]);

    const errorDismissed = () => {
      setError(null);
    };

    return (
      <>
        <Modal show={!!error} closed={errorDismissed}>
          {error && (error.message || "Network error")}
        </Modal>
        <WrappedComponent {...props}/>
      </>
    );
  }
};

export default withErrorHandler;