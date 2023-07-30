import axios from "axios";
import { AppDispatch } from "../..";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../Components/models/IUser";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await axios.get<IUser[]>("./users.json");
            const mockUser = response.data.find((user) => user.username === username && user.password === password);
            if (mockUser) {
                localStorage.setItem("auth", "true");
                localStorage.setItem("username", mockUser.username);
                dispatch(AuthActionCreators.setIsAuth(true));
                dispatch(AuthActionCreators.setUser(mockUser));
            } else {
                dispatch(AuthActionCreators.setError("Wrong login or password"));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError("Login failed"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false));
    },
};
