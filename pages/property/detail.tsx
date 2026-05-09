import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';
import { Container, Stack } from '@mui/material';

const PropertyDetail = () => {
	const device = useDeviceDetect();

	console.log('Property component - page router');
	if (device == 'mobile') {
		return <Stack>Property Detail Mobile</Stack>;
	} else {
		return (
			<>
				<Container>Property Detail</Container>
			</>
		);
	}
};

export default withLayoutBasic(PropertyDetail);
