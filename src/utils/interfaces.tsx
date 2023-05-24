
export interface iProps {
    name?: boolean;
    email?: boolean;
    password?: boolean;
    confirm?: boolean;

    name1?: string;
    namePlace?: string;

    email1?: string;
    emailPlace?: string;

    password1?: string;
    passwordPlace?: string;

    confirm1?: string;
    confirmPlace?: string;
}


export interface iButton {
    c?: string;
    bg?: string;
    title?: string;
    onClick?: () => void;
}


export interface iGlobal {
    actualName: string;
    setActualName: React.Dispatch<React.SetStateAction<string>>;

    actualConfirm: string;
    setActualConfirm: React.Dispatch<React.SetStateAction<string>>;

    actualPassword: string;
    setActualPassword: React.Dispatch<React.SetStateAction<string>>;

    actualEmail: string;
    setActualEmail: React.Dispatch<React.SetStateAction<string>>;
}



export interface iSocial {
    title?: string;
    c?: string;
    icon?: any;
}
