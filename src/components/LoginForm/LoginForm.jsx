import React from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  function serializeForm(formNode) {
    const { elements } = formNode;
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element;
        return { name, value };
      });
    console.log(data);
  }
   // Создаём ref, чтобы получить доступ к DOM-ноде формы
  const formRef = React.useRef(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formRef.current) {
      serializeForm(formRef.current);
    }
  }

  return (
    <form
      ref={formRef}
      id="login-form"
      action="/apply/"
      method="POST"
      className={styles.form}
      onSubmit={handleFormSubmit}
    >
           {" "}
      <label>
               {" "}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="@username"
          required
        />
             {" "}
      </label>
            <button type="submit">Войти</button>   {" "}
    </form>
  );
}
