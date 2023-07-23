import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <p>{message}</p>
    <h3>{name}</h3>
    <h4>{email}</h4>
  </div>
);