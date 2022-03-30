import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../common/Button";
import styles from "./styles.module.css";

const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Required!"),
  post: Yup.string()
    .min(10, "Too Short!")
    .max(3900, "Too Long!")
    .required("Required!"),
});

function BlogModal({ isOpen, closeModal, handleFormSubmit }) {
  return (
    <Modal isOpen={isOpen}>
      <h3 className={styles.close} onClick={closeModal}>
        X
      </h3>

      <div className={styles.body}>
        <Formik
          initialValues={{ title: "", post: "" }}
          validationSchema={BlogSchema}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
            <form>
              <input
                className={errors.title ? styles.title_error : styles.title}
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={"Title"}
              />
              <textarea
                className={errors.post ? styles.post_error : styles.post}
                type="text"
                name="post"
                value={values.post}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={"Tell your story.."}
                cols={130}
                rows={30}
              />
              <Button style={styles.share} onClick={() => handleSubmit()}>
                Share
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default BlogModal;
