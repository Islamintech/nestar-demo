import React from 'react';
import { Stack, Box } from '@mui/material';

const TopAgentCard = () => {
	return (
		<Stack className={'top-agent-card'}>
			<Box className={'agent-img'}>
				<img src={'/img/profile/agent.png'} alt="agent" />
			</Box>
			<Box className={'agent-info'}>
				<strong>David</strong>
				<span>Real Estate Agent</span>
			</Box>
		</Stack>
	);
};

export default TopAgentCard;
