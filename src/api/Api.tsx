import {Get, Post} from "./ApiBase";

const host = "http://localhost:8004/redemption_api";

export const apiAdminLogin = (params: any) => {
    return Post(`${host}/admin/admin/adminLogin`, params);
};

export const apiListUser = (params: any) => {
    return Post(`${host}/admin/user/listUser`, params);
};

export const apiListSurvey = (params: any) => {
    return Post(`${host}/admin/survey/listSurvey`, params);
};

export const apiSaveSurvey = (params: any) => {
    return Post(`${host}/admin/survey/saveSurvey`, params);
};

export const apiGetUserDetail = (params: any) => {
    return Post(`${host}/admin/user/getUserDetail`, params);
};

export const apiStatisticSurvey1 = () => {
    return Get(`${host}/admin/survey/statisticSurvey1`);
};

export const apiLoadUserStatistic = () => {
    return Get(`${host}/admin/user/loadUserStatistic`);
};