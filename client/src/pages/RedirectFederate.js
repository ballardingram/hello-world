import React, { useEffect } from 'react';
import {  useQuery } from '@apollo/client';
import { QUERY_USER_WITH_TOKEN } from '../utils/queries';
import Auth from '../utils/auth';
import Account from './Account';



const RedirectFederate = () => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const { loading, error, data } =  useQuery(QUERY_USER_WITH_TOKEN, {variables: { idtoken:  params.get("idtoken")}});
    const userData = data?.userFromToken||{};
    //   console.log(useQuery(QUERY_USER_WITH_TOKEN, {
    //     variables: { token:  params.get("idtoken")}
    //   }));
    console.log(userData);
    Auth.login(userData);
    return (<Account/>);
}

export default RedirectFederate;