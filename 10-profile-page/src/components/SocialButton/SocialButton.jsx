import styled from 'styled-components';

const platformColors = {
  twitter: '#1da1f2',
  github: '#333333',
  linkedin: '#0077b5'
};

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
  background-color: ${(props) => platformColors[props.platform] || '#666'};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.7;
  }
`;

const platformLabels = {
  twitter: 'Twitter',
  github: 'GitHub',
  linkedin: 'LinkedIn'
};

function SocialButton({ platform, url }) {
  return (
    <StyledButton 
      href={url} 
      platform={platform}
      target="_blank"
      rel="noopener noreferrer"
    >
      {platformLabels[platform]}
    </StyledButton>
  );
}

export default SocialButton;
