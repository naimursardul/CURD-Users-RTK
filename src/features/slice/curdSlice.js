import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// post Action
export const create = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://657c60b0853beeefdb9950da.mockapi.io/curd-user",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      return result;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

// get Action
export const getAllUser = createAsyncThunk("getAllUser", async () => {
  const response = await fetch(
    "https://657c60b0853beeefdb9950da.mockapi.io/curd-user"
  );
  const result = response.json();
  return result;
});

// get single Action
export const getSingleUser = createAsyncThunk(
  "getSingleUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://657c60b0853beeefdb9950da.mockapi.io/curd-user/${id}`
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// delete Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://657c60b0853beeefdb9950da.mockapi.io/curd-user/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update Action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://657c60b0853beeefdb9950da.mockapi.io/curd-user/${data.id}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const curdSlice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    selectedUser: {},
    loading: false,
    error: null,
  },
  reducers: {
    updateSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(create.pending, (state) => {
        state.loading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        window.location.reload(true);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        window.location.reload(true);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = [action.payload];
          console.log("state.users", state.users);
        } else {
          state.users = undefined;
          state.error = "User not Available";
          console.log("state.error", state.error);
        }
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { updateSelectedUser } = curdSlice.actions;

export default curdSlice.reducer;
