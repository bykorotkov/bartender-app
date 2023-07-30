import React, { useState } from "react";
import styles from "./Personal.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const Personal = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useActions();

    console.log(login);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {},
        mode: "onBlur",
    });

    const submit = (data, e) => {
        console.log(data);
        e.preventDefault();
        login(username, password);
        reset();
    };
    const error = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>Авторизуйтесь</div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <form className={styles.FormContainer} onSubmit={handleSubmit(submit, error)}>
                <h1>Форма авторизации</h1>
                <label>
                    <input
                        type="text"
                        {...register("name", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа",
                            },
                        })}
                        aria-invalid={errors.name ? true : false}
                        value={username}
                    />
                </label>
                <div className={styles.ErrorHandler}>{errors?.name && <p>{errors?.name?.message || "Ошибка ввода"}</p>}</div>
                <label>
                    <input
                        type="number"
                        {...register("phone", {
                            required: "Поле обязательно к заполнению",
                            minLength: { value: 11, message: "Введите корректный номер телефона" },
                            maxLength: { value: 11, message: "Введите корректный номер телефона" },
                        })}
                        value={password}
                    />
                </label>
                <div className={styles.ErrorHandler}>{errors?.phone && <p>{errors?.phone?.message || "Ошибка ввода"}</p>}</div>

                <button
                    type="button"
                    onClick={() =>
                        reset({
                            phone: "",
                            name: "",
                        })
                    }
                >
                    Очистить форму
                </button>
                <button type="submit" disabled={!isValid}>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Personal;
