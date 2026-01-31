import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
`;

const StatItem = styled.div`
  text-align: center;
  
  span {
    display: block;
  }
`;

const StatNumber = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-gray);
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: var(--medium-gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

function ProfileStats({ stats }) {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  return (
    <StatsContainer>
      <StatItem>
        <StatNumber>{formatNumber(stats.posts)}</StatNumber>
        <StatLabel>Posts</StatLabel>
      </StatItem>
      <StatItem>
        <StatNumber>{formatNumber(stats.followers)}</StatNumber>
        <StatLabel>Followers</StatLabel>
      </StatItem>
      <StatItem>
        <StatNumber>{formatNumber(stats.following)}</StatNumber>
        <StatLabel>Following</StatLabel>
      </StatItem>
    </StatsContainer>
  );
}

export default ProfileStats;


// install styled-components with npm styled-components
// create html elements with style
// use them throughout the app