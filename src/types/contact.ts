// Contact component types

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
}
