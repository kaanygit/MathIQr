"use client"
export enum USER_DETAILS_TYPES{
    SET_USER_DETAILS="SET_USER_DETAILS",
    CLEAR_USER_DETAILS="CLEAR_USER_DETAILS"
}

export interface UserDetailsTS{
    classing:string;
    email:string;
    id:string;
    name:string;
    role:string;
    username:string;
}

export interface UserState{
    user:UserDetailsTS|null;
};

export interface SetUserAction{
    type:USER_DETAILS_TYPES.SET_USER_DETAILS,
    payload:UserDetailsTS
};
export interface ClearUserAction{
    type:USER_DETAILS_TYPES.CLEAR_USER_DETAILS
}

export type UserActionTypes=SetUserAction|ClearUserAction;
