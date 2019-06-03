import React from "react";
import styled from 'styled-components';

const SocialButtonStyledButton = styled.button`
  width: 100%;
  max-width: 150px;
`;


export default function SocialButton({type, onClick}) {
  return (
    <SocialButtonStyledButton onClick={onClick} className={`btn btn-social-icon btn-${type}`}>
      <span className={`fa fa-${type}`}></span>
    </SocialButtonStyledButton>
  );
}

