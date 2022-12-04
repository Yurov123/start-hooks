/*eslint-disable */
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withOutCallBack = useRef(0)
    const withCallBack = useRef(0)
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }
    const validateWithOutCallback = (data) => {
        console.log(data)
    }
    const validateWithCallback = useCallback((data) => {
        console.log(data)
    },[])
    useEffect(()=>{
        validateWithOutCallback(data)
        validateWithCallback(data)
    },[data])
    useEffect(() => {
        withOutCallBack.current++
    }, [validateWithOutCallback])
    useEffect(() => {
        withCallBack.current++
    }, [validateWithCallback])
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallBack:{withOutCallBack.current}</p>
            <p>Render withCallBack:{withCallBack.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={data.email || ""} name="email" onChange={handleChange} />
        </CardWrapper>
    );
};

export default UseCallBackExample;
