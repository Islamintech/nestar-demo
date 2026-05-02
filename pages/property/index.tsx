import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from '@mui/material';

const PropertyList = () => {
	console.log('Property component - page router');
	return (
		<div style={{ margin: '20px 0' }}>
			<Stack className={'container'}>PROPERTY LIST</Stack>
		</div>
	);
};

export default withLayoutBasic(PropertyList);
