import http from "../http-common";
import IGoalData from "../types/Goal";

const getAll = () => {
    return http.get<Array<IGoalData>>("/goals");
};

const get = (id: any) => {
    return http.get<IGoalData>(`/goals/${id}`);
};

const create = (data: IGoalData) => {
    return http.post<IGoalData>("/goals", data);
};

const update = (id: any, data: IGoalData) => {
    return http.put<any>(`/goals/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/goals/${id}`);
};

const GoalService = {
    getAll,
    get,
    create,
    update,
    remove,
};

export default GoalService;
