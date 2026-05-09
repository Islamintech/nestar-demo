import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';
import { Container, Stack } from '@mui/material';
import { NextPage } from 'next';

const AgentList: NextPage = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return <Stack>Agent</Stack>;
	} else {
		return (
			<>
				<Container>Agent</Container>
			</>
		);
	}
};

export default withLayoutBasic(AgentList);
