import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import Button from "../../common/Button";
import styles from "./styles.module.css";

function BlogModal({ isOpen, closeModal, handleFormSubmit }) {
  return (
    <Modal isOpen={isOpen}>
      <h3 className={styles.close} onClick={closeModal}>
        X
      </h3>

      <div className={styles.body}>
        <Formik
          initialValues={{ title: "", post: "" }}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form>
              <input
                className={styles.title}
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={"Title"}
              />
              <textarea
                className={styles.post}
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
