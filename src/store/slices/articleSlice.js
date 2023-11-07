import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ARTICLES } from "../../API";

// fetch articles thunk
export const fetchArticles = createAsyncThunk(
  "article-slice/fetchArticles",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(ARTICLES);
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// add article
export const addArticle = createAsyncThunk(
  "article-slice/addArticle",
  async (article, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(ARTICLES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// edit article
export const editArticle = createAsyncThunk(
  "article-slice/editArticle",
  async (article, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await fetch(ARTICLES, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// remove article
export const removeArticle = createAsyncThunk(
  "article-slice/removeArticle",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${ARTICLES}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article-slice",
  initialState: { loading: true, err: null, articles: [], singleArticle: {} },
  reducers: {
    getSingleArticle: (state, action) => {
      state.loading = true;
      let filteredArticle = state.articles.find(
        (article) => article.id == action.payload
      );
      state.singleArticle = filteredArticle;
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    // fetch articles
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
      state.err = null;
      state.articles = [];
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.err = null;
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.articles = [];
    });

    // add article
    builder.addCase(addArticle.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(addArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.articles.push(action.payload);
      state.err = null;
    });
    builder.addCase(addArticle.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // edit article
    builder.addCase(editArticle.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(editArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.articles.filter((item) => item.id === action.payload.id);
      state.articles.push(action.payload);
      state.err = null;
    });
    builder.addCase(editArticle.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });

    // remove article
    // builder.addCase(removeArticle.pending, (state) => {
    //   state.loading = true;
    //   state.err = null;
    // });
    builder.addCase(removeArticle.fulfilled, (state, action) => {
      // state.loading = false;
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
      state.err = null;
    });
    builder.addCase(removeArticle.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { getSingleArticle } = articleSlice.actions;

export default articleSlice.reducer;
