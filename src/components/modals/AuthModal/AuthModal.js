import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import Button from "../../common/Button";
import styles from "./styles.module.css";

const modalStyle = {
  content: {
    padding: 100,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AuthSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "username must be at least five character")
    .max(20, "username must be shorter then twenty character")
    .required("username is required"),
  password: Yup.string()
    .min(5, "password must be at least five character")
    .required("password is required"),
});

function AuthModal({ isOpen, closeModal, title, handleFormSubmit }) {
  return (
    <Modal style={modalStyle} isOpen={isOpen}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.close} onClick={closeModal}>
        X
      </h3>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={AuthSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <form>
            <Input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Username"}
              error={errors.username}
            />
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Password"}
              error={errors.password}
            />
            <Button style={styles.button} onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default AuthModal;
