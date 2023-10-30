import { AxiosError, AxiosInstance } from 'axios';
import { TAppDispatch, TAppState } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProducts } from '../types/products';
import { APIRoute, AppRoute, NameSpace } from '../const';
import { toast } from 'react-toastify';
import { TProduct } from '../types/product';
import { TPostReview, TReview } from '../types/review';
import { TAuthData } from '../types/auth-data';
import { TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { TSignUpData } from '../types/sign-in-data';
import { redirectToRoute } from './actions';
import { TCategories } from '../types/categories';

type TExtra = {
  dispatch: TAppDispatch;
  state: TAppState;
  extra: AxiosInstance;
};

export const fetchProducts = createAsyncThunk<TProducts[], undefined, TExtra>(
  `${NameSpace.Products}/fetchProducts`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TProducts[]>(APIRoute.Products)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const fetchProduct = createAsyncThunk<TProduct, TProduct['id'], TExtra>(
  `${NameSpace.Product}/fetchProduct`,
  async (id, { extra: api }) => {
    const { data } = await api
      .get<TProduct>(`${APIRoute.Products}/${id}`)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const fetchCategories = createAsyncThunk<TCategories, undefined, TExtra>(
  `${NameSpace.App}/fetchCategories`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TCategories>(APIRoute.Categories);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<TProduct[], undefined, TExtra>(
  `${NameSpace.Favorites}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TProduct[]>(APIRoute.Favorites)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const addToFavorite = createAsyncThunk<TProduct, TProduct['id'], TExtra>(
  `${NameSpace.Favorites}/addFavorite`,
  async (id, { extra: api }) => {
    const { data } = await api.put<TProduct>(`${APIRoute.Favorites}/${id}`);

    return data;
  }
);

export const deleteFavorite = createAsyncThunk<
  TProduct,
  TProduct['id'],
  TExtra
>(`${NameSpace.Favorites}/deleteFavorite`, async (id, { extra: api }) => {
  const { data } = await api.delete<TProduct>(`${APIRoute.Favorites}/${id}`);

  return data;
});

export const fetchReviews = createAsyncThunk<TReview[], TReview['id'], TExtra>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (id, { extra: api }) => {
    const { data } = await api
      .get<TReview[]>(`${APIRoute.Reviews}/${id}`)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const postReview = createAsyncThunk<
  TReview[],
  { reviewData: TPostReview; id: TProduct['id'] },
  TExtra
>(
  `${NameSpace.Reviews}/postReview`,
  async ({ reviewData, id }, { extra: api }) => {
    const { data } = await api
      .post<TReview[]>(`${APIRoute.Reviews}/${id}`, reviewData)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const fetchLastReview = createAsyncThunk<TReview, undefined, TExtra>(
  `${NameSpace.LastReview}/fetchLastReview`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TReview>(APIRoute.LastReview)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const checkAuth = createAsyncThunk<TUser, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(APIRoute.Login);

    return data;
  }
);

export const signUp = createAsyncThunk<TUser, TSignUpData, TExtra>(
  `${NameSpace.User}/signUp`,
  async ({ name, email, password }, { extra: api }) => {
    const { data } = await api
      .post<TUser>(`${APIRoute.SignUp}`, { name, email, password })
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const login = createAsyncThunk<TUser, TAuthData, TExtra>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api
      .post<TUser>(APIRoute.Login, {
        email,
        password,
      })
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, TExtra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).catch((err: AxiosError) => {
      throw toast.error(err.message);
    });
    dropToken();
  }
);
