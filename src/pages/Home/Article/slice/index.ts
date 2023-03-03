import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../../../core/api';
import { ARTICLE, ARTICLES } from '../../../../core/config/urlConfig';
import { RootState } from '../../../../store/interfaces/store';
import { IThunkResponse } from '../../../../store/interfaces/thunk';
import { IArticleState } from '../interfaces';


export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (params, thunkAPI) => {
    try {
        return await getData(ARTICLES);
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.data)
    }
}, {
    condition: (params, thunkAPI) => {
        const { articles } = thunkAPI.getState() as RootState;
        const fetchStatus = articles?.fetchStatus;
        if (fetchStatus === 'fulfilled' || fetchStatus === 'pending') {
            // Already fetched or in progress, don't need to re-fetch
            return false
        }
    },
    dispatchConditionRejection: true
}
);

export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (articleId: string, thunkAPI) => {
    try {
        return await getData(`${ARTICLE}/${articleId}`);
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.data)
    }
}
    , {
        condition: (articleId, thunkAPI) => {
            const { articles } = thunkAPI.getState() as RootState;
            const fetchStatus = articles?.articleDetails[articleId]?.status;
            if (fetchStatus === 'fulfilled' || fetchStatus === 'pending') {
                // Already fetched or in progress, don't need to re-fetch
                return false
            }
        },
        dispatchConditionRejection: true
    }
);


export const initialState: IArticleState = {
    articles: [],
    fetchStatus: '',
    articleDetails: {}

};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        startFetching(state, action) {
            state.fetchStatus = 'pending';
        },
        setArticles(state, action) {
            state.articles = action.payload.result;
            state.fetchStatus = 'fulfilled'
        },
        endFetching(state, action) {
            state.fetchStatus = '';
        },
        startArticleFetching(state, action) {
            const { meta } = action as IThunkResponse;
            state.articleDetails[meta.arg] = { status: 'pending' };
        },
        setArticleDetails(state, action) {
            const { meta } = action as IThunkResponse;
            state.articleDetails[meta.arg] = action.payload.result[0]
            state.articleDetails[meta.arg].status = 'fulfilled';
        },
        endArticleFetching(state, action) {
            const { meta } = action as IThunkResponse;
            state.articleDetails[meta.arg].status = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, articleSlice.caseReducers.startFetching)
        builder.addCase(fetchArticles.fulfilled, articleSlice.caseReducers.setArticles)
        builder.addCase(fetchArticles.rejected, articleSlice.caseReducers.endFetching)
        builder.addCase(fetchArticleById.pending, articleSlice.caseReducers.startArticleFetching)
        builder.addCase(fetchArticleById.fulfilled, articleSlice.caseReducers.setArticleDetails)
    }
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
