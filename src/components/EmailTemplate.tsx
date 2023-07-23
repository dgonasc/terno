import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <p>{message}</p>
    <h3>{name}</h3>
    <h4>{email}</h4>
  </div>
);

export default EmailTemplate;