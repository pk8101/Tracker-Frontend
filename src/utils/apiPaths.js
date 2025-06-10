export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    LOGIN: "/user/login",
    REGISTER: "/user/register",
    VERIFY_OTP:"/user/verify-otp",
    GET_USER_INFO: "/user/user_data",
  },
  DASHBOARD: {
    GET_DATA: "/user/dashboard",
  },
  INCOME:{
    ADD_INCOME: "/income/income_create",
    GET_ALL_INCOME: "/income/income_details",
    DELETE_INCOME: (incomeId) =>  `/income/income_delete/${incomeId}`,
    DOWNLOAD_INCOME: `/income/income_download`,
  },
  EXPENSE:{
    ADD_EXPENSE: "/expense/expense_create",
    GET_ALL_EXPENSE: "/expense/expense_details",
    DELETE_EXPENSE: (expenseId) =>  `/expense/expense_delete/${expenseId}`,
    DOWNLOAD_EXPENSE: `/expense/expense_download`,
  },
  IMAGE: {
    UPLOAD_IMAGE: "/user/upload_image",
  },
};
