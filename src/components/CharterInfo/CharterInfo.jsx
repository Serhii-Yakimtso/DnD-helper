import { Field, Form, Formik } from "formik";
import css from "./CharterInfo.module.css";

export const CharterInfo = () => {
  return (
    <section className="section">
      <h2>Інформація про персонажа</h2>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <Field
            className={`${css.input} ${css.name}`}
            type="text"
            name="chartername"
            placeholder="ім'я персонажу"
          />
          <div className={css.flexContainer}>
            <Field
              className={css.input}
              type="text"
              name="mainclass"
              placeholder="клас"
            />
            <Field
              className={`${css.input} ${css.lvl}`}
              type="number"
              name="mainclasslevel"
              placeholder="рівн"
            />
          </div>
          <div className={css.flexContainer}>
            <Field
              className={css.input}
              type="text"
              name="subclass"
              placeholder="підклас"
            />
            <Field
              className={`${css.input} ${css.lvl}`}
              type="number"
              name="subclasslevel"
              placeholder="рівн"
            />
          </div>
          <Field
            className={css.input}
            type="text"
            name="race"
            placeholder="раса"
          />
          <Field
            className={css.input}
            type="text"
            name="race"
            placeholder="передісторія"
          />
          <Field
            className={css.input}
            type="text"
            name="race"
            placeholder="світогляд"
          />
          <Field
            className={css.input}
            type="number"
            name="race"
            placeholder="досвід"
          />
          <Field
            className={css.input}
            type="text"
            name="race"
            placeholder="ім'я гравця"
          />
        </Form>
      </Formik>
    </section>
  );
};
