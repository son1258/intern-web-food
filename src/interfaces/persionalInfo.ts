import React from "react";
export interface PersionalInfo{
    name: string,
    occupation: string,
    employer: string,
    country: string
}

export interface ContactPersionalInfo{
    phone: string,
    email: string
}

type InfoType = keyof (PersionalInfo | ContactPersionalInfo);

export const handleInputChangeInfo = <T extends PersionalInfo | ContactPersionalInfo>(
    e: React.ChangeEvent<HTMLInputElement>, 
    data: T,
    setData: React.Dispatch<React.SetStateAction<T>>) => {
    const {name , value} = e.target;
    if(data.hasOwnProperty(name as InfoType)){
        setData({...data, [name]: value});
    }
};

